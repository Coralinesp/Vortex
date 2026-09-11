import { Link } from 'react-router-dom';
import Reveal from '../common/Reveal.jsx';

export default function Detalles() {
  return (
    <section className="section detalles" id="detalles">
      <div className="container">
        <Reveal as="header" className="det-head">
          <h2>
            Lo que no se ve,
            <br />
            <em>pero te ahorra horas</em>
          </h2>
          <Link className="btn btn-primary btn-lg" to="/contacto#form">
            Agendar una reunión
          </Link>
        </Reveal>

        <ul className="det-grid">
          <Reveal as="li" className="det">
            <div className="det-art" aria-hidden="true">
              <div className="det-panel">
                <p className="det-mini">Camisa manga larga</p>
                <div className="det-chips">
                  <span className="is-on">S</span>
                  <span>M</span>
                  <span className="is-on">L</span>
                  <span>XL</span>
                </div>
                <div className="det-chips det-chips--color">
                  <span className="is-on" style={{ '--c': '#4459E1' }}></span>
                  <span style={{ '--c': '#1a2340' }}></span>
                  <span style={{ '--c': '#e0413c' }}></span>
                  <span style={{ '--c': '#22c55e' }}></span>
                </div>
                <ul className="det-rows">
                  <li>
                    <b>L · Azul</b>
                    <i>SKU 0001-LA</i>
                    <em>12</em>
                  </li>
                  <li>
                    <b>L · Negro</b>
                    <i>SKU 0001-LN</i>
                    <em>4</em>
                  </li>
                </ul>
              </div>
            </div>
            <h3>Variantes de productos</h3>
            <p>
              Talla, color, medida o presentación, cada una con su propio código, precio y existencia. Un solo
              producto en el catálogo, sin duplicados.
            </p>
          </Reveal>

          <Reveal as="li" className="det" delay=".06s">
            <div className="det-art" aria-hidden="true">
              <div className="det-panel">
                <p className="det-mini">Ventas de la semana</p>
                <p className="det-kpi">
                  RD$90,463<em>+24.1%</em>
                </p>
                <div className="det-chart">
                  <span style={{ '--h': '44%' }}></span>
                  <span style={{ '--h': '62%' }}></span>
                  <span style={{ '--h': '50%' }}></span>
                  <span style={{ '--h': '78%' }}></span>
                  <span style={{ '--h': '58%' }}></span>
                  <span style={{ '--h': '94%' }}></span>
                  <span style={{ '--h': '72%' }}></span>
                </div>
              </div>
            </div>
            <h3>Reportes a detalle</h3>
            <p>
              Ventas, márgenes, horas pico y desempeño por cajero. Los números que necesitas para decidir qué
              comprar y qué dejar de vender.
            </p>
          </Reveal>

          <Reveal as="li" className="det" delay=".12s">
            <div className="det-art" aria-hidden="true">
              <div className="det-panel">
                <p className="det-mini">128 productos seleccionados</p>
                <ul className="det-rows det-rows--check">
                  <li>
                    <span className="det-box is-on"></span>
                    <b>Arroz premium 5 lb</b>
                    <em>+10%</em>
                  </li>
                  <li>
                    <span className="det-box is-on"></span>
                    <b>Spray Abro rojo</b>
                    <em>+10%</em>
                  </li>
                  <li>
                    <span className="det-box is-on"></span>
                    <b>Metro Truper 8'</b>
                    <em>+10%</em>
                  </li>
                </ul>
                <div className="det-btn">Aplicar a todas las sucursales</div>
              </div>
            </div>
            <h3>Cambios en lote</h3>
            <p>
              Sube precios, cambia categorías o ajusta existencias de cientos de productos a la vez, y que todas
              las sucursales queden iguales.
            </p>
          </Reveal>

          <Reveal as="li" className="det" delay=".06s">
            <div className="det-art det-art--phone" aria-hidden="true">
              <img
                className="det-shot"
                src="/assets/ChatGPT%20Image%20Sep%203,%202026,%2008_09_34%20PM.png"
                alt=""
                loading="lazy"
                width="877"
                height="1746"
              />
            </div>
            <h3>Entra desde donde estés</h3>
            <p>
              Revisa las ventas del día, cambia un precio o das de alta un producto desde el celular, sin tener que
              ir a la tienda.
            </p>
          </Reveal>

          <Reveal as="li" className="det" delay=".12s">
            <div className="det-art" aria-hidden="true">
              <div className="det-panel det-panel--offline">
                <div className="do-top">
                  <span className="det-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M3.5 8.5a14 14 0 0 1 5-3M12 5.2c2.9 0 5.7 1 8 3M6.8 12.2a9 9 0 0 1 3-1.7M14.5 10.7a9 9 0 0 1 2.8 1.6M10 15.6a4 4 0 0 1 4.1 0M12 19h.01M3 3l18 18" />
                    </svg>
                    Sin conexión
                  </span>
                  <span className="do-count">3 en cola</span>
                </div>

                <p className="det-off">Sigues cobrando</p>

                <ul className="do-queue">
                  <li>
                    <span className="do-tick"></span>
                    <b>Ticket 0001-0042</b>
                    <i>10:42</i>
                    <em>RD$1,240</em>
                  </li>
                  <li>
                    <span className="do-tick"></span>
                    <b>Ticket 0001-0041</b>
                    <i>10:38</i>
                    <em>RD$860</em>
                  </li>
                  <li>
                    <span className="do-tick"></span>
                    <b>Ticket 0001-0040</b>
                    <i>10:31</i>
                    <em>RD$2,190</em>
                  </li>
                </ul>

                <div className="do-bar">
                  <span></span>
                </div>
                <p className="do-note">Se sincronizan solas en cuanto vuelve la señal</p>
              </div>
            </div>
            <h3>Servicio sin interrupciones</h3>
            <p>
              Si se cae el internet, la caja sigue abierta. Vortex guarda cada venta en el equipo y sincroniza todo
              en cuanto vuelve la señal.
            </p>
          </Reveal>

          <Reveal as="li" className="det" delay=".18s">
            <div className="det-art" aria-hidden="true">
              <div className="det-chat">
                <div className="dc-head">
                  <span className="dc-av">V</span>
                  <div>
                    <b>Soporte Vortex</b>
                    <i>
                      <span className="dc-dot"></span>En línea
                    </i>
                  </div>
                </div>
                <p className="dc-msg dc-msg--me">
                  ¿Cómo hago una devolución?<em>10:42</em>
                </p>
                <p className="dc-msg dc-msg--them">
                  Abres la factura y le das a Devolver 👌<em>10:43</em>
                </p>
                <p className="dc-msg dc-msg--them dc-typing">
                  <i></i>
                  <i></i>
                  <i></i>
                </p>
              </div>
            </div>
            <h3>Soporte que sí contesta</h3>
            <p>
              Gente que entiende un sábado con la tienda llena. Chat en español, con respuesta el mismo día y
              prioridad 24 horas en los planes Profesional y Empresarial.
            </p>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
