import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
export const ProductCard = ({ product }) => {
  return (
      <>
        <Card style={{ width: "14rem" }} className="m-4">
        <Link to={"/product/" + product._id}>
        <Card.Img variant="top" src={
            product && product.productPictures && product.productPictures[0].img
          }
          alt={product.title}
          className="w-100"
          style={{ height: "200px" }}/>
          </Link>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text className="mb-0 fw-bold price">
          Rs-{product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    {/* <div className="m-4">
    
      <Link to={"/product/" + product._id}>
        <img
          src={
            product && product.productPictures && product.productPictures[0].img
          }
          alt={product.title}
          className="w-100"
          style={{ height: "400px" }}
        />
      </Link>
      <div className="desc mt-2">
        <p className="mb-0 title">{product.title}</p>
        <p className="mb-0 fw-bold price">${product.price}</p>
      </div>
    </div> */}
    </>
  );
};
