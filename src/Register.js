// src/Register.js
import React, { useEffect } from 'react';
import M from 'materialize-css';
import logo from './Images/Logo_v2-removebg.png';
import Footer from './Footer';

const Register = () => {
    useEffect(() => {
        M.AutoInit(); // Inicializa los componentes de Materialize
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Registro exitoso");
    };

    const handleBoletaChange = (event) => {
        // Permitir solo números
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
    };

    return (
        <div>
            <div className="container">
                <br/>
                <div className="card z-depth-3"> 
                    <div className="card-content">
                        <div className="center-align">
                            <img src={logo} alt="Logo ESCOMed" style={{ width: '150px', height: 'auto' }} />
                        </div>
                        <h4 className="card-title">Registro</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="input-field">
                                <input type="text" id="username" required />
                                <label htmlFor="username">Nombre(s)</label>
                            </div>
                            <div className="input-field">
                                <input type="text" id="ap_pat" required />
                                <label htmlFor="ap_pat">Apellido paterno</label>
                            </div>
                            <div className="input-field">
                                <input type="text" id="ap_mat" required />
                                <label htmlFor="ap_mat">Apellido materno</label>
                            </div>
                            <div className="input-field">
                                <input type="email" id="email" required />
                                <label htmlFor="email">Correo Electrónico</label>
                            </div>
                            <div className="input-field">
                                <input type="password" id="password" required />
                                <label htmlFor="password">Contraseña</label>
                            </div>
                            <div className="input-field">
                                <input type="password" id="confirm_password" required />
                                <label htmlFor="confirm_password">Confirmar contraseña</label>
                            </div>
                            <div className="input-field">
                                <input 
                                    type="text" 
                                    id="boleta" 
                                    required 
                                    onInput={handleBoletaChange} // Llama a la función de validación al ingresar datos
                                />
                                <label htmlFor="boleta">Boleta</label>
                            </div>
                            <div className="input-field right-align">
                                <button type="submit" className="btn blue">Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Register;
