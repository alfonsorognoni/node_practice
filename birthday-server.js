const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url == '/') {
        const body = [];
        // getting data
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        .on('end', () => {
            res.writeHead(200, {'Content-type': 'application/json'});
            // body its a Buffer type string
            const days = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
            const bodyString = Buffer.concat(body).toString();
            const birthday = new Date(JSON.parse(bodyString).date);
            res.end(`Naciste un día ${days[birthday.getDay()]}`);
        })
    } else {
        res.statusCode = 404;
        res.end();
    }

});

server.listen(3001);
console.log('Servidor me http://localhost:3001');