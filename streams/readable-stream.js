const { Readable } = require('stream');
const readableStream = new Readable();

readableStream.push(`${0/0}`.repeat(10).concat(" Batman Batman \n"));
readableStream.push(null);// No more data

readableStream.pipe(process.stdout);