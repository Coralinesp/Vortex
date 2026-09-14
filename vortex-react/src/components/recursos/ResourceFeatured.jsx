import { Link } from 'react-router-dom';
import Reveal from '../common/Reveal.jsx';
import { FEATURED_RESOURCES, RESOURCE_ICONS, RESOURCE_TAGS } from '../../data/resources.jsx';

export default function ResourceFeatured() {
  return (
    <div className="rc-feats">
      {FEATURED_RESOURCES.map((item) => {
        const linkProps = item.slug ? { to: `/recursos/guias/${item.slug}` } : { href: '#registro' };
        return (
          <Reveal as={item.slug ? Link : 'a'} className="rc-feat" style={{ '--bg': item.bg, '--fg': item.fg }} key={item.title} {...linkProps}>
            <span className="rc-tag">{RESOURCE_TAGS[item.tipo]}</span>
            <span className="rc-deco" aria-hidden="true">
              <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                {RESOURCE_ICONS[item.tipo]}
              </svg>
            </span>
            <h3>{item.title}</h3>
            <span className="rc-btn">{item.ctaLabel}</span>
          </Reveal>
        );
      })}
    </div>
  );
}
