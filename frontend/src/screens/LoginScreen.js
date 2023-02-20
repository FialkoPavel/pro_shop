import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../action/userAction'
import AlertMessage from '../components/AlertMessage.js'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer.js'
import { Link, useNavigate} from 'react-router-dom'
import { Error } from 'mongoose'
 
const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const userLogin = useSelector((state) => state.user)
    const { loading, error, userInfo } = userLogin

    const redirect = window.location.search ? window.location.search.split('=')[1] : '/'
  
    useEffect(() => {
      if (userInfo && Object.keys(userInfo).length) {
        navigate(`${redirect}`)
      }
    }, [userInfo, redirect])
  
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(userAction(email, password))
    }
  
  return (
    <FormContainer>
        { error && <AlertMessage message={error} variant='primary' /> }
        { loading && <Loader /> }
        <h2>Sign In</h2>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
                type="email" 
                placeholder="Enter email" 
                onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button 
            variant="primary" 
            type="submit">
            Login
        </Button>
        <Row className='py-3'>
            <Col>
                New customer?{ ' ' }
                <Link to={redirect ? `/register?redirect=${redirect}` : '/register'} > 
                Register
                </Link>
            </Col>
        </Row>
        </Form>
  </FormContainer>
  )
}

export default LoginScreen