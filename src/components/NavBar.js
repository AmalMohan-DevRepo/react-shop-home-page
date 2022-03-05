import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button, Badge } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="fs-4">Shopee</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <NavDropdown title="Shop" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Popular Items</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button variant="outline-success" size="lg"><i className="bi bi-cart3"></i> Cart <Badge pill bg="success">0</Badge></Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar