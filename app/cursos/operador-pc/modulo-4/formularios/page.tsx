export default function FormulariosWebPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Formularios Web
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los formularios web son herramientas que permiten recopilar información
          de usuarios a través de Internet. Son ampliamente utilizados para
          encuestas, inscripciones, registros, evaluaciones, solicitudes y
          recopilación de datos en organizaciones educativas y empresariales.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender a utilizar formularios web para recopilar información,
          responder encuestas y crear formularios básicos utilizando herramientas
          online.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Formulario Web?
        </h2>

        <p className="max-w-3xl">
          Un formulario web es una página o sección de una página web que permite
          a los usuarios ingresar datos y enviarlos a través de Internet para ser
          almacenados o procesados automáticamente.
        </p>
      </section>

      {/* Usos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Usos de los Formularios Web
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Inscripciones a cursos o eventos.</li>
          <li>Encuestas de satisfacción.</li>
          <li>Evaluaciones y cuestionarios.</li>
          <li>Registros de usuarios.</li>
          <li>Solicitudes de información.</li>
          <li>Recolección de datos estadísticos.</li>
        </ul>
      </section>

      {/* Elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos de un Formulario
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
                <td className="border px-4 py-2">Campo de texto</td>
                <td className="border px-4 py-2">
                  Permite ingresar información escrita.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Lista desplegable</td>
                <td className="border px-4 py-2">
                  Permite seleccionar una opción de una lista.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Casillas de verificación</td>
                <td className="border px-4 py-2">
                  Permiten seleccionar varias opciones.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Botones de opción</td>
                <td className="border px-4 py-2">
                  Permiten elegir una sola opción.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Carga de archivos</td>
                <td className="border px-4 py-2">
                  Permite adjuntar documentos o imágenes.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Botón Enviar</td>
                <td className="border px-4 py-2">
                  Envía la información completada.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Google Forms */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Google Forms
        </h2>

        <p className="max-w-3xl">
          Google Forms es una herramienta gratuita de Google que permite crear
          formularios, encuestas, cuestionarios y evaluaciones de manera sencilla.
          Las respuestas se almacenan automáticamente y pueden analizarse desde
          Google Sheets.
        </p>
      </section>

      {/* Crear formulario */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Pasos para Crear un Formulario
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Acceder a Google Forms.</li>
            <li>Crear un formulario en blanco.</li>
            <li>Agregar un título y descripción.</li>
            <li>Insertar preguntas.</li>
            <li>Seleccionar el tipo de respuesta.</li>
            <li>Configurar preguntas obligatorias si es necesario.</li>
            <li>Compartir el formulario mediante un enlace.</li>
          </ol>
        </div>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Preguntas Disponibles
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Tipo</th>
                <th className="border px-4 py-2">Descripción</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Respuesta corta</td>
                <td className="border px-4 py-2">
                  Permite ingresar textos breves.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Párrafo</td>
                <td className="border px-4 py-2">
                  Permite respuestas extensas.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Opción múltiple</td>
                <td className="border px-4 py-2">
                  Selección única entre varias opciones.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Casillas</td>
                <td className="border px-4 py-2">
                  Selección múltiple.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Lista desplegable</td>
                <td className="border px-4 py-2">
                  Selección desde una lista.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Carga de archivos</td>
                <td className="border px-4 py-2">
                  Permite adjuntar documentos.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de los Formularios Web
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Automatizan la recolección de datos.</li>
          <li>Reducen el uso de papel.</li>
          <li>Permiten obtener respuestas rápidamente.</li>
          <li>Facilitan el análisis de información.</li>
          <li>Pueden compartirse mediante enlaces.</li>
          <li>Son accesibles desde cualquier dispositivo con Internet.</li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Utilizar preguntas claras y precisas.</li>
          <li>Evitar formularios excesivamente largos.</li>
          <li>Solicitar únicamente la información necesaria.</li>
          <li>Organizar las preguntas por secciones.</li>
          <li>Probar el formulario antes de compartirlo.</li>
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
            Identifica tres situaciones en las que podría utilizarse un formulario web.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Crea un formulario en Google Forms para registrar participantes de un curso.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Agrega al menos cinco preguntas utilizando diferentes tipos de respuesta.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Comparte el formulario con tres compañeros y recopila sus respuestas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad Integradora</p>
            Diseña un cuestionario sobre excel utilizando Google Forms. Debe incluir al menos 10 preguntas y compartirlo con tus compañeros.
          </div>

        </div>
      </section>

    </div>
  );
}