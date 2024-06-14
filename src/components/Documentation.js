import React, { useState } from 'react';
import './Documentation.css';

// Importar las imágenes locales
import ec2Image from '../assets/ec2.png';
import mlearning from '../assets/mlearning.jpeg';
import spot from '../assets/spot-savings-chart.png';
import api from '../assets/api.png';
import migration from '../assets/migration.svg';
import AWSCAF from '../assets/AWS Cloud Adoption Framework (AWS CAF).jpeg'
import compliance from '../assets/compliance.jpeg'
import planes from '../assets/planes.jpeg'
import AWSPricingCalculator from '../assets/AWS Pricing Calculator.png'
import repost from '../assets/repost.png'
import sdk from '../assets/sdk.png'
import waframework from '../assets/waframework.png'
import seguridad from '../assets/seguridad.png'
import arquitecto from '../assets/arquitecto.png'
import pass from '../assets/pass.png'
import infraglobal from '../assets/infraglobal.jpg'
import nosqlsql from '../assets/nosqlsql.avif'

function Documentation() {
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [expandedSubCategory, setExpandedSubCategory] = useState(null);
    const [serviceContent, setServiceContent] = useState({ description: '', imageUrl: '' });

    const levels = {
        CP: {
            categories: {
                "Tecnologías y Conceptos": {
                    "General": [
                        "APIs",
                        "Beneficios de migrar a la nube de AWS",
                        "AWS Cloud Adoption Framework (AWS CAF)",
                        "AWS Compliance",
                        "AWS Pricing Calculator",
                        "AWS re:Post",
                        "AWS SDKs",
                        "AWS Support Center",
                        "Planes de soporte de AWS",
                        "AWS Well-Architected Framework"
                    ],
                    "Compute": [
                        "Tipos de instancias de Amazon EC2 (por ejemplo, Reserved, On-Demand, Spot)"
                    ],
                    "Gestión y Gobernanza": [
                        "Tipos de modelos de servicio: PaaS, IaaS, SaaS, FaaS, BaaS"
                    ],
                    "Machine Learning": [
                        "Machine learning"
                    ],
                    "Seguridad": [
                        "Modelo de responsabilidad compartida de AWS",
                        "Arquitectos de soluciones de AWS"
                    ],
                    "Infraestructura Global": [
                        "Infraestructura global de AWS (por ejemplo, Regiones de AWS, Zonas de disponibilidad)"
                    ],
                    "Bases de Datos": [
                        "Bases de datos, que es NoSQL y SQL"
                    ]
                },
                "Servicios de AWS": {
                    "Analytics": [
                        "Amazon Athena",
                        "AWS Data Exchange",
                        "Amazon EMR",
                        "AWS Glue",
                        "Amazon Kinesis",
                        "Amazon MSK",
                        "Amazon OpenSearch Service",
                        "Amazon QuickSight",
                        "Amazon Redshift"
                    ],
                    "Application Integration": [
                        "Amazon EventBridge",
                        "Amazon SNS",
                        "Amazon SQS",
                        "AWS Step Functions"
                    ],
                    "Business Applications": [
                        "Amazon Connect",
                        "Amazon SES"
                    ],
                    "Cloud Financial Management": [
                        "AWS Billing Conductor",
                        "AWS Budgets",
                        "AWS Cost and Usage Report",
                        "AWS Cost Explorer",
                        "AWS Marketplace"
                    ],
                    "Compute": [
                        "AWS Batch",
                        "Amazon EC2",
                        "AWS Elastic Beanstalk",
                        "Amazon Lightsail",
                        "AWS Local Zones",
                        "AWS Outposts",
                        "AWS Wavelength"
                    ],
                    "Containers": [
                        "Amazon ECR",
                        "Amazon ECS",
                        "Amazon EKS"
                    ],
                    "Customer Engagement": [
                        "AWS Activate for Startups",
                        "AWS IQ",
                        "AWS Managed Services (AMS)",
                        "AWS Support"
                    ],
                    "Database": [
                        "Amazon Aurora",
                        "Amazon DynamoDB",
                        "Amazon MemoryDB for Redis",
                        "Amazon Neptune",
                        "Amazon RDS"
                    ],
                    "Developer Tools": [
                        "AWS AppConfig",
                        "AWS CLI",
                        "AWS Cloud9",
                        "AWS CloudShell",
                        "AWS CodeArtifact",
                        "AWS CodeBuild",
                        "AWS CodeCommit",
                        "AWS CodeDeploy",
                        "AWS CodePipeline",
                        "AWS CodeStar",
                        "AWS X-Ray"
                    ],
                    "End User Computing": [
                        "Amazon AppStream 2.0",
                        "Amazon WorkSpaces",
                        "Amazon WorkSpaces Web"
                    ],
                    "Frontend Web and Mobile": [
                        "AWS Amplify",
                        "AWS AppSync",
                        "AWS Device Farm"
                    ],
                    "IoT": [
                        "AWS IoT Core",
                        "AWS IoT Greengrass"
                    ],
                    "Machine Learning": [
                        "Amazon Comprehend",
                        "Amazon Kendra",
                        "Amazon Lex",
                        "Amazon Polly",
                        "Amazon Rekognition",
                        "Amazon SageMaker",
                        "Amazon Textract",
                        "Amazon Transcribe",
                        "Amazon Translate"
                    ],
                    "Management and Governance": [
                        "AWS Auto Scaling",
                        "AWS CloudFormation",
                        "AWS CloudTrail",
                        "Amazon CloudWatch",
                        "AWS Compute Optimizer",
                        "AWS Config",
                        "AWS Control Tower",
                        "AWS Health Dashboard",
                        "AWS Launch Wizard",
                        "AWS License Manager",
                        "AWS Management Console",
                        "AWS Organizations",
                        "AWS Resource Groups and Tag Editor",
                        "AWS Service Catalog",
                        "AWS Systems Manager",
                        "AWS Trusted Advisor",
                        "AWS Well-Architected Tool"
                    ],
                    "Migration and Transfer": [
                        "AWS Application Discovery Service",
                        "AWS Application Migration Service",
                        "AWS Database Migration Service (AWS DMS)",
                        "AWS Migration Hub",
                        "AWS Schema Conversion Tool (AWS SCT)",
                        "AWS Snow Family",
                        "AWS Transfer Family"
                    ],
                    "Networking and Content Delivery": [
                        "Amazon API Gateway",
                        "Amazon CloudFront",
                        "AWS Direct Connect",
                        "AWS Global Accelerator",
                        "Amazon Route 53",
                        "Amazon VPC",
                        "AWS VPN"
                    ],
                    "Security, Identity, and Compliance": [
                        "AWS Artifact",
                        "AWS Audit Manager",
                        "AWS Certificate Manager (ACM)",
                        "AWS CloudHSM",
                        "Amazon Cognito",
                        "Amazon Detective",
                        "AWS Directory Service",
                        "AWS Firewall Manager",
                        "Amazon GuardDuty",
                        "AWS IAM",
                        "AWS IAM Identity Center (AWS Single Sign-On)",
                        "Amazon Inspector",
                        "AWS Key Management Service (AWS KMS)",
                        "Amazon Macie",
                        "AWS Network Firewall",
                        "AWS Resource Access Manager (AWS RAM)",
                        "AWS Secrets Manager",
                        "AWS Security Hub",
                        "AWS Shield",
                        "AWS WAF"
                    ],
                    "Serverless": [
                        "AWS Fargate",
                        "AWS Lambda"
                    ],
                    "Storage": [
                        "AWS Backup",
                        "Amazon EBS",
                        "Amazon EFS",
                        "AWS Elastic Disaster Recovery",
                        "Amazon FSx",
                        "Amazon S3",
                        "Amazon S3 Glacier",
                        "AWS Storage Gateway"
                    ]
                }
            },
            services: {
                "Tipos de modelos de servicio: PaaS, IaaS, SaaS, FaaS, BaaS": {
                    description: `
                        <ul>
                            <li><strong>Infrastructure as a Service (IaaS):</strong> Proporciona recursos de infraestructura virtualizados a través de internet. Los usuarios pueden aprovisionar, gestionar y escalar servidores, almacenamiento y redes según sea necesario. Ejemplo: Amazon EC2.</li>
                            <li><strong>Platform as a Service (PaaS):</strong> Ofrece una plataforma gestionada que incluye infraestructura, runtime, middleware y herramientas de desarrollo. Permite a los desarrolladores enfocarse en escribir código sin preocuparse por la gestión de la infraestructura subyacente. Ejemplo: AWS Elastic Beanstalk.</li>
                            <li><strong>Software as a Service (SaaS):</strong> Proporciona aplicaciones completas y gestionadas a los usuarios finales a través de internet. No requiere que los usuarios gestionen la infraestructura o el software subyacente. Ejemplo: Amazon WorkSpaces.</li>
                            <li><strong>Function as a Service (FaaS):</strong> Permite a los desarrolladores ejecutar funciones de código en respuesta a eventos sin gestionar servidores. Es ideal para aplicaciones basadas en eventos y microservicios. Ejemplo: AWS Lambda.</li>
                            <li><strong>Backend as a Service (BaaS):</strong> Proporciona servicios backend preconstruidos, como bases de datos y autenticación, que los desarrolladores pueden integrar fácilmente en sus aplicaciones. Ejemplo: AWS Amplify.</li>
                        </ul>
                    `,
                    imageUrl: pass
                },
                "Tipos de instancias de Amazon EC2 (por ejemplo, Reserved, On-Demand, Spot)": {
                    description: "Amazon EC2 ofrece varios tipos de instancias como On-Demand, Reserved y Spot cada uno diseñado para diferentes necesidades. On-Demand permite pagar por capacidad de cómputo por hora o por segundo sin compromisos a largo plazo y es ideal para aplicaciones con cargas de trabajo variables y para desarrollo y prueba de aplicaciones. Reserved ofrece descuentos significativos cuando se compromete a usar una instancia por uno o tres años ideal para aplicaciones estables y predecibles. Spot permite aprovechar la capacidad no utilizada en AWS con descuentos de hasta el 90%, perfecto para aplicaciones que pueden tolerar interrupciones como procesamiento por lotes y análisis de big data.",
                    imageUrl: spot
                },
                "Machine learning": {
                    description: `
                    <p>Machine Learning es una rama de la inteligencia artificial que se enfoca en el desarrollo de algoritmos que permiten a las máquinas aprender y tomar decisiones basadas en datos. En lugar de ser programadas explícitamente para realizar una tarea específica, las máquinas usan patrones y relaciones en los datos para mejorar su desempeño a lo largo del tiempo.</p>
                    <p><strong>Machine Learning en AWS:</strong> Amazon Web Services (AWS) ofrece una amplia gama de servicios y herramientas para facilitar la implementación de proyectos de Machine Learning, ayudando a los desarrolladores y científicos de datos a construir, entrenar y desplegar modelos de aprendizaje automático de manera eficiente.</p>
                    <ul>
                        <li><strong>Amazon SageMaker:</strong> Un servicio completamente administrado que proporciona todas las herramientas necesarias para construir, entrenar y desplegar modelos de Machine Learning a gran escala. Permite a los usuarios trabajar en notebooks Jupyter, gestionar conjuntos de datos, elegir y ajustar algoritmos, entrenar modelos y desplegarlos en producción.</li>
                        <li><strong>Amazon Comprehend:</strong> Un servicio de procesamiento de lenguaje natural (NLP) que utiliza Machine Learning para descubrir información en textos no estructurados. Puede analizar sentimientos, extraer entidades clave y comprender el significado del texto.</li>
                        <li><strong>Amazon Rekognition:</strong> Un servicio que permite agregar análisis de imágenes y videos a las aplicaciones. Utiliza Machine Learning para identificar objetos, personas, texto, escenas y actividades, así como detectar contenido inapropiado.</li>
                        <li><strong>Amazon Polly:</strong> Convierte texto en discurso realista utilizando técnicas avanzadas de aprendizaje profundo para mejorar la naturalidad y fluidez del habla sintetizada.</li>
                        <li><strong>Amazon Lex:</strong> Permite construir interfaces de conversación en aplicaciones usando voz y texto. Lex proporciona tecnologías de aprendizaje profundo de reconocimiento automático de voz (ASR) para convertir la voz en texto y de comprensión del lenguaje natural (NLU) para reconocer la intención del texto.</li>
                    </ul>
                `,
                    imageUrl: mlearning
                },
                "APIs": {
                    description: "Las APIs (Interfaces de Programación de Aplicaciones) permiten la comunicación entre diferentes sistemas de software mediante reglas y definiciones; por ejemplo, en AWS, las APIs se utilizan ampliamente para interactuar con servicios como Amazon S3, donde una solicitud HTTP puede listar los objetos almacenados en un bucket.",
                    imageUrl: api
                },
                "Beneficios de migrar a la nube de AWS": {
                    description: "Migrar a la nube de AWS ofrece numerosos beneficios, incluyendo escalabilidad, flexibilidad, reducción de costos, mayor seguridad, alta disponibilidad, recuperación ante desastres, colaboración mejorada, acceso global, actualizaciones automáticas, y acceso a una amplia gama de servicios innovadores que pueden acelerar la transformación digital; por ejemplo, las organizaciones pueden utilizar Amazon S3 para almacenar y recuperar datos de manera eficiente, Amazon EC2 para ajustar automáticamente la capacidad de cómputo según la demanda, y AWS Lambda para ejecutar código sin gestionar servidores, mejorando así la agilidad, la eficiencia operativa, la capacidad de respuesta al mercado, y la toma de decisiones basada en datos.",
                    imageUrl: migration
                },
                "AWS Cloud Adoption Framework (AWS CAF)": {
                    description: "El Marco de Adopción de la Nube de AWS (AWS CAF) proporciona una guía completa para ayudar a las organizaciones a planificar y ejecutar su adopción de la nube, incluyendo perspectivas sobre negocios, personas, gobernanza, plataforma, seguridad y operaciones, y proporciona herramientas para identificar brechas y desarrollar planes de acción; por ejemplo, AWS CAF ayuda a definir una estrategia de negocio alineada con objetivos de la nube, establecer un plan de gobernanza para controlar y gestionar los recursos, y diseñar una arquitectura de seguridad robusta para proteger los datos y cumplir con las regulaciones.",
                    imageUrl: AWSCAF
                },
                "AWS Compliance": {
                    description: "AWS Compliance asegura que los servicios de AWS cumplan con una amplia gama de estándares y certificaciones de cumplimiento global, como PCI-DSS para la seguridad de datos de tarjetas de crédito, HIPAA para la protección de datos de salud, GDPR para la privacidad de datos en la Unión Europea, y SOC 1, 2, y 3 para controles de servicios. Por ejemplo, las organizaciones pueden utilizar Amazon RDS para almacenar datos de clientes con la tranquilidad de que cumple con las normativas necesarias, y AWS Artifact proporciona acceso a informes de cumplimiento y certificaciones que facilitan la verificación de estas conformidades.",
                    imageUrl: compliance
                },
                "AWS Knowledge Center": {
                    description: "El Centro de Conocimiento de AWS es una base de datos de artículos, preguntas frecuentes y recursos de ayuda que proporciona respuestas a preguntas comunes y soluciones a problemas técnicos relacionados con los servicios de AWS. Es un recurso valioso para resolver problemas técnicos y obtener conocimientos sobre las mejores prácticas.",
                    imageUrl: ''
                },
                "AWS Pricing Calculator": {
                    description: "AWS Pricing Calculator permite a los usuarios estimar los costos mensuales de AWS basados en sus necesidades específicas. Los usuarios pueden seleccionar y configurar diversos servicios de AWS, como EC2 para instancias de cómputo, S3 para almacenamiento de datos, y RDS para bases de datos, ajustando variables como la región, el tipo de instancia, y el uso previsto. La calculadora proporciona un desglose detallado de los costos estimados, lo que ayuda a planificar y gestionar el presupuesto de manera eficiente. Por ejemplo, una empresa que planea lanzar una nueva aplicación web puede usar la calculadora para estimar los costos de servidores, almacenamiento y bases de datos, asegurando que el proyecto se mantenga dentro del presupuesto.",
                    imageUrl: AWSPricingCalculator
                },
                "AWS re:Post": {
                    description: "AWS re:Post es una comunidad de preguntas y respuestas que permite a los usuarios de AWS encontrar respuestas a preguntas técnicas, compartir conocimientos y aprender de las experiencias de otros usuarios y expertos de AWS. Por ejemplo, un desarrollador que enfrenta un problema con la configuración de Amazon EC2 puede publicar su pregunta en AWS re y recibir respuestas detalladas de otros miembros de la comunidad o incluso de expertos certificados de AWS, facilitando así la resolución de problemas y la mejora continua del uso de servicios de AWS.",
                    imageUrl: repost
                },
                "AWS SDKs": {
                    description: "Los AWS SDKs (Kits de Desarrollo de Software) proporcionan bibliotecas, ejemplos de código y documentación para ayudar a los desarrolladores a integrar y utilizar los servicios de AWS en sus aplicaciones mediante lenguajes de programación populares como Java, Python, JavaScript, y más. Por ejemplo, un desarrollador puede usar el AWS SDK para Python (boto3) para escribir scripts que automaticen la creación y gestión de recursos en Amazon S3, como la creación de buckets, la carga de archivos y la gestión de permisos, simplificando así el desarrollo y la implementación de aplicaciones en la nube de AWS.",
                    imageUrl: sdk
                },
                "AWS Support Center": {
                    description: "El Centro de Soporte de AWS ofrece acceso a recursos de soporte, incluyendo documentación técnica, herramientas de gestión de casos de soporte, y servicios de soporte técnico para ayudar a los usuarios a resolver problemas y optimizar su uso de AWS. Por ejemplo, si una empresa encuentra un problema de rendimiento en su aplicación que utiliza Amazon RDS, puede abrir un caso de soporte en el Centro de Soporte de AWS, donde un ingeniero de soporte especializado proporcionará asistencia para diagnosticar y solucionar el problema, asegurando que la aplicación vuelva a funcionar de manera óptima lo antes posible.",
                    imageUrl: ''
                },
                "Planes de soporte de AWS": {
                    description: `AWS ofrece diferentes planes de soporte diseñados para satisfacer las necesidades de diversas organizaciones, que van desde el soporte básico incluido con todas las cuentas de AWS hasta el soporte empresarial avanzado. Los planes de soporte son:
                        <ul>
                            <li><strong>Basic Support:</strong> Incluido con todas las cuentas de AWS, proporciona acceso a la documentación, whitepapers y foros de la comunidad sin costo adicional.</li>
                            <li><strong>Developer Support:</strong> A partir de $29 al mes, este plan es ideal para entornos de prueba y desarrollo. Incluye acceso a soporte técnico por correo electrónico durante horas de oficina, un tiempo de respuesta de 12 horas para problemas generales y acceso a AWS Trusted Advisor para recomendaciones de buenas prácticas.</li>
                            <li><strong>Business Support:</strong> A partir de $100 al mes, adecuado para cargas de trabajo de producción, proporciona soporte técnico 24/7 por teléfono y chat, tiempos de respuesta de una hora para problemas críticos, y acceso completo a AWS Trusted Advisor.</li>
                            <li><strong>Enterprise Support:</strong> Dirigido a grandes organizaciones con cargas de trabajo críticas, incluye todo en el Business Support más un Technical Account Manager (TAM) dedicado, revisiones proactivas y acceso a AWS Support API.</li>
                        </ul>
                                `,
                    imageUrl: planes
                },
                "AWS Well-Architected Framework": {
                    description: `
                        <p>El AWS Well-Architected Framework proporciona una guía estructurada para ayudar a los arquitectos de la nube a construir aplicaciones seguras, de alto rendimiento, resilientes y eficientes. Organizado en cinco pilares fundamentales:</p>
                        <ul>
                            <li><strong>Excelencia Operativa:</strong> Enfocado en operaciones eficientes y efectivas para soportar el desarrollo y la ejecución de aplicaciones, como el uso de prácticas de DevOps y automatización.</li>
                            <li><strong>Seguridad:</strong> Asegura la protección de datos, sistemas y activos mediante la implementación de controles de acceso, cifrado y monitoreo continuo.</li>
                            <li><strong>Fiabilidad:</strong> Garantiza que una carga de trabajo pueda recuperarse de fallos y cumplir con los requisitos de disponibilidad a través de la planeación de recuperación y la gestión de cambios.</li>
                            <li><strong>Eficiencia del Rendimiento:</strong> Utiliza los recursos de TI de manera eficiente, seleccionando los tipos y tamaños correctos de instancias y servicios según los requisitos de carga de trabajo.</li>
                            <li><strong>Optimización de Costos:</strong> Ayuda a evitar gastos innecesarios al proporcionar recomendaciones para optimizar los costos, como el uso de instancias reservadas para cargas de trabajo estables.</li>
                        </ul>
                        <p>Herramientas como AWS Well-Architected Tool y AWS Trusted Advisor complementan el marco, proporcionando evaluaciones continuas y recomendaciones para alinear las arquitecturas con las mejores prácticas de AWS.</p>
                    `,
                    imageUrl: waframework
                },
                "Amazon Athena": {
                    description: "Amazon Athena es un servicio de consulta interactiva que facilita analizar datos en Amazon S3 utilizando SQL estándar. Athena es fácil de usar. Simplemente apunte a sus datos, ejecute consultas y pague solo por las consultas que ejecute.",
                    imageUrl: ''
                },
                "AWS Data Exchange": {
                    description: "AWS Data Exchange facilita a los clientes encontrar, suscribirse y usar datos de terceros en la nube. Con AWS Data Exchange, puede suscribirse a conjuntos de datos de múltiples proveedores y usar estos datos para mejorar la inteligencia de negocios y la analítica.",
                    imageUrl: ''
                },
                "Amazon EMR": {
                    description: "Amazon EMR es una plataforma de gran escala para el procesamiento de datos que utiliza frameworks como Apache Hadoop y Apache Spark. Es fácil de configurar, opera a gran escala y ofrece un costo efectivo para el análisis de grandes volúmenes de datos.",
                    imageUrl: ''
                },
                "AWS Glue": {
                    description: "AWS Glue es un servicio de integración de datos totalmente administrado que facilita la preparación de datos para el análisis. Proporciona todas las capacidades necesarias para realizar tareas de ETL (extracción, transformación y carga).",
                    imageUrl: ''
                },
                "Amazon Kinesis": {
                    description: "Amazon Kinesis es una plataforma de transmisión de datos en tiempo real que permite recolectar, procesar y analizar datos en tiempo real. Esto es útil para aplicaciones que requieren monitoreo y análisis en tiempo real.",
                    imageUrl: ''
                },
                "Amazon MSK": {
                    description: "Amazon Managed Streaming for Apache Kafka (Amazon MSK) es un servicio completamente administrado para Apache Kafka que facilita crear y ejecutar aplicaciones que utilizan Apache Kafka como un repositorio de datos en tiempo real.",
                    imageUrl: ''
                },
                "Amazon OpenSearch Service": {
                    description: "Amazon OpenSearch Service es un servicio administrado que facilita el despliegue, operación y escalado de clústeres de OpenSearch en la nube. Es ideal para casos de uso como búsqueda de aplicaciones, monitoreo de log y análisis de datos.",
                    imageUrl: ''
                },
                "Amazon QuickSight": {
                    description: "Amazon QuickSight es un servicio de inteligencia de negocios (BI) escalable, sin servidor, embebible y potenciado por aprendizaje automático (ML) que facilita la creación de paneles interactivos y reportes visuales.",
                    imageUrl: ''
                },
                "Amazon Redshift": {
                    description: "Amazon Redshift es un servicio de almacenamiento de datos completamente administrado que facilita analizar todos sus datos utilizando SQL estándar y sus herramientas de inteligencia de negocios existentes.",
                    imageUrl: ''
                },
                "Amazon EventBridge": {
                    description: "Amazon EventBridge es un servicio de bus de eventos que facilita la conexión de aplicaciones mediante el uso de datos de sus propias aplicaciones, aplicaciones SaaS integradas y servicios de AWS.",
                    imageUrl: ''
                },
                "Amazon SNS": {
                    description: "Amazon Simple Notification Service (SNS) es un servicio de mensajería completamente administrado que facilita el desacoplamiento y la escalabilidad de microservicios, sistemas distribuidos y aplicaciones sin servidor.",
                    imageUrl: ''
                },
                "Amazon SQS": {
                    description: "Amazon Simple Queue Service (SQS) es un servicio de colas de mensajes que facilita desacoplar y escalar microservicios, sistemas distribuidos y aplicaciones sin servidor.",
                    imageUrl: ''
                },
                "AWS Step Functions": {
                    description: "AWS Step Functions facilita coordinar múltiples servicios de AWS en flujos de trabajo sin servidor para crear y escalar aplicaciones y microservicios.",
                    imageUrl: ''
                },
                "Amazon Connect": {
                    description: "Amazon Connect es un servicio de centro de contacto en la nube fácil de usar que facilita a cualquier empresa proporcionar un servicio de atención al cliente superior a un costo más bajo.",
                    imageUrl: ''
                },
                "Amazon SES": {
                    description: "Amazon Simple Email Service (SES) es un servicio de correo electrónico en la nube rentable y flexible que facilita a los desarrolladores enviar correos electrónicos desde cualquier aplicación.",
                    imageUrl: ''
                },
                "AWS Billing Conductor": {
                    description: "AWS Billing Conductor es un servicio que facilita la creación de facturas detalladas para sus clientes. Este servicio ayuda a organizar y administrar sus costos y facturas en la nube de manera eficiente.",
                    imageUrl: ''
                },
                "AWS Budgets": {
                    description: "AWS Budgets facilita crear presupuestos personalizados que alertan cuando sus costos o uso superan los umbrales que ha definido.",
                    imageUrl: ''
                },
                "AWS Cost and Usage Report": {
                    description: "AWS Cost and Usage Report proporciona los detalles más completos de sus costos y uso de AWS, organizados por su cuenta y agrupados por servicios y etiquetas.",
                    imageUrl: ''
                },
                "AWS Cost Explorer": {
                    description: "AWS Cost Explorer facilita visualizar, comprender y gestionar sus costos y uso de AWS a lo largo del tiempo.",
                    imageUrl: ''
                },
                "AWS Marketplace": {
                    description: "AWS Marketplace es un catálogo digital curado que facilita encontrar, comprar, desplegar y gestionar software de terceros y servicios que necesita para construir soluciones en AWS.",
                    imageUrl: ''
                },
                "AWS Batch": {
                    description: "AWS Batch facilita ejecutar trabajos por lotes a cualquier escala. Puede configurar trabajos por lotes que ejecuten miles de trabajos informáticos a través de máquinas virtuales o instancias de contenedor.",
                    imageUrl: ''
                },
                "Amazon EC2": {
                    description: "Amazon Elastic Compute Cloud (Amazon EC2) es un servicio web que proporciona capacidad informática redimensionable en la nube. Facilita obtener y configurar capacidad con un mínimo de fricción. Proporciona el control completo sobre sus recursos informáticos y le permite ejecutarlos en el entorno de computación probado de AWS.",
                    imageUrl: ec2Image
                },
                "AWS Elastic Beanstalk": {
                    description: "AWS Elastic Beanstalk facilita desplegar y escalar aplicaciones y servicios web desarrollados con Java, .NET, PHP, Node.js, Python, Ruby, Go y Docker en servidores familiares como Apache, Nginx, Passenger e IIS.",
                    imageUrl: ''
                },
                "Amazon Lightsail": {
                    description: "Amazon Lightsail es una forma fácil de comenzar con AWS. Ofrece todo lo necesario para desplegar rápidamente un proyecto: una máquina virtual, almacenamiento basado en SSD, transferencia de datos, gestión de DNS y una dirección IP estática, por un bajo costo mensual.",
                    imageUrl: ''
                },
                "AWS Local Zones": {
                    description: "AWS Local Zones son un tipo de implementación de infraestructura que sitúa computación, almacenamiento, base de datos y otros servicios de AWS cerca de grandes centros de población, industria y TI para aplicaciones que requieren una latencia de milisegundos de un solo dígito.",
                    imageUrl: ''
                },
                "AWS Outposts": {
                    description: "AWS Outposts es un servicio que lleva infraestructura y servicios nativos de AWS a prácticamente cualquier centro de datos, espacio de colocación o instalación local.",
                    imageUrl: ''
                },
                "AWS Wavelength": {
                    description: "AWS Wavelength lleva servicios de computación y almacenamiento de AWS a la red 5G para reducir la latencia y aumentar el rendimiento de las aplicaciones móviles y de dispositivos conectados.",
                    imageUrl: ''
                },
                "Amazon ECR": {
                    description: "Amazon Elastic Container Registry (Amazon ECR) es un servicio de registro de contenedores Docker completamente administrado que facilita el almacenamiento, la gestión y el despliegue de imágenes de contenedor Docker.",
                    imageUrl: ''
                },
                "Amazon ECS": {
                    description: "Amazon Elastic Container Service (Amazon ECS) es un servicio de orquestación de contenedores completamente administrado que facilita la ejecución, detención y gestión de contenedores Docker en un clúster de Amazon EC2.",
                    imageUrl: ''
                },
                "Amazon EKS": {
                    description: "Amazon Elastic Kubernetes Service (Amazon EKS) es un servicio de Kubernetes completamente administrado que facilita ejecutar Kubernetes en AWS sin necesidad de operar su propio plano de control de Kubernetes.",
                    imageUrl: ''
                },
                "AWS Activate for Startups": {
                    description: "AWS Activate proporciona a las startups recursos como créditos, entrenamiento y soporte para ayudarlas a comenzar y escalar en AWS.",
                    imageUrl: ''
                },
                "AWS IQ": {
                    description: "AWS IQ facilita encontrar, contratar y pagar expertos certificados por AWS para obtener ayuda inmediata en sus proyectos de AWS.",
                    imageUrl: ''
                },
                "AWS Managed Services (AMS)": {
                    description: "AWS Managed Services facilita operar su infraestructura de AWS más eficientemente y a escala mediante el uso de las mejores prácticas de AWS.",
                    imageUrl: ''
                },
                "AWS Support": {
                    description: "AWS Support proporciona diferentes niveles de soporte técnico y de cuenta a clientes de AWS para ayudarlos a planificar, desplegar y operar su infraestructura de AWS.",
                    imageUrl: ''
                },
                "Amazon Aurora": {
                    description: "Amazon Aurora es una base de datos relacional compatible con MySQL y PostgreSQL, construida para la nube, que combina el rendimiento y la disponibilidad de bases de datos comerciales avanzadas con la simplicidad y el costo de las bases de datos de código abierto.",
                    imageUrl: ''
                },
                "Amazon DynamoDB": {
                    description: "Amazon DynamoDB es una base de datos NoSQL completamente administrada que proporciona rendimiento rápido y predecible con escalabilidad perfecta.",
                    imageUrl: ''
                },
                "Amazon MemoryDB for Redis": {
                    description: "Amazon MemoryDB for Redis es un servicio de base de datos en memoria completamente administrado que es compatible con Redis y facilita la creación de aplicaciones altamente disponibles y de baja latencia.",
                    imageUrl: ''
                },
                "Amazon Neptune": {
                    description: "Amazon Neptune es un servicio de base de datos de grafos completamente administrado que facilita la creación y ejecución de aplicaciones con casos de uso como motores de recomendación, detección de fraude y redes sociales.",
                    imageUrl: ''
                },
                "Amazon RDS": {
                    description: "Amazon Relational Database Service (Amazon RDS) facilita la configuración, operación y escalado de bases de datos relacionales en la nube.",
                    imageUrl: ''
                },
                "AWS AppConfig": {
                    description: "AWS AppConfig facilita la entrega rápida y segura de configuraciones en las aplicaciones.",
                    imageUrl: ''
                },
                "AWS CLI": {
                    description: "AWS Command Line Interface (AWS CLI) es una herramienta unificada para gestionar sus servicios de AWS desde la línea de comandos.",
                    imageUrl: ''
                },
                "AWS Cloud9": {
                    description: "AWS Cloud9 es un entorno de desarrollo integrado (IDE) basado en la nube que facilita escribir, ejecutar y depurar su código con solo un navegador.",
                    imageUrl: ''
                },
                "AWS CloudShell": {
                    description: "AWS CloudShell facilita la administración, la experimentación y la interacción con los recursos de AWS mediante una terminal basada en la nube que ya está autenticada con sus credenciales de AWS.",
                    imageUrl: ''
                },
                "AWS CodeArtifact": {
                    description: "AWS CodeArtifact es un servicio de gestión de artefactos completamente administrado que facilita alojar y compartir repositorios de artefactos de software.",
                    imageUrl: ''
                },
                "AWS CodeBuild": {
                    description: "AWS CodeBuild es un servicio de integración continua que compila código fuente, ejecuta pruebas y produce paquetes de software que están listos para desplegar.",
                    imageUrl: ''
                },
                "AWS CodeCommit": {
                    description: "AWS CodeCommit es un servicio de control de versiones que facilita alojar repositorios de Git privados y colaborativos.",
                    imageUrl: ''
                },
                "AWS CodeDeploy": {
                    description: "AWS CodeDeploy facilita automatizar el despliegue de aplicaciones a una variedad de servicios de computación como Amazon EC2, AWS Lambda y servidores locales.",
                    imageUrl: ''
                },
                "AWS CodePipeline": {
                    description: "AWS CodePipeline facilita automatizar las fases de construcción, prueba y despliegue de su proceso de liberación de software.",
                    imageUrl: ''
                },
                "AWS CodeStar": {
                    description: "AWS CodeStar proporciona una interfaz unificada para desarrollar, construir y desplegar aplicaciones en AWS.",
                    imageUrl: ''
                },
                "AWS X-Ray": {
                    description: "AWS X-Ray facilita analizar y depurar aplicaciones distribuidas en producción, proporcionando una comprensión completa del rendimiento de su aplicación y sus microservicios subyacentes.",
                    imageUrl: ''
                },
                "Amazon AppStream 2.0": {
                    description: "Amazon AppStream 2.0 es un servicio de transmisión de aplicaciones completamente administrado que facilita la entrega de aplicaciones de escritorio a cualquier dispositivo.",
                    imageUrl: ''
                },
                "Amazon WorkSpaces": {
                    description: "Amazon WorkSpaces es una solución de escritorio como servicio (DaaS) completamente administrada que facilita proporcionar escritorios basados en la nube a sus usuarios.",
                    imageUrl: ''
                },
                "Amazon WorkSpaces Web": {
                    description: "Amazon WorkSpaces Web facilita proporcionar acceso seguro a aplicaciones web sin necesidad de administrar y asegurar los dispositivos de usuario.",
                    imageUrl: ''
                },
                "AWS Amplify": {
                    description: "AWS Amplify facilita construir y desplegar aplicaciones web y móviles completas rápidamente con una infraestructura en la nube escalable y segura.",
                    imageUrl: ''
                },
                "AWS AppSync": {
                    description: "AWS AppSync facilita crear API GraphQL y gestionar sus datos en tiempo real.",
                    imageUrl: ''
                },
                "AWS Device Farm": {
                    description: "AWS Device Farm facilita probar aplicaciones web y móviles en una variedad de dispositivos y navegadores reales.",
                    imageUrl: ''
                },
                "AWS IoT Core": {
                    description: "AWS IoT Core facilita conectar dispositivos IoT a la nube y gestionar de forma segura la comunicación entre ellos.",
                    imageUrl: ''
                },
                "AWS IoT Greengrass": {
                    description: "AWS IoT Greengrass facilita ejecutar funciones AWS Lambda, contenedores Docker o cualquier ejecutable en dispositivos locales de forma segura.",
                    imageUrl: ''
                },
                "Amazon Comprehend": {
                    description: "Amazon Comprehend es un servicio de procesamiento de lenguaje natural (NLP) que facilita descubrir información en sus datos de texto.",
                    imageUrl: ''
                },
                "Amazon Kendra": {
                    description: "Amazon Kendra es un servicio de búsqueda empresarial potenciado por aprendizaje automático que facilita encontrar la información dentro de su organización.",
                    imageUrl: ''
                },
                "Amazon Lex": {
                    description: "Amazon Lex facilita construir interfaces de conversación en cualquier aplicación usando voz y texto.",
                    imageUrl: ''
                },
                "Amazon Polly": {
                    description: "Amazon Polly es un servicio que convierte texto en habla realista, facilitando la creación de aplicaciones que hablan y la creación de categorías enteramente nuevas de productos habilitados para voz.",
                    imageUrl: ''
                },
                "Amazon Rekognition": {
                    description: "Amazon Rekognition facilita agregar análisis de imágenes y videos a sus aplicaciones.",
                    imageUrl: ''
                },
                "Amazon SageMaker": {
                    description: "Amazon SageMaker facilita construir, entrenar y desplegar modelos de aprendizaje automático (ML) a cualquier escala.",
                    imageUrl: ''
                },
                "Amazon Textract": {
                    description: "Amazon Textract facilita extraer texto y datos de documentos escaneados de forma automática.",
                    imageUrl: ''
                },
                "Amazon Transcribe": {
                    description: "Amazon Transcribe facilita agregar capacidades de conversión de voz a texto a sus aplicaciones.",
                    imageUrl: ''
                },
                "Amazon Translate": {
                    description: "Amazon Translate facilita traducir texto entre diferentes idiomas de forma automática.",
                    imageUrl: ''
                },
                "AWS Auto Scaling": {
                    description: "AWS Auto Scaling facilita configurar escalado automático para sus recursos de AWS.",
                    imageUrl: ''
                },
                "AWS CloudFormation": {
                    description: "AWS CloudFormation facilita modelar y configurar sus recursos de AWS para que pueda pasar menos tiempo gestionando esos recursos y más tiempo centrado en sus aplicaciones.",
                    imageUrl: ''
                },
                "AWS CloudTrail": {
                    description: "AWS CloudTrail facilita la gobernanza, el cumplimiento y la auditoría operativa de su cuenta de AWS.",
                    imageUrl: ''
                },
                "Amazon CloudWatch": {
                    description: "Amazon CloudWatch facilita monitorear y gestionar sus aplicaciones y servicios en AWS y localmente.",
                    imageUrl: ''
                },
                "AWS Compute Optimizer": {
                    description: "AWS Compute Optimizer facilita recomendar recursos de cómputo óptimos para sus cargas de trabajo para mejorar el rendimiento y reducir los costos.",
                    imageUrl: ''
                },
                "AWS Config": {
                    description: "AWS Config facilita evaluar, auditar y evaluar las configuraciones de sus recursos de AWS.",
                    imageUrl: ''
                },
                "AWS Control Tower": {
                    description: "AWS Control Tower facilita configurar y gobernar un entorno de múltiples cuentas de AWS seguro y bien arquitectado.",
                    imageUrl: ''
                },
                "AWS Health Dashboard": {
                    description: "AWS Health Dashboard proporciona visibilidad a eventos y recomendaciones de AWS para ayudar a gestionar su salud operativa.",
                    imageUrl: ''
                },
                "AWS Launch Wizard": {
                    description: "AWS Launch Wizard facilita desplegar aplicaciones de terceros en AWS con prácticas recomendadas.",
                    imageUrl: ''
                },
                "AWS License Manager": {
                    description: "AWS License Manager facilita gestionar sus licencias de software en AWS y sus entornos locales.",
                    imageUrl: ''
                },
                "AWS Management Console": {
                    description: "AWS Management Console facilita gestionar sus recursos de AWS con una interfaz web sencilla y gráfica.",
                    imageUrl: ''
                },
                "AWS Organizations": {
                    description: "AWS Organizations facilita gestionar y gobernar sus entornos de AWS a medida que escala y crece su negocio.",
                    imageUrl: ''
                },
                "AWS Resource Groups and Tag Editor": {
                    description: "AWS Resource Groups and Tag Editor facilita agrupar y gestionar recursos de AWS con etiquetas.",
                    imageUrl: ''
                },
                "AWS Service Catalog": {
                    description: "AWS Service Catalog facilita crear y gestionar catálogos de servicios de TI aprobados en AWS.",
                    imageUrl: ''
                },
                "AWS Systems Manager": {
                    description: "AWS Systems Manager facilita ver y controlar su infraestructura de AWS a medida que crece y opera.",
                    imageUrl: ''
                },
                "AWS Trusted Advisor": {
                    description: "AWS Trusted Advisor facilita optimizar su infraestructura de AWS, mejorar la seguridad y el rendimiento, y reducir costos.",
                    imageUrl: ''
                },
                "AWS Well-Architected Tool": {
                    description: "AWS Well-Architected Tool facilita revisar el estado de sus cargas de trabajo y comparar las mejores prácticas arquitectónicas de AWS.",
                    imageUrl: ''
                },
                "AWS Application Discovery Service": {
                    description: "AWS Application Discovery Service facilita planificar proyectos de migración recopilando información sobre sus recursos locales.",
                    imageUrl: ''
                },
                "AWS Application Migration Service": {
                    description: "AWS Application Migration Service facilita migrar aplicaciones locales a AWS con interrupción mínima.",
                    imageUrl: ''
                },
                "AWS Database Migration Service (AWS DMS)": {
                    description: "AWS Database Migration Service facilita migrar bases de datos a AWS de manera rápida y segura.",
                    imageUrl: ''
                },
                "AWS Migration Hub": {
                    description: "AWS Migration Hub facilita planificar, realizar un seguimiento y gestionar sus migraciones de aplicaciones a AWS.",
                    imageUrl: ''
                },
                "AWS Schema Conversion Tool (AWS SCT)": {
                    description: "AWS Schema Conversion Tool facilita convertir esquemas de bases de datos y dependencias de una base de datos origen a una base de datos destino compatible con AWS.",
                    imageUrl: ''
                },
                "AWS Snow Family": {
                    description: "AWS Snow Family facilita migrar grandes volúmenes de datos dentro y fuera de AWS utilizando dispositivos de almacenamiento portátiles.",
                    imageUrl: ''
                },
                "AWS Transfer Family": {
                    description: "AWS Transfer Family facilita transferir archivos de forma segura a Amazon S3 o Amazon EFS.",
                    imageUrl: ''
                },
                "Amazon API Gateway": {
                    description: "Amazon API Gateway facilita crear, publicar, mantener, monitorear y asegurar API a cualquier escala.",
                    imageUrl: ''
                },
                "Amazon CloudFront": {
                    description: "Amazon CloudFront es una red de entrega de contenido (CDN) que facilita entregar datos, videos, aplicaciones y API a sus usuarios globalmente con baja latencia y altas velocidades de transferencia.",
                    imageUrl: ''
                },
                "AWS Direct Connect": {
                    description: "AWS Direct Connect facilita establecer una conexión de red dedicada desde sus instalaciones a AWS.",
                    imageUrl: ''
                },
                "AWS Global Accelerator": {
                    description: "AWS Global Accelerator facilita mejorar la disponibilidad y el rendimiento de sus aplicaciones globales mediante rutas optimizadas y controladas por la red global de AWS.",
                    imageUrl: ''
                },
                "Amazon Route 53": {
                    description: "Amazon Route 53 facilita gestionar tráfico de DNS para sus dominios, proporcionando alta disponibilidad y escalabilidad.",
                    imageUrl: ''
                },
                "Amazon VPC": {
                    description: "Amazon Virtual Private Cloud (Amazon VPC) facilita lanzar recursos de AWS en una red virtual que usted define.",
                    imageUrl: ''
                },
                "AWS VPN": {
                    description: "AWS VPN facilita establecer conexiones de red seguras y cifradas entre sus redes locales o sucursales y la infraestructura global de AWS.",
                    imageUrl: ''
                },
                "AWS Artifact": {
                    description: "AWS Artifact facilita acceder a informes y documentos de cumplimiento de AWS.",
                    imageUrl: ''
                },
                "AWS Audit Manager": {
                    description: "AWS Audit Manager facilita auditar su uso de AWS para facilitar cumplir con sus requisitos de conformidad.",
                    imageUrl: ''
                },
                "AWS Certificate Manager (ACM)": {
                    description: "AWS Certificate Manager facilita aprovisionar, gestionar y desplegar certificados SSL/TLS para su uso con servicios de AWS.",
                    imageUrl: ''
                },
                "AWS CloudHSM": {
                    description: "AWS CloudHSM facilita generar y usar claves criptográficas con módulos de seguridad de hardware (HSM) en la nube.",
                    imageUrl: ''
                },
                "Amazon Cognito": {
                    description: "Amazon Cognito facilita agregar registro de usuario, inicio de sesión y control de acceso a sus aplicaciones web y móviles.",
                    imageUrl: ''
                },
                "Amazon Detective": {
                    description: "Amazon Detective facilita analizar e investigar posibles problemas de seguridad o actividades sospechosas en sus recursos de AWS.",
                    imageUrl: ''
                },
                "AWS Directory Service": {
                    description: "AWS Directory Service facilita configurar y gestionar directorios en la nube.",
                    imageUrl: ''
                },
                "AWS Firewall Manager": {
                    description: "AWS Firewall Manager facilita configurar y gestionar reglas de firewall en sus cuentas y aplicaciones.",
                    imageUrl: ''
                },
                "Amazon GuardDuty": {
                    description: "Amazon GuardDuty facilita la detección continua de amenazas en su cuenta de AWS y la infraestructura de datos.",
                    imageUrl: ''
                },
                "AWS IAM": {
                    description: "AWS Identity and Access Management (IAM) facilita gestionar el acceso a los servicios y recursos de AWS de forma segura.",
                    imageUrl: ''
                },
                "AWS IAM Identity Center (AWS Single Sign-On)": {
                    description: "AWS IAM Identity Center facilita la gestión del acceso a múltiples cuentas de AWS y aplicaciones empresariales.",
                    imageUrl: ''
                },
                "Amazon Inspector": {
                    description: "Amazon Inspector facilita analizar la configuración de las instancias de Amazon EC2 para identificar vulnerabilidades o desviaciones respecto a las mejores prácticas.",
                    imageUrl: ''
                },
                "AWS Key Management Service (AWS KMS)": {
                    description: "AWS Key Management Service facilita crear y gestionar claves criptográficas para proteger sus datos.",
                    imageUrl: ''
                },
                "Amazon Macie": {
                    description: "Amazon Macie facilita descubrir, clasificar y proteger datos sensibles almacenados en Amazon S3.",
                    imageUrl: ''
                },
                "AWS Network Firewall": {
                    description: "AWS Network Firewall facilita desplegar y gestionar un firewall de red esencial para proteger su infraestructura de AWS.",
                    imageUrl: ''
                },
                "AWS Resource Access Manager (AWS RAM)": {
                    description: "AWS Resource Access Manager facilita compartir recursos de AWS con otras cuentas de AWS.",
                    imageUrl: ''
                },
                "AWS Secrets Manager": {
                    description: "AWS Secrets Manager facilita rotar, gestionar y recuperar credenciales de bases de datos, claves de API y otros secretos.",
                    imageUrl: ''
                },
                "AWS Security Hub": {
                    description: "AWS Security Hub facilita unificar y gestionar alertas de seguridad y automatizar el cumplimiento de las mejores prácticas.",
                    imageUrl: ''
                },
                "AWS Shield": {
                    description: "AWS Shield facilita proteger contra ataques de denegación de servicio distribuido (DDoS) en sus aplicaciones.",
                    imageUrl: ''
                },
                "AWS WAF": {
                    description: "AWS Web Application Firewall facilita proteger sus aplicaciones web de ataques comunes que pueden afectar su disponibilidad, comprometer su seguridad o consumir recursos excesivos.",
                    imageUrl: ''
                },
                "AWS Fargate": {
                    description: "AWS Fargate facilita ejecutar contenedores sin necesidad de gestionar servidores o clusters de Amazon EC2.",
                    imageUrl: ''
                },
                "AWS Lambda": {
                    description: "AWS Lambda facilita ejecutar código sin aprovisionar o gestionar servidores. Paga solo por el tiempo de cómputo que consume.",
                    imageUrl: ''
                },
                "AWS Backup": {
                    description: "AWS Backup facilita centralizar y automatizar la protección de datos en servicios de AWS.",
                    imageUrl: ''
                },
                "Amazon EBS": {
                    description: "Amazon Elastic Block Store (Amazon EBS) proporciona almacenamiento en bloque persistente para instancias de Amazon EC2.",
                    imageUrl: ''
                },
                "Amazon EFS": {
                    description: "Amazon Elastic File System (Amazon EFS) proporciona almacenamiento de archivos escalable y completamente administrado para uso con servicios en la nube de AWS y recursos locales.",
                    imageUrl: ''
                },
                "AWS Elastic Disaster Recovery": {
                    description: "AWS Elastic Disaster Recovery facilita minimizar la interrupción del negocio y reducir el tiempo de inactividad con recuperación ante desastres.",
                    imageUrl: ''
                },
                "Amazon FSx": {
                    description: "Amazon FSx facilita lanzar y ejecutar sistemas de archivos de terceros en AWS.",
                    imageUrl: ''
                },
                "Amazon S3": {
                    description: "Amazon Simple Storage Service (Amazon S3) facilita almacenar y recuperar cualquier cantidad de datos desde cualquier lugar.",
                    imageUrl: ''
                },
                "Amazon S3 Glacier": {
                    description: "Amazon S3 Glacier facilita el almacenamiento seguro y de bajo costo para el archivado y la copia de seguridad de datos.",
                    imageUrl: ''
                },
                "Modelo de responsabilidad compartida de AWS": {
                    description: `
                    <p>El Modelo de Responsabilidad Compartida de AWS es un marco que define claramente las responsabilidades de AWS y del cliente en cuanto a la seguridad y el cumplimiento de los servicios en la nube. Este modelo es fundamental para entender qué aspectos de la seguridad son manejados por AWS y cuáles deben ser gestionados por el cliente.</p>
                    <p><strong>Responsabilidades de AWS:</strong></p>
                    <ul>
                        <li><strong>Seguridad de la infraestructura:</strong> AWS es responsable de proteger la infraestructura que ejecuta todos los servicios ofrecidos en la nube de AWS. Esto incluye el hardware, software, redes y las instalaciones que ejecutan los servicios de AWS.</li>
                        <li><strong>Seguridad física de los centros de datos:</strong> AWS gestiona la seguridad de los centros de datos donde se alojan los servicios en la nube, asegurando que estos estén protegidos contra accesos no autorizados y amenazas físicas.</li>
                        <li><strong>Gestión de la infraestructura global:</strong> AWS se encarga de la seguridad y el mantenimiento del hardware y software que componen la infraestructura global de AWS, incluyendo la gestión de las redes y la conectividad.</li>
                    </ul>
                    <p><strong>Responsabilidades del cliente:</strong></p>
                    <ul>
                        <li><strong>Gestión de datos:</strong> Los clientes son responsables de la protección de sus datos, incluyendo la encriptación y el control de acceso a los datos almacenados en la nube de AWS.</            <li><strong>Configuración de la red:</strong> Los clientes deben configurar adecuadamente la red, incluyendo la configuración de firewalls y reglas de seguridad para proteger sus aplicaciones y datos.</li>
                        <li><strong>Gestión de identidades y accesos:</strong> Los clientes deben gestionar el acceso a sus servicios y recursos utilizando herramientas como AWS Identity and Access Management (IAM) para asegurar que solo las personas autorizadas puedan acceder a los recursos.</li>
                        <li><strong>Seguridad de los sistemas operativos y aplicaciones:</strong> Los clientes son responsables de mantener y actualizar los sistemas operativos y las aplicaciones que ejecutan en la infraestructura de AWS.</li>
                        <li><strong>Seguridad de los endpoints:</strong> Los clientes deben asegurar que los dispositivos y puntos de acceso que interactúan con los servicios de AWS estén protegidos contra amenazas y accesos no autorizados.</li>
                    </ul>
                `,
                    imageUrl: seguridad
                },
                "Arquitectos de soluciones de AWS": {
                    description: `
                    <p>Los arquitectos de soluciones de AWS son profesionales especializados en diseñar y gestionar soluciones en la nube utilizando los servicios de Amazon Web Services. Su objetivo principal es optimizar el uso de la nube de AWS para satisfacer las necesidades empresariales y técnicas de una organización.</p>
                    <ul>
                        <li><strong>Diseño de arquitecturas en la nube:</strong> Los arquitectos de soluciones crean diseños de arquitectura en la nube que son escalables, seguros y rentables, seleccionando los servicios adecuados de AWS y definiendo cómo interactuarán entre sí.</li>
                        <li><strong>Optimización de costos:</strong> Ayudan a las organizaciones a optimizar los costos al seleccionar las instancias y servicios más eficientes y al diseñar soluciones que minimicen el desperdicio de recursos.</li>
                        <li><strong>Seguridad:</strong> Aseguran que las soluciones cumplan con los estándares de seguridad mediante la implementación de buenas prácticas de seguridad y conformidad con las normativas relevantes.</li>
                        <li><strong>Resiliencia y disponibilidad:</strong> Diseñan arquitecturas que puedan recuperarse rápidamente de fallos y minimizan el tiempo de inactividad, garantizando la continuidad del negocio.</li>
                        <li><strong>Asesoría técnica:</strong> Proporcionan orientación técnica y asesoramiento a los equipos de desarrollo y operaciones para garantizar que las implementaciones sean exitosas y eficientes. Esto incluye la documentación de las arquitecturas y la capacitación de los equipos sobre cómo utilizar y mantener los sistemas en la nube de AWS.</li>
                        <li><strong>Uso de herramientas de AWS:</strong> Utilizan herramientas y servicios como AWS CloudFormation, AWS Well-Architected Framework y AWS Trusted Advisor para ayudar a diseñar y evaluar arquitecturas en la nube y garantizar que cumplan con las mejores prácticas.</li>
                    </ul>
                    <p>En resumen, los arquitectos de soluciones de AWS juegan un papel crucial en el diseño, implementación y mantenimiento de soluciones en la nube, asegurando que sean eficientes, seguras y alineadas con los objetivos empresariales.</p>
                `,
                imageUrl: arquitecto
                },
                "Infraestructura global de AWS (por ejemplo, Regiones de AWS, Zonas de disponibilidad)": {
                    description: `
                    <p>La infraestructura global de AWS está diseñada para ofrecer una alta disponibilidad, redundancia y baja latencia. Esta infraestructura se organiza en regiones y zonas de disponibilidad, proporcionando una robusta plataforma en la nube que permite a los clientes desplegar aplicaciones y servicios de manera confiable y segura.</p>
                    <ul>
                        <li><strong>Regiones de AWS:</strong> Son áreas geográficas separadas que contienen múltiples zonas de disponibilidad. Cada región es completamente independiente de las demás en términos de ubicación geográfica, fuentes de energía y conectividad. AWS actualmente tiene decenas de regiones en todo el mundo, permitiendo a los clientes desplegar aplicaciones cerca de sus usuarios para reducir la latencia y cumplir con requisitos locales de residencia de datos.</li>
                        <li><strong>Zonas de disponibilidad:</strong> Dentro de cada región hay varias zonas de disponibilidad (Availability Zones, AZ). Cada zona de disponibilidad es un centro de datos discreto con energía, refrigeración y conectividad redundantes. Las zonas de disponibilidad están interconectadas con enlaces de baja latencia, alta velocidad y redundancia para facilitar la replicación de datos y la alta disponibilidad de las aplicaciones.</li>
                        <li><strong>Redundancia y disponibilidad:</strong> Al desplegar recursos en múltiples zonas de disponibilidad, los clientes pueden diseñar sus aplicaciones para que sean tolerantes a fallos y continúen operando en caso de que una zona de disponibilidad experimente problemas.</li>
                        <li><strong>Presencia global:</strong> La presencia global de regiones permite a los clientes desplegar aplicaciones cerca de sus usuarios finales, reduciendo la latencia y mejorando la experiencia del usuario. Además, algunas organizaciones tienen requisitos específicos para mantener los datos dentro de ciertos límites geográficos, y las múltiples regiones de AWS permiten cumplir con estos requisitos seleccionando la región adecuada para almacenar y procesar datos.</li>
                        <li><strong>Escalabilidad y flexibilidad:</strong> La amplia infraestructura de AWS permite a los clientes escalar sus aplicaciones y servicios de manera global, aprovechando la capacidad de múltiples regiones y zonas de disponibilidad para manejar grandes volúmenes de tráfico y cargas de trabajo.</li>
                    </ul>
                    <p>En resumen, la infraestructura global de AWS, compuesta por regiones y zonas de disponibilidad, proporciona una plataforma robusta y flexible que permite a los clientes desplegar aplicaciones con alta disponibilidad, baja latencia y conformidad con los requisitos de residencia de datos.</p>
                `,
                imageUrl: infraglobal
                },
                "Bases de datos, que es NoSQL y SQL": {
                    description: `
                    <p>Las bases de datos son sistemas de software diseñados para gestionar, almacenar y recuperar datos de manera eficiente. Existen dos tipos principales de bases de datos: SQL y NoSQL, cada una con sus propias características y casos de uso en AWS.</p>
                    <ul>
                        <li><strong>Bases de datos SQL (Structured Query Language):</strong> Son bases de datos relacionales que utilizan un modelo de datos estructurado basado en tablas. Cada tabla se compone de filas y columnas, donde las columnas representan atributos y las filas representan registros de datos. Las bases de datos SQL son conocidas por su capacidad para manejar transacciones complejas y mantener la integridad de los datos. En AWS, servicios como Amazon RDS (Relational Database Service) soportan motores de bases de datos SQL populares como MySQL, PostgreSQL, Oracle y SQL Server, proporcionando una gestión simplificada y escalabilidad.</li>
                        <li><strong>Bases de datos NoSQL:</strong> Están diseñadas para manejar grandes volúmenes de datos no estructurados y semiestructurados. No requieren un esquema fijo y son ideales para aplicaciones que requieren escalabilidad horizontal y flexibilidad. Las bases de datos NoSQL pueden ser categorizadas en varios tipos, como documentales, clave-valor, de columnas y de grafos. En AWS, servicios como Amazon DynamoDB ofrecen una base de datos NoSQL altamente escalable y de baja latencia, adecuada para aplicaciones que necesitan alto rendimiento y disponibilidad, como aplicaciones web, juegos y dispositivos IoT.</li>
                        <li><strong>Comparación de SQL y NoSQL:</strong>
                            <ul>
                                <li><strong>SQL:</strong> Ideal para aplicaciones con datos estructurados y relaciones complejas, proporcionando ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad) para garantizar la integridad de los datos.</li>
                                <li><strong>NoSQL:</strong> Adecuado para aplicaciones que requieren escalabilidad masiva y flexibilidad en el manejo de datos, proporcionando un rendimiento rápido y almacenamiento eficiente para datos no estructurados.</li>
                            </ul>
                        </li>
                    </ul>
                    <p>En resumen, las bases de datos SQL y NoSQL en AWS ofrecen soluciones adecuadas para diferentes necesidades de almacenamiento de datos, permitiendo a las organizaciones elegir la opción que mejor se adapte a sus requisitos específicos de aplicación y rendimiento.</p>
                `,
                    imageUrl: nosqlsql
                },
                "AWS Storage Gateway": {
                    description: "AWS Storage Gateway facilita el acceso seguro y eficiente a los servicios de almacenamiento en la nube de AWS desde sus instalaciones locales.",
                    imageUrl: ''
                }
            }
        }
    };

    const handleCategoryClick = (category) => {
        setExpandedCategory(expandedCategory === category ? null : category);
        setExpandedSubCategory(null);
    };

    const handleSubCategoryClick = (subCategory) => {
        setExpandedSubCategory(expandedSubCategory === subCategory ? null : subCategory);
    };

    const handleServiceClick = (service) => {
        setServiceContent(levels.CP.services[service]);
    };

    return (
        <section id="documentation">
            <h2>Documentación</h2>
            <p>En esta sección encontrarás información detallada sobre los servicios y conceptos de AWS que son relevantes para los exámenes de la certificación de Cloud Practitioner y próximamente de Solutions Architect Associate. Explora los servicios disponibles en cada categoría.</p>
            <div className="documentation-content">
                <div className="sidebar">
                    {levels.CP.categories && Object.keys(levels.CP.categories).map(category => (
                        <div key={category}>
                            <h3 onClick={() => handleCategoryClick(category)}>{category}</h3>
                            {expandedCategory === category && (
                                <div>
                                    {Object.keys(levels.CP.categories[category]).map(subCategory => (
                                        <div key={subCategory}>
                                            <h4 onClick={() => handleSubCategoryClick(subCategory)}>{subCategory}</h4>
                                            {expandedSubCategory === subCategory && (
                                                <ul>
                                                    {levels.CP.categories[category][subCategory].map(service => (
                                                        <li key={service} onClick={() => handleServiceClick(service)}>{service}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="service-content">
                    <p dangerouslySetInnerHTML={{ __html: serviceContent.description }}></p>
                    {serviceContent.imageUrl && <img src={serviceContent.imageUrl} alt="Service" />}
                </div>
            </div>
        </section>
    );
}

export default Documentation;
