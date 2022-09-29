import React from 'react';
import { Button, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
const CatagoryCardComponent = ({ category, index }) => {
    const images = [
        "/images/tablets-category.png",
        "/images/monitors-category.png",
        "/images/games-category.png",
        "/images/tablets-category.png",
        "/images/tablets-category.png",
        "/images/tablets-category.png",
        "/images/tablets-category.png",
        "/images/tablets-category.png",

    ]
    return (
        <Card>
            <Card.Img variant='top' src={images[index]} />
            <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Text>Some quick example to build on card title and make up the bulk of the card content
                </Card.Text>
                <LinkContainer to="/product-list"><Button variant="primary">Go to Category</Button></LinkContainer>
            </Card.Body>

        </Card>
    );
};

export default CatagoryCardComponent;