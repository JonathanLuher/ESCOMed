import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './login';
import RecoverPassword from './RecoverPassword';
import Register from './Register';
import PatientView from './PatientView';
import Navbar from './Navbar';
import PatientNavbar from './PatientNavBar';
import Agendarcita from './Agendarcita';
import ProximaCita from './ProximaCita'; 
import HistorialClinico from './HistorialClinico';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<><Navbar /><Home /></>} />
                    <Route path="/login" element={<><Navbar /><Login /></>} />
                    <Route path="/recover-password" element={<><Navbar /><RecoverPassword /></>} />
                    <Route path="/register" element={<><Navbar /><Register /></>} />
                    <Route path="/PatientView" element={<><PatientNavbar /><PatientView /></>} />
                    <Route path="/agendarcita" element={<><PatientNavbar /><Agendarcita /></>} />
                    <Route path="/proxima-cita" element={<><PatientNavbar /><ProximaCita /></>} /> {/* Ruta para la próxima cita */}
                    <Route path="/historialclinico" element={<><PatientNavbar /><HistorialClinico /></>} /> {/* Nueva ruta */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
