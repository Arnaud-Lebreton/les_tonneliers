import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class DetailPage1 extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>Note / 5</Col>
          </Row>
          <Row>
            <Col>text</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DetailPage1;
