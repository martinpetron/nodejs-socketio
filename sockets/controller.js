


const socketController = (socket) => {

    console.log('Client connected', socket.id );
    
    socket.on('disconnect',() => {
        console.log('Client Disconnected', socket.id );
    });


    socket.on('enviar-mensaje', ( payload, callback ) => {

        //DEVUELVO info al cliente que envio la data
        const id = 123456;
        callback( id );

        //EMITO el mensaje a los demas clientes.
        socket.broadcast.emit('enviar-mensaje', payload);
    })

  }


module.exports = {
    socketController
}


