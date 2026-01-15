import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMART SHOP ML",
  description:
    "Encuentra las mejores ofertas, descuentos y cupones de Mercado Libre. Sitio afiliado, no vendemos productos directamente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
