import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import AdminNavLinkComponent from '../components/AdminNavLinkComponent';
import { BsPencilSquare } from 'react-icons/bs';
import { BiTrash } from 'react-icons/bi'
const AdminUsersPage = () => {
    const deleteHandler = () => {
        if (window.confirm("Are you sure to delete?")) alert("User has been deleted!")
    }
    return (

        <Row className='m-5'>
            <Col md={2}>
                <AdminNavLinkComponent />
            </Col>
            <Col md={10}>
                <h1>orders</h1>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Is admin</th>
                            <th>Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>
                                John@gmail.com
                            </td>
                            <td>
                                < AiOutlineCheckCircle className='text-success ' />
                            </td>
                            <td>
                                <LinkContainer to="/admin/edit-user">
                                    <Button className='btn btn-sm'><BsPencilSquare /></Button>
                                </LinkContainer> /
                                {" "}
                                <Button onClick={deleteHandler} variant='danger' className='btn-sm'>
                                    <BiTrash />
                                </Button>
                            </td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>You</td>
                            <td>2-10-2022</td>
                            <td>
                                John@gmail.com
                            </td>
                            <td>
                                <ImCross className='text-danger' />
                            </td>
                            <td>
                                <LinkContainer to="/admin/edit-user">
                                    <Button className='btn btn-sm'><BsPencilSquare /></Button>
                                </LinkContainer> /
                                {" "}
                                <Button onClick={deleteHandler} variant='danger' className='btn-sm'>
                                    <BiTrash />
                                </Button>
                            </td>
                        </tr>



                    </tbody>
                </Table>
            </Col>
        </Row>

    );
};

export default AdminUsersPage;