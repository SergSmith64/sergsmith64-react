import React, { Component } from 'react';
import { Container, Form, Button, FormGroup } from 'react-bootstrap';
import axios from 'axios';




// __ add axios-test __

export default class Contacts extends Component {
  componentDidMount() {
    axios.get('https://sergsmith64-react.firebaseio.com/quiz.json').then(response => {
      console.log(response);
     })
  }
	render() {
		return (
			<>
				<Container className="containerContent mb-4" style={{ maxWidth: '500px' }}>
					<h1 className="text-center">Свяжитесь с нами</h1>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Введите Email"></Form.Control>
							<Form.Text>
								Мы не сообщаем никому ваши данные
							</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Example textarea</Form.Label>
							<Form.Control as="textarea" rows="3" />
						</Form.Group>

						<Form.Group controlId="formBasicCheckBox">
							<Form.Check type="checkbox" label="Check my out" />
						</Form.Group>
						<Button variant="primary" type="submit">Submit</Button>
					</Form>
			</Container>
		</>
		)
	}
}