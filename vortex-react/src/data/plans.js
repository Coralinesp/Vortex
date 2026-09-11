export const PLANS = [
  {
    key: 'basico',
    suscripcionId: 1,
    tag: null,
    price: { cur: 'RD$', amount: '7,000', per: '/mes' },
    name: 'Básico',
    description:
      'Ideal para un negocio que está empezando y necesita facturar, controlar su inventario y llevar el registro de sus clientes.',
    includesHeading: 'El plan incluye:',
    features: ['Ventas', 'Inventario básico', 'Clientes', 'Caja', 'Devoluciones', 'Impuestos', 'Reportes básicos', 'Hasta 2 usuarios', '1 sucursal'],
    ctaLabel: 'Empezar ahora',
    ctaHash: '#registro',
    ctaVariant: 'dark',
    delay: '0s',
    popular: false,
  },
  {
    key: 'profesional',
    suscripcionId: 2,
    tag: 'Más elegido',
    price: { cur: 'RD$', amount: '14,000', per: '/mes' },
    name: 'Profesional',
    description:
      'Ideal para un negocio en crecimiento que ya maneja proveedores, varias sucursales y necesita un mayor control de su equipo de trabajo.',
    includesHeading: 'Todo lo del Plan Básico, y además:',
    features: ['Compras', 'Kardex avanzado', 'Promociones', 'Pagos mixtos', 'Roles personalizados', 'Hasta 3 sucursales', '10 usuarios por sucursal'],
    ctaLabel: 'Empezar ahora',
    ctaHash: '#registro',
    ctaVariant: 'light',
    delay: '.6s',
    popular: true,
  },
  {
    key: 'empresarial',
    tag: null,
    priceQuote: true,
    name: 'Empresarial',
    description:
      'Ideal para una empresa consolidada, con varias sucursales, ventas a crédito y necesidad de análisis avanzado del negocio.',
    includesHeading: 'Todo lo del Plan Profesional, y además:',
    features: ['Crédito', 'Fidelización', 'Reportes avanzados', 'Sucursales ilimitadas', '20 usuarios por sucursal'],
    ctaLabel: 'Solicitar cotización',
    ctaTo: '/contacto',
    ctaVariant: 'dark',
    delay: '.12s',
    popular: false,
  },
];

/* Comparativa función por función. status: 'yes' | 'no' | valores concretos
   (usuarios/sucursales) por plan, en el mismo orden que PLANS. */
export const COMPARISON_GROUPS = [
  {
    title: 'Ventas y cobro',
    rows: [
      { label: 'Ventas', values: ['yes', 'yes', 'yes'] },
      { label: 'Caja', values: ['yes', 'yes', 'yes'] },
      { label: 'Devoluciones', values: ['yes', 'yes', 'yes'] },
      { label: 'Impuestos', values: ['yes', 'yes', 'yes'] },
      { label: 'Pagos mixtos', values: ['no', 'yes', 'yes'] },
      { label: 'Promociones', values: ['no', 'yes', 'yes'] },
    ],
  },
  {
    title: 'Inventario',
    rows: [
      { label: 'Inventario básico', values: ['yes', 'yes', 'yes'] },
      { label: 'Compras', values: ['no', 'yes', 'yes'] },
      { label: 'Kardex avanzado', values: ['no', 'yes', 'yes'] },
    ],
  },
  {
    title: 'Clientes',
    rows: [
      { label: 'Clientes', values: ['yes', 'yes', 'yes'] },
      { label: 'Crédito', values: ['no', 'no', 'yes'] },
      { label: 'Fidelización', values: ['no', 'no', 'yes'] },
    ],
  },
  {
    title: 'Reportes',
    rows: [
      { label: 'Reportes básicos', values: ['yes', 'yes', 'yes'] },
      { label: 'Reportes avanzados', values: ['no', 'no', 'yes'] },
    ],
  },
  {
    title: 'Administración',
    rows: [
      { label: 'Roles personalizados', values: ['no', 'yes', 'yes'] },
      { label: 'Usuarios por sucursal', values: ['Hasta 2', '10', '20'] },
      { label: 'Sucursales', values: ['1', 'Hasta 3', 'Ilimitadas'] },
    ],
  },
];

export const COMPARISON_COLUMNS = [
  { name: 'Básico', price: 'RD$7,000/mes', popular: false },
  { name: 'Profesional', price: 'RD$14,000/mes', popular: true },
  { name: 'Empresarial', price: 'A cotizar', popular: false },
];
