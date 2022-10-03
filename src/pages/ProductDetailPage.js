import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    const { id } = useParams()
    return (
        <Container>
            <Row mt-3>
                <Col md={4} >Images</Col>
                <Col md={8} >
                    <Row>
                        <Col md={8}>
                            product name,description ,rating
                        </Col>
                        <Col md={4}>
                            product status,quantity
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mt-3'>

                        </Col>
                    </Row>
                    <hr/>
                    send review
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetailPage;