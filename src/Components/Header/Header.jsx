import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";




const Header = () => {

  

  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" srcSet="" />
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
      
    </Container>
  );
};

export default Header;
