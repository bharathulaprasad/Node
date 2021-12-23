const http= require('http');

const server = http.createServer((req,res)=>{
    console.log('request recieved');
    if(req.url==='/'){
        res.write('Hello World');
        res.write(JSON.stringify([1,2,3,4,5,6,7]))
        res.end();
    }
});

server.on('connection',(socket)=>{
    console.log('new connection started');
});

server.listen(3000);


