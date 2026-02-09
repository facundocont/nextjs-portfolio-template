# 🚀 Developer Portfolio Template

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/DaisyUI-5-5A0EF8?logo=daisyui&logoColor=white" alt="DaisyUI 5" />
</p>

<p align="center">
  Plantilla de portfolio profesional para desarrolladores de software, completamente configurable y lista para producción.<br/>
  Construida con tecnologías <strong>100% open source</strong> y servicios con <strong>capa gratuita</strong>: no necesitás pagar nada para tener tu portfolio online.
</p>

---

## 📋 Tabla de Contenidos

- [✨ Características](#-características)
- [🖥️ Demo](#️-demo)
- [🏗️ Arquitectura del Proyecto](#️-arquitectura-del-proyecto)
- [⚡ Inicio Rápido](#-inicio-rápido)
- [🔧 Configuración y Personalización](#-configuración-y-personalización)
- [🔑 Servicios Externos (API Keys)](#-servicios-externos-api-keys)
- [📦 Stack Tecnológico](#-stack-tecnológico)
- [🌐 Despliegue](#-despliegue)
- [📄 Licencia](#-licencia)

---

## ✨ Características

- **⚙️ Configuración centralizada:** Toda la información del portfolio se gestiona desde archivos de configuración con interfaces TypeScript, sin necesidad de tocar componentes.
- **🎨 Temas claro/oscuro:** Cambio de tema con persistencia en `localStorage`, usando temas de DaisyUI.
- **📱 Diseño responsivo:** Adaptado para dispositivos móviles, tablets y escritorio.
- **📧 Formulario de contacto:** Integración con [Resend](https://resend.com/) para envío de emails, protegido con [Google reCAPTCHA v3](https://www.google.com/recaptcha/about/).
- **🔍 SEO optimizado:** Metadatos dinámicos, Open Graph, Twitter Cards, JSON-LD Schema, `robots.txt` y `sitemap.xml` generados automáticamente.
- **🚀 Performance:** Lazy loading de secciones con `next/dynamic`, optimización de fuentes con `next/font`, CSS inline experimental.
- **♿ Accesibilidad:** Roles ARIA, navegación por teclado, etiquetas semánticas y estructura accesible.
- **📊 Estadísticas dinámicas:** Años de experiencia y cantidad de proyectos calculados automáticamente.
- **⭐️ PageSpeed Insights:** Scores de **97/100/100/100** en móviles y **99/100/100/100** en escritorio (Performance, Accessibility, Best Practices, SEO).
- **💸 100% gratuito:** Todas las tecnologías son open source y los servicios externos ([Vercel](https://vercel.com/), [Resend](https://resend.com/), [Cloudinary](https://cloudinary.com/), [reCAPTCHA](https://www.google.com/recaptcha/about/)) tienen capa gratuita.

---

## 🖥️ Demo

🔗 **Ejemplo en producción:** [facundocont.com](https://facundocont.com)

> Este portfolio fue construido con esta misma plantilla. Podés usarlo como referencia para ver el resultado final.

---

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas

```
src/
├── app/                          # App Router de Next.js
│   ├── layout.tsx                # Layout principal (metadata, fuentes, JSON-LD)
│   ├── page.tsx                  # Página principal del portfolio
│   ├── not-found.tsx             # Página 404 personalizada
│   ├── robots.ts                 # Generador de robots.txt
│   ├── sitemap.ts                # Generador de sitemap.xml
│   ├── actions.ts                # Server Actions (contacto + captcha)
│   ├── globals.css               # Estilos globales, temas DaisyUI y animaciones
│   ├── contact/
│   │   └── page.tsx              # Página dedicada de contacto (con formulario)
│   └── api/
│       └── sendFormContact/
│           └── route.ts          # API Route para enviar emails con Resend
│
├── components/                   # Componentes de sección
│   ├── hero.tsx                  # Sección principal (nombre, rol, stats, imagen)
│   ├── about.tsx                 # Sección "Sobre mí"
│   ├── projects.tsx              # Sección de proyectos
│   ├── experience.tsx            # Sección de experiencia laboral
│   ├── techs.tsx                 # Sección de tecnologías (carrusel infinito)
│   ├── studies.tsx               # Sección de estudios (principal + complementarios)
│   ├── contact.tsx               # Sección de contacto
│   └── ui/                       # Componentes reutilizables de UI
│       ├── navbar.tsx            # Barra de navegación con scroll a secciones
│       ├── navbarContact.tsx     # Navbar simplificado para la página de contacto
│       ├── footer.tsx            # Pie de página con enlaces de navegación
│       ├── themeController.tsx   # Toggle de tema claro/oscuro
│       ├── contactForm.tsx       # Formulario con validación + captcha
│       ├── cardProject.tsx       # Tarjeta de proyecto con modal de detalle
│       ├── cardExperience.tsx    # Tarjeta de experiencia laboral
│       ├── cardStudy.tsx         # Tarjeta de estudio
│       ├── timelineStudies.tsx   # Timeline visual para estudios
│       ├── infinityBrand.tsx     # Carrusel infinito de tecnologías
│       ├── brands.tsx            # Iconos SVG de tecnologías
│       ├── socialLinks.tsx       # Enlaces a redes sociales (LinkedIn, GitHub)
│       ├── sectionContainer.tsx  # Contenedor estándar de sección
│       ├── sectionHeader.tsx     # Encabezado de sección (título + descripción)
│       ├── highlightText.tsx     # Texto con resaltado (**bold**)
│       ├── ctaButtonHero.tsx     # Botón CTA del hero
│       ├── btnNavigation.tsx     # Botón de navegación con scroll suave
│       ├── btnScrollToTop.tsx    # Botón para volver arriba
│       └── containerTechTags.tsx # Contenedor de tags de tecnologías
│
├── config/                       # 📌 ARCHIVOS DE CONFIGURACIÓN (lo que vas a editar)
│   ├── myData.config.ts          # Datos personales y profesionales
│   ├── aboutMe.config.ts         # Biografía / Sobre mí
│   ├── projects.config.ts        # Listado de proyectos
│   ├── experience.config.ts      # Experiencias laborales
│   ├── studies.config.ts         # Estudios principales y complementarios
│   ├── sections.config.ts        # Secciones del navbar y navegación
│   ├── configWeb.config.ts       # Metadatos SEO y configuración del sitio
│   ├── schema.config.tsx         # JSON-LD Schema (Person / WebPage)
│   └── interfaces.ts             # Interface del formulario de contacto
│
├── fonts/
│   └── fonts.ts                  # Fuentes Google (Mulish + Syne)
│
└── utils/
    ├── captcha.ts                # Obtención y verificación de tokens reCAPTCHA
    ├── sendEmail.ts              # Lógica de envío de emails
    ├── dateToString.ts           # Formateo de fechas a texto
    └── scrollToSection.ts        # Scroll suave a secciones
```

### Páginas

| Ruta       | Descripción                                                     |
| ---------- | --------------------------------------------------------------- |
| `/`        | Página principal con todas las secciones del portfolio          |
| `/contact` | Página dedicada con formulario de contacto (reCAPTCHA + Resend) |

---

## ⚡ Inicio Rápido

### Prerrequisitos

- [Node.js](https://nodejs.org/) v18 o superior
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/) o [pnpm](https://pnpm.io/)

### Instalación

```bash
# 1. Cloná el repositorio
git clone https://github.com/tu-usuario/developer-portfolio.git

# 2. Navegá al directorio del proyecto
cd developer-portfolio

# 3. Instalá las dependencias
npm install

# 4. Creá el archivo de variables de entorno
cp .env.example .env.local

# 5. Ejecutá el servidor de desarrollo
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts Disponibles

| Comando         | Descripción                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Servidor de desarrollo         |
| `npm run build` | Build de producción            |
| `npm run start` | Iniciar servidor de producción |

---

## 🔧 Configuración y Personalización

Para personalizar el portfolio, solo necesitás editar los archivos dentro de `src/config/`. Cada archivo tiene **interfaces TypeScript** que documentan la estructura de datos y **comentarios descriptivos** que explican cada campo y dónde se utiliza.

### 1. Datos Personales — `src/config/myData.config.ts`

Archivo principal con tu identidad profesional. Se usa en el Hero, Navbar, Footer, metadatos SEO y JSON-LD.

```typescript
export const myData: MyData = {
  name: "Tu Nombre",
  professional: {
    mainRole: "Tu Rol Principal", // Ej: "Desarrollador Full Stack"
    jobTitle: "Your Job Title", // En inglés, usado en JSON-LD Schema
    specializations: ["Web", "Mobile"], // Aparecen en keywords SEO
    credentials: [{ title: "Tu Título" }], // Credenciales académicas
    primaryTech: ["Next.js", "TypeScript"], // Tecnologías principales
    description: "Descripción profesional...",
  },
  description: "Texto del Hero...",
  email: "tu@email.com",
  linkedin: "https://linkedin.com/in/tu-perfil",
  github: "https://github.com/tu-usuario",
  workStartDate: new Date("2020-01-01"), // Para calcular años de experiencia
  socialProfiles: {
    portfolio: "https://tudominio.com",
  },
};
```

### 2. Sobre Mí — `src/config/aboutMe.config.ts`

Array de párrafos con soporte para texto resaltado usando `**`.

```typescript
export const aboutMe: AboutMe = {
  bio: [
    "Soy **Tu Nombre**, Desarrollador de Software.",
    "Texto que describe tu trayectoria y **habilidades clave**.",
  ],
};
```

### 3. Proyectos — `src/config/projects.config.ts`

Listado de proyectos con estados, tipos y función de ordenamiento (destacados primero).

```typescript
const project: Project = {
  id: 1,
  title: "Mi Proyecto",
  description: "Descripción del proyecto...",
  imageUrl: "https://...", // URL de la imagen (soporta Cloudinary)
  tags: ["Next.js", "TypeScript"], // Tecnologías usadas
  websiteUrl: "https://...", // URL del sitio (vacío si no tiene)
  recommended: true, // true = aparece primero
  startDate: new Date("2024-01-01"),
  endDate: new Date("2024-06-01"),
  repoUrl: "https://github.com/...", // URL del repo (vacío si es privado)
  status: "production", // "production" | "development" | "archived"
  type: "professional", // "professional" | "personal" | "collaborative"
  company: "Empresa", // Opcional
  metrics: "Descripción de impacto", // Opcional
};
```

### 4. Experiencia Laboral — `src/config/experience.config.ts`

```typescript
const job: JobExperience = {
  id: 1,
  title: "Puesto de Trabajo",
  company: "Empresa",
  startDate: new Date("2024-01-01"),
  endDate: new Date("2025-01-01"),
  description: "Descripción del rol...",
  technologies: ["Next.js", "Flutter"],
  tasks: ["Tarea 1", "Tarea 2"], // Lista de responsabilidades
  companyUrl: "https://...",
  currentJob: true, // Badge "Trabajo actual"
};
```

### 5. Estudios — `src/config/studies.config.ts`

Dos arrays separados: `principalStudies` (formales) y `complementaryStudies` (cursos, certificaciones).

```typescript
const study: Study = {
  id: 1,
  title: "Nombre del Estudio",
  institution: "Institución",
  startDate: new Date("2022-01-01"),
  endDate: new Date("2023-12-01"),
  status: "finalizado", // "en curso" | "finalizado" | "pendiente"
  description: "Descripción...",
  certificateUrl: "https://...", // Vacío si no tiene
};
```

### 6. Secciones del Navbar — `src/config/sections.config.ts`

Definí qué secciones aparecen en la navegación. El `link` debe coincidir con el `id` del `SectionContainer` correspondiente.

```typescript
export const sections: Section[] = [
  { name: "Sobre mí", link: "#sobre-mi" },
  { name: "Proyectos", link: "#proyectos" },
  { name: "Experiencia", link: "#experiencia" },
  { name: "Tecnologías", link: "#tecnologias" },
  { name: "Estudios", link: "#estudios" },
  { name: "Contacto", link: "#contacto" },
];
```

### 7. SEO y Metadatos — `src/config/configWeb.config.ts`

Los metadatos se generan dinámicamente a partir de `myData`. Solo necesitás configurar la URL de producción y los parámetros de idioma.

```typescript
export const configWeb: ConfigWeb = {
  // titleWeb y descriptionWeb se generan automáticamente desde myData
  urlWeb: "https://tudominio.com",
  locale: "es-AR",
  lang: "es",
  // ...
};
```

### 8. Tecnologías (Carrusel) — `src/components/ui/infinityBrand.tsx`

Para modificar las tecnologías del carrusel infinito, editá directamente el array `elements` dentro del componente. Los iconos SVG están en `src/components/ui/brands.tsx`.

### 9. Tema y Estilos — `src/app/globals.css`

El proyecto incluye dos temas DaisyUI:

- **`dim`** — Tema oscuro (por defecto)
- **`fantastic`** — Tema claro (personalizado)

Podés personalizar los colores del tema claro editando las variables CSS en `globals.css`, o cambiar los temas en la directiva `@plugin "daisyui"`.

### 10. Imágenes — `public/`

| Archivo          | Uso                                                           |
| ---------------- | ------------------------------------------------------------- |
| `hero-image.svg` | Imagen principal del Hero                                     |
| `favicon.ico`    | Favicon del sitio                                             |
| `icon.svg`       | Ícono SVG alternativo                                         |
| `toshare.webp`   | Imagen para Open Graph / Twitter Cards (1200x630 recomendado) |

---

## 🔑 Servicios Externos (API Keys)

El formulario de contacto requiere dos servicios externos. **Ambos ofrecen capa gratuita** suficiente para un portfolio personal. Si no configurás las variables de entorno, el portfolio funciona normalmente pero sin el formulario de envío de emails.

### Variables de Entorno

Creá un archivo `.env.local` en la raíz del proyecto (o copiá `.env.example`):

```bash
# Resend — Envío de emails
RESEND_API_KEY="re_XXXXXXXX"

# Google reCAPTCHA v3 — Protección anti-spam
CAPTCHA_SECRET_KEY="XXXXXXXX"
NEXT_PUBLIC_CAPTCHA_SITE_KEY="XXXXXXXX"
```

### Resend (Envío de Emails)

Se utiliza para enviar los mensajes del formulario de contacto al email del desarrollador.

1. Creá una cuenta en [resend.com](https://resend.com/).
2. Generá una API Key desde el dashboard.
3. Copiá la key en `RESEND_API_KEY`.
4. _(Opcional)_ Configurá un dominio propio en Resend para personalizar el remitente. Por defecto se usa `onboarding@resend.dev`.

> 📩 Los emails se envían a la dirección configurada en `myData.email` (`src/config/myData.config.ts`).

### Google reCAPTCHA v3 (Anti-spam)

Protege el formulario de contacto contra bots y spam. Se valida tanto en el cliente como en el servidor.

1. Accedé a [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin).
2. Registrá un nuevo sitio seleccionando **reCAPTCHA v3**.
3. Agregá tu dominio (y `localhost` para desarrollo).
4. Copiá la **Site Key** en `NEXT_PUBLIC_CAPTCHA_SITE_KEY`.
5. Copiá la **Secret Key** en `CAPTCHA_SECRET_KEY`.

> ⚠️ El score mínimo para aceptar un envío es `0.5` (configurable en `src/app/actions.ts`).

### Imágenes de Proyectos

Las capturas de pantalla de los proyectos se configuran en el campo `imageUrl` de cada proyecto en `src/config/projects.config.ts`. Podés usar cualquier URL de imagen pública o alojarlas directamente en la carpeta `public/`.

> 📐 **Tamaño recomendado:** Las tarjetas de proyecto usan una relación de aspecto **4:3**. El tamaño óptimo es **768×576 px** (se redimensiona a 384×288 en la tarjeta). Formatos recomendados: `.webp` o `.png`.

> 💡 **Sugerencia:** Si querés optimizar el rendimiento y no cargar imágenes pesadas en el repositorio, podés usar un servicio de hosting de imágenes como [Cloudinary](https://cloudinary.com/) (capa gratuita con 25 GB). El componente `cardProject` detecta automáticamente URLs de Cloudinary y les aplica transformaciones de optimización (redimensionado, formato automático y compresión).

---

## 📦 Stack Tecnológico

### Dependencias Principales

| Paquete                                                                  | Versión | Descripción                               |
| ------------------------------------------------------------------------ | ------- | ----------------------------------------- |
| [Next.js](https://nextjs.org/)                                           | 16      | Framework React con App Router, SSR y SSG |
| [React](https://react.dev/)                                              | 19      | Biblioteca de UI                          |
| [Tailwind CSS](https://tailwindcss.com/)                                 | 4       | Framework de utilidades CSS               |
| [DaisyUI](https://daisyui.com/)                                          | 5       | Componentes y temas para Tailwind CSS     |
| [Resend](https://resend.com/)                                            | 6       | API de envío de emails                    |
| [nextjs-toast-notify](https://www.npmjs.com/package/nextjs-toast-notify) | 1.x     | Notificaciones toast para formularios     |

### Dependencias de Desarrollo

| Paquete                     | Descripción                         |
| --------------------------- | ----------------------------------- |
| TypeScript 5                | Tipado estático                     |
| ESLint + eslint-config-next | Linting y buenas prácticas          |
| @types/grecaptcha           | Tipos para Google reCAPTCHA         |
| @tailwindcss/postcss        | Integración PostCSS con Tailwind v4 |

### Fuentes

- **[Mulish](https://fonts.google.com/specimen/Mulish)** — Fuente principal del cuerpo de texto.
- **[Syne](https://fonts.google.com/specimen/Syne)** — Fuente para títulos y headings.

---

## 🌐 Despliegue

### Vercel (Recomendado)

1. Subí el proyecto a un repositorio en GitHub.
2. Importá el proyecto en [Vercel](https://vercel.com/).
3. Configurá las variables de entorno en el panel de Vercel:
   - `RESEND_API_KEY`
   - `CAPTCHA_SECRET_KEY`
   - `NEXT_PUBLIC_CAPTCHA_SITE_KEY`
4. Vercel detectará automáticamente que es un proyecto Next.js y lo desplegará.

### Otros Proveedores

El proyecto es compatible con cualquier plataforma que soporte Next.js (Netlify, Railway, AWS Amplify, etc.). Asegurate de configurar las variables de entorno correspondientes.

---

## 📄 Licencia

Este proyecto es de código abierto. Podés usarlo, modificarlo y distribuirlo libremente para crear tu propio portfolio profesional.

---

### 💬 ¿Te resultó útil?

Si este template te sirvió para armar tu portfolio o te pareció interesante, me encantaría saberlo. Podés dejarme un mensaje a través de mi [portfolio](https://facundocont.com) o [LinkedIn](https://www.linkedin.com/in/facundo-ignacio-contreras/). ¡Un ⭐ en el repo también se agradece!

### 🤝 Contribuciones

Si encontrás algún bug, tenés una sugerencia o querés mejorar algo, las contribuciones son bienvenidas. Podés abrir un [issue](../../issues) o enviar un [pull request](../../pulls).

---

<p align="center">
  Desarrollado con ❤️ y ☕️ por <a href="https://github.com/facundocont">Facundo Contreras</a>
</p>
