
import OrderDetailPageComponent from './components/OrderDetailPageComponent';
import axios from 'axios';
const getOrder = async (id) => {
    const { data } = await axios.get(`http://localhost:4000/api/v1/orders/user/${id}`,{
        withCredentials: true,
        headers: {
          crossDomain: true,
          'Content-Type': 'application/json',
          credentials: 'include',
        },
      });
    return data
}

const markAsDelivered = async (id) => {
    const { data } = await axios.get(`http://localhost:4000/api/v1/orders/delivered/${id}`,{
        withCredentials: true,
        headers: {
          crossDomain: true,
          'Content-Type': 'application/json',
          credentials: 'include',
        },
      });
    if (data) { return data }
}
const AdminOrderDetailPage = () => {
    return <OrderDetailPageComponent getOrder={getOrder} markAsDelivered={markAsDelivered} />
};

export default AdminOrderDetailPage;