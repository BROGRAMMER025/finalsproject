import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function LoginForm({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://sendit-backend-e3x7.onrender.com/auth/login', { username, password });
      console.log(res);
      alert('Logged in successfully');
      setIsLoggedIn(true); // Update isLoggedIn state after successful login
      localStorage.setItem('access_token', res.data.access_token);
      navigate('/Navbar'); // Navigate to the user dashboard after successful login
    } catch (error) {
      console.error('Login error', error);
      alert('Failed to log in. Please check your credentials and try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-28 bg-white rounded-lg shadow-md p-4 border">
      <h2 className="text-2xl font-bold mb-4 text-center">User Login</h2>
      <form onSubmit={handleSubmit} className="p-4 mt-2">
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text" 
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ backgroundColor: '#003366', borderColor: '#003366' }}
        >
          Login
        </button>
        <div className="mt-3">
          {/* Link to signup page */}
          <p>Don't have an account? <Link to="/signup" className="text-blue-500">Register</Link></p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
