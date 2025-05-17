const fs = require('node:fs/promises');

fs.readFile('./archivo.txt', 'utf-8').then(text =>{
    console.log('Contenido del archivo: ', text);
});

console.log('Leyendo el archivo...');

fs.readFile('./archivo2.txt', 'utf-8').then(text =>{
    console.log('Contenido del archivo2: ', text);
});