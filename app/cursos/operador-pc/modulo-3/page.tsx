import Link from "next/link";

export default function Modulo3Home() {
  return (
    <main className="space-y-16">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Módulo 3: Planilla de Cálculo (Excel)
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este módulo el estudiante aprenderá a utilizar una planilla de cálculo
          desde cero. Excel es una herramienta fundamental que permite organizar
          información, realizar cálculos automáticos y representar datos mediante
          gráficos. Es ampliamente utilizado en el ámbito laboral, educativo y personal.
        </p>
      </section>

      {/* Capacidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Capacidades que Desarrolla
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Comprender qué es una planilla de cálculo.</li>
          <li>Ingresar y organizar datos en celdas.</li>
          <li>Realizar cálculos mediante fórmulas.</li>
          <li>Utilizar funciones básicas.</li>
          <li>Aplicar formato a tablas y datos.</li>
          <li>Crear gráficos para representar información.</li>
          <li>Guardar y administrar archivos de Excel.</li>
        </ul>
      </section>

      {/* Contenidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Contenidos del Módulo
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Introducción a Excel.</li>
          <li>Interfaz de la planilla de cálculo.</li>
          <li>Filas, columnas y celdas.</li>
          <li>Ingreso y edición de datos.</li>
          <li>Fórmulas básicas.</li>
          <li>Funciones (SUMA, PROMEDIO, etc.).</li>
          <li>Formato de celdas.</li>
          <li>Creación de gráficos.</li>
          <li>Guardar y abrir archivos.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mb-6">
        <Link
          href="/cursos/operador-pc/modulo-3/introduccion"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
        >
          Comenzar el Módulo →
        </Link>
      </section>

    </main>
  );
}