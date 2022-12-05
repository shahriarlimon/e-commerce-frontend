import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CartItemComponent from '../../components/CartItemComponent';


const OrderDetailPageComponent = ({ getOrder, markAsDelivered }) => {
    const { id } = useParams();
    const [userInfo, setUserInfo] = useState({})
    const [paymentMethod, setPaymentMethod] = useState("")
    const [isPaid, setIsPaid] = useState(false)
    const [isDelivered, setIsDelivered] = useState(false)
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [orderButtonMessage, setOrderButtonMessage] = useState("Mark as delivered");
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        getOrder(id).then((order) => {
            setUserInfo(order.user)
            setPaymentMethod(order.paymentMethod)
            order.isPaid ? setIsPaid(order.paidAt) : setIsPaid(false)
            order.isDelivered ? setIsDelivered(order.deliveredAt) : setIsDelivered(false)
            setCartSubTotal(order.orderTotal.cartSubTotal)
            if (order.isDelivered) {
                setOrderButtonMessage("Order is finished")
                setButtonDisabled(true)
            }
            setCartItems(order.cartItems)
        })
    }, [isDelivered, id])

    return (
        <Container fluid style={{ marginBottom: "130px" }}>
            <Row className='mt-3'>
                <h1>Order details</h1>
                <Col md={8}>
                    <br />
                    <Row>
                        <Col md={6}>
                            <h3>Shipping</h3>
                            <b>Name</b>: {userInfo?.firstName} {userInfo?.lastName}<br />
                            <b>Address</b>: 8739 Mayflower St.Los Angeles,CA 90063 <br />
                            <b>Phone</b>: 888 777 666
                        </Col>
                        <Col md={6}>
                            <h3>Payment method</h3>
                            <Form.Select value={paymentMethod} disabled={true}>
                                <option value="ppl">Paypal</option>
                                <option value="cod">Cash on Delivery</option>

                            </Form.Select>
                        </Col>
                        <Row>
                            <Col>
                                <Alert className='mt-3' variant={isDelivered ? 'success' : 'danger'}>{isDelivered ? <>Delivered at {isDelivered}</> :
                                    <>Not Delivered</>}
                                </Alert>
                            </Col>
                            <Col>
                                <Alert className='mt-3' variant={isPaid ? 'success' : 'danger'}>{
                                    isPaid ? <>Paid on {isPaid}</> : <>Not paid yet</>
                                }</Alert>
                            </Col>
                        </Row>
                    </Row>
                    <br />
                    <h2>Ordered items</h2>
                    <ListGroup variant="flush">
                        {
                            cartItems.map((item, idx) => (<CartItemComponent item={item} orderCreated={true}
                                key={idx} />))
                        }

                    </ListGroup>
                </Col>
                <Col md={4}>
                    <ListGroup>
                        <ListGroupItem> <h3>Order Summary</h3></ListGroupItem>
                        <ListGroupItem> Item price after tax: <span className='fw-bold'>${cartSubTotal}</span></ListGroupItem>
                        <ListGroupItem> Shipping : <span className='fw-bold'>Inluded</span></ListGroupItem>
                        <ListGroupItem> Tax : <span className='fw-bold'>Inluded</span></ListGroupItem>
                        <ListGroupItem className='text-danger'> Total Price : <span className='fw-bold '>${cartSubTotal}</span></ListGroupItem>
                        <ListGroupItem > <div className='d-grid gap-2'><Button onClick={() => markAsDelivered(id).then((res) => setIsDelivered(true))} disabled={buttonDisabled} size={"lg"} type="button" variant="danger">{orderButtonMessage}</Button></div></ListGroupItem>
                    </ListGroup>



                </Col>
            </Row>


        </Container>
    );
};

export default OrderDetailPageComponent;