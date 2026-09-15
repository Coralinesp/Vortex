import { Link } from 'react-router-dom';
import { getDocModuleList } from '../../data/docs.jsx';

export default function DocsSidebar({ activeSlug }) {
  const modules = getDocModuleList();

  return (
    <nav className="docs-sidebar" aria-label="Módulos de documentación">
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
