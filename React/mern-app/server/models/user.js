import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: { type: 'String', require: true },
	password: { type: 'String', require: true },
	isLogedIn: { type: 'Bool' },
	dateAdded: { type: 'Date', default: Date.now, require: true },
});

export default mongoose.model('User', userSchema); 