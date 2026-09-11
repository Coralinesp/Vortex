import { usePageMeta } from '../hooks/usePageMeta.js';
import Reveal from '../components/common/Reveal.jsx';
import ContactForm from '../components/contacto/ContactForm.jsx';
import ContactSide from '../components/contacto/ContactSide.jsx';

export default function ContactoPage() {
  usePageMeta(
    'Contacto — Vortex POS',
    'Habla con el equipo de Vortex: escríbenos por WhatsApp, correo o el formulario y te respondemos el mismo día hábil.'
  );

  return (
    <section className="section section-first contacto" id="contacto">
      <div className="container">
        <Reveal as="header" className="ct-head">
          <span className="eyebrow">Contacto</span>
          <h2>
            Hablemos de <em>tu negocio</em>
          </h2>
          <p>
            Cuéntanos qué vendes y cómo trabajas hoy. Te respondemos el mismo día hábil con una propuesta
            concreta, no con un catálogo genérico.
          </p>
        </Reveal>

        <div className="ct-grid">
          <ContactForm />
          <ContactSide />
        </div>
      </div>
    </section>
  );
}
