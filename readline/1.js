const readline=require('readline')
// process 进程 stdin 输入
const rl=readline.createInterface({
  input: process.stdin,
  output:process.stdout
})

rl.question('please input a word:',(answer)=>{
  console.log('You has enter [%s]',answer.toUpperCase());
  rl.close()
})


