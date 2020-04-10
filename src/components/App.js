import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
import {} from "react-bootstrap";
import BodyPage1 from "../components/bodyPage1/BodyPage1";

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Footer />
                <BodyPage1 />
            </div>
        );
    }
}

export default App;
