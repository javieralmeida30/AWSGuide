import React, { useState, useEffect, useCallback } from 'react';
import './Exams.css';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function Exams() {
    const examQuestions = {
        "CP1": [
            {
                question: "Su empresa está buscando adoptar un modelo de nube donde puedan aprovechar los recursos compartidos que son mantenidos por un proveedor de nube, pero también tener una sección privada para sus datos más sensibles. ¿Qué tipo de modelo de implementación en la nube se ajusta mejor a esta descripción?",
                options: [
                    "A. Nube Comunitaria",
                    "B. Nube Multi",
                    "C. Nube Híbrida",
                    "D. Nube Pública"
                ],
                answer: "C",
                explanation: "Esta es una combinación de nubes públicas y privadas unidas por tecnología que permite compartir datos y aplicaciones entre ellas. La empresa puede aprovechar los recursos compartidos en la nube pública y mantener los datos sensibles en la nube privada."
            },
            {
                question: "¿Cuál de las siguientes afirmaciones describe mejor el principio de privilegio mínimo en la gestión de políticas de AWS IAM?",
                options: [
                    "A. Proporcionar permisos basados en la antigüedad en el trabajo.",
                    "B. Dar a los usuarios acceso ilimitado y luego restringirlo según los requisitos.",
                    "C. Dar a los usuarios los permisos mínimos necesarios para completar sus tareas.",
                    "D. Dar acceso de administrador a todos los usuarios para facilitar la gestión."
                ],
                answer: "C",
                explanation: "El principio de privilegio mínimo sugiere dar a los usuarios solo los permisos mínimos que necesitan para realizar sus tareas. Esto minimiza el impacto potencial de una cuenta comprometida."
            },
            {
                question: "Una empresa ha comenzado a usar AWS para sus cargas de trabajo de producción. Quieren asegurarse de cumplir con el Reglamento General de Protección de Datos (GDPR). ¿Cuál de los siguientes servicios de AWS pueden usar para ayudar con este requisito de cumplimiento?",
                options: [
                    "A. Amazon Rekognition",
                    "B. AWS Artifact",
                    "C. AWS Trusted Advisor",
                    "D. Amazon Polly"
                ],
                answer: "B",
                explanation: "AWS Artifact es un servicio de AWS que proporciona acceso bajo demanda a los informes de cumplimiento de AWS. Estos informes pueden ayudar a entender cómo los servicios de AWS se alinean con los requisitos de GDPR."
            },
            {
                question: "Una empresa de análisis de datos quiere ejecutar cargas de trabajo de Big Data en AWS. Necesitan un servicio de almacenamiento de datos escalable y seguro que pueda manejar transferencias de datos de alta velocidad para análisis y aprendizaje automático. ¿Qué servicio de almacenamiento de AWS se ajusta mejor a sus necesidades?",
                options: [
                    "A. Amazon S3",
                    "B. Amazon EFS",
                    "C. Amazon FSx",
                    "D. Amazon Glacier"
                ],
                answer: "A",
                explanation: "Amazon S3 (Simple Storage Service) es un servicio de almacenamiento de objetos que ofrece escalabilidad, disponibilidad de datos, seguridad y rendimiento líderes en la industria. S3 es ideal para análisis de big data porque puede almacenar y recuperar cualquier cantidad de datos en cualquier momento desde cualquier lugar."
            },
            {
                question: "Una organización global quiere implementar una solución para que sus desarrolladores se conecten de manera segura a sus recursos de AWS desde múltiples ubicaciones locales. La solución debe mantener la privacidad de los datos en tránsito y proporcionar una experiencia de conexión coherente. ¿Cuál de las siguientes opciones sería la más adecuada?",
                options: [
                    "A. AWS VPN",
                    "B. AWS Direct Connect",
                    "C. AWS Transit Gateway",
                    "D. AWS Global Accelerator"
                ],
                answer: "A",
                explanation: "AWS VPN establece una conexión segura y privada desde una red local o un cliente a AWS. Es la mejor opción para asegurar la privacidad de los datos y proporcionar conexiones seguras para usuarios individuales desde múltiples ubicaciones."
            },
            {
                question: "Está configurando una aplicación de múltiples niveles dentro de una sola VPC. Los servidores web deben ser accesibles desde Internet, pero los servidores de bases de datos no deben serlo. ¿Cuál de las siguientes configuraciones cumplirá con este requisito?",
                options: [
                    "A. Colocar todos los servidores en una subred privada y permitir el acceso a Internet a través de una Gateway NAT.",
                    "B. Colocar todos los servidores en subredes públicas y restringir el acceso usando Grupos de Seguridad.",
                    "C. Colocar los servidores web en una subred pública y los servidores de bases de datos en una subred privada.",
                    "D. Colocar todos los servidores en subredes privadas y usar una VPN para acceder a ellos."
                ],
                answer: "C",
                explanation: "Los servidores web en una subred pública son accesibles desde Internet. Los servidores de bases de datos en una subred privada no son accesibles desde Internet, proporcionando la seguridad requerida."
            },
            {
                question: "Una empresa de comercio electrónico está planeando implementar una base de datos relacional de alto rendimiento que requiere baja latencia y operaciones de E/S frecuentes en AWS. ¿Qué tipo de volumen de Amazon EBS cumpliría mejor con sus necesidades?",
                options: [
                    "A. Throughput Optimized HDD (st1)",
                    "B. Provisioned IOPS SSD (io1/io2)",
                    "C. Cold HDD (sc1)",
                    "D. General Purpose SSD (gp2)"
                ],
                answer: "B",
                explanation: "Los volúmenes de Provisioned IOPS SSD (io1/io2) están diseñados para satisfacer las necesidades de cargas de trabajo intensivas en E/S, particularmente cargas de trabajo de bases de datos que requieren baja latencia y un rendimiento de E/S constante. Son la mejor opción para una base de datos de alto rendimiento."
            },
            {
                question: "¿Cuál es la práctica recomendada con respecto a las claves de acceso de AWS para cuentas raíz(usuario root)?",
                options: [
                    "A. Generar varios conjuntos de claves de acceso para respaldo.",
                    "B. No generar claves de acceso para cuentas raíz.",
                    "C. Compartirlas regularmente con su equipo para mayor transparencia.",
                    "D. Almacenarlas en un lugar de fácil acceso para un uso rápido."
                ],
                answer: "B",
                explanation: "Correcto. AWS recomienda no generar claves de acceso para cuentas raíz. En su lugar, cree usuarios de IAM, otórgueles los permisos necesarios y use sus claves de acceso."
            },
            {
                question: "Una empresa tecnológica tiene una aplicación web crítica que se ejecuta en varias instancias de EC2. La aplicación experimenta patrones de tráfico desiguales, a veces experimentando picos repentinos que causan degradación en el rendimiento. La empresa quiere asegurarse de que su aplicación permanezca receptiva durante estos períodos sin sobreaprovisionar recursos durante los períodos de menor actividad. Como practicante de la nube, ¿qué solución recomendarías?",
                options: [
                    "A. Utilizar instancias Spot de Amazon EC2.",
                    "B. Usar instancias On-Demand de EC2.",
                    "C. Migrar la aplicación a AWS Fargate.",
                    "D. Implementar un grupo de Auto Scaling."
                ],
                answer: "D",
                explanation: "Los grupos de Auto Scaling pueden aumentar o disminuir el número de instancias de EC2 en respuesta a la demanda, lo que los convierte en una solución ideal para garantizar la capacidad de respuesta durante los picos de tráfico y la rentabilidad durante los períodos de menor actividad."
            },
            {
                question: "Su empresa quiere implementar una aplicación web altamente disponible y tolerante a fallos en AWS. Su objetivo es asegurarse de que la aplicación siga operativa incluso si falla un solo centro de datos. ¿Cuál de las siguientes estrategias ayudaría a lograr este objetivo?",
                options: [
                    "A. Implementar la aplicación en una sola zona de disponibilidad.",
                    "B. Implementar la aplicación en múltiples regiones.",
                    "C. Implementar la aplicación en múltiples zonas de disponibilidad dentro de una sola región.",
                    "D. Implementar la aplicación en múltiples ubicaciones Edge."
                ],
                answer: "C",
                explanation: "Implementar la aplicación en múltiples zonas de disponibilidad dentro de una sola región es la estrategia correcta. Asegura que, incluso si una zona de disponibilidad falla, la aplicación permanezca disponible en las otras zonas de disponibilidad."
            },
            {
                question: "Está ejecutando una aplicación web en AWS que necesita permitir tráfico HTTP y HTTPS entrante de sus clientes. Al mismo tiempo, desea bloquear todo el tráfico de un conjunto específico de direcciones IP que han sido identificadas como fuentes de actividad maliciosa. ¿Qué servicio de AWS debería usar principalmente para lograr esto?",
                options: [
                    "A. AWS Shield",
                    "B. Amazon Inspector",
                    "C. AWS WAF (Web Application Firewall)",
                    "D. Listas de control de acceso de red (NACLs)"
                ],
                answer: "C",
                explanation: "AWS WAF le permite escribir reglas para coincidir con patrones de actividad maliciosa, como bloquear tráfico de direcciones IP específicas."
            },
            {
                question: "Una empresa de análisis de datos necesita procesar un gran volumen de datos todas las noches. El proceso es intensivo en cómputo y no requiere intervención humana. Puede iniciarse y detenerse en cualquier momento. ¿Cuál es el servicio de cómputo menos rentable para implementar esta solución?",
                options: [
                    "A. Instancias On-Demand de Amazon EC2",
                    "B. Instancias Reservadas de Amazon EC2",
                    "C. AWS Fargate",
                    "D. Instancias Spot de Amazon EC2"
                ],
                answer: "A",
                explanation: "Las instancias On-Demand de Amazon EC2 son las menos rentables en este escenario. Tienen un costo por hora más alto en comparación con otras opciones como las instancias Spot o las instancias Reservadas."
            },
            {
                question: "¿Cuál de las siguientes opciones describe mejor el beneficio de la característica de elasticidad en la nube de AWS?",
                options: [
                    "A. Permite replicar rápidamente y a bajo costo su aplicación para propósitos de respaldo.",
                    "B. Permite el cifrado automático de todos los datos almacenados en AWS.",
                    "C. Permite aumentar o disminuir la capacidad de almacenamiento según la demanda.",
                    "D. Permite implementar sus aplicaciones en múltiples regiones alrededor del mundo con solo unos pocos clics."
                ],
                answer: "C",
                explanation: "La elasticidad es el beneficio que le permite escalar rápidamente los recursos hacia arriba y hacia abajo para satisfacer la demanda."
            },
            {
                question: "Como administrador de AWS, está creando un rol de IAM que será asumido por una función de AWS Lambda. La función requiere acceso de lectura a objetos en un bucket de Amazon S3. ¿Cuál es la mejor manera de asegurarse de que la función Lambda tenga los permisos necesarios?",
                options: [
                    "A. Adjuntar la política administrada AmazonS3ReadOnlyAccess al rol de IAM.",
                    "B. Adjuntar la política administrada AWSTrustedAdvisorCheckListManagement al rol de IAM.",
                    "C. Adjuntar la política administrada AmazonS3FullAccess al rol de IAM.",
                    "D. Crear una política inline con el permiso s3:ListBucket y adjuntarla al rol de IAM."
                ],
                answer: "A",
                explanation: "La política administrada AmazonS3ReadOnlyAccess otorga acceso de solo lectura a todos los buckets y objetos de S3, cumpliendo con el requisito para la función Lambda."
            },
            {
                question: "Su empresa quiere monitorear las llamadas a la API realizadas a su cuenta de AWS para análisis de seguridad y propósitos de solución de problemas. ¿Qué servicio de AWS debería usar?",
                options: [
                    "A. AWS Trusted Advisor",
                    "B. AWS Config",
                    "C. AWS IAM",
                    "D. AWS CloudTrail"
                ],
                answer: "D",
                explanation: "AWS CloudTrail registra, monitorea continuamente y conserva la actividad de la cuenta relacionada con acciones en su infraestructura de AWS, incluyendo el registro de llamadas a la API."
            },
            {
                question: "Su empresa tiene patrones de carga de trabajo impredecibles y están interesados en un modelo de precios que ofrezca flexibilidad y sin compromiso a largo plazo. ¿Cuál de los siguientes modelos de precios se ajusta mejor a esta descripción?",
                options: [
                    "A. Precios On-Demand",
                    "B. Instancias Spot",
                    "C. Instancias Reservadas",
                    "D. Planes de Ahorro"
                ],
                answer: "A",
                explanation: "El precio On-Demand es la respuesta correcta. Ofrece un modelo de pago por uso donde paga por la capacidad de cómputo por hora o por segundo dependiendo de lo que use. Esto proporciona flexibilidad y sin compromiso a largo plazo, lo que lo hace ideal para cargas de trabajo impredecibles."
            },
            {
                question: "Su organización está planeando expandirse globalmente y manejará grandes volúmenes de datos de clientes de diferentes regiones. ¿Qué característica de AWS ayudaría mejor a gestionar los requisitos de cumplimiento y soberanía de datos?",
                options: [
                    "A. Zonas de Disponibilidad",
                    "B. Buckets de Amazon S3",
                    "C. Ubicaciones Edge",
                    "D. Regiones"
                ],
                answer: "D",
                explanation: "Las regiones son áreas geográficas separadas. AWS tiene regiones en todo el mundo y los datos no salen de la región a menos que se muevan explícitamente. Esto ayuda a cumplir con los requisitos de residencia de datos, cumplimiento y soberanía, lo que lo convierte en la respuesta correcta."
            },
            {
                question: "Su organización está planeando construir una aplicación a gran escala que requiere control total sobre el sistema operativo, el runtime y la pila de red para modificaciones personalizadas del kernel. ¿Qué servicio de cómputo de AWS sería el más adecuado para estos requisitos?",
                options: [
                    "A. Amazon EC2",
                    "B. AWS Lambda",
                    "C. AWS Fargate",
                    "D. Amazon ECS"
                ],
                answer: "A",
                explanation: "Amazon EC2 proporciona capacidad de cómputo redimensionable en la nube y permite el control total sobre el sistema operativo, el runtime y la pila de red, lo que permite modificaciones personalizadas del kernel. Es el más adecuado para aplicaciones que requieren tales niveles de control."
            },
            {
                question: "Una empresa de medios utiliza AWS para sus tareas de procesamiento de video, que implican convertir archivos de video sin procesar en varios formatos. Esta operación se lleva a cabo todas las noches y requiere una gran cantidad de potencia de cómputo por un corto período. ¿Cuál de las siguientes opciones proporcionaría la solución más rentable?",
                options: [
                    "A. Instancias Reservadas de EC2",
                    "B. Instancias Spot de EC2",
                    "C. Instancias On-Demand de EC2",
                    "D. Hosts Dedicados de EC2"
                ],
                answer: "B",
                explanation: "Las instancias Spot de EC2 son la respuesta correcta. Le permiten ofertar por capacidad de cómputo no utilizada de Amazon EC2 y son ideales para tareas de procesamiento que pueden ser interrumpidas, lo que las convierte en una solución rentable para cómputos grandes y de corta duración."
            },
            {
                question: "Ha comprado un nombre de dominio de un registrador externo y está alojando su sitio web en AWS. Desea gestionar los registros DNS de su dominio utilizando AWS. ¿Qué servicio de AWS debería usar?",
                options: [
                    "A. Amazon CloudFront",
                    "B. AWS Transit Gateway",
                    "C. Amazon VPC",
                    "D. Amazon Route 53"
                ],
                answer: "D",
                explanation: "Amazon Route 53 es un servicio web de sistema de nombres de dominio (DNS) en la nube, altamente disponible y escalable. Está diseñado para proporcionar una forma extremadamente fiable y rentable de enrutar a los usuarios finales a aplicaciones de Internet traduciendo nombres en direcciones IP numéricas. Puede usarlo para gestionar registros DNS para su dominio."
            },
            {
                question: "Un equipo de desarrollo en su empresa está trabajando en una nueva aplicación. La base de datos de la aplicación tendrá operaciones de lectura intensivas y el equipo quiere minimizar el impacto de estas operaciones en la base de datos de producción. ¿Qué característica de Amazon RDS deberían usar?",
                options: [
                    "A. Copias de seguridad automáticas",
                    "B. IOPS aprovisionadas",
                    "C. Implementaciones Multi-AZ",
                    "D. Réplicas de lectura"
                ],
                answer: "D",
                explanation: "Las réplicas de lectura de Amazon RDS proporcionan una manera de escalar horizontalmente más allá de las limitaciones de capacidad de una sola instancia de base de datos para cargas de trabajo de bases de datos intensivas en lectura. Esto ayudaría a descargar el tráfico de lectura de la instancia principal de la base de datos."
            },
            {
                question: "¿Quién es responsable de habilitar el cifrado en reposo para los datos almacenados en un bucket de Amazon S3?",
                options: [
                    "A. El cliente debe habilitar manualmente el cifrado para cada bucket de S3",
                    "B. El cifrado para S3 solo se puede habilitar a través de Amazon Macie",
                    "C. El cifrado solo puede ser habilitado por usuarios de IAM con permisos administrativos",
                    "D. AWS cifra automáticamente todos los datos almacenados en S3"
                ],
                answer: "A",
                explanation: "El cliente debe habilitar manualmente el cifrado para cada bucket de S3. Esto se puede hacer a nivel de bucket o a nivel de objeto."
            },
            {
                question: "Está implementando una aplicación utilizando la Consola de administración de AWS. Sin embargo, le gustaría automatizar esta implementación para garantizar que se pueda reproducir de manera consistente en múltiples entornos. ¿Qué servicio de AWS usaría para este propósito?",
                options: [
                    "A. AWS Lambda",
                    "B. AWS CLI",
                    "C. AWS CloudFormation",
                    "D. AWS SDK"
                ],
                answer: "C",
                explanation: "AWS CloudFormation es un servicio que le ayuda a modelar y aprovisionar los recursos de AWS y de aplicaciones de terceros en su entorno de nube. Las plantillas de CloudFormation le permiten definir y aprovisionar todos los recursos en su entorno de manera consistente y reproducible, asegurando la capacidad de reproducir implementaciones en múltiples entornos."
            },
            {
                question: "Está operando una aplicación crítica y quiere asegurarse de que los datos sean duraderos, incluso en caso de una falla completa de la región. ¿Qué servicio de AWS debería usar?",
                options: [
                    "A. AWS Backup",
                    "B. Instantáneas de Amazon EBS",
                    "C. AWS Global Accelerator",
                    "D. Amazon S3 con replicación entre regiones habilitada"
                ],
                answer: "D",
                explanation: "Amazon S3 con replicación entre regiones habilitada es la respuesta correcta. Esta configuración replica automáticamente los datos entre múltiples regiones de AWS, asegurando la durabilidad de los datos incluso si una región completa no está disponible."
            },
            {
                question: "Un administrador está trabajando en una gran organización multinacional y quiere asegurarse de que los usuarios de IAM de AWS solo puedan usar dispositivos habilitados para MFA (autenticación multifactor) para iniciar sesión. ¿Cuál de los siguientes pasos pueden tomar para hacer cumplir MFA en la organización?",
                options: [
                    "A. Hacer cumplir MFA en el usuario de IAM a través de una política de IAM administrada.",
                    "B. Hacer cumplir MFA a través de las políticas de control de servicio (SCPs) de AWS Organizations.",
                    "C. Usar Amazon CloudWatch para rastrear inicios de sesión de IAM y usar AWS Lambda para hacer cumplir MFA.",
                    "D. Implementar MFA a nivel de red usando AWS WAF."
                ],
                answer: "A",
                explanation: "Se puede hacer cumplir MFA en los usuarios de IAM utilizando una política de IAM administrada. Esta política luego se puede adjuntar al usuario de IAM para hacer cumplir MFA."
            },
            {
                question: "Una empresa de comercio electrónico está planificando ejecutar una aplicación web de alto rendimiento en AWS. La aplicación debe ser escalable para manejar picos de tráfico y garantizar una experiencia de usuario óptima. ¿Qué combinación de servicios de AWS sería la más adecuada para esta tarea?",
                options: [
                    "A. Amazon EC2 y AWS Auto Scaling",
                    "B. AWS Direct Connect y Amazon VPC",
                    "C. Amazon EC2 y Amazon RDS",
                    "D. AWS Lambda y AWS Step Functions"
                ],
                answer: "A",
                explanation: "Amazon EC2 proporciona los recursos de cómputo, y AWS Auto Scaling ajusta automáticamente el número de instancias de EC2 en función de la demanda, lo que los convierte en la respuesta correcta."
            },
            {
                question: "Está trabajando con una empresa que tiene una arquitectura de aplicación web de tres niveles en una VPC. La arquitectura incluye una capa web, una capa de aplicación y una capa de base de datos. Cada capa está en una subred separada. ¿Cuál de las siguientes configuraciones de seguridad es la más adecuada para asegurar la capa de base de datos?",
                options: [
                    "A. Permitir todo el tráfico desde la capa web.",
                    "B. Permitir solo el tráfico desde una IP conocida de Internet.",
                    "C. Permitir solo el tráfico entrante desde la capa de aplicación.",
                    "D. Permitir el trafico seleccionado por CloudFront."
                ],
                answer: "C",
                explanation: "Permitir solo el tráfico entrante desde la capa de aplicación es la configuración de seguridad más adecuada para la capa de base de datos. Esto garantiza que solo las solicitudes legítimas desde la capa de aplicación puedan acceder a la base de datos, proporcionando un nivel adicional de seguridad."
            },            
            {
                question: "Una empresa de medios necesita transcodificar archivos de video grandes en varios formatos diferentes. Este proceso no es sensible al tiempo pero requiere un alto nivel de potencia computacional. ¿Qué servicio o característica de AWS sería la solución más rentable para los requisitos de la empresa?",
                options: [
                    "A. AWS Fargate",
                    "B. Instancias On-Demand de Amazon EC2",
                    "C. Amazon ECS",
                    "D. Instancias Spot de Amazon EC2"
                ],
                answer: "D",
                explanation: "Las instancias Spot de Amazon EC2 le permiten aprovechar la capacidad no utilizada de EC2 en la nube de AWS. Las instancias Spot están disponibles con descuentos de hasta el 90% en comparación con los precios On-Demand y podrían ser la opción más rentable para cargas de trabajo no sensibles al tiempo."
            },
            {
                question: "Su empresa está migrando su aplicación a AWS y está preocupada por la seguridad. Según el modelo de responsabilidad compartida de AWS, ¿cuál de las siguientes sería la responsabilidad principal de su empresa?",
                options: [
                    "A. Asegurar la infraestructura subyacente que soporta los servicios de AWS.",
                    "B. Mantener los controles de acceso físico a los servidores de AWS.",
                    "C. Asegurarse de que el hipervisor y los sistemas operativos host estén parcheados.",
                    "D. Parchar el sistema operativo invitado de sus instancias EC2."
                ],
                answer: "D",
                explanation: "El cliente es responsable de parchear el sistema operativo invitado y las aplicaciones que ejecutan en sus instancias EC2."
            },
            {
                question: "En AWS, tiene un requisito para permitir que un grupo de usuarios de IAM accedan a leer buckets de S3 específicos y negar el acceso a todos los demás buckets de S3. ¿Cuál de los siguientes enfoques sería el más apropiado?",
                options: [
                    "A. Usar AWS Lambda para controlar el acceso.",
                    "B. Crear una política de IAM personalizada y asignarla al grupo.",
                    "C. Usar una política administrada por AWS y modificarla para cada usuario.",
                    "D. Usar AWS Organizations y Políticas de Control de Servicio (SCPs)."
                ],
                answer: "B",
                explanation: "Las políticas de IAM personalizadas son el método preferido cuando se necesita un control preciso. Aquí, se puede crear una política de IAM personalizada para otorgar el acceso de lectura requerido en buckets específicos de S3 y luego asignarla al grupo."
            },
            {
                question: "Un grupo recién creado de IAM en su organización solo debe tener permiso para detener e iniciar instancias de Amazon EC2, pero no para terminarlas. ¿Cuál de las siguientes es la mejor manera de lograr esto?",
                options: [
                    "A. Adjuntar la política administrada AmazonEC2ReadOnlyAccess al grupo.",
                    "B. Adjuntar la política administrada AmazonEC2FullAccess al grupo.",
                    "C. Crear una política personalizada que permita las acciones ec2:StartInstances y ec2:StopInstances y adjuntarla al grupo.",
                    "D. Aplicar una Política de Control de Servicio (SCP) que permita acciones de inicio y detención de EC2 a nivel de organización."
                ],
                answer: "C",
                explanation: "Crear una política personalizada que específicamente permita las acciones ec2:StartInstances y ec2:StopInstances cumple con el requisito sin otorgar permisos innecesarios."
            },
            {
                question: "Su organización ha realizado una migración masiva de datos a AWS utilizando varios dispositivos Snowball. Después de la migración, surge un requisito de auditoría que necesita prueba de la eliminación de datos de estos dispositivos. ¿Cuál de las siguientes opciones es correcta con respecto a este requisito?",
                options: [
                    "A. Amazon Snowball usa el algoritmo TrueCrypt para la eliminación de datos.",
                    "B. Los dispositivos Snowball usan AWS Key Management Service (KMS) para la eliminación de datos.",
                    "C. AWS proporciona un informe de prueba de eliminación de datos para cada trabajo de Snowball.",
                    "D. AWS no elimina datos de los dispositivos Snowball después de completar la carga de datos."
                ],
                answer: "C",
                explanation: "AWS proporciona un informe de prueba de eliminación de datos, que sirve como prueba de que el dispositivo Snowball ya no contiene los datos importados después de que se complete la tarea. Esto lo convierte en la respuesta correcta."
            },
            {
                question: "Está desarrollando una aplicación web segura en AWS. Su aplicación necesita usar secretos, como contraseñas de bases de datos y claves API. ¿Qué servicio de AWS sería el más adecuado para almacenar y gestionar estos secretos?",
                options: [
                    "A. AWS Key Management Service (KMS)",
                    "B. AWS Secrets Manager",
                    "C. Amazon SQS",
                    "D. Amazon S3"
                ],
                answer: "B",
                explanation: "AWS Secrets Manager está diseñado específicamente para almacenar, gestionar y recuperar secretos de forma segura. Ayuda a proteger el acceso a sus aplicaciones, servicios y recursos de TI, sin los costos iniciales y de mantenimiento continuo de operar su propia infraestructura."
            },
            {
                question: "Su organización está considerando mover sus aplicaciones a la nube para reducir costos. ¿Cuál de las siguientes áreas operativas es más probable que resulte en ahorros de costos al mover a la nube de AWS?",
                options: [
                    "A. Costo de la electricidad para alimentar y enfriar los centros de datos",
                    "B. Costo de capacitar al personal en tecnologías de AWS",
                    "C. Costo de desarrollar nuevas características de software",
                    "D. Costo de herramientas de terceros para gestionar los recursos de AWS"
                ],
                answer: "A",
                explanation: "Al moverse a la nube de AWS, ya no tiene que alimentar y enfriar sus propios centros de datos, lo que puede resultar en ahorros de costos significativos. Por lo tanto, esta es la respuesta correcta."
            },
            {
                question: "Su empresa se está preparando para migrar datos sensibles a un bucket de Amazon S3. ¿Cuál de las siguientes opciones se puede usar para cifrar los datos en reposo en el bucket de S3?",
                options: [
                    "A. AWS KMS",
                    "B. AWS IAM",
                    "C. AWS CloudTrail",
                    "D. Amazon Route 53"
                ],
                answer: "A",
                explanation: "AWS Key Management Service (KMS) es un servicio gestionado que facilita la creación y el control de las claves de cifrado utilizadas para cifrar datos, y utiliza módulos de seguridad de hardware (HSM) para proteger la seguridad de las claves."
            },
            {
                question: "Su organización está ejecutando una aplicación crítica en una instancia de Amazon EC2. El volumen subyacente de Amazon EBS falló debido a un problema. ¿Cuál de los siguientes pasos habría ayudado a mitigar este problema?",
                options: [
                    "A. Habilitar la protección contra terminación en la instancia de EC2",
                    "B. Tomar instantáneas regulares del volumen de Amazon EBS",
                    "C. Aumentar el tamaño del volumen de Amazon EBS",
                    "D. Habilitar la Red Mejorada en la instancia de EC2"
                ],
                answer: "B",
                explanation: "Tomar instantáneas regulares del volumen de Amazon EBS crea copias de seguridad puntuales de sus volúmenes en Amazon S3, que se pueden usar para habilitar la recuperación ante desastres, migrar datos entre regiones o cuentas, mejorar el cumplimiento de copias de seguridad o crear grandes entornos de prueba."
            },
            {
                question: "Una empresa de servicios de streaming está utilizando AWS CloudFront para la entrega de contenido. La empresa quiere entender dónde se almacena en caché el contenido para proporcionar menor latencia a su audiencia global. ¿Cuál de los siguientes términos se relaciona con este requisito?",
                options: [
                    "A. Zonas de Disponibilidad",
                    "B. Ubicaciones Edge",
                    "C. Regiones",
                    "D. Subredes"
                ],
                answer: "B",
                explanation: "Las Ubicaciones Edge son la respuesta correcta. Son sitios desplegados en las principales ciudades del mundo que almacenan contenido en caché para una entrega de menor latencia a los usuarios."
            },
            {
                question: "Una startup está buscando configurar una base de datos MySQL para su nueva aplicación web. Tienen un pequeño equipo de DevOps y quieren asegurarse de minimizar la sobrecarga de gestión mientras mantienen alta disponibilidad. ¿Qué servicio de AWS deberían considerar para este requisito?",
                options: [
                    "A. Usar Amazon RDS con MySQL.",
                    "B. Usar Amazon Aurora con compatibilidad con MySQL.",
                    "C. Instalar MySQL en una instancia de Amazon EC2.",
                    "D. Usar Amazon DynamoDB."
                ],
                answer: "A",
                explanation: "Amazon RDS con MySQL es un servicio gestionado que se encarga de las tareas administrativas de bases de datos, como copias de seguridad, parcheo y conmutación por error, y proporciona alta disponibilidad con una implementación Multi-AZ."
            },
            {
                question: "Su empresa está ejecutando una aplicación en instancias de Amazon EC2 y recientemente ha comenzado a expandir sus operaciones globalmente. La aplicación está experimentando problemas de alta latencia con usuarios de ubicaciones remotas. Como practicante de la nube, ¿qué sugeriría para disminuir esta latencia?",
                options: [
                    "A. Habilitar la característica Multi-AZ para las instancias de EC2.",
                    "B. Utilizar Amazon CloudFront para almacenar en caché el contenido de la aplicación más cerca de los usuarios.",
                    "C. Actualizar las instancias de EC2 a instancias con más memoria y potencia de CPU.",
                    "D. Mover los datos de la aplicación de las instancias de EC2 a un bucket de Amazon S3."
                ],
                answer: "B",
                explanation: "Amazon CloudFront es una red de entrega de contenido (CDN) que almacena copias de su contenido en ubicaciones edge en todo el mundo. Esto acercaría el contenido de la aplicación a los usuarios, reduciendo la latencia."
            },
            {
                question: "Un equipo de desarrolladores en su organización está construyendo una nueva aplicación en AWS que necesita escribir datos en una base de datos de Amazon RDS. Desea dar acceso a la aplicación a la base de datos sin compartir credenciales de seguridad de AWS a largo plazo. ¿Cuál de los siguientes enfoques sería el más adecuado para lograr esto?",
                options: [
                    "A. Asignar los permisos necesarios al usuario de IAM asociado con la aplicación.",
                    "B. Almacenar las credenciales de la cuenta raíz de AWS en AWS Systems Manager Parameter Store y recuperarlas en la aplicación.",
                    "C. Crear un usuario de IAM con los permisos necesarios y almacenar las claves de acceso del usuario en el código de la aplicación.",
                    "D. Crear un rol de IAM con los permisos necesarios y asociarlo con una instancia de EC2 que ejecute la aplicación."
                ],
                answer: "D",
                explanation: "Un rol de IAM proporciona credenciales de seguridad temporales que la aplicación puede usar para hacer solicitudes a la API de AWS. Asociar este rol con la instancia de EC2 permite que la aplicación que se ejecuta en esa instancia asuma el rol."
            },
            {
                question: "Su empresa tiene varias aplicaciones que se ejecutan en AWS con múltiples entornos como desarrollo, prueba, preproducción y producción. Como practicante certificado en la nube de AWS, ¿qué práctica recomendaría para minimizar la posibilidad de cambios accidentales en los recursos de producción?",
                options: [
                    "A. Usar AWS IAM para restringir el acceso a los recursos de producción.",
                    "B. Usar AWS Shield para proteger los recursos de producción.",
                    "C. Usar AWS WAF para evitar cambios en los recursos de producción.",
                    "D. Usar AWS Organizations para aislar el entorno de producción a nivel de cuenta."
                ],
                answer: "D",
                explanation: "AWS Organizations ayuda a gestionar y gobernar centralmente sus entornos en múltiples cuentas de AWS. Aislar entornos utilizando diferentes cuentas de AWS previene cambios accidentales y agrega una capa adicional de seguridad."
            },
            {
                question: "Su organización está utilizando una estructura de múltiples cuentas de AWS con numerosos usuarios de IAM. Necesita implementar una estrategia que haga cumplir la rotación de claves de acceso cada 60 días en todas las cuentas. ¿Qué solución cumpliría mejor con estos requisitos?",
                options: [
                    "A. Implementar una política a nivel de empresa y usar la Consola de administración de AWS para rotar manualmente las claves de acceso cada 60 días.",
                    "B. Usar AWS Config para hacer cumplir las reglas de rotación de claves de acceso en todas las cuentas.",
                    "C. Usar AWS Organizations y Políticas de Control de Servicio (SCPs) para hacer cumplir la rotación de claves de acceso cada 60 días.",
                    "D. Escribir una función personalizada de AWS Lambda que verifique la antigüedad de las claves de acceso en todas las cuentas y las rote si tienen más de 60 días."
                ],
                answer: "D",
                explanation: "AWS Lambda le permite ejecutar código sin aprovisionar ni gestionar servidores. Puede escribir una función que verifique y rote las claves de acceso, luego invocar esta función en múltiples cuentas."
            },
            {
                question: "Una empresa minorista en línea utiliza varios servicios de AWS extensamente. Recientemente, han comenzado a usar AWS Trusted Advisor. ¿Cuál de los siguientes escenarios NO ayudará Trusted Advisor a la empresa?",
                options: [
                    "A. Identificar instancias reservadas de EC2 que están a punto de expirar.",
                    "B. Identificar instancias de Amazon EC2 infrautilizadas.",
                    "C. Identificar buckets de Amazon S3 que son accesibles públicamente.",
                    "D. Proporcionar una auditoría detallada de todas las acciones y eventos pasados de IAM."
                ],
                answer: "D",
                explanation: "AWS Trusted Advisor proporciona alertas proactivas y orientación sobre las mejores prácticas, pero no proporciona una auditoría detallada de todas las acciones y eventos pasados de IAM. Esto sería el rol de AWS CloudTrail."
            },
            {
                question: "Una empresa está utilizando varios servicios de AWS para su aplicación web. Recientemente notaron un aumento inesperado en el costo debido a la transferencia de datos. ¿Qué servicio de AWS pueden usar para monitorear y optimizar los costos?",
                options: [
                    "A. AWS Trusted Advisor",
                    "B. AWS CloudTrail",
                    "C. AWS Cost Explorer",
                    "D. Amazon CloudWatch"
                ],
                answer: "C",
                explanation: "AWS Cost Explorer proporciona información detallada sobre los costos y el uso de AWS, lo que permite un análisis detallado y la identificación de áreas para reducir costos."
            },
            {
                question: "Un administrador de sistemas quiere asegurarse de que los usuarios de IAM solo puedan usar dispositivos habilitados para MFA para iniciar sesión. ¿Cuál de las siguientes políticas deben implementar?",
                options: [
                    "A. Aplicar una política de grupo de IAM administrada",
                    "B. Aplicar una política de control de servicio (SCP) a nivel de organización",
                    "C. Aplicar una política de IAM inline a cada usuario",
                    "D. Aplicar una política administrada de AWS"
                ],
                answer: "A",
                explanation: "Las políticas de grupo de IAM administradas pueden usarse para exigir que los usuarios usen MFA para iniciar sesión."
            },
            {
                question: "Un equipo de desarrollo necesita asegurar el tráfico de red entre las instancias de EC2 y otros servicios de AWS. ¿Cuál de las siguientes opciones proporciona la mejor seguridad de red?",
                options: [
                    "A. Amazon VPC",
                    "B. AWS Shield",
                    "C. Grupos de Seguridad",
                    "D. AWS WAF"
                ],
                answer: "C",
                explanation: "Los Grupos de Seguridad actúan como un firewall virtual para sus instancias, controlando el tráfico de entrada y salida."
            },
            {
                question: "Una empresa global necesita garantizar que sus datos estén disponibles y accesibles en múltiples regiones para mejorar el rendimiento y la disponibilidad. ¿Qué servicio de AWS deberían usar?",
                options: [
                    "A. Amazon S3 con replicación entre regiones habilitada",
                    "B. Amazon CloudFront",
                    "C. AWS Storage Gateway",
                    "D. Amazon RDS con Multi-AZ habilitado"
                ],
                answer: "A",
                explanation: "La replicación entre regiones de Amazon S3 permite la replicación automática de datos en múltiples regiones de AWS."
            },
            {
                question: "Un desarrollador quiere implementar una arquitectura sin servidor para una nueva aplicación. ¿Qué combinación de servicios de AWS sería la más adecuada?",
                options: [
                    "A. Amazon EC2 y Amazon RDS",
                    "B. AWS Lambda y Amazon DynamoDB",
                    "C. Amazon ECS y Amazon Aurora",
                    "D. Amazon S3 y Amazon RDS"
                ],
                answer: "B",
                explanation: "AWS Lambda permite ejecutar código sin aprovisionar servidores, y Amazon DynamoDB es una base de datos NoSQL totalmente gestionada que puede escalar automáticamente."
            },
            {
                question: "Un equipo de seguridad necesita auditar las acciones realizadas por los usuarios de IAM en la cuenta de AWS. ¿Qué servicio de AWS proporciona un registro de auditoría detallado de las actividades de la cuenta?",
                options: [
                    "A. AWS Trusted Advisor",
                    "B. AWS CloudTrail",
                    "C. AWS Config",
                    "D. Amazon CloudWatch"
                ],
                answer: "B",
                explanation: "AWS CloudTrail proporciona un registro detallado de las acciones realizadas por los usuarios, roles y servicios de AWS, permitiendo auditorías de seguridad y análisis de problemas."
            },
            {
                question: "Una empresa quiere implementar una solución de almacenamiento de bajo costo para datos a los que se accede con poca frecuencia pero que necesitan ser recuperados rápidamente cuando se soliciten. ¿Qué clase de almacenamiento de Amazon S3 deberían usar?",
                options: [
                    "A. S3 Standard",
                    "B. S3 Standard-IA (infrequent access)",
                    "C. S3 One Zone-IA",
                    "D. S3 Glacier"
                ],
                answer: "B",
                explanation: "S3 Standard-IA es ideal para datos a los que se accede con poca frecuencia pero que necesitan ser recuperados rápidamente cuando se soliciten."
            },
            {
                question: "Un equipo de TI necesita garantizar que los datos almacenados en un bucket de Amazon S3 estén cifrados. ¿Cuál de las siguientes opciones es la mejor manera de lograr esto?",
                options: [
                    "A. Habilitar el cifrado del lado del cliente",
                    "B. Usar AWS KMS para el cifrado del lado del servidor",
                    "C. Habilitar el cifrado del lado del servidor con claves proporcionadas por el cliente",
                    "D. Usar el cifrado del lado del servidor con S3 Managed Keys (SSE-S3)"
                ],
                answer: "B",
                explanation: "AWS Key Management Service (KMS) proporciona una forma segura y gestionada de cifrar datos en Amazon S3 utilizando claves gestionadas por AWS."
            },
            {
                question: "Una empresa necesita implementar una solución que permita a sus desarrolladores conectarse de manera segura a sus recursos de AWS desde múltiples ubicaciones locales. ¿Qué solución recomendaría?",
                options: [
                    "A. AWS Direct Connect",
                    "B. AWS VPN",
                    "C. AWS Global Accelerator",
                    "D. Amazon CloudFront"
                ],
                answer: "B",
                explanation: "AWS VPN proporciona una conexión segura y privada desde una red local o un cliente a AWS, adecuada para conexiones seguras desde múltiples ubicaciones."
            },
            {
                question: "Una empresa está desarrollando una nueva aplicación que debe escalar automáticamente en función de la demanda del usuario. ¿Qué servicio de AWS proporciona esta capacidad?",
                options: [
                    "A. AWS CloudFormation",
                    "B. Amazon EC2 Auto Scaling",
                    "C. Amazon RDS",
                    "D. AWS Elastic Beanstalk"
                ],
                answer: "B",
                explanation: "Amazon EC2 Auto Scaling ajusta automáticamente el número de instancias de EC2 en función de la demanda, proporcionando escalabilidad automática."
            },
            {
                question: "Un equipo de desarrollo necesita una base de datos NoSQL gestionada que pueda escalar automáticamente en función de la carga de trabajo. ¿Qué servicio de AWS sería el más adecuado?",
                options: [
                    "A. Amazon RDS",
                    "B. Amazon Redshift",
                    "C. Amazon DynamoDB",
                    "D. Amazon Aurora"
                ],
                answer: "C",
                explanation: "Amazon DynamoDB es una base de datos NoSQL completamente gestionada que puede escalar automáticamente en función de la carga de trabajo."
            },
            {
                question: "Un administrador de sistemas necesita asegurarse de que los usuarios de IAM en su cuenta de AWS roten sus contraseñas cada 90 días. ¿Cómo pueden lograr esto?",
                options: [
                    "A. Configurar una política de grupo de IAM",
                    "B. Usar AWS Organizations para imponer la rotación de contraseñas",
                    "C. Configurar una política de contraseña en IAM",
                    "D. Usar AWS Config para monitorear la rotación de contraseñas"
                ],
                answer: "C",
                explanation: "IAM permite configurar una política de contraseña que puede exigir la rotación de contraseñas cada 90 días."
            },
            {
                question: "Un desarrollador quiere escribir un script en Python para interactuar con los servicios de AWS. ¿Cuál es la mejor herramienta para lograr esto?",
                options: [
                    "A. AWS CLI",
                    "B. AWS SDK para Python (Boto3)",
                    "C. AWS CloudFormation",
                    "D. AWS Management Console"
                ],
                answer: "B",
                explanation: "Boto3 es el SDK de AWS para Python, diseñado para ayudar a los desarrolladores a escribir software que use servicios como Amazon S3, Amazon EC2, entre otros."
            },
            {
                question: "Una empresa está desarrollando una aplicación de juegos multijugador sin servidor que requiere un tiempo de respuesta de menos de 10 milisegundos y debe manejar picos de tráfico durante las horas pico. ¿Qué servicio de AWS sería el más adecuado?",
                options: [
                    "A. Amazon EC2 con base de datos autogestionada",
                    "B. Amazon Redshift",
                    "C. Amazon DynamoDB con modo de capacidad On-Demand",
                    "D. Amazon Aurora"
                ],
                answer: "C",
                explanation: "Amazon DynamoDB con modo de capacidad On-Demand puede manejar cargas de trabajo impredecibles y picos de tráfico, proporcionando tiempos de respuesta de un solo dígito en milisegundos."
            },
            {
                question: "Una empresa de atención médica está migrando su infraestructura a AWS. Como parte de esta migración, están considerando utilizar AWS Trusted Advisor. ¿Cuál de los siguientes beneficios NO obtendrán al usar AWS Trusted Advisor?",
                options: [
                    "A. Recomendaciones para aumentar el rendimiento de sus servicios de AWS.",
                    "B. Recomendaciones para mejorar la seguridad de su entorno de AWS.",
                    "C. Recomendaciones para reducir el costo de su entorno de AWS.",
                    "D. Recomendaciones para optimizar el rendimiento de las consultas de su base de datos on-premises."
                ],
                answer: "D",
                explanation: "AWS Trusted Advisor se centra en los servicios de AWS, por lo que no puede proporcionar recomendaciones para bases de datos on-premises."
            },
            {
                question: "Su organización está considerando mover su aplicación on-premises a AWS debido a la creciente demanda durante las horas de trabajo. ¿Qué ventaja clave traerá la implementación de elasticidad en la nube de AWS sobre las soluciones on-premises?",
                options: [
                    "A. En AWS, la elasticidad asegura que su aplicación nunca experimente períodos de alta demanda.",
                    "B. En AWS, la elasticidad requiere una menor inversión inicial en hardware.",
                    "C. En AWS, puede automatizar la escala de recursos según la demanda, reduciendo la necesidad de intervención manual.",
                    "D. En AWS, puede ajustar manualmente sus recursos de cómputo para manejar los tiempos de demanda máxima."
                ],
                answer: "C",
                explanation: "La principal ventaja de la elasticidad de AWS es la capacidad de escalar automáticamente los recursos hacia arriba y hacia abajo según la demanda, reduciendo la necesidad de intervención manual y mejorando la utilización de recursos."
            },
            {
                question: "Una organización ha creado múltiples grupos en AWS IAM para gestionar una gran cantidad de usuarios. Tienen un requisito para otorgar a un grupo de desarrolladores acceso completo a las bases de datos de Amazon RDS para un nuevo proyecto, pero quieren asegurarse de que estos usuarios no puedan modificar los permisos de IAM. ¿Cuál de las siguientes sería la mejor manera de lograr esto?",
                options: [
                    "A. Adjuntar las políticas administradas AmazonRDSFullAccess y IAMReadOnlyAccess al grupo.",
                    "B. Adjuntar la política administrada PowerUserAccess al grupo.",
                    "C. Crear una nueva política administrada que incluya todas las acciones de RDS e IAM y adjuntarla al grupo.",
                    "D. Adjuntar la política administrada AmazonRDSFullAccess y una política inline que deniegue todas las acciones de IAM al grupo."
                ],
                answer: "A",
                explanation: "AmazonRDSFullAccess proporciona acceso completo a los recursos de Amazon RDS, e IAMReadOnlyAccess permite a los usuarios ver pero no modificar los recursos de IAM."
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
    const [examStarted, setExamStarted] = useState(false);

    const startExam = (examType) => {
        const questions = examQuestions[examType].sort(() => 0.5 - Math.random());
        setSelectedExam(questions);
        setCurrentQuestionIndex(0);
        setAnswers({});
        setScore(null);
        setExplanations([]);
        setIsPaused(false);
        setExamStarted(true);
        startTimer(60 * 60);
    };

    const startTimer = (duration) => {
        clearInterval(intervalId);
        setTimer(duration);
        const id = setInterval(() => {
            setTimer(prevTimer => {
                if (!isPaused) {
                    if (prevTimer <= 1) {
                        clearInterval(id);
                        calculateScore();
                        alert("¡Se acabó el tiempo!");
                        return 0;
                    }
                    return prevTimer - 1;
                }
                return prevTimer;
            });
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

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const calculateScore = useCallback(() => {
        let correctAnswers = 0;
        let explanations = [];
        selectedExam.forEach((question, index) => {
            const selectedOption = answers[index];
            const correctOption = question.answer;
            if (selectedOption === correctOption) {
                correctAnswers += 1;
            }
            explanations.push({
                question: question.question,
                explanation: question.explanation,
                correct: selectedOption === correctOption,
                selected: selectedOption ? `${selectedOption}. ${question.options.find(opt => opt.startsWith(selectedOption))?.slice(3)}` : 'No respondida',
                correctAnswer: `${correctOption}. ${question.options.find(opt => opt.startsWith(correctOption))?.slice(3)}`
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
        if (isPaused) {
            clearInterval(intervalId);
        } else if (timer > 0) {
            startTimer(timer);
        }
    }, [isPaused]);

    return (
        <section id="exams">
            {!examStarted && (
                <>
                    <h2>EXAMEN DE AWS CLOUD PRACTITIONER</h2>
                    <p>Para aprobar necesitas una puntuación de 42 preguntas correctas!</p>
                    <div className="exam-buttons">
                        <button onClick={() => startExam('CP1')}>Comenzar Examen Cloud Practitioner 1</button>
                    </div>
                </>
            )}
            {selectedExam.length > 0 && score === null && (
                <div id="examContent">
                    <div className="question">
                        <p>{selectedExam[currentQuestionIndex].question}</p>
                        <ul>
                            {selectedExam[currentQuestionIndex].options.map((option, index) => (
                                <li key={index}>
                                    <label>
                                        <input
                                            type="radio"
                                            name={`question-${currentQuestionIndex}`}
                                            value={option[0]}
                                            checked={answers[currentQuestionIndex] === option[0]}
                                            onChange={() => handleOptionChange(currentQuestionIndex, option[0])}
                                        />
                                        {option}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="navigation-buttons">
                        <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>Volver</button>
                        <button onClick={handleNextQuestion}>{currentQuestionIndex < selectedExam.length - 1 ? 'Siguiente' : 'Finalizar'}</button>
                    </div>
                </div>
            )}
            {score !== null && (
                <div id="score">
                    <h3>Examen completado</h3>
                    <p>Puntaje: {score} de {selectedExam.length}</p>
                    <Accordion allowZeroExpanded>
                        {explanations.map((item, index) => (
                            <AccordionItem key={index}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        {item.question}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p><strong>Tu respuesta fue: {item.selected}</strong></p>
                                    <p><strong>La respuesta correcta es: {item.correctAnswer}</strong></p>
                                    <p>Explicación: {item.explanation}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
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