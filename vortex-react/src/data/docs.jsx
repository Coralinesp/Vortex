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
            body: 'Este es el primer paso del registro: le dices a Vortex qué negocio eres. Con estos datos, Vortex crea automáticamente tu empresa y una primera sucursal llamada "Casa Matriz", lista para que la configures más adelante. Por ejemplo, si tienes una ferretería llamada "Ferretería Pérez", ese es el nombre que pones aquí, y tu RNC es el mismo que usarás luego para facturar con validez fiscal.',
            list: ['Nombre de tu negocio', 'Teléfono de contacto', 'RNC (empresa) o cédula (negocio personal)'],
            image: '/assets/docs/registro-y-acceso/01-datos-empresa.png',
            imageAlt: 'Paso 1 del registro de Vortex: formulario con los datos de la empresa',
          },
          {
            title: 'Tu usuario administrador',
            body: 'Un "usuario" es la cuenta con la que tú (o alguien de tu equipo) inicia sesión en Vortex; un "rol" es lo que esa cuenta tiene permitido hacer dentro del sistema. Aquí creas tu propio usuario y Vortex te asigna automáticamente el rol de Administrador, que a diferencia de roles como Cajero o Supervisor (que verás más adelante en Mi Empresa → Roles) tiene acceso completo a todos los módulos desde el primer momento. Este correo y esta contraseña son los que usarás para iniciar sesión de ahora en adelante.',
            list: ['Nombre completo', 'Correo (será tu usuario para entrar)', 'Contraseña'],
            image: '/assets/docs/registro-y-acceso/02-usuario-administrador.png',
            imageAlt: 'Paso 2 del registro de Vortex: formulario del usuario administrador',
          },
          {
            title: 'Elige tu plan',
            body: 'Un plan define qué funciones, usuarios y sucursales puedes tener en Vortex. Escoge el que mejor se ajuste al tamaño de tu negocio ahora mismo -- no tienes que acertar a la primera: los planes son acumulativos, así que si más adelante subes a uno superior, conservas todo lo que ya tenías configurado y solo ganas funciones nuevas, nunca pierdes nada.',
            image: '/assets/docs/registro-y-acceso/03-elegir-plan.png',
            imageAlt: 'Paso 3 del registro de Vortex: selección de plan de suscripción',
          },
          {
            title: 'Método de pago',
            body: 'Completa el pago de tu plan con tarjeta o PayPal. A diferencia de sistemas que te bloquean hasta confirmar el cobro, tu primer mes en Vortex corre con un período de gracia: puedes empezar a cargar productos y vender de inmediato mientras el pago se confirma en segundo plano.',
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
            body: 'Por seguridad, Vortex necesita confirmar que el correo que diste es real antes de activar tu cuenta por completo. Te enviamos un correo de verificación con un enlace: ábrelo y tu cuenta queda activada al instante -- si no lo ves en la bandeja principal, revisa spam.',
            image: '/assets/docs/registro-y-acceso/05-verificar-correo.png',
            imageAlt: 'Pantalla de verificación de correo de Vortex',
          },
          {
            title: '¡Tu empresa está lista!',
            body: 'Al terminar, ves una pantalla de confirmación que te avisa que el registro se completó con éxito. Desde ahí puedes ir directo a la pantalla de inicio de sesión, usando el correo y la contraseña que elegiste en el paso 2.',
            image: '/assets/docs/registro-y-acceso/06-registro-exitoso.png',
            imageAlt: 'Pantalla de registro exitoso de Vortex',
          },
          {
            title: 'Primer inicio de sesión',
            body: 'En tu primer ingreso -- y solo en ese primer ingreso -- Vortex te va a pedir cambiar la contraseña que elegiste durante el registro, como medida de seguridad adicional. Es un único paso: no se repite en los siguientes inicios de sesión, a menos que tú mismo decidas cambiarla otra vez más adelante desde tu perfil.',
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
            body: 'El Inicio es la pantalla que resume "cómo va mi negocio hoy" sin que tengas que entrar módulo por módulo. Arriba de todo ves cuatro tarjetas: el total vendido hoy, el valor de todo tu inventario (la suma de costo por stock de cada producto), cuántos clientes nuevos entraron y cuánto llevas en devoluciones. Por ejemplo, si vendiste RD$15,000 hoy pero tienes RD$1,200 en devoluciones, ambos números aparecen por separado para que veas el impacto real de cada uno.',
            image: '/assets/docs/panel-de-inicio/01-tarjetas-kpi.png',
            imageAlt: 'Tarjetas de KPI del panel de Inicio: Total Ventas, Valor de Inventario, Clientes y Devoluciones',
          },
          {
            title: 'Tu meta de ventas',
            body: 'La meta de ventas es un objetivo mensual que tú mismo defines para tu sucursal. Debajo de las tarjetas, una barra de progreso te muestra cuánto llevas vendido este mes frente a esa meta y cuánto te falta -- útil para saber, a mitad de mes, si vas a tiempo o necesitas empujar más ventas antes de que cierre el período.',
            image: '/assets/docs/panel-de-inicio/02-meta-de-ventas.png',
            imageAlt: 'Barra de progreso de la meta de ventas mensual en el panel de Inicio',
          },
          {
            title: 'Ventas de la semana',
            body: 'Un gráfico te muestra cómo se han comportado tus ventas día por día durante los últimos 7 días, para que detectes de un vistazo patrones -- como "los viernes siempre vendo más" -- o una caída inusual que valga la pena investigar antes de que se repita.',
            image: '/assets/docs/panel-de-inicio/03-grafico-ventas.png',
            imageAlt: 'Gráfico de ventas de la semana en el panel de Inicio',
          },
          {
            title: 'Lo que más se vende',
            body: 'Esta lista ordena tus productos por unidades vendidas en el período reciente. Te sirve como alerta temprana: si un producto está en el top y su stock está bajando rápido, sabes que debes reponerlo antes de quedarte sin él y perder ventas justo de lo que más te pide tu cliente.',
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
            body: '"Mi Empresa" agrupa todo lo que aplica a tu negocio como un todo -- no a una venta puntual: tus sucursales, tu equipo, sus permisos y tus comprobantes fiscales. Entras desde el selector de empresa/sucursal en la parte superior, y aquí ves los datos generales de tu negocio.',
            image: '/assets/docs/mi-empresa/01-resumen-empresa.png',
            imageAlt: 'Pantalla de resumen de Mi Empresa en Vortex',
          },
          {
            title: 'Tus sucursales',
            body: 'Una sucursal es una ubicación (o canal) donde operas: tu tienda principal, un local en otra ciudad, o incluso un punto de venta móvil. Aquí ves todas las tuyas, cada una con su propio código y un responsable asignado. La primera que se crea al registrarte queda marcada como Principal (Casa Matriz) y no se puede eliminar, aunque sí puedes desactivarla si algún día dejas de operar en un local, sin perder su historial.',
            image: '/assets/docs/mi-empresa/02-listado-sucursales.png',
            imageAlt: 'Listado de sucursales de Vortex con código, tipo, responsable y estado',
          },
          {
            title: 'Crear o editar una sucursal',
            body: 'Completa el nombre, la dirección real, el horario y si esta sucursal maneja su propio inventario -- a diferencia de una que comparte el inventario de otra (por ejemplo, un kiosco pequeño que se abastece de la tienda principal en vez de llevar el suyo propio). Puedes activarla o desactivarla más adelante sin perder nada de su historial.',
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
            body: 'Un rol es una plantilla de permisos: agrupa lo que una persona puede ver y hacer en el sistema (por ejemplo, "Cajero" solo vende; "Supervisor" además ve reportes). La diferencia con un usuario es que el rol define las reglas y el usuario es la persona a la que se las asignas -- así que un mismo rol se reutiliza en varios empleados sin repetir la configuración. Tu empresa ya viene con el rol Administrador, con acceso a todo.',
            image: '/assets/docs/mi-empresa/04-listado-roles.png',
            imageAlt: 'Listado de roles en Vortex',
          },
          {
            title: 'Crear un rol y sus permisos',
            body: 'Al crear un rol, eliges módulo por módulo qué puede ver y hacer -- por ejemplo, que un cajero solo pueda vender pero no editar precios, o que no pueda entrar a Reportes. Piensa en un rol como una "caja de permisos" que luego repartes entre tu equipo: una vez creado, lo asignas a cualquier usuario nuevo sin volver a configurarlo desde cero.',
            image: '/assets/docs/mi-empresa/05-crear-rol-permisos.png',
            imageAlt: 'Formulario para crear un rol y asignar permisos por módulo',
          },
          {
            title: 'Usuarios de tu empresa',
            body: 'Aquí ves a todas las personas que tienen acceso al sistema, con su rol y las sucursales a las que están asignadas -- útil para auditar rápido quién puede hacer qué y en qué lugar.',
            image: '/assets/docs/mi-empresa/06-listado-usuarios.png',
            imageAlt: 'Listado de usuarios de la empresa en Vortex',
          },
          {
            title: 'Crear un usuario',
            body: 'Da de alta a un nuevo empleado con su correo, el rol que le corresponde y la o las sucursales donde va a trabajar. Cada usuario necesita al menos una sucursal asignada: por ejemplo, un cajero de tu sucursal en Santiago no puede iniciar sesión ni vender en la sucursal de Santo Domingo a menos que también se lo asignes ahí.',
            list: ['Correo del empleado', 'Rol (qué puede hacer)', 'Sucursal o sucursales donde trabaja'],
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
            body: 'Una terminal es cada punto físico donde se cobra: una caja registradora, una tablet, una computadora. Registrarlas te deja saber, en tus reportes, en qué punto exacto se hizo cada venta dentro de una misma sucursal -- útil si tienes varias cajas abiertas al mismo tiempo.',
            image: '/assets/docs/mi-empresa/08-terminales.png',
            imageAlt: 'Listado de terminales de cobro en Vortex',
          },
          {
            title: 'Secuencias NCF',
            body: 'El NCF (Número de Comprobante Fiscal) es el número que la DGII exige en cada factura para que tenga validez fiscal en República Dominicana. Antes de tu primera venta, necesitas cargar el rango de NCF que la DGII te autorizó, por sucursal y por tipo de comprobante (Consumo, Crédito Fiscal, etc.). Sin una secuencia activa, esa sucursal simplemente no puede facturar ese tipo de comprobante: Vortex lo bloquea para que nunca factures con una numeración inválida.',
            image: '/assets/docs/mi-empresa/09-secuencias-ncf.png',
            imageAlt: 'Listado de secuencias NCF con rango autorizado, próximo número y estado',
          },
          {
            title: 'Cargar una secuencia',
            body: 'Ingresa el número inicial, el número final y la fecha de vencimiento que te dio la DGII para ese rango. De ahí en adelante el flujo es automático: Vortex asigna el próximo NCF disponible a cada venta según el tipo de comprobante elegido, sin que tengas que escribirlo ni llevar el conteo tú mismo.',
            list: ['Número inicial autorizado', 'Número final autorizado', 'Fecha de vencimiento'],
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
            body: 'Define qué formas de pago puede elegir tu cajero al cobrar: efectivo, tarjeta, transferencia, etc. La diferencia entre ellos está en cuándo se aprueba la venta -- efectivo y crédito (si lo activaste en Configuración) se aprueban de inmediato, mientras que transferencia u otros métodos que requieren confirmación externa quedan "pendientes" hasta que tú o alguien de tu equipo confirme que el pago realmente entró.',
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
            body: [
              'Este es el punto de partida del módulo: la tabla completa de todo lo que vendes, con categoría, precio, costo, stock y estado.',
              'Arriba ves tres números clave: cuántos productos tienes en catálogo, cuántos están agotados (stock en cero) y cuántos están bajos (por debajo del mínimo, pero no agotados todavía). Así sabes de un vistazo qué necesita atención antes de que se convierta en una venta perdida.',
            ],
            image: '/assets/docs/inventario/01-listado-productos.png',
            imageAlt: 'Listado de inventario con productos agotados, bajos en stock y la tabla completa',
          },
          {
            title: 'Crear o editar un producto',
            body: 'Un producto es cualquier artículo que vendes, con su propia ficha de datos. El formulario está organizado por secciones para que sea fácil de completar.',
            note: 'El precio que pones es siempre el precio de venta por la unidad en la que vendes el producto -- nunca cambia según cómo lo compraste. Esa misma regla se aplica después en el carrito, la factura, la tabla de inventario y las etiquetas de código de barras.',
            list: ['Información básica: nombre, categoría, descripción', 'Precio e inventario: precio, costo, stock, stock mínimo', 'Unidades: cómo se compra y cómo se vende', 'Identificación: SKU o código de barras', 'Estado: activo/inactivo y sucursal', 'Stock: acepta decimales (ej. 12.5) en cualquier producto, no solo en los que se venden por peso'],
            image: '/assets/docs/inventario/02-crear-producto.png',
            imageAlt: 'Formulario para crear o editar un producto en Vortex, organizado por secciones',
          },
          {
            title: 'Compra en una unidad, vende en otra',
            body: [
              'A veces compras algo en una presentación y lo vendes en otra: le compras el pollo a tu proveedor por Quintal (100 libras) pero se lo vendes a tus clientes por Libra, o compras una caja de 12 refrescos y la vendes por unidad.',
              'Para esos casos, activa "¿Compras o vendes este producto en una unidad distinta a la de arriba?" y define la unidad base, la unidad de compra y la unidad de venta. La primera vez que guardas esa combinación, Vortex te pide el factor de conversión una sola vez (por ejemplo, "1 Quintal = 100 Libra") y lo aplica automáticamente después en cada compra y cada venta.',
            ],
            note: 'Esa conversión mueve tu inventario -- cuánto stock sube o baja -- pero nunca tu precio de venta, que siempre se mantiene fijo en la unidad de venta.',
            list: ['Unidad base: en la que Vortex lleva tu inventario', 'Unidad de compra: en la que le compras a tu proveedor', 'Unidad de venta: en la que se lo vendes a tu cliente'],
            image: '/assets/docs/inventario/03-unidad-compra-venta.png',
            imageAlt: 'Formulario de producto con unidad base, unidad de compra y unidad de venta configuradas',
          },
          {
            title: 'Define las unidades de tu empresa',
            body: [
              '"Unidades estándar" es la lista de unidades de peso y volumen que Vortex reconoce para calcular conversiones. Gramo, Kilogramo, Libra, Onza, Mililitro, Litro, Galón y Onza líquida vienen predefinidas y no se pueden editar ni borrar.',
              'Si tu negocio usa una unidad propia que no está en la lista -- por ejemplo, un Quintal -- agrégala aquí con su equivalencia en gramos o mililitros (1 Quintal = 45,359.2 gramos). Desde ese momento, Vortex la reconoce como cualquier otra unidad y te la sugiere sola al configurar conversiones, sin que tengas que volver a calcular el factor a mano.',
              'Este botón solo aparece si tu rol tiene el permiso correspondiente.',
            ],
            image: '/assets/docs/inventario/04-unidades-estandar.png',
            imageAlt: 'Pantalla de Unidades estándar con las unidades predefinidas y una unidad personalizada agregada',
          },
          {
            title: 'Arma una receta (producto complejo)',
            body: 'Un "producto complejo" (o receta) es un producto hecho de otros productos de tu inventario -- un Combo, una Hamburguesa, un plato preparado.',
            note: 'Márcalo como tal para que, cada vez que lo vendas, Vortex descuente automáticamente cada insumo de la receta del inventario, en vez de que tengas que hacerlo tú a mano uno por uno.',
            list: [
              'Ejemplo: un "Combo 1" con Hamburguesa, Papas fritas y Coca-Cola -- al venderlo, bajan de stock los tres a la vez',
              'Autocompletado: al buscar el insumo por nombre, la cantidad y la unidad se llenan solas',
              'Obligatorio: se descuenta siempre que se vende el producto complejo',
              'Opcional: tu cajero lo puede quitar en una venta puntual (ej. "sin lechuga") sin editar el producto',
              'Anidado: una receta puede incluir otro producto complejo como insumo -- una Hamburguesa que a su vez tiene su propia receta -- así se anidan varios niveles',
            ],
            image: '/assets/docs/inventario/05-receta-producto.png',
            imageAlt: 'Editor de receta de un producto complejo con un insumo obligatorio anidado y un insumo opcional',
          },
          {
            title: 'Vortex evita recetas circulares',
            body: 'Un "ciclo" es cuando, sin darte cuenta, terminas armando una receta que depende de sí misma -- por ejemplo, que el Combo 1 lleve una Hamburguesa como insumo, y que a esa Hamburguesa intentes agregarle el Combo 1 también. Si eso pasara, Vortex nunca podría calcular cuánto stock descontar.',
            note: 'Si intentas agregar como insumo un producto que ya depende -- directa o indirectamente -- del que estás editando, Vortex te lo bloquea de inmediato, tanto al configurar la receta como al momento de vender.',
            image: '/assets/docs/inventario/06-receta-ciclo.png',
            imageAlt: 'Aviso de Vortex bloqueando un insumo que crearía un ciclo entre productos complejos',
          },
          {
            title: 'Importar tu catálogo desde Excel',
            body: [
              '¿Tienes muchos productos y no quieres cargarlos uno por uno? Descarga la plantilla de ejemplo, llénala con tus datos y súbela para crear todo tu catálogo de una sola vez.',
              'La plantilla también soporta variantes -- por ejemplo, para cargar "Camisa Talla M" y "Camisa Talla L" como variantes de un mismo producto en vez de productos sueltos.',
            ],
            image: '/assets/docs/inventario/07-importar-excel.png',
            imageAlt: 'Pantalla de importación de catálogo desde un archivo Excel',
          },
          {
            title: 'Migrar catálogo entre sucursales',
            body: '¿Abriste una sucursal nueva? En vez de capturar todo tu catálogo a mano otra vez, usa "Migrar catálogo" para copiar los productos de una sucursal existente hacia la nueva.',
            note: 'Los datos del producto se copian, pero el stock siempre empieza en cero en la sucursal de destino, porque el inventario físico es distinto en cada local.',
            image: '/assets/docs/inventario/08-migrar-catalogo.png',
            imageAlt: 'Pantalla para migrar el catálogo de una sucursal a otra',
          },
        ],
      },
      {
        heading: 'Organiza y promociona',
        steps: [
          {
            title: 'Categorías',
            body: [
              'Una categoría es una etiqueta que agrupa productos parecidos (Bebidas, Lácteos, Ropa Mujer...).',
              'Agrupar tus productos por categoría los hace más fáciles de encontrar al vender -- en el POS puedes filtrar por categoría en vez de buscar producto por producto -- y también te deja ver tus reportes desglosados por categoría en vez de solo por producto individual.',
            ],
            image: '/assets/docs/inventario/09-categorias.png',
            imageAlt: 'Listado de categorías de productos en Vortex',
          },
          {
            title: 'Crear una promoción',
            body: 'Una promoción es un descuento configurado de antemano, por producto específico o por categoría completa, con una fecha de inicio y una de fin.',
            note: 'A diferencia de un descuento manual que el cajero aplica sobre la marcha, una promoción ya viene lista para usarse -- pero no se activa sola: en cada venta, tu cajero decide si la aplica o no en esa línea del carrito.',
            image: '/assets/docs/inventario/10-crear-promocion.png',
            imageAlt: 'Formulario para crear una promoción en Vortex',
          },
        ],
      },
      {
        heading: 'Proveedores y compras',
        steps: [
          {
            title: 'Directorio de proveedores',
            body: 'Un proveedor es cualquier persona o empresa a la que le compras mercancía. Guardar sus datos aquí te ahorra tener que escribirlos cada vez que registras una compra: simplemente lo eliges de una lista.',
            image: '/assets/docs/inventario/11-proveedores.png',
            imageAlt: 'Listado de proveedores en Vortex',
          },
          {
            title: 'Crear una orden de compra',
            body: [
              'Una orden de compra registra qué le compraste a un proveedor y en qué sucursal va a entrar esa mercancía -- es el primer paso del flujo de compras, antes de que la mercancía llegue físicamente.',
              'Si el producto tiene una unidad de compra distinta a la de venta (por ejemplo, lo compras por Quintal pero lo vendes por Libra), la orden usa esa unidad de compra por defecto, para que registres la compra tal cual la hiciste con tu proveedor.',
            ],
            note: 'La orden queda en estado "Pendiente" y, a propósito, todavía no mueve tu stock -- eso pasa en el siguiente paso, al recibirla.',
            image: '/assets/docs/inventario/12-crear-compra.png',
            imageAlt: 'Formulario de orden de compra con un producto comprado en su unidad de compra (Quintal)',
          },
          {
            title: 'Recibir una compra',
            body: [
              'Cuando la mercancía llega físicamente a tu local, marca la orden como recibida -- ese es el momento en que el stock realmente sube, no cuando creaste la orden.',
              'De paso, se actualiza el último costo del producto, también expresado en la unidad de venta, para que tus reportes de margen sigan siendo exactos.',
            ],
            note: 'Si el producto tiene una unidad de compra distinta a la de venta, el stock se suma ya convertido a tu unidad de venta según el factor configurado (por ejemplo, si recibes 1 Quintal, tu inventario sube 100 Libra).',
            image: '/assets/docs/inventario/13-recibir-compra.png',
            imageAlt: 'Confirmación para recibir una orden de compra y sumar el stock convertido a la unidad de venta',
          },
        ],
      },
      {
        heading: 'Historial de movimientos',
        steps: [
          {
            title: 'Kardex',
            body: [
              'El Kardex es el historial completo de cada movimiento de inventario -- entradas (compras recibidas), salidas (ventas) y ajustes manuales -- por producto.',
              'Es tu herramienta de auditoría: si un stock no te cuadra, aquí puedes rastrear exactamente qué operación lo cambió y cuándo.',
            ],
            image: '/assets/docs/inventario/14-kardex.png',
            imageAlt: 'Pantalla de Kardex con el historial de movimientos de inventario',
          },
          {
            title: 'Ajustar el inventario a mano',
            body: [
              'A veces haces un conteo físico y el stock del sistema no coincide con lo que realmente tienes en el local -- por diferencias, daños o vencimientos.',
              'Para esos casos, ajusta el inventario sin pasar por una compra: un Incremento suma unidades (por ejemplo, encontraste stock que no estaba registrado) y una Merma las resta (por daño, pérdida o vencimiento).',
            ],
            note: 'Cada ajuste queda registrado en el Kardex igual que cualquier otro movimiento y, por seguridad, una Merma nunca puede dejar el stock en negativo.',
            image: '/assets/docs/inventario/15-ajustes-inventario.png',
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
            body: 'El POS (punto de venta) es la pantalla donde tu cajero arma la venta. Hay tres formas de agregar un producto: busca por nombre, escanea el código de barras (la tecla F2 activa el lector) o navega por categoría. Cada tarjeta muestra el precio y el stock disponible antes de agregarlo, para que el cajero vea de una vez si hay suficiente. Si un producto tiene más de una unidad de venta configurada, Vortex ya no interrumpe la venta preguntando cuál usar, como pasaba antes: lo agrega directo en su unidad de venta por defecto, y solo si esa venta puntual lo necesita, el cajero usa el ícono de unidad en la línea del carrito para cambiarla.',
            image: '/assets/docs/ventas-y-cobro/01-buscar-producto.png',
            imageAlt: 'Pantalla de Ventas con el catálogo de productos y buscador',
          },
          {
            title: 'Carrito y cliente',
            body: 'El carrito es la lista de productos que se van a cobrar en esta venta. Revisa las líneas agregadas -- cada una con su cantidad y su unidad de venta -- aplica un descuento general si aplica y, si la venta lo requiere (por ejemplo, para venta a crédito o para asociarla a un cliente), agrega sus datos. El precio que ves en cada línea corresponde siempre a la unidad de venta del producto, sin importar en qué unidad lo compraste tú a tu proveedor.',
            image: '/assets/docs/ventas-y-cobro/02-carrito-cliente.png',
            imageAlt: 'Carrito de venta mostrando la cantidad, la unidad de venta y el precio de un producto',
          },
          {
            title: 'Cobrar',
            body: 'Al pasar a cobrar, el sistema calcula el subtotal, el ITBIS y el total automáticamente -- tú nunca lo calculas a mano -- y el NCF se asigna solo, según la secuencia fiscal activa de esa sucursal. Elige el método de pago y presiona "Procesar" (o la tecla F4). El flujo cambia según el método: con efectivo o crédito, la venta se aprueba al instante; con transferencia u otros métodos que necesitan confirmación externa, la venta queda pendiente hasta que confirmes que el pago realmente entró.',
            image: '/assets/docs/ventas-y-cobro/03-pantalla-cobro.png',
            imageAlt: 'Pantalla de cobro de una venta en Vortex',
          },
          {
            title: 'Factura generada',
            body: 'Al completar el cobro, Vortex genera automáticamente la factura con su comprobante fiscal (NCF) y el precio por unidad tal cual se vendió cada línea -- lista para imprimir en el momento o compartir digitalmente con el cliente.',
            image: '/assets/docs/ventas-y-cobro/04-factura-generada.png',
            imageAlt: 'Factura de venta generada en Vortex con el precio por unidad de venta',
          },
        ],
      },
      {
        heading: 'Después de la venta',
        steps: [
          {
            title: 'Registro de Ventas',
            body: 'Aquí queda guardada cada venta que se ha hecho, sin importar cuándo. Consulta cualquiera y filtra por fecha, sucursal o cajero -- útil, por ejemplo, para revisar cuánto vendió un cajero específico en un turno, o para encontrar una factura que un cliente reclama no haber recibido.',
            image: '/assets/docs/ventas-y-cobro/05-registro-ventas.png',
            imageAlt: 'Pantalla de Registro de Ventas con filtros y listado',
          },
          {
            title: 'Detalle de una venta',
            body: 'Abre cualquier venta del registro para ver el desglose completo: sus líneas de productos, los pagos aplicados y el comprobante fiscal que se le asignó -- la misma información que salió impresa en la factura, pero consultable en cualquier momento desde el sistema.',
            image: '/assets/docs/ventas-y-cobro/06-detalle-venta.png',
            imageAlt: 'Panel de detalle de una venta en Vortex',
          },
          {
            title: 'Hacer una devolución',
            body: 'Una devolución revierte total o parcialmente una venta ya cobrada. Busca la factura original y elige qué productos y qué cantidad se devuelven -- no hace falta devolver la venta completa. Como control, las devoluciones acumuladas de una misma línea nunca pueden superar lo que se vendió originalmente en ella.',
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
            body: 'La "caja" es el control de efectivo de un turno de trabajo. Antes de la primera venta del día, el cajero abre la caja declarando el monto inicial en efectivo con el que empieza (el "fondo"). Por diseño, solo puede haber una caja abierta a la vez por sucursal, así Vortex siempre sabe a qué turno pertenece cada venta en efectivo.',
            image: '/assets/docs/ventas-y-cobro/08-abrir-caja.png',
            imageAlt: 'Pantalla para abrir la caja al inicio del turno',
          },
          {
            title: 'Cerrar caja (cuadre)',
            body: 'Al terminar el turno, el cajero cierra la caja y Vortex hace el "cuadre": calcula cuánto efectivo debería haber (el monto inicial más las ventas en efectivo de ese turno) y lo compara contra lo que el cajero realmente cuenta en el cajón, mostrando la diferencia -- sobrante o faltante -- de inmediato, sin cálculos manuales.',
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
            body: 'Una cotización es una propuesta de venta -- productos, cantidades y precios -- que le presentas a un cliente antes de cobrarle, para que la apruebe. Aquí ves todas las que has creado, con su estado: pendiente (esperando respuesta del cliente), rechazada, o convertida en venta.',
            image: '/assets/docs/cotizaciones/01-listado-cotizaciones.png',
            imageAlt: 'Listado de cotizaciones en Vortex',
          },
          {
            title: 'Crear una cotización',
            body: 'Arma la cotización agregando productos y cantidades igual que en una venta normal, pero sin cobrar todavía -- es solo una propuesta, así que no descuenta inventario ni genera factura. Mientras el cliente decide, puedes editarla (por ejemplo, ajustar precios o cantidades) o rechazarla si no llega a nada.',
            image: '/assets/docs/cotizaciones/02-crear-cotizacion.png',
            imageAlt: 'Formulario para crear una cotización en Vortex',
          },
          {
            title: 'Convertir la cotización en venta',
            body: 'Cuando el cliente aprueba, conviertes la cotización directamente en una venta con un clic -- Vortex reutiliza los productos y cantidades que ya cargaste, así que no tienes que volver a capturarlos, y a partir de ahí sigue el flujo normal de cobro.',
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
            body: 'Un cliente es cualquier persona o empresa a la que le vendes y quieres darle seguimiento, a diferencia de una venta genérica a "Consumidor Final". Aquí ves de un vistazo el total de clientes registrados, cuántos están activos (con compras recientes) y cuántos son recurrentes -- una primera señal de qué tan fiel es tu base de clientes.',
            image: '/assets/docs/clientes/01-listado-clientes.png',
            imageAlt: 'Tarjetas de estadísticas y listado del módulo de Clientes',
          },
          {
            title: 'Crear o editar un cliente',
            body: 'Guarda su nombre, RNC o cédula, correo y teléfono. Necesitas al menos uno de los dos documentos de identidad (RNC o cédula) para poder registrarlo: Vortex lo exige porque ese dato es el que puede aparecer luego en una factura con Crédito Fiscal (NCF tipo B01), a diferencia de una factura de Consumo (B02) que no lo requiere.',
            image: '/assets/docs/clientes/02-crear-cliente.png',
            imageAlt: 'Formulario para crear un cliente en Vortex',
          },
          {
            title: 'Ficha del cliente',
            body: 'Cada ficha resume el total acumulado de sus compras y su historial completo de ventas -- útil para identificar quién es tu mejor cliente, o para revisar rápido qué le has vendido antes cuando te llama con una pregunta.',
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
            body: 'Reportes es donde consultas los números de tu negocio ya organizados, en vez de tener que sacarlos módulo por módulo. Está dividido en pestañas por área -- Ventas, Finanzas, Inventario, Compras y Clientes -- y cada una trae sus propios totales y un gráfico de resumen.',
            image: '/assets/docs/reportes/01-panel-reportes.png',
            imageAlt: 'Panel de Reportes de Vortex con pestañas por área',
          },
          {
            title: 'Cuentas por cobrar',
            body: '"Cuentas por cobrar" es el dinero que tus clientes te deben por ventas a crédito. Si activaste el crédito en Configuración y le vendes "fiado" a tus clientes, aquí ves cuánto te debe cada uno y desde cuándo, para darle seguimiento a los pagos pendientes.',
            image: '/assets/docs/reportes/02-cuentas-por-cobrar.png',
            imageAlt: 'Reporte de cuentas por cobrar en Vortex',
          },
          {
            title: 'Verificación de pagos',
            body: 'Aquí revisas las ventas que quedaron pendientes de confirmación -- por ejemplo, pagadas por transferencia -- y marcas cuáles ya se cobraron realmente. Es el mismo estado "pendiente" que viste al cobrar con un método que no se aprueba al instante.',
            image: '/assets/docs/reportes/03-verificacion-pagos.png',
            imageAlt: 'Reporte de verificación de pagos en Vortex',
          },
          {
            title: 'Exportar un reporte',
            body: 'Cualquier reporte que estés viendo se puede mandar a imprimir o exportar a Excel desde la esquina superior derecha del panel, por si necesitas compartirlo con tu contador o analizarlo con más detalle fuera de Vortex.',
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
            title: 'Conectar una impresora',
            body: 'Una impresora de recibos es el equipo físico (casi siempre térmica) donde se imprime el ticket de cada venta. Selecciona la que está conectada a tu equipo o red para que Vortex la use automáticamente apenas termines una venta, sin que tengas que imprimir manualmente cada vez.',
            image: '/assets/docs/impresoras/01-configurar-impresora.png',
            imageAlt: 'Pantalla de configuración de impresoras en Vortex',
          },
          {
            title: 'Probar la impresión',
            body: 'Antes de tu primera venta del día, imprime un recibo de prueba para confirmar que la impresora está bien conectada y configurada -- así evitas descubrir un problema justo cuando tienes un cliente esperando en caja.',
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
            body: 'Datos generales de tu empresa y la moneda base con la que trabajas -- la moneda en la que se calculan y muestran tus precios por defecto en todo el sistema.',
            image: '/assets/docs/configuracion/01-config-empresa.png',
            imageAlt: 'Pestaña de configuración de Empresa en Vortex',
          },
          {
            title: 'Facturación',
            body: 'Estas son preferencias de cómo se ve tu recibo o factura impresa (logo, mensaje al pie, etc.) -- es solo estético. La numeración fiscal real (el NCF) no se configura aquí, sino en Mi Empresa → Secuencias NCF.',
            image: '/assets/docs/configuracion/02-config-facturacion.png',
            imageAlt: 'Pestaña de configuración de Facturación en Vortex',
          },
          {
            title: 'Notificaciones',
            body: 'Activa avisos por correo para eventos que quieres monitorear sin estar pendiente del sistema todo el día -- por ejemplo, que te llegue un correo automático cuando un producto llega a su stock mínimo.',
            image: '/assets/docs/configuracion/03-config-notificaciones.png',
            imageAlt: 'Pestaña de configuración de Notificaciones en Vortex',
          },
          {
            title: 'Crédito',
            body: '"Crédito" es la opción de vender "fiado", es decir, que el cliente se lleve el producto y pague después. Está apagado por defecto: hasta que no lo actives aquí, ningún cajero puede ofrecer esa opción al cobrar, ni siquiera por error.',
            image: '/assets/docs/configuracion/04-config-credito.png',
            imageAlt: 'Pestaña de configuración de Crédito en Vortex',
          },
          {
            title: 'Impuestos',
            body: 'Define las tasas de impuesto (por ejemplo, ITBIS) por producto específico, por categoría completa, o de forma general para todo el catálogo. Una vez configurado, el sistema siempre calcula el impuesto automáticamente en cada venta -- nunca es algo que el cajero ponga a mano, lo que evita errores de cálculo.',
            image: '/assets/docs/configuracion/05-config-impuestos.png',
            imageAlt: 'Pestaña de configuración de Impuestos en Vortex',
          },
          {
            title: 'Fidelización',
            body: 'Los puntos de lealtad son una forma de premiar a tus clientes recurrentes: vienen activados por defecto a razón de 1 punto por cada RD$100 en compras. Aquí puedes ajustar esa tasa a lo que prefieras, o desactivarlos si tu negocio no los necesita.',
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
            body: 'Desde aquí actualizas tus propios datos -- nombre, correo y contraseña (mínimo 8 caracteres, con mayúscula, minúscula, número y símbolo) -- o cambias el tema visual del sistema entre claro y oscuro, según prefieras trabajar.',
            image: '/assets/docs/perfil/01-mi-perfil.png',
            imageAlt: 'Pantalla de Mi Perfil en Vortex',
          },
          {
            title: 'Tu plan de suscripción',
            body: 'Consulta el plan que tiene contratado tu empresa actualmente y su costo mensual. Puedes cambiar de plan -- recuerda que los planes son acumulativos, así que subir no te hace perder nada -- o cancelar la suscripción cuando quieras, sin penalización.',
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
