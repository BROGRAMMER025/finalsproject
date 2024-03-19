import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ContactForm from './ContactForm'; 
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import Orders from './Orders';
import OrdersUpdate from './OrdersUpdate';
import AboutUs from './AboutUs';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Define Home route */}
        <Route path="/contact" element={<ContactForm />} /> {/* Define Contact route */}
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/ordersupdate" element={<OrdersUpdate />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
