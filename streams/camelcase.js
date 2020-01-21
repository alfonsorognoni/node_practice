const { Transform } = require('stream');

const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    chunk.toString().split(/\s+/).forEach(element => {
        this.push(element.toLowerCase().charAt(0).toUpperCase().concat(element.toLowerCase().slice(1)));
    });
    callback();
  }
});

process.stdin.pipe(upperCaseTr).pipe(process.stdout);