var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, fileList){
	if (err) throw err;
	var list = fileList.filter(function(file){
		return path.extname(file) == ('.' + process.argv[3]);
	});
	list.forEach(function(item){
		console.log(item);
	})
})