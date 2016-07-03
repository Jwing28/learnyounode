//in this tutorial we are given a stream of incoming data
// we have to find the # of characters and log that
//as well as the string provided itself
//notice that we have to create a variable and concat
//the stream as it comes in
//then on 'end' we know we've received all the data
//we can simply log the concatted string.
var http = require('http');
var totalData = "";
http.get(process.argv[2],function(response){
    response.setEncoding('utf8').on('data',function(data){
        totalData += data;
    })
    .on('end',function(result){
        console.log(totalData.split("").length);
        console.log(totalData);
    });
});