export interface Section {
  name: string;
  link: string;
}

/*
  📌 Secciones de navegación.
  Define las secciones que aparecen en el Navbar y en el Footer.

  - name: Texto visible en el menú de navegación.
  - link: Ancla de la sección (debe coincidir con el 'id' del SectionContainer correspondiente en la página).
*/
export const sections: Section[] = [
  { name: "Sobre mí", link: "#sobre-mi" },
  { name: "Proyectos", link: "#proyectos" },
  { name: "Experiencia", link: "#experiencia" },
  { name: "Tecnologías", link: "#tecnologias" },
  { name: "Estudios", link: "#estudios" },
  { name: "Contacto", link: "#contacto" },
];
