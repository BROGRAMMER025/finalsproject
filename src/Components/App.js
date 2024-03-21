import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from './NavBar';
import Home from './Home';
import SignUp from './SignUp'
import Orders from './Orders';
import OrdersUpdate from './OrdersUpdate';
import ContactForm from './ContactForm';
import AboutUs from './AboutUs';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
  
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={ContactForm} />
        <Route path="/login" render={() => <Login setLoggedIn={setIsLoggedIn} />} />
        <Route path="/orders" component={Orders} />
        <Route path="/ordersupdate" component={OrdersUpdate} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/SignUp" component={SignUp}/>
      </Switch>
    </Router>
  );
}

export default App;
