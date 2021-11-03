import React from "react";
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
const AddProduct = () => {
  const Data = [{ name: "1" }, { name: "2" }];

  return (
    <Container>
      <Form>
        <Card>
          <Card.Header style={{ fontWeight: "bold"}}>
            <Row>
              <Col className="header-left">Add New Product</Col>
              <Col className="header-right">
                <Button variant="primary" type="submit">
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
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control type="text" placeholder="My New Product Name" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control as="textarea" rows={10} value="" />
                </Form.Group>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>Inventory</Card.Header>
              <Card.Body>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label column sm="3">
                    SKU
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control type="number" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label column sm="3">
                    Regular Price
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control type="number" />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label column sm="3">
                    Stock Qty
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control type="number" />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label column sm="3">
                    Out of Stock
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control type="number" />
                  </Col>
                </Form.Group>
                <Form.Check
                  type="checkbox"
                  label="Allow Back Order"
                  id="backorder"
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Header>Product Category</Card.Header>
              <Card.Body>
                <Form.Select name="category">
                  {Data.map((fbb) => (
                    <option key={fbb.key} value={fbb.key}>
                      {fbb.name}
                    </option>
                  ))}
                  ;
                </Form.Select>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Product Featured Image</Card.Header>
              <Card.Body>
                <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" size="sm" />
                </Form.Group>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Product Gallery</Card.Header>
              <Card.Body>
                <Form.Group controlId="formFileMultipleSm" className="mb-3">
                  <Form.Label>Images</Form.Label>
                  <Form.Control type="file" size="sm" multiple />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddProduct;
