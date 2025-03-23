import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="footer"
    >
      <div className="container">
        <div className="grid">
          <div>
            <h3>ESCOMed</h3>
            <p>Tu salud, nuestra prioridad. Sistema Web Médico para la comunidad del IPN.</p>
            <div className="social-icons">
              <a href="#"><Facebook className="icon" size={20} /></a>
              <a href="#"><Instagram className="icon" size={20} /></a>
              <a href="#"><Twitter className="icon" size={20} /></a>
            </div>
          </div>

          <div>
            <h3>Enlaces rápidos</h3>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/about">Acerca de nosotros</a></li>
              <li><a href="/login">Iniciar sesión</a></li>
              <li><a href="/register">Registrarse</a></li>
            </ul>
          </div>

          <div>
            <h3>Servicios</h3>
            <ul>
              <li><a href="#">Consultas médicas</a></li>
              <li><a href="#">Expedientes electrónicos</a></li>
              <li><a href="#">Seguimiento de tratamientos</a></li>
              <li><a href="#">Programas de prevención</a></li>
            </ul>
          </div>

          <div>
            <h3>Contacto</h3>
            <ul>
              <li className="flex-row">
                <MapPin className="icon" size={20} />
                <span>Av. Juan de Dios Bátiz S/N, Nueva Industrial Vallejo, 07738 Ciudad de México, CDMX</span>
              </li>
              <li className="flex-row">
                <Phone className="icon" size={20} />
                <span>(55) 5729-6000</span>
              </li>
              <li className="flex-row">
                <Mail className="icon" size={20} />
                <span>contacto@escomed.ipn.mx</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom">
          <p>© {new Date().getFullYear()} ESCOMed. Todos los derechos reservados.</p>
          <div className="social-icons">
            <a href="#">Términos y Condiciones</a>
            <a href="#">Política de Privacidad</a>
            <a href="#">Ayuda</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
