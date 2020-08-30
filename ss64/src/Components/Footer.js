import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from './ss64.png';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import Home from '../Pages/Home';
// import Web from '../Pages/Web';
// import Contacts from '../Pages/Contacts';
// import Blog from '../Pages/Blog';


export default class Footer extends Component {
	render() {
		return (
			<div className="foot">
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
						<Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		)
	}
}