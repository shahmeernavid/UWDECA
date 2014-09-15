var express = require('express'),
		passport = require('passport'),
		UserController = require('./controllers/user'),
		SocialApiController = require('./controllers/social');
		// PostController = require('./controllers/post');


module.exports = function (app){

	// serve up static files
	app.use(express.static(__dirname + '/public'));

	// define API routes here
	app.post('/login', passport.authenticate('local'), UserController.login);

	// social apis
	app.get('/fb', SocialApiController.fb.get);
	// app.get('/twitter/:path', SocialApiController.twitter.get);


	// Posts
	// app.get('/posts', PostController.get);
	// app.post('/posts', PostController.post);
	// app.put('/posts', PostController.put);
	// app.delete('/posts', PostController.delete);


	// forward all other routes to frontend
	app.get('*', function (req, res){
		res.sendFile(__dirname + '/public/index.html');
	});
	
};