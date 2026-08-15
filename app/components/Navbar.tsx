"use client";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: "#inicio", label: "Inicio" },
        { href: "#catalogo", label: "Catálogo" },
        { href: "#noticias", label: "Noticias" },
        { href: "#contacto", label: "Contacto" },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                    <div style={{
                        width: 38,
                        height: 38,
                        borderRadius: 11,
                        background: "var(--verde)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                        fontSize: 20,
                        fontWeight: 900,
                        lineHeight: 1,
                        boxShadow: "0 2px 8px rgba(10, 61, 43, 0.25)",
                    }}>✚</div>
                    <span style={{ fontWeight: 800, fontSize: 13, lineHeight: 1.2, color: "var(--verde)" }}>
                        Farmacia<br />
                        <span style={{ color: "var(--amarillo)" }}>Super Más Ahorro</span>
                    </span>
                </a>

                <div className="nav-links-desktop">
                    {links.map(l => (
                        <a key={l.href} href={l.href} className="nav-link">
                            {l.label}
                        </a>
                    ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <a href="/login" className="nav-login-button">
                        Iniciar sesión
                    </a>
                    <a href="/registro" className="nav-cta-desktop">
                        Registrarse
                    </a>

                    <button
                        className="nav-hamburger"
                        onClick={() => setOpen(!open)}
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: 8,
                            color: "var(--gris-700)",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        aria-label="Menú"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {open && (
                <div style={{
                    borderTop: "1px solid var(--gris-200)",
                    background: "#ffffff",
                    padding: "12px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                }}>
                    {links.map(l => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            style={{
                                padding: "10px 0",
                                fontSize: 14,
                                fontWeight: 600,
                                color: "var(--gris-700)",
                                textDecoration: "none",
                                borderBottom: "1px solid var(--gris-100)",
                            }}
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="/login"
                        style={{
                            marginTop: 8,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            padding: "12px 0",
                            borderRadius: 10,
                            background: "#ffffff",
                            border: "1px solid var(--gris-200)",
                            color: "var(--verde)",
                            fontSize: 14,
                            fontWeight: 700,
                            textDecoration: "none",
                        }}
                    >
                        Iniciar sesión
                    </a>
                    <a
                        href="/registro"
                        style={{
                            marginTop: 8,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            padding: "12px 0",
                            borderRadius: 10,
                            background: "var(--verde)",
                            color: "#ffffff",
                            fontSize: 14,
                            fontWeight: 700,
                            textDecoration: "none",
                        }}
                    >
                        Registrarse
                    </a>
                </div>
            )}
        </nav>
    );
}
