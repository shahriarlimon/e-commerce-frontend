import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AdminNavLinkComponent from '../../components/AdminNavLinkComponent';
import { BsPencilSquare } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai'

const ProductPageComponent = ({ fetchProducts, deleteProduct }) => {
    const [products, setProducts] = useState([]);
    const [deletedProduct, setDeletedProduct] = useState(false)
    const deleteHandler = async (productId) => {
        if (window.confirm("Are you sure to delete?")) {
            const data = await deleteProduct(productId);
            if (data === 'product removed') {
                setDeletedProduct(!deletedProduct)
            }
        }
    }
    useEffect(() => {
        const abctrl = new AbortController()
        fetchProducts(abctrl).then((res) => setProducts(res)).catch((er) => {
            console.log(er.response.data.message ? er.response.data.message : er.response.data)
        })
        return () => abctrl.abort()
    }, [deletedProduct])

    return (

        <Row className='m-5'>
            <Col md={2}>
                <AdminNavLinkComponent />
            </Col>
            <Col className='' md={10}>
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
                        {
                            products?.map((item, idx) => (<tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{item?.name}</td>
                                <td>{item?.price}</td>
                                <td>{item?.category}</td>
                                <td>
                                    <LinkContainer to={`/admin/edit-product/${item._id}`}>
                                        <Button type='primary' variant='primary' className='btn-sm'><BsPencilSquare /></Button>
                                    </LinkContainer>{" / "}
                                    <Button className='btn-sm bg-danger' onClick={() => deleteHandler(item._id)} ><AiOutlineDelete /></Button>
                                </td>
                            </tr>))
                        }




                    </tbody>
                </Table>
            </Col>
        </Row>

    );
};

export default ProductPageComponent;