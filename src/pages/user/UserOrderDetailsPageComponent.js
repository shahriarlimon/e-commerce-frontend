import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, Col, Container, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CartItemComponent from '../../components/CartItemComponent';



/* 
email:
sb-147ide24000595@business.example.com
client id:
AXmAJOAupE6AITuv0oytTSyWHHfsM6saE3QWs-16jXDcx7hLIpylbWRhPwHbiBzam4mSIRUrG8A9C-8s
*/

const UserOrderDetailsPageComponent = ({ getUser, getOrder, userInfo, loadPaypalScript }) => {
    const { id } = useParams()
    const paypalContainer = useRef()
    const [userAddress, setUserAddress] = useState()
    const [paymentMethod, setPaymentMethod] = useState("")
    const [isPaid, setIsPaid] = useState(false)
    const [orderButtonMessage, setOrderButtonMessage] = useState("")
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [isDelivered, setIsDelivered] = useState(false)
    useEffect(() => {
        getUser().then((data) => {
            setUserAddress({
                address: data.address, city: data.city, country: data.country, zipCode: data.zipCode, state: data.state, phoneNumber: data.phoneNumber
            })
        }).catch((err) => {
            console.log(err)
        })
    }, [userInfo._id, getUser])

    useEffect(() => {
        getOrder(id).then((data) => {
            setPaymentMethod(data?.paymentMethod)
            setCartItems(data?.cartItems)
            setCartSubTotal(data?.orderTotal.cartSubTotal)
            data.isDelivered ? setIsDelivered(data.deliveredAt) : setIsDelivered(false)
            data.isPaid ? (setIsPaid(data.paidAt)) : setIsPaid(false)
            if (data.isPaid) {
                setOrderButtonMessage("Your order is finished")
                setButtonDisabled(true)
            } else {
                if (data.paymentMethod === 'pp') {
                    setOrderButtonMessage("Pay for your order")
                } else if (data.paymentMethod === "cod") {
                    setButtonDisabled(true)
                    setOrderButtonMessage("Wait for your order.You pay on delivery")
                }
            }
        })
    }, [])
    const orderHandler = () => {
        setButtonDisabled(true)
        if (paymentMethod === 'pp') {
            setOrderButtonMessage("To pay for your order click one of the buttons below")
            if (!isPaid) {
                loadPaypalScript(cartSubTotal, cartItems, id, updateStateAfterOrder)
            }
        } else {
            setOrderButtonMessage("Your order was placed.Thank You!")
        }
    }
    const updateStateAfterOrder = (paidAt) => {
        setOrderButtonMessage("Thank you for your payment");
        setIsPaid(paidAt)
        setButtonDisabled(true)
        paypalContainer.current.style = "display:none"
    }
    return (
        <Container fluid style={{ marginBottom: "130px" }}>
            <Row className='mt-3'>
                <h1>Order details</h1>
                <Col md={8}>
                    <br />
                    <Row>
                        <Col md={6}>
                            <h3>Shipping</h3>
                            <b>Name</b>: {userInfo.firstName} {userInfo.lastName}<br />
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
                                <Alert className='mt-3' variant={isDelivered ? "sucess" : "danger"}>{isDelivered ? <>Delivered At {isDelivered}</> : <>Not Delivered</>}</Alert>
                            </Col>
                            <Col>
                                <Alert className='mt-3' variant={isPaid ? "success" : "danger"}>{isPaid ? <>Paid on {isPaid}</> : <>Not Paid yet</>}</Alert>
                            </Col>
                        </Row>
                    </Row>
                    <br />
                    <h2>Ordered items</h2>
                    <ListGroup variant="flush">
                        {
                            cartItems?.map((item, idx) => (<CartItemComponent item={item} key={idx} orderCreated={true} />))
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
                        <ListGroupItem >
                            <div className='d-grid gap-2'><Button onClick={orderHandler} size={"lg"} disabled={buttonDisabled} type="button" variant="danger">{orderButtonMessage}</Button></div>
                            <div style={{ position: "relative", zIndex: 1 }}>
                                <div className='mt-2' ref={paypalContainer} id='paypal-container-element'>

                                </div>
                            </div>


                        </ListGroupItem>
                    </ListGroup>



                </Col>
            </Row>


        </Container>
    );
};

export default UserOrderDetailsPageComponent;