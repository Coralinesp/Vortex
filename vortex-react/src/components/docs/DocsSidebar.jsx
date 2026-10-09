import { Link } from 'react-router-dom';
import { getDocModuleList } from '../../data/docs.jsx';

export default function DocsSidebar({ activeSlug }) {
  const modules = getDocModuleList();

  return (
    <nav className="docs-sidebar" aria-label="Módulos de documentación">
      <Link to="/documentacion/videos" className="docs-sidebar-videos">
        <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M4.5 3.3c0-.7.8-1.2 1.5-.8l7 4.7c.6.4.6 1.3 0 1.7l-7 4.7c-.7.4-1.5 0-1.5-.8V3.3Z" />
        </svg>
        Ver videos
      </Link>

      <span className="docs-sidebar-label">Módulos</span>
      <ul>
        {modules.map((mod) => (
          <li key={mod.slug}>
            <Link
              to={`/documentacion/${mod.slug}`}
              className={mod.slug === activeSlug ? 'is-active' : undefined}
              aria-current={mod.slug === activeSlug ? 'page' : undefined}
            >
              {mod.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
