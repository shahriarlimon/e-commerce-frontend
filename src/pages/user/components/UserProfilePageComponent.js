import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserProfilePageComponent = ({ updateUserApiRequest }) => {
    const [validated, setValidated] = useState(false);
    const [passwordsMatchState, setPasswordsMatchState] = useState(true);
    const [updateUserResponsState, setUpdateUserResponseState] = useState({
        success: "",
        error: ""
    })
    const onChange = () => {
        const password = document.querySelector("input[name=password]")
        const confirmPassword = document.querySelector("input[name=confirmPassword]")
        if (password.value === confirmPassword.value) {
            setPasswordsMatchState(true)
        } else {
            setPasswordsMatchState(false)
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget.elements;
        const password = form.password.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const phoneNumber = form.phoneNumber.value;
        const address = form.address.value;
        const country = form.country.value;
        const zipCode = form.zipCode.value;
        const city = form.zipCode.value;
        const state = form.state.value;
        const confirmPassword = form.confirmPassword.value
        if (event.currentTarget.checkValidity() === true && password === confirmPassword) {
            updateUserApiRequest(firstName, lastName, phoneNumber, address, country, zipCode, city, state, password).then((data) => {
                setUpdateUserResponseState({ success: data.success, error: "" })
            }).catch((er) => {
                setUpdateUserResponseState({ error: er.response.data.message ? er.response.data.message : er.response.data })
            })
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
                                name="phoneNumber"
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label>Address</Form.Label>
                            <Form.Control

                                placeholder='Enter your street name and a house number'
                                defaultValue={""}
                                name="address"
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label>Country</Form.Label>
                            <Form.Control

                                placeholder='Enter your country name'
                                defaultValue={""}
                                name="country"
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control

                                placeholder='Enter your zip code'
                                defaultValue={""}
                                name="zipCode"

                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label>City</Form.Label>
                            <Form.Control

                                placeholder='Enter your city name'
                                defaultValue={""}
                                name="city"
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label>State</Form.Label>
                            <Form.Control

                                placeholder='Enter your state name'
                                defaultValue={""}
                                name="state"
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                name='password'
                                placeholder="Enter your password"
                                onChange={onChange}
                            />
                            <Form.Control.Feedback type='invalid'>Password enter a valid password!</Form.Control.Feedback>
                            <Form.Text className='text-muted'>Password should have at least 6 characters!</Form.Text>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicPassword">
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                name='confirmPassword'
                                onChange={onChange}
                                placeholder="Confirm your password"

                            />
                            <Form.Control.Feedback type='invalid'>Both password should match!</Form.Control.Feedback>

                        </Form.Group>
                        <Button variant='primary' type="submit">
                            Update</Button>
                        <Alert show={updateUserResponsState && updateUserResponsState.error !== ""} variant='danger'>Something went wrong!</Alert>
                        <Alert show={updateUserResponsState && updateUserResponsState.success === "user updated"} variant='info'>User has been updated!</Alert>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UserProfilePageComponent;