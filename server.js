var http = require('http'),
    fs = require('fs'),
    util = require('util'),
    url = require('url');

var server = http.createServer(function(req, res) {
    if(url.parse(req.url).pathname == '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        var rs = fs.createReadStream('index.html');
        util.pump(rs, res);
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.end('404');
    }
});

server.listen(7777);

console.log('Server running at http://127.0.0.1:7777/');