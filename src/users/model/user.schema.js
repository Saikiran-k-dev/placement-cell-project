import mongoose from "mongoose"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		passwordHash: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);


export const UserModel = mongoose.model('User', userSchema);

