const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    console.log('You rang?');
    res.end('You rang?');
});

io.on('connection', client => {
    console.log('A user has connected');
    client.on('click_button', () => console.log('Button was clicked'));
    client.on('notify_all', data => io.emit('notify_all', data));
});

server.listen(9001, () => console.log('Listening on 9001'));