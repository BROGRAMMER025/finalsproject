import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (showLogoutMessage) {
      setTimeout(() => {
        setShowLogoutMessage(false);
      }, 3000);
    }
  }, [showLogoutMessage]);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
    setShowLogoutMessage(true);
    setExpanded(false); 
    window.location.href = "/";
  };

  return (
    <Navbar expand="lg" className="bg-primary" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="me-auto flex-grow-1">SENDIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="mx-4" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/Orders" className="mx-4" onClick={() => setExpanded(false)}>Orders</Nav.Link>
            <Nav.Link as={Link} to="/userparcels" className="mx-4" onClick={() => setExpanded(false)}>Parcels</Nav.Link>
            <Nav.Link as={Link} to="/adminparcels" className="mx-4" onClick={() => setExpanded(false)}>AdminParcels</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs" className="mx-4" onClick={() => setExpanded(false)}>AboutUs</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-4" onClick={() => setExpanded(false)}>Contact</Nav.Link>
            {isLoggedIn ? (
              <Nav.Link onClick={handleLogout} className="mx-4">Logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/Login" className="mx-4" onClick={() => setExpanded(false)}>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      {showLogoutMessage && (
        <Alert variant="success" className="position-fixed top-0 start-50 translate-middle-x mt-2">
          Logged out successfully
        </Alert>
      )}
    </Navbar>
  );
};

export default NavBar;
