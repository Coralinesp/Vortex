import { useRef, useState } from 'react';

const TODAY = new Date().toLocaleDateString('es-DO');

export default function LegalModal({ title, subtitle, sections, onClose, onAccept }) {
  const bodyRef = useRef(null);
  const [reachedEnd, setReachedEnd] = useState(!onAccept);

  function handleScroll(e) {
    const el = e.target;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 24) setReachedEnd(true);
  }

  return (
    <div className="legalm-overlay" onMouseDown={onClose}>
      <div className="legalm" role="dialog" aria-modal="true" aria-label={title} onMouseDown={(e) => e.stopPropagation()}>
        <header className="legalm-head">
          <h3>{title}</h3>
          <button type="button" className="legalm-close" onClick={onClose} aria-label="Cerrar">
            &times;
          </button>
        </header>

        <div className="legalm-body" ref={bodyRef} onScroll={onAccept ? handleScroll : undefined}>
          <h4 className="legalm-title">{subtitle}</h4>
          <p className="legalm-meta">VORTEX POS &amp; Management System &middot; Última actualización: {TODAY}</p>

          {sections.map((s) => (
            <section className="legalm-section" key={s.heading}>
              <h5>{s.heading}</h5>
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
        </div>

        <footer className="legalm-foot">
          {onAccept ? (
            <>
              <span className="legalm-hint">
                {reachedEnd ? '' : 'Debes desplazarte hasta el final del documento para poder aceptar.'}
              </span>
              <div className="legalm-actions">
                <button type="button" className="legalm-btn legalm-btn--ghost" onClick={onClose}>
                  Cancelar
                </button>
                <button type="button" className="legalm-btn legalm-btn--primary" disabled={!reachedEnd} onClick={onAccept}>
                  Aceptar
                </button>
              </div>
            </>
          ) : (
            <div className="legalm-actions" style={{ marginLeft: 'auto' }}>
              <button type="button" className="legalm-btn legalm-btn--primary" onClick={onClose}>
                Cerrar
              </button>
            </div>
          )}
        </footer>
      </div>
    </div>
  );
}
