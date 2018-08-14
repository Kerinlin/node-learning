const fs=require('fs');
const zlib = require('zlib');
const gzip=zlib.createGzip();
const inFile=fs.createReadStream('./a.txt');
const outFile = fs.createWriteStream('./a.txt.gz');
inFile.pipe(gzip).pipe(outFile);