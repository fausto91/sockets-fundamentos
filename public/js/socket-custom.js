        var socket = io();
        socket.on('connect',function(){

            console.log('Conectado al servidor');

        });

        // Escuchar sucesos 
        socket.on('disconnect',function(){

            console.log('perdimos connexion con el servidor');

        });

        // Enviar informacion
        socket.emit('enviarMensaje', {
           usuario:'Fausto',
            mensaje:'Hola Mundo',
            time:  '25/08/2020  21:45'
        },function(resp){
            console.log('respuesta server: ', resp);
        });
        

        //Escuchar Informacion
        socket.on('enviarMensaje', function(mensaje){

            console.log('Servidor', mensaje);

        });

  