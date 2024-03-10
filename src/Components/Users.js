import React from 'react';
import { Container, Row, Col, Form, Button, Card, Table } from 'react-bootstrap';

const Users = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <img src={`${process.env.PUBLIC_URL}/mehrnaz-taghavishavazi-tHE5_sUytWA-unsplash.jpg`} alt="Background" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }} />
      <div style={{ margin: '20px', borderRadius: '15px', border: 'none', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '80vw', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <Card style={{ borderRadius: '15px', border: 'none', boxShadow: 'none', overflow: 'hidden' }}>
          <Card.Body style={{ padding: '1.5rem' }}>
            <Container>
              <Row className="justify-content-center">
                <Col md={6}>
                  
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md={5}>
                  <Form className="mb-4">
                    <Form.Group controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Add User
                    </Button>
                  </Form>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="userId">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter user ID" />
                  </Form.Group>
                  <Button variant="primary" className="mr-2">
                    Get User by ID
                  </Button>
                  <Button variant="danger">
                    Delete User by ID
                  </Button>
                  <Form className="mt-2">
                    <Form.Group controlId="editName">
                      <Form.Label>Edit Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter new name" />
                    </Form.Group>
                    <Button variant="warning" type="submit">
                      Edit Username
                    </Button>
                  </Form>
                </Col>
              </Row>
              <Row className="justify-content-center mt-4">
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>User Details</Card.Title>
                      <Card.Text>ID: 1</Card.Text>
                      <Card.Text>Name: John Doe</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="justify-content-center mt-4">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                    </tr>
                    {/* You can add more rows for other users */}
                  </tbody>
                </Table>
              </Row>
            </Container>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: '#2c3e50', borderTop: '1px solid rgba(0, 0, 0, 0.2)', textAlign: 'center', color: '#fff', padding: '1rem' }}>
            &copy; 2024
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default Users;
