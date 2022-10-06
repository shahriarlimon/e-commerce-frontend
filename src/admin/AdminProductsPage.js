import React from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AdminNavLinkComponent from '../components/AdminNavLinkComponent';
import { BsPencilSquare } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai'

const AdminProductPage = () => {
    const deleteHandler = () => {
        if (window.confirm("Are you sure to delete?")) alert("The Product has been deleted")
    }
    return (

        <Row className='m-5'>
            <Col md={2}>
                <AdminNavLinkComponent />
            </Col>
            <Col md={10}>
                <h1>Products list{" "} <LinkContainer to="/admin/product/create-new-product"><Button variant='primary' type="primary" size='lg'>Create new</Button></LinkContainer> </h1>

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <LinkContainer to={"/admin/edit-product"}>
                                    <Button type='primary' variant='primary' className='btn-sm'><BsPencilSquare /></Button>
                                </LinkContainer>{" / "}
                                <Button className='btn-sm bg-danger' onClick={deleteHandler} ><AiOutlineDelete /></Button>
                            </td>
                        </tr>



                    </tbody>
                </Table>
            </Col>
        </Row>

    );
};

export default AdminProductPage;