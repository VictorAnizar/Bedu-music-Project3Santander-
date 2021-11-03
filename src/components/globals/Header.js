import React from 'react';

import { Navbar, Nav, Container, NavDropdown, Form, FormControl } from 'react-bootstrap'
// import AuthService from "./services/auth.service";

import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {
    // const [currentUser, setCurrentUser] = useState(undefined);

    // useEffect(() => {
    //   const user = AuthService.getCurrentUser();
  
    //   if (user) {
    //     setCurrentUser(user);
    //     setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
    //     setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    //   }
    // }, []);
  
    // const logOut = () => {
    //   AuthService.logout();
    // };
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
                            {/* {currentUser ? ( */}

                                <>
                                    <LinkContainer to="/perfil">
                                        <NavDropdown.Item> Perfil</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/salir">
                                    <NavDropdown.Item >Cerrar Sesion</NavDropdown.Item>
                                    </LinkContainer>
                                </>
                            {/* ) : ( */}
                                <>
                                <NavDropdown.Divider />
                                    <LinkContainer to="/login">
                                        <NavDropdown.Item >Iniciar Sesión</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/register">
                                        <NavDropdown.Item >Registrarse</NavDropdown.Item>
                                    </LinkContainer>

                                </>
                            {/* )} */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );


}

export default Header;

