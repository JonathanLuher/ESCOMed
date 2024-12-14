// ProximaCita.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import 'materialize-css/dist/css/materialize.min.css'; // Importa Materialize
import Footer from './Footer';

function ProximaCita() {
    const navigate = useNavigate(); // Hook para la navegación

    // Datos simulados de ejemplo; estos pueden reemplazarse más adelante con datos reales de una API o de un contexto de la aplicación
    const cita = {
        doctor: 'Dr. Juan Pérez',
        Cédula_profesional: '02123331',
        fecha: '2024-11-10', // Ejemplo de fecha
        hora: '10:30 AM',
        notas: 'Seguimiento a infección en vías respiratorias'
    };

    return (
        <div>
            <div className="container">
                <h2>Próxima Cita Médica</h2>
                <p>A continuación se muestran los detalles de tu próxima cita en el servicio médico de la escuela:</p>
                <table className="striped centered" style={{ marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th>Campo</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Doctor</td>
                            <td>{cita.doctor}</td>
                        </tr>
                        <tr>
                            <td>Cédula profesional</td>
                            <td>{cita.Cédula_profesional}</td>
                        </tr>
                        <tr>
                            <td>Fecha</td>
                            <td>{cita.fecha}</td>
                        </tr>
                        <tr>
                            <td>Hora</td>
                            <td>{cita.hora}</td>
                        </tr>
                        <tr>
                            <td>Notas</td>
                            <td>{cita.notas}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="input-field right-align">
                    <button 
                        onClick={() => navigate('/PatientView')} 
                        className="btn waves-effect waves-light" 
                        style={{ marginTop: '20px' }}
                    >
                        Volver
                    </button>
                </div>
                <br/>
            </div>
            <Footer/>
        </div>
    );
}

export default ProximaCita;
