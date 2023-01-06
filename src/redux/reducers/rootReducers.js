import { combineReducers } from "redux";
import { cartReducers } from "./cartReducers";
import { getCategoriesReducers } from "./categoryReducer";
import { userRegisterLoginReducer } from "./userReducers";

const rootReducers = combineReducers({
    userRegisterLogin: userRegisterLoginReducer,
    cart: cartReducers,
    categories: getCategoriesReducers
})
export default rootReducers;