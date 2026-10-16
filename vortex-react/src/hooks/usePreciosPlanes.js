import { useEffect, useState } from 'react';
import { fetchSuscripciones } from '../services/registerApi.js';

/* Precio real de cada plan según el backend (el mismo que se cobra en el registro), por id de
   suscripción. Los precios fijos de data/plans.js quedan solo como respaldo si la API no
   responde -- antes la landing anunciaba un precio y el registro cobraba otro. */
// Una sola llamada por carga de página aunque varias secciones usen el hook (precios y comparativa).
let pedido = null;

export function usePreciosPlanes() {
  const [precios, setPrecios] = useState({});

  useEffect(() => {
    let cancelado = false;
    if (!pedido) pedido = fetchSuscripciones().catch((error) => { pedido = null; throw error; });
    pedido
      .then((planes) => {
        if (cancelado) return;
        const mapa = {};
        planes.forEach((p) => {
          const precio = Number(p?.precio ?? p?.Precio);
          if (p?.id != null && Number.isFinite(precio)) mapa[p.id] = precio;
        });
        setPrecios(mapa);
      })
      .catch(() => {});
    return () => {
      cancelado = true;
    };
  }, []);

  return precios;
}

export const formatoPrecio = (valor) => Number(valor).toLocaleString('es-DO', { maximumFractionDigits: 2 });
