const readline = require('readline')
const completer =(line)=>{
  // console.log(line);
  const command='npm';
  const subCommands=['help','init','install'];
  // 小于command时 补全
  if(line.length<command.length){
    return [command.indexOf(line)===0?[command]:[],line]
  }
  // 按空格 自动建议出来
  // 1.filter 的条件
  // 2.filter 拿出filter
  let hints=subCommands.filter(subCommands=>{
    const lineTrippedCommand = line.replace(command,' ').trim();
    return lineTrippedCommand && subCommands.indexOf(lineTrippedCommand)===0
  })
  if(hints.length === 1){
    hints=hints.map(function(hit){
      return [command,hit].join(' ');
    })
  }
  // 匹配到多个？或者没匹配到
  return [hints.length?hints:subCommands,line];
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer: completer
})

rl.prompt()