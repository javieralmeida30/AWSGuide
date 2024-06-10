import React from 'react';
import './Proyectos.css';
import ec2Image from '../assets/ec2.png';
import s3Image from '../assets/S3.png';
import elasticBeanstalkImage from '../assets/beanstalk.png';
import rekognitionImage from '../assets/rekognition.png';

function Proyectos() {
    return (
        <section id="proyectos">
            <div className="project">
                <img src={ec2Image} alt="Programar una instancia EC2 para que se encienda y apague en un horario especifico" />
                <div className="project-info">
                    <h3>Programar una instancia EC2</h3>
                    <p>Utiliza Amazon EventBridge Scheduler para programar el encendido y apagado de una instancia EC2 en un horario específico.</p>
                </div>
            </div>
            <div className="project">
                <img src={s3Image} alt="Lanzar un sitio web estático en S3" />
                <div className="project-info">
                    <h3>Lanzar un sitio web estático en S3</h3>
                    <p>Aprende cómo lanzar un sitio web estático utilizando Amazon S3. Es una excelente manera de desplegar tu propio sitio web.</p>
                </div>
            </div>
            <div className="project">
                <img src={elasticBeanstalkImage} alt="Lanzar el juego del dino de Google con Elastic Beanstalk y Docker" />
                <div className="project-info">
                    <h3>Lanzar el juego del dino de Google</h3>
                    <p>Despliega el famoso juego del dinosaurio de Google utilizando AWS Elastic Beanstalk y Docker. Es un proyecto divertido para aprender sobre despliegue de aplicaciones web.</p>
                </div>
            </div>
            <div className="project">
                <img src={rekognitionImage} alt="Object Rekognition con Python y Rekognition" />
                <div className="project-info">
                    <h3>Object Rekognition con Python</h3>
                    <p>Explora las capacidades de detección de objetos de Amazon Rekognition utilizando Python. Es un proyecto interesante para trabajar con visión por computadora en la nube.</p>
                </div>
            </div>
        </section>
    );
}

export default Proyectos;
