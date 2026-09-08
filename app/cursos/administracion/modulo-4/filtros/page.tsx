export default function FiltrosPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Filtros y Búsquedas en Internet
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los buscadores de Internet permiten localizar rápidamente grandes
          cantidades de información. Sin embargo, una búsqueda demasiado
          general puede producir miles o incluso millones de resultados.
          <br /><br />
          Para encontrar información más precisa podemos utilizar diferentes
          técnicas de búsqueda y filtros. Estas herramientas permiten reducir
          los resultados y localizar información relacionada directamente con
          nuestra necesidad.
        </p>
      </section>

      {/* ¿Qué es una búsqueda? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Búsqueda en Internet?
        </h2>

        <div className="border p-6 rounded-xl">
          Una búsqueda en Internet consiste en introducir palabras o frases
          relacionadas con la información que necesitamos encontrar.
          <br /><br />
          El buscador analiza nuestra consulta y presenta una lista de páginas
          que pueden contener información relacionada con ella.
          <br /><br />
          La calidad de los resultados depende, entre otros factores, de la
          precisión de las palabras utilizadas en la búsqueda.
        </div>
      </section>

      {/* Palabras clave */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Palabras Clave
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las palabras clave son los términos principales que utilizamos para
          describir aquello que estamos buscando.
          <br /><br />
          Elegir correctamente las palabras clave ayuda a obtener resultados
          más relacionados con nuestra necesidad.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Utilizar palabras directamente relacionadas con el tema.</li>
          <li>Evitar palabras demasiado generales.</li>
          <li>Agregar información específica cuando sea necesario.</li>
          <li>Utilizar varias palabras para definir mejor la búsqueda.</li>
          <li>Modificar la búsqueda si los resultados no son adecuados.</li>
        </ul>
      </section>

      {/* Ejemplo de búsqueda */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Búsqueda
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="font-semibold mb-3">
            Búsqueda demasiado general:
          </p>

          <strong>computadoras</strong>

          <br /><br />

          Esta búsqueda puede generar una gran cantidad de resultados
          diferentes.

          <br /><br />

          <p className="font-semibold mb-3">
            Búsqueda más específica:
          </p>

          <strong>
            computadoras para administración de empresas
          </strong>

          <br /><br />

          Al agregar información relacionada con nuestra necesidad podemos
          obtener resultados más específicos.
        </div>
      </section>

      {/* Frases exactas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buscar Frases Exactas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando necesitamos encontrar una frase específica podemos utilizar
          comillas para indicar al buscador que queremos localizar esas
          palabras en ese orden.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-3">
            Ejemplo:
          </p>

          <strong>
            "formación profesional"
          </strong>

          <br /><br />

          El buscador intentará encontrar páginas donde aparezca esa expresión
          como una frase.
        </div>
      </section>

      {/* Filtros */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Filtros de Búsqueda
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los filtros permiten limitar los resultados de una búsqueda según
          diferentes características. Dependiendo del buscador utilizado,
          podemos encontrar filtros relacionados con el tipo de contenido,
          idioma, fecha, ubicación u otras características.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Filtrar resultados por imágenes.</li>
          <li>Filtrar resultados por videos.</li>
          <li>Filtrar resultados por noticias.</li>
          <li>Filtrar resultados por fecha.</li>
          <li>Filtrar resultados por idioma.</li>
          <li>Buscar diferentes tipos de archivos.</li>
        </ul>
      </section>

      {/* Filtro por fecha */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Filtrar por Fecha
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Algunos buscadores permiten limitar los resultados de acuerdo con
          la fecha de publicación o actualización de la información.
          <br /><br />
          Este tipo de filtro resulta especialmente útil cuando necesitamos
          información reciente o queremos evitar resultados demasiado
          antiguos.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-3">
            Ejemplo:
          </p>

          Si necesitamos conocer información actual sobre una determinada
          tecnología, podemos utilizar un filtro de fecha para mostrar
          resultados recientes.
        </div>
      </section>

      {/* Tipo de contenido */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Filtrar por Tipo de Contenido
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los buscadores permiten seleccionar diferentes tipos de contenido.
          Esto facilita encontrar específicamente aquello que necesitamos.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-3">
            Algunos tipos de contenido son:
          </p>

          ✔ Páginas web. <br />
          ✔ Imágenes. <br />
          ✔ Videos. <br />
          ✔ Noticias. <br />
          ✔ Mapas. <br />
          ✔ Documentos y archivos.
        </div>
      </section>

      {/* Búsqueda de archivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buscar Archivos Específicos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En determinadas búsquedas podemos necesitar encontrar documentos o
          archivos de un formato específico.
          <br /><br />
          Para ello existen herramientas y operadores que permiten restringir
          los resultados a determinados tipos de archivo.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-3">
            Ejemplo:
          </p>

          <strong>
            seguridad informática filetype:pdf
          </strong>

          <br /><br />

          Esta búsqueda permite solicitar resultados relacionados con
          seguridad informática que correspondan al formato PDF.
        </div>
      </section>

      {/* Sitios específicos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buscar dentro de un Sitio Web
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En determinadas situaciones puede resultar útil limitar una búsqueda
          a un sitio web específico.
          <br /><br />
          Esto permite encontrar información dentro de una página o dominio
          concreto sin tener que revisar resultados provenientes de otros
          sitios.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-3">
            Ejemplo:
          </p>

          <strong>
            cursos de informática site:gov.ar
          </strong>

          <br /><br />

          Esta búsqueda intenta limitar los resultados a sitios pertenecientes
          al dominio indicado.
        </div>
      </section>

      {/* Búsquedas demasiado amplias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué hacer cuando aparecen demasiados resultados?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando una búsqueda devuelve demasiados resultados, podemos hacerla
          más específica agregando información relacionada con nuestra
          necesidad.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Agregar más palabras clave.</li>
          <li>Utilizar una frase exacta.</li>
          <li>Indicar una fecha determinada.</li>
          <li>Seleccionar un tipo de contenido.</li>
          <li>Buscar dentro de un sitio específico.</li>
          <li>Indicar el formato de archivo que necesitamos.</li>
        </ul>
      </section>

      {/* Búsquedas sin resultados */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué hacer cuando no encontramos información?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En algunas ocasiones una búsqueda puede no producir resultados
          útiles. En ese caso podemos modificar las palabras utilizadas o
          realizar una búsqueda diferente.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-3">
            Algunas estrategias:
          </p>

          ✔ Utilizar sinónimos. <br />
          ✔ Eliminar palabras innecesarias. <br />
          ✔ Utilizar términos más generales. <br />
          ✔ Probar diferentes combinaciones de palabras. <br />
          ✔ Revisar que las palabras estén correctamente escritas.
        </div>
      </section>

      {/* Evaluación de resultados */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Evaluar los Resultados de una Búsqueda
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Encontrar una página mediante un buscador no significa que la
          información sea necesariamente correcta o confiable.
          <br /><br />
          Antes de utilizar información encontrada en Internet debemos
          analizar el resultado y verificar que la fuente sea adecuada para
          nuestra necesidad.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Identificar quién publica la información.</li>
          <li>Comprobar la fecha de publicación o actualización.</li>
          <li>Comparar la información con otras fuentes.</li>
          <li>Revisar la dirección del sitio web.</li>
          <li>Determinar si la información responde realmente a nuestra necesidad.</li>
        </ul>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en el Ámbito Laboral
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En un entorno laboral es frecuente necesitar información sobre
          productos, proveedores, trámites, normativas, servicios,
          herramientas o procedimientos.
          <br /><br />
          Utilizar correctamente los filtros y las técnicas de búsqueda
          permite reducir el tiempo necesario para encontrar información y
          mejorar la calidad de los resultados obtenidos.
        </p>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 1
            </p>

            Realizar una búsqueda sobre un tema de interés utilizando primero
            una búsqueda general y luego una búsqueda más específica.
            Comparar los resultados obtenidos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Buscar un documento PDF relacionado con un tema laboral utilizando
            un filtro o criterio que permita localizar archivos de ese formato.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Realizar una búsqueda y aplicar diferentes filtros disponibles en
            el buscador. Registrar qué cambios se producen en los resultados.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imaginá que trabajás en una oficina y tu responsable te solicita
          encontrar información actualizada sobre un producto o servicio.

          <br /><br />

          Deberás:

          <br /><br />

          ✔ Definir qué información necesitás encontrar. <br />
          ✔ Seleccionar palabras clave adecuadas. <br />
          ✔ Realizar una búsqueda general. <br />
          ✔ Refinar la búsqueda utilizando palabras más específicas. <br />
          ✔ Aplicar filtros disponibles en el buscador. <br />
          ✔ Identificar los resultados más relevantes. <br />
          ✔ Comparar diferentes fuentes. <br />
          ✔ Guardar al menos una página útil como referencia futura. <br />
          ✔ Explicar qué técnicas y filtros utilizaste.
        </div>
      </section>

    </div>
  );
}