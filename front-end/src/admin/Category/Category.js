import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Card,
  Row,
  Col,
  Button,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
const Category = () => {
  const [errormessage, setMessage] = useState();
  const history = useHistory();
  const [category, setcategory] = useState([]);
  const getCategory = () => {
    axios
      .get("http://localhost:8000/category/getCategory")
      .then((res) => {
        setcategory(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(getCategory, []);
  const Uservalidation = Yup.object({
    name: Yup.string().min(3).required(),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Uservalidation,
    onSubmit: (values) => {
      let config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      console.log(values);
      console.log(localStorage.getItem("token"));
      axios
        .post("http://localhost:8000/category/addCategory", values, config)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => console.log("not solve data", e));
        getCategory();
    },
  });
  return (
    <Container>
      <Form>
        <Card>
          <Card.Header style={{ fontWeight: "bold" }}>
            <Row>
              <Col className="header-left">Add New Category</Col>
              <Col className="header-right">
                <Button
                  variant="primary"
                  type="submit"
                  onClick={formik.handleSubmit}
                >
                  Add
                </Button>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Name
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
              <div style={{ color: "#B00020" }}>{formik.errors.name}</div>
            ) : null}
          </Card.Body>
        </Card>

        <Card>
          <Card.Header style={{ fontWeight: "bold" }}>All Category</Card.Header>
          <Card.Body>
            <Table responsive>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {category.map((cat) => (
                  <tr>
                    <td></td>
                    <td id={cat._id} index={cat._id} key={cat._id}>
                      {cat.name}
                    </td>
                    <td>
                    <Button variant="outline-success" onClick={(e)=>{

                    }}>
                      <i class="zmdi zmdi-shopping-cart"></i>
                    </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Form>
    </Container>
  );
};

export default Category;
