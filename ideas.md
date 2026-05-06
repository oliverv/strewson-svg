# Brainstorming de Diseño — SomeOne Studio

## Contexto
Sitio web premium para SomeOne Studio, consultancy de tecnología e IA. Referencia visual: Apple Vision Pro. Necesitamos un enfoque que comunique sofisticación, precisión técnica y visión futurista.

---

## Idea 1: Minimalismo Cósmico Oscuro (Probabilidad: 0.08)

**Movimiento de Diseño:** Neominimalismo futurista, inspirado en interfaces de ciencia ficción y diseño espacial.

**Principios Centrales:**
- Espacio negativo como protagonista: cada elemento respira, nada compite
- Tipografía editorial como declaración: serifs fuertes en displays, sans geométrico limpio en cuerpo
- Profundidad mediante capas sutiles: gradientes oscuros, blur, y sombras suaves
- Movimiento intencional: scroll-triggered reveals, parallax controlado, transiciones largas (0.8s+)

**Filosofía de Color:**
- Base: #080808 (casi negro puro) con toques de #0a0a0f
- Acentos: Un color por proyecto (azul eléctrico, violeta, ámbar, oro, teal, verde)
- Propósito emocional: Calma, poder, tecnología avanzada. El color es un "flash" que atrae atención sin saturar

**Paradigma de Layout:**
- Full-viewport sections (100vh) con asimetría deliberada
- Contenido siempre a la izquierda (10vw margin), imágenes desbordan a la derecha
- Secciones de filosofía centradas pero con máximo ancho (760px) para mantener intimidad
- Divisores verticales sutiles entre stats

**Elementos Distintivos:**
1. **Línea animada descendente** en hero (scroll indicator)
2. **Gradient overlays cinemáticos** (135deg, oscuro a transparente) sobre imágenes
3. **Pill tags con borde fino** para sector/categoría, con color accent sutil

**Filosofía de Interacción:**
- Hover: transiciones suaves (200ms ease-out), no "pop"
- Botones ghost: borde 1px blanco, hover → fondo blanco + texto negro
- Links: subrayado en hover, color accent
- Scroll: smooth global, reveal animations en IntersectionObserver

**Animaciones:**
- Fade-in + translateY (20px → 0) en scroll (0.8s ease-out)
- Parallax hero: 0.5x scroll rate (background-attachment: fixed)
- Opacity transitions en texto: 0 → 0.6 → 1 (staggered)
- No bounce, no spring: todo es lineal o ease-out

**Sistema Tipográfico:**
- Display: **Cormorant Garamond** (400 regular, 600 bold) — serif editorial, alto contraste
- Body: **DM Sans** (400, 500) — geométrico, legible, moderno
- Hierarchy: 96px (hero) → 72px (project names) → 52px (section titles) → 18px (body) → 14px (labels)

---

## Idea 2: Brutalism Digital Refinado (Probabilidad: 0.07)

**Movimiento de Diseño:** Brutalism digital con precisión suiza, inspirado en diseño corporativo de los 70s + estética web3.

**Principios Centrales:**
- Estructura visible: grillas claras, bordes definidos, geometría pura
- Tipografía monoespaciada en ciertos puntos (números, labels técnicos)
- Contraste extremo: blanco sobre negro, sin medios tonos
- Materialidad: bordes 2px, sin blur, sin suavidad

**Filosofía de Color:**
- Paleta: #000000, #FFFFFF, con acentos en rojo (#FF0000) o amarillo (#FFFF00)
- Propósito emocional: Honestidad, fuerza, arquitectura visible. Sin pretensión.

**Paradigma de Layout:**
- Grid de 12 columnas visible, márgenes estrictos
- Secciones no necesariamente full-height; contenido denso
- Tipografía grande pero sin aire: líneas apretadas
- Imágenes en marcos rígidos, no full-bleed

**Elementos Distintivos:**
1. **Bordes gruesos** alrededor de secciones/proyectos
2. **Números grandes** (01, 02, etc.) como decoración de fondo
3. **Líneas divisoras horizontales** entre secciones

**Filosofía de Interacción:**
- Hover: inversión de color (fondo blanco → texto negro)
- Botones: bordes 2px, sin relleno
- Transiciones: instantáneas o muy rápidas (100ms)

**Animaciones:**
- Minimal: fade-in, sin parallax
- Scroll: snap sections

**Sistema Tipográfico:**
- Display: **IBM Plex Serif** (bold) — serif corporativo
- Body: **IBM Plex Mono** (400) — monoespaciado para autoridad
- Labels: **Courier New** (monoespaciado)

---

## Idea 3: Elegancia Oscura Cinematográfica (Probabilidad: 0.09) ⭐ **SELECCIONADA**

**Movimiento de Diseño:** Cine de autor digital, inspirado en títulos de crédito de Saul Bass + interfaces de Apple Vision Pro.

**Principios Centrales:**
- Cada sección es un "fotograma": imagen hero full-bleed, contenido superpuesto con jerarquía clara
- Tipografía como narrativa: serif display elegante + sans limpio, ambos con tracking generoso
- Profundidad mediante capas: gradientes suaves, blur controlado, sombras largas
- Movimiento orgánico: scroll-triggered reveals lentos, parallax sutil, transiciones que respiran

**Filosofía de Color:**
- Base: #080808 / #0a0a0f (oscuro profundo, no puro negro)
- Acentos por proyecto: azul eléctrico (#3B82F6), violeta (#8B5CF6), ámbar (#F59E0B), oro (#D4AF37), teal (#14B8A6), verde (#22C55E)
- Propósito emocional: Lujo, precisión, futuro. El color es un "destello" que revela sofisticación sin gritar.

**Paradigma de Layout:**
- Full-viewport hero sections (100vh) con contenido asimétrico (izquierda)
- Secciones de filosofía centradas pero generosas en espacio
- Proyectos: imagen derecha, contenido izquierda, gradiente diagonal que une ambos
- Navegación sticky, transparente → frosted glass en scroll

**Elementos Distintivos:**
1. **Gradient overlay cinemático** (linear-gradient 135deg, oscuro → transparente)
2. **Scroll indicator animado** (línea descendente en hero)
3. **Pill tags con borde fino** (sector/categoría, color accent)
4. **Dividers verticales sutiles** entre stats
5. **Glass morphism en nav** (backdrop-filter: blur(20px), rgba(8,8,8,0.75))

**Filosofía de Interacción:**
- Hover: transiciones suaves (200ms ease-out), cambio sutil de opacidad o color
- Botones ghost: borde 1px blanco, hover → fondo blanco + texto negro (200ms)
- Links: subrayado en hover, color accent
- Scroll: smooth global, reveal animations en IntersectionObserver (fade + translateY)

**Animaciones:**
- Fade-in + translateY (20px → 0) en scroll (0.8s ease-out)
- Parallax hero: 0.5x scroll rate (background-attachment: fixed o JS parallax)
- Opacity transitions en texto: staggered, 0 → 0.6 → 1
- Scroll indicator: fade in/out (1s), descenso suave
- Transiciones de nav: opacity + blur (200ms ease-out)
- No bounce, no spring: todo es lineal o ease-out, movimiento cinematográfico

**Sistema Tipográfico:**
- Display: **Playfair Display** o **Cormorant Garamond** (400-600) — serif editorial, elegancia, alto contraste
- Body: **Plus Jakarta Sans** o **DM Sans** (400-500) — geométrico, moderno, legible
- Hierarchy:
  - Hero: 96px / 6vw (display, bold)
  - Project names: 72px (display, bold)
  - Section titles: 52px (display, 400)
  - Body: 18px (body, 400)
  - Labels: 14px (body, 500, wide tracking)
  - Eyebrow: 12px (body, 500, uppercase, wide tracking, muted)

---

## Decisión Final

**Se selecciona: Idea 3 — Elegancia Oscura Cinematográfica** ⭐

Esta dirección:
- ✅ Alinea perfectamente con la referencia de Apple Vision Pro (cinemático, full-bleed, profundidad)
- ✅ Comunica sofisticación y precisión técnica (serif + sans, tracking generoso)
- ✅ Permite que cada proyecto brille con su propio accent color sin saturación
- ✅ Ofrece movimiento intencional que mejora la experiencia sin distraer
- ✅ Escala bien a móvil (full-height sections, tipografía responsiva)
- ✅ Establece una narrativa clara: cada sección es un acto en una película

### Próximos Pasos:
1. Configurar Google Fonts (Playfair Display + DM Sans)
2. Actualizar `index.css` con tokens de color y tipografía
3. Generar imágenes hero y de proyectos
4. Construir componentes: Nav, Hero, Philosophy, Projects, About/CV, Contact
5. Implementar animaciones scroll-triggered
