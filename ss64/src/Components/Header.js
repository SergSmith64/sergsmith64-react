import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from './ss64.png';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
			<>
					{/* <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark" > */}
					<Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark" >
						<Container>
							<Navbar.Brand href="/">
								<img
									src={logo}
									height="37"
									width="40"
									className="d-inline-block align-top"
									alt="Logo"
								/>{" "}

							</Navbar.Brand>
							<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							<Navbar.Collapse id="responsive-navbar-nav">
								<Nav className="mr-auto">
									<Nav.Link as={Link} to="/">Главная</Nav.Link>
									<Nav.Link as={Link} to="/web">Сайты</Nav.Link>
									<Nav.Link as={Link} to="/contacts">Контакты</Nav.Link>
									<Nav.Link as={Link} to="/blog">Блог</Nav.Link>
								</Nav>
								<Form inline >
									<FormControl
										type="text"
										placeholder="что-то ищем?"
										className="mr-sm-2"
									/>
									<Button variant="outline-info">Поиск</Button>
								</Form>
							</Navbar.Collapse>
						</Container>
					</Navbar>
			</>
		)
	}
}