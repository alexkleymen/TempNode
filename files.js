const {readFileSync,writeFileSync, write, readFile} = require('fs')


const first = readFileSync('./content/first.txt','utf-8')

writeFileSync('./content/result.txt',`hello ${first}`)


console.log('start')
readFile('./content/first.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else console.log(data)
})
console.log('end')


