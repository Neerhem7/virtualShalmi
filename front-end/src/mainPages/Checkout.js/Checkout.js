import React,{useState} from "react";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
const Checkout = () => {
 
  return (
    <Container className="p-3 mt-5">
      <Card>
        <Row>
          <Col lg={6} md={6} sm={12} className="right-login">
            <Card.Header>Product List</Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <img alt="product"></img>
                </Col>
                <Col>
                  Product Name
                  <hr></hr>
                  Product Price: 0-Rs
                  <br />
                  Product Quanity : 0
                  <br />
                  <Button variant="outline-secondary">-</Button>
                  <Button variant="outline-secondary">+</Button>
                  <br/>
                  <br/>
                  <Button variant="danger">Delete</Button>
                </Col>
              </Row>
              <hr />
            </Card.Body>
          </Col>
          <Col lg={6} md={6} sm={12} className="left-login">
            <Card.Header>Order Summary</Card.Header>
            <Card.Body>
              Total Price : 0-Rs
              <br />
              Total Product : 0
              <hr />
              <Card.Title> Shipping Address</Card.Title>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  Address
                </Form.Label>
                <Col sm="9">
                  <Form.Control type="text" id="name" name="name" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  Phone Number
                </Form.Label>
                <Col sm="9">
                  <Form.Control type="text" id="name" name="name" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  city
                </Form.Label>
                <Col sm="9">
                  <Form.Control type="text" id="name" name="name" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  zipcode
                </Form.Label>
                <Col sm="9">
                  <Form.Control type="text" id="name" name="name" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3">
                  Country
                </Form.Label>
                <Col sm="9">
                  <Form.Control type="text" id="name" name="name" />
                </Col>
              </Form.Group>
              <hr />
              <Card.Title> Payment Method</Card.Title>
              <Form.Check
                inline
                label="Cash on Delivery"
                name="cash"
                type="radio"
                id="radio"
                value="ondelivery"
              
              />
              <br />
              <Form.Check
                inline
                label="Direct Bank Transfer"
                name="bank"
                type="radio"
                id="radio"
                value="banktransfer"
                
              />
              <br />
              <hr/>
              <div>

                </div>
              <Button>CheckOut</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Checkout;
