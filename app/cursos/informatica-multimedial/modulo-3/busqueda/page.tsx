export default function BusquedaInternetPage() {
  return (
    <div className="space-y-14">

      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Búsqueda en Internet
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Buscar información en internet es una habilidad fundamental. No se trata solo
          de escribir en un buscador, sino de saber cómo hacerlo de manera eficiente.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso de palabras clave
        </h2>

        <div className="border p-6 rounded-xl">
          Utilizar palabras específicas mejora los resultados de búsqueda.
          <br /><br />
          ❌ "animales"<br />
          ✔ "animales vertebrados características"
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso de comillas
        </h2>

        <div className="border p-6 rounded-xl">
          Las comillas permiten buscar frases exactas.
          <br /><br />
          Ejemplo: "cambio climático causas"
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores comunes
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Buscar con frases muy generales</li>
          <li>No verificar la fuente</li>
          <li>Quedarse solo con el primer resultado</li>
        </ul>
      </section>
    <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Buscar información sobre un tema libre utilizando palabras clave específicas.
            Escribir qué palabras utilizaste.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Realizar una búsqueda con comillas y comparar los resultados con una búsqueda normal.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Elegir un tema y encontrar al menos 3 páginas diferentes sobre el mismo.
          </div>

        </div>
      </section>
    </div>
  );
}