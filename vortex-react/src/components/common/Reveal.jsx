import { useReveal } from '../../hooks/useReveal.js';

/* Envoltorio genérico para el patrón class="reveal" + IntersectionObserver del
   sitio original: agrega "is-visible" cuando el elemento entra en pantalla, y
   admite --d (retraso de la animación) vía la prop delay. */
export default function Reveal({ as: Tag = 'div', className = '', delay, style, children, ...rest }) {
  const { ref, isVisible } = useReveal();
  const mergedStyle = delay ? { ...(style || {}), '--d': delay } : style;
  const classes = ['reveal', isVisible && 'is-visible', className].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={classes} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  );
}
