import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CatagoryCardComponent from '../components/CatagoryCardComponent';
import ProductCarouselComponent from '../components/ProductCarouselComponent';

const HomePage = () => {
    const categories = [
        "Tablets",
        "Monitors",
        "Games",
        "Printers",
        "Software",
        "Cameras",
        "Books",
        "Videos"
    ]
    return (
        <>
            <ProductCarouselComponent />
            <Container style={{marginBottom:"130px"}}>
                <Row xs={1} md={2} className="g-4 mt-5">
                    {
                        categories.map((category, index) => <CatagoryCardComponent key={index} category={category} index={index} />)
                    }
                </Row>
            </Container>

        </>
    );
};

export default HomePage;