# 03-blog

Un blog moderno construido con **Astro v6**, **Tailwind CSS v4** y **bun**. Este proyecto es parte del curso **"Astro.js: Guía Completa"** y demuestra features avanzadas como Content Collections, paginación, relaciones entre colecciones y más.

## 🎓 Información del Curso

Este proyecto forma parte del curso:

- **Curso**: [Astro.js: Guía Completa](https://www.udemy.com/course/astro-guia-completa/)
- **Instructor**: [Nombre del Instructor]
- **Plataforma**: Udemy

El curso cubre desde los fundamentos de Astro hasta features avanzadas como Content Collections, SSR, View Transitions, y las últimas novedades de Astro v6.

### ⚡ Usamos Bun, no npm

Este proyecto utiliza **[Bun](https://bun.sh)** como runtime y package manager en lugar de npm. Bun es un toolkit JavaScript todo-en-uno que proporciona:

- 🚀 **Velocidad**: Instalación de dependencias y builds más rápidos
- 📦 **Runtime integrado**: Reemplaza a Node.js y npm en un solo tool
- 🔥 **Hot reload** ultrarrápido en desarrollo

Si prefieres usar npm, los comandos son equivalentes (`npm install`, `npm run dev`, etc.).

## 🚀 Stack Tecnológico

| Tecnología | Versión | Descripción |
|:-----------|:--------|:------------|
| [Astro](https://astro.build) | v6.1.4 | Framework web moderno con Islands Architecture |
| [Tailwind CSS](https://tailwindcss.com) | v4.2.2 | Framework CSS utility-first |
| [Bun](https://bun.sh) | Latest | Runtime y package manager |
| [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) | v5.0.3 | Soporte para MDX |
| [Zod](https://zod.dev) | Latest | Validación de tipos para Content Collections |

## 📁 Estructura del Proyecto

```text
/
├── public/                     # Assets estáticos
├── src/
│   ├── components/            # Componentes reutilizables
│   │   ├── AuthorCard.astro   # Tarjeta de autor
│   │   ├── BlogPost.astro     # Componente de post individual
│   │   └── TypeBlogPost.astro # Vista previa de post
│   ├── config/                # Configuración del sitio
│   │   └── siteInfo.ts        # Información del sitio
│   ├── content.config.ts      # Definición de Content Collections
│   ├── context/               # Colecciones de contenido
│   │   ├── author/            # Colección de autores (YAML)
│   │   │   ├── jane-doe.yml
│   │   │   ├── john-smith.yml
│   │   │   ├── bob-williams.yml
│   │   │   ├── alice-johnson.yml
│   │   │   └── avatars/       # Avatares de autores
│   │   └── blog/              # Colección de posts (MD/MDX)
│   │       ├── post-01.mdx
│   │       ├── post-02.md
│   │       ├── post-03.md
│   │       ├── post-04.md
│   │       ├── post-05.md
│   │       ├── post-06.md
│   │       └── images/        # Imágenes de los posts
│   ├── layouts/               # Layouts de la aplicación
│   │   ├── BlogLayout.astro   # Layout para posts individuales
│   │   └── MainLayout.astro   # Layout principal
│   ├── pages/                 # Rutas de la aplicación
│   │   ├── index.astro        # Home con lista de posts
│   │   ├── blog-file-system.astro # Ejemplo de filesystem routing
│   │   ├── authors/
│   │   │   └── index.astro    # Página de autores
│   │   ├── blog/
│   │   │   ├── index.astro    # Redirección a /blog/1
│   │   │   ├── [page].astro   # Paginación de posts
│   │   │   └── [author].astro # Posts filtrados por autor
│   │   └── posts/
│   │       └── [slug].astro   # Página individual de post
│   │   └── posts-old/         # Posts antiguos (ejemplo legacy)
│   ├── styles/                # Estilos
│   │   ├── global.css         # Estilos globales + Tailwind
│   │   └── blog.css           # Estilos específicos del blog
│   └── utils/                 # Utilidades
│       ├── formatter.ts       # Formateo de fechas/números
│       └── slugify.ts         # Generación de slugs
├── astro.config.mjs           # Configuración de Astro
├── bun.lock                   # Lockfile de dependencias
└── package.json
```

## ✨ Features Implementadas

- ✅ **Content Collections** - Posts y autores con validación de tipos usando Zod
- ✅ **Content Layer API** - Nueva API de Astro v5/v6 con loaders
- ✅ **Paginación** - Blog paginado con navegación Anterior/Siguiente
- ✅ **Relaciones entre Colecciones** - Posts vinculados a autores mediante `reference()`
- ✅ **MDX Support** - Posts con componentes interactivos
- ✅ **View Transitions** - Transiciones suaves entre páginas (ClientRouter)
- ✅ **Optimización de Imágenes** - Usando `astro:assets`
- ✅ **Tailwind v4** - Última versión con el plugin de Vite
- ✅ **Rutas Dinámicas** - `[slug].astro`, `[page].astro`, `[author].astro`
- ✅ **YAML Data** - Autores definidos en archivos YAML

## 🛠️ Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Command                   | Action                                           |
|:--------------------------|:-------------------------------------------------|
| `bun install`             | Instala las dependencias                         |
| `bun dev`                 | Inicia el servidor de desarrollo en `localhost:4321` |
| `bun build`               | Construye el sitio para producción en `./dist/`  |
| `bun preview`             | Previsualiza la build localmente                 |
| `bun astro ...`           | Comandos CLI como `astro add`, `astro check`     |
| `bun astro -- --help`     | Muestra ayuda del CLI de Astro                   |

## 📝 Cómo Agregar Nuevos Posts

1. Crea un archivo `.md` o `.mdx` en `src/context/blog/`
2. Agrega el frontmatter con la siguiente estructura:

```yaml
---
title: Título del Post
date: 2025-04-09
description: Descripción corta del post
author: jane-doe        # Debe coincidir con un ID de author en context/author/
image: 'images/post-XX.png'
tags: [Astro, JavaScript, Web]
---
```

3. Coloca la imagen del post en `src/context/blog/images/`
4. El post aparecerá automáticamente en la lista y la paginación

## 👤 Cómo Agregar Nuevos Autores

1. Crea un archivo `.yml` en `src/context/author/`
2. Agrega la información del autor:

```yaml
name: Jane Doe
avatar: avatars/jane-doe.webp
```

3. Coloca el avatar en `src/context/author/avatars/`
4. El autor podrá ser referenciado en los posts usando su filename (ej: `jane-doe`)

## 🔗 Estructura de Rutas

| Ruta | Descripción |
|:-----|:------------|
| `/` | Home con lista de posts |
| `/blog` | Redirige a `/blog/1` |
| `/blog/1`, `/blog/2`, ... | Paginación de posts |
| `/blog/jane-doe` | Posts filtrados por autor |
| `/posts/post-01` | Página individual de cada post |
| `/authors` | Lista de autores |

## 🎨 Personalización

- **Configuración del sitio**: Edita `src/config/siteInfo.ts`
- **Estilos globales**: Modifica `src/styles/global.css`
- **Estilos del blog**: Modifica `src/styles/blog.css`
- **Layouts**: Personaliza en `src/layouts/`

## 📚 Recursos del Curso

- [Curso en Udemy](https://www.udemy.com/course/astro-guia-completa/)
- [Documentación de Astro](https://docs.astro.build)
- [Documentación de Tailwind v4](https://tailwindcss.com/docs/v4-beta)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
- [Comunidad de Astro en Discord](https://astro.build/chat)

## 🎯 Objetivos de Aprendizaje

Este proyecto demuestra:

1. **Content Collections** con la nueva API de Content Layer
2. **Relaciones entre colecciones** usando `reference()`
3. **Paginación** con `getStaticPaths` y `paginate`
4. **Rutas dinámicas** con parámetros opcionales
5. **Renderizado de Markdown/MDX**
6. **Optimización de imágenes**
7. **View Transitions**

---

> 💡 **Nota**: Este proyecto usa la nueva API de Content Collections de Astro v5/v6 con `loader` y validación de tipos Zod. Asegúrate de tener **Node 22.12.0+** instalado.

---

**Desarrollado con ❤️ como parte del curso [Astro.js: Guía Completa](https://www.udemy.com/course/astro-guia-completa/)**
