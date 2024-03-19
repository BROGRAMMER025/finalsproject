import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ParcelForm() {
  const [recipientName, setRecipientName] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [parcelContents, setParcelContents] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      recipientName,
      recipientAddress,
      parcelContents,
      deliveryDate
    };

    try {
      const response = await fetch('https://sendit-backend-e3x7.onrender.com/auth/parcel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Order placed successfully!');
        alert('Order placed successfully!');
        navigate('/dashboard'); // Redirect to dashboard after successful order placement
      } else {
        console.error('Error placing order:', response.statusText);
        alert('Failed to place order. Please try again.');
      }
    } catch (error) {
      console.error('Error placing order:', error.message);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Place Order</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="recipientName" className="form-label">Recipient Name:</label>
                  <input
                    id="recipientName"
                    type="text"
                    required
                    className="form-control"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipientAddress" className="form-label">Recipient Address:</label>
                  <input
                    id="recipientAddress"
                    type="text"
                    required
                    className="form-control"
                    value={recipientAddress}
                    onChange={(e) => setRecipientAddress(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="parcelContents" className="form-label">Parcel Contents:</label>
                  <input
                    id="parcelContents"
                    type="text"
                    required
                    className="form-control"
                    value={parcelContents}
                    onChange={(e) => setParcelContents(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="deliveryDate" className="form-label">Delivery Date:</label>
                  <input
                    id="deliveryDate"
                    type="date"
                    required
                    className="form-control"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Place Order</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParcelForm;