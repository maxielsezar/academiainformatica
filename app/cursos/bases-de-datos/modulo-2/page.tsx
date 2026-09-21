import Link from "next/link";

export default function Modulo2Home() {
  return (
    <main className="space-y-16">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Módulo 2: Análisis y diseño del sistema
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este módulo el estudiante adquiere los conocimientos necesarios
          para analizar las necesidades de información de una organización y
          diseñar una solución informática adecuada. Se abordan el análisis
          del sistema, el análisis estructurado, los objetivos y requerimientos,
          los diagramas de entidad-relación y la planificación del proyecto.
        </p>
      </section>

      {/* Capacidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Capacidades que Desarrolla
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>
            Analizar las necesidades de información de una organización.
          </li>
          <li>
            Identificar los objetivos de un sistema informático.
          </li>
          <li>
            Determinar los requerimientos necesarios para desarrollar un
            sistema.
          </li>
          <li>
            Aplicar técnicas de análisis estructurado.
          </li>
          <li>
            Identificar las entidades y relaciones que intervienen en un
            sistema.
          </li>
          <li>
            Representar la información mediante diagramas de
            entidad-relación.
          </li>
          <li>
            Planificar las etapas necesarias para desarrollar un proyecto.
          </li>
        </ul>
      </section>

      {/* Contenidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contenidos del Módulo
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>
            Análisis del sistema.
          </li>
          <li>
            Análisis estructurado.
          </li>
          <li>
            Objetivos del sistema.
          </li>
          <li>
            Requerimientos del sistema.
          </li>
          <li>
            Diagrama de entidad-relación.
          </li>
          <li>
            Planificación del proyecto.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mb-6">
        <Link
          href="/cursos/bases-de-datos/modulo-2/analisis-sistema"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
        >
          Comenzar el Módulo →
        </Link>
      </section>

    </main>
  );
}