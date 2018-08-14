const express = require('express');
const app = express()
const path = require('path')
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
// 启用中间件 路由中间件
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use((req,res,next)=>{
  console.log('1');
  next(new Error('warning'));
})

app.use((req, res, next) => {
  console.log('2');
//  res.status(200).end()
  next();
})
app.use('/', indexRouter);
app.use('/users', userRouter);

// 异常捕获
app.use((err,req,res,next)=>{
  console.log(err.stack);
  res.status(500).send('something wrong')
})
app.listen(3000);
