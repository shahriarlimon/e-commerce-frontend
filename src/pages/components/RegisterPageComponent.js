import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegisterPageComponent = ({ registerUserApiRequest, dispatch, setReduxUserState }) => {

    const [validated, setValidated] = useState(false);
    const [registerUserResponsState, setRegisterUserResponseState] = useState({
        success: "",
        error: "",
        loading: false
    })
    const [passwordsMatchState, setPasswordsMatchState] = useState(true)
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget.elements;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value

        if (event.currentTarget.checkValidity() === true && firstName && lastName && email && password && form.password.value === form.confirmPassword.value) {
            setRegisterUserResponseState({ loading: true })
            registerUserApiRequest(firstName, lastName, email, password).then((data) => {
                dispatch(setReduxUserState(data.user))
                setRegisterUserResponseState({ success: data.success, loading: false, error: "" });
            }).catch((er) => {
                setRegisterUserResponseState({ error: er.response.data.message ? er.response.data.message : er.response.data })
            })

        }

        setValidated(true);
    };
    const onChange = () => {
        const password = document.querySelector("input[name=password]")
        const confirmPassword = document.querySelector("input[name=confirmPassword]")
        if (password.value === confirmPassword.value) {
            setPasswordsMatchState(true)
        } else {
            setPasswordsMatchState(false)
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
                                isInvalid={!passwordsMatchState}
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
                                isInvalid={!passwordsMatchState}
                            />
                            <Form.Control.Feedback type='invalid'>Both password should match!</Form.Control.Feedback>
                        </Form.Group>
                        <Row className='pb-2'>
                            <Col> Do you have an account already?<Link className='text-info' to={"/login"}> Login </Link></Col>
                        </Row>
                        <Button type="submit">
                            {
                                registerUserResponsState && registerUserResponsState.loading ? (<Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />) : ("")
                            }

                            Submit</Button>
                        <Alert show={registerUserResponsState && registerUserResponsState.error === "user already exists"} variant='danger'>User with that email already exists!</Alert>
                        <Alert show={registerUserResponsState && registerUserResponsState.success === "user created"} variant='info'>User has been created!</Alert>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default RegisterPageComponent;