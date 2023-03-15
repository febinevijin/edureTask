import React from 'react'

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Contact List</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/contactList">Contacts</Nav.Link>
          

              <NavDropdown title="myPage" id="navbarScrollingDropdown">
               
                
                <NavDropdown.Divider />
                <NavDropdown.Item href="/addContact">
                 Add contact
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                 Logout
                </NavDropdown.Item>
              </NavDropdown>
         
            </Nav>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header
