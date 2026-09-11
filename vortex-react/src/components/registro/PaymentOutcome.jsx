import { useState } from 'react';
import { Link } from 'react-router-dom';
import { verificarCorreo, reenviarCodigoVerificacion, actualizarNombreSucursal } from '../../services/registerApi.js';

const LARGO_CODIGO = 6;

function CheckCircle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path d="m8 12.5 2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XCircle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function VerificarCorreo({ onVerified }) {
  const [code, setCode] = useState(Array(LARGO_CODIGO).fill(''));
  const [error, setError] = useState('');
  const [verificando, setVerificando] = useState(false);
  const [reenviando, setReenviando] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  function handleChange(value, index, inputs) {
    if (!/^\d?$/.test(value)) return;
    const next = [...code];
    next[index] = value;
    setCode(next);
    if (value && index < LARGO_CODIGO - 1) inputs[index + 1]?.focus();
  }

  const inputs = [];

  async function handleVerificar() {
    setError('');
    const codigo = code.join('');
    if (codigo.length !== LARGO_CODIGO) return setError('Completa el código de 6 dígitos.');

    setVerificando(true);
    try {
      await verificarCorreo(codigo);
      onVerified();
    } catch (err) {
      setError(err.message);
    } finally {
      setVerificando(false);
    }
  }

  async function handleResend() {
    if (cooldown > 0 || reenviando) return;
    setError('');
    setReenviando(true);
    try {
      await reenviarCodigoVerificacion();
      setCooldown(30);
      const tick = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(tick);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (err) {
      setError(err.message);
    } finally {
      setReenviando(false);
    }
  }

  return (
    <div className="regw-outcome-body">
      <CheckCircle />
      <h2>¡Pago confirmado!</h2>
      <p>Te enviamos un código de verificación a tu correo.</p>

      <div className="regw-otp">
        {code.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputs[index] = el)}
            value={digit}
            maxLength={1}
            onChange={(e) => handleChange(e.target.value, index, inputs)}
            onKeyDown={(e) => {
              if (e.key === 'Backspace' && !code[index] && index > 0) inputs[index - 1]?.focus();
            }}
          />
        ))}
      </div>

      {error && <div className="regw-error">{error}</div>}

      <button className="regw-btn regw-btn--primary" style={{ width: '100%' }} disabled={verificando} onClick={handleVerificar}>
        {verificando ? 'Verificando…' : 'Verificar código'}
      </button>

      <p className="regw-hint" style={{ marginTop: 4 }}>
        ¿No lo recibiste?{' '}
        <button type="button" className="regw-link-btn" disabled={cooldown > 0 || reenviando} onClick={handleResend}>
          {cooldown > 0 ? `Reenviar en ${cooldown}s` : reenviando ? 'Enviando…' : 'Haz clic para reenviar'}
        </button>
      </p>
    </div>
  );
}

function NombrarSucursal({ sucursalId, onDone }) {
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');
  const [guardando, setGuardando] = useState(false);

  async function handleGuardar() {
    setError('');
    if (!nombre.trim()) return setError('Ponle un nombre a tu sucursal.');

    setGuardando(true);
    try {
      await actualizarNombreSucursal(sucursalId, nombre.trim());
      onDone();
    } catch (err) {
      setError(err.message);
    } finally {
      setGuardando(false);
    }
  }

  return (
    <div className="regw-outcome-body">
      <h2>¿Cómo se llama tu sucursal principal?</h2>
      <p>Así la vas a ver en el sistema. Puedes cambiarla después en Configuración.</p>

      <label className="regw-field" style={{ textAlign: 'left' }}>
        <span>Nombre de la sucursal</span>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej: Sucursal Piantini, Casa Matriz..."
          onKeyDown={(e) => e.key === 'Enter' && handleGuardar()}
        />
      </label>

      {error && <div className="regw-error">{error}</div>}

      <button className="regw-btn regw-btn--primary" style={{ width: '100%' }} disabled={guardando} onClick={handleGuardar}>
        {guardando ? 'Guardando…' : 'Guardar y continuar'}
      </button>
    </div>
  );
}

/* Panel compartido para /registro/pago/stripe y /registro/pago/paypal. `estado`/`mensaje` los
   controla la página que confirma el pago (procesando -> verificar | error); a partir de
   "verificar" el resto del recorrido (código de correo, nombrar sucursal) es interno. */
export default function PaymentOutcome({ estado, mensaje, sucursalId }) {
  const [faseLocal, setFaseLocal] = useState(null);
  const fase = faseLocal ?? estado;

  return (
    <div className="regw-form-panel">
      <img className="regw-logo" src="/assets/vortex (1).png" alt="Vortex" />

      {fase === 'procesando' && (
        <div className="regw-outcome-body">
          <div className="regw-spinner"></div>
          <p>Confirmando tu pago…</p>
        </div>
      )}

      {fase === 'verificar' && <VerificarCorreo onVerified={() => setFaseLocal(sucursalId ? 'sucursal' : 'listo')} />}

      {fase === 'sucursal' && <NombrarSucursal sucursalId={sucursalId} onDone={() => setFaseLocal('listo')} />}

      {fase === 'listo' && (
        <div className="regw-outcome-body">
          <CheckCircle />
          <h2>¡Tu cuenta de Vortex está lista!</h2>
          <p>Tu mes gratis ya empezó. Ya puedes entrar a Vortex con el correo y la contraseña que registraste.</p>
        </div>
      )}

      {fase === 'error' && (
        <div className="regw-outcome-body regw-outcome-body--error">
          <XCircle />
          <h2>Hubo un problema</h2>
          <p>{mensaje}</p>
          <Link className="regw-btn regw-btn--outline" style={{ width: '100%', textAlign: 'center' }} to="/registro">
            Volver al registro
          </Link>
        </div>
      )}
    </div>
  );
}
