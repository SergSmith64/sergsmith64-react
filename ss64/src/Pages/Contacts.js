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
                <h3>Заголовок</h3>
                <p>Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, 
                    например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. 
                    Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, 
                    скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один 
                    и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает 
                    предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует 
                    словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате 
                    сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.</p>
                <p></p>
            </Container>
        )
    }
}