import React, { Component } from 'react';
import { Container, Row, Col, Media, Card, ListGroup } from 'react-bootstrap';

export default class Blog extends Component {
	render() {
		return (
			<>
				<Container className="containerContent mb-4">
					<Row>
						<Col md="9">

							<Media className="m-3">
								<img
									width={150}
									height={150}
									className="mr-3"
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
									alt="ALT"
								/>
								<Media.Body>
									<h5>Blog Post-1</h5>
									<p>Это сообщение в разделе постов. Услуги по проверке данных с целью обнаружения и исправления ошибок, допущенных студентами сервиса Заказчика</p>
								</Media.Body>
							</Media>

							<Media className="m-3">
								<img
									width={150}
									height={150}
									className="mr-3"
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
									alt="ALT"
								/>
								<Media.Body>
									<h5>Blog Post-1</h5>
									<p>Это сообщение в разделе постов. Услуги по проверке данных с целью обнаружения и исправления ошибок, допущенных студентами сервиса Заказчика</p>
								</Media.Body>
							</Media>

							<Media className="m-3">
								<img
									width={150}
									height={150}
									className="mr-3"
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
									alt="ALT"
								/>
								<Media.Body>
									<h5>Blog Post-1</h5>
									<p>Это сообщение в разделе постов. Услуги по проверке данных с целью обнаружения и исправления ошибок, допущенных студентами сервиса Заказчика</p>
								</Media.Body>
							</Media>

							<Media className="m-3">
								<img
									width={150}
									height={150}
									className="mr-3"
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
									alt="ALT"
								/>
								<Media.Body>
									<h5>Blog Post-1</h5>
									<p>Это сообщение в разделе постов. Услуги по проверке данных с целью обнаружения и исправления ошибок, допущенных студентами сервиса Заказчика</p>
								</Media.Body>
							</Media>

							<Media className="m-3">
								<img
									width={150}
									height={150}
									className="mr-3"
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
									alt="ALT"
								/>
								<Media.Body>
									<h5>Blog Post-1</h5>
									<p>Это сообщение в разделе постов. Услуги по проверке данных с целью обнаружения и исправления ошибок, допущенных студентами сервиса Заказчика</p>
								</Media.Body>
							</Media>

							<Media className="m-3">
								<img
									width={150}
									height={150}
									className="mr-3"
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
									alt="ALT"
								/>
								<Media.Body>
									<h5>Blog Post-1</h5>
									<p>Это сообщение в разделе постов. Услуги по проверке данных с целью обнаружения и исправления ошибок, допущенных студентами сервиса Заказчика</p>
								</Media.Body>
							</Media>

						</Col>

						<Col md="3">
							<h5 className="text-center mt-3">Категории</h5>
							<Card>
								<ListGroup variant="flush">
									<ListGroup.Item>Рубрика-1</ListGroup.Item>
									<ListGroup.Item>Рубрика-2</ListGroup.Item>
									<ListGroup.Item>Рубрика-3</ListGroup.Item>
									<ListGroup.Item>Рубрика-4</ListGroup.Item>
								</ListGroup>
							</Card>

							<Card className="mt-3" bg="light">
								<Card.Body>
									<Card.Title>Side widget</Card.Title>
									<Card.Text>Это сообщение в разделе постов. Услуги по проверке данных с целью...</Card.Text>
								</Card.Body>
							</Card>

						</Col>

					</Row>
				</Container>
			</>
		)
	}
}