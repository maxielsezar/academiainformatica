export default function DisenoOrganizacionDiapositivasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Diseño y Organización de Diapositivas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El diseño y la organización de diapositivas son fundamentales para
          crear presentaciones claras, ordenadas y visualmente atractivas. Una
          buena presentación no solo depende del contenido, sino también de cómo
          se distribuye la información en cada diapositiva.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender a diseñar diapositivas correctamente, organizar el contenido y
          aplicar buenas prácticas para mejorar la comunicación visual.
        </p>
      </section>

      {/* Diseño */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el Diseño de una Diapositiva?
        </h2>

        <p className="max-w-3xl">
          El diseño corresponde a la forma en que se distribuyen los elementos
          dentro de una diapositiva: títulos, texto, imágenes, gráficos y otros
          recursos visuales.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-2">
            Un buen diseño debe ser:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Simple.</li>
            <li>Ordenado.</li>
            <li>Fácil de leer.</li>
            <li>Visualmente equilibrado.</li>
            <li>Coherente en toda la presentación.</li>
          </ul>
        </div>
      </section>

      {/* Diseños */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diseños Predeterminados de PowerPoint
        </h2>

        <p className="mb-4 max-w-3xl">
          PowerPoint incluye diferentes estructuras listas para organizar el
          contenido.
        </p>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="">
              <tr>
                <th className="border px-4 py-2">
                  Diseño
                </th>

                <th className="border px-4 py-2">
                  Uso
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Diapositiva de título
                </td>

                <td className="border px-4 py-2">
                  Portada de la presentación.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Título y contenido
                </td>

                <td className="border px-4 py-2">
                  Texto acompañado por imágenes o gráficos.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Dos contenidos
                </td>

                <td className="border px-4 py-2">
                  Comparar dos bloques de información.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Comparación
                </td>

                <td className="border px-4 py-2">
                  Mostrar diferencias entre conceptos.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Solo título
                </td>

                <td className="border px-4 py-2">
                  Utilizar contenido libre.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Organización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización del Contenido
        </h2>

        <p className="max-w-3xl mb-4">
          Para lograr una presentación clara se recomienda mantener una
          estructura lógica entre diapositivas.
        </p>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-3">
            <li>Portada.</li>
            <li>Introducción.</li>
            <li>Desarrollo del tema.</li>
            <li>Ejemplos o demostraciones.</li>
            <li>Conclusión.</li>
            <li>Diapositiva final o preguntas.</li>
          </ol>

        </div>

      </section>

      {/* Regla */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Regla 6 × 6
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            Una recomendación clásica para evitar diapositivas sobrecargadas:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Máximo 6 líneas por diapositiva.</li>
            <li>Máximo 6 palabras por línea.</li>
          </ul>

          <p className="mt-4">
            El objetivo es que el público escuche al expositor y no lea toda la
            pantalla.
          </p>

        </div>

      </section>

      {/* Colores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso de Colores y Tipografías
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="">
              <tr>
                <th className="border px-4 py-2">
                  Recomendado
                </th>

                <th className="border px-4 py-2">
                  Evitar
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Colores con buen contraste.
                </td>

                <td className="border px-4 py-2">
                  Fondos con colores similares al texto.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Máximo 2 o 3 fuentes.
                </td>

                <td className="border px-4 py-2">
                  Muchas tipografías distintas.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Tamaños grandes para títulos.
                </td>

                <td className="border px-4 py-2">
                  Letras pequeñas.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Alineación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Alineación y Espaciado
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Alinear elementos correctamente.</li>
          <li>Dejar espacios en blanco.</li>
          <li>Evitar saturar la diapositiva.</li>
          <li>Usar márgenes visuales.</li>
          <li>Mantener consistencia entre diapositivas.</li>
        </ul>
      </section>

      {/* Errores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores Comunes
        </h2>

        <div className="border p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-2">
            <li>Demasiado texto.</li>
            <li>Imágenes de baja calidad.</li>
            <li>Colores difíciles de leer.</li>
            <li>Abusar de efectos visuales.</li>
            <li>Desorden entre diapositivas.</li>
          </ul>

        </div>
      </section>

      {/* Actividad */}
      <section className="mb-6">

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 1
            </p>

            Crea una presentación de 5 diapositivas utilizando al menos
            tres diseños diferentes.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Diseña una portada con título, imagen y nombre del autor.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Reorganiza las diapositivas arrastrándolas desde el panel lateral.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Mejora una diapositiva con demasiado texto aplicando la regla 6 × 6.
          </div>

        </div>

      </section>

    </div>
  );
}