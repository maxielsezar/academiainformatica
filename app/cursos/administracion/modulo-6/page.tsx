
import Link from "next/link";

export default function Modulo6Page() {
  return (
    <main className="space-y-16">
      {/* Encabezado */}
      <section className="space-y-6">

        <h1 className="text-3xl font-bold text-blue-900">
          Creación de elementos multimediales para informes y presentaciones
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed">
          En este módulo aprenderás a diseñar presentaciones digitales para
          comunicar información de manera clara, organizada y visualmente
          atractiva. Trabajarás con textos, imágenes, gráficos, animaciones,
          sonidos y videos para elaborar materiales destinados a reuniones,
          exposiciones e informes del ámbito laboral.
        </p>

        <div className="rounded-2xl border border-blue-200 p-6">
          <h2 className="mb-3 text-xl font-bold text-blue-900">
            ¿Qué vas a aprender?
          </h2>
          <p className="leading-relaxed text-blue-950">
            Vas a crear presentaciones desde cero y adaptar modelos existentes,
            organizar la información en diapositivas, incorporar recursos
            multimedia y preparar archivos para compartir o reproducir en
            diferentes equipos.
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
              titulo: "Diseñar presentaciones",
              descripcion:
                "Crear presentaciones o adaptar plantillas según el propósito de la comunicación.",
            },
            {
              titulo: "Organizar la información",
              descripcion:
                "Distribuir textos, conceptos y datos para facilitar la comprensión del público.",
            },
            {
              titulo: "Integrar recursos multimedia",
              descripcion:
                "Incorporar imágenes, gráficos, sonido, video y otros elementos visuales.",
            },
            {
              titulo: "Preparar exposiciones",
              descripcion:
                "Configurar transiciones, animaciones y reproducción automática cuando sea necesario.",
            },
            {
              titulo: "Utilizar herramientas gráficas",
              descripcion:
                "Crear o modificar elementos gráficos y adaptar imágenes a las necesidades de cada diapositiva.",
            },
            {
              titulo: "Compartir los trabajos",
              descripcion:
                "Guardar y exportar presentaciones en formatos adecuados para su distribución.",
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
              1. Introducción a las presentaciones digitales
            </h3>
            <p className="leading-relaxed">
              Propósito de las presentaciones, tipos de exposición y
              características de una comunicación visual efectiva.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              2. Interfaz y herramientas del editor
            </h3>
            <p className="leading-relaxed">
              Entorno de trabajo, paneles, diapositivas, herramientas de
              edición y funciones principales del programa.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              3. Diseño y estructura de diapositivas
            </h3>
            <p className="leading-relaxed">
              Diseños, plantillas, fondos, colores, rellenos, texturas,
              tipografías y criterios de organización de contenidos.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              4. Textos, imágenes y gráficos
            </h3>
            <p className="leading-relaxed">
              Inserción y edición de textos, búsqueda e incorporación de
              imágenes, uso de gráficos y adaptación de recursos visuales.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              5. Animaciones y transiciones
            </h3>
            <p className="leading-relaxed">
              Efectos de entrada y salida, transiciones entre diapositivas,
              secuenciación de elementos y uso adecuado de los efectos.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              6. Sonido y video
            </h3>
            <p className="leading-relaxed">
              Incorporación de recursos audiovisuales y configuración de su
              reproducción según las necesidades de la presentación.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              7. Herramientas de dibujo y recursos gráficos
            </h3>
            <p className="leading-relaxed">
              Creación y edición de formas, utilización de ilustraciones y
              adaptación de elementos gráficos para comunicar ideas.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              8. Presentación y distribución del trabajo
            </h3>
            <p className="leading-relaxed">
              Revisión del material, configuración de la exposición,
              reproducción en distintos equipos y exportación de archivos
              para compartir.
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
          Las presentaciones digitales son una herramienta de apoyo para
          comunicar información en empresas, instituciones educativas,
          organismos públicos y organizaciones privadas. Permiten resumir
          resultados, explicar procedimientos y acompañar exposiciones
          profesionales.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Informes administrativos
            </h3>
            <p className="leading-relaxed">
              Presentar resultados, estadísticas y avances de actividades.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Reuniones de trabajo
            </h3>
            <p className="leading-relaxed">
              Organizar temas, explicar propuestas y comunicar decisiones.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Capacitación y difusión
            </h3>
            <p className="leading-relaxed">
              Elaborar materiales visuales para explicar procesos y difundir
              información.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-blue-900 p-8 text-center text-white">
        <h2 className="mb-4 text-2xl font-bold">
          ¡Comenzá el Módulo 6!
        </h2>

        <p className="mx-auto mb-6 max-w-2xl leading-relaxed">
          Explorá las herramientas de presentación y aprendé a transformar
          información en materiales visuales claros, atractivos y útiles
          para el trabajo.
        </p>

        <Link
          href="/cursos/administracion/modulo-6/introduccion"
          className="inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-100"
        >
          Comenzar con la introducción
        </Link>
      </section>
    </main>
  );
}
