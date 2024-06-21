import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import javierImage from '../assets/profile-picture.jpeg'; 
import linkedinIcon from '../assets/linkedin-icon.png'; 
import githubIcon from '../assets/github-icon.png'; 

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        emailjs.send('service_z0iwh5e', 'template_y0vk2th', templateParams, '2gblVkwFy0E1OWjSM')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitted(true);
            }, (err) => {
                console.log('FAILED...', err);
            });
    };

    return (
        <section id="contact">
            <div className="container">
                <div className="intro-contact">
                    <div className="intro">
                        <img src={javierImage} alt="Javier Almeida" />
                        <div className="text">
                            <h2>Contacto</h2>
                            <p>
                                Estoy encantado de que quieras ponerte en contacto. Ya sea que tengas alguna pregunta, comentario o simplemente quieras conectar, aquí estoy para ayudarte.
                            </p>
                            <div className="social-icons centered">
                                <a href="https://www.linkedin.com/in/javieralmeida30" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedinIcon} alt="LinkedIn" />
                                </a>
                                <a href="https://github.com/javieralmeida30" target="_blank" rel="noopener noreferrer">
                                    <img src={githubIcon} alt="GitHub" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-info">
                        <h3>Envíame un mensaje</h3>
                        {submitted ? (
                            <p>Gracias por tu mensaje. Me pondré en contacto contigo pronto.</p>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Nombre:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Correo Electrónico:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Mensaje:</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit">Enviar</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
