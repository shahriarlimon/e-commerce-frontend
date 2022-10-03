import React, { useEffect } from 'react';
import { Alert, Button, Col, Container, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import AddToCartMessageComponent from '../components/AddToCartMessageComponent';
import jsImageZoom from 'js-image-zoom';

const ProductDetailPage = () => {
    const { id } = useParams();
    const options = {
       /*  width: 400,
        zoomWidth: 500, */
        scale: 2,
        offset: { vertical: 0, horizontal: 0 }
    };
    useEffect(()=>{
        new jsImageZoom(document.getElementById("first"),options)
        new jsImageZoom(document.getElementById("second"),options)
        new jsImageZoom(document.getElementById("third"),options)
    })
    return (
        <Container style={{ marginBottom: "130px", marginTop: "20px" }}>
            <AddToCartMessageComponent />
            <Row mt-3>
                <Col style={{ zIndex: 1 }} md={4} >
                    <div id='first'>
                        <Image crossOrigin='anonymus' fluid src='/images/games-category.png' />

                    </div> <br />

                    <div id='second'>
                        <Image crossOrigin='anonymus' fluid src='/images/monitors-category.png' />

                    </div><br />

                    <div id='third'>
                        <Image crossOrigin='anonymus' fluid src='/images/tablets-category.png' />
                    </div>




                </Col>
                <Col md={8} >
                    <Row>
                        <Col md={8}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item><h1>Proudct Name</h1></ListGroup.Item>
                                <ListGroup.Item><Rating readonly size={20} initialValue={4} /> (1)</ListGroup.Item>
                                <ListGroup.Item>Price: <span className='fw-bold'>$375</span></ListGroup.Item>
                                <ListGroup.Item>This product has been the best for use according to the customer review.You can easily take this product and also there is some mony back guarntee if don't feel secure</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={4}>
                            <ListGroup>
                                <ListGroup.Item>Status: In-stock</ListGroup.Item>
                                <ListGroup.Item>Price: <span className='fw-bold'>$375</span></ListGroup.Item>
                                <ListGroup.Item>
                                    Quantity
                                    <Form>
                                        <Form.Select size='lg' aria-label="Default select example">
                                            <option>1</option>
                                            <option value="1">2</option>
                                            <option value="2">3</option>
                                            <option value="3">4</option>
                                        </Form.Select>
                                    </Form>
                                </ListGroup.Item>
                                <ListGroup.Item><Button variant="success">Add to cart</Button></ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mt-5'>
                            <h5>Review</h5>
                            <ListGroup>
                                {
                                    Array.from({ length: 10 }).map((item, idx) => <ListGroup.Item key={idx}>
                                        John Doe <br />
                                        <Rating readonly size={20} initialValue={4} /> <br />
                                        2-10-2022 <br /><br />
                                        This is a good product.You can purchase it without any hesitation and able to utilize the best of your money

                                    </ListGroup.Item>)
                                }


                            </ListGroup>
                        </Col>
                    </Row>
                    <hr />
                    <Alert variant='danger'>
                        Login first to write a review
                    </Alert>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Drop a review</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Select aria-label="Default select example">
                            <option>Your Ratings</option>
                            <option value="1">5(best)</option>
                            <option value="2">4(good)</option>
                            <option value="3">3(average)</option>
                            <option value="3">2(bad)</option>
                            <option value="3">1(aweful)</option>
                        </Form.Select>
                        <Button className='mt-3 mb-3' variant='primary'>Send</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetailPage;