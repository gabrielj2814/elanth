// Genera los logos optimizados de public/brand a partir del SVG original de la marca.
// Uso: node scripts/build-logos.cjs
//
// - Redondea las coordenadas a enteros (el dibujo mide 3260 unidades: no se nota y pesa mucho menos).
// - En las versiones «solo símbolo» elimina el texto ELANTH en lugar de ocultarlo con un recorte.
// - Crea las variantes clara (para fondo oscuro), Code (ojo azul eléctrico) y Media (ojo coral).
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const source = path.join(root, 'Visuales/Logo/Svg/elanth_logo.svg');
const out = path.join(root, 'public/brand');

const NAVY = '#0A4269';
const CIRCUIT = '#0A9CD6';
const LIGHT = '#F4F7FA';
// Zona del texto ELANTH / TECHNOLOGY SOLUTIONS (a la derecha y debajo del elefante)
const WORDMARK = { minX: 1385, minY: 700 };
const MARK_VIEWBOX = '60 60 1940 1110';
const EYE = { cx: 986, cy: 352, r: 44 };

const svg = fs.readFileSync(source, 'utf8');
const paths = [...svg.matchAll(/<path[^>]*\sfill="([^"]+)"[^>]*\sd="([^"]+)"/g)].map((m) => ({ fill: m[1], d: m[2] }));
if (paths.length !== 2) throw new Error(`Se esperaban 2 trazados en el logo y hay ${paths.length}`);

const round = (d) => d.replace(/-?\d+(\.\d+)?/g, (n) => String(Math.round(Number(n))));
const subpaths = (d) => d.split(/(?=M)/).filter(Boolean);
const bbox = (sub) => {
  const nums = sub.match(/-?\d+(\.\d+)?/g).map(Number);
  const xs = nums.filter((_, i) => i % 2 === 0);
  const ys = nums.filter((_, i) => i % 2 === 1);
  return { minX: Math.min(...xs), minY: Math.min(...ys) };
};
const inWordmark = (sub) => {
  const b = bbox(sub);
  return b.minX >= WORDMARK.minX && b.minY >= WORDMARK.minY;
};

const shape = (d, onlyMark) => {
  const parts = subpaths(d).filter((sub) => !(onlyMark && inWordmark(sub)));
  return round(parts.join(''));
};

const build = ({ onlyMark, navy, eye }) => {
  const viewBox = onlyMark ? MARK_VIEWBOX : '0 0 3260 1268';
  const body = paths
    .map((p) => `<path fill="${p.fill === NAVY ? navy : CIRCUIT}" fill-rule="evenodd" d="${shape(p.d, onlyMark)}"/>`)
    .join('');
  const eyeDot = eye ? `<circle cx="${EYE.cx}" cy="${EYE.cy}" r="${EYE.r}" fill="${eye}"/>` : '';
  const title = onlyMark ? '' : '<title>Elanth Technology Solutions</title>';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">${title}${body}${eyeDot}</svg>\n`;
};

const files = {
  'elanth-logo.svg': { onlyMark: false, navy: NAVY },
  'elanth-logo-light.svg': { onlyMark: false, navy: LIGHT },
  'elanth-mark.svg': { onlyMark: true, navy: NAVY },
  'elanth-mark-light.svg': { onlyMark: true, navy: LIGHT },
  'elanth-code-mark.svg': { onlyMark: true, navy: NAVY, eye: '#1769FF' },
  'elanth-code-mark-light.svg': { onlyMark: true, navy: LIGHT, eye: '#5B93FF' },
  'elanth-media-mark.svg': { onlyMark: true, navy: NAVY, eye: '#FF6B6B' },
  'elanth-media-mark-light.svg': { onlyMark: true, navy: LIGHT, eye: '#FF6B6B' },
};

for (const [name, opts] of Object.entries(files)) {
  const content = build(opts);
  const target = path.join(out, name);
  const before = fs.existsSync(target) ? fs.statSync(target).size : 0;
  fs.writeFileSync(target, content);
  console.log(`${name}: ${(before / 1024).toFixed(1)} KB -> ${(content.length / 1024).toFixed(1)} KB`);
}
fs.copyFileSync(path.join(out, 'elanth-mark.svg'), path.join(root, 'public/favicon.svg'));
console.log('favicon.svg = elanth-mark.svg');
