import React, { Component } from "react";
import "./styleGridPage1.css";
import CarrouselPage1 from "../../assets/caroussel/CarrouselPage1";
import DetailPage1 from "../detailPage1/DetailPage1";
import { Container, Row, Col } from "react-bootstrap";

class GridPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Container>
          <Row className="rowGrid">
            <Col className="colGrid propsCaption propsImg1 propsImg2 propsImg3">
              <CarrouselPage1
                propsCaption={this.props.propsCaption}
                propsImg1={this.props.propsImg1}
                propsImg2={this.props.propsImg2}
                propsImg3={this.props.propsImg3}
              />
            </Col>
            <Col className=" colGrid propsNote propsTiltle propsDescription propsCharacteristics">
              <DetailPage1
                propsNote={this.props.propsNote}
                propsTiltle={this.props.propsTiltle}
                propsDescription={this.props.propsDescription}
                propsCharacteristics={this.props.propsCharacteristics}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default GridPage1;
