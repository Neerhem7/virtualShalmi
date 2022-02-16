import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();
  
  return (
    <Container>
      <Card>
        <Card.Header style={{ fontWeight: "bold", display: "flex" }}>
            Product
        </Card.Header>
        <Card.Body>
          <Table responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>InStock</th>
                <th>On Sale</th>
                <th>Sale Price</th>
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
                  <tr id={product._id} index={product._id} key={product._id}>
                    <td></td>
                    <td >
                      {product.name}
                    </td>
                    <td >
                      {product.price}
                    </td>
                    <td >
                      {product.inStock}
                    </td>
                    <td >
                      {product.onSale}
                    </td>
                    <td >
                      {product.salePrice}
                    </td>
                    <td>
                      <Button variant="outline-success" onClick={(e) => {}}>
                      <i class="zmdi zmdi-eye"></i>
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

export default AdminProduct;
