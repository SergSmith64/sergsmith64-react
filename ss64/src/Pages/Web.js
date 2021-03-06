import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col, CardDeck, Card, Button } from 'react-bootstrap'
import './Web.scss';
import webPhoto1 from '../assets/sergsmith64-specii-i-pryanosti.jpg';
import webPhoto2 from '../assets/sergsmith64-singulf.jpg';
import webPhoto3 from '../assets/sergsmith64-skupka-radioloma-drm64.jpg';
import webPhoto4 from '../assets/sergsmith64-banbas64.jpg';
import webPhoto5 from '../assets/sergsmith64-svoidom-info.jpg';
import webPhoto6 from '../assets/sergsmith64-polytehservice.jpg';

import webPhoto7 from '../assets/sergsmith64-inoutlab.jpg';
import webPhoto8 from '../assets/sergsmith64-spec-agro-trans.jpg';
import webPhoto9 from '../assets/sergsmith64-isramedmoscow.jpg';
import webPhoto10 from '../assets/sergsmith64-germany-life.jpg';
import webPhoto11 from '../assets/sergsmith64-avtoservice.jpg';
import webPhoto12 from '../assets/sergsmith64-betonnij-zavod.jpg';


export default class Web extends Component {
	render() {
		return (
			<div style={{ backgroundColor: "#ccc" }}>
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

											<Card className="text-center">
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

											<Card className="text-center">
												<Card.Img
													variant="top"
													src={webPhoto2}
												/>
												<Card.Body>
													<Card.Title>SinGulf</Card.Title>
													<Card.Text>Сингапур: перевозка нефти из Ирака и Кувейта.</Card.Text>
													<Button variant="primary">Посетить</Button>
												</Card.Body>
											</Card>

											<Card className="text-center">
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

										<CardDeck className="mt-4">
											<Card className="text-center">
												<Card.Img
													variant="top"
													src={webPhoto4}
												/>
												<Card.Body>
													<Card.Title>BanBas64</Card.Title>
													<Card.Text>Бани и Бассейны.</Card.Text>
													<Button variant="primary">Посетить</Button>
												</Card.Body>
											</Card>

											<Card className="text-center">
												<Card.Img
													variant="top"
													src={webPhoto5}
												/>
												<Card.Body>
													<Card.Title>svoi-dom.info</Card.Title>
													<Card.Text>Свой дом по цене квартиры</Card.Text>
													<Button variant="primary">Посетить</Button>
												</Card.Body>
											</Card>

											<Card className="text-center">
												<Card.Img
													variant="top"
													src={webPhoto6}
												/>
												<Card.Body>
													<Card.Title>svoi-dom.info</Card.Title>
													<Card.Text>Свой дом по цене квартиры</Card.Text>
													<Button variant="primary">Посетить</Button>
												</Card.Body>
											</Card>
										</CardDeck>

									</Tab.Pane>

									<Tab.Pane eventKey="second">
										<h3>Сайты на Bootstrap / Flexbox</h3>
										{/* <img src="https://sergsmith64.ru/add/seamless background_2.jpg" /> */}

										<CardDeck className="mt-4">
											<Card className="text-center">
												<Card.Img
													variant="top"
													src={webPhoto7}
												/>
												<Card.Body>
													<Card.Title>inoutlab.es</Card.Title>
													<Card.Text>In-Out-Lab. Spain</Card.Text>
													<Button variant="primary">Посетить</Button>
												</Card.Body>
											</Card>

											<Card className="text-center">
												<Card.Img
													variant="top"
													src={webPhoto8}
												/>
												<Card.Body>
													<Card.Title>спецагротранс.рф</Card.Title>
													<Card.Text>Стройматериалы от производителя</Card.Text>
													<Button variant="primary">Посетить</Button>
												</Card.Body>
											</Card>

											<Card className="text-center">
												<Card.Img
													variant="top"
													src={webPhoto9}
												/>
												<Card.Body>
													<Card.Title>isramedmoscow.ru</Card.Title>
													<Card.Text>Израильская медицина в Москве</Card.Text>
													<Button variant="primary">Посетить</Button>
												</Card.Body>
											</Card>

										</CardDeck>

										<CardDeck className="mt-4">
											<Card className="text-center">
												<Card.Img
													variant="top"
													src={webPhoto10}
												/>
												<Card.Body>
													<Card.Title>study.germanylife.ru</Card.Title>
													<Card.Text>Обучение в Германии</Card.Text>
													<Button variant="primary">Посетить</Button>
												</Card.Body>
											</Card>

											<Card className="text-center">
												<Card.Img
													variant="top"
													src={webPhoto11}
												/>
												<Card.Body>
													<Card.Title>autoservicever.ru</Card.Title>
													<Card.Text>Автосервис на Верейской</Card.Text>
													<Button variant="primary">Посетить</Button>
												</Card.Body>
											</Card>

											<Card className="text-center">
												<Card.Img
													variant="top"
													src={webPhoto12}
												/>
												<Card.Body>
													<Card.Title>реалбетон.рф</Card.Title>
													<Card.Text>РеалБетон</Card.Text>
													<Button variant="primary">Посетить</Button>
												</Card.Body>
											</Card>
										</CardDeck>

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
			</div>
		)
	}
}