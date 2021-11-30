import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
const VendorProduct = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();
  const getVendorProduct = () => {
    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .get("http://localhost:8000/product/getVendorProduct", config)
      .then((response) => {
        if (response.data.Authenticate === false) {
          console.log(response.data.Authenticate);
          history.replace("/vendorlogin");
          return;
        }
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((e) => console.log("not solve data", e));
  };
  useEffect(getVendorProduct, []);
  return (
    <Container>
      <Card>
        <Card.Header style={{ fontWeight: "bold" }}>
          <Row>
            <Col className="header-left">Products </Col>
            <Col className="header-right">
              <Link to="/vendor/addproduct">
                <Button variant="primary" type="submit">
                  Add New Product
                </Button>
              </Link>
            </Col>
          </Row>
        </Card.Header>
      </Card>
      <Card>
        <Card.Header style={{ fontWeight: "bold", display: "flex" }}>
          <div className="p-2">
            <Link to="/vendor/addproduct">
              <Button variant="link" type="submit">
                All ()
              </Button>
            </Link>
          </div>
          <div className="p-2">
            <Link to="/vendor/addproduct">
              <Button variant="link" type="submit">
                Publish ()
              </Button>
            </Link>
          </div>
          <div className="p-2">
            <Link to="/vendor/addproduct">
              <Button variant="link" type="submit">
                Draft ()
              </Button>
            </Link>
          </div>
          <div className="p-2">
            <Link to="/vendor/addproduct">
              <Button variant="link" type="submit">
                OnSale ()
              </Button>
            </Link>
          </div>
          <div className="p-2">
            <Link to="/vendor/addproduct">
              <Button variant="link" type="submit">
                Out of Stock ()
              </Button>
            </Link>
          </div>
        </Card.Header>
        <Card.Body>
          <Table responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <div className="justify-content-center">
                  <h1>There is no product</h1>{" "}
                </div>
              ) : (
                products.map((product) => (
                  <tr>
                    <td></td>
                    <td id={product._id} index={product._id} key={product._id}>
                      {product.name}
                    </td>
                    <td>
                      <Button variant="outline-success" onClick={(e) => {}}>
                        <i class="zmdi zmdi-shopping-cart"></i>
                      </Button>
                    </td>
                  </tr>
                ))
              )}
             
            </tbody>
          </Table>

        </Card.Body>
      </Card>
    </Container>
  );
};

export default VendorProduct;
