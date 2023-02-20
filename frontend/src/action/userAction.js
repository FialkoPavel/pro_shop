import axios from 'axios'
import {
    REQUEST_LOGIN_FAIL, 
    REQUEST_LOGIN_SUCCESS,
    REQUEST_LOGIN_INITIAL,
    REQUEST_REGISTER_FAIL, 
    REQUEST_REGISTER_SUCCESS,
    REQUEST_REGISTER_INITIAL,
    REQUEST_LOGIN_LOGOUT,
    USER_PROFILE_FAIL,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_INITIAL
} from '../constants/userConstants.js'

export const userAction = (email, password) => async(dispatch) => {
    try {
        dispatch({type: REQUEST_LOGIN_INITIAL})

        const response = await axios.post('/api/users/login', {email, password})
        const userInfo = response.data

        if (userInfo) {
            dispatch({
                type: REQUEST_LOGIN_SUCCESS, 
                payload: userInfo
            })
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
        } 
    } catch (error) {
        dispatch({
            type: REQUEST_LOGIN_FAIL, 
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const userRegisterAction = (name, email, password) => async(dispatch) => {
    try {
        dispatch({type: REQUEST_REGISTER_INITIAL})

        const response = await axios.post('/api/users', {name, email, password})
        const userInfo = response.data
    
        dispatch({
            type: REQUEST_REGISTER_SUCCESS, 
            payload: userInfo
        })

        dispatch({
            type: REQUEST_LOGIN_SUCCESS, 
            payload: userInfo
        })

        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        
    } catch (error) {
        dispatch({
            type: REQUEST_REGISTER_FAIL, 
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const userLogOutAction = () => async(dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type: REQUEST_LOGIN_LOGOUT
    })
}
   
export const userProfileAction = (email, name, password) => async(dispatch, getState) => {
    try {
        dispatch({type: USER_PROFILE_INITIAL})

            console.log('getState', getState().user)

        const response = await axios.get('/api/users/profie', {
            headers: {
                'Authorization': `Bearer 123`
            }
        })

        console.log('response', response);
        const userInfo = response.data

        if (userInfo) {
            dispatch({
                type: USER_PROFILE_SUCCESS, 
                payload: userInfo
            })
           
        } 
    } catch (error) {
        dispatch({
            type: USER_PROFILE_FAIL, 
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}