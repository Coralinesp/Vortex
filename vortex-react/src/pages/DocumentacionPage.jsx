import { Link } from 'react-router-dom';
import Reveal from '../components/common/Reveal.jsx';
import CtaSection from '../components/common/CtaSection.jsx';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { getDocModuleList } from '../data/docs.jsx';

export default function DocumentacionPage() {
  usePageMeta(
    'Documentación — Vortex POS',
    'Guía completa, paso a paso y con capturas reales, de todos los módulos de Vortex: desde crear tu empresa hasta hacer una venta.',
  );

  const modules = getDocModuleList();

  return (
    <>
      <section className="section section-first">
        <div className="container">
          <Reveal as="header" className="docs-index-head">
            <span className="eyebrow">Documentación</span>
            <h1>
              Todo lo que necesitas para <em>operar Vortex</em>
            </h1>
            <p>
              Guías paso a paso, con capturas reales del sistema, organizadas por módulo — desde crear tu empresa
              hasta cerrar tu caja al final del día.
            </p>
          </Reveal>

          <Reveal as="div" className="docs-video-banner" delay=".04s">
            <Link to="/documentacion/videos">
              <span className="docs-video-banner-icon">
                <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M4.5 3.3c0-.7.8-1.2 1.5-.8l7 4.7c.6.4.6 1.3 0 1.7l-7 4.7c-.7.4-1.5 0-1.5-.8V3.3Z" />
                </svg>
              </span>
              <span className="docs-video-banner-text">
                <strong>Nuevo: documentación en video</strong>
                <span>Mira cómo funciona cada módulo en pantalla real, paso a paso.</span>
              </span>
              <span className="docs-video-banner-cta">Ver videos →</span>
            </Link>
          </Reveal>

          <ul className="docs-grid">
            {modules.map((mod, i) => (
              <Reveal as="li" className="docs-card" delay={`${(i % 3) * 0.04}s`} key={mod.slug}>
                <Link to={`/documentacion/${mod.slug}`}>
                  <span className="tem-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {mod.icon}
                    </svg>
                  </span>
                  <h3>{mod.title}</h3>
                  <p>{mod.summary}</p>
                  <span className="tem-count">
                    {mod.sections.reduce((n, s) => n + s.steps.length, 0)} pasos
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
