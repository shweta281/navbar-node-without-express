//server
const http= require("http");
const fs=require("fs");
const datahtml=fs.readFileSync("./navbar-app/navbar.html")
const datajs=fs.readFileSync("./navbar-app/navbar.js")
const datacss=fs.readFileSync("./navbar-app/navbar.css")
const datasvg=fs.readFileSync("./navbar-app/logo.svg")

const server=http.createServer((req, res) => {
    // console.log(req);
    //each time pg is reloaded this comes
    const url=req.url;
    console.log(url);
    if(url==='/'){
        res.writeHead(200, {"content-type": "text/html"});
        res.write(datahtml);
        res.end();
    }
    else if(url==='/navbar.css'){
        res.writeHead(200, {"content-type": "text/css"});
        res.write(datacss);
        res.end();
    }
    else if(url==='/navbar.js'){
        res.writeHead(200, {"content-type": "text/javascript"});
        res.write(datajs);
        res.end();
    }
    else if(url==='/logo.svg'){
        res.writeHead(200, {"content-type": "image/svg+xml"});
        res.write(datasvg);
        res.end();
    }
    else if(url==='/about'){
        res.writeHead(200, {"content-type": "text/html"});
        res.write("<h1>about page</h1>");
        res.end();
    }
    else{
        res.writeHead(404, {"content-type": "text/html"});
        res.write("<h1>404 resource not found</h1>");
        res.end();
    }
})

server.listen(5000, () => {
    console.log("Listening to 5000...")
});