"use client";
import { noticias } from "../data/productos";
import { CalendarDays } from "lucide-react";

export default function Noticias() {
    return (
        <section id="noticias" className="section" style={{ background: "#ffffff" }}>
            <div className="container-main">
                <div className="section-header">
                    <p className="section-eyebrow">Novedades</p>
                    <h2 className="section-title">Noticias y avisos</h2>
                </div>

                <div className="news-grid">
                    {noticias.map((n, i) => (
                        <article
                            key={n.id}
                            className={`news-card ${i === 0 ? "news-card-featured" : "news-card-default"}`}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                                <span style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    display: "inline-block",
                                    background: i === 0 ? "var(--amarillo)" : "var(--verde)",
                                }} />
                                <span style={{
                                    fontSize: 11,
                                    fontWeight: 600,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 4,
                                    color: i === 0 ? "rgba(255,255,255,0.6)" : "var(--gris-400)",
                                }}>
                                    <CalendarDays size={12} /> {n.fecha}
                                </span>
                            </div>
                            <h3 style={{ fontWeight: 700, fontSize: 16, lineHeight: 1.3, margin: "0 0 8px" }}>
                                {n.titulo}
                            </h3>
                            <p style={{
                                fontSize: 13,
                                lineHeight: 1.6,
                                margin: 0,
                                color: i === 0 ? "rgba(255,255,255,0.82)" : "var(--gris-700)",
                            }}>
                                {n.texto}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
