const h = require('http');
var url = require('url');
const server = h.createServer(
    function(req,response){
        let d = req.url;
        let d1 = url.parse(d,true).query;
        response.writeHead(200,{'Content':'text/html'});
        console.log(req.headers);
        if(d1.name = 'H')
        {
            response.write("<h1>"+d1.name+"</h1>");
        }else
            response.write(JSON.stringify({message:"Hello"}));
        response.end();
    }
)
server.listen(3000);