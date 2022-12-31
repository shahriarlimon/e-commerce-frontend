import React from 'react';
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import RemoveFromCartComponent from '../pages/components/RemoveFromCartComponent';


const CartItemComponent = ({ item, orderCreated = false, changeCount, removeFromCartHandler = false }) => {
    return (
        <>
            <ListGroup.Item >
                <Row>
                    <Col md={3}><Image crossOrigin='anonymous' fluid src={item?.image ? item?.image?.path : null} /></Col>
                    <Col md={2}>
                        {item?.name}

                    </Col>
                    <Col md={2}>
                        <b>${item?.price}</b>
                    </Col>
                    <Col md={3}>
                        <Form.Select onChange={changeCount ? (e) => changeCount(item.productId, e.target.value) : undefined} disabled={orderCreated} value={item?.quantity}>
                            {[...Array(item?.count).keys()].map((x) => (<option key={x + 1} value={x + 1}>{x + 1}</option>))}

                        </Form.Select>
                    </Col>
                    <Col md={2}>

                        <RemoveFromCartComponent removeFromCartHandler={removeFromCartHandler ? removeFromCartHandler : undefined} quantity={item?.quantity} price={item?.price} productId={item?.productId} orderCreated={orderCreated} />
                    </Col>


                </Row>
            </ListGroup.Item>
            <br />
        </>
    );
};

export default CartItemComponent;