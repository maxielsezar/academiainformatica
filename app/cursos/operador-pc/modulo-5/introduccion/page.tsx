export default function IntroduccionPresentacionesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Introducción a las Presentaciones Digitales
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Una presentación digital es un conjunto de diapositivas diseñadas para
          comunicar información de manera visual y organizada. Se utilizan para
          acompañar exposiciones, explicar conceptos, mostrar resultados,
          presentar proyectos y transmitir ideas utilizando texto, imágenes,
          gráficos, videos y otros recursos multimedia.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo de una Presentación
        </h2>

        <p className="max-w-3xl mb-4">
          El propósito principal de una presentación es ayudar al expositor a
          transmitir información de forma clara, atractiva y comprensible para
          el público.
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li>Organizar ideas.</li>
          <li>Captar la atención del público.</li>
          <li>Apoyar una explicación oral.</li>
          <li>Mostrar datos e imágenes.</li>
          <li>Facilitar el aprendizaje.</li>
        </ul>
      </section>

      {/* Qué contienen */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos que Puede Contener una Presentación
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Elemento</th>
                <th className="border px-4 py-2">Función</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Texto</td>
                <td className="border px-4 py-2">
                  Presentar títulos e información.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Imágenes</td>
                <td className="border px-4 py-2">
                  Complementar y explicar visualmente.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Gráficos</td>
                <td className="border px-4 py-2">
                  Representar datos y estadísticas.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Audio</td>
                <td className="border px-4 py-2">
                  Incorporar narraciones o sonidos.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Video</td>
                <td className="border px-4 py-2">
                  Mostrar contenido audiovisual.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Animaciones</td>
                <td className="border px-4 py-2">
                  Destacar elementos durante la exposición.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Programas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Programas para Crear Presentaciones
        </h2>

        <p className="mb-4 max-w-3xl">
          Existen diferentes herramientas que permiten crear presentaciones
          digitales:
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li>Microsoft PowerPoint.</li>
          <li>Google Presentaciones.</li>
          <li>LibreOffice Impress.</li>
          <li>Canva.</li>
          <li>Prezi.</li>
        </ul>
      </section>

      {/* Diapositiva */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Diapositiva?
        </h2>

        <div className="border p-6 rounded-xl">
          <p>
            Una diapositiva es cada una de las páginas que forman una
            presentación. Cada diapositiva puede contener contenido diferente y
            se muestran una detrás de otra durante una exposición.
          </p>
        </div>
      </section>

      {/* Usos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Usos de las Presentaciones
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold mb-2">
              Educación
            </h3>
            <p>
              Exposición de trabajos, clases y proyectos.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold mb-2">
              Empresas
            </h3>
            <p>
              Informes, reuniones y propuestas comerciales.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold mb-2">
              Marketing
            </h3>
            <p>
              Presentación de productos y campañas.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold mb-2">
              Uso Personal
            </h3>
            <p>
              Álbumes, eventos y proyectos personales.
            </p>
          </div>

        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas al Crear Presentaciones
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Utilizar poco texto por diapositiva.</li>
          <li>Elegir colores fáciles de leer.</li>
          <li>Usar imágenes relacionadas con el tema.</li>
          <li>Mantener un diseño uniforme.</li>
          <li>No abusar de animaciones.</li>
          <li>Organizar la información por secciones.</li>
        </ul>
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
            Explica con tus palabras qué es una presentación digital.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Investiga qué programas permiten crear presentaciones.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Diseña una presentación de 3 diapositivas sobre un tema libre.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Identifica cinco elementos multimedia que puedan incorporarse en una presentación.
          </div>

        </div>
      </section>

    </div>
  );
}