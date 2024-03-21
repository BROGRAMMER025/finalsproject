import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavBar from "./NavBar";

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logInUser = () => {
    if (username.length === 0) {
      alert("Please enter Username!");
    } else if (password.length === 0) {
      alert("Password has been left blankPlease enter password !");
    } else {
      axios.post('https://sendit-backend-e3x7.onrender.com/auth/login', {
        username: username,
        password: password
      })
        .then(function (response) {
          console.log(response);
          const accessToken = response.data.access_token;
          localStorage.setItem('access_token', accessToken);
          setIsLoggedIn(true);
          window.location.href = "/";
        })
        .catch(function (error) {
          console.error('Login failed:', error.response.data);
          if (error.response.status === 401) {
            alert("Invalid credentials");
          }
        });
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      {isLoggedIn && <NavBar />}
      <div className="container mt-5">
        <div className="card mx-auto" style={{ maxWidth: '400px' }}>
          <div className="card-body">
            <h2 className="card-title mb-4">Log In</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                  placeholder="Enter Username"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>
              <button type="button" className="btn btn-primary" onClick={logInUser}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
