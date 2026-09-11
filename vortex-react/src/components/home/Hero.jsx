import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useHeroParallax } from '../../hooks/useHeroParallax.js';

export default function Hero() {
  const heroRef = useRef(null);
  const stageRef = useRef(null);
  const contentRef = useRef(null);
  const appFrameRef = useRef(null);
  const backdropRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useHeroParallax({ heroRef, stageRef, contentRef, appFrameRef, backdropRef, leftCardRef, rightCardRef });

  return (
    <section className="hero demo-hero" id="top" ref={heroRef}>
      <div className="hero-backdrop" ref={backdropRef} aria-hidden="true">
        <div className="hero-orb hero-orb--one"></div>
        <div className="hero-orb hero-orb--two"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container hero-stage" ref={stageRef}>
        <div className="hero-scene">
          <div className="hero-content" ref={contentRef} style={{ '--d': '.05s' }}>
            <span className="pill">Control de ventas y facturación automática</span>

            <h1>
              El punto de venta
              <br />
              que <span className="grad">impulsa</span> tu negocio
            </h1>

            <p className="lead">
              Cobra en segundos, controla tu inventario en tiempo real y administra todas tus sucursales desde un
              solo lugar. Todo lo que necesitas para hacer crecer tu negocio sin complicarte con la administración.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary btn-lg" href="#registro">
                Comenzar prueba de 1 mes
              </a>
              <Link className="btn btn-outline btn-lg" to="/contacto#form">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="3" width="12" height="11" rx="2" />
                  <path d="M5 1.5v3M11 1.5v3M2 6.5h12" />
                </svg>
                Agendar una reunión
              </Link>
            </div>
          </div>

          <div className="hero-app-wrap" style={{ '--d': '.25s' }}>
            <div className="hero-app-frame" ref={appFrameRef}>
              <div className="hero-floating-card hero-floating-card--left" ref={leftCardRef} aria-hidden="true">
                <span className="fc-label">Venta del día</span>
                <strong>$42,180</strong>
                <span className="fc-delta up">▲ 18.4%</span>
              </div>

              <div className="hero-floating-card hero-floating-card--right" ref={rightCardRef} aria-hidden="true">
                <span className="fc-label">Tiempo por ticket</span>
                <strong>11 s</strong>
                <span className="fc-delta down">▼ 3.2 s</span>
              </div>

              <div
                className="hero-app"
                role="img"
                aria-label="Pantalla de venta de Vortex POS con el catálogo de productos y la factura en curso"
              >
                <aside className="va-side">
                  <div className="va-brand">
                    <span className="va-burger">
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                    VORTEX
                  </div>

                  <div className="va-user">
                    <span className="va-avatar"></span>
                    <span className="va-user-txt">
                      <b>Administrador</b>
                      <i>perezc@gmail.com</i>
                    </span>
                  </div>

                  <ul className="va-nav">
                    <li>
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.5 6.8 8 2.5l5.5 4.3v6a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-6Z" />
                      </svg>
                      Inicio
                    </li>
                    <li className="is-open">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 3h2l1.6 7.5h7L14 5.5H4.4" />
                        <circle cx="6.5" cy="13" r="1" />
                        <circle cx="12" cy="13" r="1" />
                      </svg>
                      Ventas
                    </li>
                  </ul>

                  <ul className="va-sub">
                    <li className="is-active">Venta</li>
                    <li>Registro de Ventas</li>
                    <li>Devoluciones</li>
                  </ul>

                  <ul className="va-nav">
                    <li>
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.5 5 8 2.2 13.5 5v6L8 13.8 2.5 11V5Z" />
                        <path d="M2.5 5 8 7.8 13.5 5M8 7.8v6" />
                      </svg>
                      Inventario
                    </li>
                    <li>
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="6.3" cy="5.8" r="2.3" />
                        <path d="M2 13v-.6A2.9 2.9 0 0 1 4.9 9.5h2.8a2.9 2.9 0 0 1 2.9 2.9v.6" />
                        <path d="M11 3.8a2.3 2.3 0 0 1 0 4M12 9.7a2.9 2.9 0 0 1 2 2.7v.6" />
                      </svg>
                      Clientes
                    </li>
                    <li>
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9.2 2H4.5a1.3 1.3 0 0 0-1.3 1.3v9.4A1.3 1.3 0 0 0 4.5 14h7a1.3 1.3 0 0 0 1.3-1.3V5.6L9.2 2Z" />
                        <path d="M9 2.3v3.4h3.5" />
                      </svg>
                      Facturas
                    </li>
                    <li>
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 13.5V8M8 13.5V4M13 13.5v-3.5" />
                      </svg>
                      Reportes
                    </li>
                    <li>
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="8" cy="8" r="2.1" />
                        <path d="M8 1.8v1.6M8 12.6v1.6M14.2 8h-1.6M3.4 8H1.8M12.4 3.6l-1.1 1.1M4.7 11.3l-1.1 1.1M12.4 12.4l-1.1-1.1M4.7 4.7 3.6 3.6" />
                      </svg>
                      Administración
                    </li>
                    <li>
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.5 6.5v-4h7v4" />
                        <rect x="2.2" y="6.5" width="11.6" height="5" rx="1.2" />
                        <path d="M4.5 9.5h7v4h-7z" />
                      </svg>
                      Impresoras
                    </li>
                  </ul>

                  <ul className="va-nav va-nav--foot">
                    <li>
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="8" cy="8" r="6" />
                        <path d="M6.4 6.2a1.7 1.7 0 1 1 2.3 1.6c-.4.2-.7.5-.7 1M8 11.2h.01" />
                      </svg>
                      Ayuda
                    </li>
                    <li>
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="8" cy="8" r="2.1" />
                        <path d="M8 1.8v1.6M8 12.6v1.6M14.2 8h-1.6M3.4 8H1.8" />
                      </svg>
                      Configuración
                    </li>
                  </ul>
                </aside>

                <div className="va-main">
                  <div className="va-top">
                    <b className="va-h1">POS</b>
                    <span className="va-date">martes, 22 de abril de 2025</span>
                    <span className="va-search">Buscar...</span>
                    <span className="va-bell">
                      <i>3</i>
                    </span>
                    <span className="va-chip">
                      <span className="va-chip-logo"></span>
                      <span className="va-chip-txt">
                        <b>Pollos Mr Fry</b>
                        <i>Central</i>
                      </span>
                    </span>
                  </div>

                  <div className="va-body">
                    <div className="va-cat">
                      <div className="va-toolbar">
                        <span className="va-input">Buscar Productos...</span>
                        <span className="va-filter">Filtros</span>
                        <span className="va-views">
                          <i></i>
                          <i className="on"></i>
                        </span>
                      </div>

                      <div className="va-chips">
                        <span className="is-active">Todo</span>
                        <span>Herramientas</span>
                        <span>Electricidad</span>
                        <span>Pintura</span>
                        <span>PVC</span>
                        <span>Accesorios</span>
                      </div>

                      <div className="va-grid">
                        {[
                          { name: 'Metro Truper', price: 'RD$ 180.00' },
                          { name: 'Taladro Truper', price: 'RD$ 740.00' },
                          { name: 'Spray Abro Rojo', price: 'RD$ 55.00' },
                          { name: 'Inter Doble', price: 'RD$ 50.00' },
                          { name: 'Metro Truper', price: 'RD$ 180.00' },
                          { name: 'Taladro Truper', price: 'RD$ 740.00' },
                        ].map((product, i) => (
                          <article className="va-prod" key={i}>
                            <span className="va-thumb"></span>
                            <div className="va-prod-row">
                              <b>{product.name}</b>
                              <em>{product.price}</em>
                            </div>
                            <div className="va-prod-row">
                              <i>Stock: 15</i>
                              <span className="va-add">Agregar</span>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>

                    <div className="va-inv">
                      <span className="va-inv-t">Factura de venta</span>

                      <div className="va-fields">
                        <span>
                          <i>Numeración</i>
                          <b>Consumo (02)</b>
                        </span>
                        <span>
                          <i>Estado</i>
                          <b>Completada</b>
                        </span>
                      </div>

                      <div className="va-sec">Información de Cliente</div>

                      <div className="va-lines">
                        {[0, 1, 2].map((i) => (
                          <div className="va-line" key={i}>
                            <div className="va-line-top">
                              <b>SPRAY ABRO ROJO</b>
                              <em>RD$ 450.0</em>
                            </div>
                            <div className="va-line-bot">
                              <span className="va-qty">
                                <i>−</i>
                                <u>3</u>
                                <i>+</i>
                              </span>
                              <em>RD$120 cu</em>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="va-totals">
                        <div>
                          <span>Subtotal:</span>
                          <b>RD$795.00</b>
                        </div>
                        <div>
                          <span>Descuento Total:</span>
                          <b>-RD$10.00</b>
                        </div>
                        <div>
                          <span>ITBIS (18%)</span>
                          <b>RD$141.30</b>
                        </div>
                        <div className="va-total">
                          <span>Total</span>
                          <b>RD$926.30</b>
                        </div>
                      </div>

                      <div className="va-actions">
                        <span className="va-btn va-btn--ghost">Cancelar</span>
                        <span className="va-btn va-btn--main">Procesar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
