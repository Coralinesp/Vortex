import { usePageMeta } from '../hooks/usePageMeta.js';
import Reveal from '../components/common/Reveal.jsx';
import ResourceFeatured from '../components/recursos/ResourceFeatured.jsx';
import ResourceFilterGrid from '../components/recursos/ResourceFilterGrid.jsx';
import Topics from '../components/recursos/Topics.jsx';
import CtaSection from '../components/common/CtaSection.jsx';

export default function RecursosPage() {
  usePageMeta(
    'Centro de recursos — Vortex POS',
    'Guías, videos y plantillas de Vortex: aprende a cobrar, controlar tu inventario, facturar con e-CF y administrar tus sucursales paso a paso.'
  );

  return (
    <>
      <section className="section section-first rc" id="recursos">
        <div className="container">
          <Reveal as="header" className="rc-head">
            <span className="eyebrow">Recursos</span>
            <h2>
              Centro de <em>recursos</em>
            </h2>
            <p>Guías, videos y plantillas para sacarle todo a Vortex: desde tu primera venta hasta el manejo de varias sucursales.</p>
          </Reveal>

          <ResourceFeatured />
          <ResourceFilterGrid />
        </div>
      </section>

      <Topics />
      <CtaSection />
    </>
  );
}
