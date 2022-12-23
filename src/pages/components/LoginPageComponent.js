import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const LoginPageComponent = ({ loginUserApiRequest }) => {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate()
    const [loginUserResponsState, setLoginUserResponseState] = useState({
        success: "",
        error: "",
        loading: false
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget.elements;
        const email = form.email.value;
        const password = form.password.value;
        const doNotLogout = form.doNotLogout.checked;
        if (email && password) {
            console.log(email)
            setLoginUserResponseState({ loading: true })
            loginUserApiRequest(email, password, doNotLogout).then((res) => {
                setLoginUserResponseState({ success: res.success, loading: false, error: "" })
                if (res.success === 'user logged in' && !res.userLoggedIn.isAdmin) {
                    navigate("/user", { replace: true })
                } else {
                    navigate("/admin/orders", { replace: true })
                }
            }).catch((er) => {
                setLoginUserResponseState({ error: er.response.data.message ? er.response.data.message : er.response.data })
            })
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
                        <Button variant='primary' type="submit">
                            {
                                loginUserResponsState && loginUserResponsState.loading === true ? (<Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />) : ("")
                            }

                            Login</Button>
                        <Alert className='mt-2' show={loginUserResponsState && loginUserResponsState.error === "wrong credentials"} variant='danger'>Wrong credentials!</Alert>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPageComponent;