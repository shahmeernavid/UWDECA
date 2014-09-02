var env = process.env.type || 'development',
		config = require('./config/' + env),
		express = require('express'),
		app = express();

var go = function (db){

	// expose db object
	app.db = db;

	// set up routes
	//require('./routes')(app);

	app.get('/', function (req, res){res.send('shahmeer');});

	app.listen(config.port);

	console.log('Listening on port', config.port);

};

db = require('./db_init')(go);

