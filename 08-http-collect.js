var http = require('http');
var BufferList = require('bl');

var url = process.argv[2];
var collection = new BufferList();

http.get(url, function(response){
	response.on('data', function(data){
		collection.append(data);
	});
	response.on('end', function(){
		console.log(collection.toString().length);
		console.log(collection.toString());
	});
});