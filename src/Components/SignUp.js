import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    // Removed secret_key from formData state initialization
    role: 'user' // default role is set to 'user'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ensure secret_key is not sent in the request
    const { secret_key, ...submitFormData } = formData;
    try {
      const response = await axios.post('https://sendit-backend-e3x7.onrender.com/auth/signup', submitFormData);
      console.log('Signup successful:', response.data);
      // Optionally, redirect the user or display a success message
    } catch (error) {
      console.error('Signup failed:', error.response.data);
      // Handle errors, such as displaying error messages to the user
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <h2 className="card-title mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirm_password" className="form-label">Confirm Password:</label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            {/* Removed the secret key field */}
            <button type="submit" className="btn btn-primary">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
