import Link from "next/link";

export default function Modulo1Home() {
  return (
    <main className="space-y-16 h-full">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Módulo 1: Fundamentos de Programación
        </h1>

        <p className=" leading-relaxed max-w-3xl">
          Este módulo introduce al estudiante en los principios fundamentales
          de la programación estructurada. Se desarrollan habilidades de
          razonamiento lógico, análisis de problemas y construcción de
          algoritmos.
        </p>
      </section>

      {/* Capacidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Capacidades que Desarrolla
        </h2>

        <ul className="list-disc list-inside space-y-3 ">
          <li>Analizar problemas del campo informático.</li>
          <li>Identificar datos de entrada, proceso y salida.</li>
          <li>Diseñar algoritmos estructurados.</li>
          <li>Aplicar estructuras de control (condicionales e iterativas).</li>
          <li>Utilizar operadores lógicos y aritméticos correctamente.</li>
          <li>Implementar programas simples en Kotlin.</li>
        </ul>
      </section>

      {/* Competencias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Competencias Adquiridas
        </h2>

        <p className=" leading-relaxed max-w-3xl">
          Al finalizar el módulo, el estudiante será capaz de desarrollar
          programas estructurados básicos, aplicar correctamente la sintaxis
          del lenguaje Kotlin y resolver problemas mediante algoritmos
          claros y eficientes.
        </p>
      </section>

      {/* Metodología */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Metodología de Enseñanza
        </h2>

        <p className=" leading-relaxed max-w-3xl">
          El módulo combina explicación teórica con ejercicios prácticos
          progresivos. Cada tema incluye ejemplos en Kotlin y actividades
          orientadas a reforzar el razonamiento lógico y la correcta
          implementación de la sintaxis del lenguaje.
        </p>
      </section>

      {/* CTA */}
      <section className="pt-6">
        <Link
          href="/cursos/programador/modulo-1/introduccion-algoritmo"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
        >
          Comenzar el Módulo →
        </Link>
      </section>

    </main>
  );
}