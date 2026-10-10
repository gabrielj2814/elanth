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

## Estructura

- `src/pages/index.astro`: arma la página.
- `src/components/`: cada sección.
  - `Hero`, `Printer` y `Ticket`: la comandera de pedidos.
  - `Services`, `Ledger`, `Vision` y `Contact`: el resto de las secciones.
- `src/data/demo.ts`: pedidos de demostración de la comandera. Son ficticios y la página los rotula como «Demostración».
- `src/styles/global.css`: colores de la marca, tipografías y estilos base.
- `public/brand/`: logo original, versión clara y símbolo. Salen de `Visuales/Logo/Svg/elanth_logo.svg`.
