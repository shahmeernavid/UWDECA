var Sequelize = require('sequelize');

module.exports = function (db){
	
	db.define('User', {
		_id: Sequelize.UUID,
		name: Sequelize.STRING,
		email: {
			type: Sequelize.STRING
		},
		superuser: { type: Sequelize.BOOLEAN, default: false },
		password: Sequelize.STRING
	});

};