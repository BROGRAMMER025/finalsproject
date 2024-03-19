import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function OrdersUpdate() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [newDestination, setNewDestination] = useState('');
  const [orderId, setOrderId] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const navigate = useNavigate();

  const handleNewDestinationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://sendit-backend-e3x7.onrender.com/auth/parcel/update',
        {
          orderId,
          newDestination
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      if (response.status === 200) {
        setFeedbackMessage('New destination submitted successfully');
      }
    } catch (error) {
      console.error('Error updating destination:', error.message);
      alert('Failed to update destination. Please try again.');
    }
  };

  const handleCancelOrderSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://sendit-backend-e3x7.onrender.com/auth/parcel/cancel',
        {
          orderId
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      if (response.status === 200) {
        setFeedbackMessage('Order cancelled successfully');
      }
    } catch (error) {
      console.error('Error cancelling order:', error.message);
      alert('Failed to cancel order. Please try again.');
    }
  };

  return (
    <>
      <style>
        {`
          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            background-color: #CFD8DC;
          }
        `}
      </style>
    
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Update Destination</Card.Title>
                <Form onSubmit={handleNewDestinationSubmit}>
                  <Form.Group controlId="tracking_number">
                    <Form.Label>Order ID:</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={orderId}
                      onChange={(e) => setOrderId(e.target.value)}
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
                  <Button variant="primary" type="submit" className="w-100">
                    Update Destination
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
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
                <Link to="/contact">
                  <button className="btn btn-primary" style={{ marginBottom: '5px' }}>ContactUs</button>
                </Link>
              </div>
              <div className="col-12 text-center" style={{ borderTop: '1px solid gray', paddingTop: '5px', marginTop: '5px' }}>
                <p>© 2024 SendIt. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
}

export default OrdersUpdate;
