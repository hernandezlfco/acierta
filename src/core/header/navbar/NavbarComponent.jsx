
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import logo from '../../../resources/img/logo_acierta_correo.png';
import './NavbarComponent.scss';

import { 
    Navbar, 
    NavItem, 
    NavbarToggler, 
    Collapse, 
    NavLink, 
    Nav, 
    NavbarBrand
} from 'reactstrap'; 
  
const NavbarComponent = () => {
  
    // Collapse isOpen State 
    const [isOpen, setIsOpen] = React.useState(false); 
  
    return ( 
        <div> 
            <Navbar color="none" light expand="md"> 
                <NavbarBrand href="/"><img className="logo" src={logo} alt="Logo" /></NavbarBrand> 
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} /> 
                <Collapse isOpen={isOpen} navbar> 
                    <Nav className="mr-auto" navbar> 
                        <NavItem className="mx-5 mb-2 mb-md-0 mr-md-2"> 
                            <NavLink className="nav-link" href="#">Inicio</NavLink> 
                        </NavItem> 
                        <NavItem className="mx-5 mb-2 mb-md-0 mr-md-2"> 
                            <NavLink className="nav-link" href="#">Servicios</NavLink> 
                        </NavItem> 
                        <NavItem className="mx-5 mb-2 mb-md-0 mr-md-2"> 
                            <NavLink className="nav-link" href="#">Publicaciones</NavLink> 
                        </NavItem> 
                        <NavItem className="mx-5 mb-2 mb-md-0 mr-md-2"> 
                            <NavLink className="nav-link" href="#">Escríbenos</NavLink> 
                        </NavItem> 
                    </Nav> 


                    <div className="d-flex">
                      <button className="personas" size="lg">Personas ▼</button>
                      <button className="initSesion" size="lg">Iniciar sesión</button>
                    </div>

                </Collapse> 
            </Navbar> 
        </div > 
    ); 
} 
  
export default NavbarComponent;