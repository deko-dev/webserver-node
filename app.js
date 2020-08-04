const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-type': 'application/json' });
        let salida = {
                nombre: 'Deyser',
                apellido: 'Orozco',
                pais: 'Colombia',
                edad: 21,
                url: req.url
        }
            // res.write('Hola Mundo');
        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8080);

console.log("Escuchando el puerto 8080");