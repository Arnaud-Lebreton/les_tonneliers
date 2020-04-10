import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styleMenu.css";
import { Nav, NavDropdown } from "react-bootstrap";
import Login from "../Login/Login";

class Menu extends Component {
    render() {
        return (
            <div id="navbar">
                <Nav className="justify-content-end" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="#">Connexion/Inscription</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/">Accueil</Link>
                    </Nav.Item>
                    <NavDropdown title="Les Tonneliers" id="nav-dropdown">
                        <NavDropdown.Item eventKey="2.1">
                            Historique
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="2.2">
                            Beaune : L'Environnement
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="2.3">
                            Concept des locations
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="2.4">
                            <Link to="/page2">Page 2</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="language">Fr/En</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default Menu;
