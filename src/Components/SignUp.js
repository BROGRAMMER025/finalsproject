import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    role: 'user' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitFormData = formData.role === 'admin' ? formData : 
      Object.fromEntries(Object.entries(formData).filter(([key]) => key !== 'secret_key'));
    try {
      const response = await axios.post('https://sendit-backend-e3x7.onrender.com/auth/signup', submitFormData);
      console.log('Signup successful:', response.data);
      
    } catch (error) {
      console.error('Signup failed:', error.response.data);
    
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
            {/* Conditionally render secret key field if role is admin */}
            {formData.role === 'admin' && (
              <div className="mb-3">
                <label htmlFor="secret_key" className="form-label">Secret Key:</label>
                <input
                  type="password"
                  id="secret_key"
                  name="secret_key"
                  value={formData.secret_key}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role:</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Signup</button>
          </form>
          <p className="small fw-bold mt-2 pt-1 mb-0">Have an account? <a href="/login" className="link-success">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
