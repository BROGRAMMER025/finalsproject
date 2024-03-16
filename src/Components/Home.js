import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
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
                  <Button variant="primary" type="submit">
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
                <p className="m-0 fs-4 text-black">Delivering Excellence, One Package at a Time!</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Background Image */}
        <Row>
          <Col className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Link to="/orders"> {/* Use Link component to navigate to Orders component */}
              <Card className="text-center" style={{ width: '300px', borderRadius: '20px', backgroundColor: '#800000' }}>
                <Card.Body>
                  <p className="text-white m-0">Order Now</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>

        {/* Footer */}
        <Row className="mt-5">
          <Col>
            <Card className="bg-dark text-white">
              <Card.Body className="d-flex justify-content-center align-items-center" style={{ height: '12.5vh' }}>
                <p className="mb-0">SendiT 2024. All rights reserved. <i className="bi bi-copyright"></i></p> {/* Bootstrap Icons copyright icon */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
