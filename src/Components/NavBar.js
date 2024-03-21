import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = ({ isLoggedIn, handleLogout }) => {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="me-auto">SENDIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="mx-4">Home</Nav.Link>
            <Nav.Link as={Link} to="/orders" className="mx-4">Orders</Nav.Link>
            <Nav.Link as={Link} to="/ordersupdate" className="mx-4">OrdersUpdate</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-4">Contact</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className="mx-4">AboutUs</Nav.Link>
            
            {isLoggedIn ? (
              <Nav.Link onClick={handleLogout} className="mx-4">Logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login" className="mx-4">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
