import React from 'react';
import Users from './Users';
import ContactForm from './ContactForm'; 
import NavBar from './NavBar';
import Parcel from './Parcel';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} /> {/* Define Home route */}
        <Route path="/users" component={Users} />
        <Route path="/contact" component={ContactForm} /> {/* Define Contact route */}
        <Route path="/parcel" component= {Parcel}/>
      </Switch>
    </Router>
  );
}

// Define Home component
const Home = () => {
  return (
    <div>
      
    </div>
  );
}

export default App;
