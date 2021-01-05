import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
	isAdmin: {
		type: Boolean,
		required: true,
		default: false,
	},
	name: {
		type: String,
		required: true,
	},
});

const User = model('user', userSchema);

export default User;