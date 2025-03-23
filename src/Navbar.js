import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Info, LogIn, UserPlus } from 'lucide-react';
import logo from './Images/Logo_v2-removebg.png';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="navbar-container"
    >
      <div className="navbar-inner">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => navigate('/')}>
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="logo-text">ESCOMed</span>
        </div>

        {/* Navegación principal */}
        <nav className="navbar-links">
          <NavLink
            icon={<Home size={18} />}
            label="Inicio"
            isActive={isActive('/')}
            onClick={() => navigate('/')}
          />
          <NavLink
            icon={<Info size={18} />}
            label="Acerca de"
            isActive={isActive('/about')}
            onClick={() => navigate('/about')}
          />
        </nav>

        {/* Botones de autenticación */}
        <div className="navbar-auth">
          <button
            onClick={() => navigate('/login')}
            className={`auth-btn ${isActive('/login') ? 'active' : ''}`}
          >
            <LogIn size={18} className="icon" />
            Iniciar Sesión
          </button>
          <button
            onClick={() => navigate('/register')}
            className={`auth-btn ${isActive('/register') ? 'active' : ''}`}
          >
            <UserPlus size={18} className="icon" />
            Registrarse
          </button>
        </div>
      </div>
    </motion.header>
  );
};

const NavLink = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`nav-link ${isActive ? 'active' : ''}`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default Navbar;
