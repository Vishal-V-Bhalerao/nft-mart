import { createStore } from "redux";
import { productReducer } from "../reducers/catalogReducer";
let enhancer
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== 'production') {
    enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
}
export const store = createStore(productReducer, enhancer);