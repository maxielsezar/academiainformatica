export default function ActividadCVCompaneroPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Actividad Grupal: Creación del CV de un Compañero
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En esta actividad trabajarán en grupos de <strong>2 estudiantes</strong>.
          Cada integrante deberá entrevistar a su compañero mediante una serie
          de preguntas y utilizar las respuestas obtenidas para elaborar su
          Currículum Vitae.
          <br /><br />
          El objetivo es aprender a recopilar, organizar y presentar información
          personal, académica y laboral de otra persona utilizando un procesador
          de textos.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos de la Actividad
        </h2>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-3">
            <li>Aprender a recopilar información mediante preguntas.</li>
            <li>Practicar la comunicación y la escucha.</li>
            <li>Organizar información personal y profesional.</li>
            <li>Identificar los datos necesarios para elaborar un CV.</li>
            <li>Aplicar herramientas de procesamiento de textos.</li>
            <li>Crear un Currículum Vitae a partir de información real.</li>
          </ul>
        </div>
      </section>

      {/* Organización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización de los Grupos
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            Cada grupo estará formado por <strong>2 estudiantes</strong>.
          </p>

          <p className="mb-4">
            Los estudiantes deberán trabajar de manera colaborativa,
            intercambiando los roles durante la actividad.
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Estudiante A:</strong> entrevista al Estudiante B.
            </li>
            <li>
              <strong>Estudiante B:</strong> entrevista al Estudiante A.
            </li>
            <li>
              Cada estudiante registra las respuestas de su compañero.
            </li>
            <li>
              Cada estudiante será responsable de elaborar el CV de su compañero.
            </li>
          </ul>

        </div>
      </section>

      {/* Paso 1 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paso 1: Preparar las Preguntas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Antes de comenzar a redactar el currículum, cada estudiante deberá
          preparar una serie de preguntas para conocer la información de su
          compañero.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Las preguntas deberán abarcar diferentes aspectos:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Datos personales y de contacto.</li>
            <li>Formación académica.</li>
            <li>Experiencia laboral.</li>
            <li>Cursos y capacitaciones.</li>
            <li>Conocimientos informáticos.</li>
            <li>Habilidades.</li>
            <li>Idiomas.</li>
            <li>Objetivos laborales.</li>
          </ul>

        </div>
      </section>

      {/* Preguntas sugeridas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Preguntas Sugeridas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Estas preguntas pueden utilizarse como guía. Cada estudiante puede
          agregar nuevas preguntas para obtener información más completa.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Datos personales
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>¿Cuál es tu nombre y apellido?</li>
            <li>¿Cuál es tu número de teléfono?</li>
            <li>¿Cuál es tu correo electrónico?</li>
            <li>¿En qué localidad vivís?</li>
          </ol>

          <br />

          <p className="font-semibold mb-4">
            Formación académica
          </p>

          <ol className="list-decimal list-inside space-y-3" start={5}>
            <li>¿Qué estudios realizaste?</li>
            <li>¿Terminaste la escuela secundaria?</li>
            <li>¿Realizaste estudios terciarios o universitarios?</li>
            <li>¿Qué cursos o capacitaciones realizaste?</li>
          </ol>

          <br />

          <p className="font-semibold mb-4">
            Experiencia laboral
          </p>

          <ol className="list-decimal list-inside space-y-3" start={9}>
            <li>¿Tuviste trabajos anteriores?</li>
            <li>¿En qué empresas u organizaciones trabajaste?</li>
            <li>¿Qué puesto ocupabas?</li>
            <li>¿Qué tareas realizabas?</li>
            <li>¿Cuánto tiempo trabajaste allí?</li>
          </ol>

          <br />

          <p className="font-semibold mb-4">
            Conocimientos y habilidades
          </p>

          <ol className="list-decimal list-inside space-y-3" start={14}>
            <li>¿Qué programas informáticos sabés utilizar?</li>
            <li>¿Qué herramientas de Microsoft Office conocés?</li>
            <li>¿Qué habilidades considerás que tenés?</li>
            <li>¿Sabés utilizar herramientas de internet y correo electrónico?</li>
            <li>¿Tenés conocimientos de otros idiomas?</li>
          </ol>

          <br />

          <p className="font-semibold mb-4">
            Perfil y objetivos
          </p>

          <ol className="list-decimal list-inside space-y-3" start={19}>
            <li>¿Qué tipo de trabajo te gustaría realizar?</li>
            <li>¿Cuáles son tus principales fortalezas?</li>
            <li>¿Qué aspectos te gustaría seguir aprendiendo?</li>
            <li>¿Cuál es tu objetivo laboral?</li>
          </ol>

        </div>
      </section>

      {/* Paso 2 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paso 2: Realizar la Entrevista
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            Cada estudiante deberá realizar las preguntas a su compañero y
            registrar cuidadosamente las respuestas.
          </p>

          <p className="mb-4">
            Es importante escuchar atentamente y solicitar aclaraciones cuando
            una respuesta no sea suficientemente precisa.
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Realizar las preguntas de manera ordenada.</li>
            <li>Registrar las respuestas.</li>
            <li>Solicitar información adicional cuando sea necesario.</li>
            <li>Verificar que los datos estén correctamente escritos.</li>
            <li>Respetar la información proporcionada por el compañero.</li>
          </ul>

        </div>
      </section>

      {/* Paso 3 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paso 3: Organizar la Información
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una vez finalizada la entrevista, cada estudiante deberá organizar
          las respuestas obtenidas antes de comenzar a crear el CV.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-3 text-left">
                  Sección
                </th>
                <th className="border p-3 text-left">
                  Información obtenida
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">
                  Datos personales
                </td>
                <td className="border p-3">
                  Nombre, teléfono, correo y localidad.
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Formación
                </td>
                <td className="border p-3">
                  Estudios y capacitaciones.
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Experiencia
                </td>
                <td className="border p-3">
                  Empresas, puestos y tareas.
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Habilidades
                </td>
                <td className="border p-3">
                  Conocimientos y capacidades.
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Objetivos
                </td>
                <td className="border p-3">
                  Intereses y objetivos laborales.
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </section>

      {/* Paso 4 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paso 4: Crear el Currículum
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            Con la información recopilada, cada estudiante deberá elaborar
            el Currículum Vitae de su compañero utilizando Microsoft Word.
          </p>

          <p className="font-semibold mb-4">
            El CV deberá incluir:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Nombre y datos de contacto.</li>
            <li>Perfil profesional.</li>
            <li>Formación académica.</li>
            <li>Experiencia laboral.</li>
            <li>Cursos y capacitaciones.</li>
            <li>Conocimientos informáticos.</li>
            <li>Habilidades.</li>
            <li>Idiomas, si corresponde.</li>
            <li>Objetivo laboral.</li>
          </ul>

        </div>
      </section>

      {/* Redacción del perfil */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Redacción del Perfil Profesional
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            Una parte importante de la actividad será transformar las
            respuestas obtenidas durante la entrevista en un breve perfil
            profesional.
          </p>

          <p className="mb-4">
            Por ejemplo, si el compañero indica que es responsable, tiene
            experiencia en atención al público y posee conocimientos de
            informática, se puede redactar:
          </p>

          <div className="border-l-4 border-blue-700 p-4">
            Persona responsable y organizada, con experiencia en atención al
            público y conocimientos en herramientas informáticas. Se destaca
            por su capacidad de trabajo en equipo y disposición para adquirir
            nuevos conocimientos.
          </div>

        </div>
      </section>

      {/* Formato */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato del CV
        </h2>

        <div className="border p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-3">
            <li>Utilizar una fuente clara y legible.</li>
            <li>Organizar la información mediante títulos.</li>
            <li>Utilizar listas cuando sea necesario.</li>
            <li>Mantener una distribución ordenada.</li>
            <li>Revisar la ortografía.</li>
            <li>Utilizar colores de manera moderada.</li>
            <li>Evitar información inventada.</li>
            <li>Guardar el documento en formato editable.</li>
            <li>Exportar la versión final a PDF.</li>
          </ul>

        </div>
      </section>

      {/* Intercambio */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paso 5: Revisar el CV con el Compañero
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            Una vez terminado el currículum, cada estudiante deberá mostrarlo
            a su compañero para comprobar que la información sea correcta.
          </p>

          <p className="font-semibold mb-4">
            El compañero deberá verificar:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Que sus datos personales sean correctos.</li>
            <li>Que la formación académica esté completa.</li>
            <li>Que la experiencia laboral sea correcta.</li>
            <li>Que las habilidades estén correctamente expresadas.</li>
            <li>Que el perfil profesional lo represente adecuadamente.</li>
            <li>Que no existan errores de ortografía.</li>
          </ul>

        </div>
      </section>

      {/* Producto final */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Producto Final
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            Al finalizar la actividad, cada estudiante deberá entregar:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>El cuestionario utilizado para entrevistar a su compañero.</li>
            <li>Las respuestas obtenidas durante la entrevista.</li>
            <li>El Currículum Vitae elaborado.</li>
            <li>El archivo editable de Word.</li>
            <li>La versión final en PDF.</li>
          </ul>

        </div>
      </section>

      {/* Reflexión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Reflexión Final
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            Una vez finalizada la actividad, responder individualmente:
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>
              ¿Qué información fue más difícil de obtener?
            </li>

            <li>
              ¿Qué preguntas agregarías para mejorar la entrevista?
            </li>

            <li>
              ¿Fue sencillo transformar las respuestas en información para
              un CV?
            </li>

            <li>
              ¿Qué aprendiste sobre la elaboración de un Currículum Vitae?
            </li>

            <li>
              ¿Qué herramienta de Word utilizaste más durante la actividad?
            </li>
          </ol>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">

          Trabajar en parejas para realizar una <strong>entrevista laboral
          simulada</strong>

          <br /><br />

          Cada estudiante deberá:

          <br /><br />

          ✔ Preparar sus propias preguntas. <br />
          ✔ Entrevistar a su compañero. <br />
          ✔ Registrar las respuestas. <br />
          ✔ Organizar la información. <br />
          ✔ Realizar las correcciones necesarias. <br />

          <br /><br />
        </div>
      </section>

    </div>
  );
}