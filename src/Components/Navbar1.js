import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Navbar1() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">TweetJobs</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">Future Prospects</Nav.Link>
              <Nav.Link eventKey={2} href="#">
                Support us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
