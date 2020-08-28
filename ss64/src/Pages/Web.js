import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col, CardDeck, Card, Button } from 'react-bootstrap'
import './Web.scss';
import webPhoto1 from '../assets/sergsmith64-specii-i-pryanosti.jpg';
import webPhoto2 from '../assets/sergsmith64-singulf.jpg';
import webPhoto3 from '../assets/sergsmith64-skupka-radioloma-drm64.jpg';

export default class Web extends Component {
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
									{/* <img src="https://sergsmith64.ru/add/seamless background_1.jpg" /> */}

									<CardDeck className="mt-4">

										<Card>
											<Card.Img
												variant="top"
												src={webPhoto1}
											/>
											<Card.Body>
												<Card.Title>111 специй</Card.Title>
												<Card.Text>Оптовая продажа специй и пряностей</Card.Text>
												<Button variant="primary">Посетить</Button>
											</Card.Body>
										</Card>

										<Card>
											<Card.Img
												variant="top"
												src={webPhoto2}
											/>
											<Card.Body>
												<Card.Title>SinGulf</Card.Title>
												<Card.Text>Перевозка нефти из Ирака и Кувейта. Компания из Сингапура.</Card.Text>
												<Button variant="primary">Посетить</Button>
											</Card.Body>
										</Card>

										<Card>
											<Card.Img
												variant="top"
												src={webPhoto3}
											/>
											<Card.Body>
												<Card.Title>DRM64</Card.Title>
												<Card.Text>Скупка радиодеталей и радиолома.</Card.Text>
												<Button variant="primary">Посетить</Button>
											</Card.Body>
										</Card>

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