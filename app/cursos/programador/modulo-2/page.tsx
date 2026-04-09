import Link from "next/link";

export default function Modulo2Home() {
  return (
    <main className="space-y-16 h-full">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Módulo 2: Programación Orientada a Objetos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este módulo se introduce al estudiante en el paradigma de la
          programación orientada a objetos. Se aprenderá a modelar problemas
          del mundo real utilizando clases y objetos, mejorando la organización,
          reutilización y mantenimiento del código.
        </p>
      </section>

      {/* Capacidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Capacidades que Desarrolla
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Comprender el concepto de objetos y clases.</li>
          <li>Modelar problemas utilizando programación orientada a objetos.</li>
          <li>Definir atributos y métodos.</li>
          <li>Aplicar encapsulamiento en el diseño de clases.</li>
          <li>Utilizar constructores para inicializar objetos.</li>
          <li>Organizar el código de forma modular y reutilizable.</li>
        </ul>
      </section>

      {/* Competencias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Competencias Adquiridas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Al finalizar el módulo, el estudiante será capaz de diseñar e implementar
          programas utilizando clases y objetos en Java, aplicando principios
          básicos de la programación orientada a objetos para resolver problemas
          de forma más estructurada y eficiente.
        </p>
      </section>

      {/* Metodología */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Metodología de Enseñanza
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El módulo combina teoría con práctica mediante ejemplos concretos y
          ejercicios progresivos. Se trabajará con casos reales como sistemas
          de usuarios, calculadoras y gestión de datos, permitiendo comprender
          cómo aplicar objetos en situaciones reales.
        </p>
      </section>

      {/* CTA */}
      <section className="pt-6">
        <Link
          href="/cursos/programador/modulo-2/java"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
        >
          Comenzar el Módulo →
        </Link>
      </section>

    </main>
  );
}