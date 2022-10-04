import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserProfilePage = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container style={{ marginBottom: "140px" }}>
            <Row className='mt-5 justify-content-md-center'>
                <Col md={6}>
                    <h1>User Profile </h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group className='mb-3' controlId="formBasicFirstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='firstName'
                                defaultValue={"John"}

                            />
                            <Form.Control.Feedback type='invalid'>Please enter your first name!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='lastName'
                                defaultValue={"Doe"}
                            />
                            <Form.Control.Feedback type='invalid'>Please enter your last name!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                disabled
                                type="email"
                                value={"john@doe.com if you want to change email , you can create a new account with new email"}

                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control

                                placeholder='Enter your phone number'
                                defaultValue={""}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label>Address</Form.Label>
                            <Form.Control

                                placeholder='Enter your street name and a house number'
                                defaultValue={""}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label>Country</Form.Label>
                            <Form.Control

                                placeholder='Enter your country name'
                                defaultValue={""}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control

                                placeholder='Enter your zip code'
                                defaultValue={""}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label>City</Form.Label>
                            <Form.Control

                                placeholder='Enter your city name'
                                defaultValue={""}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label>State</Form.Label>
                            <Form.Control

                                placeholder='Enter your state name'
                                defaultValue={""}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                name='password'
                                placeholder="Enter your password"

                            />
                            <Form.Control.Feedback type='invalid'>Password enter a valid password!</Form.Control.Feedback>
                            <Form.Text className='text-muted'>Password should have at least 6 characters!</Form.Text>
                        </Form.Group>
                        <Button variant='primary' type="submit">
                            Update</Button>
                        <Alert show={true} variant='danger'>User with that email already exists!</Alert>
                        <Alert show={true} variant='info'>User has been updated!</Alert>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UserProfilePage;