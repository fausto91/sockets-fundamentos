const {io}= require('../server');


io.on('connection',(client)=>{

    console.log('Usuario conectado');

    client.emit('enviarMensaje',{
        usuario:'Administrador',
        mensaje:'Bienvenido a esta aplicacion by CarmeloServer'
    });

    client.on('disconnect',()=>{
        console.log('Usuario deconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data,callback)=>{

        console.log(data);

        client.broadcast.emit('enviarMensaje',data);



        // if(mensaje.usuario){
        //     callback({
        //         resp:'TODO SALIO BIEN!'
        //     });
        // }else{

        //     callback({
        //         resp: 'TODO SALIO MAL!!!!!!!!!!!!!!'
        //     });
        // }


    });


});
