const http = require('http');
const port = process.env.PORT || 3000;
const app = require('./app')

const server = http.createServer(app);

//app is a function which is essentially executed whenever we got a new request

server.listen(port);
