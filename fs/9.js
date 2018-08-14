const fs = require('fs');
const path=require('path');
const getFilesInDir=function (dir) {
    // console.log(path.resolve(dir));
    let results=[path.resolve(dir)];
    console.log(results);
    const files=fs.readdirSync(dir,'utf8');
    // console.log(files);
    files.forEach(file=>{
        // console.log(file);
        file=path.resolve(dir,file); 
        console.log(file);     
        const stat=fs.statSync(file);
        if(stat.isFile()){
            results.push(file)
        }else if(stat.isDirectory()){
            results = results.concat(getFilesInDir(file));        
        }      
    })
    return results;  
}
const files = getFilesInDir('./txt')