//Provides a way to create HTTP servers and make HTTP requests in Node.js. Example:

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
});

server.listen(8000);
