const readline = require('readline')
// process 进程 stdin 输入
const fs = require('fs')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt:'OHAI>'
})

const prehits =`This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See \`npm help json\` for definitive documentation on these fields
and exactly what they do.

Use \`npm install <pkg> --save\` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
`
console.log(prehits);
let index=0;
let questions =['name','age','sex'];
const defaultAnswers=['name','age','none'];
const answers=[];
function init() {
    if (questions.length==index){
      createPackageJSON();
      rl.close();
      return;
    }
  let defaultAnswer = defaultAnswers[index];
  let question = questions[index] + ':(' + defaultAnswers[index] + ':)'
  rl.question(question,(answer) => {
    answers.push(answer || defaultAnswer);
    index++;
    init();
  })
}
function createPackageJSON() {
  // 准备json
  let map={};
  questions.forEach((question,index)=>{
    map[question]=answers[index];
  });
  fs.writeFileSync('./package.json',JSON.stringify(map,null,4));
}
init();
