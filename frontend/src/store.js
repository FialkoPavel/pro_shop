import { configureStore, applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import {productReducer, productDetailReducer} from "./reducer/productReducer";
import { cartReducer } from "./reducer/cartReducer";
import { userReducer, userRegisterReducer } from './reducer/userReducer'

const reducer = combineReducers({
    productList: productReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    user: userReducer,
    userRegister: userRegisterReducer
})

const cartForStorage = localStorage.getItem('cartItems') ?
       JSON.parse(localStorage.getItem('cartItems')) : []

const userForStorage = localStorage.getItem('userInfo') ?
       JSON.parse(localStorage.getItem('userInfo')) : []

const initialState = {
    productList: {},
    productDetail: {},
    cart: { cartItems: cartForStorage },
    user: { userInfo:  userForStorage},
    userRegister: {}
}

const middleware = [thunk]

const store = configureStore(
    {reducer},
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
