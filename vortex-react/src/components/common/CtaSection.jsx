import { useState } from 'react';
import Reveal from './Reveal.jsx';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function CtaSection() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState({ text: '', kind: '' });

  function handleSubmit(e) {
    e.preventDefault();
    const value = email.trim();

    if (!EMAIL_RE.test(value)) {
      setError(true);
      setMessage({ text: 'Escribe un correo válido para continuar.', kind: 'err' });
      return;
    }

    setError(false);
    setMessage({ text: `¡Listo! Te enviamos el acceso a tu prueba de 1 mes a ${value}.`, kind: 'ok' });
    setEmail('');
  }

  function handleChange(e) {
    setEmail(e.target.value);
    setError(false);
    setMessage((prev) => (prev.kind === 'err' ? { text: '', kind: '' } : prev));
  }

  return (
    <section className="cta" id="registro">
      <div className="container">
        <Reveal className="cta-box">
          <div className="cta-copy">
            <h2>
              Empieza hoy
              <br />
              con Vortex
            </h2>
            <p>Prueba Vortex 1 mes gratis, con acceso a todas las funciones. Sin tarjeta y cancelas cuando quieras.</p>

            <form className="cta-form" id="ctaForm" noValidate onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="email">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu@negocio.com"
                autoComplete="email"
                required
                className={error ? 'is-error' : ''}
                value={email}
                onChange={handleChange}
              />
              <button className="cta-submit" type="submit">
                Empezar prueba gratis
                <svg viewBox="0 0 15 13" fill="none" aria-hidden="true">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                    d="m10.083 11.417 4-5.334m0 0-4-5.333m4 5.333H.75"
                  />
                </svg>
              </button>
            </form>
            <p className={`cta-msg${message.kind ? ' ' + message.kind : ''}`} id="ctaMsg" role="status" aria-live="polite">
              {message.text}
            </p>
          </div>

          <div className="cta-shot" aria-hidden="true">
            <div className="cta-app">
              <img src="/assets/Reportes%20ventas.png" alt="" loading="lazy" width="1440" height="1497" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
