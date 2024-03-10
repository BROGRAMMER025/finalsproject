import React from 'react';
import Users from './Users';
import ContactForm from './ContactForm'; // Importing the ContactForm component
import NavBar from './NavBar';
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
      </Switch>
    </Router>
  );
}

// Define Home component
const Home = () => {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      {/* Add any content you want for the home page */}
    </div>
  );
}

export default App;
