var myModule = require('./06-make-it-modular-module.js');

myModule(process.argv[2], process.argv[3], function(err, data){
	if (err) throw err;
	data.forEach(function(item){
		console.log(item);
	})
});