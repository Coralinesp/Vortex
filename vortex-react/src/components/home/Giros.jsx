import { Link } from 'react-router-dom';
import Reveal from '../common/Reveal.jsx';
import { GIROS } from '../../data/giros.jsx';

export default function Giros() {
  return (
    <section className="section giros" id="giros">
      <div className="container">
        <Reveal as="header" className="giros-head">
          <div>
            <span className="eyebrow">Para tu giro</span>
            <h2>
              Un mostrador es distinto
              <br />
              en cada negocio
            </h2>
          </div>
          <p>
            Vortex llega con catálogo, impuestos y flujo de cobro precargados según lo que vendes. Cambias de giro
            o abres otro negocio y lo reconfiguras en minutos.
          </p>
        </Reveal>

        <ul className="giro-grid">
          {GIROS.map((giro) => (
            <Reveal as="li" className="giro" delay={giro.delay} key={giro.title}>
              <span className="giro-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {giro.icon}
                </svg>
              </span>
              <h3>{giro.title}</h3>
              <p>{giro.description}</p>
            </Reveal>
          ))}

          <Reveal as="li" className="giro giro--cta" delay=".16s">
            <h3>¿Tu giro no está aquí?</h3>
            <p>Vortex se configura para cualquier mostrador. Cuéntanos qué vendes y lo dejamos listo.</p>
            <Link to="/contacto#form">
              Hablemos de tu negocio
              <svg viewBox="0 0 15 13" fill="none" aria-hidden="true">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  d="m10.083 11.417 4-5.334m0 0-4-5.333m4 5.333H.75"
                />
              </svg>
            </Link>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
