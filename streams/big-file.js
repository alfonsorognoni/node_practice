const fs = require('fs'); // filesystem
const file = fs.createWriteStream('./big');
// Writeable
//  events: drain. Se dispara cuando emite datos, finish. Se dispara cuando termina de emitir, error. Se dispara cuando hay un error
//  functions: write, end
//
// git filter-branch --tree-filter 'rm -rf path/to/your/file' HEAD


for (let index = 0; index < 1e6; index++) {
    file.write('Estaba la Pájara Pinta sentadita en el verde limón. Con el pico cortaba la rama, con la rama cortaba la flor.');    
}

file.end();
