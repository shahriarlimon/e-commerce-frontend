import React from 'react';
import axios from 'axios'
import OrdersPageComponent from './components/OrdersPageComponent';
const fetchOrders = async (abctrl) => {
    const { data } = await axios.get("http://localhost:4000/api/v1/orders/admin", {
        signal: abctrl.signal
    });
    return data;
}
const AdminOrdersPage = () => {
    return <OrdersPageComponent fetchOrders={fetchOrders} />
};

export default AdminOrdersPage;