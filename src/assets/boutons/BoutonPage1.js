import React, { Component } from "react";
import "./styleBoutonPage1.css";
import { Button } from "react-bootstrap";
import BodyPage2 from "../../components/bodyPage2/BodyPage2";

class BoutonPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  test = () => {
    console.log("test");
    return (window.location.href = "http://localhost:3000/page2");
  };

  render() {
    return (
      <div>
        <Button variant="danger" className="propsButton" onClick={this.test}>
          {this.props.button}
        </Button>
      </div>
    );
  }
}

export default BoutonPage1;
