var net = require('net');

var server = net.createServer(function(socket){
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate()
	var hour = date.getHours();
	var minute = date.getMinutes();
	date = year + '-' + fillZeros(month) + '-' + fillZeros(day) + ' ' + fillZeros(hour) + ':' + fillZeros(minute) + '\n';
	socket.end(date);
});

server.listen(process.argv[2]);
console.log('Listening on port ' + process.argv[2]);

function fillZeros(number){
	if (Number(number) < 10) {
		return '0' + number;
	} else {
		return number;
	}
}