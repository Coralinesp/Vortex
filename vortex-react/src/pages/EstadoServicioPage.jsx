import { Link } from 'react-router-dom';
import Reveal from '../components/common/Reveal.jsx';
import { usePageMeta } from '../hooks/usePageMeta.js';

const SERVICIOS = [
  'API y panel web',
  'Facturación electrónica (NCF)',
  'Pagos (Stripe / PayPal)',
  'Notificaciones por correo',
];

export default function EstadoServicioPage() {
  usePageMeta(
    'Estado del servicio — Vortex POS',
    'Estado actual de los servicios de Vortex POS: panel web, facturación electrónica, pagos y notificaciones.'
  );

  return (
    <section className="section section-first">
      <div className="container">
        <Reveal as="header" className="legal-head">
          <span className="eyebrow">Estado del servicio</span>
          <h1>
            Estado <em>actual</em> de Vortex
          </h1>
          <p>Así están operando nuestros servicios en este momento.</p>
        </Reveal>

        <Reveal as="div" className="status-summary">
          <span className="status-dot" aria-hidden="true" />
          <div>
            <strong>Todos los sistemas operativos</strong>
            <span>Sin incidentes reportados</span>
          </div>
        </Reveal>

        <Reveal as="ul" className="status-list">
          {SERVICIOS.map((nombre) => (
            <li className="status-row" key={nombre}>
              <span>{nombre}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-dim)', fontSize: '.84rem' }}>
                <span className="status-dot" aria-hidden="true" />
                Operativo
              </span>
            </li>
          ))}
        </Reveal>

        <Reveal as="p" style={{ marginTop: 28, color: 'var(--text-dim)', fontSize: '.88rem' }}>
          ¿Algo no funciona como esperas? Escríbenos por <Link to="/contacto">Contacto</Link> y lo revisamos de
          inmediato.
        </Reveal>
      </div>
    </section>
  );
}
