import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import './PatientView.css';
import Footer from './Footer';
import image1 from './Images/MESAÑO.png'; 
import image2 from './Images/Proximacita.png';
import image3 from './Images/historial_clinico.png'; 

const PatientView = () => {
    return (
        <div>
            <div className="patient-container">
                <h2 className="center-align">Bienvenido, Paciente</h2>
                <div className="row center-align">
                    <div className="col s12 m4">
                        <Link to="/Agendarcita"> {/* Envolver la tarjeta en un Link */}
                            <div className="card">
                                <div className="card-image">
                                    <img src={image1} alt="Agendar cita" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Agendar Cita</span>
                                    <p>Agenda una cita médica de manera sencilla.</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col s12 m4">
                        <Link to="/Proxima-Cita">
                            <div className="card">
                                <div className="card-image">
                                    <img src={image2} alt="Próximas citas" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Próximas Citas</span>
                                    <p>Consulta tus citas médicas próximas.</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col s12 m4">
                        <Link to="/historialclinico">
                            <div className="card">
                                <div className="card-image">
                                    <img src={image3} alt="Historial clínico" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Historial Clínico</span>
                                    <p>Consulta tu historial clínico completo.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default PatientView;
