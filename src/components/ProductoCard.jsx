import { useEffect, useState } from 'react';
import { whatsappHref } from '../data/site';

export default function ProductoCard({ product }) {
    const [imageFailed, setImageFailed] = useState(false);
    const showImage = Boolean(product.image) && !imageFailed;
    const message = product.whatsappText || `Hola, quiero información sobre ${product.name}.`;

    useEffect(() => {
        setImageFailed(false);
    }, [product.image]);

    return (
        <article className="bg-white border border-gray-200 group flex flex-col hover:border-rojoMarca transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="bg-grisClaro aspect-[3/4] relative overflow-hidden">
                {showImage ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={() => setImageFailed(true)}
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                        <span className="text-rojoMarca text-xs font-bold uppercase tracking-widest mb-3">El Buen Vestir</span>
                        <span className="font-serif text-2xl text-negro">{product.name}</span>
                    </div>
                )}
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-xl font-serif font-bold text-negro mb-3">{product.name}</h2>
                <p className="text-sm text-gray-500 mb-8 line-clamp-2 leading-relaxed">
                    {product.description}
                </p>
                <a
                    href={whatsappHref(message)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto text-center border border-rojoMarca text-rojoMarca hover:bg-rojoMarca hover:text-white px-4 py-3 text-xs font-bold uppercase tracking-widest transition duration-300"
                >
                    Cotizar por WhatsApp
                </a>
            </div>
        </article>
    );
}
