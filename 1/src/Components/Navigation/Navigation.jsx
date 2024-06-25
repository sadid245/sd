import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './Navigation.css'
const Navigation = () => {
    return (
        <div>
            
            <Navbar bg="primary" variant="dark" expand="lg" className="full-width-navbar">
      <Container>
        <Navbar.Brand href="#home">ABG Company LTD.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#service">Services</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#link1">Reviews</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navigation;