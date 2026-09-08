export default function MotoresBusquedaPage() {
  return (
    <div className="space-y-14">

      {/* Introducción */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Motores de búsqueda
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los motores de búsqueda son herramientas que permiten localizar
          información disponible en Internet a partir de palabras o frases
          introducidas por el usuario.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Su utilización es fundamental para encontrar rápidamente páginas
          web, documentos, imágenes, noticias y otros recursos digitales.
          Aprender a utilizarlos correctamente permite obtener resultados más
          relevantes y ahorrar tiempo durante una búsqueda.
        </p>
      </section>

      {/* Qué es un motor de búsqueda */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un motor de búsqueda?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un motor de búsqueda es un sistema que permite encontrar información
          en Internet mediante consultas realizadas por el usuario.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          El usuario introduce determinados términos y el motor de búsqueda
          presenta una lista de resultados relacionados con esa consulta.
        </p>

        <div className="border rounded-xl p-6 mt-6 max-w-3xl">
          <p className="font-semibold text-blue-900 mb-3">
            Ejemplo:
          </p>

          <p className="leading-relaxed">
            Si una persona necesita información sobre cómo realizar un trámite
            administrativo, puede escribir en el buscador:
          </p>

          <p className="font-mono mt-4 text-lg">
            requisitos para realizar un trámite administrativo
          </p>
        </div>
      </section>

      {/* Motores conocidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Principales motores de búsqueda
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Existen diferentes motores de búsqueda. Algunos de los más conocidos
          son:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Google
            </h3>

            <p className="leading-relaxed">
              Es uno de los motores de búsqueda más utilizados y permite
              localizar páginas web, imágenes, noticias, documentos y otros
              recursos.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Bing
            </h3>

            <p className="leading-relaxed">
              Motor de búsqueda que permite realizar búsquedas de páginas web,
              imágenes, videos, noticias y otros contenidos.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Yahoo
            </h3>

            <p className="leading-relaxed">
              Servicio que ofrece búsquedas de información junto con otros
              servicios disponibles en Internet.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              DuckDuckGo
            </h3>

            <p className="leading-relaxed">
              Motor de búsqueda que pone especial énfasis en la privacidad de
              las búsquedas realizadas por los usuarios.
            </p>
          </div>

        </div>
      </section>

      {/* Cómo funciona */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo funciona un motor de búsqueda?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los motores de búsqueda utilizan sistemas automatizados para
          localizar, organizar e indexar información disponible en diferentes
          sitios de Internet.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              1. Rastreo
            </h3>

            <p className="leading-relaxed">
              Sistemas automatizados recorren diferentes páginas y detectan
              nuevos contenidos o modificaciones.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              2. Indexación
            </h3>

            <p className="leading-relaxed">
              La información encontrada es organizada e incorporada a un índice
              que permite localizarla posteriormente.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              3. Resultados
            </h3>

            <p className="leading-relaxed">
              Cuando el usuario realiza una consulta, el buscador analiza su
              índice y presenta resultados relacionados.
            </p>
          </div>

        </div>
      </section>

      {/* Palabras clave */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Palabras clave
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las palabras clave son los términos que utilizamos para indicar al
          motor de búsqueda qué información queremos encontrar.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Elegir correctamente las palabras clave permite obtener resultados
          más precisos.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Búsqueda poco específica
            </h3>

            <p className="font-mono">
              computadora
            </p>

            <p className="mt-3 leading-relaxed">
              Puede generar una gran cantidad de resultados diferentes.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Búsqueda específica
            </h3>

            <p className="font-mono">
              mantenimiento de computadoras de oficina
            </p>

            <p className="mt-3 leading-relaxed">
              Permite orientar la búsqueda hacia un tema concreto.
            </p>
          </div>

        </div>
      </section>

      {/* Tipos de búsqueda */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de búsqueda
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los motores de búsqueda permiten realizar diferentes tipos de
          consultas dependiendo de la información que necesitamos encontrar.
        </p>

        <div className="space-y-6 mt-6 max-w-4xl">

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Búsqueda de información
            </h3>

            <p className="font-mono">
              historia de Internet
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Búsqueda de documentos
            </h3>

            <p className="font-mono">
              reglamento administrativo PDF
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Búsqueda de imágenes
            </h3>

            <p className="font-mono">
              oficina administrativa moderna
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Búsqueda de noticias
            </h3>

            <p className="font-mono">
              nuevas tecnologías educación
            </p>
          </div>

        </div>
      </section>

      {/* Operadores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Operadores de búsqueda
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Algunos motores de búsqueda permiten utilizar operadores especiales
          para hacer consultas más precisas.
        </p>

        <div className="border rounded-xl p-6 mt-6 max-w-4xl">

          <div className="space-y-6">

            <div>
              <p className="font-bold text-blue-900">
                Comillas
              </p>

              <p className="font-mono mt-2">
                "seguridad informática"
              </p>

              <p className="mt-2">
                Busca resultados que contengan la frase indicada.
              </p>
            </div>

            <div>
              <p className="font-bold text-blue-900">
                site:
              </p>

              <p className="font-mono mt-2">
                site:argentina.gob.ar trámites
              </p>

              <p className="mt-2">
                Permite limitar la búsqueda a un sitio o dominio determinado.
              </p>
            </div>

            <div>
              <p className="font-bold text-blue-900">
                filetype:
              </p>

              <p className="font-mono mt-2">
                filetype:pdf administración
              </p>

              <p className="mt-2">
                Permite buscar archivos de un determinado formato.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Evaluación de resultados */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Evaluar los resultados
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Encontrar información no significa necesariamente que esa
          información sea correcta o confiable. Es importante analizar los
          resultados antes de utilizarlos.
        </p>

        <div className="border rounded-xl p-6 mt-6 max-w-4xl">

          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Antes de utilizar una información
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Revisar quién publica la información.</li>
            <li>Comprobar la fecha de publicación o actualización.</li>
            <li>Comparar la información con otras fuentes.</li>
            <li>Analizar si el sitio es confiable.</li>
            <li>Verificar que la información responda realmente a la consulta.</li>
          </ul>

        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en el ámbito administrativo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En un entorno administrativo, los motores de búsqueda pueden
          utilizarse para localizar información institucional, normativas,
          formularios, requisitos de trámites, proveedores, documentación
          técnica y recursos necesarios para realizar diferentes tareas.
        </p>

        <div className="border rounded-xl p-6 mt-6 max-w-4xl">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Una persona necesita encontrar un formulario oficial para realizar
            un trámite. En lugar de revisar numerosos sitios manualmente, puede
            utilizar una búsqueda específica y limitar los resultados al sitio
            oficial correspondiente.
          </p>

          <p className="font-mono mt-4">
            site:argentina.gob.ar formulario trámite
          </p>
        </div>
      </section>

      {/* Actividad práctica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad práctica
        </h2>

        <div className="border rounded-xl p-6 max-w-4xl">

          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Comparar búsquedas
          </h3>

          <p className="leading-relaxed">
            Realizá las siguientes búsquedas utilizando un motor de búsqueda:
          </p>

          <div className="space-y-4 mt-5">

            <p className="font-mono">
              1. computadora
            </p>

            <p className="font-mono">
              2. mantenimiento de computadoras
            </p>

            <p className="font-mono">
              3. "mantenimiento de computadoras"
            </p>

            <p className="font-mono">
              4. site:argentina.gob.ar computadoras
            </p>

            <p className="font-mono">
              5. filetype:pdf informática
            </p>

          </div>

          <p className="leading-relaxed mt-6">
            Compará los resultados obtenidos y explicá cómo cambia la cantidad
            y relevancia de la información al modificar la consulta.
          </p>

        </div>
      </section>

      {/* Actividad de investigación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad de investigación
        </h2>

        <div className="border rounded-xl p-6 max-w-4xl">

          <p className="leading-relaxed">
            Elegí un tema relacionado con el trabajo administrativo y realizá
            una búsqueda utilizando diferentes estrategias.
          </p>

          <p className="font-semibold text-blue-900 mt-5 mb-3">
            Registrá:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Palabras clave utilizadas.</li>
            <li>Motor de búsqueda utilizado.</li>
            <li>Cantidad aproximada de resultados.</li>
            <li>Los tres resultados más relevantes.</li>
            <li>Dirección de cada sitio.</li>
            <li>Por qué considerás confiable cada fuente.</li>
          </ul>

        </div>
      </section>

      {/* Desafío integrador */}
      <section className="border-l-4 border-blue-700 p-6 rounded-xl">

        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Desafío Integrador
        </h2>

        <p className="leading-relaxed max-w-4xl">
          Imaginá que trabajás en una oficina y tu responsable te solicita
          encontrar información oficial sobre un trámite administrativo.
        </p>

        <p className="leading-relaxed max-w-4xl mt-4">
          Utilizá un motor de búsqueda para localizar la información solicitada
          y aplicá diferentes estrategias para obtener resultados confiables.
        </p>

        <p className="font-semibold text-blue-900 mt-5">
          Presentá el resultado de tu búsqueda indicando las palabras clave,
          los operadores utilizados, las fuentes consultadas y los criterios
          que aplicaste para determinar cuál era la información más confiable.
        </p>

      </section>

    </div>
  );
}