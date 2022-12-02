
import OrderDetailPageComponent from './components/OrderDetailPageComponent';
import axios from 'axios';
const getOrder = async (id) => {
    const { data } = await axios.get(`http://localhost:4000/api/v1/orders/user/${id}`);
    return data
}
const AdminOrderDetailPage = () => {
    return <OrderDetailPageComponent getOrder={getOrder} />
};

export default AdminOrderDetailPage;