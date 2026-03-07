"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const temas = [
  { titulo: "Introducción a la informática", slug: "introduccion" },
  { titulo: "Hardware y Software", slug: "hardware-software" },
  { titulo: "Dispositivos de entrada y salida", slug: "dispositivos" },
  { titulo: "Memoria RAM y almacenamiento", slug: "memoria" },
  { titulo: "Tipos de computadoras", slug: "tipos-computadoras" },
  { titulo: "Sistema operativo Windows", slug: "windows" },
  { titulo: "Buenas prácticas de uso de la PC", slug: "buenas-practicas" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (<>
  {/* MOBILE MENU */}
  <div className="md:hidden sticky top-0 left-0 right-0 w-full z-40 transition-all duration-300 bg-blue-900 dark:bg-blue-900 p-2">
    <div className="w-full px-4">
      <select
        value={pathname}
        onChange={(e) => (window.location.href = e.target.value)}
        className="w-full border rounded-lg p-3 text-black dark:text-white bg-white dark:bg-blue-900"
      >
        {temas.map((tema) => (
          <option
            key={tema.slug}
            value={`/cursos/operador-pc/modulo-1/${tema.slug}`}
          >
            {tema.titulo}
          </option>
        ))}
      </select>
    </div>
  </div>

  {/* CONTENEDOR PRINCIPAL */}
  <div className="max-w-7xl mx-auto pt-24 px-6 grid md:grid-cols-[260px_1fr] gap-10">

    {/* SIDEBAR DESKTOP */}
    <aside className="w-72 hidden md:block">

          <div className="sticky top-28">
            <h2 className="text-xl font-bold text-blue-900 mb-6">
              Módulo 1
            </h2>

            <nav className="space-y-3">
              {temas.map((tema, index) => (
                <Link
                  key={index}
                  href={tema.slug}
                  className="block hover:text-blue-700 hover:font-semibold transition"
                >
                  {tema.titulo}
                </Link>
              ))}
            </nav>
          </div>

        </aside>

    {/* CONTENIDO */}
    <main className="max-w-none">
      {children}
    </main>

  </div>
</>
  );
}