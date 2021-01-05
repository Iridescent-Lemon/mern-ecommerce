import dotenv from 'dotenv';
dotenv.config();
import colors from 'colors';
import express from 'express';
import products from './models/products.js';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './config/connectDB.js';
const app = express();

connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.get('/', (req, res, next) => {
	res.json({ message: '🦆' });
});

app.get('/api/products', (req, res, next) => {
	res.json(products);
});

app.get('/api/products/:id', (req, res, next) => {
	const { id } = req.params;
	if (id) {
		const item = products.find((prod) => prod._id === id);
		item ? res.json(item) : res.json({ message: 'No Product' });
	}
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} mode on PORT: ${PORT}`.rainbow.bgWhite);
});