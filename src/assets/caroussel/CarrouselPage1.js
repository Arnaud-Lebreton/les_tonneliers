import React, { Component } from "react";
import "./styleCarrouselPage1.css";
import { Carousel } from "react-bootstrap";

class CarrouselPage1 extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" alt="picture1" src="Photo1.gif" />
            <Carousel.Caption>
              <h3>Chardonnais</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" alt="picture2" src="Photo2.gif" />
            <Carousel.Caption>
              <h3>Chardonnais</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" alt="picture3" src="Photo2.gif" />

            <Carousel.Caption>
              <h3>Chardonnais</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarrouselPage1;
