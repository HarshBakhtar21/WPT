const h = require('http');
h.createServer(function(req,res){
    res.write(200,{'Content-type':'text/plain'});
    res.end('Hello World');
}).listen(8080);