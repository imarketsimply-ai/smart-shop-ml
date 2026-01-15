import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-16 py-6 text-sm text-gray-500">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} SMART SHOP ML. Sitio afiliado a Mercado
          Libre.
        </p>

        <div className="flex gap-4">
          <Link
            href="/legal/terminos"
            className="hover:text-gray-700 underline"
          >
            Términos y Condiciones
          </Link>
          <Link
            href="/legal/privacidad"
            className="hover:text-gray-700 underline"
          >
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
