const io = require('socket.io')(3000);

io.on('connection', (socket) => {
    console.log('Usuario conectado');
    socket.emit('message', 'Bienvenido a la atención al cliente')
    socket.on('disconnect', () => {
        console.log('Atención no disponible');
    })
})