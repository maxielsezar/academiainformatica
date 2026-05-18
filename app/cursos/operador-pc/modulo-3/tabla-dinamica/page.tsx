export default function TablasDinamicasExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Tablas Dinámicas en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las tablas dinámicas son una de las herramientas más potentes de Excel.
          Permiten resumir, organizar y analizar grandes cantidades de información
          de forma rápida y automática.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender a crear y utilizar tablas dinámicas para analizar datos.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Qué es una Tabla Dinámica?
        </h2>

        <p className="max-w-3xl">
          Una tabla dinámica es una herramienta que permite reorganizar y resumir
          datos automáticamente. Facilita la creación de reportes y el análisis
          de información sin modificar la tabla original.
        </p>
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
                <th className="border px-4 py-2">Curso</th>
                <th className="border px-4 py-2">Materia</th>
                <th className="border px-4 py-2">Nota</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Juan</td>
                <td className="border px-4 py-2">1°A</td>
                <td className="border px-4 py-2">Matemática</td>
                <td className="border px-4 py-2">8</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Ana</td>
                <td className="border px-4 py-2">1°B</td>
                <td className="border px-4 py-2">Lengua</td>
                <td className="border px-4 py-2">6</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Luis</td>
                <td className="border px-4 py-2">1°A</td>
                <td className="border px-4 py-2">Matemática</td>
                <td className="border px-4 py-2">9</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">María</td>
                <td className="border px-4 py-2">1°B</td>
                <td className="border px-4 py-2">Lengua</td>
                <td className="border px-4 py-2">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Cómo crear */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Cómo crear una Tabla Dinámica?
        </h2>

        <div className="border p-6 rounded-xl space-y-3">
          <ol className="list-decimal list-inside space-y-2">
            <li>Seleccionar los datos o la tabla.</li>
            <li>Ir a la pestaña <strong>Insertar</strong>.</li>
            <li>Hacer clic en <strong>Tabla Dinámica</strong>.</li>
            <li>Elegir dónde colocar la tabla dinámica.</li>
            <li>Arrastrar campos a filas, columnas y valores.</li>
          </ol>
        </div>
      </section>

      {/* Áreas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Áreas de una Tabla Dinámica
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Filas:</strong> organiza la información verticalmente.</li>
          <li><strong>Columnas:</strong> organiza la información horizontalmente.</li>
          <li><strong>Valores:</strong> realiza cálculos (sumas, promedios, etc.).</li>
          <li><strong>Filtros:</strong> permite mostrar información específica.</li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Ejemplo de Uso
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>
            Puedes crear una tabla dinámica para ver:
          </p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Promedio de notas por curso.</li>
            <li>Cantidad de alumnos por materia.</li>
            <li>Suma total de notas.</li>
          </ul>
        </div>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Ventajas de las Tablas Dinámicas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Analizan grandes cantidades de datos.</li>
          <li>Permiten resumir información rápidamente.</li>
          <li>Crean reportes automáticos.</li>
          <li>Facilitan la toma de decisiones.</li>
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
            Crea una tabla con alumnos, cursos, materias y notas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 2</p>
            Convierte los datos en una tabla dinámica.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 3</p>
            Calcula el promedio de notas por curso.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 4</p>
            Filtra los datos para mostrar solo una materia.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Objetivo</p>
            Analizar datos utilizando tablas dinámicas y filtros automáticos.
          </div>

        </div>
      </section>

    </div>
  );
}