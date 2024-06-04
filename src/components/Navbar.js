import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/documentation">Documentation</Link></li>
                <li><Link to="/exams">Interactive Exams</Link></li>
                <li><Link to="/tips">Tips and Associations</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/proyectos">Proyectos</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
