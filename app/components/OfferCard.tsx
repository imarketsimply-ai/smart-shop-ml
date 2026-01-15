type OfferProps = {
  titulo: string
  precio: string
  descuento: string
  link: string
}

export default function OfferCard({
  titulo,
  precio,
  descuento,
  link
}: OfferProps) {
  return (
    <div className="rounded-2xl border border-[#FFE600]/20 bg-neutral-900 p-6 flex flex-col justify-between">
      <div>
        <span className="inline-block text-xs font-bold text-[#2D3277] bg-[#FFE600] px-3 py-1 rounded-full mb-4">
          {descuento}
        </span>

        <h3 className="text-lg font-semibold mb-2 text-white">
          {titulo}
        </h3>

        <p className="text-neutral-400 mb-6">
          Precio aproximado: <strong>{precio}</strong>
        </p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-center px-6 py-3 bg-[#FFE600] text-[#2D3277] font-bold rounded-xl hover:brightness-95 transition"
      >
        Ver en Mercado Libre
      </a>
    </div>
  )
}
