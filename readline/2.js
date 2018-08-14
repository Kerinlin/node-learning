const readline = require('readline')
const fs = require('fs')
const rl = readline.createInterface({
  input: fs.createReadStream('access.log'),
  output: process.stdout
})

rl.on('line', (line) => {
  const arr=line.split(' ');
  console.log('访问时间'+arr[0],'访问地址'+arr[1]);
})