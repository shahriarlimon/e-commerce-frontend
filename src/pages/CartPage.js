import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

import CartPageComponent from './components/CartPageComponent';

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartSubTotal = useSelector((state) => state.cart.cartSubTotal)
    return (
        <CartPageComponent addToCart={addToCart} removeFromCart={removeFromCart} cartSubTotal={cartSubTotal} cartItems={cartItems} dispatch={dispatch} />
    );
};

export default CartPage;