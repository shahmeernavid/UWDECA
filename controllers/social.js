var request = require('request'),
		facebook = {},
		twitter = {};


// Super ghetto
// FIXME: actually fetch token instead of hard coding it
// FIXME: better way to define fields
facebook.get = function (req, res){
	var path = req.query.path;

	if(path.indexOf('?') > -1){
		path += '&access_token=';
	}
	else {
		path += '?access_token=';	
	}

	path += process.env.fbAppToken || '1481161848809229|tvb8rrzrOGAlgjxm2bEhd3o0Z8c';

	request('https://graph.facebook.com/v2.1'+path, function(err, response){
		if(!err){
			res.json(JSON.parse(response.body));
		}
	});

};

module.exports = {
	fb: facebook,
	twitter: twitter
};