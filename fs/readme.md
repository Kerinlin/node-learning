性能优化

http createServer (req,res)=>{callback}

web 一切皆资源

web server 资源(html,css,json,img)



体积能够减少,gzip

1.在服务器端可以进行文件操作(读写，权限，压缩，解压缩)
2.res.writeHead(200,{})告诉浏览器需要解析的文件类型 带压缩的字段 unzip
3。减少传输体积，快，省带宽
