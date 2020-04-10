import React, { Component } from "react";
import "./styleFooter.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div id="logo_footer">
          <img src="img/logo_lestonneliers.png" alt="logo" />
        </div>
        <div className="social_network">
          <a href="https://fr-fr.facebook.com/">
            <img src="./img/ico_facebook.svg" alt="ico_facebook" />
          </a>
          <a href="https://www.instagram.com/?hl=fr">
            <img src="./img/ico_instagram.svg" alt="ico_instagram" />
          </a>
          <a href="https://www.google.fr/maps">
            <img src="./img/ico_googlemap.svg" alt="ico_googlemap" />
          </a>
        </div>
        <div id="logo_ville_footer">
          <img src="img/ville_de_beaune_logo.svg" alt="logo_ville" />
        </div>
      </div>
    );
  }
}

export default Footer;
