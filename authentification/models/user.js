var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const findOrCreate =require('findorcreate-promise');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	},
	social_id : {
		type:String
	}
});

UserSchema.plugin(findOrCreate);

var User = module.exports = mongoose.model('User', UserSchema);

module.exports = User;