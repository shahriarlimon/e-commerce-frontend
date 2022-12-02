import axios from 'axios';
import React from 'react';
import ProductPageComponent from './components/ProductPageComponent';

const fetchProducts = async (abctrl) => {
    const { data } = await axios.get("http://localhost:4000/api/v1/products/admin", {
        signal: abctrl.signal
    })
    return data
}
const deleteProduct = async (productId) => {
    const { data } = await axios.delete(`http://localhost:4000/api/v1/products/admin/${productId}`);
    return data;
}
const AdminProductPage = () => {

    return <ProductPageComponent fetchProducts={fetchProducts} deleteProduct={deleteProduct} />
};

export default AdminProductPage;