
export type Categoria = "Todos" | "Medicamentos" | "Bienestar" | "Cuidado Bebé" | "Higiene";

export interface Producto {
    id: number;
    nombre: string;
    categoria: Categoria;
    descripcion: string;
    precio: number;
    emoji: string;
}

export interface Noticia {
    id: number;
    fecha: string;
    titulo: string;
    texto: string;
}

export const categorias: Categoria[] = ["Todos", "Medicamentos", "Bienestar", "Cuidado Bebé", "Higiene"];

export const productos: Producto[] = [
    {
        id: 1,
        nombre: "Paracetamol 500mg (20 tabletas)",
        categoria: "Medicamentos",
        descripcion: "Alivio del dolor de intensidad leve a moderada y estados febriles.",
        precio: 35,
        emoji: "💊"
    },
    {
        id: 2,
        nombre: "Suero Electrolitos Orales 500ml",
        categoria: "Bienestar",
        descripcion: "Prevención y tratamiento de la deshidratación causada por el calor o ejercicio.",
        precio: 28,
        emoji: "🥤"
    },
    {
        id: 3,
        nombre: "Toallitas Húmedas para Bebé (80 pzas)",
        categoria: "Cuidado Bebé",
        descripcion: "Hipoalergénicas, sin alcohol, ideales para la piel sensible de tu bebé.",
        precio: 45,
        emoji: "👶"
    },
    {
        id: 4,
        nombre: "Jabón Líquido Antibacterial 400ml",
        categoria: "Higiene",
        descripcion: "Protección efectiva contra bacterias, manteniendo la suavidad de las manos.",
        precio: 52,
        emoji: "🧼"
    }
];

export const noticias: Noticia[] = [
    {
        id: 1,
        fecha: "15 Jun 2026",
        titulo: "¡Nueva Sucursal y Envíos Gratis!",
        texto: "Ahora estamos más cerca de ti en el centro de Oaxaca. Además, en compras mayores a $300 tu envío a domicilio es completamente gratis dentro de la zona urbana."
    },
    {
        id: 2,
        fecha: "10 Jun 2026",
        titulo: "Campaña de Glucosa Gratis",
        texto: "Todos los sábados de junio contaremos con pruebas de glucosa gratuitas de 8:00 am a 11:00 am. ¡Cuida tu salud con nosotros!"
    }
];