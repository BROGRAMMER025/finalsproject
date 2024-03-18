import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function OrdersUpdate() {
  const [packageId, setPackageId] = useState('');
  const [newDestination, setNewDestination] = useState('');
  const [newPickup, setNewPickup] = useState('');
  const [orderId, setOrderId] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleNewDestinationSubmit = (e) => {
    e.preventDefault();
    // Backend logic to update order with new destination
    // Here, you can make a fetch request to your backend API
    // to update the order with the provided packageId, newDestination, and newPickup
    // You can handle success and failure messages accordingly
    setFeedbackMessage('New destination submitted successfully');
  };

  const handleCancelOrderSubmit = (e) => {
    e.preventDefault();
    // Backend logic to cancel order
    // Here, you can make a fetch request to your backend API
    // to cancel the order with the provided orderId
    // You can handle success and failure messages accordingly
    setFeedbackMessage('Order cancelled successfully');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        {/* First Card - Update Destination */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Update Destination</Card.Title>
              <Form onSubmit={handleNewDestinationSubmit}>
                <Form.Group controlId="packageId">
                  <Form.Label>Package ID:</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={packageId}
                    onChange={(e) => setPackageId(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="newDestination">
                  <Form.Label>New Destination:</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={newDestination}
                    onChange={(e) => setNewDestination(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="newPickup">
                  <Form.Label>New Pickup:</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={newPickup}
                    onChange={(e) => setNewPickup(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Update Destination
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Card - Cancel Order */}
        <Col md={6} className="mt-3 mt-md-0">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Cancel Order</Card.Title>
              <Form onSubmit={handleCancelOrderSubmit}>
                <Form.Group controlId="orderId">
                  <Form.Label>Order ID:</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                  />
                </Form.Group>
                <Button variant="danger" type="submit" className="w-100">
                  Cancel Order
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Feedback Message */}
      {feedbackMessage && (
        <Row className="mt-3">
          <Col>
            <Card>
              <Card.Body>
                <p className="text-center">{feedbackMessage}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {/* Footer */}
<footer className="footer" style={{ backgroundColor: '#010101', color: 'white', position: 'fixed', bottom: 0, left: 0, right: 0, height: '120px' }}>
  <div className="container-fluid">
    <div className="row">

      <div className="col-md-6">
        <p style={{ color: 'gray', marginBottom: '5px' }}>
          At SendIt, your delivery is our main priority. We obsess over customer satisfaction and getting your package there, wherever that may be.
        </p>
        <button className="btn btn-primary" style={{ marginBottom: '5px' }}>ABOUT US</button>
      </div>

      <div className="col-md-6">
        <h4 style={{ color: 'white', marginBottom: '5px' }}>
          <span style={{ position: 'relative', zIndex: 1, borderBottom: '2px solid #ff0000', paddingBottom: '3px' }}>ContactUs</span>
          <span style={{ position: 'relative', zIndex: 0 }}></span>
        </h4>
        <p style={{ color: 'gray', marginBottom: '5px' }}>Feel free to reach out to us at any moment</p>
        <Link to="/contact"> {/* Use Link component to navigate to ContactForm component */}
          <button className="btn btn-primary" style={{ marginBottom: '5px' }}>ContactUs</button>
        </Link>
      </div>

      {/* Copyright Notice */}
      <div className="col-12 text-center" style={{ borderTop: '1px solid gray', paddingTop: '5px', marginTop: '5px' }}>
        <p>© 2024 SendIt. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>




    </Container>
  );
}

export default OrdersUpdate;
