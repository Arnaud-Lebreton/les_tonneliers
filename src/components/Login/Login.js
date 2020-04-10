import React, { Component } from "react";
import "./styleLogin.css";
import { Modal, Button, Nav } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
    };
  }

  changeclose = () => {
    this.setState({ close: !this.state.close });
  };

  render() {
    return (
      <div className="login">
        <Nav.Link onClick={this.changeclose}>Connexion/Inscription</Nav.Link>
        <Modal onHide={this.changeclose} show={this.state.close}>
          <Modal.Header closeButton>
            <Modal.Title>
              <p>Connexion</p>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form className="form_login">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Entrer votre Mail..."
              ></input>
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Mot de passe..."
              ></input>
              <p>
                Mot de passe <a href="">oublié</a>
              </p>
              <p>
                Vous n'avez pas de compte <a href="">Inscription</a>
              </p>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.changeclose} variant="secondary">
              Close
            </Button>
            <Button>Connexion</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Login;
