import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im'
import { Link } from 'react-router-dom';
import AdminNavLinkComponent from '../../components/AdminNavLinkComponent';

const OrdersPageComponent = ({ fetchOrders }) => {
    const [orders, setOrders] = useState([]);
    const [deletedOrder, setDeletedOrder] = useState(false);
    useEffect(() => {
        const abctrl = new AbortController()
        fetchOrders(abctrl).then((res) => {
            console.log(res)
            setOrders(res)
        })
        return () => abctrl.abort()
    }, [])
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
                            <th>User</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Delivered</th>
                            <th>Payment Method</th>
                            <th>Order Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, idx) => (<tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{order?.user?.firstName || order?.user?.name}</td>
                                <td>{order?.createdAt.substring(0, 10)}</td>
                                <td>
                                    {order?.orderTotal.cartSubTotal}
                                </td>
                                <td>
                                    {order?.isDelivered ? < AiOutlineCheckCircle className='text-success ' /> : <ImCross className='text-danger' />}

                                </td>
                                <td>{order?.paymentMethod}</td>
                                <td>
                                    <Link to={`/admin/order-details/${order._id}`}>Go to order details</Link>
                                </td>
                            </tr>))
                        }
                    </tbody>
                </Table>
            </Col>
        </Row>

    );
};

export default OrdersPageComponent;