const http = require("node:http");
const fs = require("node:fs");
const url = require("node:url");
// fs.readFile("./index.html", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(data);
//   });
//   server.listen(3000);
// });

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;
    case "/about":
      fs.readFile("./about.html", (err, data) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;
    case "/contact-me":
      fs.readFile("./contact-me.html", (err, data) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;
    default:
      fs.readFile("./404.html", (err, data) => {
        if (err) {
          throw err;
        }
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;
  }
});
server.listen(3000);
