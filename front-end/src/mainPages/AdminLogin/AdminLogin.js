import React, { useState } from "react";
import "./adminLogin.css";
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
const AdminLogin = () => {
    const [errormessage, setMessage] = useState();
    const history = useHistory();
    const Uservalidation = Yup.object({
      email: Yup.string().email("Invalid email address").required(),
      password: Yup.string()
        .required(),
    });
    const  formik = useFormik({
       initialValues: {
         email : '',
         password : '',
         role : 'admin'
      },
      validationSchema: Uservalidation,
       onSubmit: values =>{
        axios.post("http://localhost:8000/user/signin", values)
        .then((response) => {  
          if(response.data.Wrong_User ){
            console.log("email or password is wrong ");
            return setMessage(response.data.message);
          } 
          console.log(response.data.token);
          console.log(response.data.user._id);
          const token =response.data.token;
          localStorage.setItem('token' , token);
          history.replace("admin/dashboard/"+response.data.user._id);
        })
        .catch((e) => console.log("not solve data", e)); 
       }
    })
    return (
        <Container className="register-container align-middle">
      <Row className="row d-flex justify-content-center">
        <Col className="col-md-6 register">
          <h3 className="text-center">Admin Login</h3>
          <Form  className="mt-4">
            <div style={{ color: "#B00020" }}>{errormessage}</div>
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
           
            <Button variant="primary" className="col-12 mb-3" type="submit" onClick={formik.handleSubmit}>
              Login
            </Button>
            <hr></hr>

         
          </Form>
        </Col>
        
      </Row>
    </Container>
    )
}

export default AdminLogin
