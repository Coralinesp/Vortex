import { useState } from 'react';
import DocsImageModal from './DocsImageModal.jsx';

function DocsStepList({ items }) {
  return (
    <dl className="docs-step-list">
      {items.map((item) => {
        const sep = item.indexOf(':');
        if (sep === -1) {
          return (
            <div className="docs-step-list-row" key={item}>
              <dd>{item}</dd>
            </div>
          );
        }
        return (
          <div className="docs-step-list-row" key={item}>
            <dt>{item.slice(0, sep)}</dt>
            <dd>{item.slice(sep + 1).trim()}</dd>
          </div>
        );
      })}
    </dl>
  );
}

export default function DocsStep({ index, step, isLast }) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const paragraphs = Array.isArray(step.body) ? step.body : step.body ? [step.body] : [];

  return (
    <article className={`docs-step${isLast ? ' is-last' : ''}`}>
      <div className="docs-step-rail" aria-hidden="true">
        <span className="docs-step-number">{index}</span>
        <span className="docs-step-line" />
      </div>

      <div className="docs-step-content">
        <h3>{step.title}</h3>

        <div className="docs-step-body">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {step.note && (
          <div className="docs-step-note">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 9v4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="10" cy="6.4" r="1" fill="currentColor" />
            </svg>
            <p>{step.note}</p>
          </div>
        )}

        {step.image && (
          <>
            <figure className="docs-step-media">
              <button
                type="button"
                className="docs-step-media-trigger"
                onClick={() => setIsImageOpen(true)}
                aria-label={`Ampliar imagen: ${step.imageAlt || step.title}`}
              >
                <img src={step.image} alt={step.imageAlt || step.title} loading="lazy" />
              </button>
              <figcaption>{step.imageAlt || step.title}</figcaption>
            </figure>

            {isImageOpen && (
              <DocsImageModal
                src={step.image}
                alt={step.imageAlt || step.title}
                onClose={() => setIsImageOpen(false)}
              />
            )}
          </>
        )}

        {step.list && (
          <details className="docs-step-details">
            <summary>
              <span>Ver detalles</span>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 6l4 4 4-4" />
              </svg>
            </summary>
            <DocsStepList items={step.list} />
          </details>
        )}
      </div>
    </article>
  );
}
