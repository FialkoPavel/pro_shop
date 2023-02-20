import React, { useEffect } from 'react'
import { cartReducer } from '../reducer/cartReducer'
import { cartAction, deleteCartItem } from '../action/cartAction'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { Link, useNavigate } from 'react-router-dom'
import AlertMessage from '../components/AlertMessage'
import {  useParams } from 'react-router-dom'
import { Row, Col, Image, Form, ListGroup, Button, Card } from 'react-bootstrap'

const CartScreen = () => {

    const dispatch = useDispatch()
    const {id} = useParams()
    const count = window.location.search ? window.location.search.split('=')[1] : 1

    const cart = useSelector(state => state.cart)

    const { cartItems } = cart
    const navigate = useNavigate()

    const checkoutHandler = () => {
        navigate('/login?redirect=shipping')
    }   

    const removeFromCart = (id) => {
      dispatch(deleteCartItem(id))
    }

    useEffect(() => {
        if (id) {
            dispatch(cartAction(id, count))
        }
    }, [dispatch, id, count])

  return (
    <Row>
    <Col md={8}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <AlertMessage message='No items added to cart'>
           <Link to='/'>Go Back</Link>
        </AlertMessage>
      ) : (
        <ListGroup variant='flush'>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.product}>
              <Row>
                <Col md={2}>
                  <Image src={`/${item.image}`} alt={item.name} fluid rounded />
                </Col>
                <Col md={3}>
                  <Link to={`/products/${item.product}`}>{item.name}</Link>
                </Col>
                <Col md={2}>${item.price}</Col>
                <Col md={2}>
                    {
                        <Form.Control as="select" onChange={(e) => { cartAction(item.product, e.target.value) }} value={count}>
                            {
                                Array.from({length: item.countInStock}, (_, i) => i + 1).map(i => (
                                    <option key={i} value={i}>
                                        {i}
                                    </option>
                                ))
                            }                                   
                        </Form.Control>                               
                    }
                </Col>
                <Col md={2}>
                  <Button
                    type='button'
                    variant='light'
                    onClick={() => removeFromCart(item.product)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Col>
    <Col md={4}>
      <Card>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h4>
              Subtotal items ({cartItems.reduce((acc, item) => acc + item.count, 0)})
            </h4>
            $
            {
                cartItems
                .reduce((acc, item) => acc + item.count * item.price, 0)
                .toFixed(2)
              }
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type='button'
              className='btn-block'
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              Proceed To Pay
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  </Row>
  )
}

export default CartScreen