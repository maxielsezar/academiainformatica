export default function GraficosExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Gráficos en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los gráficos permiten representar datos de forma visual, facilitando
          la comprensión y el análisis de la información. Excel ofrece distintos
          tipos de gráficos que ayudan a comparar valores, mostrar porcentajes
          y visualizar tendencias.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender a crear y personalizar gráficos en Excel utilizando datos de una tabla.
        </p>
      </section>

      {/* Qué es un gráfico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Qué es un gráfico?
        </h2>

        <p className="max-w-3xl">
          Un gráfico es una representación visual de datos. Permite interpretar
          información de manera rápida y detectar diferencias, tendencias o resultados.
        </p>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Tipos de Gráficos
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Gráfico de columnas.</li>
          <li>Gráfico de barras.</li>
          <li>Gráfico circular.</li>
          <li>Gráfico de líneas.</li>
          <li>Gráfico de áreas.</li>
        </ul>
      </section>

      {/* Tabla ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Ejemplo de Datos
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full text-left">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Alumno</th>
                <th className="border px-4 py-2">Nota</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Juan</td>
                <td className="border px-4 py-2">8</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Ana</td>
                <td className="border px-4 py-2">6</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Luis</td>
                <td className="border px-4 py-2">9</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">María</td>
                <td className="border px-4 py-2">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Cómo crear */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Cómo crear un gráfico?
        </h2>

        <div className="border p-6 rounded-xl space-y-3">
          <ol className="list-decimal list-inside space-y-2">
            <li>Seleccionar los datos de la tabla.</li>
            <li>Ir a la pestaña <strong>Insertar</strong>.</li>
            <li>Elegir el tipo de gráfico.</li>
            <li>Excel generará el gráfico automáticamente.</li>
          </ol>
        </div>
      </section>

      {/* Personalización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Personalización del Gráfico
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Cambiar colores.</li>
          <li>Modificar el título.</li>
          <li>Agregar etiquetas de datos.</li>
          <li>Cambiar estilos y diseños.</li>
        </ul>
      </section>

      {/* Para qué sirven */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Para qué sirven los gráficos?
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Comparar información rápidamente.</li>
          <li>Presentar datos de forma profesional.</li>
          <li>Analizar resultados y tendencias.</li>
          <li>Mejorar informes y presentaciones.</li>
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
            Crea una tabla con nombres y notas de al menos 10 alumnos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 2</p>
            Inserta un gráfico de columnas usando los datos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 3</p>
            Cambia el título y los colores del gráfico.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 4</p>
            Prueba otros tipos de gráficos y compara los resultados.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Objetivo</p>
            Representar datos visualmente utilizando gráficos en Excel.
          </div>

        </div>
      </section>

    </div>
  );
}