//Script to connect to database
const mongoose = require('mongoose');

const db = process.env.MONGODB_URL;

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log('Connection to Database successfully');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;