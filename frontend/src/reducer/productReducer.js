import {REQUEST_PRODUCTS_INITIAL, REQUEST_PRODUCTS_SUCCESS, REQUEST_PRODUCTS_FAIL} from '../constants/productsConstants'

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