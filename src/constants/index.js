import {
  mobile,
  backend,
  web,
  inacap,
  devlef,
  llano,
  carrent,
  jobit,
  tripguide,
} from "../assets";

import progestion from "../assets/company/progestion.jpg";
import hospital from "../assets/company/hospital.png";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mí",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrollador Full Stack (PHP, JS)",
    icon: web,
  },
  {
    title: "Especialista Backend (Node, NestJS, Laravel)",
    icon: backend,
  },
  {
    title: "Sistemas Críticos & ERP",
    icon: mobile,
  },
  {
    title: "Cloud & DevOps",
    icon: web, // Using existing icon as placeholder
  },
];

const experiences = [
  {
    title: "Desarrollador Backend / Soporte de Sistemas",
    company_name: "Grupo Progestión",
    icon: progestion,
    iconBg: "#383E56",
    date: "Ago 2025 - Actualidad",
    points: [
      "Participé en la mantención, soporte y evolución de un sistema empresarial crítico en producción.",
      "Abordé incidencias técnicas, errores heredados y problemas de lógica de negocio en módulos utilizados diariamente.",
      "Analicé y corregí fallos complejos en sistemas legacy (PHP 7+ con CodeIgniter), mejorando estabilidad y usabilidad.",
      "Colaboré en la gestión de usuarios, permisos y flujos internos, proponiendo mejoras técnicas.",
      "Formé parte del proceso de migración progresiva desde monolito hacia la plataforma corporativa COR360.",
    ],
  },
  {
    title: "Desarrollador FullStack",
    company_name: "Hospital Roberto del Río",
    icon: hospital,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Jul 2025",
    points: [
      "Modernicé el sistema de registro de pacientes, migrando de PHP a CodeIgniter e integrando APIs de Fonasa y MINSAL.",
      "Añadí trazabilidad de historial, archivos clínicos y soporte para pacientes extranjeros.",
      "Reduje drásticamente tiempos de ingreso mediante un nuevo sistema de admisión de urgencia.",
      "Desarrollé herramientas para gestión de IAAS y programas clínicos (asma, diabetes).",
      "Implementé sistema de abastecimiento completo (stock, QR, ZPL, MQTT).",
      "Automaticé procesos de solicitud de correos y perfiles con flujos de aprobación.",
    ],
  },
  {
    title: "Analista Programador",
    company_name: "Inacap",
    icon: inacap,
    iconBg: "#383E56",
    date: "2020 - 2022",
    points: [
      "Titulado como Analista Programador, ranking 3ro de la generación.",
      "Formación sólida en Bases de Datos (MySQL, MongoDB), Lógica y Lenguajes (Java, PHP, C#, JS).",
      "Análisis de mercado, diagramas de flujo y cálculo de costos.",
    ],
  },
  {
    title: "Formación Continua & Certificaciones",
    company_name: "Varios",
    icon: mobile, // Placeholder icon
    iconBg: "#E6DEDD",
    date: "2023 - 2025",
    points: [
      "Ciberseguridad e Inteligencia Artificial (Advance Capacitaciones, 2023-2024).",
      "HL7-Fire (HL7Chile, Cesar Galindo, 2024-2025).",
      "Fundamentos de DevOps (SENCE - Adalid Limitada, 2025 - 161Hrs).",
      "Inglés Nivel B2 / Francés Nivel A2.",
    ],
  },
  {
    title: "Desarrollador Web",
    company_name: "DevLef",
    icon: llano,
    iconBg: "#383E56",
    date: "Sep 2022 - Nov 2022",
    points: [
      "Desarrollo de aplicación web para PsicologosTemuco con Laravel y MySQL.",
      "Colaboración con equipos multifuncionales.",
      "Implementación de diseño responsivo.",
    ],
  },
];

const projects = [
  {
    name: "COR360 – Enterprise Microservices",
    description:
      "Diseño y desarrollo de nueva arquitectura basada en microservicios para reemplazar sistema monolítico. NestJS, RabbitMQ, MongoDB/PostgreSQL, OpenSearch.",
    tags: [
      { name: "nestjs", color: "blue-text-gradient" },
      { name: "microservices", color: "green-text-gradient" },
      { name: "rabbitmq", color: "pink-text-gradient" },
      { name: "docker", color: "blue-text-gradient" },
    ],
    // No image for now, handling in component
    source_code_link: "", // No public link
  },
  {
    name: "BMS – Financial Management",
    description:
      "Mantenimiento y estabilización de plataforma monolítica crítica. Optimización SQL Server, refactor de código legacy y debug de SPs complejos.",
    tags: [
      { name: "codeigniter", color: "blue-text-gradient" },
      { name: "sqlserver", color: "green-text-gradient" },
      { name: "legacy", color: "pink-text-gradient" },
    ],
    image: progestion,
    source_code_link: "",
  },
  {
    name: "Infection Control System",
    description:
      "Sistema para gestión de pacientes infecciosos y aislamiento. Estandarización de registros, alertas clínicas y modelado de estados dinámicos.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "ajax", color: "pink-text-gradient" },
    ],
    image: hospital,
    source_code_link: "",
  },
  {
    name: "Hospital Supply Chain",
    description:
      "Gestión de inventario y logística hospitalaria. Control de stock, QR, integración con Informix y optimización de llamadas masivas.",
    tags: [
      { name: "codeigniter", color: "blue-text-gradient" },
      { name: "informix", color: "green-text-gradient" },
      { name: "datatables", color: "pink-text-gradient" },
    ],
    image: hospital,
    source_code_link: "",
  },
  {
    name: "Emergency Triage Index",
    description:
      "Optimización de flujo de admisión en urgencias. Reducción de tiempos, autocompletado inteligente e integración con API Fonasa.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: "api-rest", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: hospital,
    source_code_link: "",
  },
];

export { services, experiences, projects };