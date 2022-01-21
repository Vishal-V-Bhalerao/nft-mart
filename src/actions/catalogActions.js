import axios from "axios";
import { SERVER_URL } from "../api/constants";

// action name
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

//action creator
export const getProductListAction = (payload) => {
    return {
        type: UPDATE_PRODUCT,
        payload
    }
}
export const getProductList = (dispatch) => {
    axios
        .get(`${SERVER_URL}/products`)
        .then(res => {
            let productList = res.data
            dispatch(getProductListAction(productList))
        })
        .catch(err => {
            console.log('Could not fetch products. Try again later.', err);
        })
} 