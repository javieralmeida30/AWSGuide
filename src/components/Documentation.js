import React, { useState } from 'react';
import './Documentation.css';

function Documentation() {
    const [selectedLevel, setSelectedLevel] = useState('CP');
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [expandedSubCategory, setExpandedSubCategory] = useState(null);
    const [serviceContent, setServiceContent] = useState('');

    const levels = {
        CP: {
            categories: {
                "Tecnologías y Conceptos": {
                    "General": [
                        "APIs",
                        "Beneficios de migrar a la nube de AWS",
                        "AWS Cloud Adoption Framework (AWS CAF)",
                        "AWS Compliance",
                        "AWS Knowledge Center",
                        "AWS Partner Network",
                        "AWS Prescriptive Guidance",
                        "AWS Pricing Calculator",
                        "AWS Professional Services",
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
                        "Infraestructura como código (IaC)"
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
                "Tipos de instancias de Amazon EC2 (por ejemplo, Reserved, On-Demand, Spot)": "Amazon EC2 ofrece varios tipos de instancias como On-Demand Reserved y Spot cada uno diseñado para diferentes necesidades On-Demand permite pagar por capacidad de cómputo por hora o por segundo sin compromisos a largo plazo y es ideal para aplicaciones con cargas de trabajo variables y para desarrollo y prueba de aplicaciones Reserved ofrece descuentos significativos cuando se compromete a usar una instancia por uno o tres años ideal para aplicaciones estables y predecibles Spot permite aprovechar la capacidad no utilizada en AWS con descuentos de hasta el 90% perfecto para aplicaciones que pueden tolerar interrupciones como procesamiento por lotes y análisis de big data Amazon EC2 tiene tres tipos principales de instancias: On-Demand, Reserved y Spot. Las instancias On-Demand permiten pagar por capacidad de cómputo por hora o por segundo sin compromisos a largo plazo, siendo ideales para aplicaciones con cargas de trabajo variables y para desarrollo y prueba de aplicaciones. Las instancias Reserved ofrecen descuentos significativos cuando se compromete a usar una instancia por uno o tres años, lo que es ideal para aplicaciones estables y predecibles. Las instancias Spot permiten aprovechar la capacidad no utilizada en AWS con descuentos de hasta el 90%, siendo perfectas para aplicaciones que pueden tolerar interrupciones como procesamiento por lotes y análisis de big data.",
                "Machine learning": "Machine Learning es una rama de la inteligencia artificial que se enfoca en el desarrollo de algoritmos que permiten a las máquinas aprender y tomar decisiones basadas en datos En lugar de ser programadas explícitamente para realizar una tarea específica las máquinas usan patrones y relaciones en los datos para mejorar su desempeño en una tarea a lo largo del tiempo Machine Learning en AWS Amazon Web Services (AWS) ofrece una amplia gama de servicios y herramientas para facilitar la implementación de proyectos de Machine Learning Estos servicios ayudan a los desarrolladores y científicos de datos a construir entrenar y desplegar modelos de aprendizaje automático de manera eficiente Amazon SageMaker: Es un servicio completamente administrado que proporciona todas las herramientas necesarias para construir entrenar y desplegar modelos de Machine Learning a gran escala Permite a los usuarios trabajar en notebooks Jupyter gestionar conjuntos de datos elegir y ajustar algoritmos entrenar modelos y desplegarlos en producción Amazon Comprehend: Es un servicio de procesamiento de lenguaje natural (NLP) que utiliza Machine Learning para descubrir información en textos no estructurados Puede analizar sentimientos extraer entidades clave y comprender el significado del texto Amazon Rekognition: Es un servicio que permite agregar análisis de imágenes y videos a las aplicaciones Utiliza Machine Learning para identificar objetos personas texto escenas y actividades así como detectar contenido inapropiado Amazon Polly: Convierte texto en discurso realista utilizando técnicas avanzadas de aprendizaje profundo para mejorar la naturalidad y fluidez del habla sintetizada Amazon Lex: Permite construir interfaces de conversación en aplicaciones usando voz y texto Lex proporciona las tecnologías de aprendizaje profundo de reconocimiento automático de voz (ASR) para convertir la voz en texto y de comprensión del lenguaje natural (NLU) para reconocer la intención del texto",
                "Infraestructura como código (IaC)": "La Infraestructura como Código (IaC) es una práctica que permite gestionar y aprovisionar la infraestructura de tecnología a través de archivos de configuración legibles por máquinas en lugar de hacerlo manualmente IaC facilita la automatización y la consistencia en el despliegue de recursos lo que reduce errores humanos y permite una mayor agilidad y eficiencia en la gestión de entornos de TI IaC consiste en escribir y ejecutar scripts que configuran y gestionan la infraestructura Estos scripts pueden definir la configuración de servidores bases de datos redes y otros componentes de TI Entre las ventajas de IaC se encuentran la automatización que elimina la necesidad de configuración manual lo que ahorra tiempo y reduce la posibilidad de errores la consistencia que asegura que los entornos de desarrollo prueba y producción sean idénticos lo que disminuye los problemas de configuración y la capacidad de versionado que permite rastrear y revertir cambios en la infraestructura de manera similar a cómo se maneja el código de software",
                "APIs": "Las APIs (Interfaces de Programación de Aplicaciones) permiten la comunicación entre diferentes sistemas de software a través de conjuntos de reglas y definiciones. En AWS, las APIs se utilizan ampliamente para interactuar con los servicios de AWS mediante solicitudes HTTP.",
                "Beneficios de migrar a la nube de AWS": "Migrar a la nube de AWS ofrece numerosos beneficios, incluyendo escalabilidad, flexibilidad, reducción de costos, mayor seguridad, y acceso a una amplia gama de servicios innovadores que pueden acelerar la transformación digital. Las organizaciones pueden mejorar la agilidad, la eficiencia operativa y la capacidad de respuesta al mercado.",
                "AWS Cloud Adoption Framework (AWS CAF)": "El Marco de Adopción de la Nube de AWS (AWS CAF) proporciona una guía completa para ayudar a las organizaciones a planificar y ejecutar su viaje de adopción de la nube. Incluye perspectivas sobre negocios, personas, gobernanza, plataforma, seguridad y operaciones, ayudando a identificar brechas y desarrollar planes de acción.",
                "AWS Compliance": "AWS cumple con una amplia gama de estándares y certificaciones de cumplimiento global, incluyendo PCI-DSS, HIPAA, GDPR, SOC 1, 2 y 3, ISO 27001, y muchos otros, asegurando que los datos y aplicaciones en la nube se manejen de manera segura. Esto permite a las organizaciones cumplir con los requisitos regulatorios y de seguridad específicos de su industria.",
                "AWS Knowledge Center": "El Centro de Conocimiento de AWS es una base de datos de artículos, preguntas frecuentes y recursos de ayuda que proporciona respuestas a preguntas comunes y soluciones a problemas técnicos relacionados con los servicios de AWS. Es un recurso valioso para resolver problemas técnicos y obtener conocimientos sobre las mejores prácticas.",
                "AWS Partner Network": "La Red de Socios de AWS (APN) es una comunidad global de socios que utilizan los servicios de AWS para crear soluciones y servicios para clientes. Los socios de APN incluyen integradores de sistemas, proveedores de software independientes (ISV), y revendedores, quienes pueden ayudar a las organizaciones a diseñar, construir, migrar y gestionar sus cargas de trabajo en AWS.",
                "AWS Prescriptive Guidance": "AWS Prescriptive Guidance proporciona estrategias, mejores prácticas y patrones arquitectónicos recomendados por AWS para ayudar a los clientes a diseñar, migrar, y operar sus cargas de trabajo en la nube de manera eficiente y segura. Estas guías se basan en la experiencia acumulada de AWS trabajando con miles de clientes en sus viajes a la nube.",
                "AWS Pricing Calculator": "La Calculadora de Precios de AWS permite a los usuarios estimar los costos mensuales de AWS basados en su uso previsto. Los usuarios pueden especificar los servicios y configuraciones para obtener una estimación detallada de los costos, lo que facilita la planificación y la gestión del presupuesto en la nube.",
                "AWS Professional Services": "Los Servicios Profesionales de AWS ofrecen consultoría especializada para ayudar a las organizaciones a planificar, implementar y gestionar sus proyectos de nube. Los consultores de AWS trabajan junto a los equipos de los clientes para acelerar su adopción de AWS y maximizar el valor de su inversión en la nube.",
                "AWS re:Post": "AWS re:Post es una comunidad de preguntas y respuestas donde los usuarios de AWS pueden encontrar respuestas a preguntas técnicas, compartir conocimiento y aprender de las experiencias de otros usuarios y expertos de AWS. Es una plataforma para la colaboración y el intercambio de conocimientos.",
                "AWS SDKs": "Los SDKs de AWS (Kits de Desarrollo de Software) proporcionan bibliotecas, ejemplos de código y documentación para ayudar a los desarrolladores a integrar y utilizar los servicios de AWS en sus aplicaciones utilizando lenguajes de programación populares. Facilitan el desarrollo de aplicaciones robustas y escalables en la nube.",
                "AWS Support Center": "El Centro de Soporte de AWS ofrece acceso a recursos de soporte, incluyendo documentación técnica, herramientas de gestión de casos de soporte, y servicios de soporte técnico para ayudar a los usuarios a resolver problemas y optimizar su uso de AWS. Es un recurso esencial para garantizar operaciones sin problemas en la nube.",
                "Planes de soporte de AWS": "AWS ofrece diferentes planes de soporte que van desde el soporte básico, incluido con todas las cuentas de AWS, hasta el soporte empresarial, que ofrece acceso a ingenieros de soporte dedicados, revisiones de arquitectura, y más. Los planes de soporte están diseñados para satisfacer las necesidades de diversas organizaciones.",
                "AWS Well-Architected Framework": "El Marco Well-Architected de AWS proporciona una guía estructurada para ayudar a los arquitectos a construir aplicaciones seguras, resilientes, eficientes y optimizadas en la nube. El marco se organiza en cinco pilares: excelencia operativa, seguridad, fiabilidad, eficiencia del rendimiento y optimización de costos, y ofrece herramientas y mejores prácticas para evaluar y mejorar las arquitecturas.",
                "Amazon Athena": "Amazon Athena es un servicio de consulta interactiva que facilita analizar datos en Amazon S3 utilizando SQL estándar. Athena es fácil de usar. Simplemente apunte a sus datos, ejecute consultas y pague solo por las consultas que ejecute.",
                "AWS Data Exchange": "AWS Data Exchange facilita a los clientes encontrar, suscribirse y usar datos de terceros en la nube. Con AWS Data Exchange, puede suscribirse a conjuntos de datos de múltiples proveedores y usar estos datos para mejorar la inteligencia de negocios y la analítica.",
                "Amazon EMR": "Amazon EMR es una plataforma de gran escala para el procesamiento de datos que utiliza frameworks como Apache Hadoop y Apache Spark. Es fácil de configurar, opera a gran escala y ofrece un costo efectivo para el análisis de grandes volúmenes de datos.",
                "AWS Glue": "AWS Glue es un servicio de integración de datos totalmente administrado que facilita la preparación de datos para el análisis. Proporciona todas las capacidades necesarias para realizar tareas de ETL (extracción, transformación y carga).",
                "Amazon Kinesis": "Amazon Kinesis es una plataforma de transmisión de datos en tiempo real que permite recolectar, procesar y analizar datos en tiempo real. Esto es útil para aplicaciones que requieren monitoreo y análisis en tiempo real.",
                "Amazon MSK": "Amazon Managed Streaming for Apache Kafka (Amazon MSK) es un servicio completamente administrado para Apache Kafka que facilita crear y ejecutar aplicaciones que utilizan Apache Kafka como un repositorio de datos en tiempo real.",
                "Amazon OpenSearch Service": "Amazon OpenSearch Service es un servicio administrado que facilita el despliegue, operación y escalado de clústeres de OpenSearch en la nube. Es ideal para casos de uso como búsqueda de aplicaciones, monitoreo de log y análisis de datos.",
                "Amazon QuickSight": "Amazon QuickSight es un servicio de inteligencia de negocios (BI) escalable, sin servidor, embebible y potenciado por aprendizaje automático (ML) que facilita la creación de paneles interactivos y reportes visuales.",
                "Amazon Redshift": "Amazon Redshift es un servicio de almacenamiento de datos completamente administrado que facilita analizar todos sus datos utilizando SQL estándar y sus herramientas de inteligencia de negocios existentes.",
                "Amazon EventBridge": "Amazon EventBridge es un servicio de bus de eventos que facilita la conexión de aplicaciones mediante el uso de datos de sus propias aplicaciones, aplicaciones SaaS integradas y servicios de AWS.",
                "Amazon SNS": "Amazon Simple Notification Service (SNS) es un servicio de mensajería completamente administrado que facilita el desacoplamiento y la escalabilidad de microservicios, sistemas distribuidos y aplicaciones sin servidor.",
                "Amazon SQS": "Amazon Simple Queue Service (SQS) es un servicio de colas de mensajes que facilita desacoplar y escalar microservicios, sistemas distribuidos y aplicaciones sin servidor.",
                "AWS Step Functions": "AWS Step Functions facilita coordinar múltiples servicios de AWS en flujos de trabajo sin servidor para crear y escalar aplicaciones y microservicios.",
                "Amazon Connect": "Amazon Connect es un servicio de centro de contacto en la nube fácil de usar que facilita a cualquier empresa proporcionar un servicio de atención al cliente superior a un costo más bajo.",
                "Amazon SES": "Amazon Simple Email Service (SES) es un servicio de correo electrónico en la nube rentable y flexible que facilita a los desarrolladores enviar correos electrónicos desde cualquier aplicación.",
                "AWS Billing Conductor": "AWS Billing Conductor es un servicio que facilita la creación de facturas detalladas para sus clientes. Este servicio ayuda a organizar y administrar sus costos y facturas en la nube de manera eficiente.",
                "AWS Budgets": "AWS Budgets facilita crear presupuestos personalizados que alertan cuando sus costos o uso superan los umbrales que ha definido.",
                "AWS Cost and Usage Report": "AWS Cost and Usage Report proporciona los detalles más completos de sus costos y uso de AWS, organizados por su cuenta y agrupados por servicios y etiquetas.",
                "AWS Cost Explorer": "AWS Cost Explorer facilita visualizar, comprender y gestionar sus costos y uso de AWS a lo largo del tiempo.",
                "AWS Marketplace": "AWS Marketplace es un catálogo digital curado que facilita encontrar, comprar, desplegar y gestionar software de terceros y servicios que necesita para construir soluciones en AWS.",
                "AWS Batch": "AWS Batch facilita ejecutar trabajos por lotes a cualquier escala. Puede configurar trabajos por lotes que ejecuten miles de trabajos informáticos a través de máquinas virtuales o instancias de contenedor.",
                "Amazon EC2": "Amazon Elastic Compute Cloud (Amazon EC2) es un servicio web que proporciona capacidad informática redimensionable en la nube. Facilita obtener y configurar capacidad con un mínimo de fricción. Proporciona el control completo sobre sus recursos informáticos y le permite ejecutarlos en el entorno de computación probado de AWS.",
                "AWS Elastic Beanstalk": "AWS Elastic Beanstalk facilita desplegar y escalar aplicaciones y servicios web desarrollados con Java, .NET, PHP, Node.js, Python, Ruby, Go y Docker en servidores familiares como Apache, Nginx, Passenger e IIS.",
                "Amazon Lightsail": "Amazon Lightsail es una forma fácil de comenzar con AWS. Ofrece todo lo necesario para desplegar rápidamente un proyecto: una máquina virtual, almacenamiento basado en SSD, transferencia de datos, gestión de DNS y una dirección IP estática, por un bajo costo mensual.",
                "AWS Local Zones": "AWS Local Zones son un tipo de implementación de infraestructura que sitúa computación, almacenamiento, base de datos y otros servicios de AWS cerca de grandes centros de población, industria y TI para aplicaciones que requieren una latencia de milisegundos de un solo dígito.",
                "AWS Outposts": "AWS Outposts es un servicio que lleva infraestructura y servicios nativos de AWS a prácticamente cualquier centro de datos, espacio de colocación o instalación local.",
                "AWS Wavelength": "AWS Wavelength lleva servicios de computación y almacenamiento de AWS a la red 5G para reducir la latencia y aumentar el rendimiento de las aplicaciones móviles y de dispositivos conectados.",
                "Amazon ECR": "Amazon Elastic Container Registry (Amazon ECR) es un servicio de registro de contenedores Docker completamente administrado que facilita el almacenamiento, la gestión y el despliegue de imágenes de contenedor Docker.",
                "Amazon ECS": "Amazon Elastic Container Service (Amazon ECS) es un servicio de orquestación de contenedores completamente administrado que facilita la ejecución, detención y gestión de contenedores Docker en un clúster de Amazon EC2.",
                "Amazon EKS": "Amazon Elastic Kubernetes Service (Amazon EKS) es un servicio de Kubernetes completamente administrado que facilita ejecutar Kubernetes en AWS sin necesidad de operar su propio plano de control de Kubernetes.",
                "AWS Activate for Startups": "AWS Activate proporciona a las startups recursos como créditos, entrenamiento y soporte para ayudarlas a comenzar y escalar en AWS.",
                "AWS IQ": "AWS IQ facilita encontrar, contratar y pagar expertos certificados por AWS para obtener ayuda inmediata en sus proyectos de AWS.",
                "AWS Managed Services (AMS)": "AWS Managed Services facilita operar su infraestructura de AWS más eficientemente y a escala mediante el uso de las mejores prácticas de AWS.",
                "AWS Support": "AWS Support proporciona diferentes niveles de soporte técnico y de cuenta a clientes de AWS para ayudarlos a planificar, desplegar y operar su infraestructura de AWS.",
                "Amazon Aurora": "Amazon Aurora es una base de datos relacional compatible con MySQL y PostgreSQL, construida para la nube, que combina el rendimiento y la disponibilidad de bases de datos comerciales avanzadas con la simplicidad y el costo de las bases de datos de código abierto.",
                "Amazon DynamoDB": "Amazon DynamoDB es una base de datos NoSQL completamente administrada que proporciona rendimiento rápido y predecible con escalabilidad perfecta.",
                "Amazon MemoryDB for Redis": "Amazon MemoryDB for Redis es un servicio de base de datos en memoria completamente administrado que es compatible con Redis y facilita la creación de aplicaciones altamente disponibles y de baja latencia.",
                "Amazon Neptune": "Amazon Neptune es un servicio de base de datos de grafos completamente administrado que facilita la creación y ejecución de aplicaciones con casos de uso como motores de recomendación, detección de fraude y redes sociales.",
                "Amazon RDS": "Amazon Relational Database Service (Amazon RDS) facilita la configuración, operación y escalado de bases de datos relacionales en la nube.",
                "AWS AppConfig": "AWS AppConfig facilita la entrega rápida y segura de configuraciones en las aplicaciones.",
                "AWS CLI": "AWS Command Line Interface (AWS CLI) es una herramienta unificada para gestionar sus servicios de AWS desde la línea de comandos.",
                "AWS Cloud9": "AWS Cloud9 es un entorno de desarrollo integrado (IDE) basado en la nube que facilita escribir, ejecutar y depurar su código con solo un navegador.",
                "AWS CloudShell": "AWS CloudShell facilita la administración, la experimentación y la interacción con los recursos de AWS mediante una terminal basada en la nube que ya está autenticada con sus credenciales de AWS.",
                "AWS CodeArtifact": "AWS CodeArtifact es un servicio de gestión de artefactos completamente administrado que facilita alojar y compartir repositorios de artefactos de software.",
                "AWS CodeBuild": "AWS CodeBuild es un servicio de integración continua que compila código fuente, ejecuta pruebas y produce paquetes de software que están listos para desplegar.",
                "AWS CodeCommit": "AWS CodeCommit es un servicio de control de versiones que facilita alojar repositorios de Git privados y colaborativos.",
                "AWS CodeDeploy": "AWS CodeDeploy facilita automatizar el despliegue de aplicaciones a una variedad de servicios de computación como Amazon EC2, AWS Lambda y servidores locales.",
                "AWS CodePipeline": "AWS CodePipeline facilita automatizar las fases de construcción, prueba y despliegue de su proceso de liberación de software.",
                "AWS CodeStar": "AWS CodeStar proporciona una interfaz unificada para desarrollar, construir y desplegar aplicaciones en AWS.",
                "AWS X-Ray": "AWS X-Ray facilita analizar y depurar aplicaciones distribuidas en producción, proporcionando una comprensión completa del rendimiento de su aplicación y sus microservicios subyacentes.",
                "Amazon AppStream 2.0": "Amazon AppStream 2.0 es un servicio de transmisión de aplicaciones completamente administrado que facilita la entrega de aplicaciones de escritorio a cualquier dispositivo.",
                "Amazon WorkSpaces": "Amazon WorkSpaces es una solución de escritorio como servicio (DaaS) completamente administrada que facilita proporcionar escritorios basados en la nube a sus usuarios.",
                "Amazon WorkSpaces Web": "Amazon WorkSpaces Web facilita proporcionar acceso seguro a aplicaciones web sin necesidad de administrar y asegurar los dispositivos de usuario.",
                "AWS Amplify": "AWS Amplify facilita construir y desplegar aplicaciones web y móviles completas rápidamente con una infraestructura en la nube escalable y segura.",
                "AWS AppSync": "AWS AppSync facilita crear API GraphQL y gestionar sus datos en tiempo real.",
                "AWS Device Farm": "AWS Device Farm facilita probar aplicaciones web y móviles en una variedad de dispositivos y navegadores reales.",
                "AWS IoT Core": "AWS IoT Core facilita conectar dispositivos IoT a la nube y gestionar de forma segura la comunicación entre ellos.",
                "AWS IoT Greengrass": "AWS IoT Greengrass facilita ejecutar funciones AWS Lambda, contenedores Docker o cualquier ejecutable en dispositivos locales de forma segura.",
                "Amazon Comprehend": "Amazon Comprehend es un servicio de procesamiento de lenguaje natural (NLP) que facilita descubrir información en sus datos de texto.",
                "Amazon Kendra": "Amazon Kendra es un servicio de búsqueda empresarial potenciado por aprendizaje automático que facilita encontrar la información dentro de su organización.",
                "Amazon Lex": "Amazon Lex facilita construir interfaces de conversación en cualquier aplicación usando voz y texto.",
                "Amazon Polly": "Amazon Polly es un servicio que convierte texto en habla realista, facilitando la creación de aplicaciones que hablan y la creación de categorías enteramente nuevas de productos habilitados para voz.",
                "Amazon Rekognition": "Amazon Rekognition facilita agregar análisis de imágenes y videos a sus aplicaciones.",
                "Amazon SageMaker": "Amazon SageMaker facilita construir, entrenar y desplegar modelos de aprendizaje automático (ML) a cualquier escala.",
                "Amazon Textract": "Amazon Textract facilita extraer texto y datos de documentos escaneados de forma automática.",
                "Amazon Transcribe": "Amazon Transcribe facilita agregar capacidades de conversión de voz a texto a sus aplicaciones.",
                "Amazon Translate": "Amazon Translate facilita traducir texto entre diferentes idiomas de forma automática.",
                "AWS Auto Scaling": "AWS Auto Scaling facilita configurar escalado automático para sus recursos de AWS.",
                "AWS CloudFormation": "AWS CloudFormation facilita modelar y configurar sus recursos de AWS para que pueda pasar menos tiempo gestionando esos recursos y más tiempo centrado en sus aplicaciones.",
                "AWS CloudTrail": "AWS CloudTrail facilita la gobernanza, el cumplimiento y la auditoría operativa de su cuenta de AWS.",
                "Amazon CloudWatch": "Amazon CloudWatch facilita monitorear y gestionar sus aplicaciones y servicios en AWS y localmente.",
                "AWS Compute Optimizer": "AWS Compute Optimizer facilita recomendar recursos de cómputo óptimos para sus cargas de trabajo para mejorar el rendimiento y reducir los costos.",
                "AWS Config": "AWS Config facilita evaluar, auditar y evaluar las configuraciones de sus recursos de AWS.",
                "AWS Control Tower": "AWS Control Tower facilita configurar y gobernar un entorno de múltiples cuentas de AWS seguro y bien arquitectado.",
                "AWS Health Dashboard": "AWS Health Dashboard proporciona visibilidad a eventos y recomendaciones de AWS para ayudar a gestionar su salud operativa.",
                "AWS Launch Wizard": "AWS Launch Wizard facilita desplegar aplicaciones de terceros en AWS con prácticas recomendadas.",
                "AWS License Manager": "AWS License Manager facilita gestionar sus licencias de software en AWS y sus entornos locales.",
                "AWS Management Console": "AWS Management Console facilita gestionar sus recursos de AWS con una interfaz web sencilla y gráfica.",
                "AWS Organizations": "AWS Organizations facilita gestionar y gobernar sus entornos de AWS a medida que escala y crece su negocio.",
                "AWS Resource Groups and Tag Editor": "AWS Resource Groups and Tag Editor facilita agrupar y gestionar recursos de AWS con etiquetas.",
                "AWS Service Catalog": "AWS Service Catalog facilita crear y gestionar catálogos de servicios de TI aprobados en AWS.",
                "AWS Systems Manager": "AWS Systems Manager facilita ver y controlar su infraestructura de AWS a medida que crece y opera.",
                "AWS Trusted Advisor": "AWS Trusted Advisor facilita optimizar su infraestructura de AWS, mejorar la seguridad y el rendimiento, y reducir costos.",
                "AWS Well-Architected Tool": "AWS Well-Architected Tool facilita revisar el estado de sus cargas de trabajo y comparar las mejores prácticas arquitectónicas de AWS.",
                "AWS Application Discovery Service": "AWS Application Discovery Service facilita planificar proyectos de migración recopilando información sobre sus recursos locales.",
                "AWS Application Migration Service": "AWS Application Migration Service facilita migrar aplicaciones locales a AWS con interrupción mínima.",
                "AWS Database Migration Service (AWS DMS)": "AWS Database Migration Service facilita migrar bases de datos a AWS de manera rápida y segura.",
                "AWS Migration Hub": "AWS Migration Hub facilita planificar, realizar un seguimiento y gestionar sus migraciones de aplicaciones a AWS.",
                "AWS Schema Conversion Tool (AWS SCT)": "AWS Schema Conversion Tool facilita convertir esquemas de bases de datos y dependencias de una base de datos origen a una base de datos destino compatible con AWS.",
                "AWS Snow Family": "AWS Snow Family facilita migrar grandes volúmenes de datos dentro y fuera de AWS utilizando dispositivos de almacenamiento portátiles.",
                "AWS Transfer Family": "AWS Transfer Family facilita transferir archivos de forma segura a Amazon S3 o Amazon EFS.",
                "Amazon API Gateway": "Amazon API Gateway facilita crear, publicar, mantener, monitorear y asegurar API a cualquier escala.",
                "Amazon CloudFront": "Amazon CloudFront es una red de entrega de contenido (CDN) que facilita entregar datos, videos, aplicaciones y API a sus usuarios globalmente con baja latencia y altas velocidades de transferencia.",
                "AWS Direct Connect": "AWS Direct Connect facilita establecer una conexión de red dedicada desde sus instalaciones a AWS.",
                "AWS Global Accelerator": "AWS Global Accelerator facilita mejorar la disponibilidad y el rendimiento de sus aplicaciones globales mediante rutas optimizadas y controladas por la red global de AWS.",
                "Amazon Route 53": "Amazon Route 53 facilita gestionar tráfico de DNS para sus dominios, proporcionando alta disponibilidad y escalabilidad.",
                "Amazon VPC": "Amazon Virtual Private Cloud (Amazon VPC) facilita lanzar recursos de AWS en una red virtual que usted define.",
                "AWS VPN": "AWS VPN facilita establecer conexiones de red seguras y cifradas entre sus redes locales o sucursales y la infraestructura global de AWS.",
                "AWS Artifact": "AWS Artifact facilita acceder a informes y documentos de cumplimiento de AWS.",
                "AWS Audit Manager": "AWS Audit Manager facilita auditar su uso de AWS para facilitar cumplir con sus requisitos de conformidad.",
                "AWS Certificate Manager (ACM)": "AWS Certificate Manager facilita aprovisionar, gestionar y desplegar certificados SSL/TLS para su uso con servicios de AWS.",
                "AWS CloudHSM": "AWS CloudHSM facilita generar y usar claves criptográficas con módulos de seguridad de hardware (HSM) en la nube.",
                "Amazon Cognito": "Amazon Cognito facilita agregar registro de usuario, inicio de sesión y control de acceso a sus aplicaciones web y móviles.",
                "Amazon Detective": "Amazon Detective facilita analizar e investigar posibles problemas de seguridad o actividades sospechosas en sus recursos de AWS.",
                "AWS Directory Service": "AWS Directory Service facilita configurar y gestionar directorios en la nube.",
                "AWS Firewall Manager": "AWS Firewall Manager facilita configurar y gestionar reglas de firewall en sus cuentas y aplicaciones.",
                "Amazon GuardDuty": "Amazon GuardDuty facilita la detección continua de amenazas en su cuenta de AWS y la infraestructura de datos.",
                "AWS IAM": "AWS Identity and Access Management (IAM) facilita gestionar el acceso a los servicios y recursos de AWS de forma segura.",
                "AWS IAM Identity Center (AWS Single Sign-On)": "AWS IAM Identity Center facilita la gestión del acceso a múltiples cuentas de AWS y aplicaciones empresariales.",
                "Amazon Inspector": "Amazon Inspector facilita analizar la configuración de las instancias de Amazon EC2 para identificar vulnerabilidades o desviaciones respecto a las mejores prácticas.",
                "AWS Key Management Service (AWS KMS)": "AWS Key Management Service facilita crear y gestionar claves criptográficas para proteger sus datos.",
                "Amazon Macie": "Amazon Macie facilita descubrir, clasificar y proteger datos sensibles almacenados en Amazon S3.",
                "AWS Network Firewall": "AWS Network Firewall facilita desplegar y gestionar un firewall de red esencial para proteger su infraestructura de AWS.",
                "AWS Resource Access Manager (AWS RAM)": "AWS Resource Access Manager facilita compartir recursos de AWS con otras cuentas de AWS.",
                "AWS Secrets Manager": "AWS Secrets Manager facilita rotar, gestionar y recuperar credenciales de bases de datos, claves de API y otros secretos.",
                "AWS Security Hub": "AWS Security Hub facilita unificar y gestionar alertas de seguridad y automatizar el cumplimiento de las mejores prácticas.",
                "AWS Shield": "AWS Shield facilita proteger contra ataques de denegación de servicio distribuido (DDoS) en sus aplicaciones.",
                "AWS WAF": "AWS Web Application Firewall facilita proteger sus aplicaciones web de ataques comunes que pueden afectar su disponibilidad, comprometer su seguridad o consumir recursos excesivos.",
                "AWS Fargate": "AWS Fargate facilita ejecutar contenedores sin necesidad de gestionar servidores o clusters de Amazon EC2.",
                "AWS Lambda": "AWS Lambda facilita ejecutar código sin aprovisionar o gestionar servidores. Paga solo por el tiempo de cómputo que consume.",
                "AWS Backup": "AWS Backup facilita centralizar y automatizar la protección de datos en servicios de AWS.",
                "Amazon EBS": "Amazon Elastic Block Store (Amazon EBS) proporciona almacenamiento en bloque persistente para instancias de Amazon EC2.",
                "Amazon EFS": "Amazon Elastic File System (Amazon EFS) proporciona almacenamiento de archivos escalable y completamente administrado para uso con servicios en la nube de AWS y recursos locales.",
                "AWS Elastic Disaster Recovery": "AWS Elastic Disaster Recovery facilita minimizar la interrupción del negocio y reducir el tiempo de inactividad con recuperación ante desastres.",
                "Amazon FSx": "Amazon FSx facilita lanzar y ejecutar sistemas de archivos de terceros en AWS.",
                "Amazon S3": "Amazon Simple Storage Service (Amazon S3) facilita almacenar y recuperar cualquier cantidad de datos desde cualquier lugar.",
                "Amazon S3 Glacier": "Amazon S3 Glacier facilita el almacenamiento seguro y de bajo costo para el archivado y la copia de seguridad de datos.",
                "Modelo de responsabilidad compartida de AWS": "El Modelo de Responsabilidad Compartida de AWS es un marco que define claramente las responsabilidades de AWS y del cliente en cuanto a la seguridad y el cumplimiento de los servicios en la nube Este modelo es fundamental para entender qué aspectos de la seguridad son manejados por AWS y cuáles deben ser gestionados por el cliente. AWS es responsable de proteger la infraestructura que ejecuta todos los servicios que se ofrecen en la nube de AWS Esta infraestructura está compuesta por el hardware software redes y las instalaciones que ejecutan los servicios de la nube de AWS Algunas de las responsabilidades específicas de AWS incluyen la seguridad física de los centros de datos AWS gestiona la seguridad de los centros de datos donde se alojan los servicios en la nube el hardware y software de la infraestructura global AWS es responsable de la gestión de los componentes físicos y virtuales necesarios para la operación de sus servicios y las redes y conectividad global AWS se asegura de que las conexiones de red y la infraestructura global sean seguras y estén disponibles. Los clientes de AWS son responsables de la seguridad de todo lo que implementen y gestionen dentro de los servicios de AWS Esto incluye la configuración y el uso seguro de los servicios en la nube Algunas de las responsabilidades específicas del cliente incluyen la gestión de datos los clientes son responsables de la protección de sus datos incluyendo la encriptación y el control de acceso la configuración de la red los clientes deben configurar adecuadamente la red incluidos los firewalls y las reglas de seguridad la gestión de identidades y accesos los clientes deben gestionar el acceso a sus servicios y recursos utilizando herramientas como AWS Identity and Access Management (IAM) los sistemas operativos y aplicaciones los clientes deben mantener y actualizar los sistemas operativos y las aplicaciones que ejecutan en la infraestructura de AWS y la seguridad de los endpoints los clientes son responsables de la seguridad de los dispositivos y puntos de acceso que interactúan con los servicios de AWS",
                "Arquitectos de soluciones de AWS": "Los arquitectos de soluciones de AWS son profesionales que diseñan y gestionan soluciones en la nube utilizando los servicios de Amazon Web Services Su objetivo principal es optimizar el uso de la nube de AWS para satisfacer las necesidades empresariales y técnicas de una organización Los arquitectos de soluciones crean diseños de arquitectura en la nube que son escalables seguros y rentables Esto incluye seleccionar los servicios adecuados de AWS y definir cómo interactuarán entre sí Ayudan a las organizaciones a optimizar los costos al seleccionar las instancias y servicios más eficientes y al diseñar soluciones que minimicen el desperdicio de recursos Aseguran que las soluciones cumplan con los estándares de seguridad mediante la implementación de buenas prácticas de seguridad y conformidad con las normativas relevantes Los arquitectos de soluciones también son responsables de la resiliencia y disponibilidad de las aplicaciones diseñando arquitecturas que puedan recuperarse rápidamente de fallos y minimizando el tiempo de inactividad Además proporcionan orientación técnica y asesoramiento a los equipos de desarrollo y operaciones para garantizar que las implementaciones sean exitosas y eficientes Esto incluye la documentación de las arquitecturas y la capacitación de los equipos sobre cómo utilizar y mantener los sistemas en la nube de AWS Los arquitectos de soluciones de AWS utilizan herramientas y servicios como AWS CloudFormation AWS Well-Architected Framework y AWS Trusted Advisor para ayudar a diseñar y evaluar arquitecturas en la nube y garantizar que cumplan con las mejores prácticas En resumen los arquitectos de soluciones de AWS juegan un papel crucial en el diseño implementación y mantenimiento de soluciones en la nube asegurando que sean eficientes seguras y alineadas con los objetivos empresariales",
                "Infraestructura global de AWS (por ejemplo, Regiones de AWS, Zonas de disponibilidad)": "La infraestructura global de AWS está diseñada para ofrecer una alta disponibilidad redundancia y baja latencia Esta infraestructura se organiza en regiones y zonas de disponibilidad para proporcionar una robusta plataforma en la nube que permita a los clientes desplegar aplicaciones y servicios de manera confiable y segura Las regiones de AWS son áreas geográficas separadas que contienen múltiples zonas de disponibilidad Cada región es completamente independiente de las demás en términos de ubicación geográfica fuentes de energía y conectividad AWS actualmente tiene decenas de regiones en todo el mundo lo que permite a los clientes desplegar aplicaciones cerca de sus usuarios para reducir la latencia y cumplir con requisitos locales de residencia de datos Dentro de cada región hay varias zonas de disponibilidad (Availability Zones AZ) Cada zona de disponibilidad es un centro de datos discreto con energía refrigeración y conectividad redundantes Las zonas de disponibilidad están interconectadas con enlaces de baja latencia alta velocidad y redundancia para facilitar la replicación de datos y la alta disponibilidad de las aplicaciones Al desplegar recursos en múltiples zonas de disponibilidad los clientes pueden diseñar sus aplicaciones para que sean tolerantes a fallos y continúen operando en caso de que una zona de disponibilidad experimente problemas La presencia global de regiones permite a los clientes desplegar aplicaciones cerca de sus usuarios finales lo que reduce la latencia y mejora la experiencia del usuario Algunas organizaciones tienen requisitos específicos para mantener los datos dentro de ciertos límites geográficos Las múltiples regiones de AWS permiten cumplir con estos requisitos al seleccionar la región adecuada para almacenar y procesar datos La amplia infraestructura de AWS permite a los clientes escalar sus aplicaciones y servicios de manera global aprovechando la capacidad de múltiples regiones y zonas de disponibilidad para manejar grandes volúmenes de tráfico y cargas de trabajo La infraestructura global de AWS compuesta por regiones y zonas de disponibilidad proporciona una plataforma robusta y flexible que permite a los clientes desplegar aplicaciones con alta disponibilidad baja latencia y conformidad con los requisitos de residencia de datos",
                "Bases de datos, que es NoSQL y SQL": "Las bases de datos son sistemas de software diseñados para gestionar almacenar y recuperar datos de manera eficiente Existen dos tipos principales de bases de datos SQL y NoSQL Las bases de datos SQL (Structured Query Language) son bases de datos relacionales que utilizan un modelo de datos estructurado basado en tablas Cada tabla se compone de filas y columnas donde las columnas representan atributos y las filas representan registros de datos Las bases de datos SQL son conocidas por su capacidad para manejar transacciones complejas y mantener la integridad de los datos AWS ofrece servicios de bases de datos SQL como Amazon RDS que soporta motores de bases de datos como MySQL PostgreSQL y SQL Server Por otro lado las bases de datos NoSQL están diseñadas para manejar grandes volúmenes de datos no estructurados y semiestructurados No requieren un esquema fijo y son ideales para aplicaciones que requieren escalabilidad horizontal y flexibilidad AWS ofrece Amazon DynamoDB como su servicio NoSQL altamente escalable y de baja latencia DynamoDB es adecuado para aplicaciones que necesitan alto rendimiento y disponibilidad como aplicaciones web juegos y dispositivos IoT En resumen las bases de datos SQL son ideales para aplicaciones con datos estructurados y relaciones complejas mientras que las bases de datos NoSQL son más adecuadas para aplicaciones que requieren escalabilidad flexibilidad y alta velocidad de procesamiento",
                "AWS Storage Gateway": "AWS Storage Gateway facilita el acceso seguro y eficiente a los servicios de almacenamiento en la nube de AWS desde sus instalaciones locales."
            }
        }
    };

    const handleLevelClick = (level) => {
        setSelectedLevel(level);
        setExpandedCategory(null);
        setExpandedSubCategory(null);
        setServiceContent('');
    };

    const handleCategoryClick = (category) => {
        setExpandedCategory(expandedCategory === category ? null : category);
        setExpandedSubCategory(null);
    };

    const handleSubCategoryClick = (subCategory) => {
        setExpandedSubCategory(expandedSubCategory === subCategory ? null : subCategory);
    };

    const handleServiceClick = (service) => {
        setServiceContent(service);
    };

    return (
        <section id="documentation">
            <h2>Documentación</h2>
            <p>En esta sección encontrarás información detallada sobre los servicios y conceptos de AWS que son relevantes para los exámenes de la certificación de Cloud Practitioner y próximamente de Solutions Architect Associate. Selecciona el nivel de certificación y explora los servicios disponibles en cada categoría.</p>
            <div className="tabs">
                <button onClick={() => handleLevelClick('CP')}>Servicios Cloud Practitioner</button>
            </div>
            <div className="documentation-content">
                <div className="sidebar">
                    {selectedLevel && levels[selectedLevel]?.categories && Object.keys(levels[selectedLevel].categories).map(category => (
                        <div key={category}>
                            <h3 onClick={() => handleCategoryClick(category)}>{category}</h3>
                            {expandedCategory === category && (
                                <div>
                                    {Object.keys(levels[selectedLevel].categories[category]).map(subCategory => (
                                        <div key={subCategory}>
                                            <h4 onClick={() => handleSubCategoryClick(subCategory)}>{subCategory}</h4>
                                            {expandedSubCategory === subCategory && (
                                                <ul>
                                                    {levels[selectedLevel].categories[category][subCategory].map(service => (
                                                        <li key={service} onClick={() => handleServiceClick(levels[selectedLevel].services[service])}>{service}</li>
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
                    {serviceContent}
                </div>
            </div>
        </section>
    );
}

export default Documentation;
