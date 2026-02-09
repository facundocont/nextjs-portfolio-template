import { myData } from "@/config/myData.config";

export interface ConfigWeb {
  titleWeb: string;
  titleTemplate: string;
  descriptionWeb: string;
  titleWebContact: string;
  descriptionWebContact: string;
  keywordsWeb: string[];
  urlWeb: string;
  locale: string;
  lang: string;
  iconRoute: string;
  imageShareRoute: string;
  typeImageShare: string;
}

// Generar título dinámicamente desde la identidad profesional
const generateMainTitle = () => {
  return `${myData.name} | ${myData.professional.mainRole}`;
};

const generateDescription = () => {
  const specs = myData.professional.specializations.slice(0, 2).join(", ");
  return `Portfolio profesional de ${myData.name}, ${myData.professional.mainRole}. Especializado en ${specs}. ${myData.professional.credentials[0].title}. Proyectos con ${myData.professional.primaryTech.slice(0, 3).join(", ")} y más.`;
};

/*
  📌 Configuración del sitio web y SEO.
  Contiene los metadatos y opciones de SEO del sitio. Los campos titleWeb y descriptionWeb
  se generan automáticamente desde myData, por lo que no es necesario editarlos manualmente.

  - titleWeb:               Título del sitio (generado automáticamente).
  - titleTemplate:          Plantilla para títulos de sub-páginas (ej: "Contacto | Tu Nombre").
  - descriptionWeb:         Descripción del sitio para SEO (generada automáticamente).
  - titleWebContact:        Título de la página de contacto. Se combina con el titleTemplate.
  - descriptionWebContact:  Descripción de la página de contacto para SEO.
  - keywordsWeb:            Palabras clave para SEO.
  - urlWeb:                 ⚠️ URL de producción del sitio. Modificar al hacer deploy.
  - locale:                 Configuración regional (ej: "es-AR", "en-US").
  - lang:                   Idioma del sitio (ej: "es", "en"). Se usa en la etiqueta <html lang>.
  - iconRoute:              Ruta al favicon.
  - imageShareRoute:        Ruta a la imagen para Open Graph y Twitter Cards (1200x630 recomendado).
  - typeImageShare:         Tipo MIME de la imagen para compartir.
*/
export const configWeb: ConfigWeb = {
  titleWeb: generateMainTitle(),
  titleTemplate: `%s | ${myData.name}`,
  descriptionWeb: generateDescription(),
  titleWebContact: "Contacto",
  descriptionWebContact: `Ponte en contacto con ${myData.name} para colaboraciones y consultas profesionales en desarrollo de software.`,

  keywordsWeb: [
    myData.name,
    myData.professional.mainRole,
    ...myData.professional.specializations,
    ...myData.professional.primaryTech,
    myData.professional.credentials[0].title,
    "portfolio",
    "desarrollador",
    "programador",
    "Argentina",
  ],
  urlWeb: "https://facundocont.com",
  locale: "es-AR",
  lang: "es",
  iconRoute: "./favicon.ico",
  imageShareRoute: "./toshare.webp",
  typeImageShare: "image/webp",
};
