import React from 'react';
import { Alert, Button, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CartItemComponent from '../../components/CartItemComponent';

const CartPageComponent = ({ addToCart, removeFromCart, cartSubTotal, cartItems, dispatch }) => {
    const changeCount = (productId, count) => {
        dispatch(addToCart(productId, count))
    }
    const removeFromCartHandler = (productId, quantity, price) => {
        if (window.confirm("Are you sure")) {
            dispatch(removeFromCart(productId, quantity, price))
        }
    }
    return (
        <Container style={{ marginBottom: "130px" }}>
            <Row className='mt-4'>
                <Col md={8}>
                    <h1>Shopping Cart</h1>
                    {
                        cartItems.length === 0 ? (<Alert className='mt-5' variant='info'>Your shopping cart is empty</Alert>) : (<ListGroup variant='flush'>
                            {
                                cartItems?.map((item) => (
                                    <CartItemComponent removeFromCartHandler={removeFromCartHandler} item={item} changeCount={changeCount} key={item?.productId} />
                                ))
                            }
                        </ListGroup>)
                    }


                </Col>
                <Col md={4}>
                    <ListGroup>
                        <ListGroupItem><h3>Subtotal ({cartItems.length}{cartItems.length === 1 ? "Product" : "Products"}) </h3></ListGroupItem>
                        <ListGroupItem>Price: <span className='fw-bold'>${cartSubTotal}</span></ListGroupItem>
                        <ListGroupItem><LinkContainer to={"/user/cart-details"}><Button disabled={cartSubTotal === 0} type='button'>Proceed to Checkout</Button></LinkContainer></ListGroupItem>
                    </ListGroup>

                </Col>

            </Row>
        </Container>
    );
};

export default CartPageComponent;