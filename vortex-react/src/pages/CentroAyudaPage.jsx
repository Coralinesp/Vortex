import { Link } from 'react-router-dom';
import Reveal from '../components/common/Reveal.jsx';
import CtaSection from '../components/common/CtaSection.jsx';
import { usePageMeta } from '../hooks/usePageMeta.js';

const ENLACES = [
  {
    title: 'Documentación',
    description: 'Guías paso a paso, con capturas reales, de cada módulo del sistema.',
    to: '/documentacion',
    icon: (
      <>
        <path d="M12 3.5 4 7v10l8 3.5 8-3.5V7l-8-3.5Z" />
        <path d="M4 7l8 3.5L20 7M12 10.5V21" />
      </>
    ),
  },
  {
    title: 'Centro de recursos',
    description: 'Preguntas frecuentes y guías rápidas, organizadas por tema.',
    to: '/recursos',
    icon: (
      <>
        <path d="M3 6h2l2.2 9.5h10L20 9H6.2" />
        <circle cx="9" cy="19" r="1.4" />
        <circle cx="17" cy="19" r="1.4" />
      </>
    ),
  },
  {
    title: 'Habla con nosotros',
    description: 'Escríbenos por WhatsApp o correo y te respondemos el mismo día hábil.',
    to: '/contacto',
    icon: (
      <>
        <path d="M20.5 11.7a8.4 8.4 0 0 1-12.2 7.5L3.5 20.5l1.4-4.7a8.4 8.4 0 1 1 15.6-4.1Z" />
        <path d="M8.9 9.2c0 3.2 2.7 5.9 5.9 5.9l1.4-1.7-2.2-1-1 1a5 5 0 0 1-2.4-2.4l1-1-1-2.2-1.7 1.4Z" />
      </>
    ),
  },
];

export default function CentroAyudaPage() {
  usePageMeta(
    'Centro de ayuda — Vortex POS',
    'Encuentra documentación, guías y la forma de contactar al equipo de Vortex.'
  );

  return (
    <>
      <section className="section section-first">
        <div className="container">
          <Reveal as="header" className="rc-head">
            <span className="eyebrow">Centro de ayuda</span>
            <h2>
              ¿En qué te <em>ayudamos hoy</em>?
            </h2>
            <p>Todo lo que necesitas para sacarle el máximo a Vortex, en un solo lugar.</p>
          </Reveal>

          <ul className="tem-grid">
            {ENLACES.map((item) => (
              <Reveal as="li" className="tem" key={item.title}>
                <Link to={item.to}>
                  <span className="tem-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {item.icon}
                    </svg>
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
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
