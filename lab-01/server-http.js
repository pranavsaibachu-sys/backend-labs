// Part 1: plain server using Node's built-in http module
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello');
});

server.listen(PORT, () => {
  console.log(`http server listening on port ${PORT}`);
});
