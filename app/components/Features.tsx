const items = [
  {
    title: "Ahorra dinero",
    description: "Accede a descuentos y cupones reales sin perder tiempo buscando."
  },
  {
    title: "Compra con confianza",
    description: "Todos los enlaces te llevan directamente a Mercado Libre."
  },
  {
    title: "Decide mejor",
    description: "Compara oportunidades y aprovecha las mejores ofertas."
  }
]

export default function Features() {
  return (
    <section className="px-8 py-28 max-w-6xl mx-auto">
      <div className="rounded-2xl p-8 bg-neutral-900 border border-[#FFE600]/20
           hover:border-[#FFE600] transition-all duration-300">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl p-8 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-[#FFE600]">
              {item.title}
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}