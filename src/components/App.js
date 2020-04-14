import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
import {} from "react-bootstrap";
import BodyPage1 from "../components/bodyPage1/BodyPage1";
import BodyPage2 from "../components/bodyPage2/BodyPage2";
import Contact from "../components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <Menu />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <BodyPage1 />
            </Route>
            <Route path="/page2">
              <BodyPage2 />
            </Route>
          </Switch>
          <Contact />
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
