const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead
    (
        200,{'Content-Type':'text/html'});
    res.end("Hello from node js sever!");
});

    
    server.listen(8080);
