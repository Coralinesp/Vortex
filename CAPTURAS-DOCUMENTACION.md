# Lista de capturas para la Documentación de Vortex

Esta lista es el contrato entre lo que capturas en el sistema real y lo que la página de Documentación
(`vortex-react/src/data/docs.js`) ya está esperando mostrar. El nombre de archivo de cada fila debe
coincidir **exactamente** (mismo nombre, misma carpeta).

## Cómo capturar

1. Entra a `C:\Users\Angel garcia\Desktop\All\VORTEX\SistemaDeVentasFrontend\Frontend` y corre `npm run dev`
   (abre en `http://localhost:5173`; el backend de development ya está desplegado y el `.env` del
   proyecto ya apunta a él con `VITE_API_URL`, no hace falta correr el backend).
2. Regístrate como una empresa nueva de prueba (esto te sirve para capturar también las pantallas del
   módulo 1 "Crear tu cuenta y tu empresa"). Usa datos ficticios, no de un cliente real.
3. Carga algunos productos, un cliente y haz una venta de prueba antes de capturar los módulos de
   Inventario, Ventas y Reportes, para que las pantallas no se vean vacías.
4. Ventana del navegador a **1440px de ancho** (o maximizada en un monitor normal), sin la barra de
   marcadores visible, para que todas las capturas se vean consistentes.
5. Guarda cada captura como **PNG**, exactamente con el nombre indicado, dentro de
   `vortex-react/public/assets/docs/<carpeta-del-módulo>/`. Las 11 carpetas ya existen (con un archivo
   `.gitkeep` dentro que puedes ignorar/dejar).
6. No uses datos reales de clientes/proveedores en las capturas — todo debe ser de la empresa de prueba.

---

## 1. Registro y acceso — carpeta `registro-y-acceso/`

| Archivo | Ruta en Vortex | Qué mostrar |
|---|---|---|
| `01-datos-empresa.png` | `/register` (paso 1) | Formulario del wizard con el paso "Empresa" (nombre, teléfono, RNC) visible, algunos campos llenos. |
| `02-usuario-administrador.png` | `/register` (paso 2) | Paso "Usuario": nombre, correo y contraseña del administrador. |
| `03-elegir-plan.png` | `/register` (paso 3) | Paso "Suscripción": las tarjetas de planes disponibles. |
| `04-metodo-pago.png` | `/register` (paso 4) | Paso "Pago": selección de método de pago (Stripe/PayPal). |
| `05-verificar-correo.png` | `/verify-email` | Pantalla pidiendo confirmar el correo. |
| `06-registro-exitoso.png` | `/registro-exitoso` | Pantalla de confirmación "cuenta creada". |
| `07-cambiar-contrasena.png` | `/change-password` | Pantalla de cambio de contraseña obligatorio en el primer inicio de sesión. |

## 2. Panel de Inicio — carpeta `panel-de-inicio/`

| Archivo | Ruta | Qué mostrar |
|---|---|---|
| `01-tarjetas-kpi.png` | `/home` | Las 4 tarjetas superiores: Total Ventas, Valor de Inventario, Clientes, Devoluciones. |
| `02-meta-de-ventas.png` | `/home` | La barra/tarjeta de meta de ventas con progreso. |
| `03-grafico-ventas.png` | `/home` | El gráfico de ventas de la semana. |
| `04-productos-mas-vendidos.png` | `/home` | La lista de productos más vendidos. |

## 3. Mi Empresa — carpeta `mi-empresa/`

| Archivo | Ruta | Qué mostrar |
|---|---|---|
| `01-resumen-empresa.png` | `/miempresa` | Pantalla resumen de "Mi Empresa". |
| `02-listado-sucursales.png` | `/miempresa/sucursales` | Tabla de sucursales (código, tipo, responsable, estado). |
| `03-crear-sucursal.png` | `/miempresa/sucursales` (modal/formulario abierto) | Formulario de nueva sucursal con campos llenos. |
| `04-listado-roles.png` | `/miempresa/roles` | Listado de roles. |
| `05-crear-rol-permisos.png` | `/miempresa/roles/:id` o formulario de nuevo rol | Matriz/lista de permisos por módulo al crear o editar un rol. |
| `06-listado-usuarios.png` | `/miempresa/usuarios` | Listado de usuarios de la empresa. |
| `07-crear-usuario.png` | `/miempresa/usuarios` (formulario abierto) | Formulario de nuevo usuario (correo, rol, sucursal). |
| `08-terminales.png` | `/miempresa/terminales` | Listado de terminales de cobro. |
| `09-secuencias-ncf.png` | `/miempresa/ncf` | Listado de secuencias NCF (rango, próximo número, estado). |
| `10-crear-secuencia-ncf.png` | `/miempresa/ncf` (formulario abierto) | Formulario para cargar una secuencia NCF nueva. |
| `11-metodos-pago.png` | `/miempresa/metodos-pago` | Catálogo de métodos de pago. |

## 4. Inventario — carpeta `inventario/`

| Archivo | Ruta | Qué mostrar |
|---|---|---|
| `01-listado-productos.png` | `/inventory` | Vista general: KPIs de agotados/bajo stock + tabla de productos. |
| `02-crear-producto.png` | `/inventory` (formulario/modal abierto) | Formulario de nuevo producto con campos llenos. |
| `03-importar-excel.png` | `/inventory` (modal de importación) | Pantalla/modal de importar catálogo desde Excel. |
| `04-migrar-catalogo.png` | `/inventory` (opción "Migrar catálogo") | Pantalla de migración de catálogo entre sucursales. |
| `05-categorias.png` | `/inventory/categories` | Listado de categorías. |
| `06-crear-promocion.png` | `/inventory/promotions` (formulario abierto) | Formulario de nueva promoción (producto/categoría, %, fechas). |
| `07-proveedores.png` | `/inventory/proveedores` | Listado de proveedores. |
| `08-crear-compra.png` | `/inventory/compras` (formulario abierto) | Formulario de nueva orden de compra. |
| `09-recibir-compra.png` | `/inventory/compras` (acción "Recibir") | Pantalla/confirmación de recepción de una compra. |
| `10-kardex.png` | `/inventory/kardex` | Tabla de movimientos de inventario (Kardex). |
| `11-ajustes-inventario.png` | `/inventory` o `/inventory/kardex` (acción "Ajustar stock") | Formulario de ajuste manual de inventario (Incremento o Merma). |

## 5. Ventas y cobro — carpeta `ventas-y-cobro/`

| Archivo | Ruta | Qué mostrar |
|---|---|---|
| `01-buscar-producto.png` | `/ventas` | Catálogo de productos del POS con buscador/categorías. |
| `02-carrito-cliente.png` | `/ventas` | Carrito con productos agregados y selector de cliente. |
| `03-pantalla-cobro.png` | `/ventas` (overlay de pago) | Pantalla/overlay de cobro con método de pago y totales (subtotal, ITBIS, total). |
| `04-factura-generada.png` | `/ventas` (tras procesar) | Factura/recibo generado al completar la venta. |
| `05-registro-ventas.png` | `/registrodeventas` | Tabla de ventas con filtros y tarjetas de estadísticas. |
| `06-detalle-venta.png` | `/registrodeventas` (detalle abierto) | Panel/drawer de detalle de una venta puntual. |
| `07-devolucion.png` | `/devoluciones` | Formulario de devolución parcial sobre una venta buscada. |
| `08-abrir-caja.png` | `/cuadre-caja` (caja cerrada) | Formulario para abrir caja con monto inicial. |
| `09-cerrar-caja.png` | `/cuadre-caja` (caja abierta) | Pantalla de cuadre con monto calculado vs. monto contado. |

## 6. Cotizaciones — carpeta `cotizaciones/`

| Archivo | Ruta | Qué mostrar |
|---|---|---|
| `01-listado-cotizaciones.png` | `/cotizaciones` | Tabla de cotizaciones con sus estados. |
| `02-crear-cotizacion.png` | `/cotizaciones` (formulario abierto) | Formulario de nueva cotización con productos agregados. |
| `03-convertir-venta.png` | `/cotizaciones` (acción "Convertir a venta") | Botón/confirmación de convertir cotización en venta. |

## 7. Clientes — carpeta `clientes/`

| Archivo | Ruta | Qué mostrar |
|---|---|---|
| `01-listado-clientes.png` | `/customers` | Tarjetas de estadísticas + tabla de clientes. |
| `02-crear-cliente.png` | `/customers` (formulario abierto) | Formulario de nuevo cliente (nombre, RNC/cédula, correo, teléfono). |
| `03-ficha-cliente.png` | `/customers` (ficha/detalle abierto) | Ficha de un cliente con su historial de compras. |

## 8. Reportes — carpeta `reportes/`

| Archivo | Ruta | Qué mostrar |
|---|---|---|
| `01-panel-reportes.png` | `/reports` | Panel con las pestañas Ventas/Finanzas/Inventario/Compras/Clientes. |
| `02-cuentas-por-cobrar.png` | `/reports/cuentas-por-cobrar` | Reporte de cuentas por cobrar. |
| `03-verificacion-pagos.png` | `/reports/pagos` | Reporte de verificación de pagos. |
| `04-exportar-reporte.png` | `/reports` (botones de exportar/imprimir visibles) | Esquina superior derecha con los botones de exportar a Excel/imprimir. |

## 9. Impresoras — carpeta `impresoras/`

| Archivo | Ruta | Qué mostrar |
|---|---|---|
| `01-configurar-impresora.png` | `/printers` | Pantalla de configuración de impresora. |
| `02-prueba-impresion.png` | `/printers` (acción de prueba) | Botón/resultado de impresión de prueba. |

## 10. Configuración — carpeta `configuracion/`

| Archivo | Ruta | Qué mostrar |
|---|---|---|
| `01-config-empresa.png` | `/settings` (pestaña Empresa) | Pestaña de datos generales/moneda. |
| `02-config-facturacion.png` | `/settings` (pestaña Facturación) | Pestaña de preferencias de impresión de factura. |
| `03-config-notificaciones.png` | `/settings` (pestaña Notificaciones) | Pestaña de notificaciones por correo. |
| `04-config-credito.png` | `/settings` (pestaña Crédito) | Pestaña de activación de ventas a crédito. |
| `05-config-impuestos.png` | `/settings` (pestaña Impuestos) | Pestaña de tasas de impuesto. |
| `06-config-fidelizacion.png` | `/settings` (pestaña Fidelización) | Pestaña de configuración de puntos de lealtad. |

## 11. Mi perfil y suscripción — carpeta `perfil/`

| Archivo | Ruta | Qué mostrar |
|---|---|---|
| `01-mi-perfil.png` | `/profile` | Datos personales, cambio de contraseña, tema claro/oscuro. |
| `02-plan-suscripcion.png` | `/profile` (sección de plan) o `/miempresa/suscripciones` | Tarjeta del plan actual con el botón "Cambiar plan". |

---

**Total: 62 capturas.** No es necesario hacerlas todas de una sola vez — el sitio ya está preparado para
mostrarlas en cuanto vayan apareciendo en su carpeta; hasta entonces esa imagen se verá rota, lo cual es
normal.
