import { configureStore, applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import {productReducer, productDetailReducer} from "./reducer/productReducer";
import { cartReducer } from "./reducer/cartReducer";

const reducer = combineReducers({
    productList: productReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
})

const cartForStorage = localStorage.getItem('cartItems') ?
       JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart: { cartItems: cartForStorage }
}

const middleware = [thunk]

const store = configureStore(
    {reducer},
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
