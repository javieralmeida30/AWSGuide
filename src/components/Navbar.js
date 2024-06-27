import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="nav-container">
                <div className="nav-toggle" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/" onClick={toggleMenu}>Inicio</Link>
                        </li>
                        <li>
                            <Link to="/Documentación" onClick={toggleMenu}>Documentación</Link>
                        </li>
                        <li>
                            <Link to="/exams" onClick={toggleMenu}>Exámenes de prueba</Link>
                        </li>
                        <li>
                            <Link to="/tips" onClick={toggleMenu}>Consejos y Asociaciones</Link>
                        </li>
                        <li>
                            <Link to="/proyectos" onClick={toggleMenu}>Proyectos</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={toggleMenu}>Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
