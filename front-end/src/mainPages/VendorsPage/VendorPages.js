import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import VendorLayout from "../../layout/VendorLayout";
const VendorPages = () => {
    const [vendors, setvendors] = useState([]);
    const history = useHistory();
    const getvendors = () => {
      axios
        .get("http://localhost:8000/user/getVendor")
        .then((res) => {
          setvendors(res.data);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    useEffect(getvendors, []);
    return (
        <VendorLayout>
        <div className="p-4">
      {vendors.length === 0 ? (
        <div className="justify-content-center">
          <h1>There is no vendor</h1>{" "}
        </div>
      ) : (
        <Row xs={1} md={4} className="">
          {vendors.map((vendor) => (
            <Col>
              <Card key={vendor.id} value={vendor.id}>
                <Card.Img variant="top" />

                <Card.Body>
                  <Card.Title>{vendor.name}</Card.Title>
                  <Card.Text style={{ color: "gray" }}>
                    
                  </Card.Text>
                  <hr />
                  
                  <Card.Text style={{ color: "" }}>
                 
                  </Card.Text>
                  <Card.Text style={{ color: "" }}>
                    
                  </Card.Text>

                  <Row xs={1} md={2} className="justify-content-center">
                    <Button
                      variant="outline-secondary"
                      onClick={(e) => {
                        history.push("/detailvendor/" + vendor._id);
                      }}
                    >
                      <i class="zmdi zmdi-eye"></i>
                    </Button>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
       </div>
    </VendorLayout>
    )
}

export default VendorPages
