import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import M from 'materialize-css';
import logo from './Images/Logo_v2-removebg.png';
import Footer from './Footer';

const Login = () => {
    useEffect(() => {
        M.AutoInit();
    }, []);

    const [nombre, setNombre] = useState('');
    const [id, setId] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre, id: parseInt(id) })
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                navigate('/PatientView');
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            setError("Error en el servidor");
        }
    };

    return (
        <div>
            <div className="container">
                <br /><br />
                <div className="card z-depth-3">
                    <div className="card-content">
                        <div className="center-align">
                            <img src={logo} alt="Logo ESCOMed" style={{ width: '150px', height: 'auto' }} />
                        </div>
                        <h4 className="card-title">Iniciar Sesión</h4>
                        <form onSubmit={handleLogin}>
                            <div className="input-field">
                                <input type="text" id="username" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                                <label htmlFor="username">Usuario</label>
                            </div>
                            <div className="input-field">
                                <input type="number" id="id" value={id} onChange={(e) => setId(e.target.value)} required />
                                <label htmlFor="id">ID</label>
                            </div>
                            {error && <p className="red-text">{error}</p>}
                            <div className="input-field right-align">
                                <div className="flex-container">
                                    <Link to="/recover-password" className="blue-text left-align" style={{ marginRight: '20px' }}>
                                        ¿Olvidaste tu contraseña?
                                    </Link>
                                    <button type="submit" className="btn waves-effect waves-light">
                                        Iniciar Sesión
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
