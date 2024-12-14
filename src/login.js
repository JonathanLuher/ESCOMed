// src/Login.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import M from 'materialize-css';
import logo from './Images/Logo_v2-removebg.png';
import Footer from './Footer';

const Login = () => {
    useEffect(() => {
        M.AutoInit(); 
    }, []);

    const navigate = useNavigate();

    return (
        <div>
            <div className="container">
                <br /><br />
                <div className="card z-depth-3"> {/* Agregamos la tarjeta con sombra */}
                    <div className="card-content">
                        <div className="center-align">
                            <img src={logo} alt="Logo ESCOMed" style={{ width: '150px', height: 'auto' }} />
                        </div>
                        <h4 className="card-title">Iniciar Sesión</h4>
                        <form>
                            <div className="input-field">
                                <input type="text" id="username" required />
                                <label htmlFor="username">Usuario</label>
                            </div>
                            <div className="input-field">
                                <input type="password" id="password" required />
                                <label htmlFor="password">Contraseña</label>
                            </div>
                            <div className="input-field right-align">
                                <div className="flex-container">
                                    <Link to="/recover-password" className="blue-text left-align" style={{ marginRight: '20px' }}>
                                        ¿Olvidaste tu contraseña?
                                    </Link>
                                    <button onClick={() => navigate('/PatientView')} className="btn waves-effect waves-light">
                                        Iniciar Sesión
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;
