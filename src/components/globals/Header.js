import React from 'react';
// import Button from '@mui/material/Button';

//Boton opciones
// import { styled, alpha } from '@mui/material/styles';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import EditIcon from '@mui/icons-material/Edit';
// import Divider from '@mui/material/Divider';
// import ArchiveIcon from '@mui/icons-material/Archive';
// import FileCopyIcon from '@mui/icons-material/FileCopy';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { withEmotionCache, withTheme } from '@emotion/react';
import {Navbar, Nav, Container, NavDropdown, Form, FormControl} from 'react-bootstrap'

const Header = ()=> {

        return (
            <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Bedu Music</Navbar.Brand>
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
                            <Nav.Link href="#home">Tu Musica</Nav.Link>
                            <Nav.Link href="#link">Descubre</Nav.Link>
                            <Nav.Link href="#link">Contacto</Nav.Link>

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

