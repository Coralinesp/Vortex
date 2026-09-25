import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import PlanesPage from './pages/PlanesPage.jsx';
import ContactoPage from './pages/ContactoPage.jsx';
import RecursosPage from './pages/RecursosPage.jsx';
import GuiaPage from './pages/GuiaPage.jsx';
import DocumentacionPage from './pages/DocumentacionPage.jsx';
import DocumentacionModuloPage from './pages/DocumentacionModuloPage.jsx';
import CentroAyudaPage from './pages/CentroAyudaPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import EstadoServicioPage from './pages/EstadoServicioPage.jsx';
import PrivacidadPage from './pages/PrivacidadPage.jsx';
import TerminosPage from './pages/TerminosPage.jsx';
import CookiesPage from './pages/CookiesPage.jsx';
import RegistroPage from './pages/RegistroPage.jsx';
import StripeReturnPage from './pages/StripeReturnPage.jsx';
import PaypalReturnPage from './pages/PaypalReturnPage.jsx';

export default function App() {
  return (
    <Routes>
      {/* Standalone: sin header/footer del sitio, igual que el registro del sistema real. */}
      <Route path="/registro" element={<RegistroPage />} />
      <Route path="/registro/pago/stripe" element={<StripeReturnPage />} />
      <Route path="/registro/pago/paypal" element={<PaypalReturnPage />} />

      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/planes" element={<PlanesPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/recursos" element={<RecursosPage />} />
        <Route path="/recursos/guias/:slug" element={<GuiaPage />} />
        <Route path="/documentacion" element={<DocumentacionPage />} />
        <Route path="/documentacion/:modulo" element={<DocumentacionModuloPage />} />
        <Route path="/centro-de-ayuda" element={<CentroAyudaPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/estado-del-servicio" element={<EstadoServicioPage />} />
        <Route path="/privacidad" element={<PrivacidadPage />} />
        <Route path="/terminos" element={<TerminosPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
      </Route>
    </Routes>
  );
}
