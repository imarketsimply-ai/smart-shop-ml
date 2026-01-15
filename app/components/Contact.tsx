export default function Contact() {
  return (
    <section
      id="contacto"
      className="px-8 py-24 max-w-3xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-4">
  Empieza a ahorrar hoy mismo
</h2>

<p className="text-neutral-400 mb-8">
  Recibe las mejores ofertas y descuentos directamente.
</p>

      <a
        href="mailto:correo@ejemplo.com"
        className="inline-block px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition"
      >
        Ver ofertas ahora
      </a>
      <p className="text-xs text-neutral-500 mt-4">
  *Redirección directa a Mercado Libre · Sin costos adicionales
</p>
    </section>
  )
}
<div className="mt-10 text-sm text-neutral-400 space-x-4">
  <a href="/legal/terminos" className="hover:underline">
    Términos y Condiciones
  </a>
  <a href="/legal/privacidad" className="hover:underline">
    Política de Privacidad
  </a>
</div>
