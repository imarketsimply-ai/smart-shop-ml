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
              let descuento = "";

if (oferta.original_price && oferta.price) {
  descuento = `-${Math.round(
    ((oferta.original_price - oferta.price) / oferta.original_price) * 100
  )}%`;
}

              return (
                <OfferCard
                  key={oferta.id}
                  titulo={oferta.title}
                  precio={
  oferta.price
    ? `$${oferta.price.toLocaleString("es-MX")}`
    : "Precio no disponible"
}
                  descuento={descuento || "Oferta"}
                  link={oferta.permalink}
                />
              );
            })}
      </div>
    </main>
  );
}
