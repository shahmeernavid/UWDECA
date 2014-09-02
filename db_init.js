var _ = require('underscore'),
		fs = require('fs'),
		env = process.env.type || 'development',
		config = require('./config/' + env),
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
	_.each(fs.readdirSync('./models/'), function (file, idx){
		// only try js files
		if(file.match(/\.js$/)){
			try{
				require('./models/' + file)(db);
			}
			catch(e){
				throw new Error(['Failed to initialize model:', file, e].join(' '));
			}
		}
	});
};

module.exports = function (done){
	// quick db connection test
	db.authenticate().success(function (){
		console.log('Successfully connected to db.');
		load();
		db.sync({force: true}).success(function (){
			console.log('Successfully defined models.');
			done(db);
		}).error(function (err){
			throw new Error('Error syncing models ' + err);
		})
		
	}).error(function (err){	
		throw new Error('Error connecting to db: ' + err);
		done(null);
	});

};


