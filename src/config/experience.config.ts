export interface JobExperience {
  id: number;
  title: string;
  company: string;
  startDate: Date;
  endDate: Date;
  description: string;
  technologies: string[];
  tasks: string[];
  companyUrl: string;
  currentJob: boolean;
}

/*
  📌 Experiencia laboral.
  Define las experiencias laborales que se muestran en la sección "Experiencia".

  - id:           Identificador único numérico.
  - title:        Título del puesto de trabajo.
  - company:      Nombre de la empresa.
  - startDate:    Fecha de inicio.
  - endDate:      Fecha de finalización.
  - description:  Descripción general del rol y responsabilidades.
  - technologies: Tecnologías y herramientas utilizadas. Se muestran como badges.
  - tasks:        Lista de tareas y actividades realizadas en el puesto.
  - companyUrl:   URL del sitio web de la empresa. Dejar vacío ("") si no tiene.
  - currentJob:   Si es true, se muestra un badge indicando "Trabajo actual".
*/
export const jobExperiences: JobExperience[] = [
  {
    id: 1,
    title: "Desarrollador fullstack",
    company: "Norte Beneficios",
    startDate: new Date("2024-09-01"),
    endDate: new Date("2025-12-31"),
    description:
      "A cargo del área de sistemas de la empresa, la cual incluye varias marcas, cada una con sus respectivos desarrollos y aplicaciones. Responsable del desarrollo y mantenimiento de aplicaciones móviles en Flutter, así como de sitios web y aplicaciones web utilizando Next.JS. Implementación de nuevas funcionalidades, optimización de rendimiento y aseguramiento de la calidad del software. Trabajo colaborativo con equipos multidisciplinarios para cumplir con los objetivos del negocio.",
    technologies: [
      "Next.JS",
      "Flutter",
      "Firebird SQL",
      "TypeScript",
      "JavaScript",
      "Dart",
    ],
    tasks: [
      "Actualización constante de aplicaciones móviles en Flutter",
      "Gestión de publicación de apps en App Store y Play Store",
      "Desarrollo y mantenimiento de sitios web y aplicaciones web responsivas",
      "Configuración, despliegue y monitoreo de proyectos web en producción",
      "Desarrollo y expansión de sistemas internos de la empresa (JakeMate)",
      "Capacitación y soporte a personal no técnico en el uso de herramientas digitales",
      "Trabajo colaborativo con equipos multidisciplinarios",
    ],
    companyUrl: "https://nortebeneficios.com.ar",
    currentJob: true,
  },
  {
    id: 2,
    title: "Gestión Comercial y Administrativa",
    company: "Area Comercial Varias",
    startDate: new Date("2014-02-01"),
    endDate: new Date("2024-08-31"),
    description:
      "Trayectoria diversa en roles comerciales y administrativos, incluyendo gestión de emprendimientos propios y posiciones de responsabilidad en atención al público. Esta experiencia aportó habilidades clave en comunicación, resolución de problemas y gestión de proyectos que complementan mi perfil técnico actual.",
    technologies: [
      "Comunicación",
      "Gestión Administrativa",
      "Negociación",
      "Liderazgo",
      "Organización",
    ],
    tasks: [
      "Atención directa al cliente y gestión de relaciones comerciales de largo plazo",
      "Administración integral de negocios: control de caja, inventario, facturación y reportes",
      "Negociación y coordinación con proveedores para optimizar costos y tiempos de entrega",
      "Resolución de conflictos y toma de decisiones bajo presión en entornos dinámicos",
      "Organización y planificación de operaciones diarias con enfoque en eficiencia",
      "Liderazgo de equipos pequeños y capacitación de personal",
    ],
    companyUrl: "",
    currentJob: false,
  },
];
