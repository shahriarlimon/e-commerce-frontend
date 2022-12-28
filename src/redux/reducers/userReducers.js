
import { LOGIN_USER, LOGOUT_USER } from "../actionTypes/userActionTypes";
const userInfoLocalStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : sessionStorage.getItem("userInfo") ? JSON.parse(sessionStorage.getItem("userInfo")) : {}
export const initialState = {
    userRegisterLogin: { userInfo: userInfoLocalStorage }
};
export const userRegisterLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userRegisterLogin: action.payload

            }
        case LOGOUT_USER:
            return {}
        default:
            return state;
    }
}