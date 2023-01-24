import { CART_ADD_ITEM, CART_DELETE_ITEM, CART_ERROR_ITEM } from "../constants/cartConstants"; 
import axios from "axios";
import store from "../store";


export const cartAction = (id, count) => async(dispatch) => {
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

        await dispatch({type: CART_ADD_ITEM, payload: payloadData})

        localStorage.setItem("cartItems", JSON.stringify(store.getState().cart.cartItems));
    } catch (error) {
        dispatch({
            type: CART_ERROR_ITEM, 
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }

   
}