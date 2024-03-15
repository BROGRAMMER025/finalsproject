import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <img src="/maarten-van-den-heuvel-246398-unsplash.jpg" alt="background" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
          </Col>
        </Row>
      </Container>
        <div className="footer-overlay"></div>
        <div className="footer">
          <Container fluid>
            <Row>
              <Col md={3} className="sb_footer-links-div">
                <h4>For Business</h4>
                <p>Employer</p>
                <p>Health Plan</p>
                <p>Individual</p>
              </Col>
              <Col md={3} className="sb_footer-links-div">
                <h4>Resources</h4>
                <p>Resource center</p>
                <p>Testimonials</p>
               
              </Col>
              <Col md={3} className="sb_footer-links-div">
                <h4>About us</h4>
                <p>About us</p>
                <p>Reviews</p>
                <p>Ratings</p>
              </Col>
              <Col md={3} className="sb_footer-links-div">
                <h4>Comming Soon on</h4>
                <p>facebook</p>
                <p>instsgram</p>
                <p>X</p>
              </Col>
            </Row>
            <Row>
              <Col className="sb_footer-below">
                <div className="sb_footer-copyright">
                  <p>&copy; {new Date().getFullYear()} SENDIT. All rights reserved.</p>
                </div>
                <div className="sb_footer-below-links">
                  <div>
                    <p>Terms & Conditions</p>
                  </div>
                  <div>
                    <p>Privacy</p>
                  </div>
                  <div>
                    <p>Security</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    

  );
}

export default Home;
