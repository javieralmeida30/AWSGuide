import React, { useState } from "react";
import "./Documentation.css";

// Importar las imágenes locales
import ec2Image from "../assets/ec2.png";
import mlearning from "../assets/mlearning.jpeg";
import spot from "../assets/spot-savings-chart.png";
import api from "../assets/api.png";
import migration from "../assets/migration.svg";
import AWSCAF from "../assets/AWS Cloud Adoption Framework (AWS CAF).jpeg";
import compliance from "../assets/compliance.jpeg";
import planes from "../assets/planes.jpeg";
import AWSPricingCalculator from "../assets/AWS Pricing Calculator.png";
import sdk from "../assets/sdk.png";
import waframework from "../assets/waframework.png";
import seguridad from "../assets/seguridad.png";
import arquitecto from "../assets/arquitecto.png";
import athena from "../assets/athena.png";
import pass from "../assets/pass.png";
import infraglobal from "../assets/infraglobal.jpg";
import nosqlsql from "../assets/nosqlsql.avif";
import glue from "../assets/glue.png";
import kinesis from "../assets/kinesis.png";
import quicksight from "../assets/quicksight.jpg";
import redshift from "../assets/redshift.png";
import aurorards from "../assets/aurorards.png";
import DynamoDB from "../assets/dynamodb.png";
import cloud9 from "../assets/cloud9.png";
import cloudshell from "../assets/cloudshell.png";
import awscli from "../assets/awcli.png";
import eventbridge1 from "../assets/eventbridge1.png";
import kubernetes from "../assets/kubernetes.webp";
import sqs from "../assets/sqs.png";
import billing from "../assets/billing.jpg";
import marketplace from "../assets/marketplace.webp";
import costandusage from "../assets/costandusage.png";
import budgets from "../assets/budgets.png";
import costexplorer from "../assets/costexplorer.png";
import stepf from "../assets/stepf.png";
import amazonec2 from "../assets/amazonec2.png";
import elasticbeanstalk from "../assets/elasticbeanstalk.png";
import ecs from "../assets/ecs.png";
import eks from "../assets/eks.png";
import ecr from "../assets/ecr.png";
import ebs from "../assets/ebs.png";
import efs from "../assets/efs.png";
import fsx from "../assets/fsx.png";
import s3detail from "../assets/s3detail.jpg";
import recovery from "../assets/recovery.png";
import backup from "../assets/backup.png";
import storagegateway from "../assets/storagegateway.png";
import neptune from "../assets/neptune.png";
import amplify from "../assets/amplify.png";
import appsync from "../assets/appsync.png";
import lambda from "../assets/lambda.png";
import fargate from "../assets/fargate.png";
import memorydb from "../assets/memorydb.jpg";
import s3glacier from "../assets/s3glacier.webp";
import amazonvpc from "../assets/amazonvpc.png";
import apigateway from "../assets/apigateway.png";
import awsvpn from "../assets/awsvpn.png";
import cloudfront from "../assets/cloudfront.png";
import directconnect from "../assets/directconnect.png";
import route53 from "../assets/route53.png";
import globalaccelerator from "../assets/globalaccelerator.png";
import acm from "../assets/acm.png";
import artifact from "../assets/artifact.png";
import cognito from "../assets/cognito.png";
import hsm from "../assets/hsm.png";
import hub from "../assets/hub.png";
import duty from "../assets/duty.png";
import iam from "../assets/iam.png";
import inspector from "../assets/inspector.png";
import kms from "../assets/kms.png";
import macie from "../assets/macie.png";
import secretmanager from "../assets/secretmanager.png";
import shield from "../assets/shield.png";
import waf from "../assets/waf.png";


function Documentation() {
  const [activeTab, setActiveTab] = useState("Tecnologías y Conceptos");
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [serviceContent, setServiceContent] = useState({
    description: "",
    imageUrl: "",
  });

  const levels = {
    CP: {
      categories: {
        "Tecnologías y Conceptos": {
          General: [
            "APIs",
            "Beneficios de migrar a la nube de AWS",
            "AWS Cloud Adoption Framework (AWS CAF)",
            "AWS Compliance",
            "AWS Pricing Calculator",
            "AWS SDKs",
            "AWS Support Center",
            "Planes de soporte de AWS",
            "AWS Well-Architected Framework",
          ],
          Cómputo: [
            "Tipos de instancias de Amazon EC2 (por ejemplo, Reserved, On-Demand, Spot)",
            "Contenedores, Clústeres, Imágenes, Kubernetes",
          ],
          "Gestión y Gobernanza": [
            "Tipos de modelos de servicio: PaaS, IaaS, SaaS, FaaS, BaaS",
          ],
          "Machine Learning": ["Machine learning"],
          Seguridad: [
            "Modelo de responsabilidad compartida de AWS",
            "Arquitectos de soluciones de AWS",
          ],
          "Infraestructura Global": [
            "Infraestructura global de AWS (por ejemplo, Regiones de AWS, Zonas de disponibilidad)",
          ],
          "Bases de Datos": ["Bases de datos, que es NoSQL y SQL"],
        },
        "Servicios de AWS": {
          Cómputo: [
            "AWS Batch",
            "Amazon EC2",
            "AWS Elastic Beanstalk",
            "Amazon Lightsail",
            "AWS Outposts",
          ],
          Serverless: ["AWS Fargate", "AWS Lambda"],
          Almacenamiento: [
            "AWS Backup",
            "Amazon EBS",
            "Amazon EFS",
            "AWS Elastic Disaster Recovery",
            "Amazon FSx",
            "Amazon S3",
            "Amazon S3 Glacier",
            "AWS Storage Gateway",
          ],
          "Redes y entrega de contenido": [
            "Amazon API Gateway",
            "Amazon CloudFront",
            "AWS Direct Connect",
            "AWS Global Accelerator",
            "Amazon Route 53",
            "Amazon VPC",
            "AWS VPN",
          ],
          "Seguridad, identidad y cumplimiento": [
            "AWS Artifact",
            "AWS Certificate Manager (ACM)",
            "AWS CloudHSM",
            "Amazon Cognito",
            "Amazon GuardDuty",
            "AWS IAM",
            "Amazon Inspector",
            "AWS Key Management Service (AWS KMS)",
            "Amazon Macie",
            "AWS Secrets Manager",
            "AWS Security Hub",
            "AWS Shield",
            "AWS WAF",
          ],
          Contenedores: ["Amazon ECR", "Amazon ECS", "Amazon EKS"],
          "Bases de Datos": [
            "Amazon Aurora",
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon MemoryDB for Redis",
            "Amazon Neptune",
          ],
          Analítica: [
            "Amazon Athena",
            "AWS Data Exchange",
            "Amazon EMR",
            "AWS Glue",
            "Amazon Kinesis",
            "Amazon MSK",
            "Amazon OpenSearch Service",
            "Amazon QuickSight",
            "Amazon Redshift",
          ],
          "Integración de aplicaciones": [
            "Amazon EventBridge",
            "Amazon SNS",
            "Amazon SQS",
            "AWS Step Functions",
            "Amazon SES",
          ],
          "Gestión financiera en la nube": [
            "AWS Billing Conductor",
            "AWS Budgets",
            "AWS Cost and Usage Report",
            "AWS Cost Explorer",
            "AWS Marketplace",
          ],
          "Migración y Transferencia": [
            "AWS Database Migration Service (AWS DMS)",
            "AWS Migration Hub",
            "AWS Schema Conversion Tool (AWS SCT)",
            "AWS Snow Family",
            "AWS Transfer Family",
          ],
          "Gestión y Gobernanza": [
            "AWS Auto Scaling",
            "AWS CloudFormation",
            "AWS CloudTrail",
            "Amazon CloudWatch",
            "AWS Compute Optimizer",
            "AWS Config",
            "AWS Control Tower",
            "AWS Health Dashboard",
            "AWS Management Console",
            "AWS Organizations",
            "AWS Service Catalog",
            "AWS Systems Manager",
            "AWS Trusted Advisor",
            "AWS Well-Architected Tool",
          ],
          "Herramientas de desarrollo": [
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
            "AWS X-Ray",
          ],
          "Frontend Web and Mobile": ["AWS Amplify", "AWS AppSync"],
          "Machine Learning": [
            "Amazon Comprehend",
            "Amazon Kendra",
            "Amazon Lex",
            "Amazon Polly",
            "Amazon Rekognition",
            "Amazon SageMaker",
            "Amazon Textract",
            "Amazon Transcribe",
            "Amazon Translate",
          ],
        },
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
          imageUrl: pass,
        },
        "Tipos de instancias de Amazon EC2 (por ejemplo, Reserved, On-Demand, Spot)":
          {
            description: `
                    <p>Amazon EC2 ofrece varios tipos de instancias diseñadas para diferentes necesidades:</p>
                    <ul>
                        <li>
                            <h3>On-Demand</h3>
                            <p>Permite pagar por capacidad de cómputo por hora o por segundo sin compromisos a largo plazo. Es ideal para aplicaciones con cargas de trabajo variables y para desarrollo y prueba de aplicaciones.</p>
                        </li>
                        <li>
                            <h3>Reserved</h3>
                            <p>Ofrece descuentos significativos cuando te comprometes a usar una instancia por uno o tres años. Es ideal para aplicaciones estables y predecibles.</p>
                        </li>
                        <li>
                            <h3>Spot</h3>
                            <p>Permite aprovechar la capacidad no utilizada en AWS con descuentos de hasta el 90%. Perfecto para aplicaciones que pueden tolerar interrupciones como procesamiento por lotes y análisis de big data.</p>
                        </li>
                        <li>
                            <h3>Dedicated Hosts</h3>
                            <p>Permiten alquilar un servidor físico dedicado para su uso exclusivo, proporcionando visibilidad completa y control sobre la ubicación del servidor y los recursos.</p>
                        </li>
                        <li>
                            <h3>Dedicated Instances</h3>
                            <p>Instancias físicas dedicadas a un solo cliente, sin visibilidad sobre la ubicación del servidor.</p>
                        </li>
                        <li>
                            <h3>Savings Plans</h3>
                            <p>Modelo de precios flexible que ofrece ahorro significativo en AWS en uso de cómputo a cambio de un compromiso de uso por uno o tres años.</p>
                        </li>
                        <li>
                            <h3>Spot Fleet</h3>
                            <p>Una colección de instancias Spot que permite usar y administrar múltiples tipos de instancias de Amazon EC2 y solicitar capacidad para escalabilidad automática.</p>
                        </li>
                    </ul>
                `,
            imageUrl: spot,
          },
        "Contenedores, Clústeres, Imágenes, Kubernetes": {
          description: `
          <p>En el ámbito de la computación en la nube y el desarrollo de software, los contenedores, clústeres, imágenes y Kubernetes juegan un papel fundamental. Estos conceptos permiten desplegar, gestionar y escalar aplicaciones de manera eficiente, asegurando portabilidad, consistencia y utilización óptima de recursos.</p>
          
          <h4>Contenedores:</h4>
          <p>Los contenedores son unidades estandarizadas de software que empaquetan código y todas sus dependencias, asegurando que la aplicación se ejecute de manera consistente en cualquier entorno. AWS ofrece múltiples servicios para gestionar contenedores, incluyendo:</p>
          <ul>
              <li><strong>Amazon Elastic Container Service (ECS):</strong> Servicio de orquestación de contenedores completamente administrado que soporta Docker, permitiendo ejecutar y escalar aplicaciones en contenedores fácilmente.</li>
              <li><strong>Amazon Elastic Kubernetes Service (EKS):</strong> Servicio administrado de Kubernetes que facilita ejecutar Kubernetes en AWS sin la necesidad de instalar y operar un clúster de Kubernetes por cuenta propia.</li>
              <li><strong>AWS Fargate:</strong> Motor de cómputo para ECS y EKS que permite ejecutar contenedores sin necesidad de gestionar servidores, proporcionando una experiencia sin servidor para la ejecución de contenedores.</li>
          </ul>
          
          <h4>Clústeres:</h4>
          <p>Un clúster es un grupo de instancias de computación que trabajan juntas para ejecutar aplicaciones en contenedores. AWS proporciona herramientas para la gestión eficiente de clústeres:</p>
          <ul>
              <li><strong>Auto Scaling:</strong> Permite ajustar automáticamente el número de instancias en un clúster en función de la demanda, asegurando que siempre haya suficiente capacidad para manejar las cargas de trabajo.</li>
              <li><strong>Amazon EC2 Auto Scaling Groups:</strong> Facilita la creación de grupos de instancias que pueden escalar automáticamente, optimizando el costo y el rendimiento del clúster.</li>
              <li><strong>Amazon CloudWatch:</strong> Proporciona monitoreo y alertas para las métricas del clúster, ayudando a identificar y resolver problemas rápidamente.</li>
          </ul>
          
          <h4>Imágenes:</h4>
          <p>Una imagen de contenedor es una plantilla estática que contiene todo lo necesario para ejecutar una aplicación: código, runtime, bibliotecas y configuraciones. Las imágenes se crean utilizando Docker y se almacenan en registros de contenedores:</p>
          <ul>
              <li><strong>Amazon Elastic Container Registry (ECR):</strong> Registro de contenedores completamente administrado que facilita almacenar, gestionar y desplegar imágenes de contenedores de manera segura y escalable.</li>
              <li><strong>Docker Hub:</strong> Registro de contenedores popular que permite compartir y distribuir imágenes de contenedores públicamente o en privado.</li>
          </ul>
          
          <h4>Kubernetes:</h4>
          <p>Kubernetes es una plataforma de orquestación de contenedores de código abierto que automatiza la implementación, escalado y gestión de aplicaciones en contenedores. Proporciona un marco para ejecutar sistemas distribuidos de manera resiliente, gestionando el aprovisionamiento de recursos, la recuperación de fallos, la implementación de actualizaciones y el escalado de aplicaciones.</p>
          <p>Características clave de Kubernetes incluyen:</p>
          <ul>
              <li><strong>Automatización del Despliegue:</strong> Kubernetes automatiza el despliegue y la replicación de contenedores, asegurando que las aplicaciones estén siempre disponibles y sean escalables según la demanda.</li>
              <li><strong>Gestión de Clústeres:</strong> Proporciona herramientas para gestionar clústeres de nodos, asegurando la distribución equilibrada de cargas de trabajo y la recuperación automática de fallos.</li>
              <li><strong>Escalado Automático:</strong> Ajusta automáticamente la cantidad de contenedores en función de la carga de trabajo y las métricas definidas por el usuario.</li>
              <li><strong>Actualizaciones Continuas:</strong> Permite realizar actualizaciones continuas de aplicaciones sin tiempo de inactividad mediante estrategias de despliegue como rolling updates y canary deployments.</li>
              <li><strong>Self-Healing:</strong> Detecta y reemplaza automáticamente contenedores fallidos o no saludables, manteniendo la salud del sistema.</li>
          </ul>
          <h4>Ejemplo Práctico:</h4>
          <p>Imagina que desarrollas una aplicación web moderna que utiliza microservicios para diferentes funcionalidades (autenticación, pagos, notificaciones). Puedes utilizar Docker para crear contenedores para cada microservicio, almacenarlos en Amazon ECR, y desplegarlos en un clúster de EKS.</p>
        `,
          imageUrl: kubernetes,
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
          imageUrl: mlearning,
        },
        APIs: {
          description:
            "Las APIs (Interfaces de Programación de Aplicaciones) permiten la comunicación entre diferentes sistemas de software mediante reglas y definiciones; por ejemplo, en AWS, las APIs se utilizan ampliamente para interactuar con servicios como Amazon S3, donde una solicitud HTTP puede listar los objetos almacenados en un bucket.",
          imageUrl: api,
        },
        "Beneficios de migrar a la nube de AWS": {
          description:
            "Migrar a la nube de AWS ofrece numerosos beneficios, incluyendo escalabilidad, flexibilidad, reducción de costos, mayor seguridad, alta disponibilidad, recuperación ante desastres, colaboración mejorada, acceso global, actualizaciones automáticas, y acceso a una amplia gama de servicios innovadores que pueden acelerar la transformación digital; por ejemplo, las organizaciones pueden utilizar Amazon S3 para almacenar y recuperar datos de manera eficiente, Amazon EC2 para ajustar automáticamente la capacidad de cómputo según la demanda, y AWS Lambda para ejecutar código sin gestionar servidores, mejorando así la agilidad, la eficiencia operativa, la capacidad de respuesta al mercado, y la toma de decisiones basada en datos.",
          imageUrl: migration,
        },
        "AWS Cloud Adoption Framework (AWS CAF)": {
          description:
            "El Marco de Adopción de la Nube de AWS (AWS CAF) proporciona una guía completa para ayudar a las organizaciones a planificar y ejecutar su adopción de la nube, incluyendo perspectivas sobre negocios, personas, gobernanza, plataforma, seguridad y operaciones, y proporciona herramientas para identificar brechas y desarrollar planes de acción; por ejemplo, AWS CAF ayuda a definir una estrategia de negocio alineada con objetivos de la nube, establecer un plan de gobernanza para controlar y gestionar los recursos, y diseñar una arquitectura de seguridad robusta para proteger los datos y cumplir con las regulaciones.",
          imageUrl: AWSCAF,
        },
        "AWS Compliance": {
          description:
            "AWS Compliance asegura que los servicios de AWS cumplan con una amplia gama de estándares y certificaciones de cumplimiento global, como PCI-DSS para la seguridad de datos de tarjetas de crédito, HIPAA para la protección de datos de salud, GDPR para la privacidad de datos en la Unión Europea, y SOC 1, 2, y 3 para controles de servicios. Por ejemplo, las organizaciones pueden utilizar Amazon RDS para almacenar datos de clientes con la tranquilidad de que cumple con las normativas necesarias, y AWS Artifact proporciona acceso a informes de cumplimiento y certificaciones que facilitan la verificación de estas conformidades.",
          imageUrl: compliance,
        },
        "AWS Knowledge Center": {
          description:
            "El Centro de Conocimiento de AWS es una base de datos de artículos, preguntas frecuentes y recursos de ayuda que proporciona respuestas a preguntas comunes y soluciones a problemas técnicos relacionados con los servicios de AWS. Es un recurso valioso para resolver problemas técnicos y obtener conocimientos sobre las mejores prácticas.",
          imageUrl: "",
        },
        "AWS Pricing Calculator": {
          description:
            "AWS Pricing Calculator permite a los usuarios estimar los costos mensuales de AWS basados en sus necesidades específicas. Los usuarios pueden seleccionar y configurar diversos servicios de AWS, como EC2 para instancias de cómputo, S3 para almacenamiento de datos, y RDS para bases de datos, ajustando variables como la región, el tipo de instancia, y el uso previsto. La calculadora proporciona un desglose detallado de los costos estimados, lo que ayuda a planificar y gestionar el presupuesto de manera eficiente. Por ejemplo, una empresa que planea lanzar una nueva aplicación web puede usar la calculadora para estimar los costos de servidores, almacenamiento y bases de datos, asegurando que el proyecto se mantenga dentro del presupuesto.",
          imageUrl: AWSPricingCalculator,
        },
        "AWS SDKs": {
          description:
            "Los AWS SDKs (Kits de Desarrollo de Software) proporcionan bibliotecas, ejemplos de código y documentación para ayudar a los desarrolladores a integrar y utilizar los servicios de AWS en sus aplicaciones mediante lenguajes de programación populares como Java, Python, JavaScript, y más. Por ejemplo, un desarrollador puede usar el AWS SDK para Python (boto3) para escribir scripts que automaticen la creación y gestión de recursos en Amazon S3, como la creación de buckets, la carga de archivos y la gestión de permisos, simplificando así el desarrollo y la implementación de aplicaciones en la nube de AWS.",
          imageUrl: sdk,
        },
        "AWS Support Center": {
          description:
            "El Centro de Soporte de AWS ofrece acceso a recursos de soporte, incluyendo documentación técnica, herramientas de gestión de casos de soporte, y servicios de soporte técnico para ayudar a los usuarios a resolver problemas y optimizar su uso de AWS. Por ejemplo, si una empresa encuentra un problema de rendimiento en su aplicación que utiliza Amazon RDS, puede abrir un caso de soporte en el Centro de Soporte de AWS, donde un ingeniero de soporte especializado proporcionará asistencia para diagnosticar y solucionar el problema, asegurando que la aplicación vuelva a funcionar de manera óptima lo antes posible.",
          imageUrl: "",
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
          imageUrl: planes,
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
          imageUrl: waframework,
        },
        "Amazon Athena": {
          description:
            "Amazon Athena es un servicio de consulta interactiva diseñado para facilitar el análisis de datos almacenados en Amazon S3 mediante el uso de SQL estándar. Con Athena, no es necesario configurar o administrar servidores, ya que es un servicio totalmente gestionado. Esto permite a los usuarios ejecutar consultas directamente desde la consola de AWS o mediante una API, apuntando a sus datos en S3, ejecutando consultas y pagando solo por las consultas que ejecuten. Athena es ideal para analizar grandes volúmenes de datos, realizar análisis ad hoc, y generar informes rápidamente sin la necesidad de una infraestructura de base de datos tradicional.",
          imageUrl: athena,
        },
        "AWS Data Exchange": {
          description:
            "AWS Data Exchange es un servicio que permite a los clientes encontrar, suscribirse y utilizar datos de terceros directamente en la nube. Este servicio facilita el acceso a una amplia variedad de conjuntos de datos de múltiples proveedores, incluyendo datos financieros, de salud, de medios de comunicación, y más. Con AWS Data Exchange, los usuarios pueden suscribirse a estos conjuntos de datos y acceder a ellos de manera segura y eficiente, integrándolos fácilmente con otros servicios de AWS para mejorar la inteligencia empresarial y la analítica. El servicio también proporciona herramientas para la gestión de suscripciones, la renovación de licencias, y la recepción de actualizaciones automáticas, lo que simplifica enormemente la gestión de datos de terceros en la nube.",
          imageUrl: "",
        },
        "Amazon EMR": {
          description: `
                <p>Amazon EMR (Elastic MapReduce) es una plataforma de procesamiento de datos a gran escala que permite el análisis y el procesamiento eficiente de grandes volúmenes de datos utilizando frameworks populares como Apache Hadoop, Apache Spark, Apache HBase, Apache Flink, y Presto. Amazon EMR es fácil de configurar y escalar, ofreciendo una solución de bajo costo para el procesamiento de big data.</p>
                <ul>
                    <li><strong>Facilidad de Configuración:</strong> Con Amazon EMR, puedes lanzar clústeres de forma rápida y sencilla, sin necesidad de gestionar la infraestructura subyacente.</li>
                    <li><strong>Escalabilidad:</strong> Escala automáticamente para ajustarse a las necesidades de tu carga de trabajo, permitiendo añadir o eliminar instancias según sea necesario.</li>
                    <li><strong>Costo Efectivo:</strong> Paga solo por los recursos que utilizas, con la posibilidad de optimizar costos mediante instancias reservadas y spot.</li>
                    <li><strong>Integración con Otros Servicios de AWS:</strong> Amazon EMR se integra perfectamente con otros servicios de AWS como Amazon S3, Amazon RDS, Amazon DynamoDB, y Amazon Redshift, facilitando el acceso y la gestión de datos.</li>
                    <li><strong>Seguridad:</strong> Ofrece características de seguridad robustas, incluyendo el cifrado en tránsito y en reposo, el uso de AWS IAM para la gestión de accesos, y el soporte para redes privadas virtuales (VPC).</li>
                </ul>
                <p>Amazon EMR es ideal para casos de uso como el análisis de logs, la minería de datos, la transformación de datos (ETL), el aprendizaje automático, y la bioinformática.</p>
            `,
          imageUrl: "",
        },
        "AWS Glue": {
          description:
            "AWS Glue es un servicio de integración de datos totalmente administrado que facilita la preparación de datos para el análisis. Proporciona todas las capacidades necesarias para realizar tareas de ETL (extracción, transformación y carga), lo que permite a los usuarios extraer datos de diversas fuentes, transformarlos según sus necesidades y cargarlos en destinos de análisis. AWS Glue incluye un catálogo de datos centralizado que permite descubrir y gestionar metadatos, así como un motor de transformación de datos basado en Apache Spark, que facilita la ejecución de trabajos ETL de manera eficiente y escalable. Además, AWS Glue genera automáticamente el código necesario para las tareas de ETL, lo que reduce significativamente el tiempo y el esfuerzo requeridos para preparar los datos para el análisis.",
          imageUrl: glue,
        },
        "Amazon Kinesis": {
          description: `
                <p>Amazon Kinesis es una plataforma de transmisión de datos en tiempo real que permite recolectar, procesar y analizar datos en tiempo real. Esto es especialmente útil para aplicaciones que requieren monitoreo y análisis en tiempo real, como análisis de logs, datos de sensores IoT, análisis de clics web, y más. Amazon Kinesis se compone de varios servicios especializados:</p>
                <ul>
                    <li>
                        <strong>Amazon Kinesis Data Streams:</strong> 
                        <p>Permite la captura y el almacenamiento de datos en tiempo real a gran escala. Los desarrolladores pueden construir aplicaciones que consumen y procesan datos de los streams en tiempo real. Es ideal para casos de uso como el procesamiento de logs, la recolección de datos de clics web y el monitoreo de eventos. Las aplicaciones pueden leer y procesar datos desde múltiples consumidores en paralelo, lo que permite una alta escalabilidad y rendimiento.</p>
                    </li>
                    <li>
                        <strong>Amazon Kinesis Data Firehose:</strong> 
                        <p>Facilita la carga y la transformación de flujos de datos en tiempo real en servicios de almacenamiento y análisis de datos como Amazon S3, Amazon Redshift, Amazon Elasticsearch Service y proveedores de servicios como Splunk. Ofrece una manera sencilla y escalable de procesar y entregar datos en tiempo real sin necesidad de escribir aplicaciones personalizadas. Es ideal para la ingesta de datos de logs, métricas, y datos de eventos en tiempo real.</p>
                    </li>
                    <li>
                        <strong>Amazon Kinesis Data Analytics:</strong> 
                        <p>Permite ejecutar consultas SQL en flujos de datos en tiempo real, proporcionando información procesable casi instantáneamente sin necesidad de gestionar la infraestructura subyacente. Esto es útil para crear paneles de monitoreo en tiempo real, generar alertas, y realizar análisis en tiempo real de flujos de datos continuos. Kinesis Data Analytics soporta funciones SQL avanzadas, ventanas de tiempo y un motor de procesamiento de eventos complejos.</p>
                    </li>
                    <li>
                        <strong>Amazon Kinesis Video Streams:</strong> 
                        <p>Facilita la captura, el procesamiento y el almacenamiento de video en tiempo real para aplicaciones de visión por computadora y análisis de video. Es ideal para casos de uso como vigilancia, monitoreo y análisis de video en tiempo real. Kinesis Video Streams soporta el streaming seguro de video a AWS, el almacenamiento duradero y el procesamiento con servicios de AI/ML como Amazon Rekognition.</p>
                    </li>
                </ul>
                <p>Amazon Kinesis es altamente escalable y flexible, permitiendo a las organizaciones construir soluciones complejas de análisis y procesamiento de datos en tiempo real con facilidad. Con Kinesis, puedes recolectar grandes cantidades de datos de múltiples fuentes, procesarlos en tiempo real, y analizarlos para obtener información valiosa y tomar decisiones informadas rápidamente.</p>
            `,
          imageUrl: kinesis,
        },
        "Amazon MSK": {
          description: `
                <p>Amazon Managed Streaming for Apache Kafka (Amazon MSK) es un servicio completamente administrado que facilita la creación y ejecución de aplicaciones utilizando Apache Kafka, un sistema de mensajería distribuido y de alto rendimiento para el procesamiento de flujos de datos en tiempo real. Con Amazon MSK, puedes utilizar Apache Kafka sin preocuparte por la infraestructura subyacente, ya que AWS gestiona la provisión, configuración, mantenimiento y escalado del clúster de Kafka.</p>
                <p>Amazon MSK automatiza las tareas administrativas, proporcionando una alta disponibilidad mediante la replicación de datos en múltiples zonas de disponibilidad (AZs). Esto asegura que tus aplicaciones puedan procesar datos en tiempo real de manera continua y confiable. Además, Amazon MSK ofrece escalabilidad elástica, permitiendo ajustar la capacidad del clúster según las necesidades de tu carga de trabajo.</p>
            `,
          imageUrl: "",
        },
        "Amazon OpenSearch Service": {
          description: `
                <p>Amazon OpenSearch Service es un servicio administrado que facilita el despliegue, operación y escalado de clústeres de OpenSearch en la nube. OpenSearch es una suite de búsqueda y análisis que permite realizar búsquedas rápidas y análisis sofisticados de grandes volúmenes de datos en tiempo real. Este servicio es ideal para casos de uso como búsqueda en aplicaciones, monitoreo de logs y análisis de datos.</p>
                <p>Con Amazon OpenSearch Service, puedes lanzar y configurar clústeres de OpenSearch sin gestionar la infraestructura subyacente. El servicio maneja tareas complejas como la provisión de hardware, la aplicación de parches de software, las copias de seguridad y la recuperación ante desastres.</p>
                <p>Amazon OpenSearch Service ofrece una alta disponibilidad y durabilidad de datos mediante la replicación automática y la distribución de nodos en múltiples zonas de disponibilidad (AZs). También proporciona escalabilidad elástica para ajustar los recursos del clúster según las necesidades de la carga de trabajo.</p>
                <p>El servicio es compatible con las API de OpenSearch y Elasticsearch 7.x, lo que facilita la migración de aplicaciones existentes sin cambios significativos en el código.</p>
            `,
          imageUrl: "",
        },
        "Amazon QuickSight": {
          description: `
                <p>Amazon QuickSight es un servicio de inteligencia de negocios (BI) escalable, sin servidor, embebible y potenciado por aprendizaje automático (ML) que facilita la creación de paneles interactivos y reportes visuales. QuickSight permite a los usuarios conectar, visualizar y analizar datos rápidamente, proporcionando insights valiosos en cuestión de minutos.</p>
                <p>Con Amazon QuickSight, los usuarios pueden crear paneles personalizados y compartirlos con otros, ofreciendo una experiencia interactiva que permite profundizar en los datos con facilidad. El servicio soporta una amplia variedad de fuentes de datos, incluyendo Amazon S3, Amazon RDS, Amazon Redshift, y más, así como fuentes externas como bases de datos y aplicaciones SaaS.</p>
                <p>QuickSight utiliza tecnologías avanzadas de aprendizaje automático para proporcionar capacidades de análisis predictivo, detección de anomalías y generación automática de insights. Estas funcionalidades ayudan a los usuarios a identificar patrones y tendencias ocultas en los datos sin necesidad de ser expertos en datos o en aprendizaje automático.</p>
                <p>Amazon QuickSight es ideal para organizaciones de todos los tamaños que buscan una solución de BI rentable, fácil de usar y que requiera una mínima gestión de infraestructura, permitiendo enfocarse en la toma de decisiones basadas en datos.</p>
            `,
          imageUrl: quicksight,
        },
        "Amazon Redshift": {
          description: `
                <p>Amazon Redshift es un servicio de almacenamiento de datos (data warehouse) completamente administrado que permite analizar todos tus datos utilizando SQL estándar y tus herramientas de inteligencia de negocios (BI) existentes. Redshift es altamente escalable y está diseñado para manejar petabytes de datos, proporcionando un rendimiento rápido y eficiente para consultas complejas.</p>
                <p>Con Amazon Redshift, puedes consolidar datos de múltiples fuentes en un solo repositorio para realizar análisis más profundos y obtener insights valiosos. El servicio soporta cargas de trabajo analíticas intensivas y permite la integración con herramientas de BI como Tableau, Amazon QuickSight, y Microsoft Power BI.</p>
                <p>Amazon Redshift también ofrece características avanzadas como la compresión de datos, el almacenamiento en columnas y el procesamiento paralelo masivo (MPP), lo que mejora significativamente la velocidad de las consultas y la eficiencia del almacenamiento. Además, con Redshift Spectrum, puedes ejecutar consultas directamente sobre datos en Amazon S3 sin necesidad de cargarlos en el data warehouse.</p>
                <p>Redshift es ideal para empresas que buscan una solución de almacenamiento de datos escalable, rentable y fácil de usar para potenciar sus capacidades de análisis y toma de decisiones basada en datos.</p>
            `,
          imageUrl: redshift,
        },
        "Amazon EventBridge": {
          description: `
            <p>Amazon EventBridge es un servicio de bus de eventos completamente administrado que facilita la conexión de aplicaciones mediante el uso de datos de tus propias aplicaciones, aplicaciones SaaS integradas y servicios de AWS. Permite la creación de arquitecturas orientadas a eventos (event-driven), donde las aplicaciones reaccionan a eventos generados por otras aplicaciones o servicios.</p>
            <p>EventBridge utiliza eventos para transmitir datos de una fuente a uno o más destinos, permitiendo la creación de flujos de trabajo automáticos y la integración entre diferentes sistemas. Los eventos son representaciones de cambios de estado o acciones que ocurren en las aplicaciones o servicios, como la creación de un nuevo usuario, una transacción completada, o una alerta de seguridad.</p>
            <p>El servicio incluye características como:</p>
            <ul>
                <li><strong>Scheduler:</strong> Permite programar eventos a intervalos regulares o en momentos específicos utilizando reglas de cron. Esto es útil para tareas periódicas como la ejecución de trabajos de mantenimiento, la sincronización de datos, o el envío de recordatorios.</li>
                <li><strong>Rules:</strong> Las reglas de EventBridge determinan cómo se procesan los eventos y a dónde se envían. Puedes definir patrones de eventos y rutas a diferentes destinos, incluyendo funciones Lambda, colas SQS, temas SNS, y más.</li>
                <li><strong>Integración con Servicios SaaS:</strong> EventBridge se integra con aplicaciones SaaS populares como Zendesk, Shopify, y Datadog, permitiendo que los eventos de estas aplicaciones se utilicen para desencadenar acciones en tu entorno AWS.</li>
                <li><strong>Transformaciones de Eventos:</strong> Puedes transformar el contenido de los eventos en tránsito para adaptarlos a los requisitos de los destinos utilizando plantillas de transformación.</li>
            </ul>
            <p>Amazon EventBridge es ideal para construir aplicaciones modernas y desacopladas que reaccionan rápidamente a los cambios y permiten una fácil integración y automatización de flujos de trabajo.</p>
            <h4>Ejemplo Práctico:</h4>
            <p>Imagina una tienda en línea que utiliza EventBridge para automatizar el proceso de notificación de pedidos. Cuando un cliente realiza una compra, se genera un evento que activa una función Lambda para procesar el pago. Luego, otro evento activa un flujo de trabajo en Step Functions que gestiona el inventario y la logística de envío.</p>
          `,
          imageUrl: eventbridge1,
        },
        "Amazon SNS": {
          description: `
            <p>Amazon Simple Notification Service (SNS) es un servicio de mensajería completamente administrado que facilita el desacoplamiento y la escalabilidad de microservicios, sistemas distribuidos y aplicaciones sin servidor. SNS permite enviar mensajes a un gran número de suscriptores a través de múltiples protocolos, como HTTP/S, email, SMS, y Amazon SQS.</p>
            <p>Con SNS, puedes crear temas a los cuales los suscriptores se pueden inscribir. Los mensajes publicados en un tema se entregan automáticamente a todos los suscriptores del tema, lo que facilita la implementación de patrones de publicación/suscripción.</p>
            <p>Amazon SNS es ideal para casos de uso como notificaciones push móviles, alertas de monitoreo, y coordinación de eventos en arquitecturas distribuidas.</p>
            <h4>Ejemplo Práctico:</h4>
            <p>Supongamos que tienes una aplicación de monitoreo de infraestructura que detecta problemas en los servidores. Cuando se detecta un problema, SNS envía una notificación a un tema al que están suscritos los equipos de soporte a través de SMS y correo electrónico, garantizando una respuesta rápida.</p>
          `,
          imageUrl: "",
        },
        "Amazon SQS": {
          description: `
            <p>Amazon Simple Queue Service (SQS) es un servicio de colas de mensajes completamente administrado que facilita desacoplar y escalar microservicios, sistemas distribuidos y aplicaciones sin servidor. SQS permite enviar, almacenar y recibir mensajes entre componentes de software en cualquier volumen, sin que estos componentes tengan que interactuar directamente.</p>
            <p>Con SQS, puedes utilizar colas estándar para entregar mensajes al menos una vez o colas FIFO para garantizar que los mensajes se procesen en el orden exacto en que se envían y sin duplicados.</p>
            <p>Amazon SQS es ideal para desacoplar componentes de sistemas grandes, asegurando que los mensajes se entreguen de manera confiable y se procesen de manera asíncrona.</p>
            <h4>Ejemplo Práctico:</h4>
            <p>Imagina una aplicación de procesamiento de imágenes que recibe miles de solicitudes por minuto. Puedes utilizar SQS para colocar las solicitudes en una cola. Los trabajadores independientes pueden procesar las imágenes desde la cola, garantizando que cada solicitud se maneje de manera eficiente y sin pérdida de datos.</p>
          `,
          imageUrl: sqs,
        },
        "AWS Step Functions": {
          description: `
            <p>AWS Step Functions facilita coordinar múltiples servicios de AWS en flujos de trabajo sin servidor para crear y escalar aplicaciones y microservicios. Step Functions utiliza diagramas de flujo visuales para definir y ejecutar flujos de trabajo que orquestan servicios como AWS Lambda, Amazon ECS, y AWS Fargate.</p>
            <p>Con Step Functions, puedes dividir las aplicaciones en pasos individuales que se ejecutan en secuencia o en paralelo, lo que simplifica la gestión de errores y la lógica de reintento. Esto permite crear aplicaciones resilientes y fáciles de mantener.</p>
            <p>AWS Step Functions es ideal para casos de uso como la automatización de procesos empresariales, la integración de aplicaciones y la ejecución de tareas de procesamiento de datos complejas.</p>
            <h4>Ejemplo Práctico:</h4>
            <p>Considera un proceso de aprobación de préstamos en un banco. Con Step Functions, puedes crear un flujo de trabajo que incluye la verificación de crédito, la validación de ingresos y la revisión manual. Cada paso se puede ejecutar de manera secuencial, asegurando que todas las validaciones se completen antes de pasar al siguiente paso.</p>
          `,
          imageUrl: stepf,
        },
        "Amazon Connect": {
          description: `
        <p>Amazon Connect es un servicio de centro de contacto en la nube fácil de usar que facilita a cualquier empresa proporcionar un servicio de atención al cliente superior a un costo más bajo. Connect permite configurar un centro de contacto omnicanal que incluye voz y chat, con la flexibilidad de escalar según las necesidades.</p>
        <p>Amazon Connect ofrece herramientas para crear flujos de contacto personalizados, integrar sistemas CRM, y analizar interacciones con los clientes. También incluye capacidades de enrutamiento inteligente para asegurar que los clientes sean dirigidos a los agentes adecuados.</p>
        <p>Amazon Connect es ideal para empresas que buscan mejorar la experiencia del cliente con una solución de centro de contacto escalable y rentable.</p>
            `,
          imageUrl: "",
        },
        "Amazon SES": {
          description: `
        <p>Amazon Simple Email Service (SES) es un servicio de correo electrónico en la nube rentable y flexible que facilita a los desarrolladores enviar correos electrónicos desde cualquier aplicación. SES soporta varios casos de uso, incluyendo correo transaccional, notificaciones y marketing por correo electrónico.</p>
        <p>Con Amazon SES, puedes enviar correos electrónicos de alta calidad y a gran escala sin gestionar una infraestructura de correo subyacente. El servicio también ofrece capacidades de análisis, como tasas de entrega y aperturas, para optimizar las campañas de correo electrónico.</p>
        <p>Amazon SES es ideal para empresas y desarrolladores que necesitan una solución fiable y escalable para enviar correos electrónicos a sus usuarios.</p>
            `,
          imageUrl: "",
        },
        "AWS Billing Conductor": {
          description: `
              <p>AWS Billing Conductor es un servicio que facilita la creación de facturas detalladas y personalizadas para tus clientes. Este servicio ayuda a organizar y administrar tus costos y facturas en la nube de manera eficiente. Con AWS Billing Conductor, puedes:</p>
              <ul>
                  <li><strong>Personalizar la Presentación de Facturas:</strong> Ajusta cómo se presentan los costos en las facturas, agrupando por proyectos, equipos, departamentos o cualquier otra estructura que se ajuste a tu modelo de negocio.</li>
                  <li><strong>Facturación Transparente:</strong> Proporciona a tus clientes una visión clara y detallada de sus costos, aumentando la transparencia y la confianza.</li>
                  <li><strong>Agrupación de Costos:</strong> Agrupa costos de diferentes cuentas y servicios en una sola factura, lo que simplifica la administración y la revisión de los gastos.</li>
                  <li><strong>Integración con AWS Organizations:</strong> Utiliza AWS Billing Conductor junto con AWS Organizations para gestionar facturación y costos a nivel de organización, facilitando el control financiero y la previsión de gastos.</li>
              </ul>
              <h4>Ejemplo Práctico:</h4>
              <p>Imagina que eres un proveedor de servicios en la nube que ofrece soluciones a varias empresas. Con AWS Billing Conductor, puedes generar facturas separadas para cada cliente, detallando los servicios utilizados y los costos asociados, asegurando que cada cliente reciba una factura precisa y comprensible.</p>
            `,
          imageUrl: billing,
        },
        "AWS Budgets": {
          description: `
              <p>AWS Budgets permite crear y gestionar presupuestos personalizados que te alertan cuando tus costos o uso superan los umbrales definidos. Con AWS Budgets, puedes:</p>
              <ul>
                  <li><strong>Configuración de Alertas:</strong> Configura alertas basadas en costos previstos, uso de servicios y reservas, recibiendo notificaciones por correo electrónico o SMS cuando se acerquen o superen los límites establecidos.</li>
                  <li><strong>Monitoreo de Gastos:</strong> Monitorea en tiempo real tus gastos en la nube y toma acciones proactivas para mantenerte dentro de tu presupuesto, evitando sorpresas en la facturación.</li>
                  <li><strong>Comparación de Presupuestos:</strong> Compara los presupuestos actuales con los gastos históricos para identificar tendencias y ajustar los presupuestos futuros.</li>
                  <li><strong>Integración con AWS Cost Explorer:</strong> Utiliza AWS Budgets junto con AWS Cost Explorer para obtener una visión más detallada y completa de tus gastos y optimizar el uso de recursos.</li>
              </ul>
              <h4>Ejemplo Práctico:</h4>
              <p>Supongamos que diriges un equipo de desarrollo con un presupuesto mensual de $5,000 para servicios en la nube. Con AWS Budgets, puedes configurar alertas para recibir notificaciones cuando el gasto alcance el 80% del presupuesto, permitiéndote revisar el uso de recursos y tomar medidas correctivas antes de superar el límite.</p>
            `,
          imageUrl: budgets,
        },
        "AWS Cost and Usage Report": {
          description: `
              <p>AWS Cost and Usage Report (CUR) proporciona los detalles más completos de tus costos y uso de AWS, organizados por cuenta y agrupados por servicios y etiquetas. Con AWS CUR, puedes:</p>
              <ul>
                  <li><strong>Informe Detallado:</strong> Accede a informes detallados que muestran el desglose de costos y uso, permitiéndote analizar y comprender mejor tus gastos en la nube.</li>
                  <li><strong>Identificación de Tendencias:</strong> Utiliza los datos para identificar tendencias de uso y gastos, facilitando la previsión y planificación presupuestaria.</li>
                  <li><strong>Optimización de Costos:</strong> Encuentra oportunidades para optimizar tus costos mediante la identificación de recursos infrautilizados o ineficientes.</li>
                  <li><strong>Integración con Herramientas de BI:</strong> Exporta los datos a herramientas de inteligencia empresarial (BI) para análisis más profundos y personalizados.</li>
              </ul>
              <h4>Ejemplo Práctico:</h4>
              <p>Imagina que gestionas una empresa que utiliza múltiples servicios de AWS en varias cuentas. Con AWS Cost and Usage Report, puedes generar informes que detallan los costos y el uso por departamento, servicio y proyecto, facilitando la asignación precisa de costos y la identificación de áreas para optimización.</p>
            `,
          imageUrl: costandusage,
        },
        "AWS Cost Explorer": {
          description: `
              <p>AWS Cost Explorer facilita visualizar, comprender y gestionar tus costos y uso de AWS a lo largo del tiempo. Con Cost Explorer, puedes:</p>
              <ul>
                  <li><strong>Informes Personalizados:</strong> Crea informes personalizados que muestran tus gastos y uso de AWS de manera clara y detallada.</li>
                  <li><strong>Gráficos Interactivos:</strong> Utiliza gráficos interactivos para identificar patrones de gasto, comparar costos entre diferentes periodos y detectar picos de uso.</li>
                  <li><strong>Proyecciones de Costos:</strong> Realiza proyecciones de costos futuros basadas en tendencias históricas, ayudándote a planificar presupuestos y gestionar recursos.</li>
                  <li><strong>Identificación de Oportunidades de Optimización:</strong> Encuentra oportunidades para reducir costos optimizando el uso de recursos y ajustando la capacidad según la demanda.</li>
              </ul>
              <h4>Ejemplo Práctico:</h4>
              <p>Supongamos que eres responsable de la administración de costos de una aplicación SaaS. Utilizando AWS Cost Explorer, puedes crear gráficos que muestren el aumento de costos en relación con el crecimiento de usuarios, permitiéndote ajustar la infraestructura y planificar presupuestos de manera más precisa.</p>
            `,
          imageUrl: costexplorer,
        },
        "AWS Marketplace": {
          description: `
              <p>AWS Marketplace es un catálogo digital curado que facilita encontrar, comprar, desplegar y gestionar software de terceros y servicios que necesitas para construir soluciones en AWS. Con AWS Marketplace, puedes:</p>
              <ul>
                  <li><strong>Amplia Gama de Productos:</strong> Accede a una amplia gama de productos de software en diversas categorías, incluyendo seguridad, redes, almacenamiento y análisis, todos verificados por AWS.</li>
                  <li><strong>Despliegue Rápido:</strong> Compra e implementa software con un solo clic, acelerando el tiempo de despliegue y reduciendo la complejidad.</li>
                  <li><strong>Gestión Centralizada:</strong> Gestiona todas tus suscripciones de software y servicios desde un solo lugar, facilitando la administración y el seguimiento de licencias.</li>
                  <li><strong>Modelos de Precios Flexibles:</strong> Elige entre diversos modelos de precios, como pago por uso, suscripciones mensuales o anuales, adaptándose a tus necesidades presupuestarias.</li>
              </ul>
              <h4>Ejemplo Práctico:</h4>
              <p>Imagina que necesitas un software de seguridad para proteger tus aplicaciones en la nube. Con AWS Marketplace, puedes buscar y seleccionar una solución de seguridad adecuada, desplegarla rápidamente en tu entorno AWS y gestionar su uso y suscripción desde una única consola.</p>
            `,
          imageUrl: marketplace,
        },
        "AWS Batch": {
          description: `
              <p>AWS Batch facilita la ejecución de trabajos por lotes a cualquier escala, permitiendo a los usuarios configurar y ejecutar miles de trabajos computacionales a través de máquinas virtuales o instancias de contenedor. AWS Batch gestiona automáticamente el aprovisionamiento de recursos y la ejecución de trabajos, optimizando el uso de los recursos y permitiéndote enfocarte en desarrollar y analizar tus aplicaciones en lugar de gestionar la infraestructura subyacente.</p>
              <p>Características clave incluyen:</p>
              <ul>
                  <li><strong>Automatización del Aprovisionamiento:</strong> AWS Batch automáticamente aprovisiona y escala los recursos necesarios para ejecutar tus trabajos, asegurando una alta disponibilidad y eficiencia en el uso de recursos.</li>
                  <li><strong>Compatibilidad con Contenedores:</strong> AWS Batch es compatible con contenedores Docker, permitiendo empaquetar y ejecutar tus trabajos en un entorno portátil y consistente.</li>
                  <li><strong>Integración con Otros Servicios de AWS:</strong> AWS Batch se integra con servicios como Amazon S3 para el almacenamiento de datos de entrada y salida, y Amazon CloudWatch para el monitoreo y la creación de registros.</li>
                  <li><strong>Gestión de Prioridades:</strong> Permite definir prioridades para diferentes trabajos y colas, asegurando que los trabajos más importantes se ejecuten primero.</li>
              </ul>
              <h4>Ejemplo Práctico:</h4>
              <p>Imagina que gestionas un laboratorio de investigación que realiza simulaciones complejas para estudios climáticos. Con AWS Batch, puedes configurar trabajos que ejecuten estas simulaciones en miles de instancias simultáneamente, reduciendo significativamente el tiempo de procesamiento y obteniendo resultados más rápido.</p>
            `,
          imageUrl: "",
        },
        "Amazon EC2": {
          description: `
              <p>Amazon Elastic Compute Cloud (Amazon EC2) es un servicio web que proporciona capacidad informática redimensionable en la nube. EC2 permite a los usuarios obtener y configurar capacidad de computación de manera rápida y sencilla, proporcionando el control completo sobre los recursos informáticos y permitiendo ejecutar cargas de trabajo en el entorno de computación probado de AWS.</p>
              <p>Amazon EC2 ofrece una amplia variedad de tipos de instancias, cada una optimizada para diferentes casos de uso, incluyendo instancias de propósito general, optimizadas para cómputo, memoria, almacenamiento y aceleración gráfica. Los usuarios pueden seleccionar y configurar el tipo de instancia que mejor se adapte a sus necesidades y cambiar la configuración según sea necesario para ajustarse a los cambios en los requisitos de la carga de trabajo.</p>
              <p>Características clave de Amazon EC2:</p>
              <ul>
                  <li><strong>Elasticidad y Escalabilidad:</strong> EC2 permite escalar la capacidad de computación hacia arriba o hacia abajo en función de la demanda, asegurando que siempre haya suficiente capacidad para manejar las cargas de trabajo.</li>
                  <li><strong>Opciones de Precios Flexibles:</strong> EC2 ofrece varios modelos de precios, incluyendo instancias bajo demanda, instancias reservadas, instancias spot y opciones de ahorro, permitiendo a los usuarios optimizar costos en función de sus necesidades y patrones de uso.</li>
                  <li><strong>Seguridad:</strong> EC2 proporciona múltiples capas de seguridad, incluyendo el uso de Amazon Virtual Private Cloud (VPC) para aislar recursos, permisos granulares con AWS Identity and Access Management (IAM) y capacidades de cifrado en tránsito y en reposo.</li>
                  <li><strong>Integración con Otros Servicios de AWS:</strong> EC2 se integra perfectamente con otros servicios de AWS, como Amazon S3 para almacenamiento, Amazon RDS para bases de datos y AWS Lambda para computación sin servidor, facilitando la creación de soluciones completas y robustas.</li>
                  <li><strong>Herramientas de Gestión:</strong> EC2 incluye herramientas para la gestión y automatización de recursos, como Auto Scaling para ajustar automáticamente la capacidad de computación, Amazon CloudWatch para monitoreo y alertas y AWS CloudFormation para la creación y administración de recursos mediante plantillas.</li>
                  <li><strong>Instancias Especializadas:</strong> EC2 ofrece instancias especializadas para casos de uso específicos, como instancias optimizadas para gráficos (GPU), instancias con almacenamiento en SSD de alta velocidad y instancias con alto rendimiento de red para aplicaciones que requieren una baja latencia y un alto ancho de banda.</li>
              </ul>
              <h4>Ejemplo Práctico:</h4>
              <p>Supongamos que estás desarrollando una aplicación de análisis de big data que necesita procesar grandes volúmenes de datos en tiempo real. Con Amazon EC2, puedes desplegar instancias optimizadas para computación que manejen estas cargas de trabajo intensivas, escalando hacia arriba durante los picos de uso y hacia abajo cuando la demanda disminuya, optimizando costos y rendimiento.</p>
            `,
          imageUrl: amazonec2,
        },
        "AWS Elastic Beanstalk": {
          description: `
              <p>AWS Elastic Beanstalk facilita el despliegue y escalado de aplicaciones y servicios web desarrollados con lenguajes como Java, .NET, PHP, Node.js, Python, Ruby, Go y Docker en servidores familiares como Apache, Nginx, Passenger e IIS. Elastic Beanstalk automatiza la gestión de la infraestructura subyacente, incluyendo el aprovisionamiento de capacidad, balanceo de carga, escalado automático y monitoreo de salud de las aplicaciones.</p>
              <p>Con Elastic Beanstalk, puedes cargar fácilmente el código de tu aplicación y el servicio se encarga del resto, desde el aprovisionamiento de recursos hasta la configuración de entornos y la administración continua. Esto permite a los desarrolladores concentrarse en escribir código y dejar la gestión operativa a Elastic Beanstalk.</p>
              <p>Características clave incluyen:</p>
              <ul>
                  <li><strong>Despliegue Rápido y Sencillo:</strong> Permite desplegar aplicaciones web y servicios rápidamente sin necesidad de gestionar la infraestructura subyacente.</li>
                  <li><strong>Escalado Automático:</strong> Ajusta automáticamente la capacidad en función del tráfico, asegurando que tu aplicación siempre tenga los recursos necesarios para manejar la carga.</li>
                  <li><strong>Monitoreo y Administración Continua:</strong> Proporciona herramientas para monitorear la salud de tu aplicación y realizar ajustes necesarios para mantener el rendimiento óptimo.</li>
                  <li><strong>Integración con Otros Servicios de AWS:</strong> Se integra con servicios como Amazon RDS para bases de datos, Amazon S3 para almacenamiento y Amazon CloudWatch para monitoreo y alertas.</li>
              </ul>
              <h4>Ejemplo Práctico:</h4>
              <p>Imagina que desarrollas una aplicación web de comercio electrónico que necesita manejar grandes volúmenes de tráfico durante eventos promocionales. Con AWS Elastic Beanstalk, puedes desplegar rápidamente tu aplicación y confiar en que se escalará automáticamente para manejar picos de tráfico, sin preocuparte por la infraestructura subyacente.</p>
            `,
          imageUrl: elasticbeanstalk,
        },
        "Amazon Lightsail": {
          description: `
              <p>Amazon Lightsail es una forma fácil de comenzar con AWS, ofreciendo todo lo necesario para desplegar rápidamente un proyecto: una máquina virtual, almacenamiento basado en SSD, transferencia de datos, gestión de DNS y una dirección IP estática, todo por un bajo costo mensual. Lightsail está diseñado para ser simple y accesible, proporcionando una plataforma de computación sencilla para desarrolladores, pequeñas empresas y proyectos personales.</p>
              <p>Características clave incluyen:</p>
              <ul>
                  <li><strong>Instancias de Máquina Virtual Fáciles de Configurar:</strong> Ofrece instancias preconfiguradas que simplifican el proceso de configuración y despliegue.</li>
                  <li><strong>Almacenamiento Basado en SSD:</strong> Proporciona almacenamiento rápido y fiable para mejorar el rendimiento de tus aplicaciones.</li>
                  <li><strong>Transferencia de Datos Incluida:</strong> Incluye una cantidad generosa de transferencia de datos mensual, junto con administración de DNS y direcciones IP estáticas.</li>
                  <li><strong>Capacidad para Escalar:</strong> Permite escalar aplicaciones fácilmente a otros servicios de AWS a medida que crecen las necesidades.</li>
              </ul>
              <h4>Ejemplo Práctico:</h4>
              <p>Imagina que tienes un blog personal y quieres migrarlo a la nube para mejorar su disponibilidad y rendimiento. Con Amazon Lightsail, puedes desplegar una instancia de máquina virtual preconfigurada con WordPress, gestionar fácilmente el DNS y asegurarte de que tu blog esté siempre accesible, todo a un costo asequible.</p>
            `,
          imageUrl: "",
        },
        "AWS Outposts": {
          description: `
              <p>AWS Outposts es un servicio que lleva la infraestructura y los servicios nativos de AWS a prácticamente cualquier centro de datos, espacio de colocación o instalación local. Outposts extiende los servicios de AWS a entornos locales, permitiendo a las organizaciones utilizar la misma infraestructura, APIs, herramientas y servicios que en la nube de AWS.</p>
              <p>Características clave incluyen:</p>
              <ul>
                  <li><strong>Infraestructura Totalmente Gestionada:</strong> Proporciona infraestructura totalmente gestionada que extiende los servicios de AWS a instalaciones locales, facilitando la implementación y gestión.</li>
                  <li><strong>Amplia Gama de Servicios de AWS:</strong> Soporta una amplia gama de servicios de AWS, incluyendo EC2, EBS, RDS, ECS, EKS y más, permitiendo ejecutar aplicaciones de baja latencia y cumplir con requisitos de residencia de datos.</li>
                  <li><strong>Integración con la Red y la Infraestructura de Seguridad Local:</strong> Se integra con la infraestructura de red y seguridad existente, facilitando la conectividad y el cumplimiento de políticas de seguridad.</li>
              </ul>
              <h4>Ejemplo Práctico:</h4>
              <p>Imagina que eres una empresa de salud que necesita mantener ciertos datos y aplicaciones en sus propias instalaciones por razones de cumplimiento y latencia. Con AWS Outposts, puedes ejecutar servicios de AWS como EC2 y RDS en tu centro de datos, integrándolos perfectamente con tus sistemas locales y aprovechando la misma infraestructura y herramientas que usas en la nube de AWS.</p>
            `,
          imageUrl: "",
        },
        "Amazon ECR": {
          description: `
                <p>Amazon Elastic Container Registry (Amazon ECR) es un servicio de registro de contenedores Docker completamente administrado que facilita el almacenamiento, la gestión y el despliegue de imágenes de contenedor Docker. ECR está diseñado para integrarse perfectamente con Amazon Elastic Container Service (ECS), Amazon Elastic Kubernetes Service (EKS) y AWS Lambda, proporcionando un flujo de trabajo de desarrollo de contenedores sencillo y eficiente.</p>
                <p>Características clave de Amazon ECR:</p>
                <ul>
                    <li><strong>Almacenamiento Seguro:</strong> ECR cifra las imágenes de contenedor en reposo y en tránsito, utilizando AWS Key Management Service (KMS) para la gestión de claves.</li>
                    <li><strong>Integración Continua:</strong> Compatible con las herramientas de integración y entrega continua (CI/CD) populares, como Jenkins y AWS CodePipeline, facilitando la automatización de los flujos de trabajo de desarrollo.</li>
                    <li><strong>Alta Disponibilidad:</strong> ECR está diseñado para ser altamente disponible y escalable, soportando múltiples regiones y proporcionando una replicación automática para garantizar la durabilidad de las imágenes.</li>
                    <li><strong>Gestión de Imágenes:</strong> Ofrece capacidades avanzadas de gestión de imágenes, como la implementación de políticas de ciclo de vida para eliminar automáticamente imágenes antiguas, reduciendo costos de almacenamiento y mantenimiento.</li>
                </ul>
                <p>Amazon ECR es ideal para equipos de desarrollo que buscan una solución segura y escalable para gestionar y desplegar sus imágenes de contenedor Docker en AWS.</p>
            `,
          imageUrl: ecr,
        },
        "Amazon ECS": {
          description: `
                <p>Amazon Elastic Container Service (Amazon ECS) es un servicio de orquestación de contenedores completamente administrado que facilita la ejecución, detención y gestión de contenedores Docker en un clúster de Amazon EC2 o AWS Fargate. ECS permite a los desarrolladores lanzar y escalar aplicaciones basadas en contenedores sin tener que preocuparse por la infraestructura subyacente.</p>
                <p>Características clave de Amazon ECS:</p>
                <ul>
                    <li><strong>Gestión Simplificada:</strong> ECS proporciona una experiencia de orquestación de contenedores sin servidor con AWS Fargate, eliminando la necesidad de gestionar instancias EC2 directamente.</li>
                    <li><strong>Integración con AWS:</strong> Se integra profundamente con otros servicios de AWS, como Amazon VPC, IAM, CloudWatch y Route 53, proporcionando una solución de contenedores completa y segura.</li>
                    <li><strong>Escalabilidad Automática:</strong> ECS soporta el escalado automático de contenedores y clústeres, permitiendo ajustar la capacidad en función de la demanda de la aplicación.</li>
                    <li><strong>Redes y Seguridad:</strong> Ofrece opciones avanzadas de redes y seguridad, incluyendo la compatibilidad con AWS VPC Networking para el aislamiento de contenedores y políticas de IAM para la gestión de permisos granulares.</li>
                </ul>
                <p>Amazon ECS es ideal para organizaciones que desean ejecutar aplicaciones de contenedores en producción, aprovechando la infraestructura escalable y segura de AWS.</p>
            `,
          imageUrl: ecs,
        },
        "Amazon EKS": {
          description: `
                <p>Amazon Elastic Kubernetes Service (Amazon EKS) es un servicio de Kubernetes completamente administrado que facilita la ejecución de Kubernetes en AWS sin necesidad de operar tu propio plano de control de Kubernetes. EKS gestiona automáticamente la disponibilidad y escalabilidad de los nodos maestros de Kubernetes responsables de programar contenedores, administrar la disponibilidad de las aplicaciones y almacenar los datos del clúster.</p>
                <p>Características clave de Amazon EKS:</p>
                <ul>
                    <li><strong>Completamente Gestionado:</strong> EKS se encarga de todas las tareas de gestión del plano de control de Kubernetes, incluyendo la actualización de versiones, los parches de seguridad y la replicación.</li>
                    <li><strong>Compatibilidad Total con Kubernetes:</strong> EKS es compatible con las herramientas de Kubernetes estándar, permitiendo migrar aplicaciones sin modificar el código o la configuración existente.</li>
                    <li><strong>Integración con AWS:</strong> Se integra profundamente con servicios de AWS como EC2, IAM, CloudWatch, y ALB, proporcionando una experiencia de Kubernetes segura y de alto rendimiento.</li>
                    <li><strong>Alta Disponibilidad:</strong> EKS distribuye automáticamente el plano de control de Kubernetes en múltiples zonas de disponibilidad (AZs) para ofrecer una alta disponibilidad y resiliencia.</li>
                </ul>
                <p>Amazon EKS es ideal para organizaciones que desean ejecutar cargas de trabajo de Kubernetes en producción, aprovechando la gestión automática y la integración con otros servicios de AWS.</p>
            `,
          imageUrl: eks,
        },
        "AWS Managed Services (AMS)": {
          description: `
                <p>AWS Managed Services (AMS) facilita operar tu infraestructura de AWS de manera más eficiente y a escala mediante el uso de las mejores prácticas de AWS. AMS proporciona un conjunto completo de servicios de gestión que abarca el aprovisionamiento, la configuración, el monitoreo, el mantenimiento y la optimización de tus recursos en la nube.</p>
                <p>Características clave de AWS Managed Services:</p>
                <ul>
                    <li><strong>Operaciones Administradas:</strong> AMS se encarga de las tareas operativas diarias, como el monitoreo, los backups, los parches y la resolución de incidentes, permitiéndote enfocarte en tus aplicaciones y negocios.</li>
                    <li><strong>Seguridad y Cumplimiento:</strong> AMS implementa controles de seguridad y cumplimiento basados en las mejores prácticas de AWS, ayudándote a cumplir con regulaciones y estándares de seguridad.</li>
                    <li><strong>Optimización de Costos:</strong> AMS proporciona recomendaciones y acciones automatizadas para optimizar el uso de recursos y reducir costos, asegurando que solo pagues por lo que realmente necesitas.</li>
                    <li><strong>Escalabilidad:</strong> AMS permite escalar tu infraestructura de manera flexible y eficiente para adaptarse a las demandas cambiantes de tu negocio.</li>
                </ul>
                <p>AWS Managed Services es ideal para organizaciones que buscan una gestión operativa integral de su infraestructura en la nube, permitiendo enfocarse en la innovación y el crecimiento de su negocio.</p>
            `,
          imageUrl: "",
        },
        "AWS Support": {
          description: `
                <p>AWS Support proporciona diferentes niveles de soporte técnico y de cuenta para ayudar a los clientes de AWS a planificar, desplegar y operar su infraestructura de AWS. Cada nivel de soporte ofrece beneficios específicos diseñados para adaptarse a distintas necesidades y escenarios empresariales:</p>
                <ul>
                    <li><strong>Basic Support:</strong> Incluido con todas las cuentas de AWS, proporciona acceso a documentación, libros blancos, foros de discusión y AWS Trusted Advisor para recomendaciones básicas.</li>
                    <li><strong>Developer Support:</strong> Diseñado para desarrolladores que están experimentando en AWS. Ofrece asistencia técnica de día laborable, orientación general, acceso a ingenieros de soporte a través de correo electrónico y una respuesta en menos de 24 horas para problemas de gravedad general.</li>
                    <li><strong>Business Support:</strong> Ideal para empresas que ejecutan cargas de trabajo de producción en AWS. Incluye soporte 24/7 por teléfono, chat y correo electrónico, acceso a ingenieros de soporte en menos de una hora para problemas críticos, y acceso a AWS Trusted Advisor con todas las verificaciones.</li>
                    <li><strong>Enterprise Support:</strong> Para organizaciones que necesitan un soporte técnico y de cuenta personalizado. Proporciona un Technical Account Manager (TAM) dedicado, revisiones regulares de infraestructura, acceso prioritario a ingenieros de soporte, y soporte 24/7 para problemas críticos con una respuesta en menos de 15 minutos.</li>
                </ul>
                <p>AWS Support es ideal para cualquier organización que utilice servicios de AWS y necesite soporte técnico confiable y asistencia personalizada para maximizar el valor de su inversión en la nube.</p>
            `,
          imageUrl: planes,
        },
        "Amazon Aurora": {
          description: `
            <p>Amazon Aurora es una base de datos relacional compatible con MySQL y PostgreSQL, construida para la nube, que combina el rendimiento y la disponibilidad de bases de datos comerciales avanzadas con la simplicidad y el costo de las bases de datos de código abierto. Aurora proporciona una latencia de milisegundos y es hasta cinco veces más rápida que MySQL estándar y tres veces más rápida que PostgreSQL estándar.</p>
            
            <h4>Características clave de Amazon Aurora:</h4>
            <ul>
                <li><strong>Compatibilidad:</strong> Totalmente compatible con MySQL y PostgreSQL, lo que facilita la migración de aplicaciones existentes a Aurora.</li>
                <li><strong>Alta Disponibilidad y Durabilidad:</strong> Diseñada específicamente para aprovechar la infraestructura en la nube, ofrece recuperación instantánea de fallos, replicación automática de seis vías y capacidad de escalar el almacenamiento automáticamente hasta 128 TB por instancia de base de datos.</li>
                <li><strong>Motor de Almacenamiento Distribuido:</strong> Utiliza un motor de almacenamiento distribuido y tolerante a fallos que se replica en múltiples zonas de disponibilidad (AZs), proporcionando alta disponibilidad y recuperación rápida ante fallos.</li>
                <li><strong>Rendimiento:</strong> Proporciona una latencia de milisegundos, siendo hasta cinco veces más rápida que MySQL estándar y tres veces más rápida que PostgreSQL estándar.</li>
                <li><strong>Escalabilidad Automática:</strong> Escala automáticamente tanto la capacidad de lectura como la de almacenamiento según sea necesario, sin tiempo de inactividad.</li>
            </ul>
            
            <h4>Casos de Uso:</h4>
            <ul>
                <li><strong>Aplicaciones Empresariales:</strong> Ideal para aplicaciones empresariales críticas que requieren alta disponibilidad, rendimiento y compatibilidad con MySQL y PostgreSQL.</li>
                <li><strong>Aplicaciones Web y Móviles:</strong> Perfecto para aplicaciones web y móviles que necesitan manejar grandes volúmenes de tráfico con baja latencia y alta disponibilidad.</li>
                <li><strong>Análisis de Datos:</strong> Adecuado para aplicaciones de análisis que requieren un alto rendimiento para consultas complejas y grandes volúmenes de datos.</li>
            </ul>
            
            <p>Amazon Aurora es ideal para aplicaciones que requieren alta disponibilidad, rendimiento y compatibilidad con MySQL y PostgreSQL.</p>
          `,
          imageUrl: aurorards,
        },
        "Amazon DynamoDB": {
          description: `
            <p>Amazon DynamoDB es una base de datos NoSQL completamente administrada que proporciona un rendimiento rápido y predecible con escalabilidad perfecta. NoSQL se refiere a bases de datos que no utilizan el modelo relacional tradicional de filas y columnas, lo que les permite manejar grandes volúmenes de datos no estructurados o semiestructurados con alta flexibilidad y escalabilidad.</p>
            
            <h4>Características clave de DynamoDB:</h4>
            <ul>
                <li><strong>Escalabilidad Automática:</strong> DynamoDB ajusta automáticamente la capacidad de la tabla para manejar la carga de tráfico, lo que significa que puede crecer o reducirse según las necesidades de la aplicación sin intervención manual.</li>
                <li><strong>DynamoDB Accelerator (DAX):</strong> Un servicio de caché en memoria que proporciona tiempos de respuesta de milisegundos incluso a millones de solicitudes por segundo, mejorando significativamente el rendimiento de las aplicaciones.</li>
                <li><strong>Global Tables:</strong> Permiten la replicación multi-región para proporcionar una base de datos distribuida globalmente con alta disponibilidad, lo que es crucial para aplicaciones globales que requieren consistencia de datos y baja latencia en todas las regiones.</li>
                <li><strong>Integración con AWS Lambda:</strong> Facilita la creación de aplicaciones serverless (sin servidor) altamente escalables y eficientes, permitiendo ejecutar código en respuesta a eventos en DynamoDB sin gestionar servidores.</li>
            </ul>
            
            <h4>Casos de Uso:</h4>
            <ul>
                <li><strong>Aplicaciones Web de Alto Tráfico:</strong> Ideal para aplicaciones web y móviles que requieren baja latencia y alta escalabilidad, como plataformas de comercio electrónico y redes sociales.</li>
                <li><strong>Juegos en Línea:</strong> Perfecto para juegos en línea que necesitan manejar grandes volúmenes de datos de usuarios en tiempo real con baja latencia.</li>
                <li><strong>IoT:</strong> Adecuado para aplicaciones de Internet de las Cosas (IoT) que recopilan y procesan datos de sensores y dispositivos en tiempo real.</li>
                <li><strong>Aplicaciones Serverless:</strong> Facilita la creación de aplicaciones sin servidor que pueden escalar automáticamente en respuesta a la demanda.</li>
            </ul>
            
            <p>DynamoDB es una opción popular para desarrolladores que necesitan una base de datos NoSQL con un rendimiento confiable y una administración mínima.</p>
          `,
          imageUrl: DynamoDB,
        },
        "Amazon MemoryDB for Redis": {
          description: `
            <p>Amazon MemoryDB for Redis es un servicio de base de datos en memoria completamente administrado que es compatible con Redis y facilita la creación de aplicaciones altamente disponibles y de baja latencia. MemoryDB está diseñado para casos de uso que requieren tiempos de respuesta en microsegundos y una alta disponibilidad, como aplicaciones de juegos, comercio electrónico y análisis en tiempo real.</p>
            
            <h4>¿Qué es Redis?</h4>
            <p>Redis es una base de datos en memoria de código abierto que se utiliza como caché, cola de mensajes y almacén de datos clave-valor. Redis soporta una variedad de estructuras de datos, incluyendo cadenas, listas, conjuntos, hashes y más. Su principal ventaja es el alto rendimiento y baja latencia, lo que lo hace ideal para aplicaciones en tiempo real.</p>
            
            <h4>Características clave de Amazon MemoryDB for Redis:</h4>
            <ul>
                <li><strong>Compatibilidad con Redis:</strong> Totalmente compatible con las API de Redis, lo que permite una migración fácil de aplicaciones existentes que usan Redis. Esto significa que puedes usar los mismos comandos y bibliotecas de cliente de Redis con MemoryDB sin necesidad de cambios significativos en el código.</li>
                <li><strong>Alta disponibilidad:</strong> Replica los datos en múltiples zonas de disponibilidad (AZs) y proporciona recuperación automática ante fallos, asegurando que tus aplicaciones permanezcan disponibles incluso en caso de fallos de hardware o problemas de red.</li>
                <li><strong>Rendimiento en memoria:</strong> Proporciona tiempos de respuesta en microsegundos, ideal para aplicaciones que requieren acceso rápido a datos. Esto es esencial para casos de uso donde la velocidad es crítica, como en aplicaciones de juegos en línea, sistemas de comercio electrónico que manejan inventarios en tiempo real y plataformas de análisis de datos.</li>
                <li><strong>Seguridad:</strong> Incluye características de seguridad como cifrado en reposo y en tránsito, y soporte para Amazon VPC para aislar tu base de datos dentro de una red virtual privada.</li>
                <li><strong>Escalabilidad:</strong> Permite escalar fácilmente la capacidad de lectura y escritura según sea necesario, gestionando automáticamente el escalado horizontal mediante el uso de fragmentación (sharding).</li>
                <li><strong>Gestión Simplificada:</strong> Amazon MemoryDB for Redis es completamente administrado, lo que significa que AWS se encarga del aprovisionamiento, configuración, parches y backups, permitiéndote centrarte en el desarrollo de tus aplicaciones en lugar de en la administración de la base de datos.</li>
            </ul>
            
            <h4>Casos de Uso:</h4>
            <ul>
                <li><strong>Aplicaciones de Juegos:</strong> Los juegos en línea requieren tiempos de respuesta extremadamente rápidos para proporcionar una experiencia de usuario fluida. MemoryDB for Redis puede gestionar datos de sesiones, puntuaciones y otros datos críticos en tiempo real.</li>
                <li><strong>Comercio Electrónico:</strong> En plataformas de comercio electrónico, la disponibilidad y rapidez en el acceso a datos de inventario, carritos de compras y precios son esenciales para una experiencia de compra eficiente y agradable.</          li>
                <li><strong>Análisis en Tiempo Real:</strong> Aplicaciones de análisis que procesan grandes volúmenes de datos en tiempo real, como la monitorización de fraudes o la generación de informes instantáneos, se benefician de la baja latencia y el alto rendimiento de MemoryDB.</li>
                <li><strong>Aplicaciones Web:</strong> Uso de MemoryDB como caché de front-end para reducir la carga de las bases de datos backend y mejorar los tiempos de respuesta para los usuarios.</li>
                <li><strong>Plataformas de Mensajería:</strong> Las aplicaciones de mensajería y chat que requieren almacenamiento y recuperación rápida de mensajes, listas de amigos y estados de usuario.</li>
            </ul>
            
            <p>Amazon MemoryDB for Redis es ideal para desarrolladores que buscan una base de datos en memoria gestionada y de alto rendimiento, proporcionando la combinación perfecta de compatibilidad con Redis, alta disponibilidad y rendimiento excepcional.</p>
          `,
          imageUrl: memorydb,
        },
        "Amazon Neptune": {
          description: `
            <p>Amazon Neptune es un servicio de base de datos de gráficos completamente administrado que facilita la creación y ejecución de aplicaciones con grandes conjuntos de datos altamente conectados. Neptune está diseñado para almacenar y navegar relaciones y conexiones, lo que lo hace ideal para aplicaciones como redes sociales, motores de recomendaciones y detección de fraudes.</p>
            
            <h4>¿Qué es una Base de Datos de Gráficos?</h4>
            <p>Una base de datos de gráficos es un tipo de base de datos que utiliza estructuras de grafos para consultas semánticas con nodos, aristas y propiedades para representar y almacenar datos. Las bases de datos de gráficos están optimizadas para consultar relaciones complejas entre datos, proporcionando un rendimiento superior en comparación con las bases de datos relacionales tradicionales para este tipo de consultas.</p>
            
            <h4>Características clave de Amazon Neptune:</h4>
            <ul>
                <li><strong>Compatibilidad con Múltiples Modelos de Gráficos:</strong> Neptune soporta tanto el modelo de grafos de propiedades (utilizando Gremlin) como el modelo de grafos RDF (utilizando SPARQL), permitiendo flexibilidad en la elección del modelo adecuado para tus aplicaciones.</li>
                <li><strong>Alta Disponibilidad y Durabilidad:</strong> Replica automáticamente tus datos en múltiples zonas de disponibilidad (AZs) y realiza backups continuos en Amazon S3, asegurando la durabilidad y disponibilidad de tus datos.</li>
                <li><strong>Escalabilidad:</strong> Escala automáticamente la capacidad de lectura mediante la adición de réplicas de lectura y ajusta el almacenamiento según sea necesario, sin tiempo de inactividad.</li>
                <li><strong>Seguridad:</strong> Proporciona cifrado en reposo y en tránsito, y permite el aislamiento de red utilizando Amazon VPC, junto con controles de acceso detallados mediante AWS Identity and Access Management (IAM).</li>
                <li><strong>Rendimiento Optimizado:</strong> Diseñado para ejecutar consultas de gráficos de baja latencia, Neptune puede manejar eficientemente consultas complejas sobre grandes conjuntos de datos conectados.</li>
                <li><strong>Compatibilidad con Estándares Abiertos:</strong> Soporta los estándares de gráficos de propiedad (TinkerPop Gremlin) y de gráficos RDF (W3C RDF y SPARQL), facilitando la interoperabilidad y la integración con otras herramientas y tecnologías.</li>
            </ul>
            
            <h4>Casos de Uso:</h4>
            <ul>
                <li><strong>Redes Sociales:</strong> Modela y analiza relaciones complejas entre usuarios, como amigos, seguidores y conexiones, para proporcionar funcionalidades avanzadas de red social.</li>
                <li><strong>Motores de Recomendación:</strong> Utiliza la capacidad de Neptune para analizar relaciones y preferencias de los usuarios para generar recomendaciones personalizadas de productos, contenido o servicios.</li>
                <li><strong>Detección de Fraudes:</strong> Identifica patrones y conexiones sospechosas en transacciones financieras, redes de usuarios y otras entidades para detectar y prevenir fraudes de manera efectiva.</li>
                <li><strong>Gestión de Redes:</strong> Modela y gestiona la topología de redes de TI, telecomunicaciones o sistemas eléctricos, optimizando el rendimiento y la resolución de problemas.</li>
                <li><strong>Sistemas de Gestión de Conocimientos:</strong> Almacena y navega por datos semánticos y ontologías complejas para aplicaciones de inteligencia artificial, aprendizaje automático y gestión de información.</li>
            </ul>
            
            <p>Amazon Neptune es ideal para desarrolladores que necesitan gestionar y analizar relaciones complejas en grandes volúmenes de datos, proporcionando un rendimiento superior y capacidades avanzadas de consulta de gráficos.</p>
          `,
          imageUrl: neptune,
        },
        "Amazon RDS": {
          description: `
            <p>Amazon Relational Database Service (Amazon RDS) facilita la configuración, operación y escalado de bases de datos relacionales en la nube. Una base de datos relacional organiza los datos en tablas con filas y columnas, y utiliza SQL (Structured Query Language) para gestionar y consultar los datos. RDS soporta varios motores de bases de datos, incluyendo Amazon Aurora, MySQL, PostgreSQL, MariaDB, Oracle y Microsoft SQL Server.</p>
            
            <h4>Características clave de Amazon RDS:</h4>
            <ul>
                <li><strong>Gestión Automatizada:</strong> RDS maneja tareas comunes como el aprovisionamiento de hardware, la aplicación de parches de software, las copias de seguridad y la recuperación ante fallos, permitiendo a los desarrolladores centrarse en la optimización y desarrollo de sus aplicaciones.</li>
                <li><strong>Escalabilidad:</strong> Permite escalar verticalmente las instancias de bases de datos aumentando los recursos de la instancia, y horizontalmente utilizando réplicas de lectura para mejorar la capacidad de lectura.</li>
                <li><strong>Alta Disponibilidad:</strong> Utiliza la replicación Multi-AZ para garantizar la alta disponibilidad y la durabilidad de los datos, replicando los datos en múltiples zonas de disponibilidad (AZs).</li>
                <li><strong>Seguridad:</strong> Ofrece cifrado en reposo y en tránsito para proteger los datos, integración con Amazon VPC para aislar la base de datos dentro de una red virtual privada, y controles de acceso detallados mediante AWS Identity and Access Management (IAM) y AWS Key Management Service (KMS).</li>
            </ul>
            
            <h4>Casos de Uso:</h4>
            <ul>
                <li><strong>Aplicaciones Empresariales:</strong> Ideal para aplicaciones empresariales que requieren bases de datos relacionales gestionadas con alta disponibilidad y seguridad.</li>
                <li><strong>Aplicaciones Web y Móviles:</strong> Perfecto para aplicaciones web y móviles que necesitan manejar grandes volúmenes de datos transaccionales.</li>
                <li><strong>Software como Servicio (SaaS):</strong> Adecuado para proveedores de SaaS que necesitan gestionar múltiples bases de datos para diferentes clientes de manera eficiente y segura.</li>
            </ul>
            
            <p>Amazon RDS es ideal para aplicaciones que requieren bases de datos relacionales gestionadas, permitiendo a los desarrolladores centrarse en la optimización y desarrollo de sus aplicaciones.</p>
          `,
          imageUrl: aurorards,
        },
        "AWS AppConfig": {
          description: `
            <p>AWS AppConfig facilita la entrega rápida y segura de configuraciones en las aplicaciones. Permite desplegar configuraciones dinámicamente sin necesidad de reiniciar aplicaciones ni tomar servidores fuera de servicio.</p>
            <p>Características clave de AWS AppConfig:</p>
            <ul>
                <li>Gestión segura de configuraciones sensibles.</li>
                <li>Despliegue de configuraciones con controles de validación y monitoreo en tiempo real.</li>
                <li>Capacidad de revertir configuraciones rápidamente en caso de errores.</li>
            </ul>
            <p>Ideal para gestionar configuraciones en entornos de producción, asegurando cambios rápidos y seguros en las aplicaciones.</p>
          `,
          imageUrl: "",
        },
        "AWS CLI": {
          description: `
            <p>AWS Command Line Interface (AWS CLI) es una herramienta unificada para gestionar tus servicios de AWS desde la línea de comandos. Permite interactuar con los servicios de AWS mediante comandos directos.</p>
            <p>Características clave de AWS CLI:</p>
            <ul>
                <li>Soporte para todos los servicios de AWS.</li>
                <li>Automatización de tareas mediante scripting.</li>
                <li>Acceso directo y gestión de recursos de AWS desde la terminal.</li>
            </ul>
            <p>Ideal para desarrolladores y administradores de sistemas que necesitan una herramienta poderosa y flexible para interactuar con AWS.</p>
          `,
          imageUrl: awscli,
        },
        "AWS Cloud9": {
          description: `
            <p>AWS Cloud9 es un entorno de desarrollo integrado (IDE) basado en la nube que facilita escribir, estilo Visual Studio, ejecutar y depurar tu código con solo un navegador. Proporciona todas las herramientas esenciales de desarrollo en un entorno completamente gestionado.</p>
            <p>Características clave de AWS Cloud9:</p>
            <ul>
                <li>Entorno de desarrollo basado en la nube accesible desde cualquier lugar.</li>
                <li>Colaboración en tiempo real con otros desarrolladores.</li>
                <li>Soporte para múltiples lenguajes de programación como JavaScript, Python y PHP.</li>
            </ul>
            <p>Ideal para desarrolladores que buscan un IDE flexible y colaborativo sin necesidad de gestionar infraestructura de desarrollo.</p>
          `,
          imageUrl: cloud9,
        },
        "AWS CloudShell": {
          description: `
            <p>AWS CloudShell facilita la administración, la experimentación y la interacción con los recursos de AWS mediante una terminal basada en la nube que ya está autenticada con tus credenciales de AWS.</p>
            <p>Características clave de AWS CloudShell:</p>
            <ul>
                <li>Acceso seguro y autenticado a la terminal de AWS.</li>
                <li>Preconfiguración con herramientas comunes de AWS CLI y SDKs.</li>
                <li>Acceso rápido y fácil desde la consola de AWS.</li>
            </ul>
            <p>Ideal para administradores y desarrolladores que necesitan un acceso rápido y seguro a los recursos de AWS desde cualquier lugar.</p>
          `,
          imageUrl: cloudshell,
        },
        "AWS CodeArtifact": {
          description: `
            <p>AWS CodeArtifact es un servicio de gestión de artefactos completamente administrado que facilita alojar y compartir repositorios de artefactos de software. Integra repositorios de artefactos con herramientas de desarrollo y CI/CD.</p>
            <p>Características clave de AWS CodeArtifact:</p>
            <ul>
                <li>Soporte para repositorios de Maven, Npm, NuGet y PyPI.</li>
                <li>Integración con AWS CodeBuild y otros sistemas de CI/CD.</li>
                <li>Control de versiones y gestión de dependencias.</li>
            </ul>
            <p>Ideal para desarrolladores y equipos de DevOps que buscan una solución gestionada para almacenar y compartir artefactos de software.</p>
          `,
          imageUrl: "",
        },
        "AWS CodeBuild": {
          description: `
            <p>AWS CodeBuild es un servicio de integración continua que compila código fuente, ejecuta pruebas y produce paquetes de software que están listos para desplegar. Automatiza el proceso de construcción.</p>
            <p>Características clave de AWS CodeBuild:</p>
            <ul>
                <li>Compilación automática de código fuente desde repositorios como GitHub, Bitbucket y AWS CodeCommit.</li>
                <li>Escalabilidad automática para manejar múltiples construcciones en paralelo.</li>
                <li>Integración con AWS CodePipeline para una entrega continua completa.</li>
            </ul>
            <p>Ideal para desarrolladores que buscan una solución escalable y automatizada para la construcción y prueba de su código.</p>
          `,
          imageUrl: "",
        },
        "AWS CodeCommit": {
          description: `
            <p>AWS CodeCommit es un servicio de control de versiones que facilita alojar repositorios de Git privados y colaborativos. Proporciona una solución segura y escalable para gestionar el código fuente.</p>
            <p>Características clave de AWS CodeCommit:</p>
            <ul>
                <li>Compatibilidad total con Git para un control de versiones familiar.</li>
                <li>Integración con AWS CodePipeline, AWS CodeBuild y otras herramientas de CI/CD.</li>
                <li>Seguridad mejorada con cifrado de datos en reposo y en tránsito, y control de acceso granular con AWS IAM.</li>
            </ul>
            <p>Ideal para equipos de desarrollo que necesitan una solución de control de versiones segura y totalmente gestionada.</p>
          `,
          imageUrl: "",
        },
        "AWS CodeDeploy": {
          description: `
            <p>AWS CodeDeploy facilita automatizar el despliegue de aplicaciones a una variedad de servicios de computación como Amazon EC2, AWS Lambda y servidores locales. Ayuda a minimizar el tiempo de inactividad durante las implementaciones.</p>
            <p>Características clave de AWS CodeDeploy:</p>
            <ul>
                <li>Automatización de despliegues a instancias de EC2, contenedores, servidores locales y funciones Lambda.</li>
                <li>Despliegues escalonados y en paralelo para reducir riesgos y tiempos de inactividad.</li>
                <li>Integración con herramientas de CI/CD como AWS CodePipeline y Jenkins.</li>
            </ul>
            <p>Ideal para desarrolladores y equipos de DevOps que buscan una solución confiable para automatizar y gestionar despliegues de aplicaciones.</p>
          `,
          imageUrl: "",
        },
        "AWS CodePipeline": {
          description: `
            <p>AWS CodePipeline facilita automatizar las fases de construcción, prueba y despliegue de tu proceso de liberación de software. Permite crear flujos de trabajo de entrega continua.</p>
            <p>Características clave de AWS CodePipeline:</p>
            <ul>
                <li>Automatización de todo el proceso de liberación de software desde el código fuente hasta la producción.</li>
                <li>Integración con servicios de AWS como CodeBuild, CodeDeploy y terceros como GitHub y Jenkins.</li>
                <li>Visualización del flujo de trabajo para monitorear el estado de cada etapa del proceso.</li>
            </ul>
            <p>Ideal para equipos de desarrollo que buscan una entrega continua y automatizada de su software.</p>
          `,
          imageUrl: "",
        },
        "AWS CodeStar": {
          description: `
            <p>AWS CodeStar proporciona una interfaz unificada para desarrollar, construir y desplegar aplicaciones en AWS. Simplifica la configuración de todo el flujo de trabajo de desarrollo.</p>
            <p>Características clave de AWS CodeStar:</p>
            <ul>
                <li>Plantillas de proyectos preconfiguradas para varios lenguajes de programación y frameworks.</li>
                <li>Integración con servicios de AWS como CodeCommit, CodeBuild, CodeDeploy y CodePipeline.</li>
                <li>Colaboración en equipo con integración de herramientas como JIRA y Slack.</li>
            </ul>
            <p>Ideal para equipos de desarrollo que buscan una solución completa para gestionar todo el ciclo de vida de desarrollo de software en AWS.</p>
          `,
          imageUrl: "",
        },
        "AWS X-Ray": {
          description: `
            <p>AWS X-Ray facilita analizar y depurar aplicaciones distribuidas en producción, proporcionando una comprensión completa del rendimiento de tu aplicación y sus microservicios subyacentes.</p>
            <p>Características clave de AWS X-Ray:</p>
            <ul>
                <li>Rastreo de solicitudes desde el frontend hasta el backend.</li>
                <li>Visualización de la latencia y los errores en diferentes componentes.</li>
                <li>Integración con servicios de AWS como EC2, ECS, Lambda y más.</li>
            </ul>
            <p>Ideal para desarrolladores y equipos de operaciones que necesitan visibilidad y diagnóstico detallado de aplicaciones distribuidas.</p>
          `,
          imageUrl: "",
        },
        "Amazon WorkSpaces": {
          description: `
        <p>Amazon WorkSpaces es una solución de escritorio como servicio (DaaS) completamente administrada que facilita proporcionar escritorios basados en la nube a tus usuarios. WorkSpaces permite a los usuarios acceder a sus aplicaciones, documentos y recursos desde cualquier dispositivo compatible.</p>
        <p>Características clave de Amazon WorkSpaces:</p>
        <ul>
            <li>Implementación rápida y escalable de escritorios virtuales.</li>
            <li>Seguridad integrada con cifrado de datos en tránsito y en reposo.</li>
            <li>Gestión simplificada de escritorios y aplicaciones.</li>
        </ul>
        <p>Amazon WorkSpaces es ideal para empresas que necesitan proporcionar escritorios virtuales seguros y accesibles para sus empleados remotos o distribuidos.</p>
    `,
          imageUrl: "",
        },
        "AWS Amplify": {
          description: `
        <p>AWS Amplify facilita construir y desplegar aplicaciones web y móviles completas rápidamente con una infraestructura en la nube escalable y segura. Amplify proporciona una serie de herramientas y servicios para desarrollar, implementar y alojar aplicaciones front-end con facilidad.</p>
        <p>Características clave de AWS Amplify:</p>
        <ul>
            <li>Soporte para frameworks populares como React, Angular, Vue y más.</li>
            <li>Autenticación y autorización integradas con Amazon Cognito.</li>
            <li>Implementación continua y alojamiento de aplicaciones front-end.</li>
        </ul>
        <p>AWS Amplify es ideal para desarrolladores que buscan una solución completa para crear y escalar aplicaciones web y móviles modernas.</p>
    `,
          imageUrl: amplify,
        },
        "AWS AppSync": {
          description: `
        <p>AWS AppSync facilita crear API GraphQL y gestionar sus datos en tiempo real. AppSync permite sincronizar datos entre dispositivos y aplicaciones, y proporcionar actualizaciones en tiempo real con facilidad.</p>
        <p>Características clave de AWS AppSync:</p>
        <ul>
            <li>Creación y gestión de API GraphQL.</li>
            <li>Sincronización de datos en tiempo real.</li>
            <li>Integración con servicios de AWS como DynamoDB, Lambda y más.</li>
        </ul>
        <p>AWS AppSync es ideal para desarrolladores que necesitan construir aplicaciones móviles y web con actualizaciones de datos en tiempo real y una API GraphQL robusta.</p>
    `,
          imageUrl: appsync,
        },
        "Amazon Comprehend": {
          description: `
        <p>Amazon Comprehend es un servicio de procesamiento de lenguaje natural (NLP) que facilita descubrir información en tus datos de texto. Comprehend utiliza machine learning para identificar sentimientos, entidades, frases clave, idioma y más en los textos.</p>
        <p>Características clave de Amazon Comprehend:</p>
        <ul>
            <li>Identificación de sentimientos y análisis de tono.</li>
            <li>Reconocimiento de entidades y extracción de frases clave.</li>
            <li>Clasificación de documentos y detección de idioma.</li>
        </ul>
        <p>Amazon Comprehend es ideal para empresas que buscan extraer información valiosa de grandes volúmenes de datos textuales.</p>
    `,
          imageUrl: "",
        },
        "Amazon Kendra": {
          description: `
        <p>Amazon Kendra es un servicio de búsqueda empresarial potenciado por aprendizaje automático que facilita encontrar la información dentro de tu organización. Kendra utiliza machine learning para comprender el contexto y proporcionar resultados de búsqueda precisos y relevantes.</p>
        <p>Características clave de Amazon Kendra:</p>
        <ul>
            <li>Búsqueda avanzada con machine learning.</li>
            <li>Integración con múltiples fuentes de datos.</li>
            <li>Capacidad de comprender y responder a preguntas en lenguaje natural.</li>
        </ul>
        <p>Amazon Kendra es ideal para organizaciones que necesitan mejorar la búsqueda y el acceso a información crítica dentro de sus datos corporativos.</p>
    `,
          imageUrl: "",
        },
        "Amazon Lex": {
          description: `
        <p>Amazon Lex facilita construir interfaces de conversación en cualquier aplicación usando voz y texto. Lex utiliza las mismas tecnologías de reconocimiento de voz y comprensión del lenguaje natural que Amazon Alexa, permitiendo crear chatbots y asistentes virtuales avanzados.</p>
        <p>Características clave de Amazon Lex:</p>
        <ul>
            <li>Reconocimiento de voz y procesamiento de lenguaje natural.</li>
            <li>Construcción de chatbots y asistentes virtuales.</li>
            <li>Integración con otros servicios de AWS como Lambda y DynamoDB.</li>
        </ul>
        <p>Amazon Lex es ideal para desarrolladores que buscan crear experiencias de usuario interactivas y conversacionales en sus aplicaciones.</p>
    `,
          imageUrl: "",
        },
        "Amazon Polly": {
          description: `
        <p>Amazon Polly es un servicio que convierte texto en habla realista, facilitando la creación de aplicaciones que hablan y la creación de categorías enteramente nuevas de productos habilitados para voz. Polly utiliza tecnologías avanzadas de deep learning para sintetizar voces naturales y claras en múltiples idiomas.</p>
        <p>Características clave de Amazon Polly:</p>
        <ul>
            <li>Conversión de texto a voz en tiempo real.</li>
            <li>Soporte para múltiples idiomas y estilos de voz.</li>
            <li>Capacidad de personalizar la pronunciación y la entonación.</li>
        </ul>
        <p>Amazon Polly es ideal para desarrolladores que buscan agregar capacidades de voz a sus aplicaciones y productos, mejorando la accesibilidad y la interacción del usuario.</p>
    `,
          imageUrl: "",
        },
        "Amazon Rekognition": {
          description: `
        <p>Amazon Rekognition facilita agregar análisis de imágenes y videos a tus aplicaciones. Rekognition utiliza machine learning para identificar objetos, personas, texto, escenas y actividades en imágenes y videos, así como para realizar análisis faciales y búsqueda de imágenes similares.</p>
        <p>Características clave de Amazon Rekognition:</p>
        <ul>
            <li>Detección de objetos, escenas y actividades en imágenes y videos.</li>
            <li>Análisis y reconocimiento facial.</li>
            <li>Detección de texto en imágenes.</li>
        </ul>
        <p>Amazon Rekognition es ideal para aplicaciones que requieren capacidades avanzadas de análisis de imágenes y videos, como la seguridad, el marketing y la gestión de contenidos.</p>
    `,
          imageUrl: "",
        },
        "Amazon SageMaker": {
          description: `
        <p>Amazon SageMaker facilita construir, entrenar y desplegar modelos de aprendizaje automático (ML) a cualquier escala. SageMaker proporciona un conjunto completo de herramientas para cada paso del proceso de desarrollo de ML, desde la preparación de datos hasta el entrenamiento y la implementación de modelos.</p>
        <p>Características clave de Amazon SageMaker:</p>
        <ul>
            <li>Entorno de desarrollo integrado para la creación de modelos ML.</li>
            <li>Herramientas automatizadas para la preparación y etiquetado de datos.</li>
            <li>Capacidades de entrenamiento distribuidas y ajustadas para mejorar el rendimiento del modelo.</li>
            <li>Implementación sencilla de modelos entrenados en entornos de producción.</li>
        </ul>
        <p>Amazon SageMaker es ideal para científicos de datos, desarrolladores y equipos de ML que buscan una solución completa y escalable para desarrollar y desplegar modelos de aprendizaje automático.</p>
    `,
          imageUrl: "",
        },
        "Amazon Textract": {
          description: `
        <p>Amazon Textract facilita extraer texto y datos de documentos escaneados de forma automática. Textract utiliza machine learning para leer y procesar documentos escaneados, identificando texto impreso, campos de formulario y tablas con alta precisión.</p>
        <p>Características clave de Amazon Textract:</p>
        <ul>
            <li>Extracción automática de texto impreso y datos estructurados.</li>
            <li>Detección de campos de formulario y tablas.</li>
            <li>Integración con otros servicios de AWS para procesamiento y almacenamiento de datos.</li>
        </ul>
        <p>Amazon Textract es ideal para organizaciones que necesitan automatizar la extracción de datos de documentos y mejorar la eficiencia de sus flujos de trabajo.</p>
    `,
          imageUrl: "",
        },
        "Amazon Transcribe": {
          description: `
        <p>Amazon Transcribe facilita agregar capacidades de conversión de voz a texto a tus aplicaciones. Transcribe utiliza tecnologías avanzadas de reconocimiento automático de voz (ASR) para convertir audio en texto, permitiendo la transcripción precisa de llamadas, reuniones y otros contenidos de audio.</p>
        <p>Características clave de Amazon Transcribe:</p>
        <ul>
            <li>Transcripción automática de audio en texto en tiempo real.</li>
            <li>Soporte para múltiples idiomas y dialectos.</li>
            <li>Capacidades de puntuación automática y etiquetado de altavoces.</li>
        </ul>
        <p>Amazon Transcribe es ideal para aplicaciones que requieren la conversión de voz a texto, como la transcripción de llamadas, la creación de subtítulos y la automatización de procesos basados en voz.</p>
    `,
          imageUrl: "",
        },
        "Amazon Translate": {
          description: `
        <p>Amazon Translate facilita traducir texto entre diferentes idiomas de forma automática. Translate utiliza tecnologías avanzadas de aprendizaje profundo para proporcionar traducciones precisas y naturales, permitiendo a las aplicaciones superar las barreras del idioma.</p>
        <p>Características clave de Amazon Translate:</p>
        <ul>
            <li>Traducción automática de texto en tiempo real.</li>
            <li>Soporte para una amplia variedad de idiomas y pares de traducción.</li>
            <li>Capacidades de personalización para mejorar la precisión de las traducciones específicas del dominio.</li>
        </ul>
        <p>Amazon Translate es ideal para aplicaciones que necesitan ofrecer contenidos multilingües y superar las barreras del idioma para llegar a una audiencia global.</p>
    `,
          imageUrl: "",
        },
        "AWS Auto Scaling": {
          description: `
              <p>AWS Auto Scaling facilita configurar el escalado automático para sus recursos de AWS. Ajusta automáticamente la capacidad de computación para mantener un rendimiento estable y predecible al menor costo posible.</p>
              <p>Características clave de AWS Auto Scaling:</p>
              <ul>
                  <li>Escalado automático para EC2, ECS, DynamoDB, Aurora y más.</li>
                  <li>Optimización del rendimiento y reducción de costos.</li>
                  <li>Configuración basada en la demanda de la carga de trabajo.</li>
              </ul>
              <p>Ideal para mantener el rendimiento y optimizar costos en entornos variables.</p>
              <p><strong>Caso práctico:</strong> Imagina que tienes una aplicación web con picos de tráfico durante ciertas horas del día. Con AWS Auto Scaling, puedes configurar políticas para agregar más instancias EC2 cuando el tráfico aumenta y reducirlas cuando el tráfico disminuye, garantizando así un rendimiento constante sin pagar por recursos ociosos.</p>
            `,
          imageUrl: "",
        },
        "AWS CloudFormation": {
          description: `
              <p>AWS CloudFormation facilita modelar y configurar sus recursos de AWS utilizando plantillas, reduciendo el tiempo de gestión de la infraestructura.</p>
              <p>Características clave de AWS CloudFormation:</p>
              <ul>
                  <li>Automatización completa de la infraestructura mediante plantillas.</li>
                  <li>Control de versiones y replicación de entornos.</li>
                  <li>Integración con otros servicios de AWS para automatización avanzada.</li>
              </ul>
              <p>Ideal para gestionar infraestructuras complejas de manera eficiente y coherente.</p>
              <p><strong>Caso práctico:</strong> Supongamos que tienes una aplicación que necesita un conjunto específico de recursos AWS (EC2, RDS, S3, etc.). Con AWS CloudFormation, puedes definir estos recursos en una plantilla y desplegar la infraestructura completa con un solo comando, asegurando consistencia y reduciendo errores manuales.</p>
            `,
          imageUrl: "",
        },
        "AWS CloudTrail": {
          description: `
              <p>AWS CloudTrail facilita la gobernanza, el cumplimiento y la auditoría operativa de su cuenta de AWS, registrando todas las acciones realizadas en su cuenta.</p>
              <p>Características clave de AWS CloudTrail:</p>
              <ul>
                  <li>Registro detallado de actividades de API.</li>
                  <li>Monitoreo continuo y alertas de actividades sospechosas.</li>
                  <li>Integración con AWS CloudWatch y AWS Config para mayor control.</li>
              </ul>
              <p>Esencial para mantener la seguridad y el cumplimiento en entornos de AWS.</p>
              <p><strong>Auditoría:</strong> La auditoría se refiere a la revisión y análisis de los registros de actividad para asegurarse de que se están siguiendo las políticas y procedimientos adecuados.</p>
              <p><strong>Caso práctico:</strong> Si necesitas investigar un acceso no autorizado a tu infraestructura, puedes usar AWS CloudTrail para revisar los registros de actividad y determinar quién accedió a qué recurso y cuándo, ayudando en la auditoría y resolución de incidentes de seguridad.</p>
            `,
          imageUrl: "",
        },
        "Amazon CloudWatch": {
          description: `
              <p>Amazon CloudWatch facilita monitorear y gestionar aplicaciones y servicios en AWS, proporcionando datos y conocimientos procesables.</p>
              <p>Características clave de Amazon CloudWatch:</p>
              <ul>
                  <li>Monitoreo en tiempo real de métricas de sistema y aplicación.</li>
                  <li>Creación de alarmas para notificaciones y acciones automatizadas.</li>
                  <li>Capacidades de log y monitoreo de logs con CloudWatch Logs.</li>
              </ul>
              <p>Ideal para mantener la salud y el rendimiento de sus aplicaciones y servicios.</p>
              <p><strong>Monitoreo:</strong> El monitoreo implica observar continuamente el rendimiento de los recursos y aplicaciones para identificar y responder a posibles problemas.</p>
              <p><strong>Caso práctico:</strong> Si tu aplicación web experimenta una disminución en el rendimiento, puedes usar Amazon CloudWatch para monitorear las métricas de CPU y memoria de tus instancias EC2, crear alarmas para ser notificado si se alcanzan ciertos umbrales, y tomar acciones automatizadas como reiniciar instancias o escalar horizontalmente.</p>
            `,
          imageUrl: "",
        },
        "AWS Compute Optimizer": {
          description: `
              <p>AWS Compute Optimizer facilita recomendar recursos de cómputo óptimos para mejorar el rendimiento y reducir costos.</p>
              <p>Características clave de AWS Compute Optimizer:</p>
              <ul>
                  <li>Recomendaciones basadas en el análisis de métricas de uso.</li>
                  <li>Optimización para instancias EC2, volúmenes de EBS y más.</li>
                  <li>Mejora del rendimiento y reducción de costos.</li>
              </ul>
              <p>Ideal para asegurarse de que está utilizando los recursos de cómputo más eficientes para sus cargas de trabajo.</p>
              <p><strong>Optimización:</strong> La optimización se refiere a ajustar los recursos y configuraciones para obtener el mejor rendimiento posible al menor costo.</p>
              <p><strong>Caso práctico:</strong> Si tienes una instancia EC2 que está subutilizada, AWS Compute Optimizer puede recomendarte cambiar a un tipo de instancia más pequeño para reducir costos, o si una instancia está sobrecargada, recomendar un tipo más grande para mejorar el rendimiento.</p>
            `,
          imageUrl: "",
        },
        "AWS Config": {
          description: `
              <p>AWS Config facilita evaluar, auditar y evaluar las configuraciones de sus recursos de AWS, proporcionando un inventario detallado y un historial de configuraciones.</p>
              <p>Características clave de AWS Config:</p>
              <ul>
                  <li>Monitoreo continuo de configuraciones de recursos.</li>
                  <li>Evaluaciones de conformidad basadas en reglas predefinidas.</li>
                  <li>Integración con AWS CloudTrail para auditorías detalladas.</li>
              </ul>
              <p>Esencial para mantener la conformidad y la gobernanza de los recursos de AWS.</p>
              <p><strong>Auditoría:</strong> La auditoría implica revisar y analizar las configuraciones y actividades para asegurarse de que cumplen con las políticas y estándares establecidos.</p>
              <p><strong>Caso práctico:</strong> Si necesitas asegurarte de que todas tus instancias EC2 cumplen con ciertos requisitos de seguridad (como estar dentro de un grupo de seguridad específico), puedes usar AWS Config para monitorear estas configuraciones y recibir alertas si alguna instancia no cumple con las reglas establecidas.</p>
            `,
          imageUrl: "",
        },
        "AWS Control Tower": {
          description: `
              <p>AWS Control Tower facilita configurar y gobernar un entorno de múltiples cuentas de AWS seguro y bien arquitectado, proporcionando un entorno preconfigurado y automatizado.</p>
              <p>Características clave de AWS Control Tower:</p>
              <ul>
                  <li>Configuración automatizada de entornos de múltiples cuentas.</li>
                  <li>Guardrails de seguridad y conformidad preconfigurados.</li>
                  <li>Monitoreo continuo y visibilidad de todo el entorno de AWS.</li>
              </ul>
              <p>Ideal para organizaciones que necesitan una gestión centralizada y gobernanza de múltiples cuentas de AWS.</p>
              <p><strong>Guardrails:</strong> Los guardrails son políticas preconfiguradas que ayudan a asegurar que las cuentas y recursos sigan las mejores prácticas y estándares de seguridad.</p>
              <p><strong>Caso práctico:</strong> Una gran empresa que maneja múltiples cuentas de AWS para diferentes departamentos puede usar AWS Control Tower para configurar políticas de seguridad y conformidad a nivel de toda la organización, asegurando que todas las cuentas sigan las mejores prácticas sin la necesidad de configurarlas manualmente una por una.</p>
            `,
          imageUrl: "",
        },
        "AWS Health Dashboard": {
          description: `
              <p>AWS Health Dashboard proporciona visibilidad a eventos y recomendaciones de AWS para ayudar a gestionar su salud operativa, ofreciendo una vista centralizada de la salud de sus servicios de AWS.</p>
              <p>Características clave de AWS Health Dashboard:</p>
              <ul>
                  <li>Monitoreo de la salud de los servicios de AWS en tiempo real.</li>
                  <li>Alertas y notificaciones personalizadas para eventos relevantes.</li>
                  <li>Recomendaciones proactivas para mantener la salud operativa.</li>
              </ul>
              <p>Esencial para mantener la visibilidad y la salud de sus servicios de AWS.</p>
              <p><strong>Caso práctico:</strong> Si un servicio de AWS que estás utilizando tiene una interrupción, AWS Health Dashboard te notificará del problema y proporcionará actualizaciones en tiempo real sobre el estado del servicio y recomendaciones sobre cómo mitigar el impacto en tus aplicaciones.</p>
            `,
          imageUrl: "",
        },
        "AWS Management Console": {
          description: `
              <p>AWS Management Console facilita gestionar sus recursos de AWS con una interfaz web sencilla y gráfica, proporcionando una vista centralizada de todos sus servicios de AWS.</p>
              <p>Características clave de AWS Management Console:</p>
              <ul>
                  <li>Interfaz gráfica intuitiva para la gestión de recursos.</li>
                  <li>Acceso a todos los servicios de AWS desde un solo lugar.</li>
                  <li>Herramientas de monitoreo y administración integradas.</li>
              </ul>
              <p>Ideal para administradores y usuarios que prefieren una interfaz gráfica para gestionar sus recursos de AWS.</p>
              <p><strong>Interfaz gráfica:</strong> Una interfaz gráfica es una forma visual de interactuar con los servicios y recursos, usando botones, menús y ventanas en lugar de comandos de texto.</p>
              <p><strong>Caso práctico:</strong> Si eres un administrador que prefiere no usar la línea de comandos, puedes utilizar la AWS Management Console para lanzar instancias EC2, configurar servicios de S3 y monitorear tus recursos de manera visual e intuitiva.</p>
            `,
          imageUrl: "",
        },
        "AWS Organizations": {
          description: `
              <p>AWS Organizations facilita gestionar y gobernar sus entornos de AWS a medida que su negocio escala y crece, permitiendo consolidar varias cuentas de AWS en una organización.</p>
              <p>Características clave de AWS Organizations:</p>
              <ul>
                  <li>Gestión centralizada de múltiples cuentas de AWS.</li>
                  <li>Aplicación de políticas de seguridad y conformidad a nivel de organización.</li>
                  <li>Consolidación de facturación para todas las cuentas de la organización.</li>
              </ul>
              <p>Ideal para grandes empresas y organizaciones que necesitan una gestión centralizada y gobernanza de múltiples cuentas de AWS.</p>
              <p><strong>Consolidación de facturación:</strong> La consolidación de facturación permite agrupar los costos de todas las cuentas de AWS en una sola factura, simplificando la gestión de pagos y aprovechando descuentos por volumen.</p>
              <p><strong>Caso práctico:</strong> Una empresa con diferentes departamentos que usan sus propias cuentas de AWS puede usar AWS Organizations para aplicar políticas de seguridad a todas las cuentas, monitorear el uso y consolidar los costos en una sola factura, facilitando la gestión financiera y de cumplimiento.</p>
            `,
          imageUrl: "",
        },
        "AWS Service Catalog": {
          description: `
              <p>AWS Service Catalog facilita crear y gestionar catálogos de servicios de TI aprobados en AWS, permitiendo a las organizaciones estandarizar las ofertas de servicios de TI.</p>
              <p>Características clave de AWS Service Catalog:</p>
              <ul>
                  <li>Creación de catálogos de servicios aprobados.</li>
                  <li>Gestión de versiones y actualizaciones de productos de catálogo.</li>
                  <li>Control de acceso y permisos para la utilización de productos de catálogo.</li>
              </ul>
              <p>Ideal para organizaciones que desean estandarizar y gestionar sus ofertas de servicios de TI en AWS.</p>
              <p><strong>Catálogo de servicios:</strong> Un catálogo de servicios es una colección organizada de recursos y servicios aprobados que los usuarios pueden desplegar y utilizar, asegurando que se sigan las políticas y estándares de la organización.</p>
              <p><strong>Caso práctico:</strong> Una empresa de TI puede crear un catálogo de servicios con configuraciones aprobadas de instancias EC2, bases de datos y redes, permitiendo a los empleados desplegar estos recursos de manera rápida y conforme a las políticas de la empresa.</p>
            `,
          imageUrl: "",
        },
        "AWS Systems Manager": {
          description: `
              <p>AWS Systems Manager facilita ver y controlar su infraestructura de AWS a medida que crece, proporcionando una interfaz unificada para gestionar recursos y automatizar tareas operativas.</p>
              <p>Características clave de AWS Systems Manager:</p>
              <ul>
                  <li>Automatización de tareas operativas.</li>
                  <li>Gestión centralizada de recursos y configuraciones.</li>
                  <li>Monitoreo y administración de estado de recursos.</li>
              </ul>
              <p>Ideal para administradores que necesitan una herramienta completa para gestionar y automatizar su infraestructura de AWS.</p>
              <p><strong>Automatización:</strong> La automatización implica usar herramientas y scripts para realizar tareas repetitivas sin intervención manual, ahorrando tiempo y reduciendo errores.</p>
              <p><strong>Caso práctico:</strong> Si necesitas aplicar parches de seguridad a cientos de instancias EC2, puedes usar AWS Systems Manager para automatizar este proceso, asegurando que todas las instancias estén actualizadas sin tener que hacerlo manualmente una por una.</p>
            `,
          imageUrl: "",
        },
        "AWS Trusted Advisor": {
          description: `
              <p>AWS Trusted Advisor facilita optimizar su infraestructura de AWS, mejorar la seguridad y el rendimiento, y reducir costos, proporcionando recomendaciones personalizadas basadas en las mejores prácticas de AWS.</p>
              <p>Características clave de AWS Trusted Advisor:</p>
              <ul>
                  <li>Recomendaciones para optimizar costos y rendimiento.</li>
                  <li>Mejoras en la seguridad y la tolerancia a fallos.</li>
                  <li>Monitoreo continuo de límites de servicio.</li>
              </ul>
              <p>Ideal para organizaciones que desean mejorar la eficiencia y la seguridad de su infraestructura de AWS.</p>
              <p><strong>Recomendaciones personalizadas:</strong> Las recomendaciones personalizadas son sugerencias específicas basadas en la configuración y uso actual de tus recursos, ayudándote a mejorar y optimizar tu infraestructura.</p>
              <p><strong>Caso práctico:</strong> AWS Trusted Advisor puede recomendar eliminar instancias EC2 no utilizadas para reducir costos, habilitar Multi-Factor Authentication (MFA) para mejorar la seguridad, y ajustar configuraciones para mejorar el rendimiento de las aplicaciones.</p>
            `,
          imageUrl: "",
        },
        "AWS Well-Architected Tool": {
          description: `
              <p>AWS Well-Architected Tool facilita revisar el estado de sus cargas de trabajo y comparar las mejores prácticas arquitectónicas de AWS, proporcionando una evaluación detallada y recomendaciones para mejorar la arquitectura de sus aplicaciones.</p>
              <p>Características clave de AWS Well-Architected Tool:</p>
              <ul>
                  <li>Evaluación de cargas de trabajo basada en los cinco pilares del Well-Architected Framework.</li>
                  <li>Recomendaciones para mejorar la arquitectura y alinearla con las mejores prácticas de AWS.</li>
                  <li>Seguimiento del progreso de las mejoras arquitectónicas.</li>
              </ul>
              <p>Ideal para arquitectos y equipos de desarrollo que desean asegurarse de que sus aplicaciones están bien diseñadas y optimizadas.</p>
              <p><strong>Well-Architected Framework:</strong> El Well-Architected Framework es un conjunto de mejores prácticas de AWS dividido en cinco pilares: Excelencia Operacional, Seguridad, Fiabilidad, Eficiencia de Rendimiento y Optimización de Costos.</p>
              <p><strong>Caso práctico:</strong> Si estás desarrollando una nueva aplicación, puedes usar la AWS Well-Architected Tool para evaluar tu arquitectura actual, recibir recomendaciones sobre cómo mejorarla y asegurarte de que cumple con las mejores prácticas de AWS en términos de seguridad, eficiencia y costos.</p>
            `,
          imageUrl: "",
        },
        "AWS Database Migration Service (AWS DMS)": {
          description: `
        <p>AWS Database Migration Service facilita migrar bases de datos a AWS de manera rápida y segura. DMS soporta migraciones homogéneas (por ejemplo, Oracle a Oracle) y heterogéneas (por ejemplo, Oracle a Aurora), permitiendo a las organizaciones mover sus bases de datos a la nube con mínima interrupción.</p>
        <p>Características clave de AWS DMS:</p>
        <ul>
            <li>Migración de bases de datos en funcionamiento con mínima interrupción.</li>
            <li>Soporte para múltiples motores de bases de datos.</li>
            <li>Automatización de conversiones de esquemas de bases de datos.</li>
        </ul>
        <p>AWS DMS es ideal para organizaciones que desean migrar sus bases de datos a AWS sin interrumpir sus operaciones.</p>
    `,
          imageUrl: "",
        },
        "AWS Migration Hub": {
          description: `
        <p>AWS Migration Hub facilita planificar, realizar un seguimiento y gestionar sus migraciones de aplicaciones a AWS. Proporciona una vista centralizada de todo el proceso de migración, permitiendo a los usuarios rastrear el progreso de las migraciones a través de diferentes herramientas y servicios de AWS.</p>
        <p>Características clave de AWS Migration Hub:</p>
        <ul>
            <li>Vista centralizada del progreso de las migraciones.</li>
            <li>Compatibilidad con múltiples herramientas de migración.</li>
            <li>Seguimiento del progreso y estado de las aplicaciones migradas.</li>
        </ul>
        <p>AWS Migration Hub es ideal para organizaciones que desean gestionar y optimizar sus procesos de migración a la nube.</p>
    `,
          imageUrl: "",
        },
        "AWS Schema Conversion Tool (AWS SCT)": {
          description: `
        <p>AWS Schema Conversion Tool facilita convertir esquemas de bases de datos y dependencias de una base de datos origen a una base de datos destino compatible con AWS. SCT automatiza gran parte del proceso de conversión, reduciendo el esfuerzo manual y los errores.</p>
        <p>Características clave de AWS SCT:</p>
        <ul>
            <li>Conversión automatizada de esquemas de bases de datos.</li>
            <li>Compatibilidad con múltiples motores de bases de datos.</li>
            <li>Evaluación y optimización de esquemas convertidos.</li>
        </ul>
        <p>AWS SCT es ideal para organizaciones que desean migrar sus bases de datos a AWS con una conversión de esquemas eficiente y precisa.</p>
    `,
          imageUrl: "",
        },
        "AWS Snow Family": {
          description: `
                <p>AWS Snow Family facilita migrar grandes volúmenes de datos dentro y fuera de AWS utilizando dispositivos de almacenamiento portátiles. La familia incluye AWS Snowcone, AWS Snowball y AWS Snowmobile, cada uno diseñado para diferentes volúmenes de datos y casos de uso.</p>
                <p>Tipos de dispositivos AWS Snow Family:</p>
                <ul>
                    <li><strong>AWS Snowcone:</strong> El miembro más pequeño de la familia, AWS Snowcone, tiene 8 TB de capacidad de almacenamiento utilizable. Es ideal para ubicaciones remotas y entornos con espacio limitado. Puede ser alimentado por USB y soporta cargas de trabajo locales además de la transferencia de datos.</li>
                    <li><strong>AWS Snowball:</strong> Disponible en dos variantes: Snowball Edge Storage Optimized y Snowball Edge Compute Optimized.
                        <ul>
                            <li><strong>Snowball Edge Storage Optimized:</strong> Proporciona 80 TB de almacenamiento utilizable y está diseñado para cargas de trabajo que requieren almacenamiento masivo y capacidades de procesamiento moderadas.</li>
                            <li><strong>Snowball Edge Compute Optimized:</strong> Proporciona 42 TB de almacenamiento utilizable y está diseñado para cargas de trabajo que requieren capacidades de procesamiento adicionales, incluyendo hasta 52 vCPUs.</li>
                        </ul>
                    </li>
                    <li><strong>AWS Snowmobile:</strong> Un servicio de transferencia de datos a escala de exabytes. Snowmobile es un contenedor de envío de 45 pies que puede transferir hasta 100 PB de datos. Está diseñado para grandes migraciones de datos, como centros de datos completos.</li>
                </ul>
                <p>Características clave de AWS Snow Family:</p>
                <ul>
                    <li>Transferencia segura y eficiente de grandes volúmenes de datos.</li>
                    <li>Dispositivos resistentes y diseñados para operar en entornos difíciles.</li>
                    <li>Integración con servicios de AWS para la transferencia de datos y el procesamiento local.</li>
                </ul>
                <p>AWS Snow Family es ideal para organizaciones que necesitan transferir grandes volúmenes de datos de manera segura y eficiente, ya sea desde ubicaciones remotas, entornos industriales o centros de datos completos.</p>
            `,
          imageUrl: "",
        },
        "AWS Transfer Family": {
          description: `
        <p>AWS Transfer Family facilita transferir archivos de forma segura a Amazon S3 o Amazon EFS. Soporta protocolos SFTP, FTPS y FTP, proporcionando una solución completa y segura para la transferencia de archivos a servicios de almacenamiento en AWS.</p>
        <p>Características clave de AWS Transfer Family:</p>
        <ul>
            <li>Soporte para múltiples protocolos de transferencia de archivos.</li>
            <li>Transferencias seguras con cifrado en tránsito.</li>
            <li>Integración directa con Amazon S3 y Amazon EFS.</li>
        </ul>
        <p>AWS Transfer Family es ideal para organizaciones que necesitan transferir archivos de manera segura y eficiente a servicios de almacenamiento en AWS.</p>
    `,
          imageUrl: "",
        },
        "Amazon API Gateway": {
          description: `
            <p>Amazon API Gateway facilita crear, publicar, mantener, monitorear y asegurar API a cualquier escala. Proporciona una plataforma completamente gestionada para construir, desplegar y gestionar API REST y WebSocket, permitiendo a los desarrolladores crear aplicaciones escalables y seguras.</p>
            <p>Características clave de Amazon API Gateway:</p>
            <ul>
                <li>Creación y despliegue de API REST y WebSocket.</li>
                <li>Monitoreo y análisis de tráfico de API.</li>
                <li>Integración con servicios de backend como AWS Lambda, Amazon EC2 y más.</li>
            </ul>
            <p>Amazon API Gateway es ideal para desarrolladores que necesitan crear y gestionar API escalables y seguras.</p>
          `,
          imageUrl: apigateway,
        },
        "Amazon CloudFront": {
          description: `
            <p>Amazon CloudFront es una red de entrega de contenido (CDN) que facilita entregar datos, videos, aplicaciones y API a sus usuarios globalmente con baja latencia y altas velocidades de transferencia. CloudFront se integra con otros servicios de AWS para proporcionar una experiencia de entrega de contenido segura y optimizada.</p>
            <p>Características clave de Amazon CloudFront:</p>
            <ul>
                <li>Entrega global de contenido con baja latencia.</li>
                <li>Integración con Amazon S3, AWS Lambda y otros servicios de AWS.</li>
                <li>Seguridad mejorada con AWS Shield, AWS WAF y certificados SSL/TLS.</li>
            </ul>
            <p>Amazon CloudFront es ideal para organizaciones que necesitan una entrega rápida y segura de contenido a usuarios globales.</p>
            <p><strong>¿Qué es la entrega de contenido?</strong> La entrega de contenido se refiere a la distribución de contenido digital, como datos, videos, aplicaciones y API, a usuarios finales a través de una red de servidores distribuidos geográficamente para asegurar baja latencia y alta velocidad.</p>
            <p><strong>Diferencias con AWS Global Accelerator:</strong> Mientras que CloudFront se centra en la entrega rápida de contenido estático y dinámico, AWS Global Accelerator mejora la disponibilidad y el rendimiento de sus aplicaciones al dirigir el tráfico de usuario a los puntos de presencia de AWS más cercanos.</p>
            <p><strong>Ejemplo práctico:</strong> Una empresa de medios puede usar Amazon CloudFront para entregar videos a sus usuarios en todo el mundo, asegurando una experiencia de visualización rápida y sin interrupciones.</p>
          `,
          imageUrl: cloudfront,
        },
        "AWS Direct Connect": {
          description: `
            <p>AWS Direct Connect facilita establecer una conexión de red dedicada desde sus instalaciones a AWS. Proporciona una conexión de red privada de alta velocidad que puede mejorar el rendimiento de las aplicaciones y reducir los costos de transferencia de datos.</p>
            <p>Características clave de AWS Direct Connect:</p>
            <ul>
                <li>Conexión de red dedicada y privada a AWS.</li>
                <li>Mejora del rendimiento de aplicaciones y reducción de latencia.</li>
                <li>Reducción de costos de transferencia de datos.</li>
            </ul>
            <p>AWS Direct Connect es ideal para organizaciones que necesitan una conexión de red fiable y de alta velocidad a AWS.</p>
            <p><strong>Ejemplo práctico:</strong> Una empresa financiera puede utilizar AWS Direct Connect para transferir grandes volúmenes de datos de manera segura y eficiente entre sus centros de datos y AWS, mejorando el rendimiento y reduciendo los costos de transferencia.</p>
          `,
          imageUrl: directconnect,
        },
        "AWS Global Accelerator": {
          description: `
            <p>AWS Global Accelerator facilita mejorar la disponibilidad y el rendimiento de sus aplicaciones globales mediante rutas optimizadas y controladas por la red global de AWS. Global Accelerator dirige el tráfico de usuario a los puntos de presencia de AWS más cercanos, optimizando la entrega de contenido y aplicaciones.</p>
            <p>Características clave de AWS Global Accelerator:</p>
            <ul>
                <li>Mejora del rendimiento de aplicaciones globales.</li>
                <li>Rutas optimizadas para la entrega de contenido.</li>
                <li>Mayor disponibilidad y fiabilidad de aplicaciones.</li>
            </ul>
            <p>AWS Global Accelerator es ideal para organizaciones que necesitan mejorar la experiencia de usuario y la disponibilidad de sus aplicaciones a nivel global.</p>
            <p><strong>Ejemplo práctico:</strong> Una aplicación de juegos en línea puede usar AWS Global Accelerator para mejorar la latencia y la experiencia de juego de usuarios en todo el mundo, dirigiendo el tráfico a los puntos de presencia más cercanos.</p>
          `,
          imageUrl: globalaccelerator,
        },
        "Amazon Route 53": {
          description: `
            <p>Amazon Route 53 facilita gestionar tráfico de DNS para sus dominios, proporcionando alta disponibilidad y escalabilidad. Route 53 puede utilizarse para registrar dominios, enrutar tráfico de usuarios a aplicaciones y monitorizar la salud de los recursos.</p>
            <p>Características clave de Amazon Route 53:</p>
            <ul>
                <li>Registro de dominios y gestión de DNS.</li>
                <li>Enrutamiento de tráfico con baja latencia y alta disponibilidad.</li>
                <li>Monitoreo y conmutación por error de recursos.</li>
            </ul>
            <p>Amazon Route 53 es ideal para organizaciones que necesitan una solución fiable y escalable para gestionar el tráfico de DNS.</p>
            <p><strong>Ejemplo práctico:</strong> Una empresa de comercio electrónico puede usar Amazon Route 53 para gestionar el tráfico DNS y asegurar que sus usuarios sean dirigidos a los servidores más cercanos y de mayor rendimiento.</p>
          `,
          imageUrl: route53,
        },
        "Amazon VPC": {
          description: `
            <p>Amazon Virtual Private Cloud (Amazon VPC) facilita lanzar recursos de AWS en una red virtual que usted define. VPC proporciona un entorno de red aislado y seguro donde puede desplegar recursos de AWS, como instancias de EC2, bases de datos y más.</p>
            <p>Características clave de Amazon VPC:</p>
            <ul>
                <li>Control total sobre el entorno de red virtual.</li>
                <li>Subredes públicas y privadas, tablas de enrutamiento y gateways de red.</li>
                <li>Integración con servicios de seguridad de AWS, como AWS WAF y AWS Shield.</li>
            </ul>
            <p>Amazon VPC es ideal para organizaciones que necesitan un entorno de red seguro y aislado para sus recursos de AWS.</p>
            <p><strong>Ejemplo práctico:</strong> Una empresa puede usar Amazon VPC para desplegar una aplicación web en un entorno aislado y seguro, asegurando que el tráfico no autorizado no pueda acceder a sus recursos.</p>
          `,
          imageUrl: amazonvpc,
        },
        "AWS VPN": {
          description: `
            <p>AWS VPN facilita establecer conexiones de red seguras y cifradas entre sus redes locales o sucursales y la infraestructura global de AWS. Proporciona dos tipos de VPN: AWS Site-to-Site VPN y AWS Client VPN.</p>
            <p>Características clave de AWS VPN:</p>
            <ul>
                <li>Conexiones de red seguras y cifradas.</li>
                <li>Compatibilidad con múltiples dispositivos y configuraciones VPN.</li>
                <li>Integración con Amazon VPC para conexiones de red privadas.</li>
            </ul>
            <p>AWS VPN es ideal para organizaciones que necesitan establecer conexiones de red seguras y cifradas con AWS.</p>
            <p><strong>Ejemplo práctico:</strong> Una empresa con múltiples sucursales puede usar AWS Site-to-Site VPN para conectar sus oficinas a su infraestructura en AWS de manera segura y cifrada.</p>
          `,
          imageUrl: awsvpn,
        },
        "AWS Artifact": {
          description: `
        <p>AWS Artifact facilita acceder a informes y documentos de cumplimiento de AWS. Proporciona acceso bajo demanda a informes de auditoría de seguridad y cumplimiento de AWS.</p>
        <p>Características clave de AWS Artifact:</p>
        <ul>
            <li>Acceso a informes de auditoría de seguridad y cumplimiento.</li>
            <li>Documentación de cumplimiento para ayudar a cumplir con requisitos regulatorios.</li>
            <li>Disponibilidad bajo demanda de documentos y certificados.</li>
        </ul>
        <p>AWS Artifact es ideal para organizaciones que necesitan acceder a informes de cumplimiento y seguridad de AWS para cumplir con regulaciones y auditorías.</p>
    `,
          imageUrl: artifact,
        },
        "AWS Certificate Manager (ACM)": {
          description: `
        <p>AWS Certificate Manager facilita aprovisionar, gestionar y desplegar certificados SSL/TLS para su uso con servicios de AWS. ACM permite gestionar el ciclo de vida de los certificados, incluyendo la renovación automática.</p>
        <p>Características clave de AWS Certificate Manager:</p>
        <ul>
            <li>Emisión y gestión de certificados SSL/TLS.</li>
            <li>Renovación automática de certificados.</li>
            <li>Integración con servicios de AWS como CloudFront y Elastic Load Balancing.</li>
        </ul>
        <p>AWS Certificate Manager es ideal para organizaciones que necesitan gestionar certificados SSL/TLS de manera sencilla y segura.</p>
    `,
          imageUrl: acm,
        },
        "AWS CloudHSM": {
          description: `
        <p>AWS CloudHSM facilita generar y usar claves criptográficas con módulos de seguridad de hardware (HSM) en la nube. Proporciona una solución segura para gestionar y proteger claves criptográficas y realizar operaciones criptográficas.</p>
        <p>Características clave de AWS CloudHSM:</p>
        <ul>
            <li>Generación y gestión segura de claves criptográficas.</li>
            <li>Compatibilidad con estándares de seguridad como FIPS 140-2.</li>
            <li>Integración con otros servicios de AWS para operaciones criptográficas.</li>
        </ul>
        <p>AWS CloudHSM es ideal para organizaciones que necesitan una solución segura y conforme para gestionar y usar claves criptográficas.</p>
    `,
          imageUrl: hsm,
        },
        "Amazon Cognito": {
          description: `
            <p>Amazon Cognito facilita agregar registro de usuario, inicio de sesión y control de acceso a sus aplicaciones web y móviles. Proporciona autenticación, autorización y sincronización de datos para millones de usuarios.</p>
            <p>Características clave de Amazon Cognito:</p>
            <ul>
                <li>Gestión de usuarios y autenticación.</li>
                <li>Soporte para federación de identidades con proveedores de identidad social.</li>
                <li>Sincronización de datos en tiempo real entre dispositivos.</li>
                <li>Componentes principales: User Pools y Identity Pools.</li>
            </ul>
            <p><strong>User Pools:</strong> Son directorios de usuarios que proporcionan opciones de registro e inicio de sesión para las aplicaciones. Ofrecen capacidades avanzadas de gestión de usuarios, incluyendo autenticación multifactor y federación de identidades.</p>
            <p><strong>Identity Pools:</strong> Permiten a los usuarios obtener acceso temporal a recursos de AWS. Los usuarios autenticados e invitados pueden acceder a servicios como S3 y DynamoDB.</p>
            <p>Amazon Cognito es ideal para desarrolladores que necesitan una solución escalable y segura para gestionar usuarios y autenticar aplicaciones.</p>
            <p><strong>Ejemplo práctico:</strong> Una aplicación móvil que requiere inicio de sesión de usuario y acceso a datos sincronizados en tiempo real puede usar Amazon Cognito para gestionar la autenticación y autorización de usuarios, asegurando una experiencia de usuario segura y eficiente.</p>
          `,
          imageUrl: cognito,
        },
        "AWS Directory Service": {
          description: `
        <p>AWS Directory Service facilita configurar y gestionar directorios en la nube. Proporciona varias opciones de directorio, incluyendo AWS Managed Microsoft AD, AD Connector y Simple AD.</p>
        <p>Características clave de AWS Directory Service:</p>
        <ul>
            <li>Implementación y gestión sencilla de directorios.</li>
            <li>Compatibilidad con aplicaciones y servicios de AWS.</li>
            <li>Integración con Microsoft Active Directory.</li>
        </ul>
        <p>AWS Directory Service es ideal para organizaciones que necesitan gestionar identidades y recursos de manera centralizada en la nube.</p>
    `,
          imageUrl: "",
        },
        "AWS Firewall Manager": {
          description: `
        <p>AWS Firewall Manager facilita configurar y gestionar reglas de firewall en sus cuentas y aplicaciones. Proporciona una solución centralizada para gestionar políticas de seguridad y garantizar la conformidad en toda la organización.</p>
        <p>Características clave de AWS Firewall Manager:</p>
        <ul>
            <li>Gestión centralizada de reglas de firewall.</li>
            <li>Aplicación de políticas de seguridad en toda la organización.</li>
            <li>Integración con AWS WAF y AWS Shield.</li>
        </ul>
        <p>AWS Firewall Manager es ideal para organizaciones que necesitan gestionar la seguridad de la red de manera centralizada y eficiente.</p>
    `,
          imageUrl: "",
        },
        "Amazon GuardDuty": {
          description: `
        <p>Amazon GuardDuty facilita la detección continua de amenazas en su cuenta de AWS y la infraestructura de datos. Utiliza machine learning, detección de anomalías y fuentes de inteligencia de amenazas para identificar actividades maliciosas.</p>
        <p>Características clave de Amazon GuardDuty:</p>
        <ul>
            <li>Detección continua de amenazas.</li>
            <li>Utilización de machine learning y fuentes de inteligencia de amenazas.</li>
            <li>Integración con AWS CloudWatch y AWS Security Hub.</li>
        </ul>
        <p>Amazon GuardDuty es ideal para organizaciones que necesitan una solución de detección de amenazas efectiva y automatizada para su infraestructura de AWS.</p>
    `,
          imageUrl: duty,
        },
        "AWS IAM": {
          description: `
    <p>AWS Identity and Access Management (IAM) facilita gestionar el acceso a los servicios y recursos de AWS de forma segura. Proporciona control granular sobre permisos y políticas de acceso para usuarios y roles.</p>
    <p>Características clave de AWS IAM:</p>
    <ul>
        <li>Gestión de usuarios, grupos y roles.</li>
        <li>Control de acceso basado en políticas detalladas.</li>
        <li>Autenticación multifactor (MFA) para mayor seguridad.</li>
        <li>Permisos granulares que permiten otorgar el acceso mínimo necesario.</li>
        <li>Políticas gestionadas por AWS y políticas personalizadas.</li>
        <li>Integración con otros servicios de AWS para una gestión centralizada de acceso.</li>
        <li>Roles de IAM para delegar permisos a servicios de AWS.</li>
    </ul>
    <p>Principales componentes de AWS IAM:</p>
    <ul>
        <li><strong>Usuarios:</strong> Representan una entidad individual con permisos específicos para interactuar con los recursos de AWS.</li>
        <li><strong>Grupos:</strong> Colección de usuarios que comparten permisos comunes, facilitando la gestión de permisos.</li>
        <li><strong>Roles:</strong> Entidades con permisos que se pueden asumir temporalmente para realizar tareas específicas, especialmente útil para servicios y aplicaciones.</li>
        <li><strong>Políticas:</strong> Documentos JSON que definen permisos, especificando qué acciones están permitidas o denegadas.</li>
    </ul>
    <p>AWS IAM es esencial para cualquier organización que utilice AWS y necesite gestionar el acceso de manera segura y eficiente.</p>
    <p><strong>Ejemplo práctico:</strong> Una empresa puede usar AWS IAM para definir políticas de acceso detalladas que aseguren que solo los empleados autorizados puedan acceder a recursos críticos, aplicando MFA para un nivel adicional de seguridad.</p>
  `,
          imageUrl: iam,
        },
        "AWS IAM Identity Center (AWS Single Sign-On)": {
          description: `
        <p>AWS IAM Identity Center facilita la gestión del acceso a múltiples cuentas de AWS y aplicaciones empresariales. Proporciona inicio de sesión único (SSO) y gestión centralizada de identidades.</p>
        <p>Características clave de AWS IAM Identity Center:</p>
        <ul>
            <li>Inicio de sesión único (SSO) para aplicaciones y cuentas de AWS.</li>
            <li>Gestión centralizada de identidades y permisos.</li>
            <li>Integración con proveedores de identidad corporativos.</li>
        </ul>
        <p>AWS IAM Identity Center es ideal para organizaciones que necesitan gestionar el acceso de manera centralizada y segura para múltiples cuentas y aplicaciones.</p>
    `,
          imageUrl: "",
        },
        "Amazon Inspector": {
          description: `
        <p>Amazon Inspector facilita analizar la configuración de las instancias de Amazon EC2 para identificar vulnerabilidades o desviaciones respecto a las mejores prácticas. Proporciona evaluaciones automatizadas de seguridad y conformidad.</p>
        <p>Características clave de Amazon Inspector:</p>
        <ul>
            <li>Evaluaciones automatizadas de seguridad y conformidad.</li>
            <li>Identificación de vulnerabilidades y desviaciones.</li>
            <li>Informes detallados de hallazgos de seguridad.</li>
        </ul>
        <p>Amazon Inspector es ideal para organizaciones que necesitan evaluar y mejorar la seguridad de sus instancias de EC2.</p>
    `,
          imageUrl: inspector,
        },
        "AWS Key Management Service (AWS KMS)": {
          description: `
    <p>AWS Key Management Service (KMS) facilita la creación y gestión de claves criptográficas para proteger sus datos. Proporciona un control granular sobre el uso de claves y la capacidad de integrarse con otros servicios de AWS para cifrar datos en reposo y en tránsito.</p>
    <p>Características clave de AWS KMS:</p>
    <ul>
        <li><strong>Generación y gestión de claves criptográficas:</strong> Permite crear, rotar, deshabilitar y eliminar claves de cifrado simétrico y asimétrico.</li>
        <li><strong>Control granular sobre el uso de claves:</strong> Define políticas detalladas para el uso de claves, especificando quién puede usar cada clave y en qué condiciones.</li>
        <li><strong>Integración con servicios de AWS:</strong> Se integra de manera nativa con muchos servicios de AWS como S3, EBS, RDS, Lambda, y más, permitiendo cifrar datos fácilmente.</li>
        <li><strong>Auditoría y cumplimiento:</strong> Registra el uso de claves y genera registros detallados en AWS CloudTrail para facilitar auditorías y cumplir con requisitos de conformidad.</li>
        <li><strong>Administración centralizada:</strong> Consolida la gestión de claves criptográficas en una única plataforma, facilitando el control y la supervisión.</li>
    </ul>
    <p>Principales componentes de AWS KMS:</p>
    <ul>
        <li><strong>Customer Master Keys (CMKs):</strong> Claves maestras administradas por el cliente utilizadas para cifrar y descifrar datos. Pueden ser administradas por AWS o por el cliente.</li>
        <li><strong>Data Keys:</strong> Claves de datos generadas por CMKs para cifrar grandes volúmenes de datos, mejorando el rendimiento y la seguridad.</li>
        <li><strong>Key Policies:</strong> Políticas asociadas a CMKs que definen permisos granulares sobre quién puede usar y gestionar cada clave.</li>
    </ul>
    <p>AWS KMS es esencial para organizaciones que necesitan una solución segura y gestionada para proteger sus datos con cifrado. Ofrece control detallado y auditoría del uso de claves, ayudando a cumplir con los requisitos de seguridad y conformidad.</p>
    <p><strong>Ejemplo práctico:</strong> Una empresa que almacena datos sensibles en Amazon S3 puede usar AWS KMS para cifrar automáticamente todos los objetos almacenados. Además, puede definir políticas que permitan solo a ciertos usuarios y roles acceder a las claves de cifrado, y registrar todas las operaciones de clave para fines de auditoría y cumplimiento.</p>
  `,
          imageUrl: kms,
        },
        "Amazon Macie": {
          description: `
    <p>Amazon Macie facilita descubrir, clasificar y proteger datos sensibles almacenados en Amazon S3. Utiliza machine learning para identificar y proteger datos personales y confidenciales.</p>
    <p>Características clave de Amazon Macie:</p>
    <ul>
        <li>Descubrimiento y clasificación de datos sensibles automáticamente.</li>
        <li>Protección de datos personales y confidenciales con machine learning.</li>
        <li>Informes detallados y alertas de seguridad para actividades sospechosas.</li>
        <li>Integración con AWS CloudTrail para auditoría y cumplimiento.</li>
        <li>Capacidad para definir políticas de seguridad y cumplimiento personalizadas.</li>
    </ul>
    <p>Amazon Macie es ideal para organizaciones que necesitan proteger datos sensibles y cumplir con regulaciones de privacidad y seguridad.</p>
    <p><strong>Ejemplo práctico:</strong> Una empresa que almacena datos de clientes en S3 puede utilizar Amazon Macie para identificar y proteger automáticamente información personal identificable (PII), cumpliendo con regulaciones como GDPR y HIPAA.</p>
  `,
          imageUrl: macie,
        },
        "AWS Network Firewall": {
          description: `
    <p>AWS Network Firewall facilita desplegar y gestionar un firewall de red esencial para proteger su infraestructura de AWS. Proporciona una solución gestionada para inspección de tráfico, filtrado y prevención de amenazas.</p>
    <p>Características clave de AWS Network Firewall:</p>
    <ul>
        <li>Inspección y filtrado de tráfico de red para detectar y bloquear amenazas.</li>
        <li>Prevención de amenazas y protección contra ataques de red comunes.</li>
        <li>Gestión centralizada de políticas de firewall con AWS Firewall Manager.</li>
        <li>Integración con Amazon VPC para proteger sus subredes.</li>
        <li>Escalabilidad automática para manejar tráfico creciente.</li>
    </ul>
    <p>AWS Network Firewall es ideal para organizaciones que necesitan proteger su infraestructura de AWS con una solución de firewall gestionada.</p>
    <p><strong>Ejemplo práctico:</strong> Una empresa puede usar AWS Network Firewall para proteger sus aplicaciones web contra ataques de inyección SQL y otros tipos de tráfico malicioso, asegurando la integridad y disponibilidad de sus servicios.</p>
  `,
          imageUrl: "path/to/network-firewall-image.png",
        },

        "AWS Resource Access Manager (AWS RAM)": {
          description: `
        <p>AWS Resource Access Manager facilita compartir recursos de AWS con otras cuentas de AWS. Proporciona una forma segura y eficiente de compartir recursos sin necesidad de duplicarlos.</p>
        <p>Características clave de AWS RAM:</p>
        <ul>
            <li>Compartición segura de recursos de AWS.</li>
            <li>Gestión centralizada de permisos y acceso.</li>
            <li>Compatibilidad con múltiples tipos de recursos de AWS.</li>
        </ul>
        <p>AWS RAM es ideal para organizaciones que necesitan compartir recursos de AWS de manera segura y eficiente entre diferentes cuentas.</p>
    `,
          imageUrl: "",
        },
        "AWS Secrets Manager": {
          description: `
    <p>AWS Secrets Manager facilita rotar, gestionar y recuperar credenciales de bases de datos, claves de API y otros secretos. Proporciona una solución segura para gestionar secretos y controlar el acceso a ellos.</p>
    <p>Características clave de AWS Secrets Manager:</p>
    <ul>
        <li>Rotación automática y segura de secretos.</li>
        <li>Gestión segura de credenciales, claves y otros secretos.</li>
        <li>Integración con servicios de AWS para gestionar el acceso a secretos.</li>
        <li>Control de acceso detallado mediante políticas de IAM.</li>
        <li>Capacidad para auditar el acceso y uso de secretos con AWS CloudTrail.</li>
    </ul>
    <p>AWS Secrets Manager es ideal para organizaciones que necesitan gestionar secretos de manera segura y automatizada.</p>
    <p><strong>Ejemplo práctico:</strong> Una aplicación web puede usar AWS Secrets Manager para gestionar y rotar automáticamente las credenciales de su base de datos, reduciendo el riesgo de exposiciones y mejorando la seguridad.</p>
  `,
          imageUrl: secretmanager,
        },

        "AWS Security Hub": {
          description: `
    <p>AWS Security Hub facilita unificar y gestionar alertas de seguridad y automatizar el cumplimiento de las mejores prácticas. Proporciona una vista centralizada de la postura de seguridad de su organización y recomendaciones para mejorarla.</p>
    <p>Características clave de AWS Security Hub:</p>
    <ul>
        <li>Unificación de alertas de seguridad de múltiples servicios de AWS.</li>
        <li>Automatización del cumplimiento de mejores prácticas de seguridad mediante controles predefinidos.</li>
        <li>Informes detallados y recomendaciones de seguridad basadas en estándares de la industria.</li>
        <li>Integración con servicios como Amazon GuardDuty, AWS Config, y AWS Firewall Manager.</li>
        <li>Evaluación continua de la postura de seguridad para detectar y mitigar vulnerabilidades.</li>
    </ul>
    <p>AWS Security Hub es ideal para organizaciones que necesitan gestionar la seguridad de manera centralizada y mejorar su postura de seguridad.</p>
    <p><strong>Ejemplo práctico:</strong> Una organización puede usar AWS Security Hub para consolidar las alertas de seguridad de varios servicios de AWS, automatizar las auditorías de seguridad y recibir recomendaciones para mejorar la seguridad en toda su infraestructura.</p>
  `,
          imageUrl: hub,
        },

        "AWS Shield": {
          description: `
    <p>AWS Shield facilita proteger contra ataques de denegación de servicio distribuido (DDoS) en sus aplicaciones. Proporciona dos niveles de protección: AWS Shield Standard y AWS Shield Advanced.</p>
    <p>Características clave de AWS Shield:</p>
    <ul>
        <li>Protección automática contra ataques DDoS con AWS Shield Standard.</li>
        <li>Protección avanzada y mitigación de ataques con AWS Shield Advanced, incluyendo acceso a expertos en respuesta a DDoS.</li>
        <li>Informes y análisis detallados de eventos de seguridad.</li>
        <li>Integración con otros servicios de seguridad de AWS como AWS WAF y AWS Firewall Manager.</li>
        <li>Costes de protección incluidos para la mayoría de los ataques con AWS Shield Standard.</li>
    </ul>
    <p>AWS Shield es esencial para organizaciones que necesitan proteger sus aplicaciones contra ataques DDoS y garantizar la disponibilidad de sus servicios.</p>
    <p><strong>Ejemplo práctico:</strong> Una empresa de comercio electrónico puede usar AWS Shield Advanced para proteger su sitio web contra ataques DDoS, asegurando que los clientes puedan acceder a la tienda en línea incluso durante intentos de ataque.</p>
  `,
          imageUrl: shield,
        },

        "AWS WAF": {
          description: `
    <p>AWS Web Application Firewall (WAF) facilita proteger sus aplicaciones web de ataques comunes que pueden afectar su disponibilidad, comprometer su seguridad o consumir recursos excesivos. Proporciona una solución gestionada para filtrar y monitorear el tráfico HTTP/HTTPS.</p>
    <p>Características clave de AWS WAF:</p>
    <ul>
        <li>Protección contra ataques de inyección SQL, cross-site scripting (XSS) y otros tipos de exploits comunes.</li>
        <li>Gestión centralizada de reglas de firewall para múltiples aplicaciones.</li>
        <li>Integración con servicios de AWS como Amazon CloudFront, Application Load Balancer (ALB) y API Gateway.</li>
        <li>Capacidad para crear reglas personalizadas y aplicar reglas gestionadas por AWS y terceros.</li>
        <li>Monitoreo y análisis en tiempo real del tráfico web.</li>
    </ul>
    <p>AWS WAF es ideal para organizaciones que necesitan proteger sus aplicaciones web contra amenazas y ataques comunes.</p>
    <p><strong>Ejemplo práctico:</strong> Un sitio web de banca en línea puede usar AWS WAF para protegerse contra intentos de inyección SQL y ataques de XSS, asegurando que las transacciones de los usuarios sean seguras y los datos permanezcan protegidos.</p>
  `,
          imageUrl: waf,
        },

        "AWS Fargate": {
          description: `
            <p><strong>AWS Fargate</strong> facilita ejecutar contenedores sin necesidad de gestionar servidores o clusters de Amazon EC2. Proporciona una solución serverless para ejecutar contenedores, permitiendo a los desarrolladores centrarse en construir aplicaciones sin preocuparse por la infraestructura subyacente.</p>
            <p>Características clave de AWS Fargate:</p>
            <ul>
                <li>Ejecución de contenedores serverless: No requiere gestionar instancias de servidor.</li>
                <li>Escalabilidad automática: Escala automáticamente según la demanda de la aplicación, asegurando que siempre haya suficiente capacidad para manejar la carga.</li>
                <li>Integración con Amazon ECS y Amazon EKS: Funciona de manera fluida con Amazon Elastic Container Service (ECS) y Amazon Elastic Kubernetes Service (EKS).</li>
                <li>Seguridad mejorada: Aislamiento de tareas, proporcionando un entorno seguro para ejecutar contenedores.</li>
                <li>Precios por segundo: Solo pagas por los recursos que tus contenedores utilizan.</li>
            </ul>
            <p>Casos de uso comunes para AWS Fargate:</p>
            <ul>
                <li>Aplicaciones microservicio: Despliegue y gestión de microservicios de manera eficiente.</li>
                <li>Procesamiento en lotes: Ejecución de trabajos en segundo plano que requieren recursos temporales.</li>
                <li>Aplicaciones web y APIs: Hospedaje de aplicaciones web y APIs con escalabilidad automática.</li>
            </ul>
            <p><strong>Beneficios de AWS Fargate:</strong></p>
            <ul>
                <li>Simplificación operativa: No es necesario gestionar servidores ni clústeres.</li>
                <li>Mejora de la seguridad: Aislamiento mejorado y menos superficie de ataque.</li>
                <li>Costos optimizados: Paga solo por lo que usas, con precios granulares.</li>
                <li>Agilidad y rapidez: Despliega rápidamente aplicaciones sin preocuparte por la infraestructura.</li>
            </ul>
            <p><strong>Ejemplo práctico:</strong> Una empresa de e-commerce puede utilizar AWS Fargate para ejecutar su API de productos y servicios, asegurando que pueda escalar automáticamente durante periodos de alta demanda sin intervención manual.</p>
          `,
          imageUrl: fargate,
        },
        "AWS Lambda": {
          description: `
            <p><strong>AWS Lambda</strong> facilita ejecutar código sin aprovisionar o gestionar servidores. Paga solo por el tiempo de cómputo que consume y escala automáticamente según las necesidades de la aplicación.</p>
            <p>Características clave de AWS Lambda:</p>
            <ul>
                <li>Ejecución de código serverless: Ejecuta código sin la necesidad de aprovisionar ni gestionar servidores.</li>
                <li>Soporte para múltiples lenguajes de programación: Compatible con Node.js, Python, Java, C#, Go, y más.</li>
                <li>Escalabilidad automática: Ajusta la capacidad automáticamente según la demanda de las funciones.</li>
                <li>Integración con otros servicios de AWS: Se integra fácilmente con servicios como S3, DynamoDB, Kinesis, y más.</li>
                <li>Monitoreo y registro: Monitoreo a través de AWS CloudWatch para rastrear el rendimiento y los errores.</li>
            </ul>
            <p>Casos de uso comunes para AWS Lambda:</p>
            <ul>
                <li>Procesamiento de datos en tiempo real: Procesamiento de flujos de datos en tiempo real desde servicios como Kinesis y DynamoDB.</li>
                <li>Automatización de infraestructura: Ejecutar funciones en respuesta a cambios en la infraestructura (por ejemplo, cambios en S3, DynamoDB, etc.).</li>
                <li>Backend para aplicaciones móviles: Construcción de backends escalables para aplicaciones móviles y web.</li>
            </ul>
            <p><strong>Beneficios de AWS Lambda:</strong></p>
            <ul>
                <li>Sin servidor: No es necesario gestionar servidores, lo que reduce la carga operativa.</li>
                <li>Escalabilidad automática: Las funciones se escalan automáticamente en respuesta a la demanda.</li>
                <li>Costos optimizados: Solo pagas por el tiempo de ejecución del código, lo que puede reducir costos significativamente.</li>
                <li>Integración completa: Integración con muchos otros servicios de AWS para crear aplicaciones completas y eficientes.</li>
            </ul>
            <p><strong>Ejemplo práctico:</strong> Una empresa de medios puede utilizar AWS Lambda para procesar y transformar archivos multimedia subidos por los usuarios, ejecutando funciones Lambda en respuesta a eventos de carga en S3.</p>
          `,
          imageUrl: lambda,
        },
        "AWS Backup": {
          description: `
        <p>AWS Backup facilita centralizar y automatizar la protección de datos en servicios de AWS. Proporciona una solución gestionada para realizar copias de seguridad y restaurar datos, asegurando la continuidad del negocio y la protección de datos.</p>
        <p>Características clave de AWS Backup:</p>
        <ul>
            <li>Automatización de copias de seguridad y restauración de datos.</li>
            <li>Compatibilidad con múltiples servicios de AWS, como Amazon RDS, Amazon EFS y Amazon DynamoDB.</li>
            <li>Gestión centralizada de políticas de backup.</li>
        </ul>
        <p>AWS Backup es ideal para organizaciones que necesitan proteger sus datos de manera centralizada y automatizada.</p>
    `,
          imageUrl: backup,
        },
        "Amazon EBS": {
          description: `
        <p>Amazon Elastic Block Store (Amazon EBS) proporciona almacenamiento en bloque persistente para instancias de Amazon EC2. Ofrece volúmenes de alto rendimiento y baja latencia para aplicaciones que requieren almacenamiento en bloque.</p>
        <p>Características clave de Amazon EBS:</p>
        <ul>
            <li>Volúmenes de almacenamiento en bloque de alto rendimiento.</li>
            <li>Opciones de almacenamiento SSD y HDD para diferentes necesidades de rendimiento y costos.</li>
            <li>Copias de seguridad automatizadas con snapshots de EBS.</li>
        </ul>
        <p>Amazon EBS es ideal para aplicaciones que requieren almacenamiento en bloque persistente y de alto rendimiento.</p>
    `,
          imageUrl: ebs,
        },
        "Amazon EFS": {
          description: `
        <p>Amazon Elastic File System (Amazon EFS) proporciona almacenamiento de archivos escalable y completamente administrado para uso con servicios en la nube de AWS y recursos locales. Ofrece un sistema de archivos elástico que se ajusta automáticamente a la carga de trabajo.</p>
        <p>Características clave de Amazon EFS:</p>
        <ul>
            <li>Escalabilidad automática para cargas de trabajo variables.</li>
            <li>Acceso concurrente desde múltiples instancias de EC2 y recursos locales.</li>
            <li>Alto rendimiento y baja latencia.</li>
        </ul>
        <p>Amazon EFS es ideal para aplicaciones que requieren almacenamiento de archivos compartido y escalable.</p>
    `,
          imageUrl: efs,
        },
        "AWS Elastic Disaster Recovery": {
          description: `
        <p>AWS Elastic Disaster Recovery facilita minimizar la interrupción del negocio y reducir el tiempo de inactividad con recuperación ante desastres. Proporciona una solución gestionada para replicar aplicaciones y datos a AWS, asegurando la continuidad del negocio.</p>
        <p>Características clave de AWS Elastic Disaster Recovery:</p>
        <ul>
            <li>Replicación continua de datos y aplicaciones.</li>
            <li>Automatización de la recuperación ante desastres.</li>
            <li>Compatibilidad con múltiples plataformas y servicios.</li>
        </ul>
        <p>AWS Elastic Disaster Recovery es ideal para organizaciones que necesitan una solución robusta para la recuperación ante desastres y la continuidad del negocio.</p>
    `,
          imageUrl: recovery,
        },
        "Amazon FSx": {
          description: `
        <p>Amazon FSx facilita lanzar y ejecutar sistemas de archivos de terceros en AWS. Ofrece opciones de sistemas de archivos como FSx for Windows File Server y FSx for Lustre, proporcionando un rendimiento optimizado para diferentes casos de uso.</p>
        <p>Características clave de Amazon FSx:</p>
        <ul>
            <li>Compatibilidad con sistemas de archivos de terceros.</li>
            <li>Opciones de alto rendimiento para diferentes cargas de trabajo.</li>
            <li>Gestión simplificada y escalabilidad automática.</li>
        </ul>
        <p>Amazon FSx es ideal para organizaciones que necesitan sistemas de archivos de alto rendimiento y gestionados en la nube.</p>
    `,
          imageUrl: fsx,
        },
        "Amazon S3": {
          description: `
        <p>Amazon Simple Storage Service (Amazon S3) facilita almacenar y recuperar cualquier cantidad de datos desde cualquier lugar. Es un servicio de almacenamiento de objetos que ofrece una durabilidad del 99.999999999% (11 nueves) y una alta disponibilidad.</p>
        <p>Características clave de Amazon S3:</p>
        <ul>
            <li>Durabilidad y disponibilidad altas con almacenamiento distribuido.</li>
            <li>Clases de almacenamiento para diferentes necesidades de rendimiento y costos.</li>
            <li>Seguridad con cifrado de datos y control de acceso detallado.</li>
        </ul>
        <p>Amazon S3 es ideal para una variedad de casos de uso como almacenamiento de datos, copias de seguridad, archivado y distribución de contenido estático.</p>
    `,
          imageUrl: s3detail,
        },
        "Amazon S3 Glacier": {
          description: `
        <p>Amazon S3 Glacier facilita el almacenamiento seguro y de bajo costo para el archivado y la copia de seguridad de datos. Glacier está diseñado para datos a los que se accede con poca frecuencia y proporciona opciones de recuperación flexibles.</p>
        <p>Características clave de Amazon S3 Glacier:</p>
        <ul>
            <li>Almacenamiento de bajo costo para datos de archivado.</li>
            <li>Opciones de recuperación desde minutos hasta horas.</li>
            <li>Seguridad con cifrado de datos y control de acceso detallado.</li>
        </ul>
        <p>Amazon S3 Glacier es ideal para organizaciones que necesitan una solución económica y segura para el almacenamiento de datos a largo plazo.</p>
    `,
          imageUrl: s3glacier,
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
          imageUrl: seguridad,
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
          imageUrl: arquitecto,
        },
        "Infraestructura global de AWS (por ejemplo, Regiones de AWS, Zonas de disponibilidad)":
          {
            description: `
                    <p>La infraestructura global de AWS está diseñada para ofrecer una alta disponibilidad, redundancia y baja latencia. Esta infraestructura se organiza en regiones, zonas de disponibilidad y Edge Locations, proporcionando una robusta plataforma en la nube que permite a los clientes desplegar aplicaciones y servicios de manera confiable y segura.</p>
                    <ul>
                        <li><strong>Regiones de AWS:</strong> Son áreas geográficas separadas que contienen múltiples zonas de disponibilidad. Cada región es completamente independiente de las demás en términos de ubicación geográfica, fuentes de energía y conectividad. AWS actualmente tiene decenas de regiones en todo el mundo, permitiendo a los clientes desplegar aplicaciones cerca de sus usuarios para reducir la latencia y cumplir con requisitos locales de residencia de datos.</li>
                        <li><strong>Zonas de disponibilidad (Availability Zones, AZ):</strong> Dentro de cada región hay varias zonas de disponibilidad. Cada zona de disponibilidad es un centro de datos discreto con energía, refrigeración y conectividad redundantes. Las zonas de disponibilidad están interconectadas con enlaces de baja latencia, alta velocidad y redundancia para facilitar la replicación de datos y la alta disponibilidad de las aplicaciones.</li>
                        <li><strong>Edge Locations:</strong> Las Edge Locations (ubicaciones de borde) son centros de datos distribuidos globalmente que AWS utiliza para entregar contenido con baja latencia a los usuarios finales. Son utilizadas principalmente por servicios como Amazon CloudFront y AWS Global Accelerator para distribuir contenido y aplicaciones de manera rápida y eficiente.</li>
                        <li><strong>Redundancia y disponibilidad:</strong> Al desplegar recursos en múltiples zonas de disponibilidad, los clientes pueden diseñar sus aplicaciones para que sean tolerantes a fallos y continúen operando en caso de que una zona de disponibilidad experimente problemas.</li>
                        <li><strong>Presencia global:</strong> La presencia global de regiones permite a los clientes desplegar aplicaciones cerca de sus usuarios finales, reduciendo la latencia y mejorando la experiencia del usuario. Además, algunas organizaciones tienen requisitos específicos para mantener los datos dentro de ciertos límites geográficos, y las múltiples regiones de AWS permiten cumplir con estos requisitos seleccionando la región adecuada para almacenar y procesar datos.</li>
                        <li><strong>Escalabilidad y flexibilidad:</strong> La amplia infraestructura de AWS permite a los clientes escalar sus aplicaciones y servicios de manera global, aprovechando la capacidad de múltiples regiones y zonas de disponibilidad para manejar grandes volúmenes de tráfico y cargas de trabajo.</li>
                    </ul>
                    <p>En resumen, la infraestructura global de AWS, compuesta por regiones, zonas de disponibilidad y Edge Locations, proporciona una plataforma robusta y flexible que permite a los clientes desplegar aplicaciones con alta disponibilidad, baja latencia y conformidad con los requisitos de residencia de datos.</p>
                `,
            imageUrl: infraglobal,
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
          imageUrl: nosqlsql,
        },
        "AWS Storage Gateway": {
          description: `
        <p>AWS Storage Gateway facilita el acceso seguro y eficiente a los servicios de almacenamiento en la nube de AWS desde sus instalaciones locales. Proporciona una conexión híbrida que integra perfectamente el almacenamiento local con el almacenamiento en la nube de AWS, permitiendo a las organizaciones utilizar la escalabilidad y durabilidad de AWS mientras mantienen el acceso rápido y la gestión local de los datos.</p>
        <p>Tipos de AWS Storage Gateway:</p>
        <ul>
            <li><strong>File Gateway:</strong> Ofrece a las aplicaciones locales acceso a objetos en Amazon S3 mediante protocolos de archivos estándar como NFS y SMB. Ideal para casos de uso de almacenamiento de archivos, backups y archivado en la nube.</li>
            <li><strong>Volume Gateway:</strong> Proporciona volúmenes de almacenamiento en bloque que las aplicaciones pueden montar como dispositivos iSCSI. Los datos se almacenan en Amazon S3 y pueden ser respaldados usando snapshots de Amazon EBS.
                <ul>
                    <li><strong>Stored Volumes:</strong> Almacena datos primarios localmente y hace un respaldo en la nube de manera asíncrona.</li>
                    <li><strong>Cached Volumes:</strong> Almacena datos primarios en Amazon S3 y mantiene en caché los datos más recientes accedidos localmente.</li>
                </ul>
            </li>
            <li><strong>Tape Gateway:</strong> Permite el uso de AWS para la copia de seguridad y el archivado, proporcionando una alternativa basada en la nube para las librerías de cintas físicas. Compatible con aplicaciones de backup que utilizan cintas virtuales (VTL).</li>
        </ul>
        <p>Características clave de AWS Storage Gateway:</p>
        <ul>
            <li>Integración perfecta entre el almacenamiento local y la nube de AWS.</li>
            <li>Seguridad con cifrado de datos en tránsito y en reposo.</li>
            <li>Escalabilidad y durabilidad de AWS para datos almacenados en la nube.</li>
            <li>Compatibilidad con aplicaciones y protocolos de almacenamiento estándar.</li>
        </ul>
        <p>AWS Storage Gateway es ideal para organizaciones que desean aprovechar la escalabilidad y durabilidad del almacenamiento en la nube de AWS mientras mantienen un acceso rápido y eficiente a los datos desde sus instalaciones locales.</p>
    `,
          imageUrl: storagegateway,
        },
      },
    },
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveSubCategory(null);
    setServiceContent({ description: "", imageUrl: "" });
  };

  const handleSubCategoryClick = (subCategory) => {
    setActiveSubCategory(
      activeSubCategory === subCategory ? null : subCategory
    );
  };

  const handleServiceClick = (service) => {
    setServiceContent(levels.CP.services[service]);
  };

  return (
    <section id="documentation">
      <div className="tabs">
        {Object.keys(levels.CP.categories).map((tab) => (
          <button
            key={tab}
            className={tab === activeTab ? "active" : ""}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="documentation-content">
        <div className="sidebar">
          {levels.CP.categories[activeTab] &&
            Object.keys(levels.CP.categories[activeTab]).map((subCategory) => (
              <div key={subCategory}>
                <h4
                  className={subCategory === activeSubCategory ? "active" : ""}
                  onClick={() => handleSubCategoryClick(subCategory)}
                >
                  {subCategory}
                </h4>
                {activeSubCategory === subCategory && (
                  <ul>
                    {levels.CP.categories[activeTab][subCategory].map(
                      (service) => (
                        <li
                          key={service}
                          onClick={() => handleServiceClick(service)}
                        >
                          {service}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            ))}
        </div>
        <div className="service-content">
          {serviceContent.description && (
            <>
              <p
                dangerouslySetInnerHTML={{ __html: serviceContent.description }}
              ></p>
              {serviceContent.imageUrl && (
                <img src={serviceContent.imageUrl} alt="Service" />
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Documentation;
