import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  const [showStatus, setShowStatus] = useState(false);

  const handleSearch = () => {
    // Logic to fetch status from backend and update state
    setShowStatus(true);
  };

  return (
    
    <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/mehrnaz-taghavishavazi-tHE5_sUytWA-unsplash.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <Container fluid>
        {/* Navbar */}
        <Row>
          <Col>
            {/* Navbar component */}
          </Col>
        </Row>

        {/* Search Bar */}
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Form className="d-flex">
                  <Form.Control type="text" placeholder="Track your package" className="me-2" />
                  <Button variant="primary" type="button" onClick={handleSearch}>
                    <i className="bi bi-search"></i> {/* Bootstrap Icons search icon */}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Slogan Card */}
        <Row className="mt-5">
          <Col>
            <Card className="bg-dark text-white">
              <Card.Body className="d-flex justify-content-center align-items-center" style={{ height: '12.5vh' }}>
                <p className="m-0 fs-4 text-white">Delivering Excellence, One Package at a Time!</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Background Image */}
        <Row>
          <Col className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Link to="/orders"> {/* Use Link component to navigate to Orders component */}
              <Card className="text-center" style={{ width: '300px', borderRadius: '20px', backgroundColor: ' #ff0000' }}>
                <Card.Body>
                  <p className="text-white m-0">Order Now</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>

        {/* Status Card */}
        {showStatus && (
          <Row className="justify-content-center mt-3">
            <Col md={6}>
              <Card>
                <Card.Body>
                  <h5>Current Status:</h5>
                  {/* Logic to display actual status fetched from backend */}
                  <p>Status: In Transit</p>
                  <p>ETA: 2 days</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}

        {/* Footer */}
        <footer className="footer" style={{ backgroundColor: '#010101', color: 'white', marginTop: '50px' }}>
          <div className="container">
            <div className="row">

              <div className="col-md-3">
                <p style={{ color: 'gray', display: 'inline-block', marginBottom: '40px', marginTop: '40px' }}>
                  At SendIt, your delivery is our main priority. We obsess over customer satisfaction and getting your package there, wherever that may be.
                </p>
                <button className="btn btn-primary">ABOUT US</button>
              </div>

              <div className="col-md-3">
                <h4 style={{ color: 'white', display: 'inline-block', marginBottom: '40px', marginTop: '40px' }}>
                  <span style={{ position: 'relative', zIndex: 1, borderBottom: '4px solid #ff0000', paddingBottom: '10px' }}>ContactUs</span>
                  <span style={{ position: 'relative', zIndex: 0, }}></span>
                </h4>
                <p style={{ color: 'gray' }}>Feel free to reach out to us at any moment</p>
                <Link to="/contact"> {/* Use Link component to navigate to ContactForm component */}
                  <button className="btn btn-primary">ContactUs</button>
                </Link>
              </div>

              {/* Copyright Notice */}
              <div className="row">
                <div className="col-md-12 text-center" style={{ borderTop: '1px solid gray', marginTop: '40px', paddingTop: '20px', paddingBottom: '10px' }}>
                  <p>© 2024 SendIt. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </Container>
    </div>
  );
}

export default Home;
