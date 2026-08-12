
export default function MemorandumPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Memorándum
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El memorándum es un documento administrativo utilizado para
          comunicar información de manera breve, formal y directa dentro
          de una organización.
          <br /><br />
          Se utiliza principalmente para transmitir avisos, instrucciones,
          recordatorios, comunicaciones internas o información relacionada
          con las actividades de una empresa o institución.
        </p>
      </section>

      {/* ¿Qué es? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Memorándum?
        </h2>

        <div className="border p-6 rounded-xl">
          Un memorándum es un documento de comunicación interna que permite
          transmitir información entre diferentes personas, áreas o
          departamentos de una organización.
          <br /><br />
          Generalmente presenta información concreta y no requiere una
          extensión considerable.
        </div>
      </section>

      {/* Finalidad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Finalidad del Memorándum
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El memorándum permite comunicar información de manera rápida,
          organizada y formal.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Comunicar avisos internos.</li>
            <li>Transmitir instrucciones.</li>
            <li>Realizar recordatorios.</li>
            <li>Informar cambios en una actividad.</li>
            <li>Solicitar determinadas acciones.</li>
            <li>Comunicar reuniones o actividades.</li>
            <li>Dejar constancia de una comunicación interna.</li>
          </ul>
        </div>
      </section>

      {/* Características */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Características
        </h2>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-3">
            <li>Es un documento generalmente interno.</li>
            <li>Utiliza un lenguaje formal y claro.</li>
            <li>Presenta información concreta.</li>
            <li>Tiene una estructura organizada.</li>
            <li>Identifica al emisor y al destinatario.</li>
            <li>Incluye la fecha de emisión.</li>
            <li>Puede utilizarse como registro de una comunicación.</li>
          </ul>
        </div>
      </section>

      {/* Estructura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura de un Memorándum
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para facilitar su lectura, el memorándum debe presentar sus datos
          principales de manera ordenada.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ol className="list-decimal list-inside space-y-3">
            <li>Nombre de la organización.</li>
            <li>Identificación del documento.</li>
            <li>Fecha.</li>
            <li>Destinatario.</li>
            <li>Remitente.</li>
            <li>Asunto.</li>
            <li>Mensaje.</li>
            <li>Firma o identificación del responsable.</li>
          </ol>
        </div>
      </section>

      {/* Encabezado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Encabezado
        </h2>

        <div className="border p-6 rounded-xl">
          El encabezado permite identificar rápidamente quién emite el
          documento, quién lo recibe y cuál es el tema de la comunicación.
          <br /><br />

          Puede contener información como:

          <br /><br />

          <strong>Para:</strong> Departamento Administrativo
          <br />
          <strong>De:</strong> Dirección
          <br />
          <strong>Fecha:</strong> 12 de agosto de 2026
          <br />
          <strong>Asunto:</strong> Reunión de trabajo
        </div>
      </section>

      {/* Asunto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Asunto
        </h2>

        <div className="border p-6 rounded-xl">
          El asunto debe indicar de manera breve cuál es el motivo del
          memorándum.
          <br /><br />
          Es recomendable utilizar una descripción corta y concreta que
          permita comprender rápidamente el contenido del documento.
        </div>
      </section>

      {/* Cuerpo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cuerpo del Memorándum
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El cuerpo contiene el mensaje que se desea comunicar.
          Debe estar redactado de manera clara, directa y formal.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p>
            Se informa al personal del Departamento Administrativo que el
            próximo viernes se realizará una reunión destinada a organizar
            las actividades correspondientes al siguiente período.
          </p>

          <br />

          <p>
            La reunión se llevará a cabo a las 10:00 horas en la sala de
            reuniones de la institución.
          </p>
        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Memorándum
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="text-center font-bold text-lg mb-6">
            MEMORÁNDUM
          </p>

          <p>
            <strong>Para:</strong> Personal del Departamento Administrativo
          </p>

          <p className="mt-2">
            <strong>De:</strong> Dirección Administrativa
          </p>

          <p className="mt-2">
            <strong>Fecha:</strong> 12 de agosto de 2026
          </p>

          <p className="mt-2">
            <strong>Asunto:</strong> Reunión de trabajo
          </p>

          <br />

          <p>
            Por medio del presente se informa al personal del Departamento
            Administrativo que el próximo viernes se realizará una reunión
            de trabajo.
          </p>

          <br />

          <p>
            El objetivo será organizar las actividades correspondientes al
            próximo período y distribuir las tareas entre los integrantes
            del departamento.
          </p>

          <br />

          <p>
            La reunión se realizará a las 10:00 horas en la sala de reuniones
            de la institución.
          </p>

          <br /><br />

          <p>
            Atentamente,
          </p>

          <br />

          <p>
            <strong>Dirección Administrativa</strong>
          </p>

        </div>
      </section>

      {/* Memorándum en Word */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear un Memorándum en Word
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Microsoft Word permite crear memorándums profesionales utilizando
          diferentes herramientas de formato y diseño.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Configurar los márgenes del documento.</li>
            <li>Utilizar títulos y subtítulos.</li>
            <li>Aplicar negrita para destacar información.</li>
            <li>Utilizar tablas para organizar los datos del encabezado.</li>
            <li>Agregar el logotipo de la organización.</li>
            <li>Configurar correctamente los párrafos.</li>
            <li>Revisar ortografía y redacción.</li>
            <li>Guardar el documento en formato editable.</li>
            <li>Exportar el documento a PDF.</li>
          </ul>
        </div>
      </section>

      {/* Diseño */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Presentación y Diseño
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un memorándum debe presentar una apariencia profesional y
          facilitar la lectura del mensaje.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Utilizar una fuente clara y legible.</li>
            <li>Mantener una distribución ordenada.</li>
            <li>Evitar utilizar demasiados colores.</li>
            <li>Destacar el asunto y los datos principales.</li>
            <li>Mantener una separación adecuada entre párrafos.</li>
            <li>Utilizar el logotipo institucional cuando corresponda.</li>
            <li>Revisar la presentación antes de imprimir o enviar.</li>
          </ul>
        </div>
      </section>

      {/* Diferencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Memorándum e Informe
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            Aunque ambos son documentos administrativos, tienen objetivos
            diferentes.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-3 text-left">
                    Memorándum
                  </th>
                  <th className="border p-3 text-left">
                    Informe
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">
                    Comunicación interna.
                  </td>
                  <td className="border p-3">
                    Presentación organizada de información.
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">
                    Generalmente breve.
                  </td>
                  <td className="border p-3">
                    Puede ser extenso.
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">
                    Comunica avisos, instrucciones o solicitudes.
                  </td>
                  <td className="border p-3">
                    Presenta actividades, datos, resultados y conclusiones.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Definir claramente el objetivo de la comunicación.</li>
          <li>Identificar correctamente al destinatario.</li>
          <li>Utilizar un asunto concreto.</li>
          <li>Redactar mensajes breves y claros.</li>
          <li>Utilizar un lenguaje formal.</li>
          <li>Revisar ortografía y redacción.</li>
          <li>Mantener una presentación profesional.</li>
          <li>Guardar correctamente el documento.</li>
          <li>Exportar a PDF cuando sea necesario compartirlo.</li>
        </ul>
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

            Crear un memorándum informando al personal sobre una reunión
            administrativa.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Crear un memorándum solicitando al personal la entrega de una
            documentación.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Aplicar formato profesional utilizando encabezado, asunto,
            alineación, negrita y espaciado adecuado.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Guardar el memorándum en formato editable y exportarlo a PDF.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">

          Crear un <strong>memorándum administrativo profesional</strong>
          para una empresa ficticia.

          <br /><br />

          El documento deberá incluir:

          <br /><br />

          ✔ Nombre o logotipo de la organización. <br />
          ✔ Identificación como memorándum. <br />
          ✔ Destinatario. <br />
          ✔ Remitente. <br />
          ✔ Fecha. <br />
          ✔ Asunto. <br />
          ✔ Mensaje principal. <br />
          ✔ Firma o identificación del responsable. <br />
          ✔ Formato profesional. <br />
          ✔ Versión editable y versión PDF.

          <br /><br />

          El objetivo es elaborar un documento administrativo
          formal y listo para ser utilizado en una organización.
        </div>
      </section>

    </div>
  );
}

