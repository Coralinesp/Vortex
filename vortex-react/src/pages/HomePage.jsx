import { usePageMeta } from '../hooks/usePageMeta.js';
import Hero from '../components/home/Hero.jsx';
import ValueStrip from '../components/home/ValueStrip.jsx';
import ConnectSection from '../components/home/ConnectSection.jsx';
import Funciones from '../components/home/Funciones.jsx';
import Detalles from '../components/home/Detalles.jsx';
import Giros from '../components/home/Giros.jsx';
import Compare from '../components/home/Compare.jsx';
import Faq from '../components/home/Faq.jsx';
import ResourcesTeaser from '../components/home/ResourcesTeaser.jsx';
import CtaSection from '../components/common/CtaSection.jsx';

export default function HomePage() {
  usePageMeta(
    'Vortex POS',
    'Vortex es el sistema POS en la nube para retail, restaurantes y servicios. Cobra rápido, controla tu inventario en tiempo real y administra todas tus sucursales desde un solo lugar.'
  );

  return (
    <>
      <Hero />
      <ValueStrip />

      <ConnectSection
        id="plataforma"
        badge="Punto de venta"
        title={
          <>
            Un sistema de venta que <span className="grad">resuelve todo el mostrador</span>
          </>
        }
        lead="Vortex es el software de punto de venta donde ocurre toda la operación diaria de tu negocio: cobras, facturas, descuentas inventario y cierras caja sin abrir otro programa ni cambiar de pantalla."
        benefits={[
          'Cobrar en efectivo, tarjeta o transferencia, y dividir la cuenta',
          'Escanear códigos de barras o buscar productos por nombre',
          'Aplicar descuentos, promociones y precios por tipo de cliente',
          'Seguir vendiendo sin internet y sincronizar solo al volver la conexión',
          'Emitir facturas y notas de crédito desde el mismo ticket de venta',
          'Revisar cortes de caja, márgenes y ventas por cajero en tiempo real',
        ]}
        image={{
          src: '/assets/Dise%C3%B1o%20sin%20t%C3%ADtulo.png',
          alt: 'Comerciante cobrando desde una tableta con el punto de venta Vortex: catálogo de productos, factura de venta y comprobante de venta realizada',
          width: 1350,
          height: 1080,
        }}
      />

      <ConnectSection
        id="inventario"
        flip
        badge="Control de inventario"
        title={
          <>
            Control de inventario que <span className="grad">siempre cuadra</span>
          </>
        }
        lead="El sistema de inventario de Vortex actualiza tus existencias con cada venta: sabes qué tienes, en qué sucursal está y cuánto vale, sin contar estantes a mano ni cuadrar hojas de cálculo."
        benefits={[
          'Control de existencias en tiempo real, por sucursal y por almacén',
          'Alertas automáticas de stock mínimo antes de quedarte sin producto',
          'Entradas, salidas, ajustes y mermas, con historial por producto',
          'Traspasos entre sucursales y órdenes de compra a proveedores',
          'Atributos como talla, color o medida, con precio y stock por variante',
          'Costo, margen y valor total de tu inventario, siempre actualizado',
        ]}
        image={{
          src: '/assets/ChatGPT%20Image%20Aug%2030,%202026,%2001_22_42%20AM.png',
          alt: 'Panel de control de inventario de Vortex con existencias por producto, productos más vendidos, alertas de stock bajo y movimientos recientes',
          width: 1672,
          height: 941,
        }}
      />

      <Funciones />
      <Detalles />
      <Giros />
      <Compare />
      <Faq />
      <ResourcesTeaser />
      <CtaSection />
    </>
  );
}
