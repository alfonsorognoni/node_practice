const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World!!\n');
});

server.listen(3000);
console.log('Servidor me http://localhost:3000');