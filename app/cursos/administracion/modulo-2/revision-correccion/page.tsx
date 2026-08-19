export default function RevisionCorreccionPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Revisión y Corrección de Documentos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La revisión y corrección de un documento es una etapa fundamental
          antes de compartirlo, imprimirlo o enviarlo.
          <br /><br />
          Permite detectar errores de ortografía, redacción, formato,
          puntuación y organización de la información, logrando documentos
          más claros, profesionales y fáciles de comprender.
        </p>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué es importante revisar un documento?
        </h2>

        <div className="border p-6 rounded-xl">
          Un documento administrativo representa a una persona, empresa o
          institución. Por este motivo, debe presentarse de manera correcta
          y profesional.
          <br /><br />

          Una revisión adecuada permite:

          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Detectar errores de escritura.</li>
            <li>Corregir errores ortográficos.</li>
            <li>Mejorar la redacción.</li>
            <li>Verificar la información.</li>
            <li>Mejorar la presentación del documento.</li>
            <li>Detectar problemas de formato.</li>
            <li>Evitar información repetida o innecesaria.</li>
          </ul>
        </div>
      </section>

      {/* Tipos de revisión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aspectos que debemos revisar
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Ortografía
            </p>

            Verificar palabras mal escritas, uso de mayúsculas, tildes y
            errores frecuentes de escritura.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Gramática
            </p>

            Comprobar que las oraciones estén correctamente construidas y
            que exista concordancia entre sus elementos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Puntuación
            </p>

            Revisar el uso correcto de puntos, comas, dos puntos,
            paréntesis y otros signos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Redacción
            </p>

            Comprobar que las ideas sean claras, ordenadas y fáciles de
            comprender.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Formato
            </p>

            Verificar títulos, tamaños de letra, márgenes, alineación,
            espacios, tablas e imágenes.
          </div>

        </div>
      </section>

      {/* Herramientas Word */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas de Revisión de Word
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Microsoft Word cuenta con diferentes herramientas que ayudan a
          detectar y corregir errores en los documentos.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Corrector ortográfico.</li>
            <li>Corrector gramatical.</li>
            <li>Diccionario.</li>
            <li>Sinónimos.</li>
            <li>Contar palabras.</li>
            <li>Comentarios.</li>
            <li>Control de cambios.</li>
            <li>Buscar y reemplazar.</li>
          </ul>

        </div>
      </section>

      {/* Corrector ortográfico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Corrector Ortográfico
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            El corrector ortográfico permite detectar posibles errores en las
            palabras utilizadas en un documento.
          </p>

          <p className="mb-4">
            Word puede señalar palabras que considera incorrectas para que el
            usuario pueda revisarlas y seleccionar una alternativa.
          </p>

          <p>
            <strong>Importante:</strong> el corrector no reemplaza la revisión
            humana. Una palabra puede estar correctamente escrita pero ser
            incorrecta dentro del contexto de una oración.
          </p>

        </div>
      </section>

      {/* Buscar reemplazar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buscar y Reemplazar
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            La herramienta <strong>Buscar y reemplazar</strong> permite
            localizar rápidamente una palabra o expresión y reemplazarla
            por otra.
          </p>

          <p className="font-semibold mb-4">
            Puede ser útil para:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Corregir palabras repetidas incorrectamente.</li>
            <li>Cambiar un nombre en todo el documento.</li>
            <li>Modificar una fecha utilizada varias veces.</li>
            <li>Reemplazar términos.</li>
            <li>Realizar correcciones en documentos extensos.</li>
          </ul>

        </div>
      </section>

      {/* Comentarios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Comentarios
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            Los comentarios permiten realizar observaciones sobre partes
            específicas de un documento sin modificar directamente el texto.
          </p>

          <p>
            Son especialmente útiles cuando varias personas participan en la
            revisión de un informe, trabajo práctico o documento administrativo.
          </p>

        </div>
      </section>

      {/* Control de cambios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Control de Cambios
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            El control de cambios permite registrar las modificaciones
            realizadas en un documento.
          </p>

          <p className="mb-4">
            Cuando está activado, Word puede mostrar los textos agregados,
            eliminados o modificados.
          </p>

          <p>
            Esta herramienta resulta útil cuando un documento es revisado por
            diferentes personas antes de obtener una versión definitiva.
          </p>

        </div>
      </section>

      {/* Revisión de formato */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Revisión del Formato
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            Además del contenido, es necesario comprobar que la presentación
            del documento sea correcta.
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Revisar márgenes.</li>
            <li>Verificar el tamaño y tipo de letra.</li>
            <li>Comprobar la alineación.</li>
            <li>Revisar títulos y subtítulos.</li>
            <li>Verificar espacios entre párrafos.</li>
            <li>Comprobar tablas e imágenes.</li>
            <li>Revisar encabezados y pies de página.</li>
            <li>Comprobar la numeración de páginas.</li>
          </ul>

        </div>
      </section>

      {/* Revisión de información */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Verificación de la Información
        </h2>

        <div className="border p-6 rounded-xl">

          Antes de finalizar un documento se debe comprobar que la información
          sea correcta.

          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Nombres y apellidos.</li>
            <li>Fechas.</li>
            <li>Números y cantidades.</li>
            <li>Direcciones.</li>
            <li>Números de teléfono.</li>
            <li>Correos electrónicos.</li>
            <li>Datos de empresas u organizaciones.</li>
          </ul>

        </div>
      </section>

      {/* Método de revisión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Método de Revisión Paso a Paso
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-4">

            <li>
              Leer todo el documento para comprender su contenido.
            </li>

            <li>
              Revisar la ortografía.
            </li>

            <li>
              Revisar la gramática y la puntuación.
            </li>

            <li>
              Comprobar que las ideas estén correctamente organizadas.
            </li>

            <li>
              Verificar fechas, nombres y números.
            </li>

            <li>
              Revisar títulos, subtítulos y formato.
            </li>

            <li>
              Comprobar imágenes y tablas.
            </li>

            <li>
              Revisar encabezados y pies de página.
            </li>

            <li>
              Leer nuevamente el documento completo.
            </li>

            <li>
              Guardar la versión corregida.
            </li>

          </ol>

        </div>
      </section>

      {/* Lista de control */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Lista de Control
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="font-semibold mb-4">
            Antes de entregar un documento, comprobar:
          </p>

          <div className="space-y-3">

            <p>☐ El título es correcto.</p>
            <p>☐ No existen errores ortográficos.</p>
            <p>☐ Las oraciones están correctamente redactadas.</p>
            <p>☐ La puntuación es adecuada.</p>
            <p>☐ Los datos son correctos.</p>
            <p>☐ Los títulos están correctamente aplicados.</p>
            <p>☐ Los párrafos están correctamente alineados.</p>
            <p>☐ Las tablas están completas.</p>
            <p>☐ Las imágenes se encuentran correctamente ubicadas.</p>
            <p>☐ Los encabezados y pies de página son correctos.</p>
            <p>☐ La numeración de páginas es correcta.</p>
            <p>☐ El documento tiene una presentación profesional.</p>
            <p>☐ El archivo fue guardado correctamente.</p>

          </div>

        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Corrección
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="font-semibold mb-3">
            Texto original:
          </p>

          <div className="border p-4 rounded-lg mb-6">
            La empresa realizo una reunion el dia lunes para organisar las
            tareas administrativas.
          </div>

          <p className="font-semibold mb-3">
            Texto corregido:
          </p>

          <div className="border p-4 rounded-lg">
            La empresa realizó una reunión el día lunes para organizar las
            tareas administrativas.
          </div>

          <br />

          <p>
            En este ejemplo se corrigieron errores de tildes y ortografía.
          </p>

        </div>
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

            Crear un documento de una página que contenga errores
            ortográficos y de formato. Intercambiarlo con un compañero y
            realizar la corrección.

          </div>

          <div className="border p-6 rounded-xl">

            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Utilizar el corrector ortográfico de Word para identificar posibles
            errores y comprobar manualmente cada sugerencia.

          </div>

          <div className="border p-6 rounded-xl">

            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Utilizar la herramienta Buscar y reemplazar para modificar una
            palabra que aparezca varias veces en un documento.

          </div>

          <div className="border p-6 rounded-xl">

            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Aplicar la lista de control para realizar una revisión completa
            de un documento administrativo.
            <br /><br />
              <a
                href={"/archivos/Documento_administrativo_con_errores.docx"}
                download
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                Descargar
              </a>

          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">

          Crear un <strong>documento administrativo profesional</strong> y
          realizar una revisión completa antes de presentarlo.

          <br /><br />

          El documento deberá ser revisado en los siguientes aspectos:

          <br /><br />

          ✔ Ortografía. <br />
          ✔ Gramática. <br />
          ✔ Puntuación. <br />
          ✔ Redacción. <br />
          ✔ Fechas y datos. <br />
          ✔ Títulos y subtítulos. <br />
          ✔ Párrafos y alineación. <br />
          ✔ Tablas e imágenes. <br />
          ✔ Encabezados y pies de página. <br />
          ✔ Numeración de páginas. <br />
          ✔ Presentación general. <br />

          <br />

          Finalmente, guardar la versión corregida y exportarla a PDF.

          <br /><br />

          <strong>Objetivo:</strong> desarrollar el hábito de revisar los
          documentos antes de entregarlos y utilizar las herramientas de
          Microsoft Word para mejorar su calidad y presentación profesional.

        </div>

      </section>

    </div>
  );
}