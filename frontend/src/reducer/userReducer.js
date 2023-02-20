import {
    REQUEST_LOGIN_FAIL, 
    REQUEST_LOGIN_SUCCESS,
    REQUEST_LOGIN_INITIAL,
    REQUEST_LOGIN_LOGOUT,
    REQUEST_REGISTER_FAIL, 
    REQUEST_REGISTER_SUCCESS,
    REQUEST_REGISTER_INITIAL,
    USER_PROFILE_FAIL,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_INITIAL
} from '../constants/userConstants.js'

export const userReducer = ( state = {}, action ) => {
    switch(action.type) {
        case REQUEST_LOGIN_INITIAL:
            return { loading: true}
        case REQUEST_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case REQUEST_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case REQUEST_LOGIN_LOGOUT:
            return { }
        default:
            return state
    }
}

export const userRegisterReducer = ( state = {}, action ) => {
    switch(action.type) {
        case REQUEST_REGISTER_INITIAL:
            return { loading: true}
        case REQUEST_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case REQUEST_REGISTER_FAIL:
            return { loading: false, error: action.payload }
        case REQUEST_LOGIN_LOGOUT:
            return { }
        default:
            return state
    }
}


export const userProfileReducer = ( state = {}, action ) => {
    switch(action.type) {
        case USER_PROFILE_INITIAL:
            return { loading: true}
        case USER_PROFILE_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_PROFILE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}