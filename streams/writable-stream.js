const { Writable } = require('stream');

const writableStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});

// lee los datos
process.stdin.pipe(writableStream);