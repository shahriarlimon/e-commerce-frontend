import axios from "axios"
import { GET_CATEGORIES } from "../actionTypes/categoryTypes"

export const getCategories = () => async (dispatch) => {
    const { data } = await axios.get(`http://localhost:4000/api/v1/categories/`, {
        withCredentials: true,
        headers: {
            crossDomain: true,
            'Content-Type': 'application/json',
            credentials: 'include',
        },
    })
    dispatch({
        type: GET_CATEGORIES,
        payload: data
    })

}