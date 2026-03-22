export default function Modulo3InicioPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Módulo 3: Búsqueda y Procesamiento de Información
        </h1>

        <p className="text-lg leading-relaxed max-w-3xl">
          Estrategias de investigación en internet y organización de contenidos digitales.
        </p>
      </section>

      {/* Introducción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿De qué trata este módulo?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En este módulo vas a aprender a buscar información de manera eficiente en internet,
          evaluar la calidad de las fuentes y organizar los contenidos digitales de forma clara.
          Estas habilidades son fundamentales tanto para el estudio como para el trabajo,
          ya que permiten tomar decisiones basadas en información confiable.
        </p>
      </section>

      {/* Contenidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contenidos que vas a ver
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Búsqueda en Internet</h3>
            Uso de buscadores, palabras clave y técnicas para encontrar información relevante.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Evaluación de la Información</h3>
            Cómo identificar fuentes confiables y evitar información falsa o poco precisa.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Organización de Contenidos</h3>
            Métodos para ordenar información: resúmenes, esquemas, tablas y mapas conceptuales.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Uso Responsable de la Información</h3>
            Importancia de citar fuentes y respetar derechos de autor.
          </div>

        </div>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos del módulo
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Buscar información de manera eficiente en internet</li>
          <li>Seleccionar fuentes confiables</li>
          <li>Organizar información de forma clara</li>
          <li>Desarrollar pensamiento crítico</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades que vas a realizar
        </h2>

        <div className="space-y-4">

          <div className="border p-6 rounded-xl">
            Investigación guiada en internet sobre un tema específico.
          </div>

          <div className="border p-6 rounded-xl">
            Análisis de fuentes confiables vs. no confiables.
          </div>

          <div className="border p-6 rounded-xl">
            Creación de resúmenes y tablas comparativas.
          </div>

          <div className="border p-6 rounded-xl">
            Elaboración de un trabajo práctico integrador.
          </div>

        </div>
      </section>

      {/* Cierre */}
      <section className="mb-6">
        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Este módulo te permitirá desarrollar habilidades clave para aprender mejor,
          investigar con criterio y manejar información digital de forma profesional.
        </div>
      </section>

    </div>
  );
}