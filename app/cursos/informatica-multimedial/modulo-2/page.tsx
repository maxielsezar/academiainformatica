import Link from "next/link";

export default function Modulo2Home() {
  return (
    <main className="space-y-16">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Módulo 2: Procesador de Texto
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este módulo el estudiante aprende a utilizar un procesador de texto
          para crear, editar y dar formato a documentos digitales. Estas
          herramientas permiten elaborar cartas, informes, trabajos y distintos
          tipos de documentos utilizados en el ámbito académico y laboral.
        </p>
      </section>

      {/* Capacidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Capacidades que Desarrolla
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Comprender qué es un procesador de texto.</li>
          <li>Crear y guardar documentos.</li>
          <li>Editar y dar formato al texto.</li>
          <li>Utilizar herramientas de formato de párrafo.</li>
          <li>Insertar imágenes y tablas en un documento.</li>
          <li>Preparar documentos para imprimir o compartir.</li>
        </ul>
      </section>

      {/* Contenidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contenidos del Módulo
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Introducción al procesador de texto.</li>
          <li>Interfaz del programa.</li>
          <li>Creación y guardado de documentos.</li>
          <li>Edición de texto.</li>
          <li>Formato de texto.</li>
          <li>Formato de párrafo.</li>
          <li>Insertar imágenes.</li>
          <li>Insertar tablas.</li>
          <li>Diseño de página.</li>
          <li>Guardar e imprimir documentos.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mb-6">
        <Link
          href="/cursos/informatica-multimedial/modulo-2/introduccion"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
        >
          Comenzar el Módulo →
        </Link>
      </section>

    </main>
  );
}