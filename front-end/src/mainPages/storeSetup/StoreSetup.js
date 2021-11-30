import React, { useState } from "react";
import "./storesetup.css";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
const StoreSetup = (props) => {
  const [errormessage, setMessage] = useState();
  const history = useHistory();
  const Uservalidation = Yup.object({
    name: Yup.string().min(3).required(),
    phoneNumber: Yup.number()
      .integer()
      .required("only enter number without dash"),
    address: Yup.string().required(),
    country: Yup.string().required(),
    city: Yup.string().required(),
    zipcode: Yup.number().integer().required(),
    category: Yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      vendorId : "",
      name: "",
      phoneNumber: 0,
      address: "",
      country: "",
      city: "",
      zipcode: "",
      category: "",
    },
    validationSchema: Uservalidation,
    onSubmit: (values) => {
      const id= props.match.params.id
      formik.values.vendorId = id;
      console.log(formik.values);
      axios
        .post("http://localhost:8000/shop/registerShop", formik.values)
        .then((response) => {
          if(response.data.Shop_Exist){
            console.log("already ");
            return setMessage(response.data.message);
          }
          console.log(response.data);
          // <Redirect to="vendor/dashboard"/>
          history.replace('/vendorlogin');
        })
        .catch((e) => console.log("not solve data", e));
    },
  });
  return (
    <Container className="setup-container align-middle">
      <Row className="row d-flex justify-content-center">
        <Col className="col-md-8 setup">
          <Form className="mt-3">
            <h4>Store Setup</h4>
            <hr></hr>
            <div style={{ color: "#B00020" }}>{errormessage}</div>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Store Name
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </Col>
            </Form.Group>
            {formik.touched.name && formik.errors.name ? (
                        <div style={{ color: "#B00020" }}>
                          {formik.errors.name}
                        </div>
                      ) : null}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Phone Number
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                />
              </Col>
            </Form.Group>
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                        <div style={{ color: "#B00020" }}>
                          {formik.errors.phoneNumber}
                        </div>
                      ) : null}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Store Address
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  id="address"
                  name="address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                />
              </Col>
            </Form.Group>
            {formik.touched.address && formik.errors.address ? (
                        <div style={{ color: "#B00020" }}>
                          {formik.errors.address}
                        </div>
                      ) : null}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Country
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  id="country"
                  name="country"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                />
              </Col>
            </Form.Group>
            {formik.touched.country && formik.errors.country ? (
                        <div style={{ color: "#B00020" }}>
                          {formik.errors.country}
                        </div>
                      ) : null}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                City
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  id="city"
                  name="city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                />
              </Col>
            </Form.Group>
            {formik.touched.city && formik.errors.city ? (
                        <div style={{ color: "#B00020" }}>
                          {formik.errors.city}
                        </div>
                      ) : null}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Postal/Zip Code
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="number"
                  id="zipcode"
                  name="zipcode"
                  onChange={formik.handleChange}
                  value={formik.values.zipcode}
                />
              </Col>
            </Form.Group>
            {formik.touched.zipcode && formik.errors.zipcode ? (
                        <div style={{ color: "#B00020" }}>
                          {formik.errors.zipcode}
                        </div>
                      ) : null}
              <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Category
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  id="category"
                  name="category"
                  onChange={formik.handleChange}
                  value={formik.values.category}
                />
              </Col>
            </Form.Group>
            {formik.touched.category && formik.errors.category ? (
                        <div style={{ color: "#B00020" }}>
                          {formik.errors.category}
                        </div>
                      ) : null}
            <Button
              variant="primary"
              className="col-12 mb-3"
              type="submit"
              onClick={formik.handleSubmit}
            >
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
