import { useState } from 'react';
import DocsImageModal from './DocsImageModal.jsx';

export default function DocsStep({ index, step }) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <article className="docs-step">
      <div className="docs-step-head">
        <span className="docs-step-number">{index}</span>
        <h3>{step.title}</h3>
      </div>

      {step.body && <p>{step.body}</p>}

      {step.list && (
        <ul>
          {step.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
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
    </article>
  );
}
