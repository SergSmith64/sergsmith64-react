import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselBox.scss';
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
                        alt="Создание современных адаптивных сайтов"
                    />
                    <Carousel.Caption>
                        <h1>Создание современных адаптивных сайтов</h1>
                        {/* <p>Это просто текст-1</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={topPhoto2}
                        alt="Creating a Modern Adaptive sites"
                    />
                    <Carousel.Caption>
                        <h1>Creating a Modern Adaptive sites</h1>
                        {/* <p>Это просто текст-2</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}