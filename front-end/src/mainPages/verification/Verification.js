import React, { useState } from "react";
import './verification.css'
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
const Verification = () => {
  function handleverify(event) {
    event.preventDefault();
  }
  return (
    <Container className="verify-container align-middle">
      <Row className="row d-flex justify-content-center">
        <Col className="col-md-4 verify">
          <Form onSubmit={handleverify} className="mt-4">
            <h4>Verify email address and phone number</h4>
            <Form.Label>
              To verify email and phone number we have sent 6 -digit code to
              email and phone number
            </Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                <i class="zmdi zmdi-confirmation-number"></i>
                </InputGroup.Text>
                <FormControl
                  placeholder="Enter Code"
                  aria-label="Enter Code"
                  aria-describedby="basic-addon1"
                  required
                />
              </InputGroup>
            </Form.Group>
            <Button variant="primary" className="col-12 mb-3" type="submit">
              Verify
            </Button>
            <hr></hr>

            <Row>
              <Col lg={12} md={12} sm={12} className="text-center">
                <Link to="/vendorlogin" className="link-text">
                  Resend Code
                </Link>
              </Col>
            </Row>
          </Form>
        </Col>
        {/* <div class="col-md-6 login-right">
                      
                  </div> */}
      </Row>
    </Container>
  );
};

export default Verification;
