import React from 'react';
import { Button } from 'react-bootstrap';
import { FiTrash } from 'react-icons/fi'

const RemoveFromCartComponent = ({ removeFromCartHandler, productId, price, quantity, orderCreated }) => {
    return (
        <Button onClick={removeFromCartHandler ? () => removeFromCartHandler(productId, quantity, price) : undefined} disabled={orderCreated} type={"button"} variant="secondary"> <FiTrash /></Button>
    );
};

export default RemoveFromCartComponent;