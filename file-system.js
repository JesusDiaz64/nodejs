const fs = require('node:fs');

const stats = fs.statSync('./archivo.txt');
console.log('Informacion del archivo.')
console.log('Nombre del archivo: ', stats.name);
console.log('Tamaño del archivo: ', stats.size);
console.log('Ultima vez modificado: ', stats.mtime);
console.log('Ultima vez accedido: ', stats.atime);
console.log(
    stats.isFile() ? 'Es un archivo' : 'No es un archivo',
    stats.isDirectory() ? 'Es un directorio' : 'No es un directorio',
    stats.isSymbolicLink() ? 'Es un enlace simbolico' : 'No es un enlace simbolico',
    stats.size > 0 ? 'El archivo no esta vacio' : 'El archivo esta vacio'
)