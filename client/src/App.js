import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Switch>
					<Route exact path="/" component={HomeScreen} />
					<Route path="/products/:id" children={<ProductScreen />}>
					</Route>
					</Switch>
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;