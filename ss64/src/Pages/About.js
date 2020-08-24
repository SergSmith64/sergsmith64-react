import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Youtubeform from '../Components/YoutubeForm';



export default class About extends Component {
	render() {
		return (
			<Container className="containerContent" style={{ maxWidth: '500px' }}>
				<h2 className="text-center">use Formik:</h2>
				<Youtubeform />
			</Container>
		)
	}
}
