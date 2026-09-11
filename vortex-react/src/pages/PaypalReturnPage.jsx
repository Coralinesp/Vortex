import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { capturePayPalOrder, aprobarYActivarPlan } from '../services/registerApi.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import PaymentOutcome from '../components/registro/PaymentOutcome.jsx';

const PAYPAL_PENDING_KEY = 'vortex_registro_paypal_pending';

export default function PaypalReturnPage() {
  usePageMeta('Confirmando pago — Vortex POS');
  const [searchParams] = useSearchParams();
  const [estado, setEstado] = useState('procesando');
  const [mensaje, setMensaje] = useState('');
  const [sucursalId, setSucursalId] = useState(null);
  const yaEjecutado = useRef(false);

  useEffect(() => {
    if (yaEjecutado.current) return;
    yaEjecutado.current = true;

    const token = searchParams.get('token');
    const pendienteRaw = sessionStorage.getItem(PAYPAL_PENDING_KEY);

    if (!token || !pendienteRaw) {
      setEstado('error');
      setMensaje('No se encontró la información del pago. Vuelve a intentarlo.');
      return;
    }

    const pendiente = JSON.parse(pendienteRaw);
    setSucursalId(pendiente.sucursalId || null);

    capturePayPalOrder(token)
      .then(() =>
        aprobarYActivarPlan({
          empresaId: pendiente.empresaId,
          usuarioId: pendiente.usuarioId,
          planId: pendiente.planId,
          monto: pendiente.monto,
          estado: 'aprobado',
        })
      )
      .then(() => {
        sessionStorage.removeItem(PAYPAL_PENDING_KEY);
        setEstado('verificar');
      })
      .catch((err) => {
        sessionStorage.removeItem(PAYPAL_PENDING_KEY);
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
