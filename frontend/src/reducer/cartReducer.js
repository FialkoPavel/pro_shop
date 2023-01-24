import { CART_ADD_ITEM, CART_DELETE_ITEMS, CART_ERROR_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
                const item = action.payload
                const isExist = state.cartItems.find(e => e.product === item.product)
                if(isExist) {
                    return {
                        ...state,
                        cartItems: state.cartItems.map(e => e.product === item.product ? item : e)
                    }
                } else {
                    return {
                        ...state,
                        cartItems: [...state.cartItems, item]
                    }
                }
            break;
        case CART_ERROR_ITEM:
            return {error: action.payload}    
            break;
        default:
            return state
            break;
    }
}