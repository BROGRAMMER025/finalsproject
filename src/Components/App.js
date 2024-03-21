import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from './NavBar'; 
import Home from './Home';
import ContactForm from './ContactForm'; 
import Login from './Login';
import Orders from './Orders';
import UserParcels from './UserParcels';
import AdminParcels from './AdminParcels';
import AboutUs from './AboutUs';
import SignUp from './SignUp';
import Footer from './Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
  };

  return (
    <Router>   
      <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route  exact path="/" element={<Home/>} />      
        <Route path="/contact" element={<ContactForm/>} />      
        <Route path="/login" element={<Login/>} />      
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/userparcels" element={<UserParcels/>} />
        <Route path="/adminparcels" element={<AdminParcels/>} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
