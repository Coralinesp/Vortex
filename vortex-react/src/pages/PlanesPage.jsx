import { usePageMeta } from '../hooks/usePageMeta.js';
import PricingPlans from '../components/planes/PricingPlans.jsx';
import ComparisonTable from '../components/planes/ComparisonTable.jsx';
import CtaSection from '../components/common/CtaSection.jsx';

export default function PlanesPage() {
  usePageMeta(
    'Planes y precios — Vortex POS',
    'Planes y precios de Vortex: punto de venta, inventario y clientes desde RD$7,000 al mes. Compara qué incluye el plan Básico, Profesional y Empresarial.'
  );

  return (
    <>
      <PricingPlans />
      <ComparisonTable />
      <CtaSection />
    </>
  );
}
