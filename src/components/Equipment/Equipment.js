import React, { Component } from "react";
import "./styleEquipment.css";
import { Col } from "react-bootstrap";

class Equipment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="equipment_content">
        <div>
          <Col className="equipment">
            <h3>Les Equipements</h3>
          </Col>
        </div>
        <div className="equipment_details">
          <Col>
            <ul>
              <li>
                Lit Queen Size (160cm) avec matelas et sur-matelas de qualité «
                Palace »
              </li>
              <li>Double vitrage, volets, rideaux</li>
              <li>Baignoire, linge de bain, peignoirs, kit de bien-être bio</li>
              <li>Terrasse privative paysagée de 25m² avec salon de jardin</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Spa privatif extérieur sur terrasse</li>
              <li>Enceinte Bluetooth</li>
              <li>Accès Internet en Wifi gratuit</li>
              <li>Parking gratuit devant la résidence</li>
            </ul>
          </Col>
        </div>
      </div>
    );
  }
}

export default Equipment;
