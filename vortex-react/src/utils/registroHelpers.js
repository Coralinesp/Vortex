/* Formato XXX-XXXXXXX-X (11 dígitos) mientras el usuario escribe. */
export function formatCedulaInput(value) {
  const digits = String(value ?? '').replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 10) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 10)}-${digits.slice(10)}`;
}

/* Formato X-XX-XXXXX-X (9 dígitos) mientras el usuario escribe. */
export function formatRncInput(value) {
  const digits = String(value ?? '').replace(/\D/g, '').slice(0, 9);
  if (digits.length <= 1) return digits;
  if (digits.length <= 3) return `${digits.slice(0, 1)}-${digits.slice(1)}`;
  if (digits.length <= 8) return `${digits.slice(0, 1)}-${digits.slice(1, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 1)}-${digits.slice(1, 3)}-${digits.slice(3, 8)}-${digits.slice(8)}`;
}

/* 11 dígitos → cédula, 9 → RNC; mientras escribe usa formato cédula progresivo. */
export function formatCedulaRncInput(value) {
  const digits = String(value ?? '').replace(/\D/g, '');
  if (digits.length === 9) return formatRncInput(digits);
  return formatCedulaInput(digits);
}

/* Formato XXX-XXX-XXXX (10 dígitos) mientras el usuario escribe. */
export function formatPhoneInput(value) {
  const digits = String(value ?? '').replace(/\D/g, '').slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
}

/* Las descripciones de los planes vienen del backend como prosa (ej: "Para un local único:
   Ventas, Inventario básico, Clientes, Caja. Hasta 2 usuarios, 1 sucursal.") en vez de una
   lista estructurada; esto las parte en bullets. */
export function parsePlanFeatures(descripcion) {
  if (!descripcion) return [];
  const frases = descripcion.split('.').map((s) => s.trim()).filter(Boolean);
  const features = [];
  frases.forEach((frase, i) => {
    const listaTexto = frase.includes(':') ? frase.split(':')[1] : null;
    const lista = i === 0 ? listaTexto : frase;
    if (!lista) return;
    lista.split(',').forEach((item) => {
      item.split(/\sy\s+/).forEach((sub) => {
        const limpio = sub.trim();
        if (limpio) features.push(limpio);
      });
    });
  });
  return features;
}

export const PASSWORD_RULES = [
  { key: '8+ caracteres', test: (p) => p.length >= 8 },
  { key: 'Mayúscula', test: (p) => /[A-Z]/.test(p) },
  { key: 'Minúscula', test: (p) => /[a-z]/.test(p) },
  { key: 'Número', test: (p) => /\d/.test(p) },
  { key: 'Símbolo (@$!%*?&)', test: (p) => /[@$!%*?&]/.test(p) },
];
