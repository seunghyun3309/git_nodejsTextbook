const zlib = require('zlib');
const fs= require('fs');

const readStream = fs.createReadStream('./readme4.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./readme4.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream); // 파일을 읽은 후 gzip 방식으로 압축(readmt4.txt.gz)