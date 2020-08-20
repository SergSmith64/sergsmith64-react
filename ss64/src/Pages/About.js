import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'
import './about.scss';

export default class About extends Component {
	render() {
		return (
			<Container className="containerContent">
				<Tab.Container id="left-tabs-example" defaultActiveKey="first" >
					<Row>
						<Col sm={3}>
							<Nav variant="pills" className="flex-column mt-2">
								<Nav.Item>
									<Nav.Link eventKey="first">DESIGN</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">TEAM</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">STANDUP</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col sm={9}>
							<Tab.Content className="mt-3">
								<Tab.Pane eventKey="first">
									<h3>Это FIRST</h3>
									<img src="https://sergsmith64.ru/add/seamless background_1.jpg" />
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<h3>Это SECOND</h3>
									<img src="https://sergsmith64.ru/add/seamless background_2.jpg" />
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<h3>Это STANDUP STANDUP STANDUP</h3>
									<img src="https://sergsmith64.ru/add/seamless background_3.jpg" />
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>

			</Container>
		)
	}
}