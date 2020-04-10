import React, { Component } from "react";
import "./styleBoutonPage1.css";
import { Button } from "react-bootstrap";

class BoutonPage1 extends Component {
  render() {
    return (
      <div>
        <Button variant="danger">En savoir plus</Button>
      </div>
    );
  }
}

export default BoutonPage1;
