import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogOutAction } from '../action/userAction'

const Header = () => {

  const user = useSelector(state => state.user)
  const { userInfo } = user
  const dispatch = useDispatch()

  const logOutHandler = () => {
    dispatch(userLogOutAction()) 
  }

  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Link to="/">
                <Navbar.Brand >Pro Shop</Navbar.Brand>
              </Link>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/cart"><i className='fas fa fa-shopping-cart'></i>Cart</Nav.Link>
                    { userInfo ? (
                      <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={logOutHandler}>Sign Out</NavDropdown.Item>
                      </NavDropdown>
                    ) :
                      <Nav.Link as={Link} to="/login"><i className='fas fa fa-user'></i>Sign In</Nav.Link>
                    }  
                </Nav>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header