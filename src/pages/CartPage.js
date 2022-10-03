import React from 'react';
import { Alert, Button, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CartItemComponent from '../components/CartItemComponent';

const CartPage = () => {
    return (
        <Container style={{marginBottom:"130px"}}>
            <Row className='mt-4'>
                <Col md={8}>
                    <h1>Shopping Cart</h1>
                    <ListGroup variant='flush'>
                        {
                            Array.from({ length: 3 }).map((item, idx) => (
                                <CartItemComponent key={idx} />
                            ))
                        }
                    </ListGroup>
                    <Alert className='mt-5' variant='info'>Your shopping cart is empty</Alert>
                </Col>
                <Col md={4}>
                    <ListGroup>
                        <ListGroupItem><h3>Subtotal (2 Items) </h3></ListGroupItem>
                        <ListGroupItem>Price: <span className='fw-bold'>$275</span></ListGroupItem>
                        <ListGroupItem><LinkContainer to={"/user/order-details"}><Button type='button'>Checkout</Button></LinkContainer></ListGroupItem>
                    </ListGroup>

                </Col>

            </Row>
        </Container>
    );
};

export default CartPage;