import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { confirmarSuscripcionStripe } from '../services/registerApi.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import PaymentOutcome from '../components/registro/PaymentOutcome.jsx';

const STRIPE_PENDING_KEY = 'vortex_registro_stripe_pending';

export default function StripeReturnPage() {
  usePageMeta('Confirmando pago — Vortex POS');
  const [searchParams] = useSearchParams();
  const [estado, setEstado] = useState('procesando');
  const [mensaje, setMensaje] = useState('');
  const [sucursalId, setSucursalId] = useState(null);
  const yaEjecutado = useRef(false);

  useEffect(() => {
    if (yaEjecutado.current) return;
    yaEjecutado.current = true;

    const sessionId = searchParams.get('session_id');
    const pendienteRaw = sessionStorage.getItem(STRIPE_PENDING_KEY);

    if (!sessionId || !pendienteRaw) {
      setEstado('error');
      setMensaje('No se encontró la información del pago. Vuelve a intentarlo.');
      return;
    }

    const pendiente = JSON.parse(pendienteRaw);
    setSucursalId(pendiente.sucursalId || null);

    confirmarSuscripcionStripe({
      empresaId: pendiente.empresaId,
      usuarioId: pendiente.usuarioId,
      suscripcionId: pendiente.planId,
      sessionId,
    })
      .then(() => {
        sessionStorage.removeItem(STRIPE_PENDING_KEY);
        setEstado('verificar');
      })
      .catch((err) => {
        sessionStorage.removeItem(STRIPE_PENDING_KEY);
        setEstado('error');
        setMensaje(err.message);
      });
  }, [searchParams]);

  return (
    <div className="regw-page">
      <div className="regw-card regw-card--solo">
        <PaymentOutcome estado={estado} mensaje={mensaje} sucursalId={sucursalId} />
      </div>
    </div>
  );
}
