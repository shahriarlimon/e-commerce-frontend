import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

const ProductListPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductListPage;