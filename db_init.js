var _ = require('underscore'),
		fs = require('fs'),
		env = process.env.TYPE || 'production',
		config = require('./config/env/' + env),  // TODO: don't put production config in version control
		mongoose = require('mongoose');


var loadSchemas = function (){
	var models = {};

	// init each model file
	// name of js file must be the (name of model).toLowerCase()
	_.each(fs.readdirSync('./models/'), function (file, idx){
		// only try js files
		if(file.match(/\.js$/)){
			models[file.replace('.js', '')] = require('./models/' + file);
		}
	});

};

module.exports = function (callback){

	// connect to db

	var connection = mongoose.connection;

	// error handling

	connection.on('error', function (err){
		throw new Error('Error connecting to mongo: ' + err);
	});

	connection.once('open', function (){
		console.log('Successfully connected to mongo.');
		loadSchemas();
		console.log('Successfully defined models.');
		callback();
	});

	mongoose.connect(config.db);


};


