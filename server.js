var env = process.env.type || 'development',
		config = require('./config/' + env),
		express = require('express'),
		app = express();

var go = function (db){

	// expose db object
	app.db = db;

	// set up routes
	//require('./routes')(app);

	var User = db.model('User');
	User.build({name: 'Shahmeer', email: 'shahmeernavid@gmail.com', password: 'silvermoouse'})
	.save()
	.success(function (){console.log('good')})
	.error(function (){
		console.log(arguments);
	})

	app.listen(config.port);

	console.log('Listening on port', config.port);

};

db = require('./db_init')(go);

