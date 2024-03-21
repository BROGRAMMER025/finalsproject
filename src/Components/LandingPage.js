import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = ({ setIsLoggedIn }) => {
  return (
    <div className="landing-page" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/arno-senoner-yqu6tJkSQ_k-unsplash.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
      <div className="landing-content" style={{ textAlign: 'center', paddingTop: '40vh' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>WELCOME TO SENDIT</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Signup or Login to begin</p>
        <div>
          <Link to="/signup">
            <button className="btn btn-primary mr-2">SignUp</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
      </div>
      <footer className="footer" style={{ backgroundColor: '#010101', color: 'white', position: 'fixed', bottom: 0, left: 0, right: 0, height: '120px' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <p style={{ color: 'gray', marginBottom: '5px' }}>
                At SendIt, your delivery is our main priority. We obsess over customer satisfaction and getting your package there, wherever that may be.
              </p>
              <button className="btn btn-primary" style={{ marginBottom: '5px' }}>ABOUT US</button>
            </div>
            <div className="col-md-6">
              <h4 style={{ color: 'white', marginBottom: '5px' }}>
                <span style={{ position: 'relative', zIndex: 1, borderBottom: '2px solid #ff0000', paddingBottom: '3px' }}>ContactUs</span>
                <span style={{ position: 'relative', zIndex: 0 }}></span>
              </h4>
              <p style={{ color: 'gray', marginBottom: '5px' }}>Feel free to reach out to us at any moment</p>
              <Link to="/contact">
                <button className="btn btn-primary" style={{ marginBottom: '5px' }}>ContactUs</button>
              </Link>
            </div>
            <div className="col-12 text-center" style={{ borderTop: '1px solid gray', paddingTop: '5px', marginTop: '5px' }}>
              <p>© 2024 SendIt. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
