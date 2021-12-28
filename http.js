const http = require('http')


const server = http.createServer((req,res)=>{
    if(req.url = '/'){
        res.write('welcome to the home page')
    }
    if(req.url = '/about'){
        res.write('welcome to the about page')
    }
    res.end('Cant find what you looking for');
})

server.listen(5000);