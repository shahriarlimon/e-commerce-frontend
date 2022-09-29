import React from 'react';
import { Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const ProductCarouselComponent = () => {
    const cursorP = {
        cursor: "pointer"
    }
    return (
        <Carousel>
            <Carousel.Item>
                <img crossOrigin='anonymous'
                    className="d-block w-100"
                    style={{ height: "300px", objectFit: "cover" }}
                    src="/images/carousel/carousel-1.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <LinkContainer style={cursorP} to="/prouduct-details">
                        <h3>Best seller laptop category</h3>
                    </LinkContainer>

                    <p>Dell Inspiration 15 3000 Laptop, 15.6 inch HD</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img crossOrigin='anonymous'
                    className="d-block w-100"
                    style={{ height: "300px", objectFit: "cover" }}
                    src="/images/carousel/carousel-2.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <LinkContainer style={cursorP} to="/prouduct-details">
                        <h3>Best seller Books category</h3>
                    </LinkContainer>

                    <p>World of Eric Carle,Hear Bear Roar 30-Button Animal Sound Book</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img crossOrigin='anonymous'
                    className="d-block w-100"
                    style={{ height: "300px", objectFit: "cover" }}
                    src="/images/carousel/carousel-3.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <LinkContainer style={cursorP} to="/prouduct-details">
                        <h3>Best seller Cameras category</h3>
                    </LinkContainer>

                    <p>4K Camcorder Video 60FPS 48MP Vlogging Camera for Youtube wifi 16X Digital Camera</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default ProductCarouselComponent;