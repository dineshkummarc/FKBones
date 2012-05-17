var static = require('node-static');
var fileServer = new static.Server('./webroot');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    });
}).listen(8080);