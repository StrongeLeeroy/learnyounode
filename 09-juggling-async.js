var http = require('http');
var bl = require('bl');

var callbackCount = 0;
var responses = [];


for (var i = 0; i < process.argv.length - 2; i++){
	httpGet(i);
}

function httpGet(index){
	http.get(process.argv[index + 2], function(response){
		response.pipe(bl(function(err, data){
			responses[index] = data.toString();
			callbackCount++;
			if (callbackCount === 3) {
				printResults(responses);
			};
		}));
	});
}

function printResults(resultArray){
	resultArray.forEach(function(item){
		console.log(item);
	});
}