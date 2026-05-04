export default function InsertarTablaFiltrosExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Insertar Tabla y Aplicar Filtros en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En Excel, convertir un rango de datos en una tabla permite trabajar de
          manera más organizada y profesional. Las tablas incluyen automáticamente
          filtros, estilos y facilitan el análisis de la información.
        </p>
      </section>

      {/* Qué es una tabla */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Qué es una Tabla en Excel?
        </h2>

        <p className="max-w-3xl">
          Una tabla es un conjunto de datos organizado con encabezados. Al crear
          una tabla, Excel agrega automáticamente herramientas como filtros,
          formato y opciones de análisis.
        </p>
      </section>

      {/* Cómo insertar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Cómo insertar una tabla?
        </h2>

        <div className="border p-6 rounded-xl space-y-3">
          <ol className="list-decimal list-inside space-y-2">
            <li>Seleccionar los datos (incluyendo encabezados).</li>
            <li>Ir a la pestaña <strong>Insertar</strong>.</li>
            <li>Hacer clic en <strong>Tabla</strong>.</li>
            <li>Confirmar que la opción "La tabla tiene encabezados" esté marcada.</li>
            <li>Presionar <strong>Aceptar</strong>.</li>
          </ol>

          <p className="mt-2">
            También puedes usar el atajo: <strong>Ctrl + T</strong>.
          </p>
        </div>
      </section>

      {/* Ejemplo visual */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Ejemplo de Tabla
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full text-left">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Nombre</th>
                <th className="border px-4 py-2">Curso</th>
                <th className="border px-4 py-2">Nota</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Juan</td>
                <td className="border px-4 py-2">1°A</td>
                <td className="border px-4 py-2">8</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Ana</td>
                <td className="border px-4 py-2">1°B</td>
                <td className="border px-4 py-2">5</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Luis</td>
                <td className="border px-4 py-2">1°A</td>
                <td className="border px-4 py-2">7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Filtros automáticos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Filtros Automáticos
        </h2>

        <p className="max-w-3xl mb-4">
          Al crear una tabla, Excel agrega automáticamente filtros en cada columna.
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li>Filtrar por texto (nombre).</li>
          <li>Filtrar por número (nota).</li>
          <li>Filtrar por categorías (curso).</li>
        </ul>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Ventajas de usar Tablas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Filtros automáticos.</li>
          <li>Formato visual más claro.</li>
          <li>Las fórmulas se aplican automáticamente.</li>
          <li>Facilita el análisis de datos.</li>
        </ul>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Actividad Práctica
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 1</p>
            Crea una tabla con:
            <br />
            Nombre | Curso | Nota
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 2</p>
            Convierte los datos en tabla usando <strong>Ctrl + T</strong>.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 3</p>
            Usa los filtros para:
            <ul className="list-disc list-inside mt-2">
              <li>Mostrar solo aprobados.</li>
              <li>Filtrar por curso.</li>
              <li>Ordenar por nota.</li>
            </ul>
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Objetivo</p>
            Aprender a trabajar con tablas reales de Excel y analizar datos fácilmente.
          </div>

        </div>
      </section>

    </div>
  );
}