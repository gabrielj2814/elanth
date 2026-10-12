// Datos de contacto directo de Elanth.
// PENDIENTE: completar el correo con el dato real antes de publicar.
// Mientras un dato esté vacío, la página no muestra ese enlace de contacto directo.
export const contact = {
  /** Número de WhatsApp en formato internacional sin signos */
  whatsapp: '584143501618',
  /** Mensaje que se escribe automáticamente al abrir WhatsApp */
  whatsappMessage:
    'Hola, estoy interesado en los servicios de Elanth. Me gustaría recibir información para crear o mejorar mi tienda online.',
  /** Correo de contacto, p. ej. "hola@elanth.com" */
  email: '',
};

export const whatsappUrl = contact.whatsapp
  ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`
  : '';

/** Antepone la ruta base del sitio (p. ej. "/elanth" en GitHub Pages) a un archivo de `public/`. */
export const asset = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
