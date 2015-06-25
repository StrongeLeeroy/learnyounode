var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
	response.on('error', function (errorMsg){
		console.error(errorMsg);
	});
	response.on('data', function(data){
		console.log(data.toString());
	});
})