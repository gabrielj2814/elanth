// Niveles de E-Commerce 360°: se contratan de a uno, en orden, según lo que el negocio necesite.
// Los usan la sección de niveles de la portada y las páginas /servicios/<slug>/.
export const levels = [
  {
    id: 'desarrollo',
    level: 1,
    slug: 'tienda-online',
    title: 'Desarrollo y digitalización de tu negocio',
    body: 'Creamos tu plataforma de e-commerce a la medida, aunque hoy tu empresa no tenga vida digital. Llevamos tu modelo físico (catálogo, condiciones, forma de vender) al entorno web.',
    result: 'Tu negocio, tal como funciona, ahora vende en línea.',
    page: {
      seoTitle: 'Desarrollo de tienda online a la medida | Elanth',
      description:
        'Creamos la tienda online de tu negocio a la medida: tu catálogo, tu carrito de compras y tu forma de vender, llevados a la web. Pide tu asesoría gratuita.',
      heading: ['Tu tienda online,', 'a la medida de tu negocio.'],
      includes: [
        'Una tienda online propia con tu catálogo de productos y carrito de compras.',
        'Tus condiciones de venta llevadas a la web: cómo presentas tus productos y cómo trabajas con tus clientes.',
        'Un diseño que se ve bien en computadoras y en teléfonos.',
        'La base para sumar después automatización, más canales de venta y precios B2B.',
      ],
      forWho:
        'Para negocios que todavía no venden por internet o que hoy venden solo por mensajes y quieren una tienda propia.',
    },
  },
  {
    id: 'ia',
    level: 2,
    slug: 'automatizacion-con-ia',
    title: 'Automatización inteligente con IA',
    body: 'Automatizamos tus procesos con IA para optimizar los tiempos y la calidad de tu operación.',
    result: 'Menos tareas manuales, respuestas más rápidas.',
    page: {
      seoTitle: 'Automatización con inteligencia artificial | Elanth',
      description:
        'Automatizamos los procesos de tu negocio con inteligencia artificial para ganar tiempo y calidad: respuestas a tus clientes y tareas repetitivas.',
      heading: ['Automatización con IA', 'para tu operación.'],
      includes: [
        'Revisión de tus procesos para encontrar las tareas repetitivas que se pueden automatizar.',
        'Asistentes que responden a tus clientes con la información de tu catálogo y tu inventario.',
        'Flujos que ordenan y procesan tareas sin intervención manual.',
        'Ajustes a partir de los resultados para mejorar tiempos y calidad.',
      ],
      forWho: 'Para negocios que ya venden y sienten que su equipo pierde tiempo en tareas que se repiten todos los días.',
    },
  },
  {
    id: 'omnicanal',
    level: 3,
    slug: 'integracion-erp-marketplaces',
    title: 'Sincronización: tienda conectada',
    body: 'Integramos la tienda con el sistema administrativo (ERP) que tu empresa ya usa y centralizamos el inventario. Vendes al mismo tiempo en Mercado Libre, Amazon, eBay, Facebook Marketplace y más, desde un único panel de control.',
    result: 'Un inventario, todos los canales, sin cargar nada dos veces.',
    page: {
      seoTitle: 'Integración con ERP y marketplaces | Elanth',
      description:
        'Conectamos tu tienda con tu ERP y centralizamos el inventario para vender a la vez en Mercado Libre, Amazon, eBay y Facebook Marketplace desde un panel.',
      heading: ['Tu tienda, tu ERP y tus marketplaces,', 'conectados.'],
      includes: [
        'Integración de la tienda con el sistema administrativo (ERP) que tu empresa ya usa.',
        'Un inventario central que se actualiza en todos tus canales a la vez.',
        'Venta simultánea en Mercado Libre, Amazon, eBay, Facebook Marketplace y más.',
        'Un único panel de control para todos tus canales, sin cargar nada dos veces.',
      ],
      forWho:
        'Para negocios que ya usan un sistema administrativo y quieren vender en varios canales sin descuadrar su inventario.',
    },
  },
  {
    id: 'b2b',
    level: 4,
    slug: 'ecommerce-b2b',
    title: 'E-Commerce avanzado B2B',
    body: 'Configuramos reglas de negocio específicas, control de stock y listas de precios dinámicas para ofrecer precios y condiciones exclusivas a cada cliente corporativo, de forma automática.',
    result: 'Cada cliente ve su precio, sin que tú lo calcules.',
    page: {
      seoTitle: 'E-commerce B2B con precios por cliente | Elanth',
      description:
        'Tienda B2B con reglas de negocio, control de stock y listas de precios dinámicas: cada cliente corporativo ve sus precios y condiciones, automáticamente.',
      heading: ['E-commerce B2B:', 'cada cliente ve su precio.'],
      includes: [
        'Reglas de negocio configuradas según cómo trabajas con cada tipo de cliente.',
        'Control de stock integrado a tus ventas a empresas.',
        'Listas de precios dinámicas, por cliente o por grupo de clientes.',
        'Precios y condiciones exclusivas para cada cliente corporativo, aplicadas de forma automática.',
      ],
      forWho:
        'Para distribuidores, mayoristas y fabricantes que venden a otras empresas con condiciones distintas para cada cliente.',
    },
  },
] as const;

export type Level = (typeof levels)[number];
