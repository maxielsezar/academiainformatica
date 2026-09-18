import Link from "next/link";

export default function Modulo1Home() {
  return (
    <main className="space-y-16">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Módulo 1: Bases de datos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este módulo el estudiante adquiere los conocimientos
          fundamentales sobre las bases de datos relacionales y su
          utilización en entornos de oficina. Se abordan los conceptos
          de tablas, campos, propiedades, claves, relaciones, normalización
          e integridad referencial.
        </p>
      </section>

      {/* Capacidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Capacidades que Desarrolla
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>
            Comprender el concepto y la finalidad de una base de datos.
          </li>
          <li>
            Identificar tablas, campos y sus propiedades.
          </li>
          <li>
            Reconocer y utilizar claves principales y secundarias.
          </li>
          <li>
            Comprender las relaciones entre las tablas de una base de datos.
          </li>
          <li>
            Comprender el concepto de normalización y su utilidad.
          </li>
          <li>
            Aplicar criterios de integridad referencial en una base de datos.
          </li>
          <li>
            Crear y administrar estructuras básicas de bases de datos
            relacionales.
          </li>
        </ul>
      </section>

      {/* Contenidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contenidos del Módulo
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Concepto de base de datos.</li>
          <li>Tablas, campos y propiedades.</li>
          <li>Clave principal y clave secundaria.</li>
          <li>Relaciones entre tablas.</li>
          <li>Concepto y utilidad de la normalización.</li>
          <li>Integridad referencial.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mb-6">
        <Link
          href="/cursos/bases-de-datos/modulo-1/introduccion"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
        >
          Comenzar el Módulo →
        </Link>
      </section>

    </main>
  );
}