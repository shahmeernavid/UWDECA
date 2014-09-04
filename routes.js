var express = require('express'),
		passport = require('passport'),
		UserController = require('./controllers/user');


module.exports = function (app){

	// serve up static files
	app.use(express.static(__dirname + '/public'));

	// define API routes here
	app.post('/login', passport.authenticate('local'), UserController.login);



	// forward all other routes to frontend
	app.get('*', function (req, res){
		res.sendFile(__dirname + '/public/partials/index.html');
	});
	
};