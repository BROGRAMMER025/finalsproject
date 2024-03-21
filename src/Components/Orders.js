import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Order() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      navigate('/login');
    }
  }, [navigate]);

  const calculatePrice = () => {
    const weightInKg = parseFloat(weight);
    if (!isNaN(weightInKg)) {
      const totalPrice = weightInKg * 200; 
      setPrice(totalPrice.toFixed(2));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const accessToken = localStorage.getItem('access_token');
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      await axios.post('https://sendit-backend-e3x7.onrender.com/parcel', {
        name,
        description,
        pickup_location: pickupLocation,
        destination_location: destinationLocation,
        weight: parseFloat(weight),
        price,
      }, config);

      navigate('/userparcels');
    } catch (error) {
      console.error('Error adding order:', error);
      alert('Failed to create order');
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-primary" style={{ borderWidth: '2px' }}>
            <div className="card-body">
              <h1 className="text-center mb-4">New Order</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type='text'
                    id='name'
                    placeholder='Order Name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    id="description"
                    placeholder=''
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                    className="form-control"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="pickupLocation" className="form-label">Pickup Location</label>
                  <input
                    type='text'
                    id='pickupLocation'
                    placeholder='e.g .,Nairobi'
                    value={pickupLocation}
                    onChange={e => setPickupLocation(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="destinationLocation" className="form-label">Destination Location</label>
                  <input
                    type='text'
                    id='destinationLocation'
                    placeholder='e.g ., Nakuru'
                    value={destinationLocation}
                    onChange={e => setDestinationLocation(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="weight" className="form-label">Weight (kg)</label>
                  <input
                    type='number'
                    id='weight'
                    placeholder=''
                    value={weight}
                    onChange={e => {
                      setWeight(e.target.value);
                      calculatePrice();
                    }}
                    className="form-control"
                    required
                  />
                </div>
                {price && (
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price (Ksh)</label>
                    <p className="form-control-static">Ksh. {price}</p>
                  </div>
                )}
                <div className="text-center">
                  <button type='submit' className="btn btn-primary" style={{ transition: 'all 0.3s', fontWeight: 'bold' }}>Create Order</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;