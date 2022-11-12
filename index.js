var http = require("http");
var fs = require("fs");

http.createServer((req, res)=>{
    
    var url = req.url;
    if(url === '' || url === '/'){
        fs.readFile("./index.html", (err, data)=>{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }
    else if(url === '/about'){
        fs.readFile("./about.html", (err, data)=>{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }else if(url === '/contact-me'){
        fs.readFile("./contact-me.html", (err, data)=>{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        }); 
    }else{
        fs.readFile("./404.html", (err, data)=>{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        }); 
    }
}).listen(8080);