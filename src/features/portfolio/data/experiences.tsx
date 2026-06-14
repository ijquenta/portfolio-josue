import { GraduationCapIcon } from "lucide-react"
import { CodeXmlIcon } from "@animateicons/react/lucide"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "certivo",
    companyName: "Certivo",
    companyWebsite: "#",
    positions: [
      {
        id: "1",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "07.2025",
          end: "12.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Desarrollo de aplicacion web con Next.js y aplicacion movil con Flutter para la certificacion de parcelas de productores mediante listas de verificacion y planes de acciones correctivas.\n- Implementacion de soluciones backend utilizando Node.js, Express y Firebase para el procesamiento de mensajes y la gestion de datos.\n- Colaboracion en el desarrollo de interfaces de usuario responsivas en plataformas web y moviles.",
        skills: [
          "Next.js",
          "Flutter",
          "Node.js",
          "Express",
          "Firebase",
          "TypeScript",
          "Dart",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "bucle-venture",
    companyName: "Bucle Ventures",
    companyWebsite: "#",
    positions: [
      {
        id: "1",
        title: "Junior Product Developer",
        employmentPeriod: {
          start: "01.2025",
          end: "09.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Participacion activa en el desarrollo de productos innovadores, aplicando metodologias agiles para garantizar entregas eficientes y de alta calidad.\n- Colaboracion estrecha con equipos multidisciplinarios en el diseno, implementacion y prueba de nuevas funcionalidades.\n- Desarrollo de aplicaciones ChatBot en WhatsApp utilizando FastAPI y aplicaciones web con React.\n- Compromiso con la mejora continua y la excelencia en el desarrollo de software.",
        skills: [
          "Node.js",
          "Google Cloud",
          "FastAPI",
          "Python",
          "React",
          "TypeScript",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "mefp",
    companyName: "MEFP | Ministerio de Economia y Finanzas Publicas",
    companyWebsite: "#",
    positions: [
      {
        id: "1",
        title: "QA jr",
        employmentPeriod: {
          start: "09.2024",
          end: "12.2024",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Desarrollo de microservicios para un sistema de informacion enfocado en el seguimiento de actividades y gestion de proyectos bajo la metodologia SCRUM.\n- Implementacion del sitio web de documentacion para JasperReport en el modulo de formularios del sistema, mejorando la accesibilidad y usabilidad.\n- Realizacion de pruebas funcionales exhaustivas para garantizar la calidad y estabilidad del sistema de informacion, contribuyendo a la entrega de un producto robusto y confiable.",
        skills: [
          "SCRUM",
          "Microservices",
          "JasperReport",
          "Documentation",
          "Functional Testing",
        ],
      },
    ],
  },
  {
    id: "umsa-dtic",
    companyName: "UMSA — DTIC",
    companyWebsite: "#",
    positions: [
      {
        id: "1",
        title: "Desarrollador de software",
        employmentPeriod: {
          start: "02.2023",
          end: "12.2023",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Responsable del desarrollo y mantenimiento de modulos y sistemas administrativos, incluyendo el calculo de liquidaciones, prestaciones sociales y el sistema de recursos humanos.\n- Proporcion de soporte tecnico en linea para los sistemas de informacion, resolviendo incidencias y asegurando la continuidad operativa.\n- Creacion de manuales de usuario, programacion y tecnicos para facilitar la adopcion y el uso eficiente de los sistemas.\n- Imparticion de capacitacion a usuarios administrativos, mejorando su capacidad para utilizar las herramientas de software de manera efectiva.",
        skills: [
          "Web Development",
          "Technical Documentation",
          "User Support",
        ],
      },
    ],
  },
  {
    id: "umsa-teaching",
    companyName: "UMSA — Auxiliar de Docencia",
    companyIcon: <GraduationCapIcon strokeWidth={1.8} />,
    positions: [
      {
        id: "2",
        title: "Auxiliar de Docencia Titular — Informatica",
        employmentPeriod: {
          start: "2022",
        },
        employmentType: "Part-time",
        icon: <GraduationCapIcon />,
        description:
          "- INF 142 — Fundamentos Digitales\n- INF 112 — Organizacion de Computadoras",
        skills: ["Digital Fundamentals", "Computer Organization"],
      },
      {
        id: "1",
        title: "Auxiliar de Docencia — Curso Preuniversitario",
        employmentPeriod: {
          start: "2021",
        },
        employmentType: "Part-time",
        icon: <GraduationCapIcon />,
        description:
          "- MAT 99 — Introduccion a la Matematica",
        skills: ["Mathematics"],
      },
    ],
  },
  {
    id: "education",
    companyName: "Educacion",
    companyIcon: <GraduationCapIcon strokeWidth={1.8} />,
    positions: [
      {
        id: "1",
        title: "Universidad Mayor de San Andres (UMSA)",
        employmentPeriod: {
          start: "07.2018",
          end: "07.2024",
        },
        icon: <GraduationCapIcon />,
        description:
          "- Licenciatura en Ciencias de la Computacion, con mencion en Ingenieria de Sistemas.\n- Nivel Intermedio de Ingles (B1–B2) — CETI UMSA (2024–Presente).",
        skills: [
          "Java",
          "Python",
          "TypeScript",
          "Algorithms",
          "Software Engineering",
          "Database Design",
        ],
      },
    ],
  },
]
