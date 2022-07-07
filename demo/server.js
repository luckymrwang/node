import agent from 'skywalking-backend-js';
agent.start({
    serviceName: 'nodejs',
    serviceInstance: 'nodejs-instance-name',
    collectorAddress: '10.48.51.135:21594',
});

var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Hello World');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/')