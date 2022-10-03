import React from 'react';
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { FiTrash } from 'react-icons/fi'

const CartItemComponent = () => {
    return (
       <>
         <ListGroup.Item >
            <Row>
                <Col md={3}><Image crossOrigin='anonymous' fluid src='/images/games-category.png' /></Col>
                <Col md={2}>
                    Logotech series <br />
                    Gaming mouse

                </Col>
                <Col md={2}>
                    <b>$89</b>
                </Col>
                <Col md={3}>
                    <Form.Select>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </Form.Select>
                </Col>
                <Col md={2}>
                    <Button onClick={() => window.confirm("Are you sure?")} type={"button"} variant="secondary"> <FiTrash /></Button>

                </Col>


            </Row>
        </ListGroup.Item>
        <br/>
       </>
    );
};

export default CartItemComponent;