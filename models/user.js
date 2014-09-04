var Sequelize = require('sequelize'),
		uuid = require('node-uuid'),
		crypto = require('crypto');

module.exports = function (db){

	var instanceMethods = new (function (){
		
		this.verifyPassword = function (password){
			if(!this.password || !this.salt){
				throw new Error('Could not compare passwords, salt or password not given.');
			}
			return crypto.createHmac('sha256', this.salt).update(password).digest('hex') === this.password;
		};

	})();
	
	db.define('User', {
		email: {type: Sequelize.STRING, validate: {isEmail: true, notNull: true}, unique: true},
		name: {type: Sequelize.STRING, default: 'user'},
		password: {
			type: Sequelize.STRING,
			validate: {
				notNull: true
			},
			set: function (input){
				var salt = this.salt;
				if(typeof salt == 'undefined'){
					salt = uuid.v4();
					this.setDataValue('salt', salt);
				}
				var hashedPassword = crypto.createHmac('sha256', salt).update(input).digest('hex');
				return this.setDataValue('password', hashedPassword);	
			}
		},
		salt: {type: Sequelize.UUID, default: uuid.v4(), validate: {isUUID: 4}}

	}, {
		instanceMethods: instanceMethods
	});

};