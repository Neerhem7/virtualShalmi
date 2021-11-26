import axios from "axios";
import React, {useEffect, useState} from "react";
import { Navbar, Container, Nav, Badge, NavDropdown } from "react-bootstrap";
import { UserConsumer } from "../UserContext";
const MainNavbar = () => {
  
  
  return (
    <UserConsumer>
       {category=>{
            return <>
            
            <div>
      <Navbar
        style={{ backgroundColor: "var(--primary-color)" }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">Virtual Shalmi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav "
            className="justify-content-end"
          >
            <Nav className="">
              <Nav.Link href="#action1">Shop</Nav.Link>
              <Nav.Link href="#action2">Vendors</Nav.Link>
              <Nav.Link href="#action3">Sign In</Nav.Link>
              <Nav.Link href="#action4">Signup</Nav.Link>

              <Badge bg="danger">
                <Nav.Link href="#action5">Become a Vendor</Nav.Link>
              </Badge>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
      <Navbar
        style={{ backgroundColor: "var(--primary-color)" }}
        variant="dark"
      >
        <Container>
          <Nav>
            <NavDropdown title="All Categories" id="basic-nav-dropdown">
              {category.map((cat) => (
                <NavDropdown.Item key={cat.id} value={cat.id}>
                  {cat.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Nav>
            <Badge pill bg="danger" className="justify-content-end">
              <Nav.Link href="#action6">My Cart</Nav.Link>
            </Badge>
          </Nav>
        </Container>
      </Navbar>
    </div>
            </>
            
          }
        }
   
    </UserConsumer>
    
  );
};

export default MainNavbar;
