import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from './ss64.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';


export default class Header extends Component {
	render() {
		return (
			<>
				<Router>
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
									{/* <Nav.Link href="/"> Home </Nav.Link> */}
									{/* <Nav.Link href="/about"> About us </Nav.Link> */}
									{/* <Nav.Link href="/contacts"> Contacts </Nav.Link> */}
									{/* <Nav.Link href="/blog"> Blog </Nav.Link> */}

									<Nav.Link as={Link} to="/">Главная</Nav.Link>
									<Nav.Link as={Link} to="/about">Сайты</Nav.Link>
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


					{/* -- open-tag <Router> remove below return -- */}
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/contacts" component={Contacts} />
						<Route exact path="/blog" component={Blog} />
					</Switch>
				</Router>
			</>
		)
	}
}