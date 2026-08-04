import Link from "next/link";

export default function Modulo2Home() {
  return (
    <main className="space-y-16">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Módulo 2: Procesador de Textos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este módulo el estudiante aprende a utilizar herramientas de
          procesamiento de textos para crear, editar y organizar documentos
          digitales de manera profesional.
          <br /><br />
          Se trabajan diferentes herramientas de formato, organización y
          presentación de información, incorporando la creación de tablas,
          imágenes y otros elementos. También se desarrollan habilidades
          para elaborar documentos administrativos y laborales utilizando
          criterios de presentación y comunicación escrita.
        </p>
      </section>

      {/* Capacidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Capacidades que Desarrolla
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Utilizar un procesador de textos para crear documentos.</li>
          <li>Crear, abrir, guardar y organizar documentos digitales.</li>
          <li>Aplicar formatos de texto y párrafo de manera adecuada.</li>
          <li>Utilizar listas, viñetas y diferentes estilos de organización.</li>
          <li>Insertar y organizar tablas dentro de un documento.</li>
          <li>Incorporar imágenes y elementos gráficos.</li>
          <li>Configurar correctamente la presentación de una página.</li>
          <li>Crear encabezados y pies de página.</li>
          <li>Elaborar documentos administrativos y laborales.</li>
          <li>Revisar y corregir documentos antes de su presentación.</li>
          <li>Imprimir y exportar documentos en diferentes formatos.</li>
          <li>Aplicar criterios de orden y presentación profesional.</li>
        </ul>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en el Ámbito Administrativo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El manejo de procesadores de textos es una competencia fundamental
          para realizar tareas administrativas y laborales. Durante el módulo,
          el estudiante podrá aplicar los conocimientos adquiridos en la
          elaboración de notas, cartas, informes, comunicaciones internas
          y otros documentos utilizados habitualmente en organizaciones
          y empresas.
        </p>
      </section>

      {/* CTA */}
      <section className="mb-6">
        <Link
          href="/cursos/administracion/modulo-2/introduccion"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
        >
          Comenzar el Módulo →
        </Link>
      </section>

    </main>
  );
}
