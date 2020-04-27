import React, { Component } from "react";
import "./styleGridDetails.css";
import { Col } from "react-bootstrap";
import CarrouselPage1 from "../caroussel/CarrouselPage1";
import Equipment from "../../components/Equipment/Equipment";

class GridDetails extends Component {
  // Appel aux données
  componentDidMount() {
    //le 1er affichage de la page
    this.getAppartement();
  }

  getAppartement = () => {
    const options = {
      method: "GET",
      headers: { "Content-type": "application/json" },
      mode: "cors",
    };
    fetch(
      "http://localhost:8080/appartement/detailsappartement?id=" + //envoie du paramètre de recherche dans le chemin
        this.props.idAppartement,
      options
    )
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({ dataDetailAppartement: data });
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <div>
        <div className="grid_details">
          <Col className="caroussel_col1">
            <h3>Le Corton Charlemagne</h3>
            <br />
            <p>
              <span>
                Située au premier étage de notre résidence, la chambre « Le
                Corton Charlemagne » offre un niveau de confort et de romantisme
                au-delà des espérances…
              </span>
              <br />
              <p>
                Univers de 45m² (25m² pour la chambre, 20m² pour la salle de
                bain), parquet de chêne, couleurs tendres, plafond d’époque
                peints à la main, baldaquins de 160cm, literie d’excellente
                qualité.
              </p>
              <br />
              <p>
                La salle de bain adjacente vous offre de beaux volumes avec
                grandes hauteurs sous plafonds moulurés et donne accès à votre
                terrasse privative orientée sud sud-est.
              </p>
              <br />
              <p>
                Cet espace qui vous est exclusivement réservé, vous offre la
                possibilité de déguster un verre en amoureux en profitant du
                salon de jardin, de lézarder au soleil encore de vous relaxer
                dans votre SPA privatif sans vis-à-vis…
              </p>
              <br />
              <p>
                Séjourner dans la chambre « Le Corton Charlemagne », c’est vivre
                une expérience à deux hors du commun avec la garantie de garder
                des souvenirs impérissables.
              </p>
            </p>
          </Col>
          <Col className="caroussel_col2">
            <CarrouselPage1
              propsImg1="img/P1.jpg"
              propsImg2="img/P2.jpg"
              propsImg3="img/P3.jpg"
            />
          </Col>
        </div>
        <div>
          <Equipment />
        </div>
      </div>
    );
  }
}

export default GridDetails;
