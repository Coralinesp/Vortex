/* Videos de la documentación. Cada módulo irá sumando los suyos con el tiempo
   -- por ahora solo cubrimos los que ya están grabados. "moduleSlug: null" es
   contenido general, no ligado a un módulo específico (ej. bienvenida). */

export const DOC_VIDEOS = [
  {
    moduleSlug: null,
    title: 'Bienvenida a Vortex',
    description: 'Un primer vistazo general al sistema antes de entrar en cada módulo.',
    src: '/assets/docs/videos/bienvenida.mp4',
  },
  {
    moduleSlug: 'registro-y-acceso',
    title: 'Regístrate y crea tu empresa',
    description: 'De cero a tener tu cuenta, tu empresa y tu plan activo.',
    src: '/assets/docs/videos/registro.mp4',
  },
  {
    moduleSlug: 'perfil',
    title: 'Planes y suscripción',
    description: 'Cómo consultar y cambiar el plan contratado de tu empresa.',
    src: '/assets/docs/videos/planes.mp4',
  },
  {
    moduleSlug: 'inventario',
    title: 'Categorías de inventario',
    description: 'Organiza tu catálogo agrupando productos por categoría.',
    src: '/assets/docs/videos/inventario-categorias.mp4',
  },
  {
    moduleSlug: 'inventario',
    title: 'Arma una receta (producto complejo)',
    description: 'Combos y platos preparados que descuentan varios insumos a la vez.',
    src: '/assets/docs/videos/receta.mp4',
  },
  {
    moduleSlug: 'ventas-y-cobro',
    title: 'Cuadre de caja',
    description: 'Abre y cierra el turno de caja con el cuadre automático.',
    src: '/assets/docs/videos/cuadre-de-caja.mp4',
  },
  {
    moduleSlug: 'ventas-y-cobro',
    title: 'Registro de ventas y devoluciones',
    description: 'Consulta el historial de ventas y procesa una devolución.',
    src: '/assets/docs/videos/registro-ventas-devoluciones.mp4',
  },
  {
    moduleSlug: 'clientes',
    title: 'Gestiona tus clientes',
    description: 'Crea clientes y consulta su ficha e historial de compras.',
    src: '/assets/docs/videos/clientes.mp4',
  },
];

export function getVideosByModule(slug) {
  return DOC_VIDEOS.filter((v) => v.moduleSlug === slug);
}
