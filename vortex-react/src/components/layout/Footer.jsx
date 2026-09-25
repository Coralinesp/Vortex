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
          <Link to="/blog">Blog</Link>
        </nav>

        <nav className="footer-col" aria-label="Soporte">
          <h4>Soporte</h4>
          <Link to="/centro-de-ayuda">Centro de ayuda</Link>
          <Link to="/estado-del-servicio">Estado del servicio</Link>
          <Link to="/documentacion">Documentación</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </div>

      <div className="container footer-bottom">
        <p>
          &copy; <span id="year">{new Date().getFullYear()}</span> Vortex POS. Todos los derechos reservados.
          Desarrollado por Arcode Dominicana.
        </p>
        <p className="footer-legal">
          <Link to="/privacidad">Privacidad</Link>
          <Link to="/terminos">Términos</Link>
          <Link to="/cookies">Cookies</Link>
        </p>
      </div>
    </footer>
  );
}
