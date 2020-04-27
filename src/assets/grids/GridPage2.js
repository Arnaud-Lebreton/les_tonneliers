import React, { Component } from "react";
import "./styleGridPage2.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import BoutonPage2 from "../../assets/boutons/BoutonPage2";
import Calendar1 from "../../assets/calendar/Calendar1";

class GridPage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomApp: "",
      dataReservation1: [],
      show: false,
      traveler: 0,
      night: 0,
      cleaning: 0,
      service: 0,
      touristTax: 0,
      total: 0,
      overnightTotalCoast: 0,
    };
    this.initPrice = 200;
    this.initCleaning = 10;
    this.initService = 10;
    this.InitTouristTax = 20;
    this.arrivalDate = 0;
    this.departureDate = 0;
    this.calculDate = 0;
  }

  // Appel aux données au clic
  componentDidMount() {
    //le 1er affichage de la page
    this.getReservation();
  }

  getReservation = () => {
    const options = {
      method: "GET",
      headers: { "Content-type": "application/json" },
      mode: "cors",
    };
    fetch("http://localhost:8080/reservation/", options)
      .then((res) => res.json())
      .then(
        (data) => {
          this.state.dataReservation1 = data;
          console.log(data);
          this.setState({ dataReservation1: data });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  /*
  /*calculation of the number of nights
  /*Calcul du nombre de nuit
  */
  /*recovery of data entry - récupération de la saisie de donnée*/
  getNight = (e) => {
    let nameDate = e.target.name;
    let valDate = e.target.value;
    //formatting the date entry - Formatage de saisie de date
    if (valDate.length == 2) {
      e.target.value = valDate + "/";
    } else if (valDate.length == 5) {
      e.target.value = valDate + "/";
    }
    //dates formatting - Formatage des dates aaaa-mm-dd
    if (valDate.length == 10) {
      let calculJour = valDate.substr(0, 2);
      let calculMois = valDate.substr(3, 2);
      let calculAnnee = valDate.substr(6, 4);
      this.calculDate = calculAnnee + "-" + calculMois + "-" + calculJour;
      if (nameDate == "arrivee") {
        this.arrivalDate = this.calculDate;
      } else if (nameDate == "depart") {
        this.departureDate = this.calculDate;
      }
      //dates formatting - Formatage des dates
      if (this.arrivalDate != 0 && this.departureDate != 0) {
        this.calculNight(e, this.arrivalDate, this.departureDate);
      }
    }
  };

  /*calculation of the number of nights - Calcul du nombre de nuits*/
  calculNight = (e, dateA, dateB) => {
    let date1 = new Date(dateA);
    let date2 = new Date(dateB);
    let diff = this.dateDiff(date1, date2);
    let nNight = diff.day;
    if (nNight < 0) {
      alert("Attention, la date de départ est inférieure à la date d'arrivée");
      e.target.value = "";
    } else {
      this.state.night = nNight;
      this.setState({ night: nNight });
      this.coast();
    }
  };
  /*Calcul du nombre de jour entre 2 dates*/
  dateDiff = (date1, date2) => {
    let diff = {}; // Initialisation du retour
    let tmp = date2 - date1;

    tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60; // Extraction du nombre de secondes

    tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
    diff.min = tmp % 60; // Extraction du nombre de minutes

    tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
    diff.hour = tmp % 24; // Extraction du nombre d'heures

    tmp = Math.floor((tmp - diff.hour) / 24); // Nombre de jours restants
    diff.day = tmp;

    return diff;
  };
  /*
  /*calculation of the number of travelers
  /*calcul du nombre de voyageurs
  */
  nTraveler = (e) => {
    let n = this.state.traveler;
    if (e.target.name == "plus" && n < 6) {
      n++;
    } else if (e.target.name == "moins" && n > 1) {
      n--;
    }
    this.state.traveler = n;
    this.setState({ traveler: n });
    this.coast();
  };
  /*
  /*calculate total cost overnight
  /*calcul le cout total nuité 
  */
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
  /*
  /*-
  * Modal de récapitulation :
  */
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
                placeholder="jj/mm/aaaa"
                maxlength="10"
                onChange={this.getNight}
              ></input>
            </Col>
            <Col className="cont1Row1Col2Grid2">
              <label className="labelGrid2 " for="depart">
                Date de départ :
              </label>
              <input
                className="InputGrid2"
                type="text"
                name="depart"
                placeholder="jj/mm/aaaa"
                maxlength="10"
                onChange={this.getNight}
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
