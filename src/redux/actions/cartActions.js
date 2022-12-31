import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/cartActionTypes"
import axios from 'axios';
export const addToCart = (productId, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:4000/api/v1/products/get-one/${productId}`, { withCredentials: true })
    dispatch({

        type: ADD_TO_CART,
        payload: {
            productId: data?._id,
            name: data?.name,
            price: data?.price,
            image: data?.images[0] ?? null,
            count: data?.count,
            quantity

        }
    })
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems))
}


export const removeFromCart = (productId, quantity, price) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: {
            productId: productId,
            quantity: quantity,
            price: price
        }
    })
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems))
}