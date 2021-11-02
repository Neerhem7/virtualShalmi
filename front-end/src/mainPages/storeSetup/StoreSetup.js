import React, { useState } from "react";
import "./storesetup.css";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const StoreSetup = () => {
  function handlestore(event) {
    event.preventDefault();
  }
  return (
    <Container className="setup-container align-middle">
      <Row className="row d-flex justify-content-center">
        <Col className="col-md-8 setup">
          <Form onSubmit={handlestore} className="mt-3">
            <h4>Store Setup</h4>
            <hr></hr>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="3">
                Store Name
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text"  />
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
                <Form.Control type="text"  />
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
                <Form.Control type="text"  />
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
                <Form.Control type="text"  />
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
                <Form.Control type="number"  />
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

            <Button variant="primary" className="col-12 mb-3" type="submit">
              Continue
            </Button>
          </Form>
        </Col>
        {/* <div class="col-md-6 login-right">
                      
                  </div> */}
      </Row>
    </Container>
  );
};

export default StoreSetup;
