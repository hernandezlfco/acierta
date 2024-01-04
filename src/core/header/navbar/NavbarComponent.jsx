
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import logo from '../../../resources/img/logo_acierta_correo.png';
import './NavbarComponent.scss';

import { Navbar, NavItem, NavLink, Nav, NavbarBrand } from 'reactstrap'; 
import { Col, Container } from 'reactstrap';
import { BsChatSquareFill } from "react-icons/bs";
import { MdInsertDriveFile } from "react-icons/md";
import { RiHome2Fill } from "react-icons/ri";
import { BsBookFill } from "react-icons/bs";
  
const NavbarComponent = () => {
  

    return ( 
        <> 
            <Navbar className="desktop" color="none" light expand="md">
                <Container>
                    <Nav className="mr-auto" navbar>
                        <Col xs="6" sm="2">
                            <NavbarBrand href="/">
                                <img className="logo" src={logo} alt="Logo" />
                            </NavbarBrand>
                        </Col>
                        <Col className="item-desktop" xs="6" sm="2">
                            <NavItem>
                                <NavLink className="nav-link" href="/">
                                    Inicio
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col className="item-desktop" xs="6" sm="2">
                            <NavItem>
                                <NavLink className="nav-link" href="/services">
                                    Servicios
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col className="item-desktop" xs="6" sm="2">
                            <NavItem>
                                <NavLink className="nav-link" href="#">
                                    Publicaciones
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col className="item-desktop" xs="6" sm="2">
                            <NavItem>
                                <NavLink className="nav-link" href="#">
                                    Escríbenos
                                </NavLink>
                            </NavItem>
                        </Col>
                        <Col xs="6" sm="2">
                            <div className="d-flex-btn ml-auto">
                                <button className="personas" size="lg">
                                    Personas ▼
                                </button>
                                <button className="initSesion" size="lg">
                                    Iniciar sesión
                                </button>
                            </div>
                        </Col>
                    </Nav>
                </Container>
            </Navbar>

            <Navbar className="mobile" color="none" light expand="md">
                <Nav className="mr-auto d-flex flex-row align-items-center justify-content-center" navbar>
                    <NavItem className="mx-2">
                        <div className="nav-item-container">
                            <NavLink className="nav-link" href="#">
                                <RiHome2Fill />
                            </NavLink>
                            <div className="nav-item-title">Inicio</div>
                        </div>
                    </NavItem>
                    <NavItem className="mx-2">
                        <div className="nav-item-container">
                            <NavLink className="nav-link" href="#">
                                <MdInsertDriveFile />
                            </NavLink>
                            <div className="nav-item-title">Servicios</div>
                        </div>
                    </NavItem>
                    <NavItem className="mx-2">
                        <div className="nav-item-container">
                            <NavLink className="nav-link" href="#">
                                <BsBookFill />
                            </NavLink>
                            <div className="nav-item-title">Publicaciones</div>
                        </div>
                    </NavItem>
                    <NavItem className="mx-2">
                        <div className="nav-item-container">
                            <NavLink className="nav-link" href="#">
                                <BsChatSquareFill />
                            </NavLink>
                            <div className="nav-item-title">Escríbenos</div>
                        </div>
                    </NavItem>
                </Nav>
            </Navbar>
        </> 
    ); 
} 
  
export default NavbarComponent;