var http = require('http'),
	url  = require('url');

var server = http.createServer(function(request, response){
	var parsedUrl = url.parse(request.url, true);
	var urlPath = parsedUrl.pathname;
	var queryDate = new Date(parsedUrl.query.iso);
	var dateObj = {};

	response.writeHead(200, {'Content-Type': 'application/json'});

	if (urlPath === '/api/parsetime') {
		dateObj.hour = queryDate.getHours();
		dateObj.minute = queryDate.getMinutes();
		dateObj.second = queryDate.getSeconds();
	} else if (urlPath === '/api/unixtime') {
		dateObj.unixtime = queryDate.getTime();
	}
	response.end(JSON.stringify(dateObj));
});

server.listen(process.argv[2]);