// Datos de contacto directo de Elanth.
// PENDIENTE: completar con los datos reales antes de publicar.
// Mientras estén vacíos, la página no muestra los enlaces de contacto directo.
export const contact = {
  /** Número de WhatsApp en formato internacional sin signos, p. ej. "584120000000" */
  whatsapp: '',
  /** Correo de contacto, p. ej. "hola@elanth.com" */
  email: '',
};

/** Antepone la ruta base del sitio (p. ej. "/elanth" en GitHub Pages) a un archivo de `public/`. */
export const asset = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
