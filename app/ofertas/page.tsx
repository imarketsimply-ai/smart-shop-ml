import OfferCard from "../components/OfferCard"
import { ofertas } from "../data/ofertas"

export default function OfertasPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-4">
        Ofertas destacadas
      </h1>

      <p className="text-neutral-400 mb-12">
        Todas las ofertas redirigen directamente a Mercado Libre.
        SMART SHOP ML participa en su programa de afiliados.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ofertas.map((oferta) => (
          <OfferCard
            key={oferta.id}
            titulo={oferta.titulo}
            precio={oferta.precio}
            descuento={oferta.descuento}
            link={oferta.link}
          />
        ))}
      </div>
    </main>
  )
}
