export default function TablasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Tablas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las tablas permiten organizar información en filas y columnas.
          Son muy útiles para presentar datos de manera clara y ordenada,
          como horarios, listas, presupuestos o registros.
        </p>
      </section>

      {/* Qué es una tabla */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Tabla?
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="mb-4">
            Una tabla está formada por:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Filas:</strong> líneas horizontales de la tabla.</li>
            <li><strong>Columnas:</strong> líneas verticales de la tabla.</li>
            <li><strong>Celdas:</strong> cada espacio donde se cruzan una fila y una columna.</li>
          </ul>
        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Tabla
        </h2>

        <div className="border rounded-xl overflow-hidden max-w-xl">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3 font-semibold">Nombre</th>
                <th className="p-3 font-semibold">Curso</th>
                <th className="p-3 font-semibold">Turno</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-3">Ana</td>
                <td className="p-3">Informática</td>
                <td className="p-3">Mañana</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Carlos</td>
                <td className="p-3">Programación</td>
                <td className="p-3">Tarde</td>
              </tr>

              <tr>
                <td className="p-3">María</td>
                <td className="p-3">Diseño</td>
                <td className="p-3">Noche</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Crear tabla */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Crear una Tabla en Word
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Ir a la pestaña <strong>Insertar</strong>.</li>
            <li>Seleccionar <strong>Tabla</strong>.</li>
            <li>Elegir la cantidad de filas y columnas.</li>
            <li>Hacer clic para insertar la tabla en el documento.</li>
          </ol>
        </div>
      </section>

      {/* Editar tabla */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Modificar una Tabla
        </h2>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-2">
            <li>Agregar o eliminar filas.</li>
            <li>Agregar o eliminar columnas.</li>
            <li>Cambiar el tamaño de las celdas.</li>
            <li>Aplicar estilos y colores a la tabla.</li>
          </ul>
        </div>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Crea una tabla de 3 columnas y 4 filas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Completa la tabla con nombres y cursos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Cambia el tamaño de las columnas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Aplica un estilo de tabla diferente.
          </div>

        </div>
      </section>

    </div>
  );
}