export default function BusquedasEficientesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Búsquedas Eficientes de Información
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Internet contiene una enorme cantidad de información. Saber buscar de
          manera eficiente permite encontrar resultados más precisos, ahorrar
          tiempo y acceder a fuentes confiables para estudiar, trabajar o resolver
          problemas cotidianos.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender a utilizar correctamente los motores de búsqueda para obtener
          información relevante, actualizada y confiable.
        </p>
      </section>

      {/* Qué es una búsqueda eficiente */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Búsqueda Eficiente?
        </h2>

        <p className="max-w-3xl">
          Una búsqueda eficiente consiste en utilizar palabras clave adecuadas y
          herramientas de búsqueda para encontrar información específica entre
          millones de páginas disponibles en Internet.
        </p>
      </section>

      {/* Palabras clave */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso de Palabras Clave
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Búsqueda Poco Eficiente</th>
                <th className="border px-4 py-2">Búsqueda Eficiente</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Computadoras</td>
                <td className="border px-4 py-2">
                  Cómo armar una computadora para diseño gráfico
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Excel</td>
                <td className="border px-4 py-2">
                  Función BUSCARV en Excel ejemplos
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Internet</td>
                <td className="border px-4 py-2">
                  Historia de Internet resumen
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Operadores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Operadores de Búsqueda
        </h2>

        <p className="mb-4">
          Los motores de búsqueda permiten utilizar operadores especiales para
          mejorar los resultados.
        </p>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Operador</th>
                <th className="border px-4 py-2">Función</th>
                <th className="border px-4 py-2">Ejemplo</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">" "</td>
                <td className="border px-4 py-2">
                  Busca una frase exacta.
                </td>
                <td className="border px-4 py-2">
                  "curso de excel"
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">
                  Excluye palabras.
                </td>
                <td className="border px-4 py-2">
                  jaguar -auto
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">site:</td>
                <td className="border px-4 py-2">
                  Busca dentro de un sitio específico.
                </td>
                <td className="border px-4 py-2">
                  excel site:microsoft.com
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">filetype:</td>
                <td className="border px-4 py-2">
                  Busca tipos de archivo específicos.
                </td>
                <td className="border px-4 py-2">
                  excel avanzado filetype:pdf
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Evaluar fuentes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Evaluar una Fuente de Información
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Verificar quién es el autor.</li>
          <li>Comprobar la fecha de publicación.</li>
          <li>Revisar si el sitio es confiable.</li>
          <li>Comparar la información con otras fuentes.</li>
          <li>Identificar posibles errores o datos desactualizados.</li>
        </ul>
      </section>

      {/* Sitios confiables */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplos de Sitios Confiables
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Sitios gubernamentales (.gov).</li>
          <li>Universidades (.edu).</li>
          <li>Organizaciones reconocidas.</li>
          <li>Documentación oficial de empresas y software.</li>
          <li>Bibliotecas y repositorios académicos.</li>
        </ul>
      </section>

      {/* Errores comunes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores Comunes al Buscar Información
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Utilizar palabras demasiado generales.</li>
          <li>Confiar en la primera página encontrada.</li>
          <li>No verificar la fuente.</li>
          <li>Utilizar información desactualizada.</li>
          <li>No contrastar datos con otros sitios.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Busca información sobre la historia de Internet utilizando palabras
            clave específicas y registra los resultados obtenidos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Realiza una búsqueda utilizando el operador site: para encontrar
            información dentro de un sitio web específico.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Busca un documento PDF sobre Excel utilizando el operador
            filetype:pdf.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Compara la información obtenida en dos sitios distintos sobre el
            mismo tema y analiza cuál parece más confiable.
          </div>

        </div>
      </section>

    </div>
  );
}