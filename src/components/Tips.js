import React from 'react';
import './Tips.css';

const serviceAssociations = [
    { icon: '📦', term: 'Base de datos NoSQL', service: 'DynamoDB - Ideal para aplicaciones móviles y web con alta demanda de lectura y escritura.' },
    { icon: '🏢', term: 'Almacenamiento de OBJETOS', service: 'Amazon S3 - Almacenamiento de archivos y backups, incluyendo versiones y control de acceso.' },
    { icon: '💻', term: 'Computación bajo demanda (ON DEMAND)', service: 'Amazon EC2 - Ejecución de aplicaciones empresariales y servidores virtuales.' },
    { icon: '🌐', term: 'Entrega de contenido (Content delivery)', service: 'Amazon CloudFront - Distribución rápida de contenido globalmente, ideal para sitios web y streaming.' },
    { icon: '🔍', term: 'Monitorización y logs', service: 'Amazon CloudWatch - Monitoreo de recursos de AWS, logs y métricas personalizadas.' },
    { icon: '🔐', term: 'Control de acceso, gestión de usuarios', service: 'AWS IAM - Gestión de usuarios y permisos para acceder a recursos de AWS.' },
    { icon: '🗄️', term: 'Base de datos relacional', service: 'Amazon RDS - Bases de datos gestionadas como MySQL, PostgreSQL y SQL Server.' },
    { icon: '📊', term: 'Análisis de datos, graficar los datos', service: 'Amazon QuickSight - Visualización de datos y creación de dashboards interactivos.' },
    { icon: '🔄', term: 'CICD entrega continua, despliegue continuo', service: 'AWS CodePipeline - Automatización de flujos de trabajo de integración y entrega continua.' },
    { icon: '☁️', term: 'Almacenamiento en bloque', service: 'Amazon EBS - Volúmenes de almacenamiento persistente para EC2, con snapshots para backup.' },
    { icon: '🛡️', term: 'Protección contra ataques de DDoS', service: 'AWS Shield - Protección avanzada contra ataques DDoS.' },
    { icon: '🔍', term: 'Inspección de seguridad', service: 'Amazon Inspector - Análisis automatizado de vulnerabilidades en aplicaciones.' },
    { icon: '📥', term: 'Mensajería asincrónica, envio en colas', service: 'Amazon SQS - Colas de mensajes para desacoplar y escalar microservicios.' },
    { icon: '🗣️', term: 'Conversión de texto a voz', service: 'Amazon Polly - Generación de voz realista a partir de texto.' },
    { icon: '📧', term: 'Correo electrónico', service: 'Amazon SES - Envío y recepción de correos electrónicos a escala.' },
    { icon: '📡', term: 'Conectividad VPN, red en la nube', service: 'AWS VPN - Conexiones seguras entre centros de datos on-premise y AWS.' },
    { icon: '🚀', term: 'Despliegue de aplicaciones automaticamente', service: 'AWS Elastic Beanstalk - Implementación y gestión automática de aplicaciones.' },
    { icon: '📦', term: 'Orquestación de contenedores, docker', service: 'Amazon ECS - Gestión de contenedores Docker a escala.' },
    { icon: '🏗️', term: 'Infraestructura como código', service: 'AWS CloudFormation - Modelado y provisión de recursos de AWS mediante plantillas.' },
    { icon: '🕸️', term: 'DNS y enrutamiento', service: 'Amazon Route 53 - Gestión de nombres de dominio y balanceo de carga.' },
    { icon: '🛠️', term: 'Gestión de configuración, quien hizo tal cosa', service: 'AWS Config - Seguimiento de cambios y cumplimiento en la configuración de recursos.' },
    { icon: '🔒', term: 'Gestión de claves de seguridad', service: 'AWS KMS - Creación y control de claves de cifrado para datos en AWS.' },
    { icon: '🗃️', term: 'Archivado de datos', service: 'Amazon Glacier - Almacenamiento de archivos de bajo costo para archivos y backups a largo plazo.' },
    { icon: '📈', term: 'Análisis en tiempo real', service: 'Amazon Kinesis - Ingesta y análisis de grandes flujos de datos en tiempo real.' },
    { icon: '💡', term: 'Machine Learning', service: 'Amazon SageMaker - Construcción, entrenamiento y despliegue de modelos de machine learning.' },
    { icon: '📂', term: 'Sistema de archivos compartido en EC2', service: 'Amazon EFS - Sistema de archivos elástico para múltiples instancias EC2.' },
    { icon: '💾', term: 'Cache en memoria', service: 'Amazon ElastiCache - Implementación de Redis o Memcached para mejorar el rendimiento de aplicaciones.' },
    { icon: '🔍', term: 'Búsqueda y análisis', service: 'Amazon Elasticsearch Service - Búsqueda y análisis de grandes volúmenes de datos.' },
    { icon: '🛡️', term: 'Gestión de eventos, programar eventos', service: 'Amazon EventBridge - Enrutamiento de eventos desde tus aplicaciones y servicios de AWS.' },
    { icon: '🛠️', term: 'Automatización de operaciones', service: 'AWS Systems Manager - Gestión centralizada de infraestructura y automatización de tareas.' },
    { icon: '🌩️', term: 'Funciones sin servidor, escribir codigo sin servidor (SERVERLESS)', service: 'AWS Lambda - Ejecución de código en respuesta a eventos sin gestionar servidores.' },
    { icon: '🗂️', term: 'Integración y Transformación de Datos:', service: 'AWS Glue - Preparación y carga de datos para análisis.' },
    { icon: '📊', term: 'Lago de datos', service: 'AWS Lake Formation - Configuración rápida de un lago de datos seguro.' },
    { icon: '📂', term: 'Gestión de secretos', service: 'AWS Secrets Manager - Almacenamiento y gestión de credenciales y otros secretos.' },
    { icon: '🔒', term: 'Cifrado y seguridad', service: 'AWS CloudHSM - Hardware Security Modules (HSM) para el cifrado de datos.' },
    { icon: '📝', term: 'Mensajería y cola para aplicaciones MQ', service: 'Amazon MQ - Broker de mensajes para Apache ActiveMQ y RabbitMQ.' },
    { icon: '🔗', term: 'Puertas de enlace (API)', service: 'Amazon API Gateway - Creación, despliegue y gestión de APIs.' },
    { icon: '📂', term: 'Almacenamiento de archivos para Linux o Windows (FSx)', service: 'Amazon FSx - Servicios de almacenamiento de archivos, incluyendo FSx for Windows File Server y FSx for Lustre.' },
    { icon: '🚀', term: 'Despliegue continuo', service: 'AWS CodeDeploy - Automatización de despliegue de aplicaciones a cualquier instancia.' },
    { icon: '🔄', term: 'Construcción continua', service: 'AWS CodeBuild - Servicio de construcción continua totalmente administrado.' },
    { icon: '💬', term: 'Interacción conversacional', service: 'Amazon Lex - Construcción de interfaces de conversación en cualquier aplicación.' },
    { icon: '📬', term: 'Servicio de notificaciones', service: 'Amazon SNS - Servicio de notificaciones para enviar mensajes a usuarios o sistemas.' },
    { icon: '🛠️', term: 'Gestión de infraestructura', service: 'AWS OpsWorks - Herramientas de gestión de configuración para Chef y Puppet.' },
    { icon: '🗂️', term: 'Puerta de enlace de almacenamiento', service: 'AWS Storage Gateway - Conexión de aplicaciones on-premises a almacenamiento en la nube.' },
    { icon: '🧠', term: 'Reconocimiento de imágenes', service: 'Amazon Rekognition - Análisis de imágenes y videos para reconocimiento facial y de objetos.' }
];

const generalTips = [
    { tip: 'Entender el modelo de responsabilidad compartida' },
    { tip: 'Practicar con la capa gratuita de AWS'},
    { tip: 'Entender el pilar del AWS well-architected framework'},
    { tip: 'Leer la documentación oficial de AWS'},
    { tip: 'Realizar los laboratorios y tutoriales de AWS'},
    { tip: 'Utilizar preguntas de práctica y exámenes simulados'},
    { tip: 'Asistir a webinars y cursos de AWS'},
    { tip: 'Seguir las mejores prácticas de seguridad de AWS'}
];

function Tips() {
    return (
        <section id="tips">
            <h2>Asociación de Servicios de AWS Cloud Practitioner</h2>
            <div className="tips-content">
                {serviceAssociations.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="icon">{item.icon}</div>
                        <div className="info">
                            <span>{item.term}:</span>
                            <strong>{item.service}</strong>
                        </div>
                    </div>
                ))}
            </div>
            <br></br>
            <div className="tips-content">
                <div className="card">
                    <h3>Consejos Generales</h3>
                    <ul>
                        {generalTips.map((item, index) => (
                            <li key={index}>
                                <strong>{item.tip}</strong> {item.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Tips;