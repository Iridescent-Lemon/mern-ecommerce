import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = (props) => {
	const {
		_id,
		name,
		image,
		description,
		brand,
		category,
		price,
		countInStock,
		rating,
		numReviews,
	} = props;

	return (
		<Card className="py-3 p-3 rounded">
			<Link to={`/products/${_id}`}>
				<Card.Img variant="top" src={image} />
			</Link>
			<Card.Body>
				<Link to={`/products/${_id}`}>
					<Card.Title as="div">
						<strong>{name}</strong>
					</Card.Title>
				</Link>
				<Card.Text  ssaa>
					<Rating value={rating} text={`${numReviews} reviews`} />
				</Card.Text>
				<Card.Text as="h3">${price}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;