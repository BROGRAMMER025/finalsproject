import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Parcel = () => {
  // State for parcel creation form
  const [parcelType, setParcelType] = useState('');
  const [parcelWeight, setParcelWeight] = useState('');
  const [destinationCounty, setDestinationCounty] = useState('');
  const [destinationStreet, setDestinationStreet] = useState('');

  // State for destination change form
  const [newDestinationCounty, setNewDestinationCounty] = useState('');
  const [newDestinationStreet, setNewDestinationStreet] = useState('');

  // Function to handle parcel creation form submission
  const handleParcelCreationSubmit = (event) => {
    event.preventDefault();
    // Process parcel creation form submission
    console.log('Parcel creation submitted');
    // Reset form fields
    setParcelType('');
    setParcelWeight('');
    setDestinationCounty('');
    setDestinationStreet('');
  };

  // Function to handle destination change form submission
  const handleDestinationChangeSubmit = (event) => {
    event.preventDefault();
    // Process destination change form submission
    console.log('Destination change submitted');
    // Reset form fields
    setNewDestinationCounty('');
    setNewDestinationStreet('');
  };

  // Function to handle parcel cancellation
  const handleParcelCancellation = () => {
    // Process parcel cancellation
    console.log('Parcel cancelled');
  };

  return (
    <div className="container-fluid" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/arno-senoner-yqu6tJkSQ_k-unsplash.jpg)`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <div className="row justify-content-center">
        {/* Parcel Creation Card */}
        <div className="col-md-6 mt-5">
          <Card>
            <Card.Body>
              <Card.Title>Create Order</Card.Title>
              <Form onSubmit={handleParcelCreationSubmit}>
                <Form.Group controlId="parcelType">
                  <Form.Label>Type of Parcel:</Form.Label>
                  <Form.Control as="select" value={parcelType} onChange={(e) => setParcelType(e.target.value)}>
                    <option value="">Select Type</option>
                    <option value="documents">Documents</option>
                    <option value="home appliances">Home Appliances</option>
                    <option value="tech appliances">Tech Appliances</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="parcelWeight">
                  <Form.Label>Parcel Weight:</Form.Label>
                  <Form.Control as="select" value={parcelWeight} onChange={(e) => setParcelWeight(e.target.value)}>
                    <option value="">Select Weight</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="destinationCounty">
                  <Form.Label>Destination County:</Form.Label>
                  <Form.Control type="text" value={destinationCounty} onChange={(e) => setDestinationCounty(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="destinationStreet">
                  <Form.Label>Destination Street Address:</Form.Label>
                  <Form.Control type="text" value={destinationStreet} onChange={(e) => setDestinationStreet(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">Create Parcel</Button>
              </Form>
            </Card.Body>
          </Card>
        </div>

        {/* Destination Change Card */}
        <div className="col-md-6 mt-5">
          <Card>
            <Card.Body>
              <Card.Title>Parcel Destination & Cancellation</Card.Title>
              <Form onSubmit={handleDestinationChangeSubmit}>
                <Form.Group controlId="newDestinationCounty">
                  <Form.Label>New Destination County:</Form.Label>
                  <Form.Control type="text" value={newDestinationCounty} onChange={(e) => setNewDestinationCounty(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="newDestinationStreet">
                  <Form.Label>New Destination Street Address:</Form.Label>
                  <Form.Control type="text" value={newDestinationStreet} onChange={(e) => setNewDestinationStreet(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">Change Destination</Button>
              </Form>
              <Button variant="danger" onClick={handleParcelCancellation}>Cancel Parcel</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Parcel;
