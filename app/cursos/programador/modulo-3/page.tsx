import Link from "next/link";

export default function Modulo3Home() {
  return (
    <main className="space-y-16 h-full">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Módulo 3: Planificación en Equipos de Desarrollo
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este módulo se introducen las herramientas y metodologías utilizadas
          en equipos de desarrollo de software. Los estudiantes aprenderán a
          trabajar de forma colaborativa utilizando sistemas de control de versiones,
          gestión de tareas y organización de proyectos reales.
        </p>
      </section>

      {/* Capacidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Capacidades que Desarrolla
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Comprender el flujo de trabajo colaborativo en proyectos de software.</li>
          <li>Utilizar Git para el control de versiones.</li>
          <li>Crear y administrar repositorios.</li>
          <li>Trabajar con ramas, commits y merges.</li>
          <li>Gestionar tareas y proyectos utilizando Jira.</li>
          <li>Aplicar metodologías de trabajo grupal y organización de equipos.</li>
          <li>Resolver conflictos de código en proyectos compartidos.</li>
        </ul>
      </section>

      {/* Competencias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Competencias Adquiridas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Al finalizar el módulo, el estudiante será capaz utilizar herramientas profesionales para
          organizar proyectos, compartir código y coordinar tareas de manera
          eficiente y colaborativa.
        </p>
      </section>

      {/* Metodología */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Metodología de Enseñanza
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El módulo combinará actividades prácticas y simulaciones de entornos
          reales de trabajo. Los estudiantes desarrollarán proyectos grupales
          utilizando Git y GitHub para compartir código, mientras organizan
          tareas y seguimiento de avances mediante Jira.
        </p>
      </section>

      {/* Temas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Temas Principales
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Introducción al trabajo colaborativo.</li>
          <li>Control de versiones con Git.</li>
          <li>GitHub y repositorios remotos.</li>
          <li>Commits, ramas y merges.</li>
          <li>Resolución de conflictos.</li>
          <li>Organización de proyectos con Jira.</li>
          <li>Metodologías ágiles y trabajo en equipo.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="pt-6">
        <Link
          href="/cursos/programador/modulo-3/git"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
        >
          Comenzar el Módulo →
        </Link>
      </section>

    </main>
  );
}