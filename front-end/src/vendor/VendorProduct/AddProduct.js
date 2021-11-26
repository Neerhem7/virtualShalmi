import React, { useState, useEffect } from "react";
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { UserConsumer } from "../../UserContext";
const AddProduct = () => {
  const Data = [{ name: "1" }, { name: "2" }];
  const [saleState, setsaleState] = useState(true);
  const [fileinput, setfileinput] = useState();
  const [selectedFile, setselectedFile] = useState()
  const [previewSource, setpreviewSource] = useState()
  const [errormessage, setMessage] = useState();
  const history = useHistory();

  const Uservalidation = Yup.object({
    name: Yup.string().min(3).required(),
    Sku: Yup.string().required(),
    shortDescription: Yup.string().min(3).max(100).required(),
    Description: Yup.string().min(100),
    price: Yup.number().integer().min(1).required(),
    inStock: Yup.number().integer().min(1).required(),
    outStock: Yup.number().integer().min(1).required(),
    salePrice: Yup.number()
      .integer()
      .when("onSale", {
        is: "yes",
        then: Yup.number().min(1).required("Enter Sale Price"),
      }),
    DateSaleStart: Yup.string().when("onSale", {
      is: "yes",
      then: Yup.string().required("Enter Sale Start Date"),
    }),
    DateSaleEnd: Yup.string().when("onSale", {
      is: "yes",
      then: Yup.string().required("Enter Sale Start Date"),
    }),
    
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      Sku: "",
      status: "inStock",
      visibility: "yes",
      shortDescription: "",
      onSale: "no",
      Description: "",
      price: 0,
      salePrice: 0,
      DateSaleStart: "",
      DateSaleEnd: "",
      inStock: 0,
      outStock: 0,
      backOrder: "",
      productImg: [],
      category: "",
      createdBy: "",
    },
    validationSchema: Uservalidation,
    onSubmit: (values) => {
      console.log(formik.values);
      // axios
      //   .post("http://localhost:8000/user/registerUser", values)
      //   .then((response) => {
      //     if (response.data.Already_Exist) {
      //       console.log("already ");
      //       return setMessage(response.data.message);
      //     }
      //     if (response.data.Confirm_Password) {
      //       console.log("confrim passowrd not match ");
      //       return setMessage(response.data.message);
      //     }
      //     console.log(response.data);
      //     history.replace("vendor/product");
      //   })
      //   .catch((e) => console.log("not solve data", e));
    },
  });
  const handlechecked = (e) => {
    const checked = e.target.checked;
    if (checked) {
      //checked
      console.log("checked");
      setsaleState(false);
      formik.values.onSale = "yes";
    } else {
      //unchecked
      setsaleState(true);
      console.log("unchecked");
      formik.values.onSale = "no";
      formik.values.DateSaleEnd = "";
      formik.values.DateSaleStart = "";
      formik.values.salePrice = 0;
    }
  };
  const handleChange= (e)=>{
      const index = e.target.selectedIndex;
      const optionElement = e.target.childNodes[index];
      const optionElementId = optionElement.getAttribute('id');
      formik.values.category= optionElementId;
  }
  const addImage=(e)=>{
      const file=e.target.files[0];
      
      previewFile(file);
  }
  const previewFile=(file)=>{
    
    const reader = new FileReader();
   
      console.log("image")
      reader.readAsDataURL(file);
  
    reader.onloadend=()=>{
        setpreviewSource(reader.result);
        console.log(previewSource)
    }
  }
  return (
    <Container>
      <UserConsumer>
        {(category) => {
         
          return (
            <Form>
              <Card>
                <Card.Header style={{ fontWeight: "bold" }}>
                  <Row>
                    <Col className="header-left">Add New Product</Col>
                    <Col className="header-right">
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={formik.handleSubmit}
                      >
                        Publish
                      </Button>
                    </Col>
                  </Row>
                </Card.Header>
              </Card>
              <Row>
                <Col lg={8}>
                  <Card>
                    {/* <Card.Header>Add New Product</Card.Header> */}
                    <Card.Body>
                      <Form.Group className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="My New Product Name"
                          id="name"
                          name="name"
                          onChange={formik.handleChange}
                          value={formik.values.name}
                        />
                      </Form.Group>
                      {formik.touched.name && formik.errors.name ? (
                        <div style={{ color: "#B00020" }}>
                          {formik.errors.name}
                        </div>
                      ) : null}

                      <Form.Group className="mb-3">
                        <Form.Label>Product Short Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={10}
                          id="shortDescription"
                          name="shortDescription"
                          onChange={formik.handleChange}
                          value={formik.values.shortDescription}
                        />
                      </Form.Group>
                      {formik.touched.shortDescription &&
                      formik.errors.shortDescription ? (
                        <div style={{ color: "#B00020" }}>
                          {formik.errors.shortDescription}
                        </div>
                      ) : null}
                      <Form.Group className="mb-3">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          id="Description"
                          name="Description"
                          onChange={formik.handleChange}
                          value={formik.values.Description}
                        />
                      </Form.Group>
                      {formik.touched.Description &&
                      formik.errors.Description ? (
                        <div style={{ color: "#B00020" }}>
                          {formik.errors.Description}
                        </div>
                      ) : null}
                    </Card.Body>
                  </Card>

                  <Card>
                    <Card.Header>Inventory</Card.Header>
                    <Card.Body>
                      <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                          SKU
                        </Form.Label>
                        <Col sm="9">
                          <Form.Control
                            type="text"
                            id="Sku"
                            name="Sku"
                            onChange={formik.handleChange}
                            value={formik.values.Sku}
                          />
                        </Col>
                      </Form.Group>
                      {formik.touched.Sku && formik.errors.Sku ? (
                        <div style={{ color: "#B00020" }}>
                          {formik.errors.Sku}
                        </div>
                      ) : null}
                      <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                          Regular Price
                        </Form.Label>
                        <Col sm="9">
                          <Form.Control
                            type="number"
                            id="price"
                            name="price"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                          />
                        </Col>
                      </Form.Group>
                      {formik.touched.price && formik.errors.price ? (
                        <div style={{ color: "#B00020" }}>
                          {formik.errors.price}
                        </div>
                      ) : null}
                      <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                          Stock Qty
                        </Form.Label>
                        <Col sm="9">
                          <Form.Control
                            type="number"
                            id="inStock"
                            name="inStock"
                            onChange={formik.handleChange}
                            value={formik.values.inStock}
                          />
                        </Col>
                      </Form.Group>
                      {formik.touched.inStock && formik.errors.inStock ? (
                        <div style={{ color: "#B00020" }}>
                          {formik.errors.inStock}
                        </div>
                      ) : null}
                      <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                          Out of Stock
                        </Form.Label>
                        <Col sm="9">
                          <Form.Control
                            type="number"
                            id="outStock"
                            name="outStock"
                            onChange={formik.handleChange}
                            value={formik.values.outStock}
                          />
                        </Col>
                      </Form.Group>
                      {formik.touched.outStock && formik.errors.outStock ? (
                        <div style={{ color: "#B00020" }}>
                          {formik.errors.outStock}
                        </div>
                      ) : null}
                      <Form.Check
                        type="checkbox"
                        label="Allow Back Order"
                        id="backOrder"
                        name="backOrder"
                        onChange={formik.handleChange}
                        value={formik.values.backOrder}
                      />
                      {formik.touched.backOrder && formik.errors.backOrder ? (
                        <div style={{ color: "#B00020" }}>
                          {formik.errors.backOrder}
                        </div>
                      ) : null}
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Row>
                        <Col className="header-left">On Sale</Col>
                        <Col className="header-right">
                          <Form.Check
                            aria-label="on saled"
                            onClick={handlechecked}
                            id="status"
                            name="status"
                            value={formik.values.onSale}
                          />
                        </Col>
                      </Row>
                    </Card.Header>
                    <Card.Body>
                      <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                          Sale Price
                        </Form.Label>
                        <Col sm="9">
                          <Form.Control
                            disabled={saleState}
                            type="number"
                            id="salePrice"
                            name="salePrice"
                            onChange={formik.handleChange}
                            value={formik.values.salePrice}
                          />
                        </Col>
                      </Form.Group>
                      {formik.touched.salePrice && formik.errors.salePrice ? (
                        <div style={{ color: "#B00020" }}>
                          {formik.errors.salePrice}
                        </div>
                      ) : null}
                      <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                          Start Date
                        </Form.Label>
                        <Col sm="9">
                          <Form.Control
                            disabled={saleState}
                            type="date"
                            id="DateSaleStart"
                            name="DateSaleStart"
                            onChange={formik.handleChange}
                            value={formik.values.DateSaleStart}
                          />
                        </Col>
                      </Form.Group>
                      {formik.touched.DateSaleStart &&
                      formik.errors.DateSaleStart ? (
                        <div style={{ color: "#B00020" }}>
                          {formik.errors.DateSaleStart}
                        </div>
                      ) : null}
                      <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                          End Date
                        </Form.Label>
                        <Col sm="9">
                          <Form.Control
                            disabled={saleState}
                            type="date"
                            id="DateSaleEnd"
                            name="DateSaleEnd"
                            onChange={formik.handleChange}
                            value={formik.values.DateSaleEnd}
                          />
                        </Col>
                      </Form.Group>
                      {formik.touched.DateSaleEnd &&
                      formik.errors.DateSaleEnd ? (
                        <div style={{ color: "#B00020" }}>
                          {formik.errors.DateSaleEnd}
                        </div>
                      ) : null}
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4}>
                  <Card>
                    <Card.Header>Product Category</Card.Header>
                    <Card.Body>
                      <Form.Select name="category" onChange={handleChange}>
                        {category.map((cat) => (
                          <option id={cat._id} index={cat._id} key={cat._id}>
                            {cat.name}
                          </option>
                        ))}
                      </Form.Select>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Header>Product Featured Image</Card.Header>
                    <Card.Body>
                      <Form.Group className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" size="sm" id="productImg" name="productImg" 
                          onChange={addImage}
                          value={fileinput}
                        />
                      </Form.Group>
                      {previewSource && (
                        <div className="d-flex justify-content-center">
                          <img src={previewSource} alt='img' style={{width: "100px"}} ></img>

                        </div>
                      )}
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Header>Product Gallery</Card.Header>
                    <Card.Body>
                      <Form.Group
                        controlId="formFileMultipleSm"
                        className="mb-3"
                      >
                        <Form.Label>Images</Form.Label>
                        <Form.Control type="file" size="sm" multiple />
                      </Form.Group>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Form>
          );
        }}
      </UserConsumer>
    </Container>
  );
};

export default AddProduct;
