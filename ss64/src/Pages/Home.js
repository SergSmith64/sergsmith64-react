import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';

export default class Home extends Component {
	render() {
		return (
			<>
				<CarouselBox />
				<Container>
					<h2 className="text-center m-4">Our Team</h2>
					<CardDeck className="m-4">
						<Card bg="light" border="primary" text="primary">
							<Card.Img
								variant="top"
								src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							/>
							{/* <Card.Body className="text-center"> */}
							<Card.Body>
								<Card.Title>Developers</Card.Title>
								<Card.Text>Это наша дружная команда во время работы</Card.Text>
								<Button variant="primary">Web team</Button>
							</Card.Body>
						</Card>
						<Card>
							{/* <Card.Img
								variant="top"
								src="https://images.pexels.com/photos/3868656/pexels-photo-3868656.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							/> */}
							<Card.Body>
								<Card.Title>Developers</Card.Title>
								<Card.Text>Это наша дружная команда во время работы</Card.Text>
								<Button variant="primary">Web team</Button>
							</Card.Body>
							<Card.Img
								variant="top"
								src="https://images.pexels.com/photos/3868656/pexels-photo-3868656.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							/>
						</Card>
						<Card>
							<Card.Img
								variant="top"
								src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							/>
							<Card.Body>
								<Card.Title>Developers</Card.Title>
								<Card.Text>Это наша дружная команда во время работы. Это наша дружная команда во время работы. Это наша дружная команда во время работы.</Card.Text>
								<Button variant="primary">Web team</Button>
							</Card.Body>
						</Card>
					</CardDeck>
				</Container>
				<p>ЭТО ТЕКСТ БЕЗ КОНТЕЙНЕРА. Это наша дружная команда во время работы. Это наша дружная команда во время работы. Это наша дружная...</p>
			</>
		)
	}
}