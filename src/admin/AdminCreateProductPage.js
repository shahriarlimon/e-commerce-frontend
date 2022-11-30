import React, { useState } from 'react';
import { Alert, Button, CloseButton, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminCreateProductPage = () => {
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
                    <h1>Create new product</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} >
                        <Form.Group className='mb-3' controlId="formBasicProductName">
                            <Form.Label> Product Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='ProductName'
                            />

                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicDescription">
                            <Form.Label>Description </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                as={"textarea"}
                                name='description'
                            />

                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicStock">
                            <Form.Label>Count In stock</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                name='stock'
                            />

                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicPrice">
                            <Form.Label> Price</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                name='price'
                            />

                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicCategory">
                            <Form.Label> Category <CloseButton />(<small>Remove</small>)</Form.Label>
                            <Form.Select
                                required
                                type="number"
                                name='category'
                                aria-label='defalut select example'
                            ><option value={""}>Choose category</option>
                                <option value={"1"}>Laptop</option>
                                <option value={"2"}>TV</option>
                                <option value={"3"}>Games</option></Form.Select>

                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasicNewCategory">
                            <Form.Label> Or create a new category (e.g Computers/laptops/Intel){" "}</Form.Label>
                            <Form.Control name='newCategory' type='text' />
                        </Form.Group>
                        <Row className='mt-5'>
                            <Col md={6}>
                                <Form.Group className='mb-3' controlId="formBasicAttribute">
                                    <Form.Label> Choose attribute and set value</Form.Label>
                                    <Form.Select
                                        required
                                        type="number"
                                        name='atrrkey'
                                        aria-label='defalut select example'
                                    ><option value={""}>Choose attribute </option>
                                        <option value={"1"}>Laptop</option>
                                        <option value={"2"}>TV</option>
                                        <option value={"3"}>Games</option></Form.Select>

                                </Form.Group>

                            </Col>
                            <Col md={6}>
                                <Form.Group className='mb-3' controlId="formBasicAttribute">
                                    <Form.Label> Attribute value</Form.Label>
                                    <Form.Select
                                        required
                                        type="number"
                                        name='atrrkey'
                                        aria-label='defalut select example'
                                    ><option value={""}>Choose attribute value</option>
                                        <option value={"1"}>Laptop</option>
                                        <option value={"2"}>TV</option>
                                        <option value={"3"}>Games</option></Form.Select>

                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th>Attribute</th>
                                        <th>value</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>attr key</td>
                                        <td>attr key</td>
                                        <td><CloseButton /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className='mb-3' controlId="formBasicNewAttribute">
                                    <Form.Label> Create new attribute</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name='newAttrValue'
                                        disabled={false}
                                        placeholder="first choose or create category"

                                    />

                                </Form.Group>

                            </Col>
                            <Col md={6}>
                                <Form.Group className='mb-3' controlId="formBasicNewAttribute">
                                    <Form.Label> Attribute value</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name='newAttrValue'
                                        disabled={false}
                                        placeholder="first choose or create category"

                                    />

                                </Form.Group>

                            </Col>
                        </Row>
                        <Alert variant="primary">
                            After typing attribute key and value press enter on one of the field
                        </Alert>
                        <Form.Group className='mb-3' controlId="formMultipleFile">
                            <Form.Label>Images</Form.Label>
                            <Form.Control required name='multipleFile' type="file" multiple />

                        </Form.Group>
                        <Button type='submit' variant="primary">Create</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminCreateProductPage;