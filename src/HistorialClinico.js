// HistorialClinico.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook de navegación
import 'materialize-css/dist/css/materialize.min.css'; // Importa Materialize
import Footer from './Footer';

function HistorialClinico() {
    const navigate = useNavigate(); // Hook para la navegación

    // Datos simulados de ejemplo; estos pueden reemplazarse más adelante con datos reales de una API o de un contexto de la aplicación
    const historial = [
        {
            fecha: '2023-10-15',
            consulta: 'Consulta general',
            diagnostico: 'Infección leve en vías respiratorias',
            tratamiento: 'Antibióticos y descanso',
        },
        {
            fecha: '2023-08-30',
            consulta: 'Chequeo anual',
            diagnostico: 'Salud general adecuada',
            tratamiento: 'Ninguno',
        },
        {
            fecha: '2023-05-10',
            consulta: 'Consulta dermatológica',
            diagnostico: 'Dermatitis leve',
            tratamiento: 'Crema tópica',
        },
    ];

    return (
        <div>
            <div className='container'>
                <div style={{ padding: '20px' }}>
                    <h2>Historial Clínico</h2>
                    <p>A continuación se muestra el historial clínico detallado del paciente:</p>
                    <table className="striped centered" style={{ marginTop: '20px' }}>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Consulta</th>
                                <th>Diagnóstico</th>
                                <th>Tratamiento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historial.map((registro, index) => (
                                <tr key={index}>
                                    <td>{registro.fecha}</td>
                                    <td>{registro.consulta}</td>
                                    <td>{registro.diagnostico}</td>
                                    <td>{registro.tratamiento}</td>
                                </tr>
                            ))}
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
            </div>
            <Footer/>
        </div>
    );
}

export default HistorialClinico;
