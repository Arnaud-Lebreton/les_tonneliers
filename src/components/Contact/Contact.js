import React, { Component } from "react";
import "./styleContact.css";
import { Row, Col } from "react-bootstrap";
import BoutonPage1 from "../../assets/boutons/BoutonPage1";

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
      <div className="contact" id="form">
        <Col>
          <h2>Nous Contacter</h2>
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
        <Col className="reserve">
          <h2>Réserver votre appartement</h2>
          <br />
          <p>
            Pour réserver un de nos appartements, contactez nous directement par
            Téléphone ou via le formulaire
          </p>
          <p>
            Résidence Les Tonneliers
            <br />7 Rue des Tonneliers
            <br />
            21200 Beaune, France
          </p>
          <p>
            <span>Tel :</span> (+33) 07.60.40.65.49 <br />
            <span>Email :</span> contact@lestonneliers.fr
          </p>
          <a
            href="https://www.google.com/maps/place/7+Rue+des+Tonneliers,+21200+Beaune/@47.0243942,4.837084,17z/data=!3m1!4b1!4m5!3m4!1s0x47f2f345f565f3ff:0x899fbdaa48d90ae4!8m2!3d47.0243942!4d4.8392727"
            target="blank"
          >
            <BoutonPage1 button="Plan d'accès et Itinéraire" />
          </a>
          <img src="img/map_beaune.png" alt="map_beaune" />
        </Col>
      </div>
    );
  }
}

export default Contact;
