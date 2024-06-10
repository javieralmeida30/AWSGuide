import React from 'react';
import './Contact.css';
import javierImage from '../assets/profile-picture.jpg'; // Importa tu imagen aquí
import linkedinIcon from '../assets/linkedin-icon.png'; // Importa el icono de LinkedIn aquí
import githubIcon from '../assets/github-icon.png'; // Importa el icono de GitHub aquí

function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <div className="intro">
                    <img src={javierImage} alt="Javier Almeida" />
                    <div className="text">
                        <h2>Javier Almeida</h2>
                        <p>
                            ¡Hola! Soy un apasionado de la tecnología y un profesional en constante aprendizaje. 
                            Como AWS Solutions Architect Associate Graduate, Cloud Practitioner, y graduado del bootcamp AWS re/Start, 
                            mi enfoque principal es trabajar con tecnologías DevOps y AWS.
                        </p>
                        <p>
                            Creé este sitio web para compartir mi conocimiento y experiencias con AWS, y para ayudar a otros en su viaje hacia la certificación y la competencia en AWS.
                        </p>
                    </div>
                </div>
                <div className="contact-info">
                    <h3>Contacto</h3>
                    <p>Si te fue util el sitio, ¡no dudes en conectar conmigo a través de LinkedIn o GitHub!</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/javieralmeida30" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/javieralmeida30" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
