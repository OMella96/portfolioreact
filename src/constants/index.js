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

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer (PHP, JS)",
    icon: web,
  },
  {
    title: "Backend Specialist (Node, NestJS, Laravel)",
    icon: backend,
  },
  {
    title: "Critical Systems & ERP",
    icon: mobile,
  },
  {
    title: "Cloud & DevOps Enthusiast",
    icon: web, // Using existing icon as placeholder
  },
];

const experiences = [
  {
    title: "Desarrollador Backend / Soporte de Sistemas",
    company_name: "Grupo Progestión",
    icon: backend, // Placeholder icon
    iconBg: "#383E56",
    date: "Aug 2025 - Present",
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
    icon: web, // Placeholder icon
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
    title: "Web Developer",
    company_name: "DevLef",
    icon: llano,
    iconBg: "#383E56",
    date: "Sep 2022 - Nov 2022",
    points: [
      "Developing web application for PsicologosTemuco With Laravel and Mysql.",
      "Collaborating with cross-functional teams.",
      "Implementing responsive design.",
    ],
  },
];

const projects = [
  {
    name: "WareHouse College",
    description:
      "Web-based platform that allows users to search materials, order the warehouse college, schedule important things and restocking.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/OMella96/Project-Bodega",
  },
  {
    name: "Laravel Crud",
    description:
      "Web application allow users to request appointments with a psychologist, as well as psychologists to manage their patients.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/OMella96",
  },
  {
    name: "Portal IA",
    description:
      "Portal about AI that allows the user to connect to a Node-created API to store data in MongoDB.",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "angular",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/OMella96/PortalAI",
  },
];

export { services, experiences, projects };