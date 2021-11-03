import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './header.css'
const Header = () => {
    return (
        <Container className="header p-2">
            <Row>
            <Col className="header-left p-4">
                Dashboard
            </Col>
            <Col className="header-right p-4">
                <img alt="img"/>
            </Col>
            </Row>
           
        </Container>
    )
}

export default Header
