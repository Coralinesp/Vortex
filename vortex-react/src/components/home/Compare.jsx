import Reveal from '../common/Reveal.jsx';

const WITHOUT = [
  'Las ventas se anotan en un cuaderno y algunas se pierden',
  'El inventario nunca cuadra con lo que hay en la estantería',
  'Facturar significa volver a capturar todo en otro programa',
  'No sabes qué producto deja dinero y cuál te lo está quitando',
  'Si se cae el internet, se para la caja',
];

const WITH = [
  'Cada cobro queda registrado en el momento en que ocurre',
  'El stock se descuenta solo, en todas tus cajas y sucursales',
  'La factura sale del mismo ticket, sin recapturar nada',
  'Ves el margen real por producto, por hora y por cajero',
  'Sigues cobrando sin conexión y todo se sincroniza al volver',
];

function XIcon() {
  return (
    <svg className="ci ci-x" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <path d="M5 5l10 10M15 5L5 15" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="ci ci-check" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 10.5l4 4 7-8.5" />
    </svg>
  );
}

export default function Compare() {
  return (
    <section className="section compare">
      <div className="container">
        <h2 className="compare-title reveal">
          Una mejor forma <span className="grad">de vender</span>
        </h2>

        <Reveal as="div" className="compare-grid" delay=".08s">
          <article className="cmp-card cmp-card--before">
            <div className="cmp-media">
              <img
                src="/assets/sinvortex.png"
                alt="Comerciante agobiada anotando ventas a mano en un cuaderno, rodeada de tickets de papel sobre el mostrador"
                width="1448"
                height="1086"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="cmp-body">
              <h3>Sin Vortex</h3>
              <ul className="cmp-list">
                {WITHOUT.map((text) => (
                  <li key={text}>
                    <XIcon />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="cmp-card cmp-card--after">
            <div className="cmp-media">
              <img
                src="/assets/convortex.png"
                alt="Cajera cobrando a una clienta en una terminal de punto de venta y entregando el ticket impreso"
                width="1448"
                height="1086"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="cmp-body">
              <h3>Con Vortex</h3>
              <ul className="cmp-list">
                {WITH.map((text) => (
                  <li key={text}>
                    <CheckIcon />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
