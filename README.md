# Elanth · Landing page

Landing de Elanth Technology Solutions, hecha con Astro 5 y Tailwind CSS 4.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

- `npm install`: instala las dependencias.
- `npm run dev`: servidor local en http://localhost:4321.
- `npm run build`: genera el sitio estático en `dist/`.
- `npm run preview`: sirve la versión generada para revisarla.

## Antes de publicar

1. **Formulario de asesoría.** Copia `.env.example` a `.env` y define `PUBLIC_FORM_ENDPOINT` con la URL del servicio que recibirá las solicitudes. Por ejemplo, un formulario de [Formspree](https://formspree.io), que acepta `POST` con `FormData` y responde JSON. Sin este valor, el formulario muestra un error y no envía nada.
2. **Contacto directo.** Completa `whatsapp` y `email` en `src/config.ts`. Cuando tienen valor, aparecen enlaces a WhatsApp y al correo debajo del formulario y en los mensajes de error.
3. **Dominio.** Cambia `site` en `astro.config.mjs` si el dominio final no es `https://elanth.com`.
4. **Imagen para redes (opcional).** Añade una imagen de 1200 × 630 y su etiqueta `og:image` en `src/layouts/Base.astro`.

## Despliegue en GitHub Pages

Cada `push` a `master` publica el sitio con `.github/workflows/deploy.yml`. También se puede lanzar a mano desde la pestaña **Actions**.

1. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Para el formulario: **Settings → Secrets and variables → Actions → Variables** y crea `PUBLIC_FORM_ENDPOINT`.

El workflow toma el dominio y la ruta base de GitHub Pages: `https://gabrielj2814.github.io/elanth/`, o la raíz si configuras un dominio propio. Para las rutas a archivos de `public/` usa `asset()` de `src/config.ts`, no rutas que empiecen con `/`.

## Estructura

- `src/pages/index.astro`: arma la página.
- `src/components/`: cada sección.
  - `Hero`, `Printer` y `Ticket`: la comandera de pedidos.
  - `Services`, `Ledger`, `Vision` y `Contact`: el resto de las secciones.
- `src/data/demo.ts`: pedidos de demostración de la comandera. Son ficticios y la página los rotula como «Demostración».
- `src/styles/global.css`: colores de la marca, tipografías y estilos base.
- `public/brand/`: logo original, versión clara y símbolo. Salen de `Visuales/Logo/Svg/elanth_logo.svg`.

## SEO

- Cada página tiene título, descripción, URL canónica, etiquetas Open Graph y Twitter, y datos estructurados de schema.org (organización, sitio web, servicios y «Sobre nosotros»).
- `@astrojs/sitemap` genera `sitemap-index.xml`, y `src/pages/robots.txt.ts` publica `robots.txt` apuntando a ese sitemap.
- La imagen para compartir en redes es `public/brand/og-elanth.png` (1200 × 630). Los íconos son `favicon.svg`, `favicon-512.png` y `apple-touch-icon.png`.
- Para aparecer en Google: registra el sitio en [Google Search Console](https://search.google.com/search-console), verifícalo y envía la URL del sitemap (`…/sitemap-index.xml`).
- Google solo lee `robots.txt` en la raíz de un dominio. En `gabrielj2814.github.io/elanth/` no lo va a leer; con un dominio propio sí. Aunque no lo lea, el sitio se puede indexar, porque el sitemap se envía desde Search Console.

## Despliegue en un VPS con Coolify (Docker Compose)

El proyecto se compila dentro de Docker y se sirve con nginx:

- `Dockerfile`: compila el sitio con Node 22 y lo copia a una imagen ligera de nginx.
- `docker/nginx.conf`: configuración de nginx con compresión, caché, cabeceras de seguridad y página 404.
- `docker-compose.yml`: el servicio `web` que lee Coolify.

Pasos en Coolify:

1. **New Resource → Public/Private Repository**: elige este repositorio y la rama `master`.
2. **Build Pack**: `Docker Compose`, con el archivo `/docker-compose.yml`.
3. **Domains**: en el servicio `web`, escribe el dominio con https (p. ej. `https://elanth.com`). Coolify pide el certificado SSL solo.
4. **Environment Variables**:
   - `SITE_URL`: el mismo dominio, sin barra final (p. ej. `https://elanth.com`).
   - `BASE_PATH`: `/`.
   - `PUBLIC_FORM_ENDPOINT`: la URL del servicio del formulario.
5. **Deploy**.

Estas variables se usan al compilar. Si cambias alguna, vuelve a desplegar para que se aplique.

Para probarlo en tu equipo (con Docker Desktop abierto):

```bash
docker compose build
docker run --rm -p 8080:80 elanth-landing:latest
```

Después abre http://localhost:8080.
