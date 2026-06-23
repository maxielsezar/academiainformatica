export default function InsercionTablasGraficosPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Inserción de Tablas y Gráficos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las tablas y los gráficos permiten presentar información de forma
          organizada y visual. En PowerPoint ayudan a resumir datos, comparar
          resultados y comunicar información de manera más clara durante una
          exposición.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender a insertar, editar y dar formato a tablas y gráficos dentro
          de una presentación para representar datos de manera efectiva.
        </p>
      </section>

      {/* Tablas */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Tabla?
        </h2>

        <p className="max-w-3xl mb-4">
          Una tabla organiza información en filas y columnas para facilitar la
          lectura y comparación de datos.
        </p>

        <div className="border p-6 rounded-xl">

          <p className="font-semibold mb-3">
            Ejemplo:
          </p>

          <div className="overflow-x-auto">

            <table className="table-auto border border-gray-300 w-full">

              <thead className="bg-blue-200">
                <tr>
                  <th className="border px-4 py-2">
                    Alumno
                  </th>

                  <th className="border px-4 py-2">
                    Nota
                  </th>

                  <th className="border px-4 py-2">
                    Estado
                  </th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td className="border px-4 py-2">
                    Juan
                  </td>

                  <td className="border px-4 py-2">
                    8
                  </td>

                  <td className="border px-4 py-2">
                    Aprobado
                  </td>
                </tr>

                <tr>
                  <td className="border px-4 py-2">
                    Ana
                  </td>

                  <td className="border px-4 py-2">
                    10
                  </td>

                  <td className="border px-4 py-2">
                    Aprobado
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* Insertar tabla */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Insertar una Tabla
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-3">
            <li>Abrir la diapositiva donde se agregará el contenido.</li>
            <li>Ir a la pestaña <strong>Insertar</strong>.</li>
            <li>Seleccionar <strong>Tabla</strong>.</li>
            <li>Elegir cantidad de filas y columnas.</li>
            <li>Ingresar los datos.</li>
            <li>Aplicar diseño y formato.</li>
          </ol>

        </div>

      </section>

      {/* Formato tabla */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato de Tablas
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">
                  Herramienta
                </th>

                <th className="border px-4 py-2">
                  Función
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Estilos
                </td>

                <td className="border px-4 py-2">
                  Aplicar diseños automáticos.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Bordes
                </td>

                <td className="border px-4 py-2">
                  Modificar líneas de separación.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Colores
                </td>

                <td className="border px-4 py-2">
                  Resaltar encabezados o datos.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Distribución
                </td>

                <td className="border px-4 py-2">
                  Ajustar tamaño de filas y columnas.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Graficos */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Gráfico?
        </h2>

        <p className="max-w-3xl">
          Un gráfico representa datos visualmente para facilitar la comparación,
          interpretación y análisis de información.
        </p>

      </section>

      {/* Tipos */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Gráficos
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">
                  Tipo
                </th>

                <th className="border px-4 py-2">
                  Uso
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Columnas
                </td>

                <td className="border px-4 py-2">
                  Comparar cantidades.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Barras
                </td>

                <td className="border px-4 py-2">
                  Comparaciones horizontales.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Líneas
                </td>

                <td className="border px-4 py-2">
                  Mostrar evolución en el tiempo.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Circular
                </td>

                <td className="border px-4 py-2">
                  Mostrar proporciones.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Insertar grafico */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Insertar un Gráfico
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-3">
            <li>Ir a la pestaña <strong>Insertar</strong>.</li>
            <li>Seleccionar <strong>Gráfico</strong>.</li>
            <li>Elegir el tipo de gráfico.</li>
            <li>Ingresar o modificar datos.</li>
            <li>Personalizar colores y estilos.</li>
          </ol>

        </div>

      </section>

      {/* Personalizacion */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Personalización de Gráficos
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Modificar títulos.</li>
          <li>Cambiar colores.</li>
          <li>Agregar etiquetas de datos.</li>
          <li>Editar leyendas.</li>
          <li>Aplicar estilos visuales.</li>
        </ul>

      </section>

      {/* Buenas prácticas */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <div className="border p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-2">
            <li>Utilizar tablas simples.</li>
            <li>No saturar de información.</li>
            <li>Elegir el gráfico adecuado.</li>
            <li>Usar colores consistentes.</li>
            <li>Destacar los datos importantes.</li>
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
            <p className="font-semibold mb-2">
              Actividad 1
            </p>

            Inserta una tabla con notas de cinco alumnos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Aplica formato al encabezado de la tabla.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Crea un gráfico de columnas utilizando los datos de la tabla.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Diseña una diapositiva que combine una tabla y un gráfico.
          </div>

        </div>

      </section>

    </div>
  );
}