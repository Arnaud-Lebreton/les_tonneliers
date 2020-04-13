import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class ModalCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  test = () => {
    console.log("test dans Modal");
  };

  render() {
    return (
      <div>
        <p>{this.test}</p>
      </div>
    );
  }
}

export default ModalCalendar;

{
  /* <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
          <Modal.Footer>
            <p>Modal body text goes here.</p>
          </Modal.Footer>
        </Modal.Dialog>*/
}
