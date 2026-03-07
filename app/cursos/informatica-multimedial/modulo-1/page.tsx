import Link from "next/link";

export default function Modulo1Home() {
  return (
    <main className="space-y-16">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Módulo 1: Fundamentos de la computadora
        </h1>

        <p className=" leading-relaxed max-w-3xl">
           En este módulo el estudiante adquiere los conocimientos fundamentales
        sobre el funcionamiento de una computadora, sus componentes y la forma
        correcta de utilizarla en el ámbito laboral.
        </p>
      </section>

      {/* Capacidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Capacidades que Desarrolla
        </h2>

        <ul className="list-disc list-inside space-y-3 ">
          <li>Comprender los conceptos básicos de informática.</li>
          <li>Identificar los componentes principales de una computadora.</li>
          <li>Diferenciar hardware y software.</li>
          <li>Reconocer dispositivos de entrada y salida.</li>
          <li>Comprender el funcionamiento del sistema operativo.</li>
          <li>Utilizar la computadora de forma segura y eficiente.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mb-6">
        <Link
          href="/cursos/informatica-multimedial/modulo-1/introduccion"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
        >
          Comenzar el Módulo →
        </Link>
      </section>

    </main>
  );
}