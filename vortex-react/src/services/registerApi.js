const API_BASE = import.meta.env.VITE_API_URL || 'http://192.168.4.134';
const TOKEN_KEY = 'vortex_registro_token';

function extractErrorMessage(data, fallback) {
  return (
    data?.Errors?.[0]?.Description ||
    data?.errors?.[0]?.description ||
    data?.detail ||
    data?.message ||
    data?.title ||
    fallback
  );
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

function setToken(token) {
  if (token) localStorage.setItem(TOKEN_KEY, token);
}

/* Petición genérica contra el backend real de Vortex. `auth: true` adjunta el token guardado
   tras iniciar sesión (necesario para /api/Pagos/* y /api/Usuario/verificar-correo, que
   requieren sesión). `raw: true` devuelve la Response sin parsear (para el texto crudo que
   manda PayPal). */
async function apiRequest(path, { method = 'GET', body, params, auth = false, fallbackError } = {}) {
  const url = new URL(`${API_BASE}${path}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) url.searchParams.set(key, value);
    });
  }

  const headers = { 'Content-Type': 'application/json' };
  if (auth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  let res;
  try {
    res = await fetch(url, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new Error('No pudimos conectar con el servidor. Revisa tu conexión e intenta de nuevo.');
  }

  const text = await res.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = null;
  }

  if (!res.ok) throw new Error(extractErrorMessage(json, fallbackError || 'Ocurrió un error inesperado.'));
  return json;
}

export async function fetchSuscripciones() {
  const json = await apiRequest('/api/Suscripcion', { fallbackError: 'No se pudieron cargar los planes.' });
  return json?.data ?? [];
}

/* POST /api/Empresa/registrar — crea Empresa + Sucursal Principal + Rol Administrador +
   Usuario admin en una sola llamada atómica del backend real de Vortex. */
export async function registrarEmpresa({ name, nombreAdmin, email, documentoFiscal, password, suscripcionId, telefono }) {
  const soloDigitos = String(documentoFiscal ?? '').replace(/\D/g, '');
  const esCedula = soloDigitos.length === 11;

  return apiRequest('/api/Empresa/registrar', {
    method: 'POST',
    body: {
      nombreEmpresa: name,
      rnc: esCedula ? null : documentoFiscal,
      cedula: esCedula ? documentoFiscal : null,
      telefonoEmpresa: telefono,
      suscripcionId: Number(suscripcionId),
      nombreAdmin,
      correoAdmin: email,
      password,
    },
    fallbackError: 'No se pudo completar el registro.',
  });
}

/* Login inmediatamente después de registrar: el resto del flujo (pago, verificación de
   correo, nombrar la sucursal) necesita una sesión real. El token se guarda para sobrevivir
   la salida completa de la SPA hacia Stripe/PayPal y el regreso en otra carga de página. */
export async function loginUsuario({ email, password }) {
  const json = await apiRequest('/api/Usuario/login', {
    method: 'POST',
    body: { Correo: email, Contraseña: password },
    fallbackError: 'No se pudo iniciar sesión.',
  });
  setToken(json?.token);
  return json;
}

export async function iniciarSuscripcionStripe({ empresaId, usuarioId, suscripcionId, successUrl, cancelUrl }) {
  return apiRequest('/api/Pagos/stripe/checkout-suscripcion', {
    method: 'POST',
    auth: true,
    body: { empresaId, usuarioId, suscripcionId, successUrl, cancelUrl },
    fallbackError: 'No se pudo iniciar la suscripción con Stripe.',
  });
}

export async function confirmarSuscripcionStripe({ empresaId, usuarioId, suscripcionId, sessionId }) {
  return apiRequest('/api/Pagos/stripe/confirmar-suscripcion', {
    method: 'POST',
    auth: true,
    body: { empresaId, usuarioId, suscripcionId, sessionId },
    fallbackError: 'No se pudo confirmar la suscripción con Stripe.',
  });
}

/* El backend reenvía el body crudo de la API de PayPal como string -- hay que JSON.parse()-ear
   dos veces, igual que en el sistema real. */
export async function createPayPalOrder({ amount, currency = 'USD', returnUrl, cancelUrl }) {
  const raw = await apiRequest('/api/Pagos/paypal', {
    method: 'POST',
    auth: true,
    params: { amount, currency, returnUrl, cancelUrl },
    fallbackError: 'No se pudo iniciar el pago con PayPal.',
  });
  return typeof raw === 'string' ? JSON.parse(raw) : raw;
}

export async function capturePayPalOrder(token) {
  return apiRequest('/api/Pagos/paypal/capture', {
    auth: true,
    params: { token },
    fallbackError: 'No se pudo confirmar el pago con PayPal.',
  });
}

export async function aprobarYActivarPlan({ empresaId, usuarioId, planId, monto, estado = 'aprobado' }) {
  return apiRequest('/api/Pagos/aprobar-y-activar-plan', {
    method: 'POST',
    auth: true,
    body: { empresaId, usuarioId, planId, monto, estado },
    fallbackError: 'El pago se completó, pero no se pudo activar el plan. Contacta soporte.',
  });
}

export async function verificarCorreo(codigo) {
  return apiRequest('/api/Usuario/verificar-correo', {
    method: 'POST',
    auth: true,
    body: { codigo },
    fallbackError: 'Código inválido o expirado.',
  });
}

export async function reenviarCodigoVerificacion() {
  return apiRequest('/api/Usuario/reenviar-codigo', {
    method: 'POST',
    auth: true,
    fallbackError: 'No se pudo reenviar el código.',
  });
}

export async function actualizarNombreSucursal(sucursalId, nombre) {
  return apiRequest(`/api/Sucursal/${sucursalId}`, {
    method: 'PUT',
    auth: true,
    body: { dto: { id: sucursalId, nombre } },
    fallbackError: 'No se pudo guardar el nombre. Puedes cambiarlo luego en Configuración.',
  });
}
