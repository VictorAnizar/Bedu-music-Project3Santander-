import React from 'react';

import { Navbar, Nav, Container, NavDropdown, Form, FormControl } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {

    return (
        <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
            <Container>
                <LinkContainer to="/">

                    <Navbar.Brand >Bedu Music</Navbar.Brand>
                </LinkContainer>


                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
            <Container>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Search"
                            style={{ width: '300px' }}
                        />
                    </Form>
                    <Nav className="me-auto">
                        <LinkContainer to="/tu-musica">
                            <Nav.Link >Tu Musica</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/descubre">
                            <Nav.Link >Descubre</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contacto">
                            <Nav.Link >Contacto</Nav.Link>
                        </LinkContainer>

                        <NavDropdown title="Cuenta" align="end" menuVariant="dark" id="dropdown-menu-align-end">
                            <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Configuracion</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Cerrar Sesion</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );


}

export default Header;

