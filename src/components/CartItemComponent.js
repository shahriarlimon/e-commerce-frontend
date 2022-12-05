import React from 'react';
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { FiTrash } from 'react-icons/fi'

const CartItemComponent = ({ item, orderCreated = false }) => {
    return (
        <>
            <ListGroup.Item >
                <Row>
                    <Col md={3}><Image crossOrigin='anonymous' fluid src={item.image ? item.image.path : null} /></Col>
                    <Col md={2}>
                        {item.name}

                    </Col>
                    <Col md={2}>
                        <b>${item.price}</b>
                    </Col>
                    <Col md={3}>
                        <Form.Select disabled={orderCreated} value={item.quantity}>
                            {[...Array(item.count).keys()].map((x) => (<option key={x + 1} value={x + 1}>{x + 1}</option>))}

                        </Form.Select>
                    </Col>
                    <Col md={2}>
                        <Button onClick={() => window.confirm("Are you sure?")} type={"button"} variant="secondary"> <FiTrash /></Button>

                    </Col>


                </Row>
            </ListGroup.Item>
            <br />
        </>
    );
};

export default CartItemComponent;