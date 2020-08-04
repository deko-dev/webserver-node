const express = require('express');
const server = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
server.set('view engine', 'hbs');


server.use(express.static(__dirname + '/public'))



server.get('/', (req, res) => {

    res.render('index', {
        nombre: 'Deyser'
    });

})

server.get('/about', (req, res) => {

    res.render('about');

})

server.get('/data', (req, res) => {
    let salida = {
        nombre: 'Deyser',
        apellido: 'Orozco',
        url: req.url
    }

    res.send(salida);

})

server.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));