import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col, CardDeck, Card } from 'react-bootstrap'
import './About.scss';

export default class About extends Component {
	render() {
		return (
			<Container className="containerContent">

				<Tab.Container id="left-tabs-example" defaultActiveKey="first" >
					<Row>
						<Col sm={2}>
							<Nav variant="pills" className="flex-column mt-2">

								<Nav.Item>
									<Nav.Link eventKey="first">Wordpress</Nav.Link>
								</Nav.Item>

								<Nav.Item>
									<Nav.Link eventKey="second">Boostrap</Nav.Link>
								</Nav.Item>

								{/* <Nav.Item>
									<Nav.Link eventKey="third">STANDUP</Nav.Link>
								</Nav.Item> */}
							</Nav>
						</Col>
						<Col sm={10}>
							<Tab.Content className="mt-3">

								<Tab.Pane eventKey="first">
									<h3>Сайты на CMS Wordpress / Bootstrap</h3>
									<img src="https://sergsmith64.ru/add/seamless background_1.jpg" />

									<CardDeck className="mt-4">
										<Card>1111</Card>
										<Card>2222</Card>
										<Card>3333</Card>
										<Card>4444</Card>
									</CardDeck>
								</Tab.Pane>

								<Tab.Pane eventKey="second">
									<h3>Сайты на Bootstrap / Flexbox</h3>
									<img src="https://sergsmith64.ru/add/seamless background_2.jpg" />
								</Tab.Pane>

								{/* <Tab.Pane eventKey="third">
									<h3>Это STANDUP STANDUP STANDUP</h3>
									<img src="https://sergsmith64.ru/add/seamless background_3.jpg" />
								</Tab.Pane> */}

							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>

			</Container>
		)
	}
}