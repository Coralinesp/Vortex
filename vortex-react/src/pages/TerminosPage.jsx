import { Link } from 'react-router-dom';
import Reveal from '../components/common/Reveal.jsx';
import { usePageMeta } from '../hooks/usePageMeta.js';

export default function TerminosPage() {
  usePageMeta(
    'Términos de servicio — Vortex POS',
    'Condiciones de uso del sistema Vortex POS, operado por Arcode Dominicana.'
  );

  return (
    <section className="section section-first">
      <div className="container">
        <Reveal as="header" className="legal-head">
          <span className="eyebrow">Legal</span>
          <h1>Términos de servicio</h1>
          <p>Vigente desde el 15 de septiembre de 2026.</p>
        </Reveal>

        <Reveal as="div" className="legal-body">
          <section>
            <h2>1. Aceptación</h2>
            <p>
              Al crear una cuenta o usar Vortex POS aceptas estos términos. Si los usas en nombre de una empresa,
              declaras tener autoridad para aceptarlos en su nombre.
            </p>
          </section>

          <section>
            <h2>2. El servicio</h2>
            <p>
              Vortex POS es un sistema de punto de venta en la nube: ventas, inventario, facturación electrónica,
              reportes y gestión de sucursales, ofrecido por Arcode Dominicana bajo un modelo de suscripción.
            </p>
          </section>

          <section>
            <h2>3. Tu cuenta</h2>
            <ul>
              <li>Eres responsable de la información que registras y de mantener tu clave segura.</li>
              <li>Debes darnos información veraz sobre tu empresa (RNC/cédula, contacto) para poder facturar.</li>
              <li>Puedes tener varios usuarios por cuenta, con permisos según su rol dentro de tu negocio.</li>
            </ul>
          </section>

          <section>
            <h2>4. Suscripción y pagos</h2>
            <p>
              El acceso a Vortex POS es por suscripción, con planes descritos en <Link to="/planes">Planes</Link>.
              Los pagos se procesan mediante Stripe o PayPal. Puedes cambiar o cancelar tu plan cuando lo necesites
              desde tu cuenta.
            </p>
          </section>

          <section>
            <h2>5. Tus datos</h2>
            <p>
              Los datos de tus ventas, inventario y clientes te pertenecen a ti. Los usamos únicamente para
              operar el servicio, según nuestra <Link to="/privacidad">Política de privacidad</Link>.
            </p>
          </section>

          <section>
            <h2>6. Disponibilidad</h2>
            <p>
              Trabajamos para mantener Vortex POS disponible de forma continua, pero puede haber mantenimientos
              programados o interrupciones puntuales. Puedes ver el estado actual en{' '}
              <Link to="/estado-del-servicio">Estado del servicio</Link>.
            </p>
          </section>

          <section>
            <h2>7. Cambios</h2>
            <p>
              Podemos actualizar estos términos para reflejar cambios en el producto o la ley. Si el cambio es
              importante, te avisaremos por correo o dentro del sistema.
            </p>
          </section>
        </Reveal>
      </div>
    </section>
  );
}
