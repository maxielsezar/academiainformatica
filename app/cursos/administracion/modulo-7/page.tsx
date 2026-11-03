import Link from "next/link";

export default function Modulo7Page() {
  return (
    <main className="space-y-16">
      {/* Encabezado */}
      <section className="space-y-6">
        <h1 className="text-3xl font-bold text-blue-900">
          Creación de publicaciones gráficas impresas para informes o publicidad
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed">
          En este módulo aprenderás a diseñar y elaborar publicaciones
          gráficas destinadas a la impresión, utilizando herramientas
          informáticas para comunicar información de manera clara, organizada
          y atractiva. Trabajarás con textos, imágenes, formas, colores y
          diferentes recursos de diseño para crear folletos, afiches, volantes,
          carteles e informes destinados al ámbito laboral e institucional.
        </p>

        <div className="rounded-2xl border border-blue-200 p-6">
          <h2 className="mb-3 text-xl font-bold text-blue-900">
            ¿Qué vas a aprender?
          </h2>
          <p className="leading-relaxed">
            Vas a utilizar aplicaciones de diseño y edición para crear
            publicaciones gráficas desde cero, organizar información,
            incorporar imágenes y elementos visuales, aplicar criterios de
            composición y preparar documentos para su impresión y
            distribución.
          </p>
        </div>
      </section>

      {/* Capacidades */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-800">
          Capacidades que desarrollarás
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              titulo: "Diseñar publicaciones gráficas",
              descripcion:
                "Crear folletos, afiches, volantes y otros materiales impresos según su finalidad.",
            },
            {
              titulo: "Organizar información visual",
              descripcion:
                "Distribuir textos, títulos, imágenes y datos para facilitar la lectura y comprensión.",
            },
            {
              titulo: "Utilizar herramientas de edición",
              descripcion:
                "Trabajar con aplicaciones informáticas para crear y modificar documentos gráficos.",
            },
            {
              titulo: "Incorporar recursos visuales",
              descripcion:
                "Insertar imágenes, ilustraciones, formas, colores y otros elementos gráficos.",
            },
            {
              titulo: "Aplicar criterios de diseño",
              descripcion:
                "Seleccionar tipografías, tamaños, colores y composiciones adecuadas para cada publicación.",
            },
            {
              titulo: "Preparar archivos para impresión",
              descripcion:
                "Configurar páginas, revisar diseños y exportar documentos en formatos apropiados.",
            },
          ].map((capacidad) => (
            <article
              key={capacidad.titulo}
              className="rounded-xl border border-blue-200 p-5"
            >
              <h3 className="mb-2 text-lg font-bold text-blue-900">
                {capacidad.titulo}
              </h3>
              <p className="leading-relaxed">
                {capacidad.descripcion}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Contenidos */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-800">
          Contenidos del módulo
        </h2>

        <div className="space-y-4">
          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              1. Introducción a las publicaciones gráficas
            </h3>
            <p className="leading-relaxed">
              Concepto y finalidad de las publicaciones impresas. Tipos de
              materiales gráficos: folletos, afiches, volantes, carteles,
              invitaciones e informes visuales.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              2. Herramientas y aplicaciones de diseño gráfico
            </h3>
            <p className="leading-relaxed">
              Reconocimiento de aplicaciones para crear publicaciones,
              entorno de trabajo, herramientas principales y funciones de
              edición y diseño.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              3. Configuración de página y composición
            </h3>
            <p className="leading-relaxed">
              Tamaños de papel, orientación, márgenes, columnas, distribución
              de elementos, espacios y organización general de una publicación.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              4. Textos y tipografías
            </h3>
            <p className="leading-relaxed">
              Incorporación y edición de textos, selección de fuentes,
              tamaños, estilos, colores, alineación y jerarquía visual.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              5. Imágenes y elementos gráficos
            </h3>
            <p className="leading-relaxed">
              Inserción y edición de imágenes, ilustraciones, formas,
              logotipos, íconos y otros recursos visuales. Recorte,
              redimensionamiento y adaptación de imágenes.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              6. Diseño de folletos y volantes
            </h3>
            <p className="leading-relaxed">
              Organización de información para publicaciones promocionales,
              distribución de contenidos, incorporación de datos de contacto
              y elaboración de materiales de difusión.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              7. Diseño de afiches y carteles publicitarios
            </h3>
            <p className="leading-relaxed">
              Composición de piezas gráficas para comunicar mensajes,
              selección de imágenes, títulos destacados, combinación de
              colores y organización de información relevante.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              8. Publicaciones para informes institucionales
            </h3>
            <p className="leading-relaxed">
              Diseño de documentos gráficos para presentar información,
              resultados, actividades y servicios de una institución u
              organización.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              9. Preparación e impresión de publicaciones
            </h3>
            <p className="leading-relaxed">
              Revisión del diseño, configuración de impresión, selección de
              papel, calidad de imágenes, exportación a PDF y preparación
              de archivos para su distribución.
            </p>
          </article>
        </div>
      </section>

      {/* Aplicación laboral */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-800">
          Aplicación en el ámbito laboral
        </h2>

        <p className="max-w-3xl leading-relaxed">
          La creación de publicaciones gráficas es una capacidad útil en
          empresas, instituciones educativas, organismos públicos y
          organizaciones privadas. Permite elaborar materiales para informar,
          promocionar servicios, comunicar actividades y presentar resultados
          mediante documentos impresos.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Publicidad y difusión
            </h3>
            <p className="leading-relaxed">
              Elaborar afiches, volantes y folletos para promocionar productos,
              servicios y actividades.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Comunicación institucional
            </h3>
            <p className="leading-relaxed">
              Diseñar carteles, invitaciones y publicaciones para comunicar
              novedades e información de una organización.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Informes y documentación
            </h3>
            <p className="leading-relaxed">
              Crear documentos visuales para presentar actividades,
              estadísticas, resultados y proyectos.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-blue-900 p-8 text-center text-white">
        <h2 className="mb-4 text-2xl font-bold">
          ¡Comenzá el Módulo 7!
        </h2>

        <p className="mx-auto mb-6 max-w-2xl leading-relaxed">
          Aprendé a transformar información en publicaciones gráficas
          profesionales y desarrollá materiales impresos para comunicar,
          informar y promocionar.
        </p>

        <Link
          href="/cursos/administracion/modulo-7/introduccion"
          className="inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-100"
        >
          Comenzar con la introducción
        </Link>
      </section>
    </main>
  );
}
