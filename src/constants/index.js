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
      title: "Angular, Laravel, Bootstrap",
      icon: web,
    },
    {
      title: "PHP, JAVA, JS, HTML",
      icon: mobile,
    },
    {
      title: " MySQL , MongoDB, Node",
      icon: backend,
    },

  ];
  
  const experiences = [
    {
      title: "Inacap",
      
      icon: inacap,
      iconBg: "#383E56",
      date: "March 2019 - December 2022",
      points: [
        "Title of the degree in Programming Analyst, ranked 3rd in the class, learning:",
        "Learning about BD with Mysql, MysqlWorkbench, Diagrams, MongoDB, relational and non-relational.",
        "Learning about Logic, and lenguajes, Java, PHP, C#, Html, Css, JS.",
        "Flowcharts, market analysis, cost calculation, and production dates.",
      ],
    },
    {
      title: "Warehouse for a school",
      company_name: "El Llano Pirque",
      icon: devlef,
      iconBg: "#E6DEDD",
      date: "Jul 2021 - Nov 2021",
      points: [
        "Developing and maintaining web application using PHP, JS, Mysql, HTML y Bootstrap.",
        "Develop a warehouse, for a school located in Pirque, Santiago Rm.",
        "Basic aplicacion with a C.R.U.D. and A user interface where students can log in and place their orders and a Calendar.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "DevLef",
      icon: llano,
      iconBg: "#383E56",
      date: "Sep 2022 - Nov 2022",
      points: [
        "Developing web aplication for PsicologosTemuco With Laravel and Mysql.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
 
  ];
  
  const projects = [
    {
      name: "WareHouse College",
      description:
        "Web-based platform that allows users to search materials,Require with antipation, order the warehouse college, Schedule important things and restocking.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "Mysql",
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
        "Web application allow users to request appointments with a psychologist, as well as psychologists to manage their patients, schedule appointments and send medical data .",
      tags: [
        {
          name: "l aravel",
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