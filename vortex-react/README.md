# Vortex POS — React

Versión en React del sitio estático de `../` (mismo diseño, mismo contenido,
mismo `styles.css`), modularizada en componentes. Hecha con Vite + React +
react-router-dom, sin TypeScript.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre <http://localhost:5173>. Rutas: `/`, `/planes`, `/contacto`, `/recursos`.

```bash
npm run build     # build de producción en dist/
npm run preview   # sirve el build de producción localmente
```

## Estructura

```
src/
  hooks/        # lógica portada de script.js (scroll del header, menú móvil,
                # animaciones al hacer scroll, parallax del hero, máquina de
                # escribir de la tarjeta de documentación)
  components/
    layout/     # Header, Footer, Layout (con el skip-link y el scroll a anclas)
    common/     # Reveal (wrapper de animación al entrar en pantalla) y CtaSection
                # (el formulario "Empieza hoy con Vortex", compartido por 3 páginas)
    home/       # Secciones exclusivas de la página de inicio
    planes/     # Tarjetas de precios y tabla comparativa
    contacto/   # Formulario de contacto y barra lateral de canales
    recursos/   # Tarjetas destacadas, filtro por tipo y temas
  data/         # Contenido repetitivo (planes, comparativa, giros, FAQ,
                # recursos, temas) como arrays, para no repetir el mismo
                # marcado a mano
  pages/        # Una página por ruta, arma las secciones de arriba
public/assets/  # Copia de ../assets (imágenes), servidas en /assets/...
```

## Qué se portó y qué no

Todas las interacciones del `script.js` original se portaron a hooks de React:
scroll del header, menú móvil, parallax del hero, animaciones al entrar en
pantalla, acordeón de FAQ, validación de los formularios (CTA y contacto),
filtro del centro de recursos, máquina de escribir y año del footer.

**No se portaron** el contador animado (`data-count`) ni el carrusel
(`.cs-slide`) del `script.js` original: no hay ningún elemento en las 4
páginas que los use, así que agregarlos habría sido código muerto.
