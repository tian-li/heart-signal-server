const app = require('express')();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server, {});

app.use(express.static(path.join(__dirname, 'public')));

// roomNumber as key, user array as value
const roomUsersMap = {};

// roomNumber as key, host as value
const roomHosts = {};

// roomNumber as key, room info as value
const roomInfo = {}

// roomNumber as key, player message map as value. In playerMessage map, message id as key, message as value
const roomPlayerMessages = {};

function attemptToJoinAsPlayer({id, username, userRole, roomNumber},socket) {
    const host = roomHosts[roomNumber];

    io.to(host.id).emit('attemptToJoinAsPlayer', {id, username, userRole, roomNumber});
}

io.on('reconnect', (socket) => {
    // console.log('reconnect', socket);
})

io.on('connection', (socket) => {
    // console.log('a user connected');

    socket.on('disconnect', (payload) => {
        // console.log('user disconnected', payload);
        if (socket.userRole === 'host') {
            delete roomPlayerMessages[socket.roomNumber];
            delete roomPlayerMessages[socket.roomNumber];
            delete roomHosts[socket.roomNumber];
            delete roomInfo[socket.roomNumber];
        }
    });

    socket.on('attemptToJoinAsPlayer', ({id,
        username,
        userRole,
        roomNumber,}) => {
        if (!roomUsersMap[roomNumber]) {
            emitError('房间号不存在', socket);
        } else {
            attemptToJoinAsPlayer({id, username, userRole, roomNumber}, socket)
        }
    });

    socket.on('approveAttemptToJoinAsPlayer', ({user, roomNumber}) => {
       io.to(user.id).emit('approveAttemptToJoinAsPlayer', user);
    });

    socket.on('disapproveAttemptToJoinAsPlayer', ({user, roomNumber}) => {
        emitError('未通过', socket, user.id)
       // io.to(user.id).emit('disapproveAttemptToJoinAsPlayer', user);
    });

    socket.on('join', async ({username, userRole, roomNumber}) => {
        if (!roomUsersMap[roomNumber]) {
            emitError('房间号不存在', socket);
        } else {
            await onJoinRoomSuccess({username, userRole, roomNumber}, socket);
            io.to(roomNumber).emit('broadcast', {type: 'message', message: `${username}加入了`});
            io.to(roomNumber).emit('newUserJoined', {username, userRole, roomNumber, id: socket.id});
        }
    });

    socket.on('joinAsPlayerSuccess', async ({username, userRole, roomNumber}) => {
        socket.userRole = userRole;
        socket.roomNumber = roomNumber;
        await onJoinRoomSuccess({username, userRole, roomNumber}, socket);
        io.to(roomNumber).emit('broadcast', {type: 'message', message: `${username}加入了`});
        io.to(roomNumber).emit('newUserJoined', {username, userRole, roomNumber, id: socket.id});
    });

    socket.on('create', async ({username, roomNumber}) => {
        if (roomUsersMap[roomNumber]) {
            emitError('房间号已经在', socket);
        } else {
            const userRole = 'host';

            roomHosts[roomNumber] = {username, userRole, roomNumber, id: socket.id};
            roomPlayerMessages[roomNumber] = {};
            roomUsersMap[roomNumber] = [];
            roomInfo[roomNumber] = {
                roundIndex: 0
            };

            socket.userRole = userRole;
            socket.roomNumber = roomNumber;

            await onJoinRoomSuccess({username, userRole, roomNumber}, socket);
            io.to(roomNumber).emit('broadcast', {type: 'message', message: `${username}创建了房间${roomNumber}`});
        }
    });


    // 主持人开启新一轮短信
    socket.on('startNewRound', ({roomNumber}) => {
        const roundIndex = roomInfo[roomNumber].roundIndex + 1;

        roomInfo[roomNumber] = {
            roundIndex: roundIndex
        };

        io.to(roomNumber).emit('startNewRound', roundIndex);
    });

    socket.on('endCurrentRound', ({roomNumber}) => {
        io.to(roomNumber).emit('endCurrentRound');
    })

    // 玩家发送短信，等待主持人审核
    socket.on('playerMessage', ({roomNumber, message}) => {
        if (!roomPlayerMessages[roomNumber]) {
            roomPlayerMessages[roomNumber] = {};
        }
        roomPlayerMessages[roomNumber][message.id] = message;
        // console.log('roomNumber', roomNumber);
        // console.log('message', message);
        // console.log('roomHosts', roomHosts);
        io.to(roomHosts[roomNumber].id).emit('playerMessage', message);
        // socket.emit(playerMessage, message)
    });

    // 主持人审核短信之后，暂存，之后一次性公布
    socket.on('playerMessageApprovedByHost', ({roomNumber, message}) => {
        roomPlayerMessages[roomNumber][message.id] = message;

        // console.log('roomPlayerMessages in room', roomPlayerMessages[roomNumber]);
        io.to(message.fromId).emit('playerMessageApprovedByHost', message);
    });

    // 审核不通过，通知玩家
    socket.on('playerMessageDisapprovedByHost', ({roomNumber, message}) => {
        roomPlayerMessages[roomNumber][message.id] = message;

        io.to(message.fromId).emit('playerMessageDisapprovedByHost', message);
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
    });
});

function sendMessageToTargetPlayer(roomNumber, messagesToPublish) {
    messagesToPublish.forEach((message) => {
        const targetUser = roomUsersMap[roomNumber].find(user => user.id === message.toId);
        io.to(targetUser.id).emit('publishPendingMessages', [message]);
    });

}

function sendMessagesToObservers(roomNumber, messagesToPublish) {
    const observersInRoom = roomUsersMap[roomNumber].filter(user => user.userRole === 'observer');

    observersInRoom.forEach(user => {
        io.to(user.id).emit('publishPendingMessages', messagesToPublish);
    });
}

function emitError(message, socket, target) {
    if(!!target) {
        io.to(target).emit('error', {message})
    } else {
        socket.emit('error', {message});
    }
}


async function onJoinRoomSuccess({username, userRole, roomNumber}, socket) {
    roomUsersMap[roomNumber].push({username, userRole, roomNumber, id: socket.id});

    await socket.join(roomNumber);
    socket.emit('listUserInRoom', {roomNumber, users: roomUsersMap[roomNumber]});

    const previousMessages = roomPlayerMessages[roomNumber];

    const publishedMessages = Object.values(previousMessages).filter(m => m.published);

    // console.log('previousMessages', previousMessages)

    io.to(socket.id).emit('listPreviousMessages', {messages: publishedMessages})
}


server.listen(80, () => {
    // console.log(`Example app listening at http://localhost:${3000}`);
});

//
// const options = { /* ... */ };
// const io = require('socket.io')(options);
//
// io.on('connection', socket => { /* ... */ });
//
// io.listen(3000);

// const app = require('express')();
// const server = require('http').createServer(app);
// const options = { /* ... */ };
// const io = require('socket.io')(server, options);
//
// io.on('connection', socket => { /* ... */ });
//
// server.listen(3000);