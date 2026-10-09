import { Link } from 'react-router-dom';
import Reveal from '../components/common/Reveal.jsx';
import { usePageMeta } from '../hooks/usePageMeta.js';

export default function CookiesPage() {
  usePageMeta(
    'Política de cookies — Vortex POS',
    'Qué cookies usa el sitio de Vortex POS y para qué.'
  );

  return (
    <section className="section section-first">
      <div className="container">
        <Reveal as="header" className="legal-head">
          <span className="eyebrow">Legal</span>
          <h1>Política de cookies</h1>
          <p>Vigente desde el 15 de septiembre de 2026.</p>
        </Reveal>

        <Reveal as="div" className="legal-body">
          <section>
            <h2>1. Qué son</h2>
            <p>
              Las cookies son pequeños archivos que un sitio guarda en tu navegador para recordar información
              entre visitas, como tu sesión iniciada o tus preferencias.
            </p>
          </section>

          <section>
            <h2>2. Cómo las usamos</h2>
            <ul>
              <li>
                <strong>Esenciales:</strong> mantener tu sesión iniciada dentro del sistema y proteger el acceso a
                tu cuenta.
              </li>
              <li>
                <strong>Preferencias:</strong> recordar configuraciones básicas de tu visita al sitio.
              </li>
            </ul>
            <p>No usamos cookies de publicidad de terceros en el sitio de Vortex POS.</p>
          </section>

          <section>
            <h2>3. Cómo controlarlas</h2>
            <p>
              Puedes borrar o bloquear las cookies desde la configuración de tu navegador. Ten en cuenta que
              bloquear las cookies esenciales puede impedir que inicies sesión en el sistema.
            </p>
          </section>

          <section>
            <h2>4. Más información</h2>
            <p>
              Si tienes preguntas sobre esta política, escríbenos desde <Link to="/contacto">Contacto</Link>.
            </p>
          </section>
        </Reveal>
      </div>
    </section>
  );
}
