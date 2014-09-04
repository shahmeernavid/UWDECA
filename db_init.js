var _ = require('underscore'),
		fs = require('fs'),
		env = process.env.type || 'development',
		config = require('./config/env/' + env),
		Sequelize = require('sequelize'),
		db = new Sequelize(config.db.database, config.db.user, config.db.password, {
			host: config.db.host,
			port: config.db.port,
			dialect: 'postgres',
			native: true
		});

var load = function (){
	// init each model file
	// each model returns a function which takes a sequelize db 
	// object as an argument
	// name of js file must be the (name of model).toLowerCase()
	_.each(fs.readdirSync('./models/'), function (file, idx){
		// only try js files
		if(file.match(/\.js$/)){
			require('./models/' + file)(db);
		}
	});
};

module.exports = function (done){

	// quick db connection test
	db.authenticate().success(function (){
		console.log('Successfully connected to db.');
		load();
		console.log('Successfully defined models.');

		// creates tables if they don't exist
		// to modify table schema, use migrations
		db.sync().success(function (){
			console.log('Successfully defined models.');
			// expose db object globally
			global.db = db;
			done();
		}).error(function (err){
			throw new Error('Error syncing models ' + err);
		});
		
	}).error(function (err){	
		throw new Error('Error connecting to db: ' + err);
		done(null);
	});

};


