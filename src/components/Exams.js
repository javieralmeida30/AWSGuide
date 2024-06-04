import React, { useState, useEffect, useCallback } from 'react';
import './Exams.css';

function Exams() {
    const examQuestions = {
        "CP1": [
            {
                question: "What is AWS EC2?",
                options: [
                    "A. A storage service",
                    "B. A compute service",
                    "C. A database service",
                    "D. A networking service"
                ],
                answer: "B",
                explanation: "AWS EC2 (Elastic Compute Cloud) es un servicio que proporciona capacidad de cómputo en la nube segura y escalable."
            },
            {
                question: "What is AWS S3?",
                options: [
                    "A. A compute service",
                    "B. A storage service",
                    "C. A database service",
                    "D. A networking service"
                ],
                answer: "B",
                explanation: "AWS S3 (Simple Storage Service) es un servicio de almacenamiento de objetos que ofrece escalabilidad, disponibilidad de datos y seguridad."
            },
            {
                question: "What is AWS RDS?",
                options: [
                    "A. A compute service",
                    "B. A storage service",
                    "C. A database service",
                    "D. A networking service"
                ],
                answer: "C",
                explanation: "AWS RDS (Relational Database Service) es un servicio de base de datos relacional que facilita la configuración, operación y escalado de una base de datos en la nube."
            }
        ],
        "CP2": [
            {
                question: "What is AWS Lambda?",
                options: [
                    "A. A compute service",
                    "B. A storage service",
                    "C. A database service",
                    "D. A networking service"
                ],
                answer: "A",
                explanation: "AWS Lambda es un servicio de cómputo que permite ejecutar código sin aprovisionar ni gestionar servidores."
            },
            {
                question: "What is AWS VPC?",
                options: [
                    "A. A compute service",
                    "B. A storage service",
                    "C. A database service",
                    "D. A networking service"
                ],
                answer: "D",
                explanation: "AWS VPC (Virtual Private Cloud) es un servicio que permite lanzar recursos de AWS en una red virtual que usted define."
            },
            {
                question: "What is AWS CloudFormation?",
                options: [
                    "A. A compute service",
                    "B. Infrastructure as Code (IaC)",
                    "C. A database service",
                    "D. A networking service"
                ],
                answer: "B",
                explanation: "AWS CloudFormation es un servicio que le ayuda a modelar y configurar sus recursos de AWS para que pueda pasar menos tiempo gestionando esos recursos y más tiempo centrado en sus aplicaciones."
            }
        ],
        "SAA": [
            {
                question: "Explain AWS IAM.",
                options: [
                    "A. A storage service",
                    "B. A compute service",
                    "C. Identity and Access Management",
                    "D. A networking service"
                ],
                answer: "C",
                explanation: "AWS IAM (Identity and Access Management) es un servicio que permite gestionar de forma segura el acceso a los servicios y recursos de AWS."
            },
            {
                question: "Describe AWS CloudFront.",
                options: [
                    "A. A compute service",
                    "B. A Content Delivery Network",
                    "C. A database service",
                    "D. A networking service"
                ],
                answer: "B",
                explanation: "AWS CloudFront es una red de entrega de contenido (CDN) que proporciona una distribución rápida de datos, videos, aplicaciones y APIs a clientes en todo el mundo con baja latencia y altas velocidades de transferencia."
            },
            {
                question: "What is AWS Route 53?",
                options: [
                    "A. A compute service",
                    "B. A storage service",
                    "C. A database service",
                    "D. A Domain Name System (DNS) web service"
                ],
                answer: "D",
                explanation: "AWS Route 53 es un servicio de sistema de nombres de dominio (DNS) que ofrece una manera fiable y rentable de direccionar a los usuarios finales a aplicaciones de Internet."
            }
        ]
    };

    const [selectedExam, setSelectedExam] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timer, setTimer] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);
    const [explanations, setExplanations] = useState([]);
    const [isPaused, setIsPaused] = useState(false);

    const startExam = (examType) => {
        const questions = examQuestions[examType].sort(() => 0.5 - Math.random());
        setSelectedExam(questions);
        setCurrentQuestionIndex(0);
        setAnswers({});
        setScore(null);
        setExplanations([]);
        setIsPaused(false);
        startTimer(60 * 60);  // Start timer for 60 minutes
    };

    const startTimer = (duration) => {
        clearInterval(intervalId);  // Clear any existing timer
        setTimer(duration);
        const id = setInterval(() => {
            if (!isPaused) {
                setTimer(duration => duration - 1);
                if (duration <= 0) {
                    clearInterval(id);
                    calculateScore();
                    alert("¡Se acabó el tiempo!");
                }
            }
        }, 1000);
        setIntervalId(id);
    };

    const handleOptionChange = (questionIndex, option) => {
        setAnswers({
            ...answers,
            [questionIndex]: option
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < selectedExam.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            clearInterval(intervalId);
            calculateScore();
        }
    };

    const calculateScore = useCallback(() => {
        let correctAnswers = 0;
        let explanations = [];
        selectedExam.forEach((question, index) => {
            if (answers[index] && answers[index] === question.answer) {
                correctAnswers += 1;
            }
            explanations.push({
                question: question.question,
                explanation: question.explanation,
                correct: answers[index] === question.answer,
                selected: answers[index] || 'No respondida',
                correctAnswer: question.answer
            });
        });
        setScore(correctAnswers);
        setExplanations(explanations);
    }, [selectedExam, answers]);

    const handlePause = () => {
        setIsPaused(!isPaused);
    };

    const handleEndExam = () => {
        clearInterval(intervalId);
        calculateScore();
    };

    useEffect(() => {
        if (timer <= 0) {
            clearInterval(intervalId);
            calculateScore();
        }
    }, [timer, calculateScore]);

    return (
        <section id="exams">
            <h2>Exámenes Interactivos</h2>
            <div className="exam-buttons">
                <button onClick={() => startExam('CP1')}>Comenzar Examen Cloud Practitioner 1</button>
                <button onClick={() => startExam('CP2')}>Comenzar Examen Cloud Practitioner 2</button>
                <button onClick={() => startExam('SAA')}>Comenzar Examen Solutions Architect</button>
            </div>
            {selectedExam.length > 0 && score === null && (
                <div id="examContent">
                    <div className="question">
                        <p>{selectedExam[currentQuestionIndex].question}</p>
                        <ul>
                            {selectedExam[currentQuestionIndex].options.map((option, index) => (
                                <li key={index}>
                                    <input
                                        type="radio"
                                        name={`question-${currentQuestionIndex}`}
                                        value={option}
                                        checked={answers[currentQuestionIndex] === option}
                                        onChange={() => handleOptionChange(currentQuestionIndex, option)}
                                    />
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button onClick={handleNextQuestion}>Siguiente</button>
                </div>
            )}
            {score !== null && (
                <div id="score">
                    <h3>Examen completado</h3>
                    <p>Puntaje: {score} de {selectedExam.length}</p>
                    <div className="explanations">
                        {explanations.map((item, index) => (
                            <div key={index} className={`explanation ${item.correct ? 'correct' : 'incorrect'}`}>
                                <p><strong>{item.question}</strong></p>
                                <p>{item.explanation}</p>
                                <p><strong>Tu respuesta fue: {item.selected}</strong></p>
                                {!item.correct && <p><strong>La respuesta correcta es: {item.correctAnswer}</strong></p>}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {selectedExam.length > 0 && score === null && (
                <div className="exam-controls">
                    <button onClick={handlePause}>{isPaused ? 'Reanudar' : 'Pausar'}</button>
                    <button onClick={handleEndExam}>Terminar Examen</button>
                </div>
            )}
            <div id="timer">
                {`${parseInt(timer / 60, 10)}:${('0' + timer % 60).slice(-2)}`}
            </div>
        </section>
    );
}

export default Exams;
