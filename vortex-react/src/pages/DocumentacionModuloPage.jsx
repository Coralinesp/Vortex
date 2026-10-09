import { Link, Navigate, useParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.js';
import Reveal from '../components/common/Reveal.jsx';
import CtaSection from '../components/common/CtaSection.jsx';
import DocsSidebar from '../components/docs/DocsSidebar.jsx';
import DocsStep from '../components/docs/DocsStep.jsx';
import { DOC_MODULES, getDocModuleBySlug } from '../data/docs.jsx';
import { getVideosByModule } from '../data/docsVideos.js';

export default function DocumentacionModuloPage() {
  const { modulo } = useParams();
  const mod = getDocModuleBySlug(modulo);
  const videos = mod ? getVideosByModule(mod.slug) : [];

  usePageMeta(mod ? `${mod.title} — Documentación Vortex` : 'Documentación — Vortex POS', mod?.summary);

  if (!mod) return <Navigate to="/documentacion" replace />;

  return (
    <>
      <section className="section section-first">
        <div className="container">
          <div className="docs-layout">
            <Reveal as="div" className="docs-sidebar-wrap">
              <DocsSidebar activeSlug={mod.slug} />
            </Reveal>

            <div className="docs-content">
              <Reveal as="header" className="docs-head">
                <Link className="guia-back" to="/documentacion">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M10 3 4.5 8 10 13" />
                  </svg>
                  Documentación
                </Link>
                <span className="eyebrow">
                  Módulo {mod.order} de {DOC_MODULES.length}
                </span>
                <h1>{mod.title}</h1>
                <p className="guia-summary">{mod.summary}</p>

                {videos.length > 0 && (
                  <Link to={`/documentacion/videos/${mod.slug}`} className="docs-video-inline">
                    <span className="docs-video-inline-icon">
                      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path d="M4.5 3.3c0-.7.8-1.2 1.5-.8l7 4.7c.6.4.6 1.3 0 1.7l-7 4.7c-.7.4-1.5 0-1.5-.8V3.3Z" />
                      </svg>
                    </span>
                    Mira el video de este módulo
                  </Link>
                )}
              </Reveal>

              {mod.sections.map((section) => (
                <Reveal as="section" className="docs-section" key={section.heading}>
                  <div className="docs-section-head">
                    <h2>{section.heading}</h2>
                    <span className="docs-section-count">{section.steps.length} pasos</span>
                  </div>
                  <div className="docs-steps">
                    {section.steps.map((step, i) => (
                      <DocsStep
                        key={step.title}
                        index={i + 1}
                        step={step}
                        isLast={i === section.steps.length - 1}
                      />
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
