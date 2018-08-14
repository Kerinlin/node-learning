const path=require('path');
const express=require('express');
const session = require('express-session');
const MongoStore=require('connect-mongo')(session);
const flash=require('connect-flash');
const config=require('config-lite')(__dirname);
const app=express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.listen(config.port,()=>{
  console.log(`监听端口${config.port}`);
  
})