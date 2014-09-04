var passport = require('passport'),
		exports = {};

exports.login = function (req, res){
	res.json(req.user);
};

module.exports = exports;