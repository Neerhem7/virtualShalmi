import React from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";

const VendorStore = () => {
  function handlestore(event) {
    event.preventDefault();
  }
  return (
    <Container>
      <Card>
        <Card.Header style={{ fontWeight: "bold" }}>
          <Row>
            <Col className="header-left">My Store </Col>
            <Col className="header-right"></Col>
          </Row>
        </Card.Header>
      </Card>
      <Form onSubmit={handlestore} className="mt-3">
        <Card>
          <Card.Header style={{ fontWeight: "bold" }}>
            <Row>
              <Col className="header-left">Store Setup </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            {/* <img alt="banner" className="w-100" style={{ border:"1px solid grey"}}></img> */}
            <Form.Group as={Row} className="mb-3" controlId="formFile">
              <Form.Label column sm="3">
                Banner Image
              </Form.Label>
              <Col sm="9">
                <Form.Control type="file" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formFile">
              <Form.Label column sm="3">
                Logo Image
              </Form.Label>
              <Col sm="9">
                <Form.Control type="file" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                Store Name
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                Phone Number
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                Store Address
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                City
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                Postal/Zip Code
              </Form.Label>
              <Col sm="9">
                <Form.Control type="number" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                Country
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header style={{ fontWeight: "bold" }}>
            <Row>
              <Col className="header-left">Payment Integration </Col>
              <Col className="header-right"></Col>
            </Row>
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
        <Button variant="primary" className="col-12 mb-3" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default VendorStore;
