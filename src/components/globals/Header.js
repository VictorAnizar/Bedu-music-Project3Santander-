import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
/* import "../../css/Header.css"; */

import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { LinkContainer } from "react-router-bootstrap";
import Boton from "../Button";

const Header = () => {
  const [click, setClick] = useState(false);
  const [boton, setBoton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setBoton(false);
    } else {
      setBoton(true);
    }
  };

  window.addEventListener("resize", showButton);
  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Bedu Music</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
              style={{ width: "300px" }}
            />
          </Form>
          <Nav className="me-auto">
            <LinkContainer to="/tu-musica">
              <Nav.Link>Tu Musica</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/descubre">
              <Nav.Link>Descubre</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacto">
              <Nav.Link>Contacto</Nav.Link>
            </LinkContainer>

            <NavDropdown
              title="Cuenta"
              align="end"
              menuVariant="dark"
              id="dropdown-menu-align-end"
            >
              <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Configuracion
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Cerrar Sesion
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

/*  <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            BEDU MUSIC <i className="fa-duotone fa-headphones"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                  style={{ width: "300px" }}
                />
              </Form>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/tu-musica"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tu Música
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/descubre"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Descubre
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contacto"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cuenta"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Regístrate
              </Link>
            </li>
          </ul>
          {boton && (
            <Boton className="nav-item" buttonStyle="btn--outline">
              Regístrate
            </Boton>
          )}
        </div>
      </nav>
    </> */
