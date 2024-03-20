import React from 'react';


import ContactForm from './ContactForm'; 
import NavBar from './NavBar';

import Home from './Home';
import SignUp from './SignUp'
import Login from './Login';
import Orders from './Orders';
import OrdersUpdate from './OrdersUpdate';
import AboutUs from './AboutUs';




import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <Router>
      
      <NavBar/>
      <Switch>
     
        
        <Route  exact path="/" component={Home} /> {/* Define Home route */}
        
        <Route path="/contact" component={ContactForm} /> {/* Define Contact route */}
        
        <Route path="/login" component={Login} />
        
        <Route path="/orders" component={Orders}/>
        <Route path ="/ordersupdate" component={OrdersUpdate}/>
        <Route path ="/aboutus" component={AboutUs}/>
        <Route path="/SignUp" component={SignUp}/>
       
       
        
      </Switch>
      
      
    </Router>
  );
}




export default App;
