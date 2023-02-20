import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { userRegisterAction } from '../action/userAction'
import AlertMessage from '../components/AlertMessage.js'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer.js'
import { Link, useNavigate} from 'react-router-dom'
import { Error } from 'mongoose'
 
const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = window.location.search ? window.location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo && Object.keys(userInfo).length) {
      navigate(`${redirect}`)
    }
  }, [userInfo, redirect])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(userRegisterAction(name, email, password))
    }
  }

  return (
    <FormContainer>
      {message}
        { error && <AlertMessage message={error} variant='primary' /> }
        { loading && <Loader /> }
        <h2>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter name" 
                    onChange={(e) => setName(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="confirmPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Confirm Password" 
                    onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Group>

            <Button 
                variant="primary" 
                type="submit">
                Register
            </Button>
            <Row className='py-3'>
                <Col>
                    Already have account?{ ' ' }
                    <Link to={redirect ? `/login?redirect=${redirect}` : '/login'} > 
                    Login
                    </Link>
                </Col>
            </Row>
        </Form>
  </FormContainer>
  )
}

export default RegisterScreen