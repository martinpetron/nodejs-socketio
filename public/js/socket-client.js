//Referencias del HTML
const lblOffline    = document.querySelector('#lblOffline');
const lblOnline     = document.querySelector('#lblOnline');
const txtMensaje    = document.querySelector('#txtMensaje');
const btnEnviar     = document.querySelector('#btnEnviar');


const socket = io();



socket.on('connect', () => {
//     console.log('Connected to the server');

    lblOffline.style.display    = 'none';
    lblOnline.style.display     = '';
});

socket.on('disconnect', () => {
    // console.log('Disonnected from the server');

    lblOnline.style.display     = 'none';
    lblOffline.style.display    = '';
});

socket.on('enviar-mensaje', ( payload ) => {
    console.log( payload );
})



btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123abc',
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload, ( id ) => {
        console.log( 'Desde el server', id );
    });

})