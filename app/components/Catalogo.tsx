"use client";
import { useState, useMemo } from "react";
import { Search, ShoppingBag } from "lucide-react";
import { productos, categorias, type Categoria } from "../data/productos";

export default function Catalogo() {
    const [busqueda, setBusqueda] = useState("");
    const [catActiva, setCatActiva] = useState<Categoria>("Todos");

    const WHATSAPP_NUM = "9515799707";

    const productosFiltrados = useMemo(() => {
        return productos.filter(p => {
            const matchCat = catActiva === "Todos" || p.categoria === catActiva;
            const matchBusq = p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                p.descripcion.toLowerCase().includes(busqueda.toLowerCase());
            return matchCat && matchBusq;
        });
    }, [busqueda, catActiva]);

    function pedirWhatsApp(nombreProducto: string) {
        const msg = encodeURIComponent(`Hola! Me interesa cotizar: *${nombreProducto}* 💊`);
        window.open(`https://wa.me/${WHATSAPP_NUM}?text=${msg}`, "_blank");
    }

    return (
        <section id="catalogo" className="section" style={{ background: "var(--gris-100)" }}>
            <div className="container-main">
                <div className="section-header">
                    <p className="section-eyebrow">Lo que tenemos</p>
                    <h2 className="section-title">Catálogo de productos</h2>
                    <p className="section-subtitle">Haz clic en cualquier producto para cotizar por WhatsApp</p>
                </div>

                <div style={{ position: "relative", marginBottom: "1rem" }}>
                    <Search size={16} style={{
                        position: "absolute",
                        left: 14,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "var(--gris-400)",
                        pointerEvents: "none",
                    }} />
                    <input
                        type="text"
                        placeholder="Buscar producto…"
                        value={busqueda}
                        onChange={e => setBusqueda(e.target.value)}
                        className="search-input"
                    />
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem" }}>
                    {categorias.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setCatActiva(cat)}
                            className={`cat-pill ${catActiva === cat ? "cat-pill-active" : ""}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {productosFiltrados.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--gris-400)" }}>
                        <ShoppingBag size={40} style={{ margin: "0 auto 12px", opacity: 0.3, display: "block" }} />
                        <p style={{ fontWeight: 600, fontSize: 15 }}>No se encontraron productos</p>
                        <p style={{ fontSize: 13, marginTop: 4 }}>Intenta con otro término o categoría</p>
                    </div>
                ) : (
                    <div className="catalog-grid">
                        {productosFiltrados.map(p => (
                            <button
                                key={p.id}
                                className="prod-card"
                                onClick={() => pedirWhatsApp(p.nombre)}
                            >
                                <div className="prod-card-emoji">{p.emoji}</div>
                                <div style={{ padding: "0.875rem" }}>
                                    <span style={{
                                        display: "inline-block",
                                        fontSize: 11,
                                        fontWeight: 700,
                                        padding: "2px 8px",
                                        borderRadius: 999,
                                        marginBottom: 6,
                                        background: "var(--verde-claro)",
                                        color: "var(--verde)",
                                    }}>
                                        {p.categoria}
                                    </span>
                                    <p style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.3, margin: "0 0 4px", color: "var(--negro)" }}>
                                        {p.nombre}
                                    </p>
                                    <p style={{
                                        fontSize: 12,
                                        color: "#6B7280",
                                        lineHeight: 1.4,
                                        margin: "0 0 12px",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                    }}>
                                        {p.descripcion}
                                    </p>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <span style={{ fontWeight: 800, fontSize: 16, color: "var(--verde)" }}>
                                            ${p.precio}
                                        </span>
                                        <span style={{
                                            fontSize: 12,
                                            fontWeight: 600,
                                            padding: "5px 12px",
                                            borderRadius: 8,
                                            background: "#25D366",
                                            color: "#ffffff",
                                        }}>
                                            Cotizar
                                        </span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                <div style={{
                    marginTop: "2.5rem",
                    padding: "14px 18px",
                    borderRadius: 12,
                    background: "#ffffff",
                    border: "1px solid var(--gris-200)",
                    fontSize: 12,
                    color: "#6B7280",
                    textAlign: "center",
                    lineHeight: 1.5,
                }}>
                </div>
            </div>
        </section>
    );
}
