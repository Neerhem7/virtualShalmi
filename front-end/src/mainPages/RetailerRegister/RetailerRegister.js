import React, { useState } from "react";
import "./retailerRegister.css";
import { useHistory } from "react-router-dom";
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
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
const RetailerRegister = () => {
  const [errormessage, setMessage] = useState();
  const history = useHistory();
  const Uservalidation = Yup.object({
    email: Yup.string().email("Invalid email address").required(),
    name: Yup.string().min(3).required(),
    password: Yup.string()
      .min(8)
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
        excludeEmptyString: true,
        message:
          "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number",
      })
      .required(),
  });
  const  formik = useFormik({
     initialValues: {
       name : '',
       email : '',
       phoneNumber : '',
       password : '',
       cpassword : '',
       role : 'retailer'
    },
    validationSchema: Uservalidation,
     onSubmit: values =>{
      axios.post("http://localhost:8000/user/registerUser", values)
      .then((response) => {  
        if(response.data.Already_Exist){
          console.log("already ");
          return setMessage(response.data.message);
        } 
        if(response.data.Confirm_Password){
          console.log("confrim passowrd not match ");
          return setMessage(response.data.message);
        }  
        console.log(response.data);
        const id= response.data.user._id;
        console.log(id);
        history.replace("verification/"+id, formik.values.role);
      })
      .catch((e) => console.log("not solve data", e)); 
     }
  })
  return (
    <Container className="register-container align-middle">
      <Row className="row d-flex justify-content-center">
        <Col className="col-md-6 register">
          <h3 className="text-center">Retailer Registration</h3>
          <Form  className="mt-4">
            <div style={{ color: "#B00020" }}>{errormessage}</div>
            <Form.Group className="mb-3">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i class="zmdi zmdi-account"></i></InputGroup.Text>
                <FormControl
                  placeholder="Your Name"
                  aria-label="Your Name"
                  aria-describedby="basic-addon1"
                   id = "name"
                   name ="name"
                   onChange = {formik.handleChange}
                   value = {formik.values.name}
                   type = "text"
                />
              </InputGroup>
              {formik.touched.name && formik.errors.name ? (
              <div style={{ color: "#B00020" }}>{formik.errors.name}</div>
            ) : null}
            </Form.Group>

            <Form.Group className="mb-3" >
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i class="zmdi zmdi-email"></i></InputGroup.Text>
                <FormControl
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  id = "email"
                  name ="email"
                  onChange = {formik.handleChange}
                  value = {formik.values.email}
                  type = "email"
                />
              </InputGroup>
              {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "#B00020" }}>{formik.errors.email}</div>
            ) : null}
            </Form.Group>
            <Form.Group className="mb-3" >
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i class="zmdi zmdi-phone"></i></InputGroup.Text>
                <FormControl
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  aria-describedby="basic-addon1"
                  id = "phoneNumber"
                  name ="phoneNumber"
                  onChange = {formik.handleChange}
                  value = {formik.values.phoneNumber}
                  type = "text"
                />
              </InputGroup>
            
            </Form.Group>
            <Form.Group className="mb-3" >
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i class="zmdi zmdi-lock"></i></InputGroup.Text>
                <FormControl
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  id = "password"
                  name ="password"
                  onChange = {formik.handleChange}
                  value = {formik.values.password}
                  type ="password"
                />
              </InputGroup>
              {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "#B00020" }}>{formik.errors.password}</div>
            ) : null}
            </Form.Group>
            <Form.Group className="mb-3" >
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i class="zmdi zmdi-lock"></i></InputGroup.Text>
                <FormControl
                  placeholder="Confirm Password"
                  aria-label="Confirm Password"
                  aria-describedby="basic-addon1"
                  id = "cpassword"
                  name ="cpassword"
                  onChange = {formik.handleChange}
                  value = {formik.values.cpassword}
                  type = "password"
                />
              </InputGroup>
            </Form.Group>

            <Button variant="primary" className="col-12 mb-3" type="submit" onClick={formik.handleSubmit}>
              Register
            </Button>
            <hr></hr>

            <Row className="links">
              <Col lg={12} md={12} sm={12} className="text-left">
                Already have an account <Link to="/retailerlogin" className="link-text">Signin</Link>
              </Col>
            
            </Row>
          </Form>
        </Col>
        
      </Row>
    </Container>
  );
};

export default RetailerRegister;
