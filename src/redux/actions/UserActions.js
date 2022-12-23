import { LOGIN_USER } from "../actionTypes/userActionTypes"

export const loginUser = (userInfo) => {
    return {
        type: LOGIN_USER,
        payload: userInfo
    }
}