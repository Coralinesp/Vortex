import Reveal from '../common/Reveal.jsx';

export default function Funciones() {
  return (
    <section className="section funciones" id="funciones">
      <div className="container">
        <Reveal as="header" className="feat-head">
          <h2>
            Punto de venta, inventario y facturación
            <br />
            <em>en un solo sistema</em>
          </h2>
          <p>
            Vortex es el software de punto de venta para negocios de mostrador: cobras, controlas existencias en
            todas tus sucursales y emites comprobantes fiscales electrónicos desde la misma pantalla, sin exportar
            ni volver a capturar nada.
          </p>
        </Reveal>

        <div className="feat-grid">
          <Reveal as="article" className="feat feat--7">
            <div className="feat-media">
              <img
                className="is-centered"
                src="/assets/ChatGPT%20Image%20Sep%203,%202026,%2007_35_21%20PM.png"
                alt="Terminal de punto de venta Vortex con impresora de tickets y lector de código de barras en el mostrador"
                loading="lazy"
              />
            </div>
            <div className="feat-copy">
              <h3>Cobra y factura en la misma pantalla</h3>
              <p>
                Efectivo, tarjeta, transferencia o pago digital en una sola terminal. El ticket sale con su
                comprobante fiscal electrónico y se envía por correo sin abrir otro programa ni volver a capturar
                nada.
              </p>
            </div>
          </Reveal>

          <Reveal as="article" className="feat feat--5" delay=".06s">
            <div className="feat-media">
              <img
                className="is-centered"
                src="/assets/ChatGPT%20Image%20Sep%203,%202026,%2007_39_48%20PM.png"
                alt="Lector de código de barras escaneando un producto en el anaquel de la bodega"
                loading="lazy"
              />
              <div className="feat-float" aria-hidden="true">
                <span className="ff-check">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="ff-body">
                  <b>Arroz premium 5 lb</b>
                  <i>SKU F-0007 · Almacén Central</i>
                </div>
                <span className="ff-stock">
                  40 <em>→ 52</em>
                </span>
              </div>
            </div>
            <div className="feat-copy">
              <h3>Del escáner al anaquel en segundos</h3>
              <p>
                Escanea el código, completa el SKU y el producto queda listo para vender. Cambios por lote o por
                sucursal desde el celular, la computadora o la caja.
              </p>
            </div>
          </Reveal>

          <Reveal as="article" className="feat feat--5" delay=".12s">
            <div className="feat-media">
              <img
                className="is-right"
                src="/assets/ChatGPT%20Image%20Sep%203,%202026,%2007_47_44%20PM.png"
                alt="Ficha de cliente en Vortex con historial de compras, puntos y una promoción personalizada durante el cobro"
                loading="lazy"
              />
            </div>
            <div className="feat-copy">
              <h3>Convierte visitas en clientes de siempre</h3>
              <p>
                Cada compra se guarda en la ficha del cliente. Arma promociones, listas de precios y puntos de
                lealtad con lo que ya sabes de él.
              </p>
            </div>
          </Reveal>

          <Reveal as="article" className="feat feat--7" delay=".18s">
            <div className="feat-media">
              <img
                className="is-centered"
                src="/assets/ChatGPT%20Image%20Sep%203,%202026,%2008_04_59%20PM.png"
                alt="Pantalla de sucursales de Vortex con tres tiendas activas y la opción de agregar una nueva"
                loading="lazy"
              />
            </div>
            <div className="feat-copy">
              <h3>Abre otra sucursal sin cambiar de sistema</h3>
              <p>
                Cada tienda con sus precios, sus permisos y su caja, y un panel que las suma todas. Cuando abras la
                siguiente, entra al mismo Vortex: nada de migrar datos ni empezar de cero.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
