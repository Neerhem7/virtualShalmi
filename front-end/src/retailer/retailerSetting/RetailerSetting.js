import React from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const RetailerSetting = () => {
  function handlestore(event) {
    event.preventDefault();
  }
  return (
    <Container>
      <Form onSubmit={handlestore} className="mt-3">
        <Card>
          <Card.Header style={{ fontWeight: "bold" }}>
            <Row>
              <Col className="header-left">Setting </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Form.Group as={Row} className="mb-3" controlId="formFile">
              <Form.Label column sm="3">
                Profile Image
              </Form.Label>
              <Col sm="9">
                <Form.Control type="file" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm="3">
                Email
              </Form.Label>
              <Col sm="9">
                <Form.Control type="email" disabled />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="3">
                Name
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="3">
                Phone Number
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="3">
                Address
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" className="col-12 mb-3" type="submit">
              Save
            </Button>
          </Card.Footer>
        </Card>
      </Form>
      <Form onSubmit={handlestore} className="mt-3">
        <Card>
          <Card.Header style={{ fontWeight: "bold" }}>
            <Row>
              <Col className="header-left">Change Passowrd </Col>
              <Col className="header-right"></Col>
            </Row>
          </Card.Header>
          <Card.Body>
          <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                Old Password
              </Form.Label>
              <Col sm="9">
                <Form.Control type="password" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                New Password
              </Form.Label>
              <Col sm="9">
                <Form.Control type="password" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                Confirm Password
              </Form.Label>
              <Col sm="9">
                <Form.Control type="password" />
              </Col>
            </Form.Group>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" className="col-12 mb-3" type="submit">
              Change
            </Button>
          </Card.Footer>
        </Card>
      </Form>
    </Container>
  );
};

export default RetailerSetting;
