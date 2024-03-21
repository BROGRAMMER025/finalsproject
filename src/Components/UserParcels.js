import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Alert, Button, Fade, Form } from 'react-bootstrap';
import axios from 'axios';

function UserParcels() {
  const [parcels, setParcels] = useState([]);
  const [error, setError] = useState('');
  const [cancelMessage, setCancelMessage] = useState('');
  const [newDestinations, setNewDestinations] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [cannotChangeDestinationMessage, setCannotChangeDestinationMessage] = useState('');

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
          setError('Please Login.');
          return;
        }

        const response = await axios.get('https://sendit-backend-e3x7.onrender.com/parcel', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setParcels(response.data);
      } catch (error) {
        console.error('Error fetching parcels:', error);
        setError('Error fetching parcels.');
      }
    };

    fetchParcels();
  }, []);

  const handleUpdateDestination = async (parcelId) => {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        setError('Access token not found.');
        return;
      }
  
      const newDestination = newDestinations[parcelId];
      if (!newDestination) {
        setError('New destination cannot be empty.');
        setTimeout(() => {
          setError('');
        }, 2000); 
        return;
      }
  
      const parcel = parcels.find(parcel => parcel.tracking_number === parcelId);
      if (parcel.status === 'delivered') {
        setCannotChangeDestinationMessage('Parcel has already been delivered, cannot modify destination.');
        setTimeout(() => {
          setCannotChangeDestinationMessage('');
        }, 3000);
        return;
      }
  
      await axios.patch(`https://sendit-backend-e3x7.onrender.com/parcel/destination/${parcelId}`, { new_destination: newDestination }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
  
      setParcels(prevParcels => {
        return prevParcels.map(parcel => {
          if (parcel.tracking_number === parcelId) {
            return { ...parcel, destination_location: newDestination };
          }
          return parcel;
        });
      });
  
      setNewDestinations(prevNewDestinations => {
        const updatedNewDestinations = { ...prevNewDestinations };
        delete updatedNewDestinations[parcelId];
        return updatedNewDestinations;
      });

      setSuccessMessage('Parcel destination updated successfully.');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error updating destination:', error);
      setError('Error updating destination.');
      setTimeout(() => {
        setError('');
      }, 2500);
    } finally {
      setNewDestinations({});
    }
  };
  
  const handleCancelParcel = async (parcelId) => {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        setError('Access token not found.');
        return;
      }
  
      await axios.put(`https://sendit-backend-e3x7.onrender.com/parcel/cancel/${parcelId}`, { status: 'canceled' }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      setCancelMessage('Parcel cancellation successful.');
      setTimeout(() => {
        setCancelMessage('');
      }, 1500);

      setParcels(prevParcels => {
        return prevParcels.map(parcel => {
          if (parcel.tracking_number === parcelId) {
            return { ...parcel, status: 'canceled' };
          }
          return parcel;
        });
      });
    } catch (error) {
      console.error('Error canceling parcel:', error);
      setError('Cannot cancel delivered Parcel !.');
      setTimeout(() => {
        setError('');
      }, 1500);
    }
  };

  const handleNewDestinationChange = (e, parcelId) => {
    setNewDestinations({
      ...newDestinations,
      [parcelId]: e.target.value
    });
  };
  return (
    <Container className="mt-5">
    {(error || cancelMessage || successMessage || cannotChangeDestinationMessage) && (
      <Row>
        <Col>
          <Fade in={!!error}>
            <div>
              {error && <Alert variant="danger">{error}</Alert>}
            </div>
          </Fade>
          <Fade in={!!cancelMessage}>
            <div>
              {cancelMessage && <Alert variant="success">{cancelMessage}</Alert>}
            </div>
          </Fade>
          <Fade in={!!successMessage}>
            <div>
              {successMessage && <Alert variant="success">{successMessage}</Alert>}
            </div>
          </Fade>
          <Fade in={!!cannotChangeDestinationMessage}>
            <div>
              {cannotChangeDestinationMessage && <Alert variant="danger">{cannotChangeDestinationMessage}</Alert>}
            </div>
          </Fade>
        </Col>
      </Row>
    )}

    <Row>
      <Col>
        <h2 className="text-center mb-4">Active Parcels</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Tracking Number</th>
              <th>Name</th>
              <th>Description</th>
              <th>Destination</th>
              <th>New Destination</th>
              <th>Pickup Location</th>
              <th>Weight</th>
              <th>Status</th>
              <th>Update Destination</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {parcels.filter(parcel => parcel.status.toLowerCase() !== 'canceled').map(parcel => (
              <tr key={parcel.tracking_number}>
                <td>{parcel.tracking_number}</td>
                <td>{parcel.name}</td>
                <td>{parcel.description}</td>
                <td>{parcel.destination_location}</td>
                <td>
                  <Form.Control
                    type="text"
                    value={newDestinations[parcel.tracking_number] || ''}
                    onChange={(e) => handleNewDestinationChange(e, parcel.tracking_number)}
                  />
                </td>
                <td>{parcel.pickup_location}</td>
                <td>{parcel.weight}</td>
                <td>{parcel.status}</td>
                <td>
                  {parcel.status.toLowerCase() !== 'canceled' && (
                    <>
                      <Button variant="primary" onClick={() => handleUpdateDestination(parcel.tracking_number)}>Update</Button>
                    </>
                  )}
                </td>
                <td>
                  {parcel.status.toLowerCase() !== 'canceled' && (
                    <>
                      <Button variant="danger" onClick={() => handleCancelParcel(parcel.tracking_number)}>Cancel</Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>

    <Row>
      <Col>
        <h2 className="text-center mb-4">Canceled Parcels</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Tracking Number</th>
              <th>Name</th>
              <th>Description</th>
              <th>Destination Location</th>
              <th>Pickup Location</th>
              <th>Weight</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {parcels.filter(parcel => parcel.status.toLowerCase() === 'canceled').map(parcel => (
              <tr key={parcel.tracking_number}>
                <td>{parcel.tracking_number}</td>
                <td>{parcel.name}</td>
                <td>{parcel.description}</td>
                <td>{parcel.destination_location}</td>
                <td>{parcel.pickup_location}</td>
                <td>{parcel.weight}</td>
                <td>{parcel.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);
}

export default UserParcels;