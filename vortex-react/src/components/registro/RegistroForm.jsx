import { useEffect, useState } from 'react';
import {
  fetchSuscripciones,
  registrarEmpresa,
  loginUsuario,
  iniciarSuscripcionStripe,
  createPayPalOrder,
} from '../../services/registerApi.js';
import { PASSWORD_RULES, formatCedulaRncInput, formatPhoneInput, parsePlanFeatures } from '../../utils/registroHelpers.js';

const TOTAL_PASOS = 4; // Empresa, Usuario, Suscripción, Pago
const STEP_LABELS = { 1: 'Empresa', 2: 'Usuario', 3: 'Suscripción', 4: 'Pago' };
const STRIPE_PENDING_KEY = 'vortex_registro_stripe_pending';
const PAYPAL_PENDING_KEY = 'vortex_registro_paypal_pending';

const INITIAL_FORM = {
  name: '',
  telefono: '',
  documentoFiscal: '',
  nombreAdmin: '',
  email: '',
  password: '',
  confirmPassword: '',
  suscripcionId: null,
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EyeIcon({ open }) {
  if (open) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3.5 3.5l17 17M10.6 10.7a3 3 0 0 0 4.2 4.2M7.4 7.6C5 9.1 3.3 11.2 2 12c1.4 2.4 5 7 10 7 1.8 0 3.4-.6 4.8-1.4M12.5 5c5 0 8.6 4.6 10 7-.5.9-1.3 2-2.4 3" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12c1.4-2.4 5-7 10-7s8.6 4.6 10 7c-1.4 2.4-5 7-10 7s-8.6-4.6-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default function RegistroForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(INITIAL_FORM);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [suscripciones, setSuscripciones] = useState([]);
  const [loadingPlans, setLoadingPlans] = useState(true);
  const [plansError, setPlansError] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [cuenta, setCuenta] = useState(null); // { empresaId, usuarioId, sucursalId } tras crear la cuenta

  const [metodoPago, setMetodoPago] = useState('tarjeta');
  const [procesandoPago, setProcesandoPago] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchSuscripciones()
      .then((data) => {
        if (!cancelled) setSuscripciones(data);
      })
      .catch((err) => {
        if (!cancelled) setPlansError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoadingPlans(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  const passwordRules = PASSWORD_RULES.map((rule) => ({ ...rule, ok: rule.test(form.password) }));
  const passwordsMatch = form.password && form.confirmPassword ? form.password === form.confirmPassword : null;
  const planSeleccionado = suscripciones.find((p) => p.id === form.suscripcionId);

  function handleNext() {
    setError('');

    if (step === 1) {
      if (!form.name || !form.documentoFiscal || !form.telefono) return setError('Completa los datos de la empresa.');
      const soloDigitos = form.documentoFiscal.replace(/\D/g, '');
      if (soloDigitos.length !== 9 && soloDigitos.length !== 11) {
        return setError('Ingresa un RNC válido (9 dígitos) o una cédula válida (11 dígitos).');
      }
    }

    if (step === 2) {
      if (!form.nombreAdmin || !form.email || !form.password || !form.confirmPassword) return setError('Completa los campos de usuario.');
      if (!passwordRules.every((rule) => rule.ok)) return setError('Contraseña no segura.');
      if (!passwordsMatch) return setError('Las contraseñas no coinciden.');
      if (!acceptedTerms) return setError('Debes aceptar los términos.');
    }

    setStep(step + 1);
  }

  // Paso 3 -> 4: acá se crea la cuenta de verdad (Empresa + Usuario admin) y se inicia sesión,
  // para que el paso de pago pueda llamar a /api/Pagos/* con una sesión real.
  async function handleContinuarDesdePlan() {
    setError('');
    if (!form.suscripcionId) return setError('Selecciona un plan.');

    setSubmitting(true);
    try {
      // POST /api/Empresa/registrar devuelve el RegisterEmpresaResponse directo, sin envoltorio
      // { data: ... } -- a diferencia de los servicios con axios del sistema original.
      const datos = (await registrarEmpresa(form)) ?? {};
      await loginUsuario({ email: form.email, password: form.password });
      setCuenta({ empresaId: datos.empresaId, usuarioId: datos.usuarioId, sucursalId: datos.sucursalId });
      setStep(4);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  const origin = window.location.origin;
  const cancelUrl = `${origin}/registro?pagoCancelado=true`;

  async function handleStripe() {
    setError('');
    setProcesandoPago(true);
    try {
      const resultado = await iniciarSuscripcionStripe({
        empresaId: cuenta.empresaId,
        usuarioId: cuenta.usuarioId,
        suscripcionId: planSeleccionado.id,
        successUrl: `${origin}/registro/pago/stripe`,
        cancelUrl,
      });
      if (!resultado?.url) throw new Error('No se pudo iniciar la suscripción con Stripe.');

      sessionStorage.setItem(
        STRIPE_PENDING_KEY,
        JSON.stringify({ ...cuenta, planId: planSeleccionado.id, monto: Number(planSeleccionado.precio) })
      );
      window.location.href = resultado.url;
    } catch (err) {
      setError(err.message);
      setProcesandoPago(false);
    }
  }

  async function handlePayPal() {
    setError('');
    setProcesandoPago(true);
    try {
      const orden = await createPayPalOrder({
        amount: Number(planSeleccionado.precio),
        currency: 'USD',
        returnUrl: `${origin}/registro/pago/paypal`,
        cancelUrl,
      });
      const approveLink = orden?.links?.find((l) => l.rel === 'approve')?.href;
      if (!approveLink) throw new Error('PayPal no devolvió un enlace de aprobación válido.');

      sessionStorage.setItem(
        PAYPAL_PENDING_KEY,
        JSON.stringify({ ...cuenta, planId: planSeleccionado.id, monto: Number(planSeleccionado.precio) })
      );
      window.location.href = approveLink;
    } catch (err) {
      setError(err.message);
      setProcesandoPago(false);
    }
  }

  return (
    <div className="regw-form-panel">
      <img className="regw-logo" src="/assets/vortex (1).png" alt="Vortex" />

      <h1>Regístrate</h1>
      <p className="regw-sub">
        ¿Ya tienes cuenta? <span className="regw-link">Inicia sesión</span>
      </p>

      <div className="regw-progress">
        <div className="regw-progress-row">
          <span>
            Paso {step} de {TOTAL_PASOS}
          </span>
          <span>{STEP_LABELS[step]}</span>
        </div>
        <div className="regw-track">
          <div className="regw-fill" style={{ width: `${(step / TOTAL_PASOS) * 100}%` }}></div>
        </div>
      </div>

      {(error || plansError) && <div className="regw-error">{error || plansError}</div>}

      <form
        className="regw-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (step === 3) handleContinuarDesdePlan();
          else if (step < 3) handleNext();
        }}
      >
        {step === 1 && (
          <>
            <label className="regw-field">
              <span>Nombre de la empresa</span>
              <input type="text" placeholder="Ej: Comercial Pérez SRL" value={form.name} onChange={(e) => handleChange('name', e.target.value)} />
            </label>
            <label className="regw-field">
              <span>Teléfono de contacto</span>
              <input
                type="tel"
                placeholder="Ej: 809-000-0000"
                value={form.telefono}
                onChange={(e) => handleChange('telefono', formatPhoneInput(e.target.value))}
              />
            </label>
            <label className="regw-field">
              <span>RNC / Cédula de la empresa</span>
              <input
                type="text"
                placeholder="1-31-23456-7 ó 000-0000000-0"
                maxLength={13}
                value={form.documentoFiscal}
                onChange={(e) => handleChange('documentoFiscal', formatCedulaRncInput(e.target.value))}
              />
              <span className="regw-hint">¿Todavía no tienes RNC? Puedes registrarte con tu cédula.</span>
            </label>
          </>
        )}

        {step === 2 && (
          <>
            <label className="regw-field">
              <span>Tu nombre</span>
              <input type="text" placeholder="Ej: María Pérez" value={form.nombreAdmin} onChange={(e) => handleChange('nombreAdmin', e.target.value)} />
            </label>
            <label className="regw-field">
              <span>Email administrativo</span>
              <input type="email" placeholder="admin@tunegocio.com" value={form.email} onChange={(e) => handleChange('email', e.target.value)} />
            </label>
            <label className="regw-field">
              <span>Contraseña</span>
              <div className="regw-input-wrap">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onFocus={() => setIsPasswordFocused(true)}
                  onChange={(e) => handleChange('password', e.target.value)}
                />
                <button type="button" className="regw-eye" onClick={() => setShowPassword((v) => !v)} aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}>
                  <EyeIcon open={showPassword} />
                </button>
              </div>
            </label>
            <label className="regw-field">
              <span>Confirmar contraseña</span>
              <div className="regw-input-wrap">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className={passwordsMatch === false ? 'is-error' : ''}
                  value={form.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                />
                <button
                  type="button"
                  className="regw-eye"
                  onClick={() => setShowConfirmPassword((v) => !v)}
                  aria-label={showConfirmPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  <EyeIcon open={showConfirmPassword} />
                </button>
              </div>
              {passwordsMatch !== null && (
                <span className={`regw-match ${passwordsMatch ? 'ok' : 'err'}`}>
                  {passwordsMatch ? '✓ Las contraseñas coinciden' : '✕ Las contraseñas no coinciden'}
                </span>
              )}
            </label>

            {isPasswordFocused && (
              <div className="regw-pass-rules">
                {passwordRules.map((rule) => (
                  <span className={`regw-pass-rule${rule.ok ? ' is-ok' : ''}`} key={rule.key}>
                    <CheckIcon />
                    {rule.key}
                  </span>
                ))}
              </div>
            )}

            <label className="regw-terms">
              <input type="checkbox" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />
              Acepto los <span className="regw-link">términos y condiciones</span>.
            </label>
          </>
        )}

        {step === 3 && (
          <>
            <p className="regw-hint">El pago no se efectúa ahora, solo queremos saber tu interés.</p>
            {loadingPlans && <p className="regw-hint">Cargando planes…</p>}
            {!loadingPlans && (
              <div className="regw-plans" role="radiogroup" aria-label="Plan de interés">
                {suscripciones.map((plan) => {
                  const selected = form.suscripcionId === plan.id;
                  const features = parsePlanFeatures(plan.descripcion);
                  return (
                    <div
                      key={plan.id}
                      className={`regw-plan${selected ? ' is-selected' : ''}`}
                      role="radio"
                      aria-checked={selected}
                      tabIndex={0}
                      onClick={() => handleChange('suscripcionId', plan.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleChange('suscripcionId', plan.id);
                        }
                      }}
                    >
                      <div className="regw-plan-top">
                        <span className="regw-plan-radio" aria-hidden="true"></span>
                        <span className="regw-plan-name">{plan.nombre}</span>
                        <span className="regw-plan-price">RD${Number(plan.precio).toLocaleString('es-DO')}/mes</span>
                      </div>
                      {features.length > 0 && (
                        <ul className="regw-plan-features">
                          {features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        {step === 4 && planSeleccionado && (
          <>
            <p className="regw-hint">
              Te llevaremos a una página segura -- no se te cobra ahora, arrancas un mes gratis del plan{' '}
              <b>{planSeleccionado.nombre}</b>.
            </p>

            <div
              className={`regw-plan${metodoPago === 'tarjeta' ? ' is-selected' : ''}`}
              role="radio"
              aria-checked={metodoPago === 'tarjeta'}
              tabIndex={0}
              onClick={() => setMetodoPago('tarjeta')}
            >
              <div className="regw-plan-top">
                <span className="regw-plan-radio" aria-hidden="true"></span>
                <span className="regw-plan-name">Tarjeta de crédito o débito</span>
              </div>
              <p className="regw-hint" style={{ paddingLeft: 28 }}>
                Un mes gratis, luego RD${Number(planSeleccionado.precio).toLocaleString('es-DO')}/mes — vía Stripe
              </p>
            </div>

            <div
              className={`regw-plan${metodoPago === 'paypal' ? ' is-selected' : ''}`}
              role="radio"
              aria-checked={metodoPago === 'paypal'}
              tabIndex={0}
              onClick={() => setMetodoPago('paypal')}
            >
              <div className="regw-plan-top">
                <span className="regw-plan-radio" aria-hidden="true"></span>
                <span className="regw-plan-name">PayPal</span>
              </div>
              <p className="regw-hint" style={{ paddingLeft: 28 }}>
                Paga con tu cuenta de PayPal
              </p>
            </div>
          </>
        )}

        <div className="regw-actions">
          {step > 1 && step < 4 && (
            <button type="button" className="regw-btn regw-btn--outline" onClick={() => setStep(step - 1)}>
              Atrás
            </button>
          )}
          {step === 4 && (
            <button type="button" className="regw-btn regw-btn--outline" onClick={() => setStep(3)} disabled={procesandoPago}>
              Atrás
            </button>
          )}

          {step < 3 && (
            <button className="regw-btn regw-btn--primary" type="submit">
              Siguiente
              <svg viewBox="0 0 15 13" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="m10.083 11.417 4-5.334m0 0-4-5.333m4 5.333H.75" />
              </svg>
            </button>
          )}
          {step === 3 && (
            <button className="regw-btn regw-btn--primary" type="submit" disabled={submitting}>
              {submitting ? 'Creando cuenta…' : 'Continuar'}
            </button>
          )}
          {step === 4 && (
            <button
              type="button"
              className="regw-btn regw-btn--primary"
              disabled={procesandoPago}
              onClick={metodoPago === 'tarjeta' ? handleStripe : handlePayPal}
            >
              {procesandoPago
                ? 'Redirigiendo…'
                : metodoPago === 'tarjeta'
                  ? 'Empezar mi mes gratis con Stripe'
                  : 'Continuar con PayPal'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
