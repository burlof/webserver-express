/**
 * Ejercicio para crear un servidor HTTP sin utilizar el paquete Express
 */

const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'David',
            edad: 25,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        res.end(); //Esto hace que el programa sepa que ya terminamos de enviar la respuesta

    })
    .listen(8080);

console.log("Escuchando el puerto 8080");