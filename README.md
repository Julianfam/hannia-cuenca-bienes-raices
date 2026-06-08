# Hannia Nicole Cuenca — Portal de Bienes Raíces

Portal inmobiliario personalizado para **Hannia Nicole Cuenca** en **Bogotá**. Propuesta inicial con catálogo de propiedades de demostración, búsqueda y perfil profesional.

**Repositorio:** [github.com/Julianfam/hannia-cuenca-bienes-raices](https://github.com/Julianfam/hannia-cuenca-bienes-raices)

## Características

- Página de inicio con hero personalizado y foto profesional
- Catálogo de propiedades con filtros (operación, tipo, ciudad)
- Páginas de detalle por propiedad
- Secciones: Servicios, Sobre mí, Testimonios, Contacto
- Indicador de propuesta inicial (sin contacto directo aún)
- Diseño responsive y optimizado para SEO
- Listo para despliegue en Vercel

## Tecnologías

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Despliegue en Vercel

### Opción 1 — Desde la web (recomendado)

1. Entra a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub
2. Clic en **Add New → Project**
3. Importa el repositorio `Julianfam/hannia-cuenca-bienes-raices`
4. Vercel detecta Next.js automáticamente. No cambies nada:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** (vacío, automático)
   - **Install Command:** `npm install`
5. Clic en **Deploy**
6. En unos minutos tendrás una URL como `https://hannia-cuenca-bienes-raices.vercel.app`

### Opción 2 — Con Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

### Variables de entorno (opcional)

| Variable | Descripción |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | URL final del sitio (ej. `https://tu-dominio.vercel.app`). Mejora SEO y Open Graph. |

Si no la defines, Vercel usa su URL automáticamente.

### Después del primer deploy

- Cada `git push` a `main` redespliega automáticamente
- Puedes conectar un dominio propio en **Project Settings → Domains**

## Personalización

Edita estos archivos con la información real:

| Archivo | Contenido |
|---------|-----------|
| `src/data/agent.ts` | Datos de Hannia (bio, ciudad, contacto cuando esté listo) |
| `src/data/properties.ts` | Propiedades reales con fotos y precios |
| `src/data/testimonials.ts` | Testimonios de clientes |
| `public/images/hannia-cuenca.jpg` | Foto principal |

## Scripts

```bash
npm run dev      # Desarrollo local
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter
```