# 05-blog-rss

Un blog moderno construido con **Astro v6**, **Tailwind CSS v4** y **Bun**. Este proyecto es parte del curso **"Astro.js: Guía Completa"** y demuestra features avanzadas como Content Collections, paginación, relaciones entre colecciones, **RSS feeds** y más.

## 🎓 Información del Curso

Este proyecto forma parte del curso:

- **Curso**: [Astro.js: Guía Completa](https://www.udemy.com/course/astro-guia-completa/)
- **Instructor**: [Nombre del Instructor]
- **Plataforma**: Udemy

El curso cubre desde los fundamentos de Astro hasta features avanzadas como Content Collections, SSR, View Transitions, RSS y las últimas novedades de Astro v6.

### ⚡ Usamos Bun, no npm

Este proyecto utiliza **[Bun](https://bun.sh)** como runtime y package manager en lugar de npm. Bun es un toolkit JavaScript todo-en-uno que proporciona:

- 🚀 **Velocidad**: Instalación de dependencias y builds más rápidos
- 📦 **Runtime integrado**: Reemplaza a Node.js y npm en un solo tool
- 🔥 **Hot reload** ultrarrápido en desarrollo

Si preferís usar npm, los comandos son equivalentes (`npm install`, `npm run dev`, etc.).

## 🚀 Stack Tecnológico

| Tecnología | Versión | Descripción |
|:-----------|:--------|:------------|
| [Astro](https://astro.build) | v6.1.4 | Framework web moderno con Islands Architecture |
| [Tailwind CSS](https://tailwindcss.com) | v4.2.2 | Framework CSS utility-first |
| [Bun](https://bun.sh) | Latest | Runtime y package manager |
| [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) | v5.0.3 | Soporte para MDX |
| [@astrojs/rss](https://docs.astro.build/en/guides/rss/) | v4.0.18 | Generación de feeds RSS |
| [Zod](https://zod.dev) | Latest | Validación de tipos para Content Collections |
| [markdown-it](https://github.com/markdown-it/markdown-it) | v14.1.1 | Renderizado de Markdown a HTML para RSS |
| [sanitize-html](https://github.com/apostrophecms/sanitize-html) | v2.17.3 | Sanitización de HTML en el feed RSS |

## 📁 Estructura del Proyecto

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── AuthorCard.astro
│   │   ├── BlogPost.astro
│   │   └── TypeBlogPost.astro
│   ├── config/
│   │   └── siteInfo.ts
│   ├── content.config.ts
│   ├── context/
│   │   ├── author/
│   │   │   ├── jane-doe.yml
│   │   │   ├── john-smith.yml
│   │   │   ├── bob-williams.yml
│   │   │   ├── alice-johnson.yml
│   │   │   └── avatars/
│   │   └── blog/
│   │       ├── post-01.mdx
│   │       ├── post-02.md
│   │       ├── post-03.md
│   │       ├── post-04.md
│   │       ├── post-05.md
│   │       ├── post-06.md
│   │       └── images/
│   ├── layouts/
│   │   ├── BlogLayout.astro
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog-file-system.astro
│   │   ├── rss.xml.ts
│   │   ├── authors/
│   │   │   └── index.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   ├── [page].astro
│   │   │   └── [author].astro
│   │   └── posts/
│   │       └── [slug].astro
│   ├── styles/
│   │   ├── global.css
│   │   └── blog.css
│   └── utils/
│       ├── formatter.ts
│       └── slugify.ts
├── astro.config.mjs
├── bun.lock
└── package.json
```

## ✨ Features Implementadas

- ✅ **Content Collections** - Posts y autores con validación de tipos usando Zod
- ✅ **Content Layer API** - Nueva API de Astro v5/v6 con loaders
- ✅ **RSS Feed** - Feed RSS generado en `/rss.xml` con contenido HTML completo
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

1. Creá un archivo `.md` o `.mdx` en `src/context/blog/`
2. Agregá el frontmatter con la siguiente estructura:

```yaml
---
title: Título del Post
date: 2025-04-09
description: Descripción corta del post
author: jane-doe        # Debe coincidir con un ID de author en context/author/
image: 'images/post-XX.png'
tags: [Astro, JavaScript, Web]
isDraft: false
---
```

3. Colocá la imagen del post en `src/context/blog/images/`
4. El post aparecerá automáticamente en la lista, la paginación y el feed RSS

## 👤 Cómo Agregar Nuevos Autores

1. Creá un archivo `.yml` en `src/context/author/`
2. Agregá la información del autor:

```yaml
name: Jane Doe
avatar: avatars/jane-doe.webp
twitter: janedoe
linkedIn: https://linkedin.com/in/janedoe
github: https://github.com/janedoe
bio: 'Desarrolladora web apasionada por Astro y el frontend moderno.'
subtitle: 'Frontend Engineer'
```

3. Colocá el avatar en `src/context/author/avatars/`
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
| `/rss.xml` | Feed RSS con todo el contenido del blog |

## 📚 Recursos del Curso

- [Curso en Udemy](https://www.udemy.com/course/astro-guia-completa/)
- [Documentación de Astro](https://docs.astro.build)
- [Documentación de Tailwind v4](https://tailwindcss.com/docs/v4-beta)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
- [RSS en Astro](https://docs.astro.build/en/guides/rss/)
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
8. **Generación de RSS** con contenido HTML sanitizado

---

> 💡 **Nota**: Este proyecto usa la nueva API de Content Collections de Astro v5/v6 con `loader` y validación de tipos Zod. Asegurate de tener **Node 22.12.0+** instalado.

---

**Desarrollado con ❤️ como parte del curso [Astro.js: Guía Completa](https://www.udemy.com/course/astro-guia-completa/)**
