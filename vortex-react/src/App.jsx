import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import PlanesPage from './pages/PlanesPage.jsx';
import ContactoPage from './pages/ContactoPage.jsx';
import RecursosPage from './pages/RecursosPage.jsx';
import GuiaPage from './pages/GuiaPage.jsx';
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
      </Route>
    </Routes>
  );
}
