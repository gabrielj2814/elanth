// Datos de contacto directo de Elanth.
// Mientras un dato esté vacío, la página no muestra ese enlace de contacto directo.
export const contact = {
  /** Número de WhatsApp en formato internacional sin signos */
  whatsapp: '584143501618',
  /** Mensaje que se escribe automáticamente al abrir WhatsApp */
  whatsappMessage:
    'Hola, estoy interesado en los servicios de Elanth. Me gustaría recibir información para crear o mejorar mi tienda online.',
  /** Correo de contacto */
  email: 'elanth.solution@gmail.com',
};

/** Enlace a WhatsApp con un mensaje ya escrito (por defecto, el general de Elanth) */
export const whatsappLink = (message: string = contact.whatsappMessage) =>
  contact.whatsapp ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}` : '';

export const whatsappUrl = whatsappLink();

/** Mensaje para quien llega desde la página de Elanth Code */
export const codeWhatsappMessage =
  'Hola, me interesa Elanth Code. Tengo un proyecto de software y me gustaría recibir una propuesta.';

/** Mensaje para quien llega desde la página de Elanth Media */
export const mediaWhatsappMessage =
  'Hola, me interesan los paquetes de Elanth Media. Me gustaría recibir una propuesta para mi negocio.';

// Datos legales de los términos y condiciones.
// PENDIENTE: completar con los datos reales. Si un campo está vacío, la página no lo muestra.
export const legal = {
  /** Razón social tal como aparece en el registro */
  name: 'Elanth Technology Solutions',
  /** Número de registro fiscal o mercantil (p. ej. RIF). Elanth aún no está constituida:
   *  completar cuando la empresa se registre. Mientras esté vacío, no se muestra. */
  registry: '',
  /** Correo para avisos legales y solicitudes sobre datos personales */
  email: 'elanth.solution@gmail.com',
  /** Fecha de la última actualización de los términos */
  updated: '25 de octubre de 2026',
};

/** Antepone la ruta base del sitio (p. ej. "/elanth" en GitHub Pages) a un archivo de `public/`. */
export const asset = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
