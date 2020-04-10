import React, { Component } from "react";
import "./styleBodyPage1.css";
import { Button } from "react-bootstrap";
import CarrouselPage1 from "../../assets/caroussel/CarrouselPage1";
import BoutonPage1 from "../../assets/boutons/BoutonPage1";
import GridPage1 from "../../assets/grids/GridPage1";

class BodyPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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

        <GridPage1
          propsCaption="Le Corton Charlemagne"
          propsImg1="Photo1.gif"
          propsImg2="Photo2.gif"
          propsImg3="Photo3.gif"
          propsNote="1/5"
          propsTiltle="Le Corton Charlemagne"
          propsDescription="Description1"
          propsCharacteristics="Caractéristique1"
        />
        <br></br>
        <GridPage1
          propsCaption="Le Montrachet"
          propsImg1="Photo1.gif"
          propsImg2="Photo2.gif"
          propsImg3="Photo3.gif"
          propsNote="2/5"
          propsTiltle="Le Montrachet"
          propsDescription="Description2"
          propsCharacteristics="Caractéristique2"
        />
        <br></br>
        <GridPage1
          propsCaption="Le Clos Saint Denis"
          propsImg1="Photo1.gif"
          propsImg2="Photo2.gif"
          propsImg3="Photo3.gif"
          propsNote="3/5"
          propsTiltle="Le Clos Saint Denis"
          propsDescription="Description3"
          propsCharacteristics="Caractéristique3"
        />
        <br></br>
        <GridPage1
          propsCaption="Le Chambertin"
          propsImg1="Photo1.gif"
          propsImg2="Photo2.gif"
          propsImg3="Photo3.gif"
          propsNote="4/5"
          propsTiltle="Le Chambertin"
          propsDescription="Description4"
          propsCharacteristics="Caractéristique4"
        />
      </div>
    );
  }
}

export default BodyPage1;
