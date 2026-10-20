import Link from "next/link";

export default function IntroduccionPage() {
  return (
    <main className="space-y-14">
      {/* Encabezado */}
      <section>

        <h1 className="mt-4 mb-6 text-3xl font-bold text-blue-900">
          Introducción a las presentaciones digitales
        </h1>

        <p className="text-lg leading-relaxed text-blue-950">
          Las presentaciones digitales permiten organizar información y
          comunicar ideas mediante diapositivas que combinan textos, imágenes,
          gráficos y otros recursos multimedia. Se utilizan para exponer
          proyectos, presentar informes, explicar procedimientos y comunicar
          información en reuniones, clases y actividades laborales.
        </p>

        <p className="mt-4 leading-relaxed text-blue-950">
          En este módulo aprenderás a utilizar un editor de presentaciones
          para organizar contenidos, diseñar diapositivas y combinar distintos
          recursos visuales y audiovisuales. El objetivo es crear materiales
          claros, ordenados y adecuados para el público al que están dirigidos.
        </p>
      </section>

      {/* Concepto */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-800">
          ¿Qué es una presentación digital?
        </h2>

        <div className="rounded-xl border border-blue-200 bg-white p-6 shadow-sm">
          <p className="leading-relaxed text-blue-950">
            Es un conjunto organizado de diapositivas que permite comunicar
            información de manera visual. Cada diapositiva puede contener
            títulos, textos, imágenes, gráficos, formas, sonidos y videos,
            según las necesidades de la exposición.
          </p>

          <p className="mt-4 leading-relaxed text-blue-950">
            A diferencia de un documento extenso, una presentación busca
            destacar las ideas principales y facilitar su comprensión mediante
            una secuencia lógica de contenidos.
          </p>
        </div>
      </section>

      {/* Elementos */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-800">
          Elementos de una presentación
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-blue-200 bg-white p-5">
            <h3 className="mb-2 text-lg font-bold text-blue-900">
              Diapositivas
            </h3>
            <p className="text-blue-950">
              Son las páginas que componen la presentación. Se organizan en
              una secuencia para desarrollar un tema.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 bg-white p-5">
            <h3 className="mb-2 text-lg font-bold text-blue-900">
              Textos
            </h3>
            <p className="text-blue-950">
              Permiten comunicar títulos, explicaciones, datos y conclusiones.
              Conviene utilizar frases breves y fáciles de leer.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 bg-white p-5">
            <h3 className="mb-2 text-lg font-bold text-blue-900">
              Imágenes y gráficos
            </h3>
            <p className="text-blue-950">
              Ayudan a ilustrar conceptos, mostrar ejemplos y representar
              información de forma visual.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 bg-white p-5">
            <h3 className="mb-2 text-lg font-bold text-blue-900">
              Recursos multimedia
            </h3>
            <p className="text-blue-950">
              El sonido, el video, las animaciones y las transiciones pueden
              complementar la exposición cuando se utilizan con un propósito
              claro.
            </p>
          </article>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-800">
          ¿Para qué se utilizan?
        </h2>

        <div className="space-y-4">
          <div className="flex gap-4 rounded-xl bg-blue-50 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-700 font-bold text-white">
              1
            </div>
            <div>
              <h3 className="font-bold text-blue-900">
                Informes laborales
              </h3>
              <p className="mt-1 text-blue-950">
                Presentar resultados, estadísticas, objetivos y propuestas
                de trabajo.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-xl bg-blue-50 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-700 font-bold text-white">
              2
            </div>
            <div>
              <h3 className="font-bold text-blue-900">
                Reuniones y exposiciones
              </h3>
              <p className="mt-1 text-blue-950">
                Organizar los puntos principales de una charla o reunión
                para acompañar la explicación oral.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-xl bg-blue-50 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-700 font-bold text-white">
              3
            </div>
            <div>
              <h3 className="font-bold text-blue-900">
                Publicidad y comunicación
              </h3>
              <p className="mt-1 text-blue-950">
                Comunicar servicios, productos, proyectos o actividades
                mediante recursos visuales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-800">
          Características de una buena presentación
        </h2>

        <ul className="space-y-3">
          {[
            "Organizar las diapositivas siguiendo una secuencia lógica.",
            "Utilizar títulos claros y textos breves.",
            "Mantener una tipografía legible y un diseño consistente.",
            "Elegir imágenes y gráficos relacionados con el tema.",
            "Usar colores que permitan distinguir el contenido con facilidad.",
            "Evitar animaciones, sonidos y efectos innecesarios.",
            "Revisar la ortografía y comprobar el orden de las diapositivas.",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">
                ✓
              </span>
              <span className="text-blue-950">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Actividad */}
      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <h2 className="mb-4 text-2xl font-bold text-blue-900">
          Actividad práctica: reconocer una presentación
        </h2>

        <p className="mb-4 leading-relaxed text-blue-950">
          Elegí una presentación digital que hayas visto en una clase, reunión
          o actividad laboral. Analizá sus características y respondé en tu
          carpeta:
        </p>

        <ol className="list-inside list-decimal space-y-3 text-blue-950">
          <li>¿Cuál era el tema y qué objetivo tenía?</li>
          <li>¿Cómo estaban organizadas las diapositivas?</li>
          <li>¿Qué tipos de textos, imágenes o gráficos utilizaba?</li>
          <li>¿El diseño facilitaba la lectura? ¿Por qué?</li>
          <li>¿Qué cambiarías para mejorar la presentación?</li>
        </ol>

        <p className="mt-5 text-sm text-blue-800">
          Puesta en común: compartí tus observaciones con el grupo y compará
          las decisiones de diseño que identificaste.
        </p>
      </section>

      {/* Cierre y navegación */}
      <section className="border-t border-blue-200 pt-8">
        <h2 className="mb-4 text-2xl font-bold text-blue-800">
          Lo que aprenderás en este módulo
        </h2>

        <p className="mb-6 leading-relaxed text-blue-950">
          A lo largo del módulo vas a trabajar con la interfaz de un editor de
          presentaciones, el diseño de diapositivas, la incorporación de
          textos e imágenes, el uso de gráficos, las animaciones, las
          transiciones y la integración de sonido y video. Finalmente,
          elaborarás una presentación propia aplicando los conocimientos
          adquiridos.
        </p>

        <Link
          href="/cursos/administracion/modulo-6/interfaz"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Continuar: Interfaz y herramientas del editor
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
