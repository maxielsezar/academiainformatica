export default function EvaluacionInformacionPage() {
  return (
    <div className="space-y-14">

      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Evaluación de la Información
        </h1>

        <p className="leading-relaxed max-w-3xl">
          No toda la información en internet es confiable. Es importante aprender
          a evaluar las fuentes antes de utilizarlas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Criterios de evaluación
        </h2>

        <div className="space-y-4">
          <div className="border p-6 rounded-xl">
            <strong>Autor:</strong> ¿Quién escribió el contenido?
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Fecha:</strong> ¿Está actualizado?
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Fuente:</strong> ¿Es un sitio confiable?
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Objetividad:</strong> ¿Es información imparcial?
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo
        </h2>

        <div className="border p-6 rounded-xl">
          Comparar una noticia de un blog desconocido con una de un sitio oficial.
        </div>
      </section>



      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Buscar una noticia en internet e identificar:
            autor, fecha y fuente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Comparar dos páginas sobre el mismo tema y determinar cuál es más confiable.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Explicar por qué una página puede ser considerada no confiable.
          </div>

        </div>
      </section>

    </div>
  );
}