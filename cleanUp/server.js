const http = require('http')
const route=require('./code.js')
const server=http.createServer(route);
server.listen(3000)
