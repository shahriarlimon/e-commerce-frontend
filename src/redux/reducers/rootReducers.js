import { combineReducers } from "redux";
import { userRegisterLoginReducer } from "./userReducers";

const rootReducers = combineReducers({
    userRegisterLogin: userRegisterLoginReducer
})
export default rootReducers;