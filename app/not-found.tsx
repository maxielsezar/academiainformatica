import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white min-h-screen flex items-center">

      {/* Decoración fondo */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-700/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-2xl"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png" 
            alt="Logo"
            width={120}
            height={120}
            priority
          />
        </div>

        <p className="uppercase tracking-widest text-sm text-blue-300 mb-4">
          Estamos trabajando
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Contenido disponible próximamente
        </h1>

        <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto mb-10">
          Estamos preparando nuevos contenidos y recursos educativos. 
          Muy pronto podrás acceder a esta sección.
        </p>

        <Link
          href="/"
          className="inline-block px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-100 transition"
        >
          Volver al inicio
        </Link>

      </div>
    </section>
  );
}
