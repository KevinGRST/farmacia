import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farmacia Super Más Ahorro | Oaxaca",
  description: "Tu farmacia de confianza en Oaxaca. Medicamentos, artículos de tienda, envíos a domicilio y más. Llámanos o escríbenos por WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
