/* Documentación paso a paso de Vortex, de cara al cliente final (dueños de
   negocio y cajeros) -- no es referencia técnica. Cada módulo es una página
   en /documentacion/:slug con secciones y pasos numerados; cada paso trae su
   propia captura real del sistema. Los nombres de archivo de "image" deben
   coincidir exactamente con los definidos en CAPTURAS-DOCUMENTACION.md. */

export const DOC_MODULES = [
  {
    slug: 'registro-y-acceso',
    order: 1,
    title: 'Crear tu cuenta y tu empresa',
    summary:
      'El registro te lleva de cero a tener tu empresa, tu usuario administrador y un plan activo en cuatro pasos, sin necesitar ayuda de nadie.',
    icon: (
      <>
        <path d="M12 3.5 4 7v10l8 3.5 8-3.5V7l-8-3.5Z" />
        <path d="M4 7l8 3.5L20 7M12 10.5V21" />
      </>
    ),
    sections: [
      {
        heading: 'Regístrate en minutos',
        steps: [
          {
            title: 'Datos de tu empresa',
            body: 'Empieza con el nombre de tu negocio, un teléfono de contacto y tu RNC o cédula. Con esto Vortex crea tu empresa y una primera sucursal ("Casa Matriz") lista para configurar.',
            image: '/assets/docs/registro-y-acceso/01-datos-empresa.png',
            imageAlt: 'Paso 1 del registro de Vortex: formulario con los datos de la empresa',
          },
          {
            title: 'Tu usuario administrador',
            body: 'Luego creas tu propio usuario: nombre, correo y una contraseña. Este usuario queda con el rol de Administrador, con acceso a todo el sistema desde el primer momento.',
            image: '/assets/docs/registro-y-acceso/02-usuario-administrador.png',
            imageAlt: 'Paso 2 del registro de Vortex: formulario del usuario administrador',
          },
          {
            title: 'Elige tu plan',
            body: 'Escoge el plan que mejor se ajusta a tu negocio. Los planes son acumulativos: si más adelante subes de plan, no pierdes nada de lo que ya tenías.',
            image: '/assets/docs/registro-y-acceso/03-elegir-plan.png',
            imageAlt: 'Paso 3 del registro de Vortex: selección de plan de suscripción',
          },
          {
            title: 'Método de pago',
            body: 'Completa el pago con tarjeta o PayPal. Tu primer mes de uso corre con un período de gracia, así que puedes empezar a trabajar de inmediato mientras se confirma.',
            image: '/assets/docs/registro-y-acceso/04-metodo-pago.png',
            imageAlt: 'Paso 4 del registro de Vortex: selección del método de pago',
          },
        ],
      },
      {
        heading: 'Verifica tu correo y entra por primera vez',
        steps: [
          {
            title: 'Confirma tu correo',
            body: 'Te enviamos un correo de verificación. Confírmalo para activar tu cuenta por completo.',
            image: '/assets/docs/registro-y-acceso/05-verificar-correo.png',
            imageAlt: 'Pantalla de verificación de correo de Vortex',
          },
          {
            title: '¡Tu empresa está lista!',
            body: 'Al terminar ves una pantalla de confirmación. Desde ahí puedes ir directo a iniciar sesión.',
            image: '/assets/docs/registro-y-acceso/06-registro-exitoso.png',
            imageAlt: 'Pantalla de registro exitoso de Vortex',
          },
          {
            title: 'Primer inicio de sesión',
            body: 'En caso de pedir cambiar la contraseña que elegiste durante el registro, Puedes acudir a cambiarla.',
            image: '/assets/docs/registro-y-acceso/07-cambiar-contrasena.png',
            imageAlt: 'Pantalla de cambio de contraseña obligatorio en el primer inicio de sesión',
          },
        ],
      },
    ],
  },
  {
    slug: 'panel-de-inicio',
    order: 2,
    title: 'Panel de Inicio',
    summary:
      'El Inicio te resume cómo va tu negocio hoy —ventas, inventario, clientes y devoluciones— sin tener que entrar módulo por módulo.',
    icon: (
      <>
        <path d="M4 11.5 12 4l8 7.5" />
        <path d="M6 10v9h5v-5h2v5h5v-9" />
      </>
    ),
    sections: [
      {
        heading: 'Tu negocio, de un vistazo',
        steps: [
          {
            title: 'Cuatro números clave del día',
            body: 'Arriba de todo ves el total vendido hoy, el valor de todo tu inventario, cuántos clientes nuevos entraron y cuánto llevas en devoluciones.',
            image: '/assets/docs/panel-de-inicio/01-tarjetas-kpi.png',
            imageAlt: 'Tarjetas de KPI del panel de Inicio: Total Ventas, Valor de Inventario, Clientes y Devoluciones',
          },
          {
            title: 'Tu meta de ventas',
            body: 'Debajo de las tarjetas ves cuánto te falta para cumplir la meta de ventas del mes de tu sucursal, con una barra de progreso.',
            image: '/assets/docs/panel-de-inicio/02-meta-de-ventas.png',
            imageAlt: 'Barra de progreso de la meta de ventas mensual en el panel de Inicio',
          },
          {
            title: 'Ventas de la semana',
            body: 'Un gráfico te muestra cómo se han comportado tus ventas día por día durante la semana.',
            image: '/assets/docs/panel-de-inicio/03-grafico-ventas.png',
            imageAlt: 'Gráfico de ventas de la semana en el panel de Inicio',
          },
          {
            title: 'Lo que más se vende',
            body: 'La lista de productos más vendidos te dice qué se está moviendo, para que nunca te quedes sin stock de lo que más pide tu cliente.',
            image: '/assets/docs/panel-de-inicio/04-productos-mas-vendidos.png',
            imageAlt: 'Lista de productos más vendidos en el panel de Inicio',
          },
        ],
      },
    ],
  },
  {
    slug: 'mi-empresa',
    order: 3,
    title: 'Mi Empresa',
    summary:
      'Todo lo que es "de la empresa" y no de una venta puntual vive aquí: tus sucursales, tu equipo, sus permisos y tus comprobantes fiscales.',
    icon: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="1.5" />
        <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
      </>
    ),
    sections: [
      {
        heading: 'Tu empresa y tus sucursales',
        steps: [
          {
            title: 'Resumen de Mi Empresa',
            body: 'Desde el selector de empresa/sucursal en la parte superior entras a "Mi Empresa", donde ves los datos generales de tu negocio.',
            image: '/assets/docs/mi-empresa/01-resumen-empresa.png',
            imageAlt: 'Pantalla de resumen de Mi Empresa en Vortex',
          },
          {
            title: 'Tus sucursales',
            body: 'Aquí ves todas tus sucursales, cada una con su propio código y un responsable asignado. La primera que se crea al registrarte queda marcada como Principal y no se puede eliminar.',
            image: '/assets/docs/mi-empresa/02-listado-sucursales.png',
            imageAlt: 'Listado de sucursales de Vortex con código, tipo, responsable y estado',
          },
          {
            title: 'Crear o editar una sucursal',
            body: 'Completa el nombre, la dirección real, el horario y si esta sucursal maneja su propio inventario. Puedes activarla o desactivarla más adelante sin perder su historial.',
            image: '/assets/docs/mi-empresa/03-crear-sucursal.png',
            imageAlt: 'Formulario para crear una nueva sucursal en Vortex',
          },
        ],
      },
      {
        heading: 'Usuarios, roles y accesos',
        steps: [
          {
            title: 'Roles de tu equipo',
            body: 'Un rol agrupa lo que una persona puede hacer en el sistema (por ejemplo "Cajero" o "Supervisor"). Tu empresa ya viene con el rol Administrador, con acceso a todo.',
            image: '/assets/docs/mi-empresa/04-listado-roles.png',
            imageAlt: 'Listado de roles en Vortex',
          },
          {
            title: 'Crear un rol y sus permisos',
            body: 'Elige qué puede ver y hacer ese rol en cada módulo (por ejemplo, que un cajero solo pueda vender pero no editar precios).',
            image: '/assets/docs/mi-empresa/05-crear-rol-permisos.png',
            imageAlt: 'Formulario para crear un rol y asignar permisos por módulo',
          },
          {
            title: 'Usuarios de tu empresa',
            body: 'Aquí ves a todas las personas que tienen acceso al sistema, con su rol y las sucursales a las que están asignadas.',
            image: '/assets/docs/mi-empresa/06-listado-usuarios.png',
            imageAlt: 'Listado de usuarios de la empresa en Vortex',
          },
          {
            title: 'Crear un usuario',
            body: 'Da de alta a un nuevo empleado con su correo, su rol y la o las sucursales donde va a trabajar. Cada usuario necesita al menos una sucursal asignada.',
            image: '/assets/docs/mi-empresa/07-crear-usuario.png',
            imageAlt: 'Formulario para crear un nuevo usuario en Vortex',
          },
        ],
      },
      {
        heading: 'Terminales y comprobantes fiscales',
        steps: [
          {
            title: 'Terminales de cobro',
            body: 'Registra los puntos de cobro (cajas, tablets, computadoras) que vas a usar dentro de cada sucursal.',
            image: '/assets/docs/mi-empresa/08-terminales.png',
            imageAlt: 'Listado de terminales de cobro en Vortex',
          },
          {
            title: 'Secuencias NCF',
            body: 'Antes de tu primera venta necesitas cargar el rango de comprobantes fiscales (NCF) que la DGII te autorizó para cada sucursal. Sin una secuencia activa, esa sucursal no puede facturar ese tipo de comprobante.',
            image: '/assets/docs/mi-empresa/09-secuencias-ncf.png',
            imageAlt: 'Listado de secuencias NCF con rango autorizado, próximo número y estado',
          },
          {
            title: 'Cargar una secuencia',
            body: 'Ingresa el número inicial, el número final y la fecha de vencimiento que te dio la DGII. A partir de ahí, Vortex asigna el próximo NCF a cada venta automáticamente, sin que tengas que hacer nada manual.',
            image: '/assets/docs/mi-empresa/10-crear-secuencia-ncf.png',
            imageAlt: 'Formulario para cargar una nueva secuencia NCF',
          },
        ],
      },
      {
        heading: 'Métodos de pago',
        steps: [
          {
            title: 'Los métodos de pago que aceptas',
            body: 'Define qué formas de pago puede elegir tu cajero al cobrar: efectivo, tarjeta, transferencia, etc. El efectivo y el crédito se aprueban de inmediato; el resto queda pendiente hasta confirmar el pago.',
            image: '/assets/docs/mi-empresa/11-metodos-pago.png',
            imageAlt: 'Catálogo de métodos de pago configurados en Vortex',
          },
        ],
      },
    ],
  },
  {
    slug: 'inventario',
    order: 4,
    title: 'Inventario',
    summary:
      'Cada venta descuenta el stock al instante. El módulo de Inventario te dice qué tienes, qué se está agotando y qué es lo que más se vende.',
    icon: (
      <>
        <rect x="3.5" y="7" width="17" height="13" rx="2" />
        <path d="M3.5 11h17M8 7V4h8v3" />
      </>
    ),
    sections: [
      {
        heading: 'Tu catálogo de productos',
        steps: [
          {
            title: 'Listado de productos',
            body: 'Arriba ves tres números: cuántos productos tienes en catálogo, cuántos están agotados y cuántos están por debajo de su stock mínimo.',
            image: '/assets/docs/inventario/01-listado-productos.png',
            imageAlt: 'Listado de inventario con productos agotados, bajos en stock y la tabla completa',
          },
          {
            title: 'Crear o editar un producto',
            body: 'Cada producto guarda nombre, categoría, precio, costo, stock y sus umbrales de stock bajo. El precio de venta nunca puede quedar por debajo del costo.',
            image: '/assets/docs/inventario/02-crear-producto.png',
            imageAlt: 'Formulario para crear o editar un producto en Vortex',
          },
          {
            title: 'Importar tu catálogo desde Excel',
            body: '¿Tienes muchos productos? Descarga la plantilla, llénala y súbela para cargar todo tu catálogo de una sola vez.',
            image: '/assets/docs/inventario/03-importar-excel.png',
            imageAlt: 'Pantalla de importación de catálogo desde un archivo Excel',
          },
          {
            title: 'Migrar catálogo entre sucursales',
            body: '¿Abriste una sucursal nueva? En vez de capturar todo a mano, usa "Migrar catálogo" para copiar los productos de otra sucursal (el stock siempre empieza en cero en la nueva).',
            image: '/assets/docs/inventario/04-migrar-catalogo.png',
            imageAlt: 'Pantalla para migrar el catálogo de una sucursal a otra',
          },
        ],
      },
      {
        heading: 'Organiza y promociona',
        steps: [
          {
            title: 'Categorías',
            body: 'Agrupa tus productos por categoría para encontrarlos más rápido al vender y para organizar tus reportes.',
            image: '/assets/docs/inventario/05-categorias.png',
            imageAlt: 'Listado de categorías de productos en Vortex',
          },
          {
            title: 'Crear una promoción',
            body: 'Arma descuentos por producto o por categoría, con fecha de inicio y fin. Ninguna promoción se aplica sola: tu cajero decide activarla en cada línea de la venta.',
            image: '/assets/docs/inventario/06-crear-promocion.png',
            imageAlt: 'Formulario para crear una promoción en Vortex',
          },
        ],
      },
      {
        heading: 'Proveedores y compras',
        steps: [
          {
            title: 'Directorio de proveedores',
            body: 'Guarda los datos de las personas o empresas a las que les compras mercancía.',
            image: '/assets/docs/inventario/07-proveedores.png',
            imageAlt: 'Listado de proveedores en Vortex',
          },
          {
            title: 'Crear una orden de compra',
            body: 'Registra qué le compraste a un proveedor y en qué sucursal. La orden queda "Pendiente" y todavía no mueve tu stock.',
            image: '/assets/docs/inventario/08-crear-compra.png',
            imageAlt: 'Formulario para crear una orden de compra',
          },
          {
            title: 'Recibir una compra',
            body: 'Cuando la mercancía llega físicamente, marca la compra como recibida: ahí es cuando el stock realmente sube y se actualiza el último costo del producto.',
            image: '/assets/docs/inventario/09-recibir-compra.png',
            imageAlt: 'Pantalla para recibir una orden de compra',
          },
        ],
      },
      {
        heading: 'Historial de movimientos',
        steps: [
          {
            title: 'Kardex',
            body: 'El Kardex es el historial completo de entradas, salidas y ajustes de cada producto: una bitácora que te deja auditar por qué tu stock cambió.',
            image: '/assets/docs/inventario/10-kardex.png',
            imageAlt: 'Pantalla de Kardex con el historial de movimientos de inventario',
          },
          {
            title: 'Ajustar el inventario a mano',
            body: 'Si haces un conteo físico y algo no cuadra, puedes corregir el stock de un producto sin necesidad de una compra: un Incremento suma unidades y una Merma las resta (por daño, pérdida o vencimiento). Cada ajuste queda registrado en el Kardex, y una Merma nunca puede dejar el stock en negativo.',
            image: '/assets/docs/inventario/11-ajustes-inventario.png',
            imageAlt: 'Formulario para ajustar el inventario con Incremento o Merma',
          },
        ],
      },
    ],
  },
  {
    slug: 'ventas-y-cobro',
    order: 5,
    title: 'Ventas y cobro',
    summary:
      'La pantalla de Ventas es donde va a vivir tu cajero la mayor parte del día: buscar el producto, agregarlo y cobrar, todo en la misma vista.',
    icon: (
      <>
        <path d="M3 6h2l2.2 9.5h10L20 9H6.2" />
        <circle cx="9" cy="19" r="1.4" />
        <circle cx="17" cy="19" r="1.4" />
      </>
    ),
    sections: [
      {
        heading: 'El punto de venta (POS)',
        steps: [
          {
            title: 'Buscar y agregar productos',
            body: 'Busca por nombre, escanea el código de barras (F2 activa el lector) o navega por categoría. Cada tarjeta muestra el precio y el stock disponible antes de agregarlo al carrito.',
            image: '/assets/docs/ventas-y-cobro/01-buscar-producto.png',
            imageAlt: 'Pantalla de Ventas con el catálogo de productos y buscador',
          },
          {
            title: 'Carrito y cliente',
            body: 'Revisa las líneas agregadas, aplica un descuento general si aplica y, si la venta lo requiere, agrega los datos del cliente.',
            image: '/assets/docs/ventas-y-cobro/02-carrito-cliente.png',
            imageAlt: 'Carrito de venta con selección de cliente en Vortex',
          },
          {
            title: 'Cobrar',
            body: 'El sistema calcula subtotal, ITBIS y total automáticamente, y el NCF se asigna solo según la secuencia activa de la sucursal. Elige el método de pago y presiona Procesar (o F4). Con efectivo o crédito la venta se aprueba al instante; con transferencia u otros métodos queda pendiente hasta confirmar el pago.',
            image: '/assets/docs/ventas-y-cobro/03-pantalla-cobro.png',
            imageAlt: 'Pantalla de cobro de una venta en Vortex',
          },
          {
            title: 'Factura generada',
            body: 'Al completar el cobro se genera la factura con su comprobante fiscal, lista para imprimir o compartir con el cliente.',
            image: '/assets/docs/ventas-y-cobro/04-factura-generada.png',
            imageAlt: 'Factura de venta generada en Vortex',
          },
        ],
      },
      {
        heading: 'Después de la venta',
        steps: [
          {
            title: 'Registro de Ventas',
            body: 'Consulta cualquier venta anterior, filtra por fecha, sucursal o cajero.',
            image: '/assets/docs/ventas-y-cobro/05-registro-ventas.png',
            imageAlt: 'Pantalla de Registro de Ventas con filtros y listado',
          },
          {
            title: 'Detalle de una venta',
            body: 'Abre cualquier venta para ver sus líneas, pagos y el comprobante fiscal asignado.',
            image: '/assets/docs/ventas-y-cobro/06-detalle-venta.png',
            imageAlt: 'Panel de detalle de una venta en Vortex',
          },
          {
            title: 'Hacer una devolución',
            body: 'Busca la factura original y elige qué productos y qué cantidad se devuelven. Se puede devolver de forma parcial, y las devoluciones acumuladas de una línea nunca pueden superar lo que se vendió originalmente en ella.',
            image: '/assets/docs/ventas-y-cobro/07-devolucion.png',
            imageAlt: 'Formulario de devolución parcial de una venta',
          },
        ],
      },
      {
        heading: 'Control de caja',
        steps: [
          {
            title: 'Abrir caja',
            body: 'Antes de la primera venta del día, el cajero abre la caja declarando el monto inicial en efectivo. Solo puede haber una caja abierta a la vez por sucursal.',
            image: '/assets/docs/ventas-y-cobro/08-abrir-caja.png',
            imageAlt: 'Pantalla para abrir la caja al inicio del turno',
          },
          {
            title: 'Cerrar caja (cuadre)',
            body: 'Al terminar el turno, el sistema calcula cuánto efectivo debería haber (monto inicial más las ventas en efectivo del turno) y lo compara contra lo que realmente cuentas, para que veas la diferencia de inmediato.',
            image: '/assets/docs/ventas-y-cobro/09-cerrar-caja.png',
            imageAlt: 'Pantalla de cuadre de caja al cerrar el turno',
          },
        ],
      },
    ],
  },
  {
    slug: 'cotizaciones',
    order: 6,
    title: 'Cotizaciones',
    summary:
      'Antes de cerrar una venta, arma una cotización para que tu cliente apruebe precio y cantidades sin comprometer inventario todavía.',
    icon: (
      <>
        <path d="M6 3h9l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
        <path d="M14 3v5h5M9 12h6M9 16h4" />
      </>
    ),
    sections: [
      {
        heading: 'Cotiza antes de vender',
        steps: [
          {
            title: 'Listado de cotizaciones',
            body: 'Aquí ves todas las cotizaciones que has creado, con su estado: pendiente, rechazada o convertida en venta.',
            image: '/assets/docs/cotizaciones/01-listado-cotizaciones.png',
            imageAlt: 'Listado de cotizaciones en Vortex',
          },
          {
            title: 'Crear una cotización',
            body: 'Agrega los productos y cantidades igual que en una venta, pero sin cobrar todavía. Puedes editarla o rechazarla mientras el cliente decide.',
            image: '/assets/docs/cotizaciones/02-crear-cotizacion.png',
            imageAlt: 'Formulario para crear una cotización en Vortex',
          },
          {
            title: 'Convertir la cotización en venta',
            body: 'Cuando el cliente aprueba, conviertes la cotización directamente en una venta, sin tener que volver a capturar los productos.',
            image: '/assets/docs/cotizaciones/03-convertir-venta.png',
            imageAlt: 'Acción de convertir una cotización en venta',
          },
        ],
      },
    ],
  },
  {
    slug: 'clientes',
    order: 7,
    title: 'Clientes',
    summary: 'Cada compra queda asociada a la ficha del cliente, para que sepas quién te compra y cuánto.',
    icon: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 20v-1.2A4.8 4.8 0 0 1 8.3 14h1.4a4.8 4.8 0 0 1 4.8 4.8V20" />
        <path d="M15.5 5.3a3.2 3.2 0 0 1 0 6M17 14a4.8 4.8 0 0 1 3.5 4.6V20" />
      </>
    ),
    sections: [
      {
        heading: 'Tu cartera de clientes',
        steps: [
          {
            title: 'Listado y estadísticas',
            body: 'Ve de un vistazo el total de clientes registrados, cuántos están activos (con compras recientes) y cuántos son recurrentes.',
            image: '/assets/docs/clientes/01-listado-clientes.png',
            imageAlt: 'Tarjetas de estadísticas y listado del módulo de Clientes',
          },
          {
            title: 'Crear o editar un cliente',
            body: 'Guarda nombre, RNC o cédula, correo y teléfono. Necesitas al menos uno de los dos documentos (RNC o cédula) para registrar un cliente.',
            image: '/assets/docs/clientes/02-crear-cliente.png',
            imageAlt: 'Formulario para crear un cliente en Vortex',
          },
          {
            title: 'Ficha del cliente',
            body: 'Cada ficha muestra el total acumulado de sus compras y su historial, para que sepas quién es tu mejor cliente.',
            image: '/assets/docs/clientes/03-ficha-cliente.png',
            imageAlt: 'Ficha de un cliente con su historial de compras',
          },
        ],
      },
    ],
  },
  {
    slug: 'reportes',
    order: 8,
    title: 'Reportes',
    summary: 'Un panel por área del negocio, con acceso directo para imprimir o exportar cualquier reporte a Excel.',
    icon: (
      <>
        <path d="M4 20V10M12 20V4M20 20v-7" />
      </>
    ),
    sections: [
      {
        heading: 'La información de tu negocio',
        steps: [
          {
            title: 'Panel de reportes',
            body: 'Reportes está organizado en pestañas: Ventas, Finanzas, Inventario, Compras y Clientes. Cada una trae sus propios totales y un gráfico de resumen.',
            image: '/assets/docs/reportes/01-panel-reportes.png',
            imageAlt: 'Panel de Reportes de Vortex con pestañas por área',
          },
          {
            title: 'Cuentas por cobrar',
            body: 'Si vendes a crédito, aquí ves cuánto te deben tus clientes y desde cuándo.',
            image: '/assets/docs/reportes/02-cuentas-por-cobrar.png',
            imageAlt: 'Reporte de cuentas por cobrar en Vortex',
          },
          {
            title: 'Verificación de pagos',
            body: 'Revisa las ventas que quedaron pendientes de pago (transferencias, por ejemplo) y confirma cuáles ya se cobraron.',
            image: '/assets/docs/reportes/03-verificacion-pagos.png',
            imageAlt: 'Reporte de verificación de pagos en Vortex',
          },
          {
            title: 'Exportar un reporte',
            body: 'Cualquier reporte se puede mandar a imprimir o exportar a Excel desde la esquina superior derecha del panel.',
            image: '/assets/docs/reportes/04-exportar-reporte.png',
            imageAlt: 'Botones para exportar o imprimir un reporte',
          },
        ],
      },
    ],
  },
  {
    slug: 'impresoras',
    order: 9,
    title: 'Impresoras',
    summary: 'Configura la impresora de recibos que vas a usar en cada terminal de cobro.',
    icon: (
      <>
        <path d="M7 8V4h10v4" />
        <rect x="5" y="8" width="14" height="8" rx="1.5" />
        <path d="M8 16h8v5H8v-5Z" />
      </>
    ),
    sections: [
      {
        heading: 'Configura tu impresora de recibos',
        steps: [
          {
            title: 'Descargar el agente de impresión',
            body: 'Para que Vortex pueda enviar la orden de impresión a tu impresora, necesitas instalar un pequeño programa en tu computadora o tablet. Descárgalo desde el enlace que te damos y Insatalalo',
            image: '/assets/docs/impresoras/00-Descargar-agente-impresion.png',
            imageAlt: 'Pantalla de configuración de impresoras en Vortex',
          },
          {
            title: 'Conectar una impresora',
            body: 'Selecciona la impresora conectada a tu equipo o red para que Vortex imprima el recibo apenas termines una venta.',
            image: '/assets/docs/impresoras/01-configurar-impresora.png',
            imageAlt: 'Pantalla de configuración de impresoras en Vortex',
          },
          {
            title: 'Probar la impresión',
            body: 'Antes de tu primera venta del día, imprime un recibo de prueba para confirmar que todo está listo.',
            image: '/assets/docs/impresoras/02-prueba-impresion.png',
            imageAlt: 'Botón de prueba de impresión en Vortex',
          },
        ],
      },
    ],
  },
  {
    slug: 'configuracion',
    order: 10,
    title: 'Configuración',
    summary: 'Los ajustes generales del sistema: facturación, notificaciones, crédito, impuestos y fidelización.',
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </>
    ),
    sections: [
      {
        heading: 'Ajustes generales del sistema',
        steps: [
          {
            title: 'Empresa',
            body: 'Datos generales de tu empresa y moneda base con la que trabajas.',
            image: '/assets/docs/configuracion/01-config-empresa.png',
            imageAlt: 'Pestaña de configuración de Empresa en Vortex',
          },
          {
            title: 'Facturación',
            body: 'Preferencias de cómo se ve tu recibo o factura impresa (esto es solo estético; la numeración fiscal real se carga en Mi Empresa → Secuencias NCF).',
            image: '/assets/docs/configuracion/02-config-facturacion.png',
            imageAlt: 'Pestaña de configuración de Facturación en Vortex',
          },
          {
            title: 'Notificaciones',
            body: 'Activa avisos por correo, por ejemplo cuando un producto llega a su stock mínimo.',
            image: '/assets/docs/configuracion/03-config-notificaciones.png',
            imageAlt: 'Pestaña de configuración de Notificaciones en Vortex',
          },
          {
            title: 'Crédito',
            body: 'Aquí activas si tu empresa permite vender "fiar". Está apagado por defecto: hasta que no lo actives, ningún cliente puede comprar a crédito.',
            image: '/assets/docs/configuracion/04-config-credito.png',
            imageAlt: 'Pestaña de configuración de Crédito en Vortex',
          },
          {
            title: 'Impuestos',
            body: 'Define las tasas de impuesto por producto, por categoría o de forma general. El sistema siempre calcula el impuesto automáticamente en cada venta, nunca lo pones a mano.',
            image: '/assets/docs/configuracion/05-config-impuestos.png',
            imageAlt: 'Pestaña de configuración de Impuestos en Vortex',
          },
          {
            title: 'Fidelización',
            body: 'Los puntos de lealtad vienen activados por defecto (1 punto por cada RD$100 en compras). Aquí puedes ajustar esa tasa a lo que prefieras.',
            image: '/assets/docs/configuracion/06-config-fidelizacion.png',
            imageAlt: 'Pestaña de configuración de Fidelización en Vortex',
          },
        ],
      },
    ],
  },
  {
    slug: 'perfil',
    order: 11,
    title: 'Mi perfil y suscripción',
    summary: 'Desde tu perfil manejas tus datos, tu contraseña y el plan que tiene contratado tu empresa.',
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    sections: [
      {
        heading: 'Tu cuenta',
        steps: [
          {
            title: 'Mi perfil',
            body: 'Actualiza tu nombre, correo y contraseña (mínimo 8 caracteres, con mayúscula, minúscula, número y símbolo), o cambia entre tema claro y oscuro.',
            image: '/assets/docs/perfil/01-mi-perfil.png',
            imageAlt: 'Pantalla de Mi Perfil en Vortex',
          },
          {
            title: 'Tu plan de suscripción',
            body: 'Consulta el plan actual de tu empresa y su costo mensual. Puedes cambiar de plan o cancelar la suscripción cuando quieras, sin penalización.',
            image: '/assets/docs/perfil/02-plan-suscripcion.png',
            imageAlt: 'Tarjeta de plan de suscripción con el botón para cambiar de plan',
          },
        ],
      },
    ],
  },
];

export function getDocModuleBySlug(slug) {
  return DOC_MODULES.find((m) => m.slug === slug);
}

export function getDocModuleList() {
  return [...DOC_MODULES].sort((a, b) => a.order - b.order);
}
