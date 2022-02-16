import React from "react";
import { AdminSideBar } from "../Admin/adminSideBar";
import { Link } from "react-router-dom";
import { CarryOutOutlined } from "@ant-design/icons";
import { Col, Row } from "react-bootstrap";

export const AdminLayout = (props) => {
  return (
    <>
      {props.sidebar ? (
        <Row>
          {/* <div className = 'admin-layout'>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
                 <Link className="navbar-brand" to="/">Virtual Shalmi</Link>
                      <ul className = 'list-group list-group-horizontal list-unstyled list-inline' style = {{position: 'absolute' ,left: '40%' , fontSize: '12px', fontWeight: '600', letterSpacing: '3px'}}>
                        <li className = 'admin-tag'>ADMIN PANEL</li>
                        <li style = {{paddingLeft: '300px', paddingTop: '20px'}}>
                        <CarryOutOutlined style = {{color: '#20BD99', paddingRight: '10px', fontSize: '24px'}}/></li>
                        <li className = 'pt-4'>100%Secure</li>
                      
                      </ul>
                    
                     
                  </nav>
                </div> */}
          <Col className="col-3">
            <AdminSideBar />
          </Col>
          <Col className="col-9 bg-light m-0 pr-5">
            <div className="admin-layout">
              <p className="admin-tag">
                ADMIN PANEL
              </p>
            </div>
            <hr />
            {props.children}
          </Col>
        </Row>
      ) : (
        props.children
      )}
    </>
  );
};
