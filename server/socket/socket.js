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

io.on('connection', (socket) => {
    console.log('Connected User', socket.id)
});

module.exports = {app,server,io};