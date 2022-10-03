import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    const onChange = () => {
        const password = document.querySelector("input[name=password]")
        const confirmPassword = document.querySelector("input[name=confirmPassword]")
        if (password.value === confirmPassword.value) {
            confirmPassword.setCustomValidity("")
        } else {
            confirmPassword.setCustomValidity(" Both password should match!")
        }
    }
    return (
        <Container style={{ marginBottom: "140px" }}>
            <Row className='mt-5 justify-content-md-center'>
                <Col md={6}>
                    <h1>Register</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group className='mb-3' controlId="formBasicFirstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='firstName'
                                placeholder="Enter your first name"

                            />
                            <Form.Control.Feedback type='invalid'>Please enter your first name!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='lastName'
                                placeholder="Enter your last name"
                            />
                            <Form.Control.Feedback type='invalid'>Please enter your last name!</Form.Control.Feedback>
                        </Form.Group>
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
                                minLength={6}
                                onChange={onChange}
                            />
                            <Form.Control.Feedback type='invalid'>Password enter a valid password!</Form.Control.Feedback>
                            <Form.Text className='text-muted'>Password should have at least 6 characters!</Form.Text>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                name='confirmPassword'
                                placeholder="Confirm password"
                                minLength={6}
                                onChange={onChange}
                            />
                            <Form.Control.Feedback type='invalid'>Both password should match!</Form.Control.Feedback>
                        </Form.Group>
                        <Row className='pb-2'>
                            <Col> Do you have an account already?<Link className='text-info' to={"/login"}> Login </Link></Col>
                        </Row>
                        <Button type="submit">
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Submit</Button>
                        <Alert show={true} variant='danger'>User with that email already exists!</Alert>
                        <Alert show={true} variant='info'>User has been created!</Alert>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default RegisterPage;