import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { WHATSAPP_URL } from '../data/site';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [shopOpen, setShopOpen] = useState(false);

    const closeMobile = () => setIsMenuOpen(false);

    const closeShopIfFocusLeaves = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setShopOpen(false);
        }
    };

    const closeShopOnMouseLeave = (event) => {
        if (!event.currentTarget.contains(document.activeElement)) {
            setShopOpen(false);
        }
    };

    const onHome = useLocation().pathname === '/';

    return (
        <nav className={`fixed w-full z-50 isolate ${onHome ? 'border-transparent bg-white shadow-none' : 'border-b border-gray-200 bg-white/90 backdrop-blur-md'}`}>
            <div className="max-w-7xl mx-auto px-6 py-3 lg:py-4 flex justify-between items-center gap-4">

                <Link
                    to="/"
                    aria-label="Inicio"
                    className="block min-w-0 shrink"
                    onClick={() => {
                        closeMobile();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <img
                        src="/logo.png"
                        alt="Logo Trajes El Buen Vestir"
                        className="h-24 w-auto max-w-[calc(100vw-6.5rem)] object-contain object-left"
                    />
                </Link>

                <div className="flex items-center gap-4 lg:gap-6 z-50 shrink-0">
                    <div className="hidden lg:flex gap-6 xl:gap-8 text-xs xl:text-sm uppercase tracking-widest font-semibold text-grisMarca items-center">

                        <Link
                            to="/"
                            className="hover:text-rojoMarca transition"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Inicio
                        </Link>
                        <Link to="/nosotros" className="hover:text-rojoMarca transition">Nosotros</Link>

                            <div
                            className="relative py-4"
                            onMouseEnter={() => setShopOpen(true)}
                            onMouseLeave={closeShopOnMouseLeave}
                            onBlur={closeShopIfFocusLeaves}
                            onKeyDown={(event) => {
                                if (event.key === 'Escape') setShopOpen(false);
                            }}
                        >
                            <button
                                type="button"
                                className="flex items-center gap-1 hover:text-rojoMarca transition uppercase tracking-widest font-semibold outline-none focus-visible:text-rojoMarca"
                                aria-haspopup="true"
                                aria-expanded={shopOpen}
                                aria-controls="menu-tienda"
                                onClick={() => setShopOpen(true)}
                            >
                                Tienda
                                <ChevronDown size={14} className={`transition-transform duration-300 ${shopOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <div
                                id="menu-tienda"
                                className={`absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white border border-gray-200 shadow-xl transition-all duration-300 flex flex-col rounded-sm overflow-hidden ${shopOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}
                            >
                                <Link to="/catalogo/damas" tabIndex={shopOpen ? 0 : -1} onClick={() => setShopOpen(false)} className="px-5 py-4 hover:bg-gray-50 hover:text-rojoMarca transition border-b border-gray-100 text-center">
                                    Damas
                                </Link>
                                <Link to="/catalogo/caballeros" tabIndex={shopOpen ? 0 : -1} onClick={() => setShopOpen(false)} className="px-5 py-4 hover:bg-gray-50 hover:text-rojoMarca transition text-center">
                                    Caballeros
                                </Link>
                            </div>
                        </div>

                        <Link to="/catalogo/sastreria" className="hover:text-rojoMarca transition">Sastrería</Link>
                        <Link to="/catalogo/uniformes" className="hover:text-rojoMarca transition">Uniformes</Link>
                        <Link to="/catalogo/arreglos" className="hover:text-rojoMarca transition">Servicios</Link>
                        <a href="/#ofertas" className="hover:text-rojoMarca transition">Ofertas</a>

                    </div>

                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hidden lg:block bg-rojoMarca text-white px-5 py-2 uppercase text-[10px] xl:text-xs tracking-widest font-bold hover:bg-negro transition shadow-[0_0_15px_rgba(193,18,31,0.3)] whitespace-nowrap">
                        Agendar Cita
                    </a>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        className="lg:hidden p-2 text-negro"
                        aria-expanded={isMenuOpen}
                        aria-controls="menu-movil"
                        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <div
                id="menu-movil"
                inert={!isMenuOpen}
                className={`lg:hidden absolute top-full left-0 w-full bg-white transition-all duration-500 overflow-y-auto ${isMenuOpen ? 'max-h-[80vh] border-b border-gray-200 py-6' : 'max-h-0 overflow-hidden border-b-0 py-0'}`}
            >
                <div className="flex flex-col items-center gap-5 text-sm uppercase tracking-widest font-semibold text-negro">
                    <Link
                        to="/"
                        onClick={() => {
                            closeMobile();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="hover:text-rojoMarca transition"
                    >
                        Inicio
                    </Link>
                    <Link to="/nosotros" onClick={closeMobile} className="hover:text-rojoMarca transition">Nosotros</Link>

                    <div className="flex flex-col items-center w-full bg-gray-50 py-3 my-1 border-y border-gray-100">
                        <span className="text-xs text-gray-400 mb-3 tracking-[0.2em]">Tienda</span>
                        <Link to="/catalogo/damas" onClick={closeMobile} className="hover:text-rojoMarca transition mb-4">Damas</Link>
                        <Link to="/catalogo/caballeros" onClick={closeMobile} className="hover:text-rojoMarca transition">Caballeros</Link>
                    </div>

                    <Link to="/catalogo/sastreria" onClick={closeMobile} className="hover:text-rojoMarca transition">Sastrería</Link>
                    <Link to="/catalogo/uniformes" onClick={closeMobile} className="hover:text-rojoMarca transition">Uniformes</Link>
                    <Link to="/catalogo/arreglos" onClick={closeMobile} className="hover:text-rojoMarca transition">Servicios</Link>
                    <a href="/#ofertas" onClick={closeMobile} className="hover:text-rojoMarca transition">Ofertas</a>
                    <a href="/#contacto" onClick={closeMobile} className="hover:text-rojoMarca transition">Contacto</a>

                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={closeMobile} className="bg-rojoMarca text-white px-8 py-3 rounded-sm mt-2">Agendar Cita</a>
                </div>
            </div>
        </nav>
    );
}
