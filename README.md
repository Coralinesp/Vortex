# Vortex — Landing page

Landing page del SaaS **Vortex POS**, un sistema de punto de venta en la nube.
Sitio estático, sin dependencias ni paso de build.

## Estructura

```
Vortex/
├── index.html    Marcado completo de la página
├── styles.css    Sistema de diseño + estilos y responsive
├── script.js     Interacciones (menú, precios, FAQ, contadores, formulario)
├── assets/       Imágenes y recursos
└── README.md
```

## Cómo verlo

Abre `index.html` directamente en el navegador, o levanta un servidor local:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Luego entra a <http://localhost:8000>.

## Secciones

| Sección | Ancla | Contenido |
|---|---|---|
| Hero | `#top` | Propuesta de valor, CTAs y mockup de la interfaz del POS |
| Estadísticas | — | Cifras con animación de conteo |
| Funciones | `#funciones` | 6 capacidades del producto |
| Cómo funciona | `#como-funciona` | 3 pasos de onboarding + compatibilidad de hardware |
| Precios | `#precios` | 3 planes con cambio mensual / anual (−20%) |
| Clientes | `#clientes` | Testimonios |
| FAQ | `#faq` | 6 preguntas en acordeón |
| CTA final | `#demo` | Captura de correo para la prueba gratis |

## Sistema de diseño

Los tokens viven en `:root` dentro de `styles.css`.

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#08090f` | Fondo base |
| `--bg-alt` | `#0c0e17` | Secciones alternas |
| `--violet` | `#7c5cff` | Color primario de marca |
| `--cyan` | `#23d5c8` | Acento secundario |
| `--grad` | violeta → cian | Botones, títulos destacados, cifras |
| `--radius` / `--radius-lg` | `16px` / `24px` | Radios de tarjetas |
| `--maxw` | `1180px` | Ancho del contenedor |

Tipografías: **Plus Jakarta Sans** (texto) y **JetBrains Mono** (cifras y montos), desde Google Fonts.

## Personalización rápida

- **Colores de marca:** cambia `--violet`, `--cyan` y `--grad` en `styles.css`.
- **Precios:** edita los atributos `data-monthly` y `data-annual` en cada `.plan-price b` de `index.html`. El botón mensual/anual lee esos valores.
- **Contadores:** los atributos `data-count` y `data-suffix` en la sección de estadísticas.
- **Textos y planes:** todo el contenido está en `index.html`, sin plantillas ni JS.

## Conectar el formulario

El formulario del CTA final valida en el cliente y muestra un mensaje de demostración.
Para conectarlo a tu backend, sustituye el bloque marcado en `script.js`:

```js
// Aquí conectarías tu backend o servicio de registro.
```

por tu llamada real, por ejemplo:

```js
fetch('/api/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: value })
});
```

## Accesibilidad y rendimiento

- HTML semántico con landmarks, `skip link` y estados `aria-*` en menú, acordeón y toggle de precios.
- Foco visible en todos los elementos interactivos.
- Respeta `prefers-reduced-motion`: desactiva animaciones y conteos.
- Sin frameworks ni librerías externas — solo dos hojas de fuentes.

## Publicar

Al ser un sitio estático, funciona tal cual en Netlify, Vercel, Cloudflare Pages o GitHub Pages: sube la carpeta y listo.
