 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export const NavBar1=() =>{
  return (
    <>
    <h1>MainApp</h1>
      <Navbar className='navbar ' bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand className='navbar-brand' href="#home">Navbar</Navbar.Brand> */}
          <Navbar.Brand className='navbar-brand'><Link to="/">Navbar</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link   as={Link} to='/HomePage'>Home</Nav.Link>
            <Link className='nav-link' to='/AboutPage'>About</Link>
            <Link className='nav-link' to='/LoginPage'>Login</Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

