import { Link } from 'react-router-dom';
import Reveal from '../common/Reveal.jsx';

const WHATSAPP_MSG = encodeURIComponent('Hola, quiero agendar una demo de Vortex.');
const WHATSAPP_1 = `https://wa.me/18099735660?text=${WHATSAPP_MSG}`;
const WHATSAPP_2 = `https://wa.me/18098765665?text=${WHATSAPP_MSG}`;

export default function ContactSide() {
  return (
    <aside className="ct-side">
      <Reveal as="ul" className="ct-channels">
        <li>
          <span className="ct-ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.5 11.7a8.4 8.4 0 0 1-12.2 7.5L3.5 20.5l1.4-4.7a8.4 8.4 0 1 1 15.6-4.1Z" />
              <path d="M8.9 9.2c0 3.2 2.7 5.9 5.9 5.9l1.4-1.7-2.2-1-1 1a5 5 0 0 1-2.4-2.4l1-1-1-2.2-1.7 1.4Z" />
            </svg>
          </span>
          <div>
            <b>WhatsApp</b>
            <i>Lo más rápido, de 8:00 a 6:00</i>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-end' }}>
            <a href={WHATSAPP_1} target="_blank" rel="noopener noreferrer">
              (809) 973-5660
            </a>
            <a href={WHATSAPP_2} target="_blank" rel="noopener noreferrer">
              (809) 876-5665
            </a>
          </div>
        </li>
        <li>
          <span className="ct-ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
              <path d="m3.5 7 8.5 6 8.5-6" />
            </svg>
          </span>
          <div>
            <b>Correo</b>
            <i>Respuesta el mismo día hábil</i>
          </div>
          <a href="mailto:info@vortex.com">info@vortex.com</a>
        </li>
        <li>
          <span className="ct-ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 3.5H4.5A1.5 1.5 0 0 0 3 5c0 8.6 7.4 16 16 16a1.5 1.5 0 0 0 1.5-1.5V17l-4.5-1.5-2 2a13 13 0 0 1-6-6l2-2L7 3.5Z" />
            </svg>
          </span>
          <div>
            <b>Teléfono</b>
            <i>Lunes a viernes, 8:00 a 6:00</i>
          </div>
          <a href="tel:+18099735660">(809) 973-5660</a>
        </li>
      </Reveal>

      <Reveal as="div" className="ct-demo">
        <h3>¿Prefieres verlo funcionando?</h3>
        <p>Te mostramos Vortex con tus productos y tus precios en una llamada de 20 minutos.</p>
        <a className="ct-demo-btn" href={WHATSAPP_1} target="_blank" rel="noopener noreferrer">
          Agendar una demo
          <svg viewBox="0 0 15 13" fill="none" aria-hidden="true">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="m10.083 11.417 4-5.334m0 0-4-5.333m4 5.333H.75" />
          </svg>
        </a>
      </Reveal>

      <Reveal as="p" className="ct-note">
        ¿Solo buscas ayuda con algo del sistema? Empieza por el <Link to="/recursos">centro de recursos</Link> o las{' '}
        <Link to="/#faq">preguntas frecuentes</Link>.
      </Reveal>
    </aside>
  );
}
