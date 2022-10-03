import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginPage = () => {
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
                    <h1>Login</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name='email'
                                placeholder="Email Address"
                            />
                            <Form.Control.Feedback type='invalid'>Please enter your valid email address!</Form.Control.Feedback>
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
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicCheckbox">

                            <Form.Check
                                required
                                type="checkbox"
                                name='doNotLogout'
                                label="Do not logout"

                            />
                            <Form.Control.Feedback type='invalid'>Both password should match!</Form.Control.Feedback>
                        </Form.Group>
                        <Row className='pb-2'>
                            <Col> Don't have an account?<Link className='text-info' to={"/register"}> Register </Link></Col>
                        </Row>
                        <Button type="primary">
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Login</Button>
                        <Alert show={true} variant='danger'>Wrong credentials!</Alert>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;