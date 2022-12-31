import { combineReducers } from "redux";
import { cartReducers } from "./cartReducers";
import { userRegisterLoginReducer } from "./userReducers";

const rootReducers = combineReducers({
    userRegisterLogin: userRegisterLoginReducer,
    cart: cartReducers
})
export default rootReducers;