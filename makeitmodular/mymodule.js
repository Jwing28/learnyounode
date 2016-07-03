//6 - async file system 
//in module pattern.

var fs = require('fs');
var path = require('path')
var result = function(dirName,ext,callback){
  fs.readdir(dirName,function(err,list){
    if(err){
        return callback(err);
    }
    list = list.filter(function (file) {
      return path.extname(file) === '.' + ext
    })

    callback(null, list)    
  });
};

module.exports = result;