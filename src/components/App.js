import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
import {} from "react-bootstrap";
import BodyPage1 from "../components/bodyPage1/BodyPage1";
import Contact from "../components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <Menu />

        <div className="content">
          <Switch>
            <Route path="/">
              <BodyPage1 />
            </Route>
          </Switch>
          <h2>Nous Contacter</h2>
          <Contact />
        </div>

        <Footer />
      </Router>
    );
  }
}

export default App;
