export const metadata = {
  title: "Ofertas destacadas de Mercado Libre | SMART SHOP ML",
  description:
    "Descubre ofertas destacadas y descuentos reales de Mercado Libre. Compra inteligente y ahorra.",
};

import { getOfertasMixtas } from "../lib/mercadolibre";
import OfferCard from "../components/OfferCard";

export default async function OfertasPage() {
  const ofertas = await getOfertasMixtas();

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">
        🔥 Ofertas destacadas de Mercado Libre
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ofertas.map((oferta: any) => {
          const descuento =
            oferta.original_price && oferta.original_price > oferta.price
              ? `-${Math.round(
                  100 - (oferta.price * 100) / oferta.original_price
                )}%`
              : "OFERTA";

          return (
            <OfferCard
              key={oferta.id}
              titulo={oferta.title}
              precio={`$${oferta.price.toLocaleString("es-MX")}`}
              descuento={descuento}
              link={oferta.permalink}
            />
          );
        })}
      </div>
    </main>
  );
}
