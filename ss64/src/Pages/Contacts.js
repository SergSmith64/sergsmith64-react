import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default class Contacts extends Component {
    render() {
        return (
            <Container className="containerContent" style={{ maxWidth: '500px' }}>
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
        )
    }
}