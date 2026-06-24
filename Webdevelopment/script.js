// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

const greetings = [
  "ॐ नमः शिवाय – May Lord Shiva bless you with peace and prosperity.",
  "Har Har Mahadev! Wishing you a blissful Maha Shivratri.",
  "May the divine energy of Shiva guide you always."
];

io.on('connection', (socket) => {
  console.log('User connected');
  setInterval(() => {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    socket.emit('festivalMessage', randomGreeting);
  }, 5000);
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));
