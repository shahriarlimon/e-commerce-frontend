import React from 'react';
import { Alert, Button, Col, Container, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import CartItemComponent from '../components/CartItemComponent';


const AdminOrderDetailPage = () => {
    return (
        <Container fluid style={{ marginBottom: "130px" }}>
            <Row className='mt-3'>
                <h1>Order details</h1>
                <Col md={8}>
                    <br />
                    <Row>
                        <Col md={6}>
                            <h3>Shipping</h3>
                            <b>Name</b>: John Doe <br />
                            <b>Address</b>: 8739 Mayflower St.Los Angeles,CA 90063 <br />
                            <b>Phone</b>: 888 777 666
                        </Col>
                        <Col md={6}>
                            <h3>Payment method</h3>
                            <Form.Select disabled={false}>
                                <option value="ppl">Paypal</option>
                                <option value="cod">Cash on Delivery</option>

                            </Form.Select>
                        </Col>
                        <Row>
                            <Col>
                                <Alert className='mt-3' variant='danger'>Not Delivered!</Alert>
                            </Col>
                            <Col>
                                <Alert className='mt-3' variant='success'>Paid on 2-10-2000!</Alert>
                            </Col>
                        </Row>
                    </Row>
                    <br />
                    <h2>Ordered items</h2>
                    <ListGroup variant="flush">
                        {
                            Array.from({ length: 3 }).map((item, idx) => (<CartItemComponent
                                 key={idx} />))
                        }

                    </ListGroup>
                </Col>
                <Col md={4}>
                    <ListGroup>
                        <ListGroupItem> <h3>Order Summary</h3></ListGroupItem>
                        <ListGroupItem> Item price after tax: <span className='fw-bold'>$863</span></ListGroupItem>
                        <ListGroupItem> Shipping : <span className='fw-bold'>Inluded</span></ListGroupItem>
                        <ListGroupItem> Tax : <span className='fw-bold'>Inluded</span></ListGroupItem>
                        <ListGroupItem className='text-danger'> Total Price : <span className='fw-bold '>904</span></ListGroupItem>
                        <ListGroupItem > <div className='d-grid gap-2'><Button size={"lg"} type="button" variant="danger">Mark as delivered</Button></div></ListGroupItem>
                    </ListGroup>



                </Col>
            </Row>


        </Container>
    );
};

export default AdminOrderDetailPage;