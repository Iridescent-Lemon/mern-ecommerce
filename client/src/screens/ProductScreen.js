import { React, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import useFetch from '../custom/useFetch';

const ProductScreen = () => {
	const { id } = useParams();	
	
	const { loading, products } = useFetch(
		`https://server-mern.run-us-west2.goorm.io/api/products/${id}`
	);

	return (
		<>
			<Link className="btn btn-dark my-3" to="/">
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Image src={products.image} alt={products.name} fluid />
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>{products.name}</h2>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating value={products.rating} text={`${products.numReviews} reviews`} />
						</ListGroup.Item>
						<ListGroup.Item>
							<strong>Price:</strong> ${products.price}
						</ListGroup.Item>
						<ListGroup.Item>
							<strong>Description:</strong> {products.description}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<Row>
									<Col>Price: </Col>
									<Col>
										<h4>{products.price}</h4>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Status: </Col>
									<Col>
										<h5>
											{products.countInStock > 0
												? 'Available'
												: 'Out of Stock'}
										</h5>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									className="btn-block"
									type="button"
									disabled={products.countInStock === 0}
								>
									Add to Cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default ProductScreen;