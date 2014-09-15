var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		uuid = require('node-uuid'),
		crypto = require('crypto');

var UserSchema = new Schema({
	email: {type: String, required: true},
	password: {type: String, required: true},
	salt: {type: String, required: true}
});

UserSchema.methods.verifyPassword = function (password){
	return crypto.createHmac('sha256', this.salt).update(password).digest('hex') === this.password;
};

mongoose.model('User', UserSchema);