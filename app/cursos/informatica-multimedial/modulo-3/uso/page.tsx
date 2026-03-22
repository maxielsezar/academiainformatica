export default function UsoResponsablePage() {
  return (
    

      <div className="space-y-14">

      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Uso Responsable de la Información
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Utilizar información implica responsabilidad. Es importante respetar
          a los autores y evitar el plagio.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el plagio?
        </h2>

        <div className="border p-6 rounded-xl">
          Copiar información sin citar la fuente original.
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo evitarlo
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Citar las fuentes</li>
          <li>Parafrasear la información</li>
          <li>Usar comillas cuando sea textual</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Buscar un texto y reescribirlo con tus propias palabras.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Citar correctamente una fuente de internet.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Identificar un ejemplo de plagio y explicar por qué lo es.
          </div>

        </div>
      </section>

    </div>
  );
}