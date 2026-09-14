import { Link, Navigate, useParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.js';
import Reveal from '../components/common/Reveal.jsx';
import CtaSection from '../components/common/CtaSection.jsx';
import { getGuideBySlug } from '../data/guides.js';

export default function GuiaPage() {
  const { slug } = useParams();
  const guide = getGuideBySlug(slug);

  usePageMeta(guide ? `${guide.title} — Vortex POS` : 'Guía — Vortex POS', guide?.summary);

  if (!guide) return <Navigate to="/recursos" replace />;

  return (
    <>
      <section className="section section-first">
        <div className="container guia-container">
          <Reveal as="header" className="guia-head">
            <Link className="guia-back" to="/recursos">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10 3 4.5 8 10 13" />
              </svg>
              Centro de recursos
            </Link>
            <span className="eyebrow">{guide.category}</span>
            <h1>{guide.title}</h1>
            <p className="guia-summary">{guide.summary}</p>
          </Reveal>

          <Reveal as="div" className="guia-media" delay=".06s">
            <img src={guide.image} alt={guide.imageAlt} loading="lazy" />
          </Reveal>

          <Reveal as="div" className="guia-body" delay=".1s">
            {guide.sections.map((section) => (
              <div className="guia-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body && <p>{section.body}</p>}
                {section.list && (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
