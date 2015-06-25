var fs = require('fs');
var path = require('path');

var listFiles = function(directory, extension, callback){
	fs.readdir(directory, function(err, fileList){
		if (err) return callback(err);

		var filtered = fileList.filter(function(file){
			return path.extname(file) === ('.' + extension);
		});
		callback(null, filtered);
	});
}

module.exports = listFiles;