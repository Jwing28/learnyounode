//Create a TCP time server.
//no http 

//listen on provided port
//net method creates server to listen to events
//when event occurs we are returned the socket object
//which can be used to write to or end
//we end with the requested output of time and date

//we use the Date object to create the requested formatting
var net = require('net');  
var server = net.createServer(function (socket) {  
// socket handling logic  
var date = new Date();
var fulldate = date.getFullYear() + "-" + "0" + (date.getMonth() + 1) + "-"+ "0" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + "\n";
    socket.end(fulldate);
});  
server.listen(process.argv[2]);

//Resulting output: "2016-07-03 22:05" 
//socket object allows us to stop listening and provide an
//end response to our server stoppage.