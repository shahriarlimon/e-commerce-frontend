import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddToCartMessageComponent = () => {
    const [show, setShow] = useState(true);
    return (
        <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Proudct has been added to your cart</Alert.Heading>
            <p>
                <Button variant='success'>Go back</Button>{" "}
                <Link to="/cart"> <Button variant="danger">Go to Cart</Button></Link>
            </p>
        </Alert>
    )
};

export default AddToCartMessageComponent;