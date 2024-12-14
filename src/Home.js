// src/Home.js

import React, { useEffect } from 'react';
import M from 'materialize-css';
import './App.css';
import './home.css';
import backgroundImage from './Images/carousel_2.jpg'; 
import image1 from './Images/carousel_1.jpg';
import image2 from './Images/carousel_2.jpg'; 
import image3 from './Images/carousel_3.jpg'; 
import Footer from './Footer'; 

const Home = () => {
    useEffect(() => {
        M.Parallax.init(document.querySelectorAll('.parallax'));
    }, []);

    return (
        <div>
            <div className="parallax-container">
                <div className="parallax">
                    <img src={backgroundImage} alt="Fondo Médico" />
                </div>
                <div className="overlay">
                    <h1 className="overlay-text">Bienvenido</h1>
                </div>
            </div>

            {/* Contenido de texto adicional debajo */}
            <div className="section white">
                <div className="row container center-align">
                    <h2 className="header">Sistema Web Médico ESCOM</h2>
                    <p className="grey-text text-darken-3 lighten-3">
                        Esta página está dedicada a ofrecer información médica y recursos útiles para los pacientes.
                    </p>

                    {/* Cards centradas con altura igualada */}
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="card equal-height">
                                <div className="card-image">
                                    <img src={image1} alt="Imagen 1" className="card-img" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Agenda citas</span>
                                    <p>Agenda citas médicas de manera sencilla</p>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card equal-height">
                                <div className="card-image">
                                    <img src={image2} alt="Imagen 2" className="card-img" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Recibe notificaciones</span>
                                    <p>Recibe avisos y notificaciones de citas próximas</p>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card equal-height">
                                <div className="card-image">
                                    <img src={image3} alt="Imagen 3" className="card-img" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Historial Médico</span>
                                    <p>Consulta de forma inmediata tu historial médico</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
