export default function ModuloProduccionWeb20Page() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Módulo 8: Producción Web 2.0
        </h1>

        <p className="text-lg leading-relaxed max-w-3xl">
          Desarrollo de proyectos multimedia destinados a su publicación en la Web,
          aplicando técnicas de planificación, investigación, producción de contenidos
          y difusión mediante herramientas colaborativas de Internet.
        </p>
      </section>

      {/* Introducción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿De qué trata este módulo?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En este módulo aprenderás a planificar y desarrollar un proyecto multimedia
          completo para su publicación en Internet. Trabajarás desde la generación
          de una idea inicial hasta la elaboración de un guión multimedia, la búsqueda
          y organización de información, el montaje de contenidos y la creación de un
          blog donde compartirás los trabajos realizados. Además, conocerás las
          características de la Web 2.0 y las herramientas que permiten la participación
          y colaboración de los usuarios.
        </p>
      </section>

      {/* Contenidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contenidos que vas a ver
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Proyecto Multimedia</h3>
            Planificación y organización de un proyecto destinado a Internet.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Búsqueda de Ideas</h3>
            Técnicas para seleccionar temáticas y definir objetivos.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Guión Multimedia</h3>
            Elaboración de la estructura y secuencia de contenidos.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Documentación e Investigación</h3>
            Búsqueda, selección y validación de información relevante.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Montaje de Contenidos</h3>
            Integración de texto, imágenes, audio y video en un proyecto final.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Publicación en la Web</h3>
            Difusión de contenidos mediante blogs y plataformas digitales.
          </div>

        </div>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos del módulo
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Comprender las características de la Web 2.0</li>
          <li>Desarrollar proyectos multimedia para Internet</li>
          <li>Planificar contenidos mediante guiones multimedia</li>
          <li>Investigar y documentar información confiable</li>
          <li>Integrar diferentes recursos digitales en una producción</li>
          <li>Publicar y compartir contenidos en la Web</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades que vas a realizar
        </h2>

        <div className="space-y-4">

          <div className="border p-6 rounded-xl">
            Selección de una temática para desarrollar un proyecto multimedia.
          </div>

          <div className="border p-6 rounded-xl">
            Elaboración de un guión multimedia con la estructura del proyecto.
          </div>

          <div className="border p-6 rounded-xl">
            Investigación y recopilación de información utilizando fuentes confiables.
          </div>

          <div className="border p-6 rounded-xl">
            Creación y montaje de contenidos utilizando imágenes, textos, audio y video.
          </div>

          <div className="border p-6 rounded-xl">
            Publicación del proyecto en un blog personal o grupal.
          </div>

        </div>
      </section>

      {/* Herramientas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border p-6 rounded-xl text-center">
            <h3 className="font-semibold mb-2">Blogger</h3>
            Plataforma para crear y publicar blogs de forma gratuita.
          </div>

          <div className="border p-6 rounded-xl text-center">
            <h3 className="font-semibold mb-2">Google Drive</h3>
            Almacenamiento y organización de archivos del proyecto.
          </div>

          <div className="border p-6 rounded-xl text-center">
            <h3 className="font-semibold mb-2">Canva</h3>
            Diseño de recursos gráficos para publicaciones web.
          </div>

        </div>
      </section>

      {/* Cierre */}
      <section className="mb-6">
        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Al finalizar este módulo serás capaz de planificar, producir y publicar
          un proyecto multimedia completo en Internet, aplicando herramientas de la
          Web 2.0 para comunicar información de manera efectiva y compartir contenidos
          con otros usuarios.
        </div>
      </section>

    </div>
  );
}