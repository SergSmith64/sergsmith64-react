import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './footer.scss';
// import logo from './ss64.png';
import logoReact from './logo192.png';
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
						<div className="navbarWrapper">

							{/* <p>	&copy; 2020 </p> */}

							<Navbar.Brand href="/">
								<img
									src={logoReact}
									height="30"
									width="30"
									className="d-inline-block align-top"
									alt="ReactJS"
								/>
								<span className="footerText">Web site created using ReactJS</span>
								{" "}
							</Navbar.Brand>
							{/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
							{/* <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse> */}
							{/* <p>1111111111</p> */}

						</div>
					</Container>
				</Navbar>
			</div>
		)
	}
}