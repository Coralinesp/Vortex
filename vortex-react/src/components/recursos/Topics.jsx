import { Link } from 'react-router-dom';
import Reveal from '../common/Reveal.jsx';
import { TOPICS } from '../../data/resources.jsx';

export default function Topics() {
  return (
    <section className="section temas" id="temas">
      <div className="container">
        <Reveal as="header" className="tem-head">
          <span className="eyebrow">Centro de ayuda</span>
          <h2>
            Busca por <em>tema</em>
          </h2>
          <p>Cada sección reúne lo que necesitas saber de esa parte del sistema.</p>
        </Reveal>

        <ul className="tem-grid">
          {TOPICS.map((topic) => (
            <Reveal as="li" className="tem" delay={topic.delay} key={topic.title}>
              <Link to={`/recursos/guias/${topic.slug}`}>
                <span className="tem-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {topic.icon}
                  </svg>
                </span>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <span className="tem-count">{topic.count}</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
