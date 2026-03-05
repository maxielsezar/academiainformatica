import Link from "next/link";

export default function Modulo1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const temas = [
    { nombre: "Introducción al Algoritmo", ruta: "/cursos/programador/modulo-1/algoritmo" },
    { nombre: "Variables y Constantes", ruta: "/cursos/programador/modulo-1/variables" },
    { nombre: "Operadores", ruta: "/cursos/programador/modulo-1/operadores" },
    { nombre: "Estructura Condicional", ruta: "/cursos/programador/modulo-1/condicional" },
    { nombre: "Estructura Iterativa", ruta: "/cursos/programador/modulo-1/iterativa" },
    { nombre: "Sintaxis", ruta: "/cursos/programador/modulo-1/sintaxis" },
    { nombre: "Funciones", ruta: "/cursos/programador/modulo-1/funciones" },
    { nombre: "Arreglos", ruta: "/cursos/programador/modulo-1/arreglos" },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Contenedor general */}
      <div className="flex max-w-7xl mx-auto px-6 pt-28 pb-16">

        {/* Sidebar */}
        <aside className="w-72 hidden md:block">

          <div className="sticky top-28">
            <h2 className="text-xl font-bold text-blue-900 mb-6">
              Módulo 1
            </h2>

            <nav className="space-y-3">
              {temas.map((tema, index) => (
                <Link
                  key={index}
                  href={tema.ruta}
                  className="block text-gray-700 hover:text-blue-700 hover:font-semibold transition"
                >
                  {tema.nombre}
                </Link>
              ))}
            </nav>
          </div>

        </aside>

        {/* Contenido */}
        <main className="flex-1 md:pl-12">
          {children}
        </main>

      </div>
    </div>
  );
}