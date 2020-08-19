import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import topPhoto1 from '../assets/sozdanie-adaptivnyh-saitov.jpg';
import topPhoto2 from '../assets/creating-adaptive-sites.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={topPhoto1}
                        alt="foto"
                    />
                    <Carousel.Caption>
                        <h2>Фото-1</h2>
                        <p>Это просто текст-1</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={topPhoto2}
                        alt="foto2"
                    />
                    <Carousel.Caption>
                        <h2>Фото-2</h2>
                        <p>Это просто текст-2</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}