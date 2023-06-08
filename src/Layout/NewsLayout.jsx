import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Components/LeftNav/LeftNav";
import RightNav from "../Components/RightNav/RightNav";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
