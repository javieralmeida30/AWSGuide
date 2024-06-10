import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './Home.css';
import cloudPractitionerLogo from '../assets/cloud-practitioner-logo.png';
import saaLogo from '../assets/saa-logo.png';

function Home() {
    return (
      <div>
        <Header />
        <div className="home-content">
          <div className="intro">
            <div className="intro-text">
              <h2>¡Hola! Soy Javier Almeida</h2>
              <p>
                Soy graduado del bootcamp de AWS re/Start, cuento con las
                certificaciones de AWS Solutions Architect Associate y AWS Cloud
                Practitioner. Trabajo como administrador de sistemas y utilizo
                AWS en mi día a día. Mi pasión por la nube y la tecnología me ha
                llevado a crear este sitio, con el objetivo de ayudar a
                aspirantes a AWS y estudiantes del bootcamp AWS re/Start a
                alcanzar sus metas, especialmente por la escasa información que
                existe en español.
              </p>
              <p>
                Si encuentras útil este sitio, no dudes en conectar conmigo en
                la sección de contacto. ¡Estoy aquí para ayudar!
              </p>
            </div>
          </div>
          <h2>Sobre Esta Guía</h2>
          <p>
            Esta guía está diseñada para ayudarte a prepararte para los exámenes
            de AWS Cloud Practitioner y AWS Solutions Architect Associate. Usa
            la barra de navegación para explorar diferentes secciones incluyendo
            documentación, exámenes interactivos y consejos.
          </p>
          <div className="section-buttons">
            <Link to="/Documentación" className="button">
              <h3>Documentación</h3>
              <p>
                Encuentra información detallada sobre los servicios de AWS
                necesarios para los exámenes.
              </p>
            </Link>
            <Link to="/exams" className="button">
              <h3>Exámenes de Práctica</h3>
              <p>Pon a prueba tus conocimientos con preguntas interactivas.</p>
            </Link>
            <Link to="/tips" className="button">
              <h3>Trucos y Consejos</h3>
              <p>
                Obtén tips y consejos para aprobar los exámenes y asociar
                términos a servicios de AWS.
              </p>
            </Link>
            <Link to="/proyectos" className="button">
              <h3>Ideas de Proyectos</h3>
              <p>Inspírate con ideas de proyectos para tus portafolios.</p>
            </Link>
          </div>
          <div className="logos">
            <img
              src={cloudPractitionerLogo}
              alt="AWS Cloud Practitioner Logo"
            />
            <img src={saaLogo} alt="AWS Solutions Architect Associate Logo" />
          </div>
        </div>
      </div>
    );
}

export default Home;
