import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
	return (
		<>
			<h1 className="mb-2">Latest Products</h1>
			<Row>
				{products.map((product) => {
					return (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3} className="my-3">
							<Product {...product} />
						</Col>
					);
				})}
			</Row>
		</>
	);
};

export default HomeScreen;