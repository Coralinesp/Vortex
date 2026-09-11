import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../common/Reveal.jsx';
import { FAQ_ITEMS } from '../../data/faqItems.js';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="faq-layout">
          <Reveal as="aside" className="faq-aside">
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2>Lo que todos nos preguntan</h2>
            <p className="faq-sub">Tus dudas, resueltas.</p>
            <p className="faq-support faq-support--desk">
              ¿No encuentras lo que buscas? Escríbele a nuestro <Link to="/contacto#form">equipo de soporte</Link>.
            </p>
          </Reveal>

          <div className="faq" id="faqAccordion">
            {FAQ_ITEMS.map((item, index) => {
              const open = openIndex === index;
              const triggerId = `faq-t${index + 1}`;
              const panelId = `faq-p${index + 1}`;
              return (
                <Reveal as="div" className={`faq-item${open ? ' is-open' : ''}`} key={item.question}>
                  <h3 className="faq-heading">
                    <button
                      className="faq-trigger"
                      type="button"
                      id={triggerId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => toggle(index)}
                    >
                      <span>{item.question}</span>
                      <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </h3>
                  <div className="faq-panel" id={panelId} role="region" aria-labelledby={triggerId}>
                    <div className="faq-panel-inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal as="p" className="faq-support faq-support--mobile">
            ¿No encuentras lo que buscas? Escríbele a nuestro <Link to="/contacto#form">equipo de soporte</Link>.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
