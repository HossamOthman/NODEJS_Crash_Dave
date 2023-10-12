const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf8'});


// rapidly copying large files
const ws = fs.createWriteStream('./files/new_lorem.txt');

/*
// copy data using a listener
rs.on('data', (dataChunk) => {
    ws.write(dataChunk);
})
*/

// other way to copy using piping data streams
rs.pipe(ws);
