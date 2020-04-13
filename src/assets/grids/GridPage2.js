import React, { Component } from "react";
import "./styleGridPage2.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import BoutonPage2 from "../../assets/boutons/BoutonPage2";
import Calendar1 from "../../assets/calendar/Calendar1";
import ModalCalendar from "../../assets/modal/ModalCalendar";
import { Modal } from "react-bootstrap";

class GridPage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      arrivalDate: 0,
      departureDate: 0,
      traveler: 1,
      night: 0,
      cleaning: 0,
      service: 0,
      touristTax: 0,
      total: 0,
      overnightTotalCoast: 0,
    };
    this.initPrice = 368;
    this.initCleaning = 10;
    this.initService = 20;
    this.InitTouristTax = 20;
  }
  /*calculation of the number of travelers*/
  /*calcul du nombre de voyageurs*/
  nTraveler = (e) => {
    let n = this.state.traveler;
    if (e.target.name == "plus") {
      n++;
    } else if (e.target.name == "moins" && n > 1) {
      n--;
    }
    this.state.traveler = n;
    this.setState({ traveler: n });
    this.coast();
  };

  overnight = () => {
    let nNight = 2;
    this.setState({ night: nNight });
  };

  /*calculate total cost overnight*/
  /*calcul le cout total nuité */
  coast = () => {
    //Calcul du prix chambre * nombre de nuit
    let cout1 = this.initPrice * this.state.night;
    this.state.overnightTotalCoast = cout1;
    this.setState({ overnightTotalCoast: cout1 });
    //Calcul du prix ménage * nombre de nuit
    let cout2 = this.initCleaning * this.state.night;
    this.state.cleaning = cout2;
    this.setState({ cleaning: cout2 });
    //Calcul du prix service * nombre de nuit
    let cout3 = this.initService * this.state.night;
    this.state.service = cout3;
    this.setState({ service: cout3 });
    //Calcul du prix service * nombre de nuit
    let cout4 = this.InitTouristTax * this.state.night * this.state.traveler;
    this.state.touristTax = cout4;
    this.setState({ touristTax: cout4 });
    //Calcul global
    let cout5 = cout1 + cout2 + cout3 + cout4;
    this.state.total = cout5;
    this.setState({ total: cout5 });
  };
  //
  //
  //Essai lance modal
  test1 = () => {
    this.setState({ show: !this.state.show });
  };

  test = () => {
    if (this.state.show) {
      return <ModalCalendar />;
    }
  };
  //
  //
  //
  //

  render() {
    return (
      <div className="gridPage2">
        <Container className="container1Grid2">
          <Row className="cont1Row0Grid2">
            <Col className="cont1Row0Col1Grid2">
              <span className="spanPrix">{this.initPrice}€</span>
              <span>/ nuit</span>
            </Col>
          </Row>
          <Row className="cont1Row1Grid2">
            <Col className="cont1Row1Col1Grid2">
              <label className="labelGrid2" for="arrivee">
                Date d'arrivée :
              </label>
              <input
                className="InputGrid2 arrivalDate"
                type="text"
                name="arrivee"
                placeholder="date arrivée"
                onClick={this.overnight}
              ></input>
            </Col>
            <Col className="cont1Row1Col2Grid2">
              <label className="labelGrid2" for="depart">
                Date de départ :
              </label>
              <input
                className="InputGrid2"
                type="text"
                name="depart"
                placeholder="date de départ"
                onClick={this.coast}
              ></input>
            </Col>
          </Row>
          <Row className="cont1Row2Grid2">
            <Col xs={7} className="cont1Row2Col1Grid2">
              <label className="labelGrid2" for="arrivee">
                Nombre de voyageurs :
              </label>
            </Col>
            <Col className="cont1Row2Col2Grid2">
              <Button
                className="ButtonPlusMoins"
                name="plus"
                onClick={this.nTraveler}
                variant="light"
              >
                +
              </Button>
              <div className="plusMoins">{this.state.traveler}</div>
              <Button
                className="ButtonPlusMoins"
                name="moins"
                onClick={this.nTraveler}
                variant="light"
              >
                -
              </Button>
            </Col>
          </Row>
          <Row className="cont1Row3Grid2">
            <Col xs={6} className="cont1Row3Col1Grid2">
              <span>{this.initPrice}€</span>
              <span> x {this.state.night} nuit(s) :</span>
            </Col>
            <Col className="cont1Row3Col2Grid2">
              <span>{this.state.overnightTotalCoast}€</span>
            </Col>
          </Row>
          <Row className="cont1Row4Grid2">
            <Col xs={8} className="cont1Row4Col1Grid2">
              <span>
                <a href="#">Frais de ménage :</a>
              </span>
            </Col>
            <Col className="cont1Row4Col2Grid2">
              <span>{this.state.cleaning}€</span>
            </Col>
          </Row>
          <Row className="cont1Row5Grid2">
            <Col xs={8} className="cont1Row5Col1Grid2">
              <span>
                <a href="#">Frais de service :</a>
              </span>
            </Col>
            <Col className="cont1Row5Col2Grid2">
              <span>{this.state.service}€</span>
            </Col>
          </Row>
          <Row className="cont1Row6Grid2">
            <Col xs={8} className="cont1Row6Col1Grid2">
              <span>
                <a href="#">Taxe de séjour et frais :</a>
              </span>
            </Col>
            <Col className="cont1Row6Col2Grid2">
              <span>{this.state.touristTax}€</span>
            </Col>
          </Row>
          <Row className="cont1Row7Grid2"></Row>
          <Row className="cont1Row8Grid2">
            <Col xs={8} className="cont1Row8Col1Grid2">
              <span>Total :</span>
            </Col>
            <Col className="cont1Row8Col2Grid2">
              <span>{this.state.total}€</span>
            </Col>
          </Row>
          <Row className="cont1Row9Grid2">
            <Col className="cont1Row9Col1Grid2">
              <BoutonPage2 />
              <button onClick={this.test1}>test</button>
            </Col>
          </Row>
        </Container>
        <Container className="container2Grid2">
          <Calendar1 />
        </Container>
      </div>
    );
  }
}

export default GridPage2;
