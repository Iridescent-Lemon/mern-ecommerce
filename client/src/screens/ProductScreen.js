import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = () => {
	const [prodItem, setProductItem] = useState('');
	const { id } = useParams();

	useEffect(() => {
		const product = products.find((prod) => prod._id === id);
		setProductItem(product);
	}, [id]);

	return (
		<>
			<Link className="btn btn-dark my-3" to="/">
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Image src={prodItem.image} alt={prodItem.name} fluid />
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>{prodItem.name}</h2>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating
								value={prodItem.rating}
								text={`${prodItem.numReviews} reviews`}
							/>
						</ListGroup.Item>
						<ListGroup.Item>
							<strong>Price:</strong> ${prodItem.price}
						</ListGroup.Item>
						<ListGroup.Item>
							<strong>Description:</strong> {prodItem.description}
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
										<h4>{prodItem.price}</h4>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Status: </Col>
									<Col>
										<h5>
											{prodItem.countInStock > 0
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
									disabled={prodItem.countInStock === 0}
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