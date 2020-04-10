import React, { Component } from "react";
import "./styleBodyPage1.css";
import { Button } from "react-bootstrap";
import CarrouselPage1 from "../../assets/caroussel/CarrouselPage1";
import BoutonPage1 from "../../assets/boutons/BoutonPage1";
import GridPage1 from "../../assets/grids/GridPage1";

class BodyPage1 extends Component {
  render() {
    return (
      <div className="bodyPage1">
        <div className="headerPage1">
          <img src="beaune1reprise.gif" alt="Beaune picture" />
        </div>
        <h1>Location saisonnière au coeur de Beaune</h1>
        <h4>
          Petits écrins au cœur de Beaune, nos 4 appartements sont décorés avec
          soin et très bien équipés. Ils vous permettront de profiter d’un
          séjour en toute indépendance et sans concession au confort.
        </h4>
        <h3>Nos appartements</h3>
        <br></br>
        <br></br>
        <GridPage1 />
      </div>
    );
  }
}

export default BodyPage1;
