import { configureStore, applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import {productReducer} from "./reducer/productReducer";

const reducer = combineReducers({
    productListReducer: productReducer
})

const initialState = {}

const middleware = [thunk]

const store = configureStore(
    {reducer},
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
