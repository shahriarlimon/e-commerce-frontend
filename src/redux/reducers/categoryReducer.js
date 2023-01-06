import { GET_CATEGORIES } from "../actionTypes/categoryTypes"

export const initialState = {
    categories: []
}

export const getCategoriesReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload

            }
        default:
            return state
    }
}