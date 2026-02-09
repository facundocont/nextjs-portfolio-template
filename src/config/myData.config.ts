export interface ProfessionalIdentity {
  mainRole: string;

  specializations: string[];

  credentials: {
    title: string;
    institution?: string;
    year?: number;
  }[];

  primaryTech: string[];

  jobTitle: string;
  description: string;
}

export interface MyData {
  name: string;

  professional: ProfessionalIdentity;

  description: string;

  email: string;
  linkedin: string;
  github: string;
  workStartDate: Date;

  socialProfiles?: {
    twitter?: string;
    portfolio: string;
  };
}

/*
  📌 Datos personales y profesionales.
  Este es el archivo principal de configuración. Los datos aquí definidos se utilizan en múltiples
  secciones del portfolio (Hero, Navbar, Footer, SEO, JSON-LD, contacto).

  - name:           Nombre completo. Se muestra en el Navbar, Hero y metadatos.
  - professional:   Identidad profesional:
    - mainRole:         Rol principal (ej: "Desarrollador Full Stack"). Se muestra en el Hero.
    - jobTitle:         Rol en inglés. Se usa exclusivamente en el JSON-LD Schema.
    - specializations:  Áreas de especialización. Aparecen en las keywords SEO.
    - credentials:      Títulos académicos. Se usan en SEO y JSON-LD.
    - primaryTech:      Tecnologías principales. Se usan en SEO y JSON-LD.
    - description:      Descripción profesional extendida. Se usa en JSON-LD.
  - description:    Texto breve para el Hero. Visible al usuario como presentación.
  - email:          Email de contacto. Se usa en la sección de contacto y para recibir emails del formulario.
  - linkedin:       URL del perfil de LinkedIn. Se muestra en los enlaces sociales.
  - github:         URL del perfil de GitHub. Se muestra en los enlaces sociales.
  - workStartDate:  Fecha de inicio laboral. Se usa para calcular automáticamente los años de experiencia en el Hero.
  - socialProfiles:  (Opcional) URLs adicionales de redes sociales.
*/
export const myData: MyData = {
  name: "Facundo Contreras",
  professional: {
    mainRole: "Desarrollador de Software",
    jobTitle: "Software Developer",

    specializations: [
      "Desarrollo de Aplicaciones Web",
      "Desarrollo Mobile (Flutter)",
      "Backend (en formación)",
    ],

    credentials: [
      {
        title: "Técnico Superior en Programación",
      },
    ],

    primaryTech: ["Next.js", "TypeScript", "Flutter", "Astro", "JavaScript"],

    description:
      "Desarrollador de Software especializado en aplicaciones web modernas con Next.js y TypeScript, desarrollo mobile con Flutter, y en formación continua en tecnologías backend. Técnico Superior en Programación con enfoque en soluciones escalables y experiencia de usuario.",
  },
  description:
    "Me dedico al desarrollo de aplicaciones web y mobile. Trabajo principalmente con Next.js, Flutter, TypeScript y Astro, y me capacito constantemente en tecnologías backend. Técnico Superior en Programación. Explorá mis proyectos, habilidades y experiencias.",

  email: "facundocont.fc@gmail.com",
  linkedin: "https://www.linkedin.com/in/facundo-ignacio-contreras/",
  github: "https://github.com/facundocont",
  workStartDate: new Date("2024-02-01"),

  socialProfiles: {
    portfolio: "https://facundocont.com",
  },
};
