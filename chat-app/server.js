const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);

// CORS configuration to allow your frontend to connect
const corsOptions = {
  origin: 'http://localhost:5173', // Allow this frontend origin to make requests
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions)); // Apply CORS middleware

const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:5173', // Allow this frontend origin to use WebSockets
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
