import Link from "next/link";

export default function Modulo5Home() {
  return (
    <main className="space-y-16">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Módulo 5: Presentaciones Digitales (PowerPoint)
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este módulo el estudiante aprenderá a crear presentaciones digitales
          utilizando herramientas como Microsoft PowerPoint. Las presentaciones
          permiten comunicar ideas de forma visual mediante diapositivas,
          incorporando texto, imágenes, gráficos, videos, animaciones y recursos
          multimedia utilizados en ámbitos educativos, profesionales y personales.
        </p>
      </section>

      {/* Capacidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Capacidades que Desarrolla
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Comprender qué es una presentación digital.</li>
          <li>Crear y administrar diapositivas.</li>
          <li>Diseñar presentaciones visualmente atractivas.</li>
          <li>Insertar imágenes, tablas, gráficos y contenido multimedia.</li>
          <li>Aplicar transiciones y animaciones.</li>
          <li>Preparar presentaciones para exposición.</li>
          <li>Exportar y compartir presentaciones.</li>
        </ul>
      </section>

      {/* Contenidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contenidos del Módulo
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Introducción a las presentaciones digitales.</li>
          <li>Interfaz de Microsoft PowerPoint.</li>
          <li>Creación y guardado de presentaciones.</li>
          <li>Diseño y organización de diapositivas.</li>
          <li>Temas y plantillas.</li>
          <li>Formato de texto e imágenes.</li>
          <li>Inserción de tablas y gráficos.</li>
          <li>Inserción de audio y video.</li>
          <li>Transiciones entre diapositivas.</li>
          <li>Animaciones de objetos.</li>
          <li>Presentación con diapositivas.</li>
          <li>Exportación e impresión.</li>
          <li>Buenas prácticas para exposiciones.</li>
        </ul>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué aprender PowerPoint?
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="mb-4">
            Las presentaciones son una herramienta fundamental para comunicar
            información de forma clara y visual.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Presentaciones escolares y universitarias.</li>
            <li>Exposiciones laborales.</li>
            <li>Capacitaciones.</li>
            <li>Proyectos y propuestas comerciales.</li>
            <li>Presentaciones de productos o servicios.</li>
          </ul>
        </div>
      </section>

      {/* Proyecto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Proyecto Final del Módulo
        </h2>

        <div className="border p-6 rounded-xl">
          <p>
            Al finalizar el módulo el estudiante deberá crear una presentación
            profesional utilizando diapositivas, imágenes, gráficos,
            transiciones y animaciones para exponer un tema de elección propia.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-6">
        <Link
          href="/cursos/operador-pc/modulo-5/introduccion"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
        >
          Comenzar el Módulo →
        </Link>
      </section>

    </main>
  );
}