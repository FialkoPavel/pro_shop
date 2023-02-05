import { CART_ADD_ITEM, CART_DELETE_ITEM, CART_ERROR_ITEM } from "../constants/cartConstants"; 
import axios from "axios";
import store from "../store";


export const cartAction = (id, count) => async(dispatch, getState) => {
    try {
        const { data } = await axios.get(`/api/products/${id}`)

        const payloadData = {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            count: +count
        }
        console.log('payloadData', payloadData)

        dispatch({type: CART_ADD_ITEM, payload: payloadData})

        localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        dispatch({
            type: CART_ERROR_ITEM, 
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const deleteCartItem = (id) => (dispatch, getState) => {
    console.log('id', id);
    dispatch({type: CART_DELETE_ITEM, payload: id})

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}