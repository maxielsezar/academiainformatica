export default function NavegadoresMotoresBusquedaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Navegadores Web y Motores de Búsqueda
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Para acceder a la información disponible en Internet utilizamos
          navegadores web y motores de búsqueda. Aunque ambos conceptos están
          relacionados, cumplen funciones diferentes dentro de la navegación en
          la Web.
        </p>
      </section>

      {/* Navegador */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Navegador Web?
        </h2>

        <p className="max-w-3xl">
          Un navegador web es un programa que permite acceder, visualizar e
          interactuar con páginas web. Su función principal es interpretar la
          información de los sitios web y mostrarla de manera comprensible para
          el usuario.
        </p>
      </section>

      {/* Ejemplos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplos de Navegadores Web
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Navegador</th>
                <th className="border px-4 py-2">Desarrollador</th>
                <th className="border px-4 py-2">Características</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Google Chrome</td>
                <td className="border px-4 py-2">Google</td>
                <td className="border px-4 py-2">
                  Rápido, compatible con múltiples extensiones.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Mozilla Firefox</td>
                <td className="border px-4 py-2">Mozilla Foundation</td>
                <td className="border px-4 py-2">
                  Enfocado en privacidad y seguridad.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Microsoft Edge</td>
                <td className="border px-4 py-2">Microsoft</td>
                <td className="border px-4 py-2">
                  Integrado con Windows.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Safari</td>
                <td className="border px-4 py-2">Apple</td>
                <td className="border px-4 py-2">
                  Optimizado para dispositivos Apple.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Partes del navegador */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Partes Principales de un Navegador
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Barra de direcciones.</li>
          <li>Pestañas de navegación.</li>
          <li>Botón Atrás y Adelante.</li>
          <li>Botón Actualizar.</li>
          <li>Marcadores o Favoritos.</li>
          <li>Menú de configuración.</li>
        </ul>
      </section>

      {/* Motor de búsqueda */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Motor de Búsqueda?
        </h2>

        <p className="max-w-3xl">
          Un motor de búsqueda es un servicio web que permite localizar
          información en Internet a partir de palabras clave ingresadas por el
          usuario.
        </p>
      </section>

      {/* Ejemplos motores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplos de Motores de Búsqueda
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Motor de Búsqueda</th>
                <th className="border px-4 py-2">Descripción</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Google</td>
                <td className="border px-4 py-2">
                  El buscador más utilizado del mundo.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Bing</td>
                <td className="border px-4 py-2">
                  Motor de búsqueda desarrollado por Microsoft.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">DuckDuckGo</td>
                <td className="border px-4 py-2">
                  Enfocado en la privacidad del usuario.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Yahoo!</td>
                <td className="border px-4 py-2">
                  Buscador y portal de servicios web.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Diferencias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencia entre Navegador y Motor de Búsqueda
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Navegador Web</th>
                <th className="border px-4 py-2">Motor de Búsqueda</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">
                  Programa instalado en el dispositivo.
                </td>
                <td className="border px-4 py-2">
                  Servicio disponible en Internet.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Permite acceder a sitios web.
                </td>
                <td className="border px-4 py-2">
                  Permite encontrar información.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Ejemplo: Chrome.
                </td>
                <td className="border px-4 py-2">
                  Ejemplo: Google.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Búsquedas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consejos para Realizar Búsquedas Eficientes
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Utilizar palabras clave específicas.</li>
          <li>Evitar frases demasiado generales.</li>
          <li>Comparar información de distintas fuentes.</li>
          <li>Verificar la fecha de publicación.</li>
          <li>Comprobar la confiabilidad del sitio web.</li>
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
            Identifica qué navegador utilizas habitualmente y menciona dos de
            sus características.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Realiza una búsqueda sobre un tema de interés utilizando Google o
            Bing y registra las primeras tres páginas encontradas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Explica con tus palabras la diferencia entre un navegador web y un
            motor de búsqueda.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Busca información sobre un tema escolar o laboral y compara los
            resultados obtenidos en dos motores de búsqueda diferentes.
          </div>

        </div>
      </section>

    </div>
  );
}