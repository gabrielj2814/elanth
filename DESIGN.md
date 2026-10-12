---
name: Elanth
description: Turnkey e-commerce for traditional businesses, drawn as an order printer printing thermal tickets onto a navy warehouse floor.
colors:
  navy: "#0b1f33"
  navy-deep: "#07141f"
  slate: "#263445"
  slate-soft: "#34465a"
  ink: "#1f2a33"
  paper: "#f4f7fa"
  ice: "#e8f1f6"
  sky: "#6bbbe0"
  blue-ink: "#17698f"
  teal: "#19c3b1"
  teal-bright: "#3fe0cd"
  teal-ink: "#0b7a6e"
  amber: "#f5a623"
  amber-ink: "#8a5300"
  fog: "#9fb3c6"
  muted: "#52637a"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 5.6vw, 4rem)"
    fontWeight: 820
    lineHeight: 0.94
    letterSpacing: "-0.025em"
    fontVariation: "\"wdth\" 118"
    fontFeature: "\"ss01\""
  headline:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.33
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 116"
  title:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 760
    lineHeight: 1.36
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 110"
  body:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"ss01\""
  body-paper:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Martian Mono Variable, Martian Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.06em"
    fontVariation: "\"wdth\" 80"
  ticket-data:
    fontFamily: "Martian Mono Variable, Martian Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.625
    fontVariation: "\"wdth\" 82"
    fontFeature: "\"tnum\""
rounded:
  stamp: "2px"
  hub: "3px"
  control: "5px"
  button: "6px"
  rail: "10px"
  device: "14px"
  pill: "999px"
spacing:
  gutter-sm: "16px"
  gutter-md: "32px"
  gutter-lg: "48px"
  section-sm: "96px"
  section-lg: "128px"
  container: "90rem"
components:
  button-lit:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.navy}"
    rounded: "{rounded.button}"
    padding: "0 24px"
    height: "56px"
  button-lit-hover:
    backgroundColor: "{colors.teal-bright}"
    textColor: "{colors.navy}"
  button-nav-ghost:
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "44px"
  button-nav-ghost-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
  input-field:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "11px 14px"
    height: "48px"
  choice-pill:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  choice-pill-selected:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
  code-stamp:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.stamp}"
    padding: "0 6px"
    height: "26px"
  code-stamp-lit:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.navy}"
  paper-document:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "48px 40px"
  order-ticket:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.ticket-data}"
    padding: "16px 20px 24px"
---

# Design System: Elanth

## Overview

**Creative North Star: "The Order Printer"**

Elanth's world is the back room of a working business: a navy warehouse floor, a slate comandera, and thermal paper that prints out of it. Every piece of content that carries an offer, an order, or a form is a sheet of that paper: square-cornered, torn at the edges, ruled with dashed tear lines, stamped with barcodes and tabular time codes. The visitor reads the company's promise the way a shop owner reads an incoming order, which is the whole argument: you receive the orders, Elanth does everything else.

The ground is dark and dominant. Navy (`navy`) owns the hero, the "llave en mano" ledger and the contact section; ice (`ice`) is the lighter floor for the services slip and the roadmap rail. Paper sits on both grounds and is the only place long reading happens on light. Type is a wide, heavy Archivo that echoes the wordmark, paired with a condensed Martian Mono that only ever prints ticket and slip data. One teal light glows per view, the way a printer's single status LED does.

Density is deliberate and calm: large sections (96px to 128px vertical), a 12-column grid inside a 90rem container, and paper documents that hold most of the detail so the navy ground can stay quiet. Motion is mechanical and purposeful: paper feeds, codes light, counters roll. All of it collapses under reduced motion.

**Key Characteristics:**
- Navy and ice grounds; thermal paper documents carry the content of the hero, the route slip and the ledger.
- A second, technical voice taken from the logo's circuit: modules on a bus, IC chip codes and a faint 32px grid carry the service order, the ecosystem hub and the contact form.
- Torn edges, dashed tear lines, barcodes and boxed print codes as native ornament.
- Wide heavy Archivo display; condensed mono reserved for printed data.
- A single teal light per view: the call to action, the printer LED, focus and the lit flow code.
- State is drawn with glyph and stroke, never by color alone.

## Colors

A cold, ink-and-paper palette on deep navy, with one lit teal and one amber for things not yet done.

### Primary
- **Status-Light Teal** (`teal`): the one lit element. The primary call-to-action button, the comandera LED, focus outlines, text selection and caret, the skip link, the lit print code in the services flow, and the success badge that confirms a submitted order. Text on teal is always navy.
- **Bright Teal** (`teal-bright`): teal's hover state, and the brief flash on a stock counter when the printer syncs it.
- **Deep Teal Ink** (`teal-ink`): teal's legible form on white; the focus border and focus outline of form controls on paper.

### Secondary
- **Channel Sky** (`sky`): channel ink on navy. The second line of display headlines ("tú haces menos.", "demo gratuita."), the hero's feature icons, step numerals in the contact section and the sync glyphs in the stock rail.
- **Channel Ink** (`blue-ink`): the same channel ink printed on paper. Check glyphs, outcome lines in the service order, ticket notes and in-paper links.

### Tertiary
- **Pending Amber** (`amber`): the in-flight sync state in the printer's stock rail.
- **Pending Amber Ink** (`amber-ink`): amber printed on paper; the "En preparación" status of roadmap departments.

### Neutral
- **Warehouse Navy** (`navy`): the page ground and the theme color; also headline ink on paper and the negative fill of the central inventory node.
- **Night Floor** (`navy-deep`): the footer, the printer's paper slot and the stock rail cells; the scrollbar track.
- **Device Slate** (`slate`): the comandera body and the roadmap rail. Hardware only.
- **Worn Slate** (`slate-soft`): the scrollbar thumb.
- **Thermal Paper** (`paper`): every paper document and ticket; primary text on navy.
- **Ice Floor** (`ice`): the light section ground (services, roadmap) and the optional fieldset inside the contact form.
- **Ticket Ink** (`ink`): body text, tear lines, barcodes and print-code borders on paper.
- **Fog** (`fog`): secondary text on navy (intros, nav links, footer, device labels).
- **Faded Print** (`muted`): secondary text on paper and ice (timestamps, SKUs, column heads, helper copy).

### Named Rules
**The One Lit Element Rule.** Teal is light, not decoration. It appears only on the primary call to action and its confirmation, the printer LED and its stock flash, focus and selection, and the print code that a service is currently lighting. Never on headlines, icons, borders at rest, or backgrounds of sections.

**The Two Inks Rule.** Channel color is ink, and ink depends on the surface: `sky` on navy, `blue-ink` on paper. Amber follows the same split (`amber` on navy, `amber-ink` on paper).

**The Pending Is Amber Rule.** Amber means "not yet": syncing, in preparation, on the roadmap. It never marks something that is available today.

## Typography

**Display Font:** Archivo Variable (with Archivo, ui-sans-serif, system-ui)
**Body Font:** Archivo Variable, stylistic set 01
**Label/Mono Font:** Martian Mono Variable (with ui-monospace)

**Character:** A single grotesque stretched wide and heavy for the voice, and a condensed mono that reads like a thermal printer's character set. Width, not a second family, carries hierarchy: display runs at 118% width, document titles at 114 to 118%, item titles at 104 to 110%, body at 100%, and printed data condenses to 80 to 85%.

### Hierarchy
- **Display** (820, `clamp(2.1rem, 5.6vw, 4rem)` for section heads, 0.94 line height, -0.025em, 118% width): section headlines on navy and ice, often with a second phrase in channel ink. The hero sets the same voice as fitted bands sized to the column's container width.
- **Headline** (800, 1.25rem to 1.5rem, 114 to 118% width, -0.01em): the title of a paper document ("Orden de servicio", "Orden de asesoría", "Tu copia") and roadmap ticket names.
- **Title** (760, 1.25rem to 1.375rem, 110% width): service names in the service order; contact section subheads at 700 and 108%.
- **Body** (400, 1.125rem, 1.625 line height): intros on navy and ice, capped at 34 to 40rem. On paper, body runs 0.9875rem to 1.0625rem.
- **Label** (Martian Mono 500, 0.6875rem, 0.06em, uppercase, 80% width): device labels on the comandera and stock rail.
- **Ticket Data** (Martian Mono 400 to 600, 0.6875rem to 0.75rem, 82 to 85% width, tabular figures): channel order lines, SKUs, timestamps, column heads, status lines, print codes.

### Named Rules
**The Mono Is Printed Data Rule.** Martian Mono appears only where a printer would have printed it: tickets, slips, codes, statuses, timestamps, device labels. Persuasive copy, headings and form labels stay in Archivo.

**The Width Carries Weight Rule.** Raise hierarchy by widening and thickening Archivo, not by adding families or color.

## Layout

A 12-column grid inside a 90rem container, with gutters of 16px, 32px from 640px, and 48px from 1024px. Sections breathe at 96px vertical, 128px from 640px. Two-part sections split asymmetrically: 7/5 in the hero (copy, then printer), 5/7 in services (sticky route slip, then service order) and contact (sticky steps, then form), 4/1/7 in the ledger (client copy, perforation, Elanth copy). Below 1024px everything stacks in reading order and the printer drops under the call to action at full width.

Paper documents are capped at 42 to 44rem and padded generously (20px to 40px horizontal, 40px to 48px vertical). Sticky columns pin at 7rem from the top. Anchors scroll smoothly with an offset equal to the fixed nav height (3.5rem, 4rem from 640px), so each section starts flush under it.

## Elevation & Depth

Depth is physical: paper lifts off the floor, and hardware has bulk. Surfaces on the ground are flat; paper and devices cast soft, low shadows that follow their torn silhouettes (filter drop-shadow, not box-shadow, so the tears cast too).

### Shadow Vocabulary
- **Paper on navy** (`filter: drop-shadow(0 18px 24px rgb(3 10 18 / 0.35)) drop-shadow(0 2px 3px rgb(3 10 18 / 0.25))`): every paper document and ticket on a dark ground.
- **Paper on ice** (`filter: drop-shadow(0 12px 16px rgb(11 31 51 / 0.14)) drop-shadow(0 1px 2px rgb(11 31 51 / 0.18))`): roadmap tickets hanging on the rail.
- **Device body** (`box-shadow: 0 24px 40px -18px rgb(3 10 18 / 0.8), inset 0 1px 0 rgb(255 255 255 / 0.08)`): the comandera.
- **Lit glow** (`box-shadow: 0 10px 30px -10px rgb(25 195 177 / 0.55), inset 0 -2px 0 rgb(11 31 51 / 0.18)`): the primary button; the LED carries its own 10px teal glow.
- **Scrolled nav** (`box-shadow: 0 1px 0 rgb(255 255 255 / 0.07), 0 10px 30px -18px rgb(0 0 0 / 0.6)` over 92% navy with a 10px blur): the nav only after the page scrolls.

### Named Rules
**The Paper Casts, The Floor Doesn't Rule.** Only paper, hardware (the printer, the rail and its clips), the lit button and the scrolled nav have shadows. Section grounds, the nav at rest and text never do.

## Shapes

Two shape languages, never mixed. Paper is square: no radius, with zig-zag torn edges (a 7px tear masked into the top and bottom, or bottom only for tickets) and 8px-dash tear lines across it. Hardware and controls are softly rounded: 14px on the printer body, 10px on the stock rail, 6px on the lit button, 5px on nav buttons and inputs, 999px on choice pills and step numerals. Print codes and chips are near-square (2px), like rubber stamps; the central inventory node, printed in negative, takes 3px.

Paper may tilt slightly when it is a physical copy set down beside another (the client copy rotates -1.2deg on wide screens). Barcodes, perforations (2px dotted columns) and dashed wires between flow nodes are all part of the material vocabulary.

## Components

### Buttons
Lit, confident, and singular.
- **Shape:** gently rounded (6px), 56px tall.
- **Primary ("lit"):** teal fill, navy text at 750 weight, 20px horizontal padding growing to 24px and 108% width from 640px, trailing arrow icon. Full width on mobile.
- **Hover / Focus:** brightens to `teal-bright`, rises 1px, the glow deepens and the arrow slides 3px right (300ms expo). Pressed drops 1px. Disabled sits at 60% opacity with a progress cursor while sending.
- **Quiet link:** the secondary action beside the lit button. Text in the ground's primary color, 600 weight, underlined at 35% opacity that firms to full on hover, 56px hit area.
- **Nav ghost:** 5px radius, 1px paper border at 40%, paper text; on hover it fills with paper and the text turns navy.

### Chips
- **Print code:** boxed mono stamp (WEB, SYNC, ERP, CAN, B2B, OPS, ADS, TÚ), 1px ink border, 2px radius, 26px tall. Hovering or activating a service inverts it to navy on paper; in the route slip the governed code lights teal with navy text.
- **Channel chip:** small mono tag, 2px radius, solid ink border at 25%; the B2B variant uses a dashed `blue-ink` border.
- **Choice pill:** 44px tall, 999px radius, white with a 22% ink border; selected fills navy with paper text.

### Cards / Containers
Two kinds of containers. Paper documents (below) for the hero tickets, the route slip and the ledger; circuit modules (white, 10px radius, 1px ink border at 14%, joined by traces) for the service order and the ecosystem hub. A module never stands alone on the ground: it is always wired to a bus or a hub.
- **Corner Style:** square, with torn edges.
- **Background:** `paper` (the one in-service roadmap ticket prints on white).
- **Shadow Strategy:** paper drop-shadows (see Elevation & Depth).
- **Border:** none; internal structure comes from dashed tear lines and dashed row dividers at 20% ink.
- **Internal Padding:** 20px to 40px horizontal, 40px to 48px vertical; tickets 20px by 16px to 24px.

### Inputs / Fields
- **Style:** white field, 1px ink border at 22%, 5px radius, 48px tall, 16px text; textareas start at 88px. Labels sit above in Archivo 600 navy; optional fields say "(opcional)" in muted regular weight.
- **Focus:** border turns `teal-ink` with a 3px teal ring at 28%.
- **Error:** red border with a soft coral ring and a red helper line under the field; form-level errors appear as a tinted coral alert.
- **Optional group:** a dashed 25% ink border on ice, introduced by a scissors cut line, so optional details read as a detachable part of the order.
- **On the contact module (dark):** fields sit on `navy-deep` with a 1px sky border at 25%, 6px radius and paper text; labels in paper, "(opcional)" in fog. Focus turns the border teal with a 3px teal ring at 25%; errors use a coral border and a light coral helper line. The optional group is a dashed sky box at 30% with a mono "OPCIONAL" label sitting on its border.

### Contact Module
The form is a dark circuit module: `#0f2840` fill, 1px sky border at 22%, 12px radius, rows of sky pins along its top and bottom edges, and a header with the ASR chip and "Solicitud de asesoría". Beside it, the three steps are mono numerals in rounded-square pads joined by a sky trace at 30%.

### Navigation
Fixed, transparent over the hero, logo left (44px, 56px from 640px), four fog links (Servicios, Llave en mano, Ecosistema, Contacto) (14px, 500) that turn paper on hover, and the ghost CTA at right ("Asesoría gratis" on mobile). After 24px of scroll it turns 92% navy with a 10px backdrop blur and a hairline shadow. Links hide below 768px. 56px tall, 64px from 640px.

### Order Ticket (signature)
The thermal ticket that prints from the comandera: channel name in Archivo 780 at 112% width, tabular time at right, order number, a tear line, the quantity and product line with SKU and total, a second tear line, then a `blue-ink` "stock sincronizado" status with a check glyph and a deterministic barcode. Bottom edge torn. New tickets feed down out of the slot over 1400ms, after which the stock rail below cycles each channel through an amber sync glyph to a check and rolls the count.

### Route Slip and Service Bus (signature)
Services are a paper "hoja de ruta" keyed by print codes, beside a service order drawn as a circuit: a navy header module ("Orden de servicio", E360 chip), one white module per service (10px radius, 1px ink border at 14%) and a dashed "TÚ · Tu almacén" socket at the end, all hanging from a vertical `blue-ink` bus at 45% through short traces and 12px solder pads. Each service carries its code as an IC chip. Focusing, hovering or scrolling a service dims every other node of the slip to 35% and lights the nodes it governs (their codes turn teal); the active module takes a navy border and its trace and pad turn navy. Clicking pins it. The client's own part of the slip is torn off below a scissors line as a separate stub.

### IC Chip
The circuit's code stamp: navy fill, `sky` mono text (600, 82% width, 0.06em), 3px radius, 26px tall, with rows of 2px pins drawn above and below. On navy surfaces it sits on `navy-deep` with a 1px sky outline at 35% (`ic-chip-dark`). The client's own part is an empty socket: transparent with a 1.5px navy outline and no pins (`ic-chip-you`).

### Two-Copy Ledger (signature)
The turnkey split is two torn copies of one order: a narrow, slightly tilted client copy and a wide Elanth copy, divided by a dotted perforation.

### Ecosystem Hub (signature)
The roadmap is a hub diagram: a white core module with the Elanth mark ("Elanth · HUB TECNOLÓGICO", 2px navy border) in a 16rem center column, two department modules on each side, joined by rails and traces. The department in service (E-Commerce 360°) connects with a solid `blue-ink` trace where a sky highlight flows toward the core; departments in preparation connect with dashed `amber-ink` traces. Each module shows its IC chip, a mono status ("En servicio" with check glyph in navy, "En preparación" with dashed clock in `amber-ink`), name and description. Below 1024px the core sits on top and the modules hang from a vertical bus.

## Do's and Don'ts

### Do:
- **Do** put offers, orders, forms and roadmap items on thermal paper (`paper`) with torn edges and dashed tear lines, set on a navy or ice ground.
- **Do** keep teal to one lit element per view: the primary CTA, the printer LED, focus and selection, or the lit print code.
- **Do** print data (codes, SKUs, times, statuses) in condensed Martian Mono with tabular figures; set everything else in Archivo.
- **Do** raise hierarchy with Archivo width and weight (display 820 at 118%).
- **Do** use `sky` and `amber` on navy, `blue-ink` and `amber-ink` on paper.
- **Do** draw every state with a glyph and a stroke (check, dashed clock, sync arrows), with color as reinforcement.
- **Do** use 1.75-stroke inline SVG icons drawn for Elanth.
- **Do** keep paper square and hardware rounded.

### Don't:
- **Don't** use teal for headlines, icons at rest, section backgrounds or decorative accents.
- **Don't** set persuasive copy, headings or form labels in mono.
- **Don't** stand content on the ground as loose rounded cards or icon-card grids; content lives on paper, or on circuit modules wired to a bus or hub.
- **Don't** give section grounds or text shadows; only paper, hardware, the lit button and the scrolled nav cast.
- **Don't** signal sync, pending or availability by color alone.
- **Don't** use amber for anything available today.
