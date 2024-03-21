import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://sendit-backend-e3x7.onrender.com/auth/login', { username, password });
      console.log(res);
      alert('Logged in successfully');
      setLoggedIn(true); 
      history.push('/'); 
      localStorage.setItem('access_token', res.data.access_token);
    } catch (error) {
      console.error('Login error', error);
      alert('Failed to log in. Please check your credentials and try again.');
    }
  };
  
  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <h2 className="card-title mb-4 text-center">User Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input
                type="text" 
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Login
            </button>
            <div className="mt-3">
              <p>Don't have an account? <Link to="/signup" className="text-blue-500">Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
