import React from "react";
import { Container, Row, Col, Button, Card , Table} from "react-bootstrap";
import { Link } from "react-router-dom";
const VendorOrder = () => {
    return (
        <Container>
        <Card>
          <Card.Header style={{ fontWeight: "bold" }}>
            <Row>
              <Col className="header-left">Order </Col>
              <Col className="header-right">

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
                  Complete ()
                </Button>
              </Link>
            </div>
            <div className="p-2">
              <Link to="/vendor/addproduct">
                <Button variant="link" type="submit">
                  Processing ()
                </Button>
              </Link>
            </div>
            <div className="p-2">
              <Link to="/vendor/addproduct">
                <Button variant="link" type="submit">
                  Refund ()
                </Button>
              </Link>
            </div>
            <div className="p-2">
              <Link to="/vendor/addproduct">
                <Button variant="link" type="submit">
                  Cancelled ()
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
    )
}

export default VendorOrder
