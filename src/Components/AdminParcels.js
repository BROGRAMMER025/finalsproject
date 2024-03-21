import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Form, Alert, Button } from 'react-bootstrap';
import axios from 'axios';

function AdminParcels() {
  const [parcels, setParcels] = useState([]);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [newLocations, setNewLocations] = useState({});

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
          setError('Access token not found.');
          return;
        }

        let url = 'https://sendit-backend-e3x7.onrender.com/parcels';
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setParcels(response.data);
      } catch (error) {
        console.error('Error fetching parcels:', error);
        setError('Error fetching parcels.');
        setTimeout(() => {
          setError('');
        }, 3000);
      }
    };

    fetchParcels();
  }, []);

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value.toLowerCase());
  };

  const handleStatusChange = async (parcelId, newStatus) => {
    try {
      setError('');
      setSuccessMessage('');
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        setError('Access token not found.');
        return;
      }

      if (newStatus === 'canceled' || newStatus === 'delivered') {
        setError('Cannot update status to canceled or delivered.');
        return;
      }

      const updatedParcels = parcels.map(p => {
        if (p.tracking_number === parcelId) {
          return { ...p, status: newStatus };
        }
        return p;
      });

      await axios.put(`https://sendit-backend-e3x7.onrender.com/parcel/status/${parcelId}`, { status: newStatus }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      setParcels(updatedParcels);
      setSuccessMessage('Order status successfully updated.');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error updating status:', error);
      setError('Cannot update status of cancelled order.');
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  const handleLocationChange = async (parcelId) => {
    try {
      setError('');
      setSuccessMessage('');
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        setError('Access token not found.');
        return;
      }

      const parcelToUpdate = parcels.find(parcel => parcel.tracking_number === parcelId);

      if (parcelToUpdate.status.toLowerCase() === 'canceled') {
        setError('Cannot update location for a canceled parcel.');
        setTimeout(() => {
          setError('');
        }, 3000);
        return;
      }

      const newLocation = newLocations[parcelId];
      if (!newLocation) {
        setError('New location cannot be empty.');
        setTimeout(() => {
          setError('');
        }, 3000);
        return;
      }

      await axios.put(`https://sendit-backend-e3x7.onrender.com/parcel/location/${parcelId}`, { current_location: newLocation.toLowerCase() }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      setParcels(prevParcels => {
        return prevParcels.map(parcel => {
          if (parcel.tracking_number === parcelId) {
            return { ...parcel, present_location: newLocation };
          }
          return parcel;
        });
      });

      setNewLocations(prevNewLocations => {
        const updatedNewLocations = { ...prevNewLocations };
        delete updatedNewLocations[parcelId];
        return updatedNewLocations;
      });

      setSuccessMessage('Parcel location updated successfully.');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error updating location:', error);
      setError('Error updating location.');
      setTimeout(() => {
        setError('');
      }, 2500);
    }
  };

  const handleNewLocationChange = (e, parcelId) => {
    setNewLocations({
      ...newLocations,
      [parcelId]: e.target.value
    });
  };

  const filteredParcels = statusFilter ? parcels.filter(parcel => parcel.status.toLowerCase() === statusFilter) : parcels;
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          {error && <Alert variant="danger" className="fade show">{error}</Alert>}
          {successMessage && <Alert variant="success" className="fade show">{successMessage}</Alert>}
          <h2 className="text-center mb-4">All Parcels</h2>
          <Form.Group className="mb-3">
            <Form.Label>Filter by Status:</Form.Label>
            <Form.Select as="select" value={statusFilter} onChange={handleStatusFilterChange}>
              <option value="">All</option>
              <option value="pending">Pending</option>
              <option value="in transit">In Transit</option>
              <option value="delivered">Delivered</option>
              <option value="canceled">Cancelled</option>
            </Form.Select>
          </Form.Group>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Tracking Number</th>
                <th>Name</th>
                <th>Description</th>
                <th>Destination</th>
                <th>Pickup Location</th>
                <th>Weight</th>
                <th>Current Status</th>
                <th>Change Status</th>
                <th>New Location</th>
                <th>Update Location</th>
              </tr>
            </thead>
            <tbody>
              {filteredParcels.map(parcel => (
                <tr key={parcel.tracking_number}>
                  <td>{parcel.user_id}</td>
                  <td>{parcel.tracking_number}</td>
                  <td>{parcel.name}</td>
                  <td>{parcel.description}</td>
                  <td>{parcel.destination_location}</td>
                  <td>{parcel.pickup_location}</td>
                  <td>{parcel.weight}</td>
                  <td>{parcel.status}</td>
                  <td>
                    {parcel.status !== "canceled" && parcel.status !== "delivered" && (
                      <Form.Select
                        value={parcel.status}
                        onChange={(e) => handleStatusChange(parcel.tracking_number, e.target.value)}
                      >
                        <option value="pending">Pending</option>
                        <option value="in transit">In Transit</option>
                        <option value="delivered">Delivered</option>
                      </Form.Select>
                    )}
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      value={newLocations[parcel.tracking_number] || ''}
                      onChange={(e) => handleNewLocationChange(e, parcel.tracking_number)}
                    />
                  </td>
                  <td>
                    <Button variant="primary" onClick={() => handleLocationChange(parcel.tracking_number)}>Update</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
export default AdminParcels;