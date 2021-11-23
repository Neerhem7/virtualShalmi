import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./vendorLogin.css";
import login_img from "../../assets/images/login.svg";
import { Link } from "react-router-dom";

const Login = () => {
  // const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [error, seterror] = useState("");
  // const auth = useSelector(state => state.auth);
  function handlelogin(event) {
    event.preventDefault();
    const user = {
      email,
      password,
      role :"vendor"
    };
    console.log(user);
    setpassword("");
    setemail("");
 }
  // if(auth.authenticate === true){
  //   return <Redirect  to = {'/vendor/dashboard'}/>
  // }
  return (
    <div className="">
      <Container className="">
        <Row>
          <Col lg={4} md={6} sm={12} className="p-3 mt-5 right-login">
            {/* <img  className="icon_img" src={user_img} alt="icon"/> */}
            <h1 className="text-center">Vendor Central</h1>
            <p className="mt-3 p-2">Get started selling on Virtual Shalmi</p>
            <Form onSubmit={handlelogin} className="mt-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  required
                  onChange={(e) => setemail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  required
                  onChange={(e) => setpassword(e.target.value)}
                />
                <Form.Label className="p-2">
                  <Link>
                    <small>Forget Password</small>
                  </Link>
                </Form.Label>
              </Form.Group>
              <Button variant="primary" className="col-12 mb-3" type="submit">
                Submit
              </Button>
              <hr></hr>

              <Row className="links">
                <Col lg={6} md={6} sm={6} className="text-center">
                  <Link to="/vendorregister">Create Account</Link>
                </Col>
                <Col lg={6} md={6} sm={6} className="text-center">
                  <Link to="/retailerlogin">Retailer Account</Link>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col lg={8} md={6} sm={12} className="text-center left-login">
            <img className="w-100" src={login_img} alt="login" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
