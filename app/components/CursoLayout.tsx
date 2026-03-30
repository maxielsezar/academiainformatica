"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

type Tema = {
  titulo: string;
  slug: string;
};

type Props = {
  children: React.ReactNode;
  tituloCurso: string;
  cursoPath: string;
  tituloModulo: string;
  basePath: string;
  temas: Tema[];
};

export default function CursoLayout({
  children,
  tituloCurso,
  cursoPath,
  tituloModulo,
  basePath,
  temas,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const currentIndex = temas.findIndex((tema) =>
    pathname.includes(tema.slug)
  );

  const prevTema = currentIndex > 0 ? temas[currentIndex - 1] : null;
  const nextTema =
  currentIndex < temas.length - 1 ? temas[currentIndex + 1] : null;
  const isLastTema = currentIndex === temas.length - 1;
  useEffect(() => {
  const activeElement = document.querySelector(".tema-activo");

  if (activeElement) {
    activeElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

}, [pathname]);
  return (
    <div className="min-h-screen">
      {/* MOBILE HEADER */}
      <div className="md:hidden sticky top-0 z-50 bg-white dark:bg-blue-950 border-b">

        <div className="flex items-center justify-between px-4 py-3">

          <Link
            href={cursoPath}
            className="flex items-center gap-2"
          >
            <Image
              src="/logo.png"
              alt="Logo Curso"
              width={32}
              height={32}
            />

            <span className="font-semibold text-blue-800 dark:text-white">
              {tituloCurso}
            </span>
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            className="text-2xl"
          >
            ☰
          </button>

        </div>

      </div>
      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">

          {/* fondo oscuro */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />

          {/* menu */}
          <div className="relative w-72 bg-white dark:bg-blue-950 p-6 overflow-y-auto">

            <div className="flex justify-between items-center mb-6">

              <span className="font-semibold text-blue-800 dark:text-white">
                {tituloModulo}
              </span>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-xl"
              >
                ✕
              </button>

            </div>

            <nav className="space-y-4">

              {temas.map((tema) => {

                const active = pathname.includes(tema.slug);

                return (
                  <Link
                    key={tema.slug}
                    href={`${basePath}/${tema.slug}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-sm
                      ${
                        active
                          ? "text-blue-700 font-semibold"
                          : "hover:text-blue-700"
                      }
                    `}
                  >
                    {tema.titulo}
                  </Link>
                );
              })}

            </nav>

          </div>

        </div>
      )}

      {/* CONTENEDOR PRINCIPAL */}
      <div className="min-h-screen max-w-7xl mx-auto px-6 pt-10 md:pl-[300px]">
        {/* SIDEBAR */}
       <aside className="hidden md:block fixed  left-0 top-0 h-screen w-[260px] border-r bg-white dark:bg-blue-950 p-6">
  
        <div className="space-y-6 h-full flex flex-col">

          {/* LOGO + CURSO */}
          <Link
            href={cursoPath}
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <Image
              src="/logo.png"
              alt="Logo Curso"
              width={40}
              height={40}
            />

            <span className="text-lg font-bold text-blue-800 dark:text-white">
              {tituloCurso}
            </span>
          </Link>

          {/* MODULO */}
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            {tituloModulo}
          </h2>

          {/* MENU */}
          <nav className="space-y-3 overflow-y-auto flex-1 pr-2">
            {temas.map((tema) => {

              const active = pathname.includes(tema.slug);

              return (
              <Link
                key={tema.slug}
                href={`${basePath}/${tema.slug}`}
                className={`block text-sm transition
                  ${
                    active
                      ? "tema-activo text-blue-700 dark:text-blue-400 font-semibold"
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
        <main className="max-w-none overflow-x-hidden pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, info) => {
                const swipe = info.offset.x;

                if (swipe < -100 && nextTema) {
                  router.push(`${basePath}/${nextTema.slug}`);
                }

                if (swipe > 100 && prevTema) {
                  router.push(`${basePath}/${prevTema.slug}`);
                }
              }}
            
            >
              {children}
            </motion.div>
          </AnimatePresence>

          {/* BOTONES MOBILE */}
        <AnimatePresence>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-10 px-4 py-4 flex justify-between items-center rounded-xl shadow"
          >
            {prevTema ? (
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => router.push(`${basePath}/${prevTema.slug}`)}
                className="text-sm px-4 py-2 rounded bg-gray-200 dark:bg-blue-900"
              >
                ← Anterior
              </motion.button>
            ) : (
              <div />
            )}

            {isLastTema ? (
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => router.push(cursoPath)}
                className="text-sm px-5 py-2 rounded bg-green-600 text-white font-semibold"
              >
                ✔ Finalizar curso
              </motion.button>
            ) : nextTema ? (
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => router.push(`${basePath}/${nextTema.slug}`)}
                className="text-sm px-4 py-2 rounded bg-blue-600 text-white"
              >
                Siguiente →
              </motion.button>
            ) : (
              <div />
            )}

            </motion.div>
          </AnimatePresence>
        </main>

      </div>

    </div>
  );
}