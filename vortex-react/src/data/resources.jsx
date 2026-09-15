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
    title: 'Ajusta tu inventario sin parar de vender',
    ctaLabel: 'Leer la guía',
    to: '/documentacion/inventario',
  },
  {
    tipo: 'guia',
    bg: 'linear-gradient(160deg,#1d2668,#141b45)',
    fg: '#fff',
    title: 'Configura tus secuencias de NCF en 5 minutos',
    ctaLabel: 'Leer la guía',
    slug: 'facturacion',
  },
  {
    tipo: 'plantilla',
    bg: 'linear-gradient(160deg,#fdeff6,#f7dfec)',
    fg: '#1a2340',
    title: 'Catálogo listo para importar a Vortex',
    ctaLabel: 'Descargar plantilla',
    href: '/assets/plantillas/catalogo-vortex-plantilla.csv',
    download: true,
  },
];

export const RESOURCE_TABS = [
  { tipo: 'todos', label: 'Todos' },
  { tipo: 'guia', label: 'Guías' },
  { tipo: 'plantilla', label: 'Plantillas' },
  { tipo: 'articulo', label: 'Artículos' },
];

export const RESOURCE_ITEMS = [
  { tipo: 'guia', bg: '#4459E1', fg: '#fff', title: 'Ajustes de inventario, paso a paso', to: '/documentacion/inventario' },
  { tipo: 'guia', bg: '#2A3CBD', fg: '#fff', title: 'Cómo fijar precios por sucursal', to: '/documentacion/inventario' },
  { tipo: 'guia', bg: '#1d2668', fg: '#fff', title: 'Tu primera venta en Vortex', slug: 'ventas-y-cobro' },
  { tipo: 'guia', bg: '#586de8', fg: '#fff', title: 'Cómo hacer una devolución', slug: 'ventas-y-cobro' },
  {
    tipo: 'plantilla',
    bg: '#fdeff6',
    fg: '#1a2340',
    title: 'Catálogo para importar en CSV',
    href: '/assets/plantillas/catalogo-vortex-plantilla.csv',
    download: true,
  },
  { tipo: 'articulo', bg: '#eef1ff', fg: '#1a2340', title: 'Cómo escanear productos por código de barras', to: '/documentacion/ventas-y-cobro' },
  { tipo: 'articulo', bg: '#f1f2f5', fg: '#1a2340', title: 'Qué mirar en tu reporte de utilidad', slug: 'reportes' },
  { tipo: 'articulo', bg: '#e7ecfb', fg: '#1a2340', title: 'Cuándo conviene abrir otra sucursal', slug: 'sucursales-y-usuarios' },
];

export const TOPICS = [
  {
    title: 'Primeros pasos',
    description: 'Crear la cuenta, importar el catálogo y abrir tu primera caja.',
    slug: 'primeros-pasos',
    count: 'Guía completa',
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
    slug: 'ventas-y-cobro',
    count: 'Guía completa',
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
    slug: 'inventario',
    count: 'Guía completa',
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
    slug: 'facturacion',
    count: 'Guía completa',
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
    slug: 'sucursales-y-usuarios',
    count: 'Guía completa',
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
    slug: 'cuenta-y-suscripcion',
    count: 'Guía completa',
    delay: '.12s',
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M9.6 9.4a2.5 2.5 0 1 1 3.4 2.3c-.6.3-1 .8-1 1.5M12 16.6h.01" />
      </>
    ),
  },
  {
    title: 'Reportes',
    description: 'Ventas, finanzas, inventario y compras, listos para exportar.',
    slug: 'reportes',
    count: 'Guía completa',
    delay: '.04s',
    icon: (
      <>
        <path d="M4 20V10M12 20V4M20 20v-7" />
      </>
    ),
  },
  {
    title: 'Clientes',
    description: 'La ficha de cada cliente y su historial de compras.',
    slug: 'clientes',
    count: 'Guía completa',
    delay: '.08s',
    icon: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 20v-1.2A4.8 4.8 0 0 1 8.3 14h1.4a4.8 4.8 0 0 1 4.8 4.8V20" />
        <path d="M15.5 5.3a3.2 3.2 0 0 1 0 6M17 14a4.8 4.8 0 0 1 3.5 4.6V20" />
      </>
    ),
  },
];
