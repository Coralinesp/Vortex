import { Link } from 'react-router-dom';
import Reveal from '../components/common/Reveal.jsx';
import { usePageMeta } from '../hooks/usePageMeta.js';

export default function PrivacidadPage() {
  usePageMeta(
    'Política de privacidad — Vortex POS',
    'Cómo Arcode Dominicana recopila, usa y protege los datos de tu negocio y tus clientes en Vortex POS.'
  );

  return (
    <section className="section section-first">
      <div className="container">
        <Reveal as="header" className="legal-head">
          <span className="eyebrow">Legal</span>
          <h1>Política de privacidad</h1>
          <p>Vigente desde el 15 de septiembre de 2026.</p>
        </Reveal>

        <Reveal as="div" className="legal-body">
          <section>
            <h2>1. Quiénes somos</h2>
            <p>
              Vortex POS es un producto de Arcode Dominicana. Esta política explica qué información recopilamos
              cuando usas nuestro sitio, te registras o usas el sistema, y cómo la protegemos.
            </p>
          </section>

          <section>
            <h2>2. Qué información recopilamos</h2>
            <ul>
              <li>Datos de registro: nombre, correo, teléfono, RNC/cédula y datos de tu empresa.</li>
              <li>Datos de uso del sistema: ventas, inventario, clientes y facturación que tú mismo introduces.</li>
              <li>Datos de facturación y pago, procesados por nuestros proveedores de pago (Stripe / PayPal).</li>
              <li>Datos técnicos básicos (dirección IP, tipo de navegador) para seguridad y soporte.</li>
            </ul>
          </section>

          <section>
            <h2>3. Cómo usamos tu información</h2>
            <p>
              Usamos tus datos para operar tu cuenta, procesar tus ventas y suscripción, emitir comprobantes
              fiscales, brindarte soporte y comunicarnos contigo sobre el servicio. No vendemos tus datos ni los
              de tus clientes a terceros.
            </p>
          </section>

          <section>
            <h2>4. Con quién compartimos datos</h2>
            <p>
              Compartimos únicamente lo necesario con proveedores que nos ayudan a operar el servicio (por ejemplo,
              procesadores de pago y proveedores de correo), y con la DGII cuando la ley lo exige para la
              facturación electrónica.
            </p>
          </section>

          <section>
            <h2>5. Seguridad</h2>
            <p>
              Tus datos y los de tu empresa viven en una cuenta protegida por autenticación y control de permisos
              por rol. Trabajamos para mantener nuestros sistemas actualizados y seguros.
            </p>
          </section>

          <section>
            <h2>6. Tus derechos</h2>
            <p>
              Puedes solicitar acceso, corrección o eliminación de tus datos en cualquier momento escribiéndonos
              desde <Link to="/contacto">Contacto</Link>.
            </p>
          </section>
        </Reveal>
      </div>
    </section>
  );
}
