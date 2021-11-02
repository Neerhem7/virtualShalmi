import React from 'react'
import { Container } from 'react-bootstrap'
import './header.css'
const Header = () => {
    return (
        <Container className="header p-2">
            <div className="header-left p-3">
                Dashboard
            </div>
            <div className="header-right">
                <img alt="img"/>
            </div>
        </Container>
    )
}

export default Header
