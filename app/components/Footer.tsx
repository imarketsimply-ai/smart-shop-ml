import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-16 py-8 text-sm text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">SMART SHOP ML</span>
        </p>

        <nav className="flex gap-6">
          <Link
            href="/legal/terminos"
            className="hover:text-[#FFE600] transition"
          >
            Términos y Condiciones
          </Link>

          <Link
            href="/legal/privacidad"
            className="hover:text-[#FFE600] transition"
          >
            Política de Privacidad
          </Link>
        </nav>
      </div>
    </footer>
  );
}
