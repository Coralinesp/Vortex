import { useRef, useState } from 'react';
import Reveal from '../common/Reveal.jsx';
import { enviarContacto } from '../../services/contactApi.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const INITIAL_VALUES = {
  nombre: '',
  negocio: '',
  correo: '',
  telefono: '',
  sucursales: '1',
  giro: 'Colmado o minimarket',
  mensaje: '',
};

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({ nombre: false, negocio: false, correo: false });
  const [message, setMessage] = useState({ text: '', kind: '' });
  const [submitting, setSubmitting] = useState(false);

  const nombreRef = useRef(null);
  const negocioRef = useRef(null);
  const correoRef = useRef(null);
  const fieldRefs = { nombre: nombreRef, negocio: negocioRef, correo: correoRef };

  function handleChange(field) {
    return (e) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      if (field in errors) setErrors((prev) => ({ ...prev, [field]: false }));
      setMessage((prev) => (prev.kind === 'err' ? { text: '', kind: '' } : prev));
    };
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const required = [
      { field: 'nombre', aviso: 'Escribe tu nombre.', valido: values.nombre.trim().length > 1 },
      { field: 'negocio', aviso: 'Dinos cómo se llama tu negocio.', valido: values.negocio.trim().length > 1 },
      { field: 'correo', aviso: 'Escribe un correo válido para responderte.', valido: EMAIL_RE.test(values.correo.trim()) },
    ];

    const nextErrors = {};
    let fallo = null;
    required.forEach(({ field, aviso, valido }) => {
      nextErrors[field] = !valido;
      if (!valido && !fallo) fallo = { field, aviso };
    });
    setErrors(nextErrors);

    if (fallo) {
      setMessage({ text: fallo.aviso, kind: 'err' });
      fieldRefs[fallo.field].current?.focus();
      return;
    }

    setSubmitting(true);
    try {
      await enviarContacto(values);
      setMessage({ text: '¡Listo! Recibimos tu mensaje, te respondemos el mismo día hábil.', kind: 'ok' });
      setValues(INITIAL_VALUES);
    } catch (err) {
      setMessage({ text: err.message, kind: 'err' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Reveal as="div" className="ct-form-card" id="form">
      <form className="ct-form" id="contactForm" noValidate onSubmit={handleSubmit}>
        <div className="ct-row">
          <label className="ct-field">
            <span>Nombre y apellido</span>
            <input
              type="text"
              name="nombre"
              id="ctNombre"
              autoComplete="name"
              required
              ref={nombreRef}
              className={errors.nombre ? 'is-error' : ''}
              value={values.nombre}
              onChange={handleChange('nombre')}
            />
          </label>
          <label className="ct-field">
            <span>Nombre del negocio</span>
            <input
              type="text"
              name="negocio"
              id="ctNegocio"
              autoComplete="organization"
              required
              ref={negocioRef}
              className={errors.negocio ? 'is-error' : ''}
              value={values.negocio}
              onChange={handleChange('negocio')}
            />
          </label>
        </div>

        <div className="ct-row">
          <label className="ct-field">
            <span>Correo</span>
            <input
              type="email"
              name="correo"
              id="ctCorreo"
              placeholder="tu@negocio.com"
              autoComplete="email"
              required
              ref={correoRef}
              className={errors.correo ? 'is-error' : ''}
              value={values.correo}
              onChange={handleChange('correo')}
            />
          </label>
          <label className="ct-field">
            <span>Teléfono o WhatsApp</span>
            <input
              type="tel"
              name="telefono"
              id="ctTelefono"
              placeholder="(809) 000-0000"
              autoComplete="tel"
              value={values.telefono}
              onChange={handleChange('telefono')}
            />
          </label>
        </div>

        <div className="ct-row">
          <label className="ct-field">
            <span>¿Cuántas sucursales?</span>
            <select name="sucursales" id="ctSucursales" value={values.sucursales} onChange={handleChange('sucursales')}>
              <option value="1">Una</option>
              <option value="2-3">Entre 2 y 3</option>
              <option value="4-10">Entre 4 y 10</option>
              <option value="10+">Más de 10</option>
            </select>
          </label>
          <label className="ct-field">
            <span>¿Qué vendes?</span>
            <select name="giro" id="ctGiro" value={values.giro} onChange={handleChange('giro')}>
              <option>Colmado o minimarket</option>
              <option>Ropa y boutique</option>
              <option>Restaurante o café</option>
              <option>Ferretería</option>
              <option>Farmacia</option>
              <option>Otro giro</option>
            </select>
          </label>
        </div>

        <label className="ct-field">
          <span>Cuéntanos qué necesitas</span>
          <textarea
            name="mensaje"
            id="ctMensaje"
            rows="4"
            placeholder="Vendo en dos tiendas y llevo el inventario en Excel…"
            value={values.mensaje}
            onChange={handleChange('mensaje')}
          ></textarea>
        </label>

        <button className="btn btn-primary btn-lg ct-submit" type="submit" disabled={submitting}>
          {submitting ? 'Enviando…' : 'Enviar mensaje'}
          <svg viewBox="0 0 15 13" fill="none" aria-hidden="true">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="m10.083 11.417 4-5.334m0 0-4-5.333m4 5.333H.75" />
          </svg>
        </button>
        <p className={`ct-msg${message.kind ? ' ' + message.kind : ''}`} id="ctMsg" role="status" aria-live="polite">
          {message.text}
        </p>
        <p className="ct-legal">Al enviar aceptas que te contactemos sobre Vortex. Nada de listas de correo que no pediste.</p>
      </form>
    </Reveal>
  );
}
