var tunnel = require('tunnel-ssh');

var config = {
	host: 'db001.example.com',
	username: 'root',
	dstPort: 3306,
	localPort: 3406
};

var server = tunnel(config, function (error, result) {
	console.log('connected');
});