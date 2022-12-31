
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/cartActionTypes";
const cartItemsLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

export const initialState = {
    cartItems: cartItemsLocalStorage,
    itemsCount: cartItemsLocalStorage ? cartItemsLocalStorage.reduce((quantity, item) => Number(item.quantity) + quantity, 0) : 0,
    cartSubTotal: cartItemsLocalStorage ? cartItemsLocalStorage.reduce((price, item) => price + item.price * item.quantity, 0) : 0
}

export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const productBeingAddedToCart = action.payload;
            const productAlreadyExistsInState = state.cartItems.find((x) => x.productId === productBeingAddedToCart.productId);
            const currentState = { ...state };
            if (productAlreadyExistsInState) {
                currentState.itemsCount = 0
                currentState.cartSubTotal = 0
                currentState.cartItems = state.cartItems.map((x) => {
                    if (x.productId === productAlreadyExistsInState.productId) {
                        currentState.itemsCount += Number(productBeingAddedToCart.quantity);
                        const sum = Number(productBeingAddedToCart.quantity) * Number(productBeingAddedToCart.price);
                        currentState.cartSubTotal += sum;
                    } else {
                        currentState.itemsCount += Number(x.price);
                        const sum = Number(x.quantity) * Number(x.price);
                        currentState.cartSubTotal += sum;
                    }
                    return x.productId === productAlreadyExistsInState.productId ? productBeingAddedToCart : x
                })
            } else {
                currentState.itemsCount += Number(productBeingAddedToCart.quantity)
                const sum = Number(productBeingAddedToCart.quantity) * Number(productBeingAddedToCart.price);
                currentState.cartSubTotal += sum;
                currentState.cartItems = [...state.cartItems, productBeingAddedToCart]
            }
            return currentState;
        case REMOVE_FROM_CART:

            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.productId !== action.payload.productId),
                itemsCount: state.itemsCount - action.payload.quantity,
                cartSubTotal: state.cartSubTotal - action.payload.price * action.payload.quantity

            }
        default:
            return state;
    }
}