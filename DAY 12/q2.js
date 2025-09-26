//create array like todo as shown in lecture  say todos 
// display array data depends on path param 
// <url>/todos  --  display data in json format
//  <url>/todos/<id> -- display specific id data on web page 

const http = require('http');
const {Url} = require('url');
let todos = [
    {id : 1 , task : 'perform lab'},
    {id : 2 , task : 'make notes'},
    {id : 3 , task : 'listen lecture'}];
    const s = http.createServer(function(req,resp){
    const parsedUrl = new URL(Url,`http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;
    if(method == 'GET' && pathname == '/todos')
        {
        resp.writeHead(200,{'Content - Type':'text/json'});
        resp.end(JSON.stringify(todos));
    }

    })
    server.listen(3409,()=>(console.log("Server started")));