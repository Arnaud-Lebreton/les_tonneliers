import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import GridPage2 from "../../assets/grids/GridPage2";

class ModalCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
    };
  }

  changeClose = () => {
    this.setState({ close: !this.state.close });
  };

  render() {
    return (
      <div className="modalPage2">
        <Modal onHide={this.changeClose} show={this.state.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalCalendar;
