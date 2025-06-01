# 🌿 ODS15 WebApp – Conexión Natural

Aplicación web desarrollada para concientizar y promover la protección de animales terrestres en peligro de extinción en Chile. Forma parte de un proyecto integrador con enfoque modular y escalable, preparado para su futura migración a React.

---

## 📌 Índice

- [🌿 ODS15 WebApp – Conexión Natural](#-ods15-webapp--conexión-natural)
  - [📌 Índice](#-índice)
  - [✨ Características](#-características)
  - [🛠 Tecnologías utilizadas](#-tecnologías-utilizadas)
  - [📁 Estructura del proyecto](#-estructura-del-proyecto)
  - [🚀 Cómo ejecutar el proyecto](#-cómo-ejecutar-el-proyecto)
  - [📦 Convención de commits](#-convención-de-commits)
  - [👨‍💻 Autores](#-autores)

---

## ✨ Características

- Diseño modular y responsive utilizando HTML, CSS (con Bootstrap 5.3) y JavaScript.
- Código preparado para futura migración a React con Vite.
- Componentes desacoplados en HTML (`navbar`, `featured-campaigns`, etc.).
- CSS organizado por propósito (base, components, utilities, etc.).
- Sección destacada de campañas con imágenes, overlay y metadatos.
- Estilo visual profesional basado en Figma.

---

## 🛠 Tecnologías utilizadas

- HTML5 semántico
- CSS3 + Bootstrap 5.3
- JavaScript modular (ES Modules)
- FontAwesome 6
- Google Fonts (Inter)
- Organización profesional de carpetas y componentes

---

## 📁 Estructura del proyecto

```bash
ODS15-webapp/
│
├── /assets/
│   ├── /components/
│   │   ├── featured-campaigns.html
│   │   └── navbar.html
│   │
│   ├── /css/
│   │   ├── /components/
│   │   │   ├── buttons.css
│   │   │   ├── campaign-card.css
│   │   │   ├── featured-campaigns.css
│   │   │   ├── navbar.css
│   │   │   ├── pagination.css
│   │   │   ├── search.css
│   │   │   ├── sidebar-card.css
│   │   │   ├── tags.css
│   │   │   └── top-banner.css
│   │   │
│   │   ├── base.css
│   │   ├── styles.css
│   │   └── utilities.css
│   │
│   ├── /icons/
│   │   ├── favicon.svg
│   │   └──logo-connat.svg
│   │
│   ├── /img/
│   │   ├── author-photo.png
│   │   ├── campaign-cover-other.png
│   │   ├── campaign-cover.png
│   │   └── top-banner.png
│   │
│   └──/js/
│       ├── /components/
│       │   ├── navbar.js
│       │   └── search.js
│       │
│       └── main.js
│   
├── /pages/
│   └── campaigns.html
│
├── .gitignore
├── index.html
├── LICENSE
└── README
```

---

## 🚀 Cómo ejecutar el proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/ods15-webapp.git
   cd ods15-webapp
   ```

2. Abre `index.html` directamente en tu navegador o utiliza una extensión como Live Server (VS Code) para desarrollo local.
   
> [!NOTE]
> Este proyecto no requiere entorno de backend aún. Está pensado para escalar a React + Vite en la siguiente fase.

---

## 📦 Convención de commits

Este proyecto sigue la convención [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

- `feat`: para nuevas funcionalidades

- `fix`: para correcciones de bugs

- `style`: para cambios de formato (espaciado, indentación, etc.)

- `refactor`: para reestructuraciones sin cambiar funcionalidad

- `chore`: para tareas internas y mantenimiento

---

## 👨‍💻 Autores

Proyecto desarrollado por Carlos Ramírez ([PlayerCodeDev](https://github.com/PlayerCodeDev)) y diseñado por Catalina Pérez ([catuccini01](https://github.com/catuccini01)).