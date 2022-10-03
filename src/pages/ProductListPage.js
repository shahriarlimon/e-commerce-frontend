import React from 'react';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import AttributesFilterComponent from '../components/FilterQueryResultOption/AttributesFilterComponent';
import CategoryFilterComponent from '../components/FilterQueryResultOption/CategoryFilterComponent';
import PriceFilterComponent from '../components/FilterQueryResultOption/PriceFilterComponent';
import RatingFilterComponent from '../components/FilterQueryResultOption/RatingFilterComponent';
import PagintationComponent from '../components/PagintationComponent';
import ProductForListComponents from '../components/ProductForListComponents';
import SortOptionsComponents from '../components/SortOptionsComponents';

const ProductListPage = () => {
    return (
        <Container fluid style={{ marginBottom: "130px" }}>
            <Row>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item><SortOptionsComponents /></ListGroup.Item>
                        <ListGroup.Item><span className='fw-bold'>FILTER:</span> <br /><PriceFilterComponent /></ListGroup.Item>
                        <ListGroup.Item><RatingFilterComponent /></ListGroup.Item>
                        <ListGroup.Item><CategoryFilterComponent /></ListGroup.Item>
                        <ListGroup.Item><AttributesFilterComponent /></ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant='primary'>Filter</Button>
                            <Button variant='danger'>Reset filter</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={9}>
                    {
                        Array.from({ length: 5 }).map((_, idx) => <ProductForListComponents idx={idx} images={["games", "monitors", "tablets", "games", "monitors"]} key={idx} />)
                    }

                    <PagintationComponent />
                </Col>
            </Row>
        </Container>
    );
};

export default ProductListPage;