import Link from "next/link";

interface CourseNavigationProps {
  cursoHref: string;
  moduloHref: string;
}

export default function CourseNavigation({
  cursoHref,
  moduloHref,
}: CourseNavigationProps) {
  return (
    <div className="flex gap-4 mb-8 flex-wrap">

      <Link
        href={cursoHref}
        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition"
      >
        ← Volver al Curso
      </Link>

      <Link
        href={moduloHref}
        className="bg-blue-800 text-white hover:bg-blue-900 px-4 py-2 rounded-lg text-sm font-medium transition"
      >
        Inicio del Módulo
      </Link>

    </div>
  );
}