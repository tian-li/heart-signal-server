const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server, {});

const port = process.env.PORT || 443;

app.use(express.static(path.join(__dirname, 'public')));

app.all('*', (req, res, next) => {
    res.sendFile('public/index.html', {root: __dirname});
});

// roomNumber as key, user array as value
const roomUsersMap = {};

// roomNumber as key, host as value
const roomHosts = {};

// roomNumber as key, room info as value
const roomInfo = {}

// roomNumber as key, player message map as value. In playerMessage map, message id as key, message as value
const roomPlayerMessages = {};

io.on('connection', (socket) => {
    // console.log('a user connected');

    socket.on('sendAlert', ({message}) => {
        emitAlert(message, socket, socket.roomNumber)
    });

    socket.on('disconnecting', (payload) => {
        if (socket.userRole === 'host') {
            delete roomUsersMap[socket.roomNumber];
            delete roomPlayerMessages[socket.roomNumber];
            delete roomHosts[socket.roomNumber];
            delete roomInfo[socket.roomNumber];
        } else {
            const socketId = socket.id;

            if (!!roomUsersMap[socket.roomNumber]) {
                roomUsersMap[socket.roomNumber] = roomUsersMap[socket.roomNumber].filter(u => u.id !== socketId);
            }
        }
    });

    socket.on('attemptToJoin', ({id, username, userRole, roomNumber,}) => {
        if (!roomUsersMap[roomNumber]) {
            emitAlert('房间号不存在', socket);
        } else {
            attemptToJoin({id, username, userRole, roomNumber}, socket)
        }
    });

    socket.on('approveAttemptToJoin', ({user, roomNumber}) => {
        io.to(user.id).emit('approveAttemptToJoin', user);
    });

    socket.on('disapproveAttemptToJoin', ({user, roomNumber}) => {
        io.to(user.id).emit('disapproveAttemptToJoin');
    });

    socket.on('join', async ({username, userRole, roomNumber}) => {
        if (!roomUsersMap[roomNumber]) {
            emitAlert('房间号不存在', socket);
        } else {
            await onJoinRoomSuccess({username, userRole, roomNumber}, socket);
            socket.userRole = userRole;
            socket.roomNumber = roomNumber;
            broadcastUsersInRoom({roomNumber}, socket);
            io.to(roomNumber).emit('broadcast', {type: 'message', message: `${username}加入了`});
            io.to(roomNumber).emit('newUserJoined', {username, userRole, roomNumber, id: socket.id});
        }
    });

    socket.on('create', async ({username, roomNumber}) => {
        if (roomUsersMap[roomNumber]) {
            emitAlert('房间号已经在', socket);
        } else {
            const userRole = 'host';

            roomHosts[roomNumber] = {username, userRole, roomNumber, id: socket.id};
            roomPlayerMessages[roomNumber] = {};
            roomUsersMap[roomNumber] = [];
            roomInfo[roomNumber] = {
                roundIndex: 0,
                isSendingMessage: false,
            };

            socket.userRole = userRole;
            socket.roomNumber = roomNumber;

            await onJoinRoomSuccess({username, userRole, roomNumber}, socket);
            broadcastUsersInRoom({roomNumber}, socket);
            io.to(roomNumber).emit('broadcast', {type: 'message', message: `${username}创建了房间${roomNumber}`});
        }
    });

    // 主持人开启新一轮短信
    socket.on('startNewRound', ({roomNumber}) => {

        const roundIndex = roomInfo[roomNumber].roundIndex + 1;

        roomInfo[roomNumber] = {
            roundIndex: roundIndex,
            isSendingMessage: true,
        };

        io.to(roomNumber).emit('startNewRound', roundIndex);
    });

    socket.on('endCurrentRound', ({roomNumber}) => {
        roomInfo[roomNumber].isSendingMessage = false;
        io.to(roomNumber).emit('endCurrentRound');
    })

    // 玩家发送短信，等待主持人审核
    socket.on('playerMessage', ({roomNumber, message}) => {
        if (!roomPlayerMessages[roomNumber]) {
            roomPlayerMessages[roomNumber] = {};
        }
        roomPlayerMessages[roomNumber][message.id] = message;
        io.to(roomHosts[roomNumber].id).emit('playerMessage', message);
    });

    // 主持人审核短信之后，暂存，之后一次性公布
    socket.on('playerMessageApprovedByHost', ({roomNumber, message}) => {
        roomPlayerMessages[roomNumber][message.id] = message;

        io.to(message.fromName).emit('playerMessageApprovedByHost', message);
    });

    // 审核不通过，通知玩家
    socket.on('playerMessageDisapprovedByHost', ({roomNumber, message}) => {
        roomPlayerMessages[roomNumber][message.id] = message;

        io.to(message.fromName).emit('playerMessageDisapprovedByHost', message);
    });


    // 短信结束，公布结果
    socket.on('publishPendingMessages', (roomNumber) => {
        const messagesInRoom = roomPlayerMessages[roomNumber];
        const messagesToPublish = [];

        Object.keys(messagesInRoom).forEach(messageId => {
            const message = messagesInRoom[messageId];

            if (message.approvalStatus === 'approved' && !message.published) {
                const updatedMessage = {...message, published: true};
                messagesToPublish.push(updatedMessage);

                messagesInRoom[messageId] = updatedMessage;
            }
        });

        sendMessageToTargetPlayer(roomNumber, messagesToPublish);
        sendMessagesToObservers(roomNumber, messagesToPublish);
        emitAlert('公布消息成功', socket);
    });
});

function attemptToJoin({id, username, userRole, roomNumber}, socket) {
    const host = roomHosts[roomNumber];

    io.to(host.id).emit('attemptToJoin', {id, username, userRole, roomNumber});
}

function sendMessageToTargetPlayer(roomNumber, messagesToPublish) {
    messagesToPublish.forEach((message) => {
        const targetUser = roomUsersMap[roomNumber].find(user => user.username === message.toName);
        io.to(targetUser.id).emit('publishPendingMessages', [message]);
    });
}

function sendMessagesToObservers(roomNumber, messagesToPublish) {
    const observersInRoom = roomUsersMap[roomNumber].filter(user => user.userRole === 'observer');

    observersInRoom.forEach(user => {
        io.to(user.id).emit('publishPendingMessages', messagesToPublish);
    });
}

function emitAlert(message, socket, target) {
    if (!!target) {
        io.to(target).emit('alert', {message})
    } else {
        socket.emit('alert', {message});
    }
}

function broadcastUsersInRoom({roomNumber}, socket) {

    const usersInRoom = roomUsersMap[roomNumber];
    console.log('usersInRoom', usersInRoom)

    io.to(roomNumber).emit('listUserInRoom', {roomNumber, users: roomUsersMap[roomNumber]});
}

async function onJoinRoomSuccess({username, userRole, roomNumber}, socket) {
    roomUsersMap[roomNumber].push({username, userRole, roomNumber, id: socket.id});

    await socket.join(roomNumber);
    await socket.join(username);

    const previousMessages = roomPlayerMessages[roomNumber];

    socket.emit('joinSuccess', ({
        user: {username, userRole, roomNumber, id: socket.id},
        roomInfo: roomInfo[roomNumber]
    }))

    if (userRole !== 'player') {
        const publishedMessages = Object.values(previousMessages).filter(m => m.published);
        io.to(socket.id).emit('listPreviousMessages', {messages: publishedMessages})
    } else {
        const messagesPlayerCanSee = Object.values(previousMessages).filter(m => {
            return (m.toName === username && m.published) || (m.fromName === username)
        });

        io.to(socket.id).emit('listPreviousMessages', {messages: messagesPlayerCanSee})
    }
}

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
