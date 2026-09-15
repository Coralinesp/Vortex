import { Link, useLocation } from 'react-router-dom';
import { useHeaderScroll } from '../../hooks/useHeaderScroll.js';
import { useMobileNav } from '../../hooks/useMobileNav.js';

/* Funciones y FAQ solo existen como secciones de la página de inicio: si ya
   estamos ahí, son anclas normales; si no, hay que navegar a inicio primero. */
function HomeAnchorLink({ pathname, hash, children }) {
  if (pathname === '/') return <a href={hash}>{children}</a>;
  return <Link to={`/${hash}`}>{children}</Link>;
}

export default function Header() {
  const location = useLocation();
  const { pathname } = location;
  const isScrolled = useHeaderScroll();
  const { open, toggle, close, toggleRef } = useMobileNav();

  function handleNavClick(e) {
    if (e.target.tagName === 'A') close();
  }

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`} id="header">
      <div className="container header-inner">
        <Link className="brand" to="/" aria-label="Vortex, inicio">
          <img src="/assets/vortex (1).png" alt="Vortex" className="brand-logo" />
        </Link>

        <nav
          className={`nav${open ? ' is-open' : ''}`}
          id="nav"
          aria-label="Navegación principal"
          onClick={handleNavClick}
        >
          <HomeAnchorLink pathname={pathname} hash="#funciones">
            Funciones
          </HomeAnchorLink>

          {pathname === '/planes' ? (
            <a href="#precios" aria-current="page">
              Planes
            </a>
          ) : (
            <Link to="/planes">Planes</Link>
          )}

          {pathname === '/' || pathname === '/recursos' ? (
            <a href="#recursos" aria-current={pathname === '/recursos' ? 'page' : undefined}>
              Recursos
            </a>
          ) : (
            <Link to="/recursos">Recursos</Link>
          )}

          <Link to="/documentacion" aria-current={pathname.startsWith('/documentacion') ? 'page' : undefined}>
            Documentación
          </Link>

          <HomeAnchorLink pathname={pathname} hash="#faq">
            FAQ
          </HomeAnchorLink>

          <Link to="/contacto" aria-current={pathname === '/contacto' ? 'page' : undefined}>
            Contacto
          </Link>

          <div className="nav-cta">
            <Link className="btn btn-ghost" to="/registro" aria-current={pathname === '/registro' ? 'page' : undefined}>
              Regístrate
            </Link>
            <Link className="btn btn-primary" to="/registro" aria-current={pathname === '/registro' ? 'page' : undefined}>
              Prueba gratis
            </Link>
          </div>
        </nav>

        <button
          className="nav-toggle"
          id="navToggle"
          ref={toggleRef}
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={toggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
