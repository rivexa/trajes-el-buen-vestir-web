import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import useDocumentTitle, { pageTitle } from '../hooks/useDocumentTitle';
import { whatsappHref } from '../data/site';
import { CATEGORIES } from '../data/catalogo';
import ProductoCard from '../components/ProductoCard';
import NotFound from './NotFound';

export default function Catalogo() {
    const { categoria } = useParams();
    const category = CATEGORIES[categoria];

    useDocumentTitle(pageTitle(category ? category.title : 'Página no encontrada'));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [categoria]);

    if (!category) {
        return <NotFound />;
    }

    const consulta = `Hola, quiero información sobre ${category.title}.`;

    return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
            <Link to="/" className="inline-flex items-center gap-2 text-rojoMarca hover:text-negro transition mb-8 font-semibold text-sm uppercase tracking-widest">
                <ArrowLeft size={16} /> Volver al Inicio
            </Link>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-negro mb-4">{category.title}</h1>
            <p className="text-gray-600 mb-12 max-w-3xl">
                {category.description}
            </p>

            {category.items.length === 0 ? (
                <div className="border border-gray-200 bg-grisClaro px-6 py-16 text-center">
                    <h2 className="font-serif text-2xl md:text-3xl text-negro mb-4">Esta colección se está armando</h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
                        Pronto vas a ver aquí las prendas. Mientras tanto, escríbenos y te asesoramos.
                    </p>
                    <a
                        href={whatsappHref(consulta)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block bg-rojoMarca text-white px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-negro transition"
                    >
                        Escribir por WhatsApp
                    </a>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.items.map((product) => (
                        <ProductoCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}