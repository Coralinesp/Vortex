import { Link, useLocation } from 'react-router-dom';

/* Funciones, FAQ y los enlaces al tope de inicio son anclas de la página de
   inicio: si ya estamos ahí, ancla directa; si no, hay que navegar primero. */
function HomeAnchorLink({ pathname, hash, children }) {
  if (pathname === '/') return <a href={hash}>{children}</a>;
  return <Link to={`/${hash}`}>{children}</Link>;
}

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" to="/">
            <img src="/assets/vortex (1).png" alt="Vortex" className="brand-logo" />
          </Link>
          <p>El sistema de punto de venta en la nube para negocios que no se quieren detener.</p>
        </div>

        <nav className="footer-col" aria-label="Producto">
          <h4>Producto</h4>
          <HomeAnchorLink pathname={pathname} hash="#funciones">
            Funciones
          </HomeAnchorLink>
          <Link to="/planes">Planes</Link>
          <Link to="/recursos">Recursos</Link>
          {pathname === '/contacto' ? <Link to="/contacto">Prueba gratis</Link> : <a href="#registro">Prueba gratis</a>}
        </nav>

        <nav className="footer-col" aria-label="Empresa">
          <h4>Empresa</h4>
          <HomeAnchorLink pathname={pathname} hash="#faq">
            Preguntas
          </HomeAnchorLink>
          <HomeAnchorLink pathname={pathname} hash="#top">
            Blog
          </HomeAnchorLink>
          <HomeAnchorLink pathname={pathname} hash="#top">
            Trabaja con nosotros
          </HomeAnchorLink>
        </nav>

        <nav className="footer-col" aria-label="Soporte">
          <h4>Soporte</h4>
          <HomeAnchorLink pathname={pathname} hash="#top">
            Centro de ayuda
          </HomeAnchorLink>
          <HomeAnchorLink pathname={pathname} hash="#top">
            Estado del servicio
          </HomeAnchorLink>
          <HomeAnchorLink pathname={pathname} hash="#top">
            Documentación API
          </HomeAnchorLink>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </div>

      <div className="container footer-bottom">
        <p>
          &copy; <span id="year">{new Date().getFullYear()}</span> Vortex POS. Todos los derechos reservados.
        </p>
        <p className="footer-legal">
          <HomeAnchorLink pathname={pathname} hash="#top">
            Privacidad
          </HomeAnchorLink>
          <HomeAnchorLink pathname={pathname} hash="#top">
            Términos
          </HomeAnchorLink>
          <HomeAnchorLink pathname={pathname} hash="#top">
            Cookies
          </HomeAnchorLink>
        </p>
      </div>
    </footer>
  );
}
