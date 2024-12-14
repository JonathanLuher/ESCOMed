// src/PatientNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/Logo_v2-removebg.png';

const PatientNavbar = () => {
    return (
        <div>
            <nav className="navbar-fixed" style={{ backgroundColor: '#001f3f' }}>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">
                        <img src={logo} alt="Logo" style={{ height: '70px', marginLeft: '10px' }} /> 
                    </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/PatientView">Inicio</Link></li>
                        <li><Link to="/">Cerrar Sesion</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/login">Iniciar Sesión</Link></li>
                <li><Link to="/register">Registrarse</Link></li> 
            </ul>
        </div>
    );
};

export default PatientNavbar;
