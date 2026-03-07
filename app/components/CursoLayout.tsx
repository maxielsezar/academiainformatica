"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type Tema = {
  titulo: string;
  slug: string;
};

type Props = {
  children: React.ReactNode;
  tituloModulo: string;
  basePath: string;
  temas: Tema[];
};

export default function CursoLayout({
  children,
  tituloModulo,
  basePath,
  temas,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {/* MOBILE MENU */}
      <div className="md:hidden sticky top-0 left-0 right-0 w-full z-40 bg-blue-900 p-2">
        <div className="w-full px-4">

          <select
            value={pathname}
            onChange={(e) => router.push(e.target.value)}
            className="w-full border rounded-lg p-3 bg-white text-black dark:bg-blue-900 dark:text-white"
          >
            {temas.map((tema) => (
              <option key={tema.slug} value={`${basePath}/${tema.slug}`}>
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

            <h2 className="text-xl font-bold text-blue-900 dark:text-blue-400 mb-6">
              <Link href={basePath}>
                {tituloModulo}
              </Link>
            </h2>

            <nav className="space-y-3">

              {temas.map((tema) => {

                const active = pathname.includes(tema.slug);

                return (
                  <Link
                    key={tema.slug}
                    href={`${basePath}/${tema.slug}`}
                    className={`block transition
                      ${
                        active
                          ? "text-blue-700 dark:text-blue-400 font-semibold"
                          : "hover:text-blue-700 dark:hover:text-blue-400"
                      }
                    `}
                  >
                    {tema.titulo}
                  </Link>
                );
              })}

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