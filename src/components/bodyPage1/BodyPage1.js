import React, { Component } from "react";
import "./styleBodyPage1.css";
import GridPage1 from "../../assets/grids/GridPage1";
import Contact from "../Contact/Contact";

class BodyPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="bodyPage1">
        <div className="headerPage1"></div>
        <div className="textePage1">
          <h1>Location saisonnière au coeur de Beaune</h1>
          <h4>
            Petits écrins au cœur de Beaune, nos 4 appartements sont décorés
            avec soin et très bien équipés. Ils vous permettront de profiter
            d’un séjour en toute indépendance et sans concession au confort.
          </h4>
          <h3>Nos appartements</h3>
        </div>
        <div className="classBodyPage1">
          <a className="classRetour" href="#navbar">
            <img src="/img/retour.svg" alt="Retour" />
          </a>

          <GridPage1
            propsCaption="Le Corton Charlemagne"
            propsImg1="/img/p7.jpg"
            propsImg2="/img/P1.jpg"
            propsImg3="/img/p2.jpg"
            propsNote="Note : 4/5"
            propsTiltle="Le Corton Charlemagne"
            propsDescription="Description1"
            propsCharacteristics="Caractéristique1"
          />
          <br></br>
          <GridPage1
            propsCaption="Le Montrachet"
            propsImg1="/img/p7.jpg"
            propsImg2="/img/p3.jpg"
            propsImg3="/img/p4.jpg"
            propsNote="Note : 4/5"
            propsTiltle="Le Montrachet"
            propsDescription="Description2"
            propsCharacteristics="Caractéristique2"
          />
          <br></br>
          <GridPage1
            propsCaption="Le Clos Saint Denis"
            propsImg1="/img/p7.jpg"
            propsImg2="/img/p5.jpg"
            propsImg3="/img/p6.jpg"
            propsNote="Note : 4/5"
            propsTiltle="Le Clos Saint Denis"
            propsDescription="Description3"
            propsCharacteristics="Caractéristique3"
          />
          <br></br>
          <GridPage1
            propsCaption="Le Chambertin"
            propsImg1="/img/p7.jpg"
            propsImg2="/img/p10.jpg"
            propsImg3="/img/p11.jpg"
            propsNote="Note : 4/5"
            propsTiltle="Le Chambertin"
            propsDescription="Description4"
            propsCharacteristics="Caractéristique4"
          />
        </div>
        <div className="contact_component">
          <Contact />
        </div>
      </div>
    );
  }
}

export default BodyPage1;
