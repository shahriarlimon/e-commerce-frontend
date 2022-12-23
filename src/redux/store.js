import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const counterReducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case "ADD": return { value: state.value + 1 + action.someValue }
        default:
            return state

    }



}
const store = createStore(counterReducer, { value: 0 },composeWithDevTools())
store.dispatch({
    type: "ADD",
    someValue: 10
})
console.log(store.getState())
export default store;