import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="header">
        <div>
          <h1>
            Get your Parcel <br></br> Delivery at The limited <br></br> Time Possible
          </h1>
          <div className="btn">
            {/* Wrap the "Order now" button with Link and specify the path to the Orders component */}
            <Link to="/orders">
              <button>Order now</button>
            </Link>
            {/* Wrap the "How it works" button with Link and specify the path to the AboutUs component */}
            <Link to="/aboutus">
              <button>How it works</button>
            </Link>
          </div>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1o-6AdW9dYwZcGJB3GouImKH_3_-zRMJxPA&usqp=CAU" alt="..." />
        </div>
      </div>
      <div className=".header-btm">
        <h3>What we offer?</h3>
        <h1 className="hednt">Your Favourite Parcel <br></br> Delivery Partner</h1>

        <div className="header">
          <div className="content">
            <h2>
            <span>One Time Delivery</span> <br></br>
            The app should ensure that parcels are delivered within the estimated timeframe. Timely delivery is crucial for customer satisfaction and reliability.
            </h2>
          </div>
          <div className="content">
           <h2> <span>Reliable</span><br></br>
           The app should provide clear and timely communication with users, such as notifications about parcel status updates or any delays in delivery.</h2>
          </div>
          <div className="content">
           <h2> <span>Customer Support</span><br></br>
           Offering responsive customer support channels enables users to address any issues or concerns promptly. Accessible support options contribute to the reliability of the app.</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
