import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./vendorLogin.css";
import { useHistory } from "react-router-dom";
import login_img from "../../assets/images/login.svg";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
const Login = () => {
  const [errormessage, setMessage] = useState();
  const history = useHistory();
  const Uservalidation = Yup.object({
    email: Yup.string().email("Invalid email address").required(),
    password: Yup.string().required(),
  });
  const  formik = useFormik({
    initialValues: {
      email : '',
      password : '',
      role : 'vendor'
   },
   validationSchema: Uservalidation,
    onSubmit: values =>{
      axios.post("http://localhost:8000/user/signin", values)
        .then((response) => {  
          if(response.data.Wrong_User ){
            console.log("email or password is wrong ");
            return setMessage(response.data.message);
          } 
          console.log(response.data);
          localStorage.setItem('token', response.data.token);
          history.replace("vendor/dashboard");
        })
        .catch((e) => console.log("not solve data", e)); 
       }
 })
  return (
    <div className="">
      <Container className="">
        <Row>
          <Col lg={4} md={6} sm={12} className="p-3 mt-5 right-login">
            {/* <img  className="icon_img" src={user_img} alt="icon"/> */}
            <h1 className="text-center">Vendor Central</h1>
            <p className="mt-3 p-2">Get started selling on Virtual Shalmi</p>
            <Form  className="mt-4">
            <div style={{ color: "#B00020" }}>{errormessage}</div>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  required
                />
              </Form.Group>
              {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "#B00020" }}>{formik.errors.email}</div>
            ) : null}
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  required
                  
                />
                <Form.Label className="p-2">
                  <Link>
                    <small>Forget Password</small>
                  </Link>
                </Form.Label>
              </Form.Group>
              {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "#B00020" }}>{formik.errors.password}</div>
            ) : null}
              <Button variant="primary" className="col-12 mb-3" type="submit" onClick={formik.handleSubmit}>
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
