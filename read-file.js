const fs = require('node:fs');

fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log('Contenido del archivo: ', text);
});

console.log('Leyendo el archivo...');

fs.readFile('./archivo2.txt', 'utf-8', (err,text) => {
    console.log('Contenido del archivo2: ', text);
});