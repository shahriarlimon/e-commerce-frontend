import axios from 'axios';
import React from 'react';
import { Alert, Button, Col, Container, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

import UserCartDetailPageComponent from './components/UserCartDetailsPageComponent';

const UserCartDetailPage = () => {
    const dispatch = useDispatch()
    const { cartItems, itemsCount, cartSubTotal } = useSelector((state) => state.cart);
    const userInfo = useSelector((state) => state.userRegisterLogin.userRegisterLogin.userInfo)
    const changeCount = (productId, count) => {
        dispatch(addToCart(productId, count))
    }
    const getUser = async () => {
        const { data } = await axios.get(`http://localhost:4000/api/v1/users/profile/${userInfo._id}`, { withCredentials: true });
        return data;
    }
    const removeFromCartHandler = (productId, quantity, price) => {
        if (window.confirm("Are you sure")) {
            dispatch(removeFromCart(productId, quantity, price))
        }
    }

    const createOrder = async (orderData) => {
        const { data } = await axios.post(`http://localhost:4000/api/v1/orders/create`, { ...orderData }, { withCredentials: true });
        console.log(data)
        return data;
    }
    return (
        <UserCartDetailPageComponent createOrder={createOrder} getUser={getUser} userInfo={userInfo} removeFromCartHandler={removeFromCartHandler} changeCount={changeCount} dispatch={dispatch} cartItems={cartItems} itemsCount={itemsCount} cartSubTotal={cartSubTotal} />
    );
};

export default UserCartDetailPage;