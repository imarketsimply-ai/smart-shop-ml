import { getOfertasPublicas } from "../lib/mercadolibre-public";
import OfferCard from "../components/OfferCard";
import OfferSkeleton from "../components/OfferSkeleton";

export default async function OfertasPage() {
  const ofertas = await getOfertasPublicas();

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">
        🔥 Ofertas destacadas de Mercado Libre
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {!ofertas
          ? Array.from({ length: 6 }).map((_, i) => (
              <OfferSkeleton key={i} />
            ))
          : ofertas.map((oferta: any) => {
              const descuento =
                oferta.original_price &&
                Math.round(
                  100 - (oferta.price * 100) / oferta.original_price
                ) + "% OFF";

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
