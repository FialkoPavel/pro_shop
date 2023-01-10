import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
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
                    <Nav.Link as={Link} to="/login"><i className='fas fa fa-user'></i>Sign In</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header