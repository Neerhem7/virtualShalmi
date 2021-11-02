import React, { useState } from "react";
import "./vendorRegister.css";
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
const VendorRegister = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  function handleregister(event) {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    //   dispatch(login(user));
    console.log(user);
    setpassword("");
    setemail("");
    
  }
  return (
    <Container className="register-container align-middle">
      <Row className="row d-flex justify-content-center">
        <Col className="col-md-6 register">
          <h3 className="text-center">Vendor Registration</h3>
          <Form onSubmit={handleregister}  className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i class="zmdi zmdi-account"></i></InputGroup.Text>
                <FormControl
                  placeholder="Your Name"
                  aria-label="Your Name"
                  aria-describedby="basic-addon1"
                  required
                />
              </InputGroup>
           
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i class="zmdi zmdi-email"></i></InputGroup.Text>
                <FormControl
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  required
                />
              </InputGroup>
           
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i class="zmdi zmdi-phone"></i></InputGroup.Text>
                <FormControl
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  aria-describedby="basic-addon1"
                  required
                />
              </InputGroup>
            
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i class="zmdi zmdi-lock"></i></InputGroup.Text>
                <FormControl
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  required
                />
              </InputGroup>
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i class="zmdi zmdi-lock"></i></InputGroup.Text>
                <FormControl
                  placeholder="Confirm Password"
                  aria-label="Confirm Password"
                  aria-describedby="basic-addon1"
                  required
                />
              </InputGroup>
            </Form.Group>

            <Button variant="primary" className="col-12 mb-3" type="submit">
              Register
            </Button>
            <hr></hr>

            <Row className="links">
              <Col lg={12} md={12} sm={12} className="text-left">
                Already have an account <Link to="/vendorlogin" className="link-text">Signin</Link>
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

export default VendorRegister;
