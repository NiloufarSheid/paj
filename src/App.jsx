import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Map from "./components/body/Map";
import Round from "./components/body/Round";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Progressbar from "./components/body/Progressbar";

const App = () => {
  return (
    <Container >
    <Row>
        <Col> <Header /></Col>
      </Row>
      
      <Row >
        <Col md={4} sm={12}>
          <Progressbar />
        </Col>
        <Col md={5} sm={12}>
          <Map />
        </Col>

        <Col md={3} sm={12}>
          <Round />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
