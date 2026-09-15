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
