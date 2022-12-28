import axios from "axios"
import { LOGIN_USER, LOGOUT_USER } from "../actionTypes/userActionTypes"

export const setReduxUserState = (userCreated) => {
    return {
        type: LOGIN_USER,
        payload: userCreated
    }
}
export const logout = () => (dispatch) => {
    document.location.href = "/login"
    axios.get("http://localhost:4000/api/v1/logout", { withCredentials: true, headers: { crossDomain: true, 'Content-Type': 'application/json' } });
    localStorage.removeItem("userInfo")
    sessionStorage.removeItem("userInfo")
    localStorage.removeItem("cart")
    dispatch({ type: LOGOUT_USER })
}