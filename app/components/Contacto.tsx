"use client";
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";

export default function Contacto() {
    const WHATSAPP_NUM = "9515799707";
    const WHATSAPP_MSG = encodeURIComponent("Hola, tengo una pregunta sobre la farmacia 😊");

    const infoItems = [
        { icon: <MapPin size={18} style={{ color: "var(--verde)" }} />, titulo: "Dirección", contenido: "San Pablo Huixtepec.", href: undefined },
        { icon: <Clock size={18} style={{ color: "var(--verde)" }} />, titulo: "Horarios", contenido: "Lunes – Sábado: 8:00am – 9:00pm\nDomingo: 9:00am – 3:00pm", href: undefined },
        { icon: <Phone size={18} style={{ color: "var(--verde)" }} />, titulo: "Teléfono", contenido: "951 579 9707", href: "tel:+529515799707" },
        { icon: <Mail size={18} style={{ color: "var(--verde)" }} />, titulo: "Correo", contenido: "contacto@farmaciasupermasahorro.mx", href: "mailto:contacto@farmaciasupermasahorro.mx" },
    ];

    return (
        <section id="contacto" className="section" style={{ background: "var(--verde-claro)" }}>
            <div className="container-main">
                <div className="section-header">
                    <p className="section-eyebrow">Encuéntranos</p>
                    <h2 className="section-title">Contacto y ubicación</h2>
                </div>

                <div className="contact-grid">
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {infoItems.map(item => (
                            <div key={item.titulo} className="contact-card">
                                <div className="contact-icon-wrap">{item.icon}</div>
                                <div>
                                    <p style={{
                                        fontSize: 11,
                                        fontWeight: 700,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.07em",
                                        color: "var(--gris-400)",
                                        margin: "0 0 3px",
                                    }}>
                                        {item.titulo}
                                    </p>
                                    {item.href ? (
                                        <a href={item.href} style={{
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: "var(--verde)",
                                            textDecoration: "none",
                                        }}>
                                            {item.contenido}
                                        </a>
                                    ) : (
                                        <p style={{
                                            fontSize: 13,
                                            fontWeight: 500,
                                            color: "var(--gris-700)",
                                            margin: 0,
                                            whiteSpace: "pre-line",
                                        }}>
                                            {item.contenido}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}

                        <a
                            href={`https://wa.me/${WHATSAPP_NUM}?text=${WHATSAPP_MSG}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp wa-pulse"
                            style={{ width: "100%", padding: "1rem" }}
                        >
                            <MessageCircle size={20} /> Escríbenos por WhatsApp
                        </a>
                    </div>

                    <div className="map-wrap">
                        <iframe
                            title="Ubicación Farmacia Super Más Ahorro"
                            src="https://maps.google.com/maps?q=San%20Pablo%20Huixtepec&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "320px", display: "block" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
