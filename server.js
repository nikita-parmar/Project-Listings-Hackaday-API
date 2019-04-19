// Require is like importing a module (some functionality)
const path = require("path");
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 4000;

// Creating a server and making it listen for requests a given port.
const server = http.createServer(app);
server.listen(port);
