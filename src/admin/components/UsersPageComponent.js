import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';
import { BiTrash } from 'react-icons/bi'
import AdminNavLinkComponent from '../../components/AdminNavLinkComponent';
const UserPageComponent = ({ fetchUsers, deleteUser }) => {
    const [users, setUsers] = useState([]);
    const [userDeleted, setUserDeleted] = useState(false)
    const deleteHandler = async (userId) => {
        if (window.confirm("Are you sure to delete?")) {
            const data = await deleteUser(userId);
            console.log(data)
            if (data === 'user removed') {
                setUserDeleted(!userDeleted)
                console.log(userDeleted)
            }
        }
    }
    useEffect(() => {
        const abctrl = new AbortController()
        fetchUsers(abctrl).then((res) => setUsers(res)).catch((err) => {
            console.log(err?.response?.data.message ? err?.response?.data?.message : err?.response?.data)
        })
        return () => abctrl.abort()
    }, [userDeleted])
    return (

        <Row className='m-5 vh-100'>
            <Col md={2}>
                <AdminNavLinkComponent />
            </Col>
            <Col className='mb-5' md={10}>
                <h1>Users</h1>
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
                        {users?.map((user, idx) => (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{user?.firstName}</td>
                                <td>{user?.lastName}</td>
                                <td>
                                    {user?.email}</td>
                                <td>
                                    {user.isAdmin ? < AiOutlineCheckCircle className='text-success ' /> : <ImCross className='text-danger' />}

                                </td>
                                <td>
                                    <LinkContainer to="/admin/edit-user">
                                        <Button className='btn btn-sm'><BsPencilSquare /></Button>
                                    </LinkContainer> /
                                    {" "}
                                    <Button onClick={() => deleteHandler(user._id)} variant='danger' className='btn-sm'>
                                        <BiTrash />
                                    </Button>
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Col>
        </Row>

    );
};

export default UserPageComponent;