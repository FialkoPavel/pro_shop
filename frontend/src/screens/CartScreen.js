import React, { useEffect } from 'react'
import { cartReducer } from '../reducer/cartReducer'
import { cartAction } from '../action/cartAction'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import AlertMessage from '../components/AlertMessage'
import {  useParams } from 'react-router-dom'

const CartScreen = () => {

    const dispatch = useDispatch()
    const {id} = useParams()
    const count = location.search ? location.search.split('=')[1] : 1

    const cart = useSelector(state => state.cart)

    const { cartItems } = cart

    useEffect(() => {
        if (id) {
            dispatch(cartAction(id, count))
        }
    }, [dispatch])

  return (
    <div>CartScreen</div>
  )
}

export default CartScreen