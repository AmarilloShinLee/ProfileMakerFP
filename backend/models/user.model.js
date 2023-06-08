// User Schema/Table. All of the user information is defined here

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
	firstname: {
		type: String,
		required: true,
		unique: false,
		trim: true,
		minlength: 3
	},
	lastname: {
		type: String,
		required: true,
		unique: false,
		trim: true,
		minlength: 3
	},
	email: {
		type: String,
		required: true,
		unique: false,
		trim: true,
		minlength: 3
	},
	password: {
		type: String,
		required: true,
		unique: false,
		trim: true,
		minlength: 3
	},
    desc: {
        type: String,
		required: true,
		unique: false,
		trim: false,
		minlength: 3
    },
    skills: {
        type: [],
        required: true
    },
	type: {
		type: String,
		required: true,
		unique: false,
		trim: true,
		minlength: 3
	}
}, {collection: 'profileMakerUser'});

// assign this model to the mongoose models
const User = mongoose.model('Users', userSchema);

// export this model
module.exports = User;