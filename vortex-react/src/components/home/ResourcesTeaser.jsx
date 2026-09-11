import Reveal from '../common/Reveal.jsx';
import { useTypedWords } from '../../hooks/useTypedWords.js';

const TYPED_WORDS = ['¿Cómo abro mi caja?', '¿Cómo emito una factura?', '¿Cómo importo mi catálogo?', '¿Cómo cierro el turno?'];

export default function ResourcesTeaser() {
  const { barRef, text, isTyping, isIdle } = useTypedWords(TYPED_WORDS);
  const barClass = `res-searchbar${isTyping ? ' is-typing' : ''}${isIdle ? ' is-idle' : ''}`;

  return (
    <section className="section resources" id="recursos">
      <div className="container">
        <Reveal as="header" className="res-head">
          <span className="eyebrow res-label">
            <span>Recursos</span>
          </span>
          <h2>
            Todo lo que necesitas para <em>arrancar con Vortex</em>
          </h2>
        </Reveal>

        <div className="res-grid">
          <Reveal
            as="a"
            className="res-card res-card--wide"
            href="#registro"
            style={{ '--bg': '#eef1ff', '--text': '#1a2340', '--accent': '#4459E1', '--on-accent': '#fff' }}
          >
            <div className="res-art res-art--search" aria-hidden="true">
              <div className="res-blueprint"></div>
              <div className={barClass} ref={barRef}>
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2.2" />
                  <path d="m15.5 15.5 4.5 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
                <span id="resTyped">{text}</span>
                <i className="res-caret"></i>
              </div>
            </div>
            <div className="res-foot">
              <div className="res-copy">
                <p className="res-kicker">Guías paso a paso</p>
                <h3 className="res-title">Documentación</h3>
              </div>
              <span className="res-btn">ir a la documentación</span>
              <span className="res-arrow">
                <svg viewBox="0 0 15 13" fill="none">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10.083 11.417 4-5.334m0 0-4-5.333m4 5.333H.75" />
                </svg>
              </span>
            </div>
          </Reveal>

          <Reveal
            as="a"
            className="res-card res-card--dark"
            href="#registro"
            delay=".06s"
            style={{ '--bg': '#141b45', '--text': '#ffffff', '--accent': '#4459E1', '--on-accent': '#fff' }}
          >
            <div className="res-art res-art--video" aria-hidden="true">
              <div className="res-screen">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="res-play">
                <svg viewBox="0 0 12 14" fill="currentColor">
                  <path d="M11 6.134a1 1 0 0 1 0 1.732L1.5 13.36A1 1 0 0 1 0 12.495V1.505A1 1 0 0 1 1.5.64z" />
                </svg>
              </div>
            </div>
            <div className="res-foot">
              <div className="res-copy">
                <p className="res-kicker">Todos los cómo</p>
                <h3 className="res-title">Videotutoriales</h3>
              </div>
              <span className="res-btn">ver tutoriales</span>
              <span className="res-arrow">
                <svg viewBox="0 0 15 13" fill="none">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10.083 11.417 4-5.334m0 0-4-5.333m4 5.333H.75" />
                </svg>
              </span>
            </div>
          </Reveal>

          <Reveal
            as="a"
            className="res-card res-card--flip"
            href="#registro"
            delay=".12s"
            style={{ '--bg': '#fdeff6', '--text': '#1a2340', '--accent': '#4459E1', '--on-accent': '#fff' }}
          >
            <div className="res-foot">
              <div className="res-copy">
                <p className="res-kicker">Base de conocimiento para retail</p>
                <h3 className="res-title">Guía de inventario</h3>
              </div>
              <span className="res-arrow res-arrow--mobile">
                <svg viewBox="0 0 15 13" fill="none">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10.083 11.417 4-5.334m0 0-4-5.333m4 5.333H.75" />
                </svg>
              </span>
            </div>
            <div className="res-art res-art--docs" aria-hidden="true">
              <img className="res-shot" src="/assets/ChatGPT%20Image%20Sep%202,%202026,%2001_41_00%20PM.png" alt="" loading="lazy" width="2244" height="701" />
              <span className="res-btn res-btn--float">todas las guías</span>
            </div>
          </Reveal>

          <Reveal
            as="a"
            className="res-card res-card--wide res-card--solid"
            href="#registro"
            delay=".18s"
            style={{ '--bg': '#4459E1', '--text': '#ffffff', '--accent': '#ffffff', '--on-accent': '#2A3CBD' }}
          >
            <div className="res-art res-art--kit" aria-hidden="true">
              <svg viewBox="0 0 800 220" fill="none" preserveAspectRatio="xMidYMax slice">
                <g stroke="currentColor" strokeWidth="2" opacity=".55">
                  <rect x="40" y="70" width="140" height="120" rx="6" />
                  <path d="M40 104h140M96 70v34" />
                  <rect x="230" y="60" width="150" height="130" rx="10" />
                  <path d="M252 92v66M264 92v66M276 92v46M288 92v66M300 92v40M312 92v66M324 92v56M336 92v66M348 92v44M360 92v66" />
                  <rect x="430" y="96" width="150" height="94" rx="8" />
                  <path d="M462 96V44h86v52M462 130h86M430 152h150" />
                  <rect x="630" y="52" width="130" height="138" rx="8" />
                  <path d="M652 84h86M652 108h86M652 132h60M652 156h40" />
                </g>
              </svg>
            </div>
            <div className="res-foot">
              <div className="res-copy">
                <p className="res-kicker">Plantillas de catálogo, etiquetas y checklists. Gratis.</p>
                <h3 className="res-title">Kit para tu tienda</h3>
              </div>
              <span className="res-btn">descargar ahora</span>
              <span className="res-arrow">
                <svg viewBox="0 0 15 13" fill="none">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10.083 11.417 4-5.334m0 0-4-5.333m4 5.333H.75" />
                </svg>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
