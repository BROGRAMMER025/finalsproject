import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useSnackbar } from 'notistack';

function Orders({ refresh, setRefresh }) {
  const { enqueueSnackbar } = useSnackbar();

  const [orderData, setOrderData] = useState({
    name_of_parcel: '',
    destination: '',
    current_location: '',
    pickup: '',
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
                <Form.Group controlId="name_of_parcel">
                  <Form.Label>Name of Parcel:</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="name_of_parcel"
                    value={orderData.name_of_parcel}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="destination">
                  <Form.Label>Destination:</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="destination"
                    value={orderData.destination}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="current_location">
                  <Form.Label>Current Location:</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="current_location"
                    value={orderData.current_location}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="pickup">
                  <Form.Label>Pickup:</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="pickup"
                    value={orderData.pickup}
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
    </Container>
  );
}

export default Orders;
