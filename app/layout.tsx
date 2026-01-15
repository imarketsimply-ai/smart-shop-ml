import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "SMART SHOP ML | Ofertas y descuentos de Mercado Libre",
  description:
    "Encuentra las mejores ofertas, descuentos y cupones de Mercado Libre. Compra inteligente y ahorra con SMART SHOP ML.",
  openGraph: {
    title: "SMART SHOP ML | Ofertas de Mercado Libre",
    description:
      "Las mejores ofertas, descuentos y cupones de Mercado Libre en un solo lugar.",
    url: "https://smart-shop-ml.vercel.app",
    siteName: "SMART SHOP ML",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-neutral-950 text-white">
        {props.children}
        <Footer />
      </body>
    </html>
  );
}
