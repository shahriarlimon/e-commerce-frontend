import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import CartItemComponent from '../../../components/CartItemComponent';
import { logout } from '../../../redux/actions/UserActions';
import { useNavigate } from 'react-router-dom'

const UserCartDetailPageComponent = ({ userInfo, changeCount, removeFromCartHandler, dispatch, cartItems, itemsCount, cartSubTotal, getUser, createOrder }) => {
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [userAddress, setUserAddress] = useState()
    const [missingAddress, setMissingAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("pp");
    const navigate = useNavigate()
    const choosePaymentMethod = (e) => {
        setPaymentMethod(e.target.value)
    }
    useEffect(() => {
        getUser().then((data) => {
            if (!data.address || !data.city || !data.country || !data.zipCode || !data.state || !data.phoneNumber) {
                setButtonDisabled(true)
                setMissingAddress("In order to make an order,fill out your profile with correct address,city etc")
            } else {
                setUserAddress({
                    address: data.address, city: data.city, country: data.country, zipCode: data.zipCode, state: data.state, phoneNumber: data.phoneNumber
                })
                setMissingAddress(false)
            }
        }).catch((err) => {
            dispatch(logout())
        })
    }, [userInfo._id, dispatch, getUser])
    const orderHandler = () => {
        const orderData = {
            orderTotal: {
                itemsCount: itemsCount,
                cartSubTotal: cartSubTotal,
            },
            cartItems: cartItems.map(item => {
                return {
                    productId: item.productId,
                    name: item.name,
                    image: {
                        path: item.image ? (item.image.path ?? null) : null
                    },
                    price: item.price,
                    quantity: item.quantity,
                    count: item.count
                }
            }),
            paymentMethod: paymentMethod

        }
        createOrder(orderData).then((data) => {
            console.log(data)
            if (data) {
                navigate(`/user/order-details/${data?._id}`)
                console.log("order placed")
            }
        }).catch((err) => {
            console.log(err)
        })

    }

    return (
        <Container fluid style={{ marginBottom: "130px" }}>
            <Row className='mt-3'>
                <h1>Cart details</h1>
                <Col md={8}>
                    <br />
                    <Row>
                        <Col md={6}>
                            <h3>Shipping</h3>
                            <b>Name</b>: {userInfo?.firstName} {userInfo?.lastName} <br />
                            <b>Address</b>: {userAddress?.address} ,{userAddress?.city},{userAddress?.state}, {userAddress?.zipCode},{userAddress?.country} <br />
                            <b>Phone</b>: {userAddress?.phoneNumber}
                        </Col>
                        <Col md={6}>
                            <h3>Payment method</h3>
                            <Form.Select onChange={choosePaymentMethod}>
                                <option value="ppl">Paypal</option>
                                <option value="cod">Cash on Delivery</option>

                            </Form.Select>
                        </Col>
                        <Row>
                            <Col>
                                <Alert className='mt-3' variant='danger'>Not Delivered!{missingAddress}</Alert>
                            </Col>
                            <Col>
                                <Alert className='mt-3' variant='success'>Not paid yet!</Alert>
                            </Col>
                        </Row>
                    </Row>
                    <br />
                    <h2>Ordered items</h2>
                    <ListGroup variant="flush">
                        {
                            cartItems?.map((item) => (<CartItemComponent removeFromCartHandler={removeFromCartHandler} dispatch={dispatch} changeCount={changeCount} item={item} key={item?.productId} />))
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
                        <ListGroupItem > <div className='d-grid gap-2'><Button onClick={() => orderHandler()} disabled={buttonDisabled} size={"lg"} type="button" variant="danger">place the order</Button></div></ListGroupItem>
                    </ListGroup>



                </Col>
            </Row>


        </Container>
    );
};

export default UserCartDetailPageComponent;