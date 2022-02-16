import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import VendorLayout from "../../layout/VendorLayout";
const VendorDashboard = (props) => {
  const [tproduct, settproduct] = useState()
 const [publish, setpublish] = useState()
  const [sale, setsale] = useState()
  const [outstock, setoutstock] = useState() 
  const history = useHistory();
  console.log(props);
  const callDashboard = async () => {
    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .get("http://localhost:8000/user/vendor/dashboard", config)
      .then((response) => {
        if(response.data.Authenticate === false){
          console.log(response.data.Authenticate);
          history.push('/vendorlogin')
          //  history.replace('vendorlogin');
           return; 
        }
        settproduct(response.data.tProduct);
        setpublish(response.data.publish);
        setsale(response.data.saleProduct);
        setoutstock(response.data.outstock);
        
      })
      .catch((e) => console.log("not solve data", e));
  };
  useEffect(() => {
    callDashboard();
  }, []);
  return (
    <VendorLayout>
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
                  <Link to="/vendor/addproduct" style={{ color: "black)" }}>
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
                    <td>{tproduct}</td>
                  </tr>
                  <tr>
                    <td>Publish</td>
                    <td>{publish}</td>
                  </tr>
                  <tr>
                    <td>OnSale</td>
                    <td>{sale}</td>
                  </tr>
                  <tr>
                    <td>Out of Stock</td>
                    <td>{outstock}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </VendorLayout>
  );
};

export default VendorDashboard;
