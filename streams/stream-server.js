const fs = require('fs');

const server = require('http').createServer();
// readable streams
// events: data => recibe datos, end => termina de recibir datos, error
// functions: pipe, unpipe, read, push
//
server.on('request', (req, res) => {
    const src = fs.createReadStream('./big');
    src.pipe(res);
});

server.listen(3000);