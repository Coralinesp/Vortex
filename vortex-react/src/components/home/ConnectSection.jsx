import Reveal from '../common/Reveal.jsx';

function Benefit({ children }) {
  return (
    <li>
      <svg
        className="bi"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4.5 10.5l4 4 7-8.5" />
      </svg>
      {children}
    </li>
  );
}

/* Sección "Producto"/"Inventario": misma plantilla, con el orden de la
   columna de texto y la imagen invertido cuando flip=true (igual que
   .connect--flip en el HTML original, que reordena el marcado, no solo el
   CSS). El elemento que queda segundo en el DOM es el que trae --d:.1s. */
export default function ConnectSection({ id, flip = false, badge, title, lead, benefits, image }) {
  const copy = (
    <Reveal as="div" className="connect-copy" delay={flip ? '.1s' : undefined} key="copy">
      <span className="connect-badge">{badge}</span>
      <h2>{title}</h2>
      <p className="connect-lead">{lead}</p>
      <ul className="benefit-list">
        {benefits.map((benefit, i) => (
          <Benefit key={i}>{benefit}</Benefit>
        ))}
      </ul>
    </Reveal>
  );

  const visual = (
    <Reveal as="div" className="connect-visual" delay={flip ? undefined : '.1s'} key="visual">
      <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
    </Reveal>
  );

  return (
    <section className={`section connect${flip ? ' connect--flip' : ''}`} id={id}>
      <div className="container connect-inner">
        {flip ? (
          <>
            {visual}
            {copy}
          </>
        ) : (
          <>
            {copy}
            {visual}
          </>
        )}
      </div>
    </section>
  );
}
