/**
 * Ejercicio para crear un servidor HTTP utilizando el paquete Express
 * Para desplegar el programa en Heroku tenemos que decirle en el package como iniciarlo (start)
 */

const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers.js')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); //app.use y app.get chocan entre si (NO UTILIZARLOS JUNTOS)

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
app.set('view engine', 'hbs');



//Estamos configurando una solicitud GET cuando el path sea un / (slash)
// app.get('/', function(req, res) {
//     // res.send('Hola Mundo')
//     let salida = {
//         nombre: 'David',
//         edad: 25,
//         url: req.url
//     }
//     res.send(salida)
// });

//Para HTTP sin usar HBS
// app.get('/data', function(req, res) {
//     res.send('Hola Data')
// });

//Utilizando HTTP con HBS
app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'David'
    });
});

app.get('/about', function(req, res) {
    res.render('about', {})
})


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})