import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.js';
import RegistroForm from '../components/registro/RegistroForm.jsx';

export default function RegistroPage() {
  usePageMeta(
    'Regístrate — Vortex POS',
    'Crea tu cuenta de Vortex: registra tu empresa y empieza a vender en minutos.'
  );

  return (
    <div className="regw-page">
      <Link className="regw-back" to="/">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M10 3 4.5 8 10 13" />
        </svg>
        Volver al sitio web
      </Link>

      <div className="regw-card">
        <RegistroForm />

        <div className="regw-banner" style={{ backgroundImage: 'url(/assets/registro-banner.jpg)' }} aria-hidden="true">
          <div className="regw-banner-content">
            <h2>
              Únete a <b>VORTEX</b>
            </h2>
            <p>Configura tu sistema de facturación y punto de venta en minutos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
