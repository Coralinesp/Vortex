import { Link } from 'react-router-dom';
import Reveal from '../common/Reveal.jsx';
import { FEATURED_RESOURCES, RESOURCE_ICONS, RESOURCE_TAGS } from '../../data/resources.jsx';

export default function ResourceFeatured() {
  return (
    <div className="rc-feats">
      {FEATURED_RESOURCES.map((item) => {
        const isDownload = Boolean(item.href && item.download);
        const linkProps = isDownload
          ? { href: item.href, download: true }
          : { to: item.to || (item.slug ? `/recursos/guias/${item.slug}` : '#registro') };
        return (
          <Reveal as={isDownload ? 'a' : Link} className="rc-feat" style={{ '--bg': item.bg, '--fg': item.fg }} key={item.title} {...linkProps}>
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
