const express = require('express');
const cron = require('node-cron');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server, {});

// run every 6 hours
cron.schedule('0 */6 * * *', () => {
    const roomNumbers = Object.keys(roomInfo);
    const now = new Date().valueOf();

    roomNumbers.forEach((roomNumber) => {
        // if room has no activity for 6 hours (21600000 ms), close it
        const lastActivityTime = roomInfo[roomNumber]['lastActivityTime'];
        if (now - lastActivityTime >= 21600000) {
            closeRoom(roomNumber);
        }
    });
});

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.all('*', (req, res, next) => {
    res.sendFile('public/index.html', {root: __dirname});
});

// roomNumber as key, user array as value
const roomUsersMap = {};

// roomNumber as key, host as value
const roomHosts = {};

// roomNumber as key, room info as value
const roomInfo = {};

// roomNumber as key, player message map as value. In playerMessage map, message id as key, message as value
const roomPlayerMessages = {};

const userStatusBeforeDisconnect = {};

io.on('connection', (socket) => {

    socket.on('sendAlert', ({message}) => {
        emitAlert(message, socket, socket.roomNumber);
        setRoomLastActivityTime(socket.roomNumber);
    });

    socket.on('disconnecting', (payload) => {

        // 如果房间已经不存在，不做任何操作
        if (!roomUsersMap[socket.roomNumber]) {
            return;
        }

        const user = roomUsersMap[socket.roomNumber].find(u => u.username === socket.username);
        userStatusBeforeDisconnect[socket.roomNumber][socket.username] = {
            username: user.username,
            userRole: user.userRole,
            roomNumber: user.roomNumber,
            messageStatus: user.messageStatus,
        };

        if (!!roomUsersMap[socket.roomNumber]) {
            roomUsersMap[socket.roomNumber].forEach(u => {
                if (u.username === socket.username) {
                    u.connected = false;
                }
            });
        }

        broadcastUsersInRoom({roomNumber: socket.roomNumber});
    });

    socket.on('reconnectHost', async ({id, username, userRole, roomNumber}) => {
        if (!roomUsersMap[roomNumber]) {
            emitAlert('房间号不存在', socket);
        } else if (!!userStatusBeforeDisconnect[roomNumber][username]) {
            roomHosts[roomNumber] = {username, userRole, roomNumber, id: socket.id, connected: true};

            await onJoinRoomSuccess({username, userRole, roomNumber}, socket);
            broadcastUsersInRoom({roomNumber});
            io.to(roomNumber).emit('broadcast', {type: 'message', message: `${username}加入了`});
            io.to(roomNumber).emit('newUserJoined', {username, userRole, roomNumber, id: socket.id});
            setRoomLastActivityTime(socket.roomNumber);
        }
    });

    socket.on('autoJoin', async ({id, username, userRole, roomNumber}) => {
        if (!roomUsersMap[roomNumber]) {
            emitAlert('房间号不存在', socket);
        } else if (!!userStatusBeforeDisconnect[roomNumber][username]) {
            await onJoinRoomSuccess({username, userRole, roomNumber}, socket);
            broadcastUsersInRoom({roomNumber});
            io.to(roomNumber).emit('broadcast', {type: 'message', message: `${username}加入了`});
            io.to(roomNumber).emit('newUserJoined', {username, userRole, roomNumber, id: socket.id});
            setRoomLastActivityTime(socket.roomNumber);
        }
    });

    socket.on('attemptToJoin', ({id, username, userRole, roomNumber,}) => {
        if (!roomUsersMap[roomNumber]) {
            emitAlert('房间号不存在', socket);
        } else {
            attemptToJoin({id, username, userRole, roomNumber}, socket);
            setRoomLastActivityTime(socket.roomNumber);
        }
    });

    socket.on('approveAttemptToJoin', ({user, roomNumber}) => {
        io.to(user.id).emit('approveAttemptToJoin', user);
        setRoomLastActivityTime(socket.roomNumber);
    });

    socket.on('disapproveAttemptToJoin', ({user, roomNumber}) => {
        io.to(user.id).emit('disapproveAttemptToJoin');
        setRoomLastActivityTime(socket.roomNumber);
    });

    socket.on('join', async ({username, userRole, roomNumber}) => {

        if (!roomUsersMap[roomNumber]) {
            emitAlert('房间号不存在', socket);
        } else {
            await onJoinRoomSuccess({username, userRole, roomNumber}, socket);
            broadcastUsersInRoom({roomNumber});
            io.to(roomNumber).emit('broadcast', {type: 'message', message: `${username}加入了`});
            io.to(roomNumber).emit('newUserJoined', {username, userRole, roomNumber, id: socket.id});
            setRoomLastActivityTime(socket.roomNumber);
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
            userStatusBeforeDisconnect[roomNumber] = {};

            await onJoinRoomSuccess({username, userRole, roomNumber}, socket);
            broadcastUsersInRoom({roomNumber});
            io.to(roomNumber).emit('broadcast', {type: 'message', message: `${username}创建了房间${roomNumber}`});
            setRoomLastActivityTime(socket.roomNumber);
        }
    });

    socket.on('closeRoom', () => {
        if (socket.userRole === 'host') {
            closeRoom(socket.roomNumber);
            io.to(socket.roomNumber).emit('roomClosed');
        }
    });

    // 主持人开启新一轮短信
    socket.on('startNewRound', ({roomNumber}) => {

        const roundIndex = roomInfo[roomNumber].roundIndex + 1;

        roomInfo[roomNumber] = {
            roundIndex: roundIndex,
            isSendingMessage: true,
        };

        roomUsersMap[roomNumber].forEach((u) => {
            if (u.userRole === 'player') {
                u.messageStatus = 'waiting';
            }
        });

        const disconnectedUsersMap = userStatusBeforeDisconnect[roomNumber];

        Object.values(disconnectedUsersMap).forEach((u) => {
            if (u.userRole === 'player') {
                u.messageStatus = 'waiting';
            }
        });

        broadcastUsersInRoom({roomNumber});

        io.to(roomNumber).emit('startNewRound', roundIndex);
        setRoomLastActivityTime(socket.roomNumber);
    });

    socket.on('endCurrentRound', ({roomNumber}) => {
        roomInfo[roomNumber].isSendingMessage = false;

        roomUsersMap[roomNumber].forEach((u) => {
            if (u.userRole === 'player') {
                u.messageStatus = 'notStarted';
            }
        });

        const disconnectedUsersMap = userStatusBeforeDisconnect[roomNumber];

        Object.values(disconnectedUsersMap).forEach((u) => {
            if (u.userRole === 'player') {
                u.messageStatus = 'notStarted';
            }
        });

        broadcastUsersInRoom({roomNumber});

        io.to(roomNumber).emit('endCurrentRound');
        setRoomLastActivityTime(socket.roomNumber);
    });

    // 玩家发送短信，等待主持人审核
    socket.on('playerMessage', ({roomNumber, message}) => {
        if (!roomPlayerMessages[roomNumber]) {
            roomPlayerMessages[roomNumber] = {};
        }
        roomPlayerMessages[roomNumber][message.id] = message;

        roomUsersMap[roomNumber].forEach((u) => {
            if (u.userRole === 'player' && message.fromName === u.username) {
                u.messageStatus = 'sent';
            }
        });

        broadcastUsersInRoom({roomNumber});

        io.to(roomHosts[roomNumber].id).emit('playerMessage', message);
        setRoomLastActivityTime(socket.roomNumber);
    });

    // 主持人审核短信之后，暂存，之后一次性公布
    socket.on('playerMessageApprovedByHost', ({roomNumber, message}) => {
        roomPlayerMessages[roomNumber][message.id] = message;

        roomUsersMap[roomNumber].forEach((u) => {
            if (u.userRole === 'player' && message.fromName === u.username) {
                u.messageStatus = 'approved';
            }
        });

        const disconnectedUser = userStatusBeforeDisconnect[roomNumber][message.fromName];

        if (!!disconnectedUser) {
            disconnectedUser.messageStatus = 'approved';
        }

        broadcastUsersInRoom({roomNumber});

        io.to(getUsernameChannel(message.fromName)).emit('playerMessageApprovedByHost', message);
        setRoomLastActivityTime(socket.roomNumber);
    });

    // 审核不通过，通知玩家
    socket.on('playerMessageDisapprovedByHost', ({roomNumber, message}) => {
        roomPlayerMessages[roomNumber][message.id] = message;

        roomUsersMap[roomNumber].forEach((u) => {
            if (u.userRole === 'player' && message.fromName === u.username) {
                u.messageStatus = 'disapproved';
            }
        });

        const disconnectedUser = userStatusBeforeDisconnect[roomNumber][message.fromName];

        if (!!disconnectedUser) {
            disconnectedUser.messageStatus = 'disapproved';
        }

        broadcastUsersInRoom({roomNumber});

        io.to(getUsernameChannel(message.fromName)).emit('playerMessageDisapprovedByHost', message);
        setRoomLastActivityTime(socket.roomNumber);
    });

    socket.on('extraMessage', ({username, roomNumber}) => {
        const user = roomUsersMap[roomNumber].find((u) => {
            return u.username === username;
        });

        user.messageStatus = 'waiting';

        const disconnectedUser = userStatusBeforeDisconnect[roomNumber][username];

        if (!!disconnectedUser) {
            disconnectedUser.messageStatus = 'waiting';
        }

        broadcastUsersInRoom({roomNumber});

        io.to(user.id).emit('extraMessage');
        setRoomLastActivityTime(socket.roomNumber);
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
        setRoomLastActivityTime(socket.roomNumber);
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
        io.to(target).emit('alert', {message});
    } else {
        socket.emit('alert', {message});
    }
}

function broadcastUsersInRoom({roomNumber}) {
    io.to(roomNumber).emit('listUserInRoom', {roomNumber, users: roomUsersMap[roomNumber]});
}

async function onJoinRoomSuccess({username, userRole, roomNumber}, socket) {

    socket.username = username;
    socket.userRole = userRole;
    socket.roomNumber = roomNumber;

    const previousStatus = userStatusBeforeDisconnect[roomNumber][socket.username];

    let user = {username, userRole, roomNumber, connected: true, messageStatus: 'notStarted', id: socket.id};

    if (!!previousStatus) {
        user.messageStatus = previousStatus.messageStatus;
    }

    let existingUser = roomUsersMap[roomNumber].find(u => u.username === username);

    if (!!existingUser) {
        existingUser.id = user.id;
        existingUser.messageStatus = user.messageStatus;
        existingUser.connected = true;
    } else {
        roomUsersMap[roomNumber].push(user);
    }

    socket.messageStatus = user.messageStatus;

    await socket.join(roomNumber);
    await socket.join(getUsernameChannel(username));

    const previousMessages = roomPlayerMessages[roomNumber];

    socket.emit('joinSuccess', ({
        user,
        roomInfo: roomInfo[roomNumber]
    }));

    if (userRole === 'observer') {
        // observers can see published messages
        const publishedMessages = Object.values(previousMessages).filter(m => m.published);
        io.to(socket.id).emit('listPreviousMessages', {messages: publishedMessages});
    } else if (userRole === 'player') {
        // player can see messages they send and published messages they receive
        const messagesPlayerCanSee = Object.values(previousMessages).filter(m => {
            return (m.toName === username && m.published) || (m.fromName === username);
        });
        io.to(socket.id).emit('listPreviousMessages', {messages: messagesPlayerCanSee});
    } else {
        // host can see all messages
        const publishedMessages = Object.values(previousMessages);
        io.to(socket.id).emit('listPreviousMessages', {messages: publishedMessages});
    }
}

function getUsernameChannel(username) {
    return 'username_' + username;
}

function setRoomLastActivityTime(roomNumber) {
    if (!!roomInfo[roomNumber]) {
        roomInfo[roomNumber]['lastActivityTime'] = new Date().valueOf();
    }
}

function closeRoom(roomNumber) {
    delete roomUsersMap[roomNumber];
    delete roomPlayerMessages[roomNumber];
    delete roomHosts[roomNumber];
    delete roomInfo[roomNumber];
    delete userStatusBeforeDisconnect[roomNumber];
}

server.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
