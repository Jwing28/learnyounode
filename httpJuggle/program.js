//given: 3 urls
//make a get request to each one
// but the data won't be streaming in one after another!!
//so we have to collect the data of all three and keep 
//track of when each one is done.
var http = require('http');
var url = [process.argv[2],process.argv[3],process.argv[4]];
var res = [];

url.forEach(function(link,index){
  //provide initial value for array.
  res[index] = null;
  //pass each index to http function
  juggle(index);        
});

//function takes in the index, makes a get request for that particular
//url in url array
//on end of receiving that request the res array value reassigned to result

//in order to handle multiple async events, which were kicked off in a loop, 
//we structure the on data and on end to apply to only 
//one get request at at time.
//incrementing count and checking for completion ensure that we 
//finish all requests and receive all data from each request.
function juggle(i) {
  http.get(url[i], function(request) {
    var result = "";    
    //streaming data from url
    request.on("data", function(data) {
      //collecting buffer data
      result += data;
    }).on("end", function() {
      //completed buffered data is result now
      res[i] = result;
      
      var count = 0;
      //if data isn't null count it b/c means we received all data
      //for that particular http get request
      for (var j = 0; j < res.length; j++) {
        if (res[j] !== null) count++;
      }
      //if count = res then we are done and we can log the result for that
      //particular http get request.
      if (count === res.length) {
        for (j = 0; j < res.length; j++) {
          console.log(res[j]);
        }
      }
    });
  });
}