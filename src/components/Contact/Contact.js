import React, { Component } from "react";
import "./styleContact.css";
import { Row, Col } from "react-bootstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  data = () => {
    for (let property in this.state) {
      console.log(property + ":" + this.state[property]);
    }
  };

  render() {
    return (
      <div id="form">
        <Row>
          <Col>
            <form className="formulaire">
              <label for="firstname">Prénom</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Entrer votre Prénom..."
                onChange={this.handleInput}
              ></input>
              <label for="lastname">Nom</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Entrer votre Nom..."
                onChange={this.handleInput}
              ></input>
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Entrer votre Mail..."
                onChange={this.handleInput}
              ></input>
              <label for="phone">Tel</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Entrer votre N° de Téléphone..."
                onChange={this.handleInput}
              ></input>
              <label for="lastname">Votre Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Entrer votre Message..."
                onChange={this.handleInput}
              ></textarea>
              <a href id="link" onClick={this.data}>
                Envoyer
              </a>
            </form>
          </Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
