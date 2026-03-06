var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
// Health endpoint
app.get('/health', (req, res) => res.json({ status: 'ok', version: '2.0' }))
// retrigger
// preview retrigger v2
// preview retrigger v3
