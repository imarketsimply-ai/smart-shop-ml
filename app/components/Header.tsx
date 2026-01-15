export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#FFE600] text-[#2D3277] border-b border-[#e6cf00]">
      <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
        <span className="text-lg font-bold tracking-wide">
          SMART SHOP ML
        </span>

        <nav className="space-x-8 text-sm font-medium">
          <a href="#" className="hover:underline">Inicio</a>
          <a href="#" className="hover:underline">Ofertas</a>
          <a href="#contacto" className="hover:underline">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
