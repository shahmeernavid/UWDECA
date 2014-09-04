var _ = require('underscore'),
		fs = require('fs'),
		passport = require('passport'),
		User = db.model('User');

module.exports = function (app){


	app.use(passport.initialize());
	app.use(passport.session());

	// init each auth strategy file
	_.each(fs.readdirSync('./config/auth/'), function (file, idx){

		// only try js files
		// require works relative to current file's path
		if(file.match(/\.js$/)){
			require('./auth/' + file);
		}

	});

	passport.serializeUser(function(user, done) {
	  done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
	  User.find({where: {id: id}, attributes: ['id', 'name', 'email']}).complete(function(err, user) {
	  	// editable copy created to be consistent with authorize function
	  	// see ./config/auth/local.js 21
	    done(err, JSON.parse(JSON.stringify(user)));
	  });
	});

	console.log('Done setting up passport');

};