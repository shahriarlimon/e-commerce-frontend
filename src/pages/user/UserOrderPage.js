import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im'
import { Link } from 'react-router-dom';

const UserOrderPage = () => {
    return (

        <Row className='m-5'>
            <Col md={12}>
                <h1>My orders</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Delivered</th>
                            <th>Order Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>You</td>
                            <td>2-10-2022</td>
                            <td>
                                $456
                            </td>
                            <td>
                                < AiOutlineCheckCircle className='text-success ' />
                            </td>
                            <td>
                                <Link to={"/user/order-details"}>Go to order details</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>You</td>
                            <td>2-10-2022</td>
                            <td>
                                $456
                            </td>
                            <td>
                                <ImCross className='text-danger'/>
                            </td>
                            <td>
                                <Link to={"/user/order-details"}>Go to order details</Link>
                            </td>
                        </tr>



                    </tbody>
                </Table>
            </Col>
        </Row>

    );
};

export default UserOrderPage;