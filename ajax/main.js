const http=require('http');
const fs=require('fs');
// 创建一个web服务器
const server=http.createServer((req,res)=>{
    // 得到index.html?
     //http响应头
    if(req.url=='/'){
        const indexFile = fs.createReadStream('./index.html');
        res.writeHead(200,{
            'Content-Type':'text/html;charset=utf8'
        })
        indexFile.pipe(res);
    }else if(res.url=='/info'){
        const info ={
            "name":"zk",
            "desc":"骑白马"
        };
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        res.end(JSON.stringify(info));
    }
    // res.end('hello,你要的不是首页')
})

server.listen(8081);