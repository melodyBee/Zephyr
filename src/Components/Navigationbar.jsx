import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';



function Navigationbar() {
  return (
    <>
        
    <Navbar expand="lg" bg="light">
    <Container>
      <Link className='navbar-brand' to="/">Zephyr</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link className='nav-link' to="/">Home</Link>
          <Link className='nav-link' to="/login">Login</Link>
          <Link className='nav-link' to="/Categories">Categories</Link>
          <Link className='nav-link' to="/Products">Products</Link>
          <Link className='btn btn-dark' to="/SignUp">SignUp</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

</>
  )
}

export default Navigationbar