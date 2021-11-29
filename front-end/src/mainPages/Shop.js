import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();
  const getProducts = () => {
    axios
      .get("http://localhost:8000/product/getProduct")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(getProducts, []);

  return (
    <div className="p-4">
      {products.length === 0 ? (
        <div className="justify-content-center">
          <h1>There is no product</h1>{" "}
        </div>
      ) : (
        <Row xs={1} md={4} className="">
          {products.map((product) => (
            <Col>
              <Card key={product.id} value={product.id}>
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text style={{ color: "gray" }}>
                    {product.shortDescription}
                  </Card.Text>
                  <hr />
                  <Card.Text style={{ color: "" }}>
                    Price: {product.price}
                  </Card.Text>

                  <Row xs={1} md={2} className="justify-content-center">
                    
                    <Button variant="outline-secondary" onClick={(e)=>{
                      history.push('/detailproduct/'+product._id);
                    }}>
                      <i class="zmdi zmdi-eye"></i>
                      
                    </Button>
                   
                    
                    <Button variant="outline-success">
                      <i class="zmdi zmdi-shopping-cart"></i>
                    </Button>
                    
                  </Row>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Shop;
