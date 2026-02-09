type ProjectStatus = "production" | "development" | "archived";
type ProjectType = "professional" | "personal" | "collaborative";

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  websiteUrl: string;
  recommended: boolean;
  startDate: Date;
  endDate: Date;
  repoUrl: string;
  status: ProjectStatus;
  type: ProjectType;
  company?: string;
  metrics?: string;
}

/*
  📌 Proyectos.
  Define el listado de proyectos que se muestran en la sección "Proyectos".
  Los proyectos con 'recommended: true' se muestran primero (ver función getProjectsSorted).

  - id:          Identificador único numérico.
  - title:       Nombre del proyecto.
  - description: Descripción del proyecto. Se muestra en la tarjeta y en el modal de detalle.
  - imageUrl:    URL de la imagen/captura del proyecto. Soporta URLs de Cloudinary con optimización automática.
  - tags:        Tecnologías utilizadas. Se muestran como badges en la tarjeta.
  - websiteUrl:  URL del sitio en producción. Dejar vacío ("") si no tiene.
  - recommended: Si es true, el proyecto se muestra en la parte superior (destacado).
  - startDate:   Fecha de inicio del proyecto.
  - endDate:     Fecha de finalización del proyecto.
  - repoUrl:     URL del repositorio. Dejar vacío ("") si es privado o no tiene.
  - status:      Estado actual: "production" | "development" | "archived".
  - type:        Tipo de proyecto: "professional" | "personal" | "collaborative".
  - company:     (Opcional) Nombre de la empresa asociada.
  - metrics:     (Opcional) Descripción del impacto o métricas del proyecto.
*/
export const projects: Project[] = [
  {
    id: 8,
    title: "Cotizador de planes de salud - Tu Norte Salud",
    description:
      "Web app de cotización de planes de salud para Tu Norte Salud, que permite a los usuarios obtener presupuestos personalizados según sus necesidades. Desarrollada en Next.JS con TailwindCSS, TypeScript y Zustand, la aplicación ofrece una interfaz intuitiva y responsiva, mejorando la experiencia del usuario y facilitando la adquisición de planes de salud. Además se implementó un login para vendedores, quienes pueden gestionar sus cotizaciones y clientes desde un panel administrativo.",
    imageUrl:
      "https://res.cloudinary.com/dbgcyunjb/image/upload/v1760014103/cotizar.tunortesalud.com.ar__w97aq4.webp",
    tags: [
      "Next.JS",
      "TailwindCss",
      "HeroUi",
      "Zustand",
      "TypeScript",
      "Figma",
    ],
    websiteUrl: "https://cotizar.tunortesalud.com.ar",
    recommended: true,
    startDate: new Date("2024-12-03"),
    endDate: new Date("2025-06-20"),
    repoUrl: "",
    status: "production",
    type: "professional",
    company: "Norte Beneficios",
    metrics: "Sistema activo con cotizaciones diarias",
  },
  {
    id: 7,
    title: "Norte Beneficios",
    description:
      "Sitio institucional para Norte Beneficios, empresa con más de 40 años de trayectoria. Se realizó un rediseño integral del sitio anterior en WordPress, modernizando la imagen y optimizando la experiencia de usuario. El desarrollo se completó en 3 meses con Next.JS, logrando una interfaz intuitiva, diseño responsivo y mejoras en rendimiento, accesibilidad y posicionamiento SEO.",
    imageUrl:
      "https://res.cloudinary.com/dbgcyunjb/image/upload/v1755700815/nortebeneficios.com.ar__kygjxo.webp",
    tags: [
      "Next.JS",
      "TailwindCss",
      "DaisyUI",
      "Swiper",
      "TypeScript",
      "Figma",
    ],
    websiteUrl: "https://nortebeneficios.com.ar",
    recommended: true,
    startDate: new Date("2025-02-01"),
    endDate: new Date("2025-05-31"),
    repoUrl: "",
    status: "production",
    type: "professional",
    company: "Norte Beneficios",
    metrics: "Sitio corporativo con tráfico constante",
  },
  {
    id: 6,
    title: "Next.JS Boilerplate",
    description:
      "Plantilla base para proyectos Next.js 15 con TypeScript, que incluye configuraciones esenciales como React 19, TailwindCSS v4, ESLint, Prettier, Husky y Commitizen. Permite iniciar desarrollos de manera rápida y eficiente, siguiendo buenas prácticas de calidad y estilo de código.",
    imageUrl:
      "https://res.cloudinary.com/dbgcyunjb/image/upload/v1755700292/github.com_facundocont_nextjs-boilerplate_roztr9.webp",
    tags: [
      "Next.JS",
      "TailwindCss",
      "ESLint",
      "Prettier",
      "Husky",
      "Commitizen",
      "TypeScript",
    ],
    websiteUrl: "",
    recommended: false,
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-02-28"),
    repoUrl: "https://github.com/facundocont/nextjs-boilerplate",
    status: "development",
    type: "personal",
  },
  {
    id: 5,
    title: "Invitación Digital",
    description:
      "Invitación web personalizada para evento, elegida como medio principal por los anfitriones. Desarrollada en dos semanas con Astro y TailwindCss, ofrece una experiencia visual atractiva y funcional, optimizada para dispositivos móviles y desplegada en Vercel.",
    imageUrl:
      "https://res.cloudinary.com/dbgcyunjb/image/upload/v1755788626/localhost_4321__xphejw.webp",
    tags: ["Astro", "TailwindCss", "HeroUi", "TypeScript", "Vercel"],
    websiteUrl: "",
    recommended: false,
    startDate: new Date("2024-11-01"),
    endDate: new Date("2024-12-31"),
    repoUrl: "",
    status: "archived",
    type: "personal",
    metrics: "Evento finalizado",
  },
  {
    id: 4,
    title: "Ruta Cervecera SDE",
    description:
      "Plataforma web para explorar cervecerías de Santiago del Estero, lanzada previo a un evento local para generar expectativa y atraer visitantes. Permite a los usuarios descubrir establecimientos, ver información relevante y planificar recorridos.",
    imageUrl:
      "https://res.cloudinary.com/dbgcyunjb/image/upload/v1755700815/www.rutacervecerasde.com.ar__rixx7m.webp",
    tags: ["Astro", "TailwindCss", "HeroUi", "TypeScript", "Vercel"],
    websiteUrl: "https://rutacervecerasde.com.ar",
    recommended: true,
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-09-30"),
    repoUrl: "",
    status: "production",
    type: "personal",
    metrics: "Plataforma consultada regularmente por turistas",
  },
  {
    id: 3,
    title: "Tu Norte Salud",
    description:
      "Sitio web de presentación para Norte Salud, servicio de medicina integral de una mutual. Acompaña a la empresa desde su lanzamiento, con actualizaciones periódicas para reflejar cambios en servicios y mantener la información al día.",
    imageUrl:
      "https://res.cloudinary.com/dbgcyunjb/image/upload/v1755699447/www.tunortesalud.com.ar__kuv1fz.webp",
    tags: ["Next.JS", "TailwindCss", "Shadcn UI", "TypeScript", "Figma"],
    websiteUrl: "https://tunortesalud.com.ar",
    recommended: true,
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-05-31"),
    repoUrl: "",
    status: "production",
    type: "professional",
    company: "Norte Beneficios",
    metrics: "Sitio activo con actualizaciones mensuales",
  },
  {
    id: 2,
    title: "TalkIAmos",
    description:
      "Plataforma colaborativa de traducción en tiempo real basada en inteligencia artificial, capaz de detectar modismos de distintos países y ofrecer resultados precisos. Desarrollada en equipo para No Country.",
    imageUrl:
      "https://res.cloudinary.com/dbgcyunjb/image/upload/v1755700066/talkiamos_qmh7kv.webp",
    tags: ["Next.JS", "TailwindCss", "HeroUi", "TypeScript", "Vercel", "Figma"],
    websiteUrl: "",
    recommended: false,
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-04-30"),
    repoUrl: "https://github.com/No-Country-simulation/s14-02m-node-react",
    status: "archived",
    type: "collaborative",
    metrics: "Proyecto de simulación laboral completado",
  },
  {
    id: 1,
    title: "GoCourier",
    description:
      "WebApp para gestión eficiente de envíos, con diseño UX/UI propio y desarrollo frontend en React con Vite. Permite a los usuarios administrar sus entregas de forma intuitiva y segura. Desarrollada en equipo para No Country.",
    imageUrl:
      "https://res.cloudinary.com/dbgcyunjb/image/upload/v1755700066/gocourier_dwdcaa.webp",
    tags: ["React", "TailwindCss", "Javascript", "Vercel", "Figma"],
    websiteUrl: "",
    recommended: false,
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-03-31"),
    repoUrl: "https://github.com/No-Country-simulation/C16-03-m-node-react-",
    status: "archived",
    type: "collaborative",
    metrics: "Proyecto de simulación laboral completado",
  },
];

export function getProjectsSorted() {
  const featuredProjects = projects.filter((p) => p.recommended);
  const remainingProjects = projects.filter((p) => !p.recommended);
  const sortedProjects = [...featuredProjects, ...remainingProjects];
  return sortedProjects;
}
