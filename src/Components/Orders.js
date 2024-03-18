import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';

function Orders({ refresh, setRefresh }) {
  const { enqueueSnackbar } = useSnackbar();

  const [orderData, setOrderData] = useState({
    name: '',
    description:'',
    destination_location: '',
    pickup_location: '',
    weight: '',
    price: 0,
  });

  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleChange = (e) => {
    const newWeight = e.target.value;
    const calculatedPrice = parseInt(newWeight, 10) * 150;

    setOrderData({
      ...orderData,
      [e.target.name]: newWeight,
      price: calculatedPrice,
    });
  };

  const handleSubmit = () => {
    fetch('https://sendit-backend-lje2.onrender.com/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(orderData),
      mode: 'cors',
    })
      .then((response) => {
        if (response.status === 201) {
          setOrderSubmitted(true);
          enqueueSnackbar('Order submitted successfully', { variant: 'success' });
        } else if (response.status === 401) {
          enqueueSnackbar('Unauthorized access. Please log in.', {
            variant: 'error',
          });
          window.location.href = '/login'; // Redirect to login page
        } else {
          enqueueSnackbar('Failed to submit order', { variant: 'error' });
        }
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
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
                <Card.Title className="text-center">Place an Order</Card.Title>
                <Form onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}>
                  <Form.Group controlId="name">
                    <Form.Label>Name of Parcel:</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      name="name"
                      value={orderData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="description">
                    <Form.Label>Parcel Description:</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      name="description"
                      value={orderData.description}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="destination_location">
                    <Form.Label>Destination:</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      name="destination_location"
                      value={orderData.destination_location}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  
                  <Form.Group controlId="pickup_location">
                    <Form.Label>Pickup Location:</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      name="pickup_location"
                      value={orderData.pickup_location}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="weight">
                    <Form.Label>Weight:</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      name="weight"
                      value={orderData.weight}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {orderData.weight && (
                    <p className="text-muted mb-3">
                      Estimated Price: Ksh {orderData.price}
                    </p>
                  )}
                  <Button variant="primary" type="submit">
                    Place Order
                  </Button>
                </Form>
                {orderSubmitted && (
                  <Card className="mt-3">
                    <Card.Body>
                      <Card.Title className="text-center">Order Submitted Successfully</Card.Title>
                    </Card.Body>
                  </Card>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

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
    </>
  );
}

export default Orders;
