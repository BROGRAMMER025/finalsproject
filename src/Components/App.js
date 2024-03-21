import React from 'react';


import ContactForm from './ContactForm'; 
import NavBar from './NavBar';
import Map from './Map';
import { countyCoordinates } from './Coordinates';
import MapComponent from './MapComponent';
import Home from './Home';
import SignUp from './SignUp'
import Login from './Login';
import Orders from './Orders';
import OrdersUpdate from './OrdersUpdate';
import AboutUs from './AboutUs';




import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
  return (
    <Router>
      
      <NavBar/>
      <Routes>
     
        
        <Route  exact path="/" component={Home} /> {/* Define Home route */}
        
        <Route path="/contact" component={ContactForm} /> {/* Define Contact route */}
        
        <Route path="/login" component={Login} />
        <Route path="/map" component={Map} />
        <Route path="/countyCoordinates" component={countyCoordinates} />
        <Route path="/mapcomponent" component={MapComponent} />
        <Route path="/orders" component={Orders}/>
        <Route path ="/ordersupdate" component={OrdersUpdate}/>
        <Route path ="/aboutus" component={AboutUs}/>
        <Route path="/SignUp" component={SignUp}/>
       
       
        
      </Routes>
      
      
    </Router>
  );
}




export default App;
