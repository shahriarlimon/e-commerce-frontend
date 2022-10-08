import React, { useState } from 'react';
import { Alert, Button, CloseButton, Col, Container, Form, Image, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminEditUserPage = () => {
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
        <Container style={{ marginBottom: "130px" }}>
            <Row className='mt-5 justify-content-md-center'>
                <Col md={1}>
                    <Link className='btn btn-info my-3 text-white' to={"/admin/products"}> Go back</Link>
                </Col>
                <Col md={6}>
                    <h1>Edit User</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} >
                        <Form.Group className='mb-3' controlId="formBasicFirstName">
                            <Form.Label> First Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='firstName'
                                defaultValue={"John"}
                            />

                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicLastName">
                            <Form.Label>Last name </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='lastName'
                                defaultValue={"Doe"}
                            />

                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name='email'
                                defaultValue={"john@gmail.com"}
                            />

                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                            <Form.Check name='isAdmin' type='checkbox' label="Is admin"/>
                        </Form.Group>
                       

                        <Button type='submit' variant="primary">Update</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminEditUserPage;