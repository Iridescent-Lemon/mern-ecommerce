import mongoose, { Schema, model } from 'mongoose';

const productSchema = new Schema(
	{
		name: {
			type: String,
		},
		image: {
			type: String,
		},
		description: {
			type: String,
		},
		brand: {
			type: String,
		},
		category: {
			type: String,
		},
		price: {
			type: Number,
		},
		countInStock: {
			type: Number,
		},
		rating: {
			type: Number,
		},
		numReviews: {
			type: Number,
		},
	},
	{ timestamps: true }
);

const Products = new model('product', productSchema);

export default Products;