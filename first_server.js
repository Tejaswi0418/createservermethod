var http = require('http');
// var http = require('hello');//module not found
var imp = require('./first_module');

http.createServer(function(req,res)
    {
          res.writeHead(200,{'Content-Type':'text/html'});
        res.write(imp.myDate());
        res.end();

   }).listen(2300);
//    localhost :30000
// http is called as module , javascript has built in modules 
// two types of modules 
//built-in and user defined
//response has to be end
//.listen(a) it is defined error
//.listen(65537); : ERR_SOCKET_BAD_PORT'
//listen(65.2); : .port should be >= 0 and < 65536. Received type number (65.2).