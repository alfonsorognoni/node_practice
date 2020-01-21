const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url == '/echo') {
        const body = [];
        // getting data
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        .on('end', () => {
            res.writeHead(200, {'Content-type': 'text/plain'});
            // body its a Buffer type string
            const bodyString = Buffer.concat(body).toString();
            res.end(bodyString);
        })
        // res.writeHead(200, {'Content-type': 'text/plain'});
        // res.end('Hello World!!\n');
    } else {
        res.statusCode = 404;
        res.end();
    }

});

server.listen(3000);
console.log('Servidor me http://localhost:3000');