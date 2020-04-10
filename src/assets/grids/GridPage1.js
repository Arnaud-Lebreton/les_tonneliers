import React, { Component } from "react";
import "./styleGridPage1.css";
import CarrouselPage1 from "../../assets/caroussel/CarrouselPage1";
import DetailPage1 from "../detailPage1/DetailPage1";
import { Container, Row, Col } from "react-bootstrap";

class GridPage1 extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <CarrouselPage1 />
            </Col>
            <Col>
              <DetailPage1 />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default GridPage1;
