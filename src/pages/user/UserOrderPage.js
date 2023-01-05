import axios from 'axios';
import React from 'react';
import UserOrderPageComponent from './components/UserOrderPageComponent';

const UserOrderPage = () => {
    const getOrder = async () => {
        const { data } = await axios.get(`http://localhost:4000/api/v1/orders/`, { withCredentials: true })
        return data;
    }
    return <UserOrderPageComponent getOrder={getOrder} />
};

export default UserOrderPage;