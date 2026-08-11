"use client";
import { MapPin, Phone, Truck, Banknote, MessageCircle } from "lucide-react";
import { Map } from 'lucide-react';

export default function Hero() {
    const WHATSAPP_NUM = "9515799707";
    const WHATSAPP_MSG = encodeURIComponent("Hola! Quisiera hacer una cotización ");

    const chips = [
        { icon: <MapPin size={14} style={{ color: "var(--amarillo)" }} />, label: "San Pablo Huixtepec" },
        { icon: <Truck size={14} style={{ color: "var(--amarillo)" }} />, label: "Envíos a domicilio" },
        { icon: <Banknote size={14} style={{ color: "var(--amarillo)" }} />, label: "Recibo de dinero" },
        { icon: <Phone size={14} style={{ color: "var(--amarillo)" }} />, label: "(951) 579-9707" },
    ];

    return (
        <section id="inicio" className="hero-bg section" style={{ color: "#ffffff" }}>
            <div className="container-main">
                <div className="hero-badge">
                    <span className="blink" style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "var(--amarillo)",
                        display: "inline-block",
                    }} />
                    Abierto ahora · Lun–Sáb 8:00am – 9:00pm · Dom 9:00am – 3:00pm
                </div>

                <div className="hero-grid">
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <h1 style={{
                            fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                            fontWeight: 900,
                            lineHeight: 1.08,
                            margin: "0 0 1.25rem 0",
                            color: "#ffffff",
                            letterSpacing: "-0.03em",
                        }}>
                            Tu farmacia de<br />
                            <span style={{ color: "var(--amarillo)" }}>confianza</span> en<br />
                            Oaxaca
                        </h1>

                        <p style={{
                            color: "rgba(255, 255, 255, 0.85)",
                            fontSize: "1.0625rem",
                            lineHeight: 1.65,
                            margin: "0 0 2rem 0",
                            maxWidth: 460,
                        }}>
                            Medicamentos, artículos de higiene, cuidado del bebé y más.
                            Pregunta por nuestros precios y envíos a domicilio.
                        </p>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem" }}>
                            {chips.map(c => (
                                <span key={c.label} className="hero-chip">
                                    {c.icon} {c.label}
                                </span>
                            ))}
                        </div>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, width: "100%" }}>
                            <a
                                href={`https://wa.me/${WHATSAPP_NUM}?text=${WHATSAPP_MSG}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp wa-pulse"
                            >
                                <MessageCircle size={18} /> Pedir por WhatsApp
                            </a>

                            <a href="tel:+529515799707" className="btn-amarillo">
                                <Phone size={18} /> Llamar ahora
                            </a>
                        </div>
                    </div>

                    <div className="hero-card">
                        <div style={{
                            height: 160,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "rgba(0,0,0,0.25)",
                            flexDirection: "column",
                            gap: 6,
                            position: "relative",
                        }}>
                            <Map className="w-20 h-20 text-white-700" />
                            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, fontWeight: 600, margin: 0 }}>
                                Ver en Google Maps
                            </p>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ position: "absolute", inset: 0 }}
                                aria-label="Abrir en Google Maps"
                            />
                        </div>

                        <div style={{ padding: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                            <div>
                                <p style={{
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.45)",
                                    marginBottom: 10,
                                    marginTop: 0,
                                }}>
                                    Horarios
                                </p>
                                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                                        <span style={{ color: "rgba(255,255,255,0.65)" }}>Lun – Sáb</span>
                                        <span style={{ fontWeight: 700, color: "#ffffff" }}>8am–9pm</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                                        <span style={{ color: "rgba(255,255,255,0.65)" }}>Domingo</span>
                                        <span style={{ fontWeight: 700, color: "#ffffff" }}>9am–3pm</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p style={{
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.45)",
                                    marginBottom: 10,
                                    marginTop: 0,
                                }}>
                                    Servicios
                                </p>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 5 }}>
                                    {["💉 Toma de presión", "🩸 Glucosa gratis", "🚚 Envío a domicilio", "💸 Recibo de dinero"].map(s => (
                                        <li key={s} style={{ fontSize: 12, color: "rgba(255,255,255,0.85)" }}>
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
