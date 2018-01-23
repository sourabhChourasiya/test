const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
//     res.send('<h1>Hello world</h1>');
// });

io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        console.log('chat message event: ' + msg);
    });
});

const port = 8000;
http.listen(port, function(){
    console.log('listening on *--:',port);
});


