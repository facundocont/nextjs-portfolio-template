export interface AboutMe {
  bio: string[];
}

/*
  📌 Sección "Sobre mí".
  Define los párrafos de la biografía que se muestran en la sección "Sobre mí".

  - bio: Array de strings. Cada elemento es un párrafo.
         Para resaltar texto en negrita, encerralo entre ** (ej: **texto resaltado**).
*/
export const aboutMe: AboutMe = {
  bio: [
    "Soy Facundo, **Desarrollador de Software**.",
    "Estudié y me gradué como **Técnico Superior en Programación** y desde entonces he estado trabajando en el desarrollo de aplicaciones web y móviles. Pero no fue lo único que estudié; estudié una Licenciatura en Sistemas de Información y también realicé un curso en Seguridad de la Información. Actualmente, estoy ampliando mis conocimientos en tecnologías backend y mejorando mis capacidades en Flutter para desarrollo móvil.",
    "Como persona, me considero bastante **curioso y persistente**. Eso me ha llevado a trabajar buscando siempre la mejor solución a los problemas que se me presentan y a no rendirme fácilmente ante los desafíos.",
    "Trabajando soy una persona **proactiva, orientada a resultados** y comprometida con la calidad. Disfruto trabajando en equipo y colaborando con otros profesionales para lograr objetivos comunes.",
    "Además de mi experiencia técnica, valoro la **comunicación efectiva** y la **atención al detalle** en cada proyecto que emprendo.",
  ],
};
