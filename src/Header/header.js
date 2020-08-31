import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './header.css'

export default () =>(
<Navbar class = "nav-bar" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand class="h1" href="#home">Day-Frame</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">     
      <NavDropdown title="Categories" id="collasible-nav-dropdown">
        <NavDropdown.Item href='/program'>Programs</NavDropdown.Item>
        <NavDropdown.Item href="./recipe">Recipes</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="./registration">Registration</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">About us</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
