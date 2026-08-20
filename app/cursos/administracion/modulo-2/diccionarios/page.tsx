export default function DiccionariosWordPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Uso de Diccionarios en Microsoft Word
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Microsoft Word incluye herramientas que ayudan a mejorar la calidad
          de los documentos mediante la consulta de definiciones, sinónimos y
          la revisión del significado de determinadas palabras.
          <br /><br />
          El uso de diccionarios resulta útil durante la redacción de
          documentos administrativos, informes, cartas y trabajos académicos,
          ya que permite elegir palabras más adecuadas y comprender mejor los
          términos utilizados.
        </p>
      </section>

      {/* ¿Qué es un diccionario? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Diccionario?
        </h2>

        <div className="border p-6 rounded-xl">
          Un diccionario es una herramienta que permite consultar información
          sobre una palabra.
          <br /><br />
          Dependiendo de la herramienta utilizada, es posible encontrar:
          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Definiciones.</li>
            <li>Significados.</li>
            <li>Sinónimos.</li>
            <li>Antónimos.</li>
            <li>Palabras relacionadas.</li>
            <li>Traducciones en algunos casos.</li>
          </ul>
        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia del Uso del Diccionario
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Durante la elaboración de un documento es importante utilizar un
          vocabulario adecuado al tipo de texto y al destinatario.
          <br /><br />
          Consultar el significado de una palabra ayuda a evitar errores y a
          utilizar términos que expresen correctamente la idea que se desea
          comunicar.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Mejora la calidad de la redacción.</li>
            <li>Ayuda a comprender palabras desconocidas.</li>
            <li>Permite utilizar un vocabulario más preciso.</li>
            <li>Facilita la búsqueda de sinónimos.</li>
            <li>Ayuda a evitar repeticiones innecesarias.</li>
            <li>Mejora la claridad de los documentos.</li>
          </ul>
        </div>
      </section>

      {/* Consultar una palabra */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consultar el Significado de una Palabra
        </h2>

        <div className="border p-6 rounded-xl">
          En Word, algunas opciones permiten consultar información sobre una
          palabra seleccionada.
          <br /><br />

          Una forma de hacerlo es:
          <br /><br />

          <ol className="list-decimal list-inside space-y-4">
            <li>Seleccionar la palabra que se desea consultar.</li>
            <li>Hacer clic con el botón derecho del mouse.</li>
            <li>Buscar las opciones relacionadas con la búsqueda o consulta.</li>
            <li>Consultar la información disponible sobre el término.</li>
          </ol>

          <br />

          Las opciones pueden variar según la versión de Microsoft Word y la
          configuración del programa.
        </div>
      </section>

      {/* Sinónimos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso de Sinónimos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un sinónimo es una palabra que tiene un significado igual o parecido
          al de otra palabra.
          <br /><br />
          Los sinónimos son útiles para evitar repetir constantemente el mismo
          término dentro de un documento.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Ejemplo:
          </p>

          <p>
            En lugar de utilizar varias veces la palabra:
          </p>

          <br />

          <div className="border p-4 rounded-lg mb-6">
            El <strong>documento</strong> debe ser revisado antes de enviar
            el <strong>documento</strong>.
          </div>

          <p>
            Se puede utilizar un término similar:
          </p>

          <br />

          <div className="border p-4 rounded-lg">
            El <strong>documento</strong> debe ser revisado antes de enviar
            el <strong>archivo</strong>.
          </div>
        </div>
      </section>

      {/* Buscar sinónimos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buscar Sinónimos en Word
        </h2>

        <div className="border p-6 rounded-xl">
          Para buscar palabras similares:
          <br /><br />

          <ol className="list-decimal list-inside space-y-4">
            <li>Seleccionar una palabra.</li>
            <li>Hacer clic con el botón derecho del mouse.</li>
            <li>Buscar la opción <strong>Sinónimos</strong>.</li>
            <li>Seleccionar una palabra alternativa.</li>
          </ol>

          <br />

          También puede utilizarse el diccionario de sinónimos o las
          herramientas disponibles desde las opciones de revisión de Word.
        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Mejora de un Texto
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Texto original
            </p>

            <p>
              El empleado realizó una tarea importante. La tarea fue entregada
              al responsable. Después de revisar la tarea, se decidió realizar
              algunas modificaciones.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Texto mejorado
            </p>

            <p>
              El empleado realizó una tarea importante. El trabajo fue
              entregado al responsable. Después de revisar la actividad, se
              decidió realizar algunas modificaciones.
            </p>
          </div>

        </div>
      </section>

      {/* Palabras adecuadas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elegir las Palabras Adecuadas
        </h2>

        <div className="border p-6 rounded-xl">
          No todos los sinónimos pueden utilizarse en cualquier situación.
          Es importante elegir la palabra según el contexto.
          <br /><br />

          Por ejemplo, un documento administrativo requiere generalmente un
          lenguaje claro, formal y preciso.
          <br /><br />

          Antes de reemplazar una palabra, se recomienda comprobar:
          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>El significado de la nueva palabra.</li>
            <li>El contexto en el que será utilizada.</li>
            <li>El tipo de documento.</li>
            <li>El destinatario.</li>
            <li>El nivel de formalidad requerido.</li>
          </ul>
        </div>
      </section>

      {/* Diccionario y ortografía */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diccionario y Corrección Ortográfica
        </h2>

        <div className="border p-6 rounded-xl">
          Microsoft Word utiliza diccionarios para colaborar en la detección
          de posibles errores ortográficos.
          <br /><br />

          Cuando una palabra no es reconocida, Word puede marcarla como una
          posible incorrección y ofrecer sugerencias.
          <br /><br />

          Sin embargo, es importante recordar que una sugerencia automática
          no siempre es correcta.
          <br /><br />

          El usuario debe revisar el contexto antes de aceptar cualquier
          cambio.
        </div>
      </section>

      {/* Agregar palabras */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Agregar Palabras al Diccionario
        </h2>

        <div className="border p-6 rounded-xl">
          En algunos casos, Word puede marcar como incorrectas palabras que
          en realidad están bien escritas.
          <br /><br />

          Esto puede ocurrir con:
          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Nombres propios.</li>
            <li>Apellidos.</li>
            <li>Nombres de empresas.</li>
            <li>Términos técnicos.</li>
            <li>Siglas.</li>
            <li>Palabras específicas de una actividad profesional.</li>
          </ul>

          <br />

          Si una palabra se utiliza frecuentemente y está correctamente
          escrita, puede existir la posibilidad de agregarla al diccionario
          personal de Word.
        </div>
      </section>

      {/* Precaución */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Precauciones al Usar el Diccionario Personal
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Antes de agregar una palabra al diccionario personal, comprobar que
          realmente esté correctamente escrita.
          <br /><br />

          Si se agrega una palabra incorrecta, Word puede dejar de marcarla
          como un posible error en documentos futuros.
          <br /><br />

          Por este motivo, se recomienda utilizar esta opción principalmente
          para nombres propios, términos técnicos o palabras específicas que
          se encuentren correctamente escritas.
        </div>
      </section>

      {/* Uso administrativo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso en Documentos Administrativos
        </h2>

        <div className="border p-6 rounded-xl">
          El uso de diccionarios y sinónimos puede mejorar la redacción de
          documentos administrativos.
          <br /><br />

          Por ejemplo, puede resultar útil durante la elaboración de:
          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Informes.</li>
            <li>Memorándums.</li>
            <li>Actas.</li>
            <li>Cartas formales.</li>
            <li>Notas.</li>
            <li>Currículums vitae.</li>
            <li>Documentación institucional.</li>
          </ul>
        </div>
      </section>

      {/* Ejemplo administrativo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo Práctico en un Informe
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Redacción repetitiva
            </p>

            <p>
              Se realizó una reunión para organizar las tareas. Durante la
              reunión se analizaron diferentes actividades. Después de la
              reunión se asignaron nuevas responsabilidades.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Redacción mejorada
            </p>

            <p>
              Se realizó una reunión para organizar las tareas. Durante el
              encuentro se analizaron diferentes actividades. Posteriormente,
              se asignaron nuevas responsabilidades.
            </p>
          </div>

        </div>
      </section>

      {/* Recomendaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recomendaciones para una Buena Redacción
        </h2>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-3">
            <li>Consultar palabras desconocidas antes de utilizarlas.</li>
            <li>Evitar repetir excesivamente los mismos términos.</li>
            <li>Utilizar sinónimos adecuados al contexto.</li>
            <li>Revisar las sugerencias antes de aceptarlas.</li>
            <li>Utilizar un lenguaje claro y preciso.</li>
            <li>Evitar palabras demasiado complejas si no son necesarias.</li>
            <li>Adaptar el vocabulario al tipo de documento.</li>
            <li>Realizar una revisión final antes de entregar el trabajo.</li>
          </ul>
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

            Seleccionar cinco palabras desconocidas de un texto y buscar su
            significado utilizando una herramienta de diccionario.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Escribir cinco palabras y buscar al menos dos sinónimos para cada
            una.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Copiar el siguiente texto en Word e identificar las palabras que
            se repiten:

            <br /><br />

            <div className="border p-4 rounded-lg">
              El informe fue elaborado por el responsable. El informe contiene
              información sobre las actividades. El informe será enviado a la
              dirección de la empresa.
            </div>

            <br />

            Reescribir el texto utilizando palabras adecuadas para evitar
            repeticiones innecesarias.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Redactar un breve documento administrativo y utilizar el
            diccionario o las herramientas de revisión para mejorar la
            redacción.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Crear un breve <strong>informe administrativo</strong> sobre una
          actividad realizada en una empresa o institución ficticia.
          <br /><br />

          El documento deberá incluir:
          <br /><br />

          ✔ Un título. <br />
          ✔ Una introducción. <br />
          ✔ Al menos tres párrafos. <br />
          ✔ Vocabulario claro y formal. <br />
          ✔ Corrección de palabras repetidas mediante sinónimos adecuados. <br />
          ✔ Revisión ortográfica. <br />
          ✔ Revisión del significado de las palabras utilizadas. <br />
          ✔ Una conclusión final. <br /><br />

          <strong>Objetivo:</strong> utilizar las herramientas de diccionario,
          sinónimos y revisión de Microsoft Word para mejorar la calidad,
          claridad y precisión de los documentos escritos.
        </div>
      </section>

    </div>
  );
}