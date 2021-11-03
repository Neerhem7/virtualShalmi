import React from "react";
import { Container, Row, Col, Button, Card , Table} from "react-bootstrap";
import { Link } from "react-router-dom";
import usersData from "../../UserData";
const VendorProduct = () => {
    const getBadge = status => {
        switch (status) {
          case 'Active': return 'success'
          case 'Inactive': return 'secondary'
          case 'Pending': return 'warning'
          case 'Banned': return 'danger'
          default: return 'primary'
        }
      }
      const fields = ['name','registered', 'role', 'status']
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
                <th>#</th>
                {Array.from({ length: 12 }).map((_, index) => (
                  <th key={index}>Table heading</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>2</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>3</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default VendorProduct;
