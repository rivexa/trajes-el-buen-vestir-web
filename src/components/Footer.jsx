import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL, PHONE_TEL, PHONE_DISPLAY, EMAIL, FACEBOOK_URL, INSTAGRAM_URL, MAPS_URL, DEVELOPER } from '../data/site';

export default function Footer() {
    return (
        <footer id="contacto" className="bg-negro text-white pt-20 pb-4 px-6 border-t-[6px] border-rojoMarca mt-auto">

            {/* 4 Columnas de Información */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-4">

                {/* Columna 1: Marca y Redes */}
                <div>
                    <Link
                        to="/"
                        aria-label="Inicio"
                        className="inline-block mb-4"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <img
                            src="/logo-dark.png"
                            alt="Logo Trajes El Buen Vestir"
                            className="h-24 w-auto object-contain"
                        />
                    </Link>
                    <p className="text-white/70 text-base font-light leading-relaxed mb-6">
                        <strong>Síguenos en nuestras redes sociales.</strong>
                    </p>
                    <div className="flex gap-4">
                        <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="bg-grisMarca p-2.5 rounded-full hover:bg-rojoMarca transition" aria-label="Facebook">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7.5v4H10v9h4v-9z" />
                            </svg>
                        </a>
                        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="bg-grisMarca p-2.5 rounded-full hover:bg-rojoMarca transition" aria-label="Instagram">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Columna 2: Atención al Cliente */}
                <div>
                    <h5 className="text-xl font-serif font-bold mb-6 text-white">Atención al Cliente</h5>
                    <div className="space-y-4">
                        <a href={PHONE_TEL} className="flex items-center gap-3 text-white/80 hover:text-rojoMarca transition">
                            <Phone size={22} className="text-rojoMarca flex-shrink-0" />
                            <span className="text-base">{PHONE_DISPLAY}</span>
                        </a>
                        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-rojoMarca transition">
                            <WhatsAppIcon className="w-6 h-6 text-rojoMarca flex-shrink-0" />
                            <span className="text-base">WhatsApp Directo</span>
                        </a>
                        <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 min-w-0 text-white/80 hover:text-rojoMarca transition">
                            <Mail size={22} className="text-rojoMarca flex-shrink-0" />
                            <span className="text-base break-all">{EMAIL}</span>
                        </a>
                    </div>
                </div>

                {/* Columna 3: Ubicación */}
                <div>
                    <h5 className="text-xl font-serif font-bold mb-6 text-white">Nuestra Ubicación</h5>
                    <div className="flex items-start gap-3 text-white/80">
                        <MapPin size={24} className="text-rojoMarca flex-shrink-0 mt-1" />
                        <a href={MAPS_URL} target="_blank" rel="noreferrer" className="text-base leading-relaxed hover:text-rojoMarca transition">
                            Calle 9 de Octubre N21-157<br />y Vicente Ramón Roca.<br />Edf. Santa Teresita Local #1
                        </a>
                    </div>
                </div>

                {/* Columna 4: Horarios de atención */}
                <div>
                    <h5 className="text-xl font-serif font-bold mb-6 text-white">Horarios de Atención</h5>
                    <div className="flex items-start gap-3 text-white/80 mb-4">
                        <Clock size={22} className="text-rojoMarca flex-shrink-0 mt-0.5" />
                        <div className="text-base">
                            <span className="block font-semibold text-white mb-0.5">Lunes a Viernes:</span>
                            <span className="text-white/70">09:00 a 18:00</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 text-white/80">
                        <div className="w-[22px] flex-shrink-0"></div>
                        <div className="text-base">
                            <span className="block font-semibold text-white mb-0.5">Sábados y Feriados:</span>
                            <span className="text-white/70">10:00 a 14:00</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Fila Centrada: Métodos de Pago con Imagen PNG */}
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center pt-4 mb-4">
                <p className="text-white/90 text-xs md:text-base font-semibold uppercase text-center mb-2">
                    Aceptamos todas las tarjetas de crédito
                </p>
                <div className="px-6 py-2 rounded-md inline-block">
                    <img
                        src="/tarjetas.png"
                        alt="Tarjetas de crédito aceptadas"
                        className="h-6 md:h-8 lg:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto pt-4 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 uppercase tracking-widest">
                <p>© 2026 Trajes El Buen Vestir. Todos los derechos reservados.</p>
                <a href={DEVELOPER.whatsapp} target="_blank" rel="noreferrer" className="text-white/80 hover:text-rojoMarca transition">
                    Desarrollado por {DEVELOPER.name}
                </a>
            </div>

        </footer>
    );
}