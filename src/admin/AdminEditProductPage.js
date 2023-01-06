import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import AdminEditProductPageComponent from './components/AdminEditProductPageComponent';

const AdminEditProductPage = () => {
    const fetchProducts = async (productId) => {
        const { data } = await axios.get(`http://localhost:4000/api/v1/products/get-one/${productId}`, {
            withCredentials: true,
            headers: {
                crossDomain: true,
                'Content-Type': 'application/json',
                credentials: 'include',
            },
        })
        return data;

    }
    const { categories } = useSelector((state) => state.categories);
    const updateProductApiRequest = async (productId, formInputs) => {
        const { data } = await axios.put(`http://localhost:4000/api/v1/products/admin/${productId}`, { ...formInputs }, {
            withCredentials: true,
            headers: {
                crossDomain: true,
                'Content-Type': 'application/json',
                credentials: 'include',
            },
        })
        return data;
    }


    return <AdminEditProductPageComponent updateProductApiRequest={updateProductApiRequest} fetchProducts={fetchProducts} categories={categories} />
};

export default AdminEditProductPage;