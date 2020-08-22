import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class Blog extends Component {
	render() {
		return (
			<Container className="containerContent" style={{ maxWidth: '500px' }}>
				<h1 className="text-center">Это блог.....</h1>
			</Container>
		)
	}
}
