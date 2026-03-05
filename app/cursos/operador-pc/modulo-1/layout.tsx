import Link from "next/link";

const temas = [
  { titulo: "Introducción a la informática", slug: "introduccion" },
  { titulo: "Hardware vs Software", slug: "hardware-software" },
  { titulo: "Dispositivos de entrada y salida", slug: "dispositivos" },
  { titulo: "Memoria RAM y almacenamiento", slug: "memoria" },
  { titulo: "Tipos de computadoras", slug: "tipos-computadoras" },
  { titulo: "Sistema operativo Windows", slug: "windows" },
  { titulo: "Buenas prácticas de uso de la PC", slug: "buenas-practicas" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto pt-24 px-6 grid md:grid-cols-[260px_1fr] gap-10">

      <aside className="bg-gray-50 border rounded-xl p-5 h-fit sticky top-24">
        <h3 className="font-semibold mb-4 text-gray-800">
          Módulo 1
        </h3>

        <ul className="space-y-2 text-sm">
          {temas.map((tema) => (
            <li key={tema.slug}>
              <Link
                href={`/cursos/operador-pc/modulo-1/${tema.slug}`}
                className="block hover:text-blue-600"
              >
                {tema.titulo}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <main className="prose max-w-none">
        {children}
      </main>

    </div>
  );
}