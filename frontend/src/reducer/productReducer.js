import {REQUEST_PRODUCTS_INITIAL, 
        REQUEST_PRODUCTS_SUCCESS, 
        REQUEST_PRODUCTS_FAIL,
        REQUEST_PRODUCT_DETAIL_FAIL,
        REQUEST_PRODUCT_DETAIL_SUCCESS,
        REQUEST_PRODUCT_DETAIL_INITIAL
    } from '../constants/productsConstants'

export const productReducer = ( state= {products: []}, action ) => {
    switch(action.type) {
        case REQUEST_PRODUCTS_INITIAL:
            return { loading: true, products: [] }
        case REQUEST_PRODUCTS_SUCCESS:
            return { loading: false, products: action.payload }
        case REQUEST_PRODUCTS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const productDetailReducer = (state = {product: {}}, action) => {
    switch (action.type) {
        case REQUEST_PRODUCT_DETAIL_INITIAL:
            return { loading: true, product: {...state} }
            break;
        case REQUEST_PRODUCT_DETAIL_SUCCESS:
            return { loading: false, product: action.payload }
            break;
        case REQUEST_PRODUCT_DETAIL_FAIL:
            return { loading: false, error: action.payload }
            break;
    
        default:
            return state
            break;
    }
}