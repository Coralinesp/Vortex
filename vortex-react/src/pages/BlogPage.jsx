import { Link } from 'react-router-dom';
import Reveal from '../components/common/Reveal.jsx';
import CtaSection from '../components/common/CtaSection.jsx';
import { usePageMeta } from '../hooks/usePageMeta.js';

export default function BlogPage() {
  usePageMeta(
    'Blog — Vortex POS',
    'Novedades, guías y buenas prácticas para negocios que venden con Vortex POS.'
  );

  return (
    <>
      <section className="section section-first">
        <div className="container">
          <Reveal as="header" className="legal-head">
            <span className="eyebrow">Blog</span>
            <h1>
              Estamos <em>escribiendo</em> las primeras historias
            </h1>
            <p>
              Todavía no hemos publicado artículos. Cuando lo hagamos, aquí encontrarás novedades del producto,
              casos de negocios dominicanos y buenas prácticas de venta.
            </p>
          </Reveal>

          <Reveal as="div" className="blog-empty">
            <span className="tem-icon" aria-hidden="true" style={{ margin: '0 auto 18px' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2.5H6.5A1.5 1.5 0 0 0 5 4v16a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 20V7.5L14 2.5Z" />
                <path d="M13.8 2.8v4.4h4.6M8.5 12h7M8.5 16h4.5" />
              </svg>
            </span>
            <h2>Sin publicaciones todavía</h2>
            <p>
              Mientras tanto, revisa la <Link to="/documentacion">documentación</Link> del sistema o escríbenos por
              el <Link to="/contacto">Contacto</Link> si tienes una pregunta puntual — te respondemos directamente.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
