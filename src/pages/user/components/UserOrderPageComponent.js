import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im'
import { Link } from 'react-router-dom';

const UserOrderPageComponent = ({ getOrder }) => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        getOrder().then((data) => {
            setOrders(data)
        })
    }, [])
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
                    <tbody>{
                        orders?.map((order, idx) => <tr>
                            <td>{idx + 1}</td>
                            <td>You</td>
                            <td>{order?.createdAt?.substring(0, 10)}</td>
                            <td>
                                ${order?.orderTotal?.cartSubTotal}
                            </td>
                            <td>{
                                order?.isDelivered ? < AiOutlineCheckCircle className='text-success ' /> : <ImCross className='text-danger' />}

                            </td>
                            <td>
                                <Link to={`/user/order-details/${order._id}`}>Go to order details</Link>
                            </td>
                        </tr>)
                    }



                    </tbody>
                </Table>
            </Col>
        </Row>

    );
};

export default UserOrderPageComponent;