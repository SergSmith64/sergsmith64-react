import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class About extends Component {
	render() {
		return (
			<Container className="containerContent" style={{ maxWidth: '500px' }}>
				<h1 className="text-center">О нас, о конторе</h1>
			</Container>
		)
	}
}
