import { UPDATE_PRODUCT } from "../actions/catalogActions"

export const initialProductState = {
    productList: [],
    productCount: 10
}
export const productReducer = (state = initialProductState, action) => {
    if (action.type == UPDATE_PRODUCT) {
        // TODO: response parsing
    }
    return state
}