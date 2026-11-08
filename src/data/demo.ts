// Pedidos de demostración para la comandera del hero.
// Son datos ficticios: se muestran rotulados como "demostración" en la página.

export type Channel = {
  id: string;
  name: string;
  short: string;
};

export const channels: Channel[] = [
  { id: 'erp', name: 'ERP central', short: 'ERP' },
  { id: 'web', name: 'Tienda online', short: 'Tienda' },
  { id: 'ml', name: 'Mercado Libre', short: 'M. Libre' },
  { id: 'amz', name: 'Amazon', short: 'Amazon' },
  { id: 'ebay', name: 'eBay', short: 'eBay' },
  { id: 'fb', name: 'Facebook Marketplace', short: 'Marketplace' },
];

export type Product = { sku: string; name: string; stock: number };

export const products: Record<string, Product> = {
  'CAB-THW12': { sku: 'CAB-THW12', name: 'Cable THW 12 AWG · rollo 100 m', stock: 148 },
  'PVC-1205': { sku: 'PVC-1205', name: 'Tubo PVC ½" × 3 m', stock: 620 },
  'PNT-CAU01': { sku: 'PNT-CAU01', name: 'Pintura de caucho blanca · galón', stock: 236 },
  'LED-9W10': { sku: 'LED-9W10', name: 'Bombillo LED 9 W · caja × 10', stock: 84 },
  'TOR-6X1': { sku: 'TOR-6X1', name: 'Tornillo drywall 6 × 1" · caja × 1000', stock: 57 },
};

export type Order = {
  id: string;
  channel: string;
  channelId: string;
  time: string;
  sku: string;
  qty: number;
  total: string;
  note?: string;
};

export const orders: Order[] = [
  { id: 'ML-48213', channel: 'Mercado Libre', channelId: 'ml', time: '09:41', sku: 'CAB-THW12', qty: 2, total: '96,00' },
  { id: 'B2B-0317', channel: 'Cliente corporativo', channelId: 'web', time: '09:43', sku: 'PVC-1205', qty: 40, total: '118,40', note: 'Lista de precios: Mayorista B' },
  { id: 'AMZ-77105', channel: 'Amazon', channelId: 'amz', time: '09:46', sku: 'LED-9W10', qty: 3, total: '41,85' },
  { id: 'FB-2290', channel: 'Facebook Marketplace', channelId: 'fb', time: '09:52', sku: 'PNT-CAU01', qty: 4, total: '71,60' },
  { id: 'WEB-1064', channel: 'Tienda online', channelId: 'web', time: '09:58', sku: 'TOR-6X1', qty: 1, total: '22,50' },
  { id: 'EBY-5531', channel: 'eBay', channelId: 'ebay', time: '10:04', sku: 'CAB-THW12', qty: 1, total: '48,00' },
];
