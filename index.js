const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    console.log(`Server is running at port 8080`);
    if (req.url == "/") {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html", "Content-Length": data.length });
            res.write(data);
            res.end();
        });
    } else if (req.url == "/about.html"){
        fs.readFile("about.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html", "Content-Length": data.length });
            res.write(data);
            res.end();
        });
    } else if (req.url == "/contact-me.html"){
        fs.readFile("contact-me.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html", "Content-Length": data.length });
            res.write(data);
            res.end();
        });
    } else {
        fs.readFile("404.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html", "Content-Length": data.length });
            res.write(data);
            res.end();
        });
    }
}).listen(8080);
