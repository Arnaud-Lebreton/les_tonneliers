import React, { Component } from "react";
import "./styleBodyPage2.css";
import GridPage2 from "../../assets/grids/GridPage2";

class BodyPage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="bodyPage2">
        <GridPage2 />
      </div>
    );
  }
}

export default BodyPage2;
