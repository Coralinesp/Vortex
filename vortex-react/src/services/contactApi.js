const API_BASE = import.meta.env.VITE_API_URL || 'http://192.168.4.134';

function extractErrorMessage(data, fallback) {
  return data?.Errors?.[0]?.Description || data?.errors?.[0]?.description || data?.message || fallback;
}

/* POST /api/Contacto/enviar -- notifica al equipo de Vortex por correo cuando alguien llena el
   formulario de contacto. Requiere que ese endpoint esté desplegado en el backend real. */
export async function enviarContacto({ nombre, negocio, correo, telefono, sucursales, giro, mensaje }) {
  let res;
  try {
    res = await fetch(`${API_BASE}/api/Contacto/enviar`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, negocio, correo, telefono, sucursales, giro, mensaje }),
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

  if (!res.ok) throw new Error(extractErrorMessage(json, 'No se pudo enviar el mensaje. Intenta de nuevo.'));
  return json;
}
