import Script from "next/script";
import "./globals.css";
import Footer from "./components/Footer";
import Disclaimer from "./components/Disclaimer";

export const metadata = {
  title: "SMART SHOP ML | Ofertas y descuentos de Mercado Libre",
  description:
    "Encuentra las mejores ofertas, descuentos y cupones de Mercado Libre. Compra inteligente y ahorra con SMART SHOP ML.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
  <head>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=G-LNYDTBK17P`}
      strategy="afterInteractive"
    />

    <Script id="ga-init" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LNYDTBK17P');
      `}
    </Script>
  </head>

  <body className="bg-neutral-950 text-white">
    {children}
    <Footer />
  </body>
</html>

  );
}
