import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});

		console.log(`MongoDB connected: ${conn.connection.host}`.yellow.underline.bold);
	} catch (err) {
		console.error(`Error: ${err.message}`.red.underline.bold);
		process.exit(1);
	}
};

export default connectDB;