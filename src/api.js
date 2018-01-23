import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

export function sendMessage(message) {
    socket.emit('chat message',message);
}