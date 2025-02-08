const {Server} = require('socket.io') ;
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:[process.env.CLIENT_URL],
        methods: ['GET', 'POST']
    }
});

const userSocketMap = {};

getReceiverSocketId = (receiverId) => {
    console.log(userSocketMap)
    return userSocketMap[receiverId];
}


io.on('connection', (socket) => {
    console.log('Connected User', socket.id);
    const userId = socket.handshake.query.userId;
    // console.log(userId)
    // console.log(socket.handshake.query)
    if (userId && userId !== 'undefined') {  // Check if userId is valid
        userSocketMap[userId] = socket.id;
    }

    // console.log(userSocketMap);
    io.emit('getOnlineUsers',Object.keys(userSocketMap));
    
    socket.on('disconnect', () => {
        console.log('user disconnect', socket.id)
        delete userSocketMap[userId]
        io.emit('getOnlineUsers',Object.keys(userSocketMap));
    })

});
// console.log(userSocketMap);

module.exports = {app,server,io,getReceiverSocketId};