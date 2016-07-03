//create get request
//on data, log data
//on error log the error

var http = require('http');

http.get(process.argv[2],function(response){
    response.setEncoding('utf8').on('data',function(data){
        console.log(data);
    }).on('error',console.error);
});