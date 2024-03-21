import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import deliveries from "../images/deliveries.svg";

const Home = () => {
  return (
    <div className="page-wrapper" style={{ paddingBottom: "150px" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="text-primary">
              Get your Parcel<br /> Delivered at The Limited Time Possible
            </h1>
            <div className="btn">
              <Link to="/orders" className="btn btn-primary me-3">Order now</Link>
              <Link to="/aboutus" className="btn btn-secondary">About</Link>
            </div>
          </div>
          <div className="col-md-6">
            <img src={deliveries} alt="delivery" className="mx-auto" />
          </div>
        </div>
      </div>
      <div className="container-fluid header-btm mt-5">
        <h3 className="text-center mb-4">What we offer?</h3>
        <h1 className="hednt text-center text-primary">Your Favourite Parcel Delivery Partner</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <Card className="h-100" style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title className="text-primary">One Time Delivery</Card.Title>
                <Card.Text>
                  The app should ensure that parcels are delivered within the estimated timeframe. Timely delivery is crucial for customer satisfaction and reliability.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card className="h-100" style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title className="text-primary">Reliable</Card.Title>
                <Card.Text>
                  The app should provide clear and timely communication with users, such as notifications about parcel status updates or any delays in delivery.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card className="h-100" style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title className="text-primary">Customer Support</Card.Title>
                <Card.Text>
                  Offering responsive customer support channels enables users to address any issues or concerns promptly. Accessible support options contribute to the reliability of the app.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;