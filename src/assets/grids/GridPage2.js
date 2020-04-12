import React, { Component } from "react";
import "./styleGridPage2.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import BoutonPage2 from "../../assets/boutons/BoutonPage2";

class GridPage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="gridPage2">
        <Container className="container1Grid2">
          <Row className="cont1Row0Grid2">
            <Col className="cont1Row0Col1Grid2">
              <span className="spanPrix">368€</span>
              <span>/ nuit</span>
            </Col>
          </Row>
          <Row className="cont1Row1Grid2">
            <Col className="cont1Row1Col1Grid2">
              <label className="labelGrid2" for="arrivee">
                Date d'arrivée :
              </label>
              <input
                className="InputGrid2"
                type="text"
                name="arrivee"
                placeholder="date arrivée"
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
              ></input>
            </Col>
          </Row>
          <Row className="cont1Row2Grid2">
            <Col xs={7} className="cont1Row2Col1Grid2">
              <label className="labelGrid2" for="arrivee">
                Nombre voyageurs :
              </label>
            </Col>
            <Col className="cont1Row2Col2Grid2">
              <Button className="InputPlusMoins" variant="light">
                +
              </Button>
              <span className="spanPlusMoins">00</span>
              <Button className="InputPlusMoins" variant="light">
                -
              </Button>
            </Col>
          </Row>
          <Row className="cont1Row3Grid2">
            <Col xs={6} className="cont1Row3Col1Grid2">
              <span>368€</span>
              <span> x 1 nuit :</span>
            </Col>
            <Col className="cont1Row3Col2Grid2">
              <span>368€</span>
            </Col>
          </Row>
          <Row className="cont1Row4Grid2">
            <Col xs={8} className="cont1Row4Col1Grid2">
              <span>
                <a href="#">Frais de ménage :</a>
              </span>
            </Col>
            <Col className="cont1Row4Col2Grid2">
              <span>20€</span>
            </Col>
          </Row>
          <Row className="cont1Row5Grid2">
            <Col xs={8} className="cont1Row5Col1Grid2">
              <span>
                <a href="#">Frais de service :</a>
              </span>
            </Col>
            <Col className="cont1Row5Col2Grid2">
              <span>20€</span>
            </Col>
          </Row>
          <Row className="cont1Row6Grid2">
            <Col xs={8} className="cont1Row6Col1Grid2">
              <span>
                <a href="#">Taxe de séjour et frais :</a>
              </span>
            </Col>
            <Col className="cont1Row6Col2Grid2">
              <span>20€</span>
            </Col>
          </Row>
          <Row className="cont1Row7Grid2"></Row>
          <Row className="cont1Row8Grid2">
            <Col xs={8} className="cont1Row8Col1Grid2">
              <span>Total :</span>
            </Col>
            <Col className="cont1Row8Col2Grid2">
              <span>448€</span>
            </Col>
          </Row>
          <Row className="cont1Row9Grid2">
            <Col className="cont1Row9Col1Grid2">
              <BoutonPage2 />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default GridPage2;
