export const RESOURCE_ICONS = {
  guia: (
    <>
      <path d="M24 20h44l28 28v52a6 6 0 0 1-6 6H24a6 6 0 0 1-6-6V26a6 6 0 0 1 6-6Z" />
      <path d="M68 20v28h28M34 62h52M34 78h52M34 94h32" />
    </>
  ),
  video: (
    <>
      <circle cx="60" cy="60" r="42" />
      <path d="M50 42v36l30-18-30-18Z" strokeLinejoin="round" />
    </>
  ),
  plantilla: (
    <>
      <rect x="18" y="24" width="84" height="72" rx="6" />
      <path d="M18 46h84M46 46v50M74 46v50M18 71h84" />
    </>
  ),
  articulo: (
    <>
      <rect x="18" y="26" width="70" height="68" rx="6" />
      <path d="M88 44h10a6 6 0 0 1 6 6v38a6 6 0 0 1-6 6h-6" />
      <path d="M32 44h42M32 60h42M32 76h26" />
    </>
  ),
};

export const RESOURCE_TAGS = {
  guia: 'GUÍA',
  video: 'VIDEO',
  plantilla: 'PLANTILLA',
  articulo: 'ARTÍCULO',
};

export const FEATURED_RESOURCES = [
  {
    tipo: 'guia',
    bg: 'linear-gradient(160deg,#4459E1,#2A3CBD)',
    fg: '#fff',
    title: 'Cómo hacer un conteo cíclico sin cerrar la tienda',
    ctaLabel: 'Leer la guía',
  },
  {
    tipo: 'video',
    bg: 'linear-gradient(160deg,#1d2668,#141b45)',
    fg: '#fff',
    title: 'Configura tus secuencias de NCF en 5 minutos',
    ctaLabel: 'Ver el video',
  },
  {
    tipo: 'plantilla',
    bg: 'linear-gradient(160deg,#fdeff6,#f7dfec)',
    fg: '#1a2340',
    title: 'Catálogo listo para importar a Vortex',
    ctaLabel: 'Descargar plantilla',
  },
];

export const RESOURCE_TABS = [
  { tipo: 'todos', label: 'Todos' },
  { tipo: 'guia', label: 'Guías' },
  { tipo: 'video', label: 'Videos' },
  { tipo: 'plantilla', label: 'Plantillas' },
  { tipo: 'articulo', label: 'Artículos' },
];

export const RESOURCE_ITEMS = [
  { tipo: 'guia', bg: '#4459E1', fg: '#fff', title: 'Conteo cíclico sin cerrar la tienda' },
  { tipo: 'guia', bg: '#2A3CBD', fg: '#fff', title: 'Cómo fijar precios por sucursal' },
  { tipo: 'video', bg: '#1d2668', fg: '#fff', title: 'Tu primera venta en Vortex' },
  { tipo: 'video', bg: '#586de8', fg: '#fff', title: 'Devoluciones y notas de crédito' },
  { tipo: 'plantilla', bg: '#fdeff6', fg: '#1a2340', title: 'Catálogo para importar en CSV' },
  { tipo: 'plantilla', bg: '#eef1ff', fg: '#1a2340', title: 'Etiquetas de código de barras' },
  { tipo: 'articulo', bg: '#f1f2f5', fg: '#1a2340', title: 'Qué mirar en tu reporte de utilidad' },
  { tipo: 'articulo', bg: '#e7ecfb', fg: '#1a2340', title: 'Cuándo conviene abrir otra sucursal' },
];

export const TOPICS = [
  {
    title: 'Primeros pasos',
    description: 'Crear la cuenta, importar el catálogo y abrir tu primera caja.',
    count: '12 artículos',
    icon: (
      <>
        <path d="M12 3.5 4 7v10l8 3.5 8-3.5V7l-8-3.5Z" />
        <path d="M4 7l8 3.5L20 7M12 10.5V21" />
      </>
    ),
  },
  {
    title: 'Ventas y cobro',
    description: 'Métodos de pago, devoluciones, descuentos y cortes de caja.',
    count: '18 artículos',
    delay: '.04s',
    icon: (
      <>
        <path d="M3 6h2l2.2 9.5h10L20 9H6.2" />
        <circle cx="9" cy="19" r="1.4" />
        <circle cx="17" cy="19" r="1.4" />
      </>
    ),
  },
  {
    title: 'Inventario',
    description: 'Variantes, existencias, traspasos, proveedores y conteos.',
    count: '21 artículos',
    delay: '.08s',
    icon: (
      <>
        <rect x="3.5" y="7" width="17" height="13" rx="2" />
        <path d="M3.5 11h17M8 7V4h8v3" />
      </>
    ),
  },
  {
    title: 'Facturación',
    description: 'Comprobantes electrónicos, secuencias de NCF y envío al cliente.',
    count: '9 artículos',
    delay: '.04s',
    icon: (
      <>
        <path d="M14 2.5H6.5A1.5 1.5 0 0 0 5 4v16a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 20V7.5L14 2.5Z" />
        <path d="M13.8 2.8v4.4h4.6M8.5 12h7M8.5 16h4.5" />
      </>
    ),
  },
  {
    title: 'Sucursales y usuarios',
    description: 'Abrir una tienda nueva, permisos por rol y precios por sucursal.',
    count: '14 artículos',
    delay: '.08s',
    icon: (
      <>
        <path d="M4 20V9.5L12 4l8 5.5V20" />
        <path d="M9.5 20v-5.5h5V20M4 20h16" />
      </>
    ),
  },
  {
    title: 'Cuenta y suscripción',
    description: 'Cambiar de plan, métodos de pago y datos de tu empresa.',
    count: '7 artículos',
    delay: '.12s',
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M9.6 9.4a2.5 2.5 0 1 1 3.4 2.3c-.6.3-1 .8-1 1.5M12 16.6h.01" />
      </>
    ),
  },
];
