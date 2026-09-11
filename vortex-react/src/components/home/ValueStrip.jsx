import Reveal from '../common/Reveal.jsx';

const VALUES = [
  {
    title: 'Soporte 24/7',
    description:
      'Un equipo real te responde por teléfono, correo y chat a cualquier hora, también fines de semana y días festivos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 14v-2a7.5 7.5 0 0 1 15 0v2" />
        <rect x="2.75" y="13.5" width="3.5" height="5.5" rx="1.75" />
        <rect x="17.75" y="13.5" width="3.5" height="5.5" rx="1.75" />
        <path d="M19.5 19v.5a2.5 2.5 0 0 1-2.5 2.5h-2" />
      </svg>
    ),
  },
  {
    title: 'Inventario sincronizado',
    description: 'Cada venta descuenta el stock al instante en todas tus cajas y sucursales. Un solo inventario, siempre al día.',
    delay: '.06s',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 9.5a8 8 0 0 1 13.4-3.4L20 8.5" />
        <path d="M20 4.5v4h-4" />
        <path d="M20 14.5a8 8 0 0 1-13.4 3.4L4 15.5" />
        <path d="M4 19.5v-4h4" />
      </svg>
    ),
  },
  {
    title: 'Tu información protegida',
    description: 'Respaldo automático y cifrado de cada venta. Aunque se pierda o se rompa un equipo, tu historial sigue intacto.',
    delay: '.12s',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3.25 19 6v5.5c0 4.2-2.8 7.6-7 9.25-4.2-1.65-7-5.05-7-9.25V6l7-2.75Z" />
        <path d="M9.25 12.15 11.4 14.3l3.6-4" />
      </svg>
    ),
  },
  {
    title: 'Listo para crecer',
    description:
      'Del mostrador único a varias sucursales con el mismo Vortex, sin migrar de sistema. Activas lo que necesites cuando lo necesites.',
    delay: '.18s',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5V13M10 19.5V9M16 19.5v-6M4.5 6.5 9 4l4 2.5 6.5-3" />
        <path d="M19.5 3.5v3.2M19.5 3.5h-3.2" />
      </svg>
    ),
  },
];

export default function ValueStrip() {
  return (
    <section className="value-strip">
      <div className="container">
        <ul className="value-grid">
          {VALUES.map((item) => (
            <Reveal as="li" className="value-item" delay={item.delay} key={item.title}>
              <span className="value-icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
