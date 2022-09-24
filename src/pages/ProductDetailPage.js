import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    const { id } = useParams()
    return (
        <div>
            this is product detail page
        </div>
    );
};

export default ProductDetailPage;