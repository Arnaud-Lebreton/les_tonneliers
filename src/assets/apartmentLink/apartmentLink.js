import React, { Component } from "react";
import "./apartmentLink.css";
import { Row, Col } from "react-bootstrap";

class apartmentLink extends Component {
  render() {
    return (
      <div className="apartmentlink_content">
        <Row className="img_apartment">
          <Col className="img_cortoncharlemagne">
            <a href="">
              <img src="img/p1.jpg" alt="image" />
              <h4>Le Corton Charlemagne</h4>
            </a>
          </Col>
          <Col className="img_montrachet">
            <a href="">
              <img src="img/p4.jpg" alt="image" />
              <h4>Le Montrachet</h4>
            </a>
          </Col>
          <Col className="img_closdenis">
            <a href="">
              <img src="img/p7.jpg" alt="image" />
              <h4>Le Clos Saint Denis</h4>
            </a>
          </Col>
          <Col className="img_chambertin">
            <a href="">
              <img src="img/p8.jpg" alt="image" />
              <h4>Le Chambertin</h4>
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default apartmentLink;
