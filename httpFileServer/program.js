//HTTP server that serves the same text file for a request
//fs.createReadStream() method to stream the file contents to the response.  
   
var fs = require('fs');
var http = require('http');
var server;
//created server
server = http.createServer(function(request, response) {
  //success status code sent back to client
  response.writeHead(200, {'content-type': 'text/plain'});
  //allows streaming file to be read and sent to be written as a response
  fs.createReadStream(process.argv[3]).pipe(response);
});

server.listen(process.argv[2]);