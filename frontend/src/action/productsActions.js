import axios from 'axios'
import {
    REQUEST_PRODUCTS_INITIAL, 
    REQUEST_PRODUCTS_SUCCESS, 
    REQUEST_PRODUCTS_FAIL,
    REQUEST_PRODUCT_DETAIL_FAIL,
    REQUEST_PRODUCT_DETAIL_SUCCESS,
    REQUEST_PRODUCT_DETAIL_INITIAL
} from '../constants/productsConstants'

export const productsAction = () => async(dispatch) => {
    try {
        dispatch({type: REQUEST_PRODUCTS_INITIAL})

        const response = await axios.get('/api/products')
        const data = response.data

        dispatch({
            type: REQUEST_PRODUCTS_SUCCESS, 
            payload: data
        })
    } catch (error) {
        dispatch({
            type: REQUEST_PRODUCTS_FAIL, 
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const productDetailAction = (id) => async(dispatch) => {
    try {
        dispatch({type: REQUEST_PRODUCT_DETAIL_INITIAL})

        const response = await axios.get(`/api/products/${id}`)
        const data = response.data

        dispatch({type: REQUEST_PRODUCT_DETAIL_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type: REQUEST_PRODUCT_DETAIL_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message      
        })
    }
}