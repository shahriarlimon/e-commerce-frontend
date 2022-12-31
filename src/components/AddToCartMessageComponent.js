import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const AddToCartMessageComponent = ({ showCartMessage, setShowCartMessage }) => {
    const navigate = useNavigate()
    return (
        <Alert show={showCartMessage} variant="success" onClose={() => setShowCartMessage(false)} dismissible>
            <Alert.Heading>Proudct has been added to your cart</Alert.Heading>
            <p>
                <Button onClick={() => navigate(-1)} variant='success'>Go back</Button>{" "}
                <Link to="/cart"> <Button variant="danger">Go to Cart</Button></Link>
            </p>
        </Alert>
    )
};

export default AddToCartMessageComponent;