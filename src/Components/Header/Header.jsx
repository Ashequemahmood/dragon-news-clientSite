import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" srcset="" />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
      </div>
      <div className="d-flex">
        <button className="btn btn-danger">Latest</button>
        <Marquee className="text-danger" speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

      {/* nav bar */}
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
             
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
              <Button variant="secondary">Secondary</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
