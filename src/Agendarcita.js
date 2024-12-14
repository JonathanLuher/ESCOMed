// src/agendarcita.js
import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';


const agendarcita = () => {
    return (
        <div className="container">
            <h2>Agendar Cita</h2>
            <form>
                <div className="input-field">
                    <input type="text" id="nombre" required />
                    <label htmlFor="nombre">Nombre del Paciente</label>
                </div>
                <div className="input-field">
                    <input type="date" id="fecha" required />
                    <label htmlFor="fecha">Fecha</label>
                </div>
                <div className="input-field">
                    <input type="time" id="hora" required />
                    <label htmlFor="hora">Hora</label>
                </div>
                <div className="input-field">
                    <input type="text" id="hora" required />
                    <label htmlFor="hora">Notas</label>
                </div>
                <div className="right-align">
                    <Link to="/PatientView" className="blue-text left-align" style={{ marginRight: '20px' }}>
                        Volver a pagina principal
                    </Link>
                    <button type="submit" className="btn">Agendar Cita</button>
                </div>
            </form>
        </div>
    );
};

export default agendarcita;
