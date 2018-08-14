const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
const server = http.createServer((req, res)=>{
    // 判断浏览器是否支持ungzip
    // console.log(req.headers['accept-encoding']);
    if (req.headers['accept-encoding'].indexOf('gzip')!=-1){
        gzip=zlib.createGunzip();
        res.writeHead(200,{
            'Content-Encoding':'gunzip',
            'Content-Type': 'text/plain;charset=utf8'
        });
        fs.createReadStream('a.txt.gz').pipe(gzip).pipe(res)
    }else{
        res.writeHead(200, {
            'Content-Type': 'text/plain;charset=utf8'
        });
        fs.createReadStream('a.txt.gz').pipe(res) 
    }
})
server.listen(1235);