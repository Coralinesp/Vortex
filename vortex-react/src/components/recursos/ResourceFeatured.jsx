import Reveal from '../common/Reveal.jsx';
import { FEATURED_RESOURCES, RESOURCE_ICONS, RESOURCE_TAGS } from '../../data/resources.jsx';

export default function ResourceFeatured() {
  return (
    <div className="rc-feats">
      {FEATURED_RESOURCES.map((item) => (
        <Reveal as="a" className="rc-feat" href="#registro" style={{ '--bg': item.bg, '--fg': item.fg }} key={item.title}>
          <span className="rc-tag">{RESOURCE_TAGS[item.tipo]}</span>
          <span className="rc-deco" aria-hidden="true">
            <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              {RESOURCE_ICONS[item.tipo]}
            </svg>
          </span>
          <h3>{item.title}</h3>
          <span className="rc-btn">{item.ctaLabel}</span>
        </Reveal>
      ))}
    </div>
  );
}
