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

 