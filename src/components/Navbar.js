import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Documentación">Documentación</Link>
          </li>
          <li>
            <Link to="/exams">Examenes de prueba</Link>
          </li>
          <li>
            <Link to="/tips">Consejos y Asociaciones</Link>
          </li>
          <li>
            <Link to="/proyectos">Proyectos</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;
