import { Link } from 'react-router-dom';
import useDocumentTitle, { pageTitle } from '../hooks/useDocumentTitle';
import { WHATSAPP_URL } from '../data/site';

export default function NotFound() {
    useDocumentTitle(pageTitle('Página no encontrada'));

    return (
        <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen text-center">
            <p className="text-rojoMarca tracking-widest uppercase text-sm font-bold mb-4">404</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-negro mb-6">Esta página no existe</h1>
            <p className="text-gray-600 mb-10 leading-relaxed">
                El enlace no corresponde a una sección del sitio. Puedes volver al inicio o escribirnos por WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/" className="bg-rojoMarca text-white px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-negro transition">
                    Volver al inicio
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="border border-rojoMarca text-rojoMarca px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-rojoMarca hover:text-white transition">
                    WhatsApp
                </a>
            </div>
        </div>
    );
}
