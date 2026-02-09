export interface Study {
  id: number;
  title: string;
  institution: string;
  startDate: Date;
  endDate: Date;
  status: "en curso" | "finalizado" | "pendiente";
  description: string;
  certificateUrl: string;
}

/*
  📌 Estudios principales.
  Define los estudios formales (universitarios, terciarios, etc.) que se muestran
  en la sección "Estudios". Se ordenan automáticamente por fecha de finalización (más recientes primero).

  - id:             Identificador único numérico.
  - title:          Nombre del título o carrera.
  - institution:    Institución que otorga el título.
  - startDate:      Fecha de inicio.
  - endDate:        Fecha de finalización.
  - status:         Estado: "en curso" | "finalizado" | "pendiente".
  - description:    Descripción del estudio.
  - certificateUrl: URL del certificado. Dejar vacío ("") si no tiene.
*/
export const principalStudies: Study[] = [
  {
    id: 1,
    title: "Licenciatura en Sistemas de Información",
    institution: "Universidad Nacional de Santiago del Estero",
    startDate: new Date("2014-03-01"),
    endDate: new Date("2020-12-31"),
    status: "pendiente",
    description:
      "Cursé la Licenciatura en Sistemas de Información, completando hasta la mitad de 3° año. La carrera aborda el diseño, dirección e implementación de sistemas de información en organizaciones, incluyendo metodologías de relevamiento, desarrollo de software, administración de bases de datos y gestión de proyectos informáticos.",
    certificateUrl: "",
  },
  {
    id: 2,
    title: "Tecnicatura Superior en Programación",
    institution: "Instituto Tecnológico de Santiago del Estero",
    startDate: new Date("2022-03-01"),
    endDate: new Date("2023-12-31"),
    status: "finalizado",
    description:
      "Formación orientada a responder a la demanda del sector, brindando conocimientos en desarrollo de software, gestión de proyectos y diagnóstico de necesidades de los usuarios. La carrera prepara para desempeñarse en empresas de desarrollo, consultoría y asesoramiento, así como para trabajar de manera independiente, en el diseño y creación de sistemas informáticos que satisfacen requerimientos específicos.",
    certificateUrl: "https://refe.educacion.gob.ar/v/741072SMWtdDNiodCy0Tqk",
  },
];

/*
  📌 Estudios complementarios.
  Define cursos, certificaciones y formación adicional. Usa la misma estructura que los estudios principales.
  Se muestran en una sub-sección separada debajo de los estudios principales.
*/
export const complementaryStudies: Study[] = [
  {
    id: 1,
    title: "Experto Universitario de Seguridad de la Información",
    institution:
      "Universidad Tecnológica Nacional - Facultad Regional Buenos Aires",
    startDate: new Date("2018-10-01"),
    endDate: new Date("2019-05-31"),
    status: "finalizado",
    description:
      "Formación orientada a la protección de activos informáticos y de información en organizaciones, abordando conceptos clave de seguridad informática, administración de redes y servidores, telecomunicaciones y gestión de riesgos. Se estudian metodologías y buenas prácticas para asegurar la continuidad del negocio, la prevención de amenazas y la administración de servidores Windows y Linux.",
    certificateUrl:
      "https://validator.centrodeelearning.com/validator/2897c0a0-60d0-4515-8383-c04ae469e300",
  },
  {
    id: 2,
    title:
      "Programación en Python Junior y Aplicaciones Reales a la Ciberseguridad",
    institution: "Argentina Programa",
    startDate: new Date("2023-05-01"),
    endDate: new Date("2023-08-31"),
    status: "finalizado",
    description:
      "Taller intensivo dividido en dos etapas: la primera aborda fundamentos de programación en Python, estructuras de datos, algoritmos y procesamiento numérico con librerías como NumPy; la segunda se centra en aplicaciones de inteligencia artificial y machine learning en ciberseguridad, incluyendo desarrollo de herramientas para análisis de tráfico, detección de amenazas y malware, y uso de técnicas avanzadas como árboles de decisión y clustering.",
    certificateUrl:
      "https://drive.google.com/file/d/1ck9eOF7h4mp5yrJMNi-_FACRYrt97LdJ/view?usp=sharing",
  },
  {
    id: 3,
    title: "Flutter - Móvil: De cero a experto",
    institution: "Udemy - Fernando Herrera",
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-12-31"),
    status: "en curso",
    description:
      "Curso completo de Flutter, desde los fundamentos hasta la creación de aplicaciones móviles avanzadas. Incluye temas como diseño de interfaces, gestión de estado, integración con APIs y bases de datos, y publicación en tiendas de aplicaciones. El curso está diseñado para llevar a los estudiantes desde un nivel básico hasta un nivel experto en el desarrollo de aplicaciones móviles con Flutter.",
    certificateUrl: "",
  },
];
