// one way
// const helpers = require('./helpers')

// the other way
const { sum } = require("./helpers");

// core module of node
const http = require("http");

// create server is a method to create a server using http
const server = http.createServer((req, res) => {
  res.end("Created simple server using node");
});

// listenig to server
server.listen(3001);

const total = sum(2, 3);
console.log(total);
