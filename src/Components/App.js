import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ContactForm from './ContactForm'; 
import NavBar from './NavBar';
import Home from './Home';
import Orders from './Orders';
import OrdersUpdate from './OrdersUpdate';
import AboutUs from './AboutUs';
import SignupForm from './SignupForm';
import LandingPage from  './LandingPage';
import LoginForm from './LoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for tracking authentication status

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup"  element={<SignupForm setIsLoggedIn={setIsLoggedIn} />} />
        {/* Protected routes - only accessible when logged in */}
        {isLoggedIn && (
          <>
            
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/navbar" element={<NavBar />} />
            <Route path="/home" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/ordersupdate" element={<OrdersUpdate />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
