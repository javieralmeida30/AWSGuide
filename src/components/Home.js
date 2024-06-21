import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import cloudPractitionerLogo from '../assets/cloud-practitioner-logo.png';
import saaLogo from '../assets/saa-logo.png';
import Navbar from './Navbar';

function Home() {
    return (
      <div>
        <div className="header">
          <h1>¡Bienvenidos Futuros AWS Certified Cloud Practitioner!</h1>
          <p>Esta es su solución para preparar el examen de AWS Cloud Practitioner.</p>
        </div>
        <div className="home-container">
          <div className="intro-section">
            <div className="intro-text">
              <h1>Bienvenido a la Guía de AWS</h1>
              <p>
                Soy Javier Almeida, apasionado de la nube y la tecnología, graduado del bootcamp AWS re/start, cuento con las certificaciones de AWS Solutions Architect Associate y Cloud Practitioner.
                Aquí encontrarás recursos esenciales para prepararte para el
                examen de AWS Cloud Practitioner y proximamente de Solutions Architect Associate.
              </p>
              <p>
                Explora la documentación, realiza exámenes de práctica y descubre
                consejos útiles para dominar AWS.
              </p>
            </div>
            <div className="intro-image">
              <img src={cloudPractitionerLogo} alt="AWS Cloud Practitioner Logo" />
              <img src={saaLogo} alt="AWS Solutions Architect Associate Logo" />
            </div>
          </div>
          <div className="main-content">
            <h2>Explora Nuestras Secciones</h2>
            <div className="button-group">
              <Link to="/Documentación" className="home-button">
                <h3>Documentación</h3>
                <p>Información detallada sobre los servicios de AWS.</p>
              </Link>
              <Link to="/exams" className="home-button">
                <h3>Exámenes de Práctica</h3>
                <p>Preguntas interactivas para evaluar tus conocimientos.</p>
              </Link>
              <Link to="/tips" className="home-button">
                <h3>Trucos y Consejos</h3>
                <p>Consejos para aprobar los exámenes y asociar servicios.</p>
              </Link>
              <Link to="/proyectos" className="home-button">
                <h3>Ideas de Proyectos</h3>
                <p>Proyectos interesantes para tu portafolio.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;
