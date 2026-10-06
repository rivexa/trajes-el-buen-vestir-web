import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppIcon from './components/WhatsAppIcon';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Nosotros from './pages/Nosotros';
import NotFound from './pages/NotFound';
import { WHATSAPP_URL } from './data/site';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-negro font-sans selection:bg-rojoMarca selection:text-white overflow-x-hidden relative">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo/:categoria" element={<Catalogo />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Contactar por WhatsApp"
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        >
          <WhatsAppIcon className="w-8 h-8 md:w-9 md:h-9" />
          <span className="absolute right-[115%] bg-negro text-white px-3 py-1.5 rounded-md text-xs font-semibold tracking-widest whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
            ¿Necesitas asesoría?
          </span>
        </a>

      </div>
    </Router>
  );
}
