//create server
//use through2-map to map over the incoming strea
//and make it uppercase
//then return that uppercase'd string as a response
//pipe makes this easy

//fyi npm install through2-map

var http = require('http');
var server;
var map = require('through2-map');

server = http.createServer(function(request, response) {
  if(request.method === 'POST'){
    request.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(response);      
  }
});
server.listen(process.argv[2]);