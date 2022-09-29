import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FooterComponents = () => {
    return (
        <footer>
            <Container fluid>
                <Row className='mt-5'>
                    <Col className='bg-dark text-white text-center py-5'>Copyright &copy;Best online Shop</Col>
                </Row>

            </Container>
        </footer>
    );
};

export default FooterComponents;