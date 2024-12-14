// src/RecoverPassword.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import logo from './Images/Logo_v2-removebg.png';

const RecoverPassword = () => {
    useEffect(() => {
        // Inicializar Materialize CSS (si es necesario)
        M.AutoInit();
    }, []);

    return (
        <div className='container'>
            <br></br>
            <div className='card z-depth-3'>
            <div className='card-content'>
                <div className="center-align">
                    <img src={logo} alt="Logo ESCOMed" style={{ width: '150px', height: 'auto' }} />
                </div>
                <h4>Recuperar Contraseña</h4>
                <form>
                    <div className="input-field">
                        <input type="email" id="email" required />
                        <label htmlFor="email">Correo Electrónico</label>
                    </div>
                    <div className="input-field right-align">
                        <Link to="/login" className="blue-text left-align" style={{ marginRight: '20px' }}>
                            Volver a inicio de sesion
                        </Link>
                        <button type="submit" className="btn blue waves-effect waves-light">
                            Enviar códgio
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default RecoverPassword;
