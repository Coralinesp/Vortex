/* Guías reales del sistema, con capturas del producto en uso -- no son texto de relleno.
   Cada una corresponde a un módulo real de Vortex. */
export const GUIDES = [
  {
    slug: 'primeros-pasos',
    tag: 'GUÍA',
    category: 'Primeros pasos',
    title: 'Tu primer día en Vortex: el panel de Inicio',
    summary:
      'Apenas entras, el Dashboard te resume cómo va el negocio hoy: ventas, inventario, clientes y devoluciones, sin tener que ir módulo por módulo.',
    image: '/assets/guia-dashboard.png',
    imageAlt: 'Panel de Inicio de Vortex con las tarjetas de Total Ventas, Valor de Inventario, Clientes y Devoluciones',
    sections: [
      {
        heading: 'Qué vas a ver al entrar',
        body: 'El Inicio muestra cuatro números clave del día: el total vendido, el valor de todo tu inventario, cuántos clientes nuevos entraron y cuánto llevas en devoluciones. Debajo, un objetivo de ventas con tu progreso, el resumen de ventas de la semana y los productos que más se están moviendo.',
      },
      {
        heading: 'Primeros pasos recomendados',
        list: [
          'Carga tu catálogo (a mano o importando un Excel) desde Inventario.',
          'Configura tu secuencia de NCF en Mi Empresa → Secuencias NCF antes de tu primera venta.',
          'Abre tu caja desde Ventas → Cuadre de Caja.',
          'Haz tu primera venta de prueba desde Ventas.',
        ],
      },
    ],
  },
  {
    slug: 'ventas-y-cobro',
    tag: 'GUÍA',
    category: 'Ventas y cobro',
    title: 'Cómo se cobra en Vortex, paso a paso',
    summary:
      'La pantalla de Ventas es donde va a vivir tu cajero la mayor parte del día: buscar el producto, agregarlo y cobrar, todo en la misma vista.',
    image: '/assets/guia-ventas.png',
    imageAlt: 'Pantalla de Ventas (POS) de Vortex con el catálogo de productos a la izquierda y la factura de venta a la derecha',
    sections: [
      {
        heading: 'Armar la venta',
        body: 'Busca el producto por nombre o escanea su código de barras (F2 activa el lector), o navega por categoría con los chips de arriba. Cada tarjeta muestra el precio y el stock disponible antes de agregarlo.',
      },
      {
        heading: 'Cerrar la venta',
        list: [
          'El tipo de comprobante (NCF) se asigna solo, según la secuencia activa de la sucursal.',
          'Agrega la información del cliente si la venta lo requiere.',
          'El sistema calcula subtotal, ITBIS y total automáticamente.',
          'Presiona Procesar (o F4) para completar el cobro.',
        ],
      },
      {
        heading: 'El resto del ciclo de venta',
        body: 'Registro de Ventas te deja consultar cualquier venta anterior; Devoluciones abre una devolución total o parcial desde la factura original; y Cuadre de Caja lleva el control de cuánto debería haber en caja durante tu turno, hasta que la cierras.',
      },
    ],
  },
  {
    slug: 'inventario',
    tag: 'GUÍA',
    category: 'Inventario',
    title: 'Gestión de inventario: qué controla Vortex por ti',
    summary:
      'Cada venta descuenta el stock al instante. El módulo de Inventario te dice qué tienes, qué se está agotando y qué es lo que más se vende.',
    image: '/assets/guia-inventario.png',
    imageAlt: 'Pantalla de Gestión de Inventario de Vortex con productos agotados, bajos en stock y la tabla de productos',
    sections: [
      {
        heading: 'Lo que ves de un vistazo',
        body: 'Tres números arriba de todo: cuántos productos tienes en catálogo, cuántos están agotados y cuántos están por debajo de su mínimo. Justo debajo, los productos más vendidos con unidades y total facturado.',
      },
      {
        heading: 'Cargar tu catálogo',
        list: [
          'Importa todo tu catálogo de una vez desde un archivo de Excel.',
          '¿Vienes de otro sistema? Usa "Migrar catálogo" en vez de capturarlo a mano.',
          'Cada producto guarda precio, costo, stock y categoría en la misma fila.',
        ],
      },
      {
        heading: 'Los submódulos de Inventario',
        body: 'Categorías organiza tu catálogo; Kardex lleva el historial de entradas, salidas y ajustes de cada producto; Compras registra lo que le compras a tus proveedores; Proveedores es tu directorio de suplidores; y Promociones te deja armar descuentos por producto o categoría.',
      },
    ],
  },
  {
    slug: 'facturacion',
    tag: 'GUÍA',
    category: 'Facturación',
    title: 'Comprobantes fiscales (NCF): cómo configurarlos',
    summary:
      'Antes de tu primera venta necesitas una secuencia de NCF activa. Así es como Vortex la administra por sucursal.',
    image: '/assets/guia-facturacion.png',
    imageAlt: 'Pantalla de Secuencias NCF de Vortex mostrando el rango autorizado, el próximo número y la fecha de vencimiento',
    sections: [
      {
        heading: 'Qué es una secuencia NCF',
        body: 'Es el rango de comprobantes fiscales que la DGII te autorizó para un tipo de venta (por ejemplo, Consumo B02) en una sucursal específica. Sin una secuencia activa, esa sucursal no puede completar ventas de ese tipo.',
      },
      {
        heading: 'Qué controla la pantalla',
        list: [
          'El rango autorizado (del número inicial al final).',
          'El próximo comprobante que se va a emitir.',
          'La fecha de vencimiento de la secuencia.',
          'Su estado: activa, por vencer o agotada.',
        ],
      },
      {
        heading: 'En la venta',
        body: 'No tienes que hacer nada manual al cobrar: el sistema toma el próximo NCF de la secuencia activa de esa sucursal y lo asigna a la factura automáticamente.',
      },
    ],
  },
  {
    slug: 'sucursales-y-usuarios',
    tag: 'GUÍA',
    category: 'Sucursales y usuarios',
    title: 'Administrar sucursales, usuarios y terminales',
    summary:
      'Todo lo que es "de la empresa" y no de una venta puntual vive en Mi Empresa: tus locales, tu equipo y sus permisos.',
    image: '/assets/guia-sucursales.png',
    imageAlt: 'Listado de sucursales de Vortex con código, tipo, responsable y estado de cada una',
    sections: [
      {
        heading: 'Sucursales',
        body: 'Cada sucursal tiene su propio código, un responsable asignado y puede activarse o desactivarse sin perder su historial. La primera que creas queda marcada como Principal.',
      },
      {
        heading: 'El resto de Mi Empresa',
        list: [
          'Objetivos de Venta: metas mensuales por sucursal.',
          'Usuarios y Roles: quién entra al sistema y qué puede hacer cada quien.',
          'Terminales: los puntos de cobro configurados dentro de cada sucursal.',
          'Métodos de Pago, Cuentas por Cobrar y Cuentas por Pagar: el resto de la administración financiera de la empresa.',
        ],
      },
    ],
  },
  {
    slug: 'cuenta-y-suscripcion',
    tag: 'GUÍA',
    category: 'Cuenta y suscripción',
    title: 'Tu perfil y tu plan de suscripción',
    summary: 'Desde Mi perfil manejas tus datos, tu contraseña y el plan que tiene contratado tu empresa.',
    image: '/assets/guia-suscripcion.png',
    imageAlt: 'Tarjeta de plan de suscripción en Vortex mostrando el plan Empresarial y el botón para cambiar de plan',
    sections: [
      {
        heading: 'Qué puedes hacer desde tu perfil',
        list: [
          'Actualizar tu nombre y correo.',
          'Cambiar tu contraseña (mínimo 8 caracteres, con mayúscula, minúscula, número y símbolo).',
          'Ver tu plan actual y su costo mensual.',
          'Cambiar de plan o cancelar la suscripción cuando quieras, sin penalización.',
        ],
      },
      {
        heading: 'Cambiar de plan',
        body: 'Los planes son acumulativos: al subir de plan no pierdes ninguna función, solo se agregan las nuevas. El botón "Cambiar plan" te lleva directo al checkout del nuevo plan.',
      },
    ],
  },
  {
    slug: 'reportes',
    tag: 'GUÍA',
    category: 'Reportes',
    title: 'Los reportes que trae Vortex por defecto',
    summary: 'Un panel por área del negocio, con acceso directo para imprimir o exportar cualquier reporte a Excel.',
    image: '/assets/guia-reportes.png',
    imageAlt: 'Panel de Reportes de Vortex con las pestañas de Ventas, Finanzas, Inventario, Compras y Clientes',
    sections: [
      {
        heading: 'Cinco áreas, una pantalla',
        body: 'Reportes está organizado en pestañas: Ventas, Finanzas, Inventario, Compras y Clientes. Cada una trae sus propios totales, un gráfico de resumen y la lista de reportes específicos de esa área.',
      },
      {
        heading: 'Reportes de Ventas incluidos',
        list: [
          'Ventas Mensuales, comparadas contra el año anterior.',
          'Ventas por Cajero y Rendimiento de Cajeros.',
          'Ventas por Sucursal y Ventas por Empresa (vista consolidada).',
          'Ventas por Categoría de producto.',
        ],
      },
      {
        heading: 'Exportar',
        body: 'Cualquier reporte se puede mandar a imprimir o exportar a Excel directo desde la esquina superior derecha del panel.',
      },
    ],
  },
  {
    slug: 'clientes',
    tag: 'GUÍA',
    category: 'Clientes',
    title: 'Ficha de clientes: qué guarda Vortex de cada uno',
    summary: 'Cada compra queda asociada a la ficha del cliente, para que sepas quién te compra y cuánto.',
    image: '/assets/guia-clientes.png',
    imageAlt: 'Tarjetas de estadísticas del módulo de Clientes de Vortex: total de clientes, clientes activos y recurrentes',
    sections: [
      {
        heading: 'Qué mide esta pantalla',
        list: [
          'Total de clientes registrados.',
          'Clientes activos (con al menos una compra reciente).',
          'Clientes recurrentes (los que vuelven a comprar).',
        ],
      },
      {
        heading: 'La ficha de cada cliente',
        body: 'Guarda nombre, RNC o cédula, correo, teléfono y el total acumulado de sus compras. Desde ahí puedes exportar el listado completo o buscar un cliente puntual por cualquiera de esos datos.',
      },
    ],
  },
];

export function getGuideBySlug(slug) {
  return GUIDES.find((g) => g.slug === slug);
}
