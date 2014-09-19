var require('newrelic'),
		env = process.env.type || 'development',
		config = require('./config/env/' + env),
		express = require('express'),
		app = express(),
		port = process.env.PORT || config.port,
		cookieParser = require('cookie-parser'),
		bodyParser = require('body-parser'),
		session = require('express-session'),
		RedisStore = require('connect-redis')(session),
		redis = require('redis'),
		logger = require('morgan');


// db initialization asynchronous
var go = function (){

	app.use(logger('dev'));

	app.use(cookieParser());
	app.use(bodyParser.json());

	// body & cookie parser
	app.use(session({ 
		secret: 'shahmeernavid',
		store: new RedisStore({
			client: redis.createClient(config.redis.port, config.redis.host)
		}),
		resave: true,
		saveUninitialized: true
	}));

	// set up passport suthentication
	require('./config/passport')(app);

	// set up routes
	require('./routes')(app);

	app.listen(port);

	console.log('Listening on port', port);

};


// initializes db and exposes sequelize db object globally
require('./db_init')(go);

