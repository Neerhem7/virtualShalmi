import React from "react";
import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import usersData from "../../UserData";
const VendorDashboard = () => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Row className="text-center">
            <Col lg={4}>
              <h4 style={{ fontWeight: "lighter" }}>Sales</h4>
              <h2>25 Rs </h2>
            </Col>
            <Col lg={4}>
              <h4 style={{ fontWeight: "lighter" }}>Earnings</h4>
              <h2>25 Rs </h2>
            </Col>
            <Col lg={4}>
              <h4 style={{ fontWeight: "lighter" }}>Order</h4>
              <h2>25 Rs </h2>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Row>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <Link to="/vendor/order">Orders</Link>
            </Card.Header>
            <Card.Body>
            <Table responsive>
       
            <tbody>
              <tr>
                <td>Total</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Completed</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Pending</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Canceled</td>
                <td>1</td>
              </tr>
           
            
            </tbody>
            </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <Row>
                <Col className="header-left">Products </Col>
                <Col className="header-right">
                  <Link to="/vendor/addproduct" style={{color : "black)"}}>
                   
                      Add New Product
                  
                  </Link>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
            <Table responsive>
            <tbody>
              <tr>
                <td>Total</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Publish</td>
                <td>1</td>
              </tr>
              <tr>
                <td>OnSale</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Out of Stock</td>
                <td>1</td>
              </tr>
           
            
            </tbody>
          </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VendorDashboard;
