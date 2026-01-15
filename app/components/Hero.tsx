export default function Hero() {
  return (
    <section className="relative px-8 py-32 text-center overflow-hidden animate-fade-in-up">
      <p className="mb-4 text-sm text-[#FFE600] font-medium">
  🔔 No vendemos productos · Te redirigimos a Mercado Libre
</p>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-900 to-neutral-950" />

      <h1 className="text-6xl font-extrabold tracking-tight mb-8 text-white">
  Compra inteligente.<br />
  <span className="text-[#FFE600]">Ahorra más en Mercado Libre</span>
</h1>

<p className="max-w-2xl mx-auto text-lg text-neutral-400 mb-12">
  En SMART SHOP ML buscamos y te compartimos las mejores ofertas,
  descuentos y cupones para que compres mejor y pagues menos.
</p>

      <a
  href="/ofertas"
  className="inline-flex items-center px-10 py-4 bg-[#FFE600] text-[#2D3277]
             rounded-xl font-bold hover:brightness-95 transition"
>
  Ver ofertas en Mercado Libre
</a>
    </section>
  )
}