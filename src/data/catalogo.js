/*
Cada prenda:
{ id, name, description, image?, whatsappText? }
image es una ruta desde la raíz, por ejemplo '/catalogo/caballeros/terno-marino.jpg'.
El archivo va en public/catalogo/..., en minúsculas, sin tildes ni espacios, JPG liviano o WebP.
*/
export const CATEGORIES = {
    caballeros: {
        title: 'Colección Caballeros',
        description: 'Ropa formal para caballeros, con asesoría en el local de La Mariscal.',
        items: [],
    },
    damas: {
        title: 'Colección Damas',
        description: 'Ropa formal para damas, con asesoría en el local de La Mariscal.',
        items: [],
    },
    sastreria: {
        title: 'Confección a la Medida',
        description: 'Confección sobre medida. Cuéntanos qué necesitas y coordinamos la cita.',
        items: [],
    },
    uniformes: {
        title: 'Uniformes Corporativos',
        description: 'Uniformes para empresas. Cotiza un modelo publicado o cuéntanos el que buscas.',
        items: [],
    },
    arreglos: {
        title: 'Arreglos de Ropa',
        description: 'Arreglos y ajustes de prendas. Escríbenos y te indicamos cómo traer la ropa.',
        items: [],
    },
};
