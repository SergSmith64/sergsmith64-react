import React, { Component } from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import logo from './ss64.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../Pages/Home';
import Web from '../Pages/Web';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';


export default class Footer extends Component {
	render() {
		return (
			<>
				<Router>
					<Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
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

								</Form>
							</Navbar.Collapse>
						</Container>
					</Navbar>


					{/* -- open-tag <Router> remove below return -- */}
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/web" component={Web} />
						<Route exact path="/contacts" component={Contacts} />
						<Route exact path="/blog" component={Blog} />
					</Switch>
				</Router>
			</>
		)
	}
}