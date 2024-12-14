import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './Images/Logo_v2-removebg.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar-fixed" style={{ backgroundColor: '#001f3f' }}> {/* Cambiar el color de la barra de navegación */}
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">
                        <img src={logo} alt="Logo" style={{ height: '70px', marginLeft: '10px' }} /> {/* Ajusta la altura y margen según sea necesario */}
                    </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                        <i className="material-icons">menu</i> {/* Icono de hamburguesa */}
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/login">Iniciar Sesión</Link></li>
                        <li><Link to="/register">Registrarse</Link></li> {/* Asegúrate de que este enlace esté presente */}
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/login">Iniciar Sesión</Link></li>
                <li><Link to="/register">Registrarse</Link></li> {/* Asegúrate de que este enlace esté presente */}
            </ul>
        </div>
    );
};

export default Navbar;
