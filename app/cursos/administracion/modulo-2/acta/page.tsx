export default function ActaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Acta Administrativa
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Un acta administrativa es un documento que permite dejar constancia
          escrita de hechos, situaciones, reuniones, decisiones o actividades
          realizadas dentro de una organización.
          <br /><br />
          Su principal objetivo es registrar información de manera formal,
          ordenada y precisa para que pueda ser consultada posteriormente.
        </p>
      </section>

      {/* ¿Qué es un acta? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Acta?
        </h2>

        <div className="border p-6 rounded-xl">
          Un acta es un documento en el que se registra por escrito lo ocurrido
          durante una reunión, actividad o determinado acontecimiento.
          <br /><br />
          Puede utilizarse como constancia de los temas tratados, las
          decisiones tomadas y, cuando corresponde, las personas que
          participaron.
        </div>
      </section>

      {/* Finalidad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Finalidad del Acta
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las actas permiten conservar un registro organizado de situaciones
          importantes para una empresa, institución u organización.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Dejar constancia de una reunión.</li>
            <li>Registrar los temas tratados.</li>
            <li>Registrar decisiones tomadas.</li>
            <li>Identificar a los participantes.</li>
            <li>Registrar acuerdos y compromisos.</li>
            <li>Documentar hechos o situaciones.</li>
            <li>Facilitar la consulta de información posteriormente.</li>
          </ul>
        </div>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Actas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Acta de Reunión
            </p>

            Registra los temas tratados, participantes, decisiones y acuerdos
            alcanzados durante una reunión.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Acta de Asamblea
            </p>

            Registra lo ocurrido durante una asamblea o reunión formal de una
            organización.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Acta de Entrega
            </p>

            Deja constancia de la entrega o recepción de documentos, elementos,
            materiales o bienes.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Acta de Constancia
            </p>

            Se utiliza para dejar registrada formalmente una determinada
            situación o hecho.
          </div>

        </div>
      </section>

      {/* Estructura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura de un Acta
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La estructura puede variar según el tipo de acta, pero generalmente
          contiene los siguientes elementos:
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ol className="list-decimal list-inside space-y-3">
            <li>Nombre de la organización.</li>
            <li>Título del acta.</li>
            <li>Número de acta, cuando corresponda.</li>
            <li>Lugar y fecha.</li>
            <li>Hora de inicio.</li>
            <li>Participantes.</li>
            <li>Temas tratados.</li>
            <li>Desarrollo de la reunión o actividad.</li>
            <li>Acuerdos y decisiones.</li>
            <li>Hora de finalización.</li>
            <li>Firmas de los responsables o participantes.</li>
          </ol>
        </div>
      </section>

      {/* Participantes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Participantes
        </h2>

        <div className="border p-6 rounded-xl">
          Es importante registrar las personas que participaron en la reunión
          o actividad cuando el tipo de acta lo requiera.
          <br /><br />
          Para organizar esta información se puede utilizar una tabla con
          datos como nombre, apellido, cargo y firma.
        </div>
      </section>

      {/* Temas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Temas Tratados
        </h2>

        <div className="border p-6 rounded-xl">
          Esta sección presenta los temas que fueron abordados durante la
          reunión o actividad.
          <br /><br />
          Los temas deben organizarse de manera clara para que posteriormente
          sea posible identificar qué asuntos fueron tratados.
        </div>
      </section>

      {/* Acuerdos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Acuerdos y Decisiones
        </h2>

        <div className="border p-6 rounded-xl">
          En esta sección se registran las decisiones adoptadas y los acuerdos
          alcanzados durante la reunión.
          <br /><br />
          Cuando sea necesario, también puede indicarse quién será responsable
          de realizar cada tarea y cuál será el plazo establecido.
        </div>
      </section>

      {/* Tabla participantes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización de Participantes
        </h2>

        <div className="border p-6 rounded-xl">

          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-3 text-left">
                  Nombre y Apellido
                </th>
                <th className="border p-3 text-left">
                  Cargo
                </th>
                <th className="border p-3 text-left">
                  Firma
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">
                  Juan Pérez
                </td>
                <td className="border p-3">
                  Director
                </td>
                <td className="border p-3">
                  __________________
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  María Gómez
                </td>
                <td className="border p-3">
                  Administrativa
                </td>
                <td className="border p-3">
                  __________________
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Carlos López
                </td>
                <td className="border p-3">
                  Coordinador
                </td>
                <td className="border p-3">
                  __________________
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Acta de Reunión
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="text-center font-bold text-lg mb-6">
            ACTA DE REUNIÓN
          </p>

          <p>
            <strong>Organización:</strong> Empresa Informática S.A.
          </p>

          <p className="mt-2">
            <strong>Fecha:</strong> 13 de agosto de 2026
          </p>

          <p className="mt-2">
            <strong>Lugar:</strong> Sala de reuniones
          </p>

          <p className="mt-2">
            <strong>Hora de inicio:</strong> 10:00 horas
          </p>

          <br />

          <p className="font-semibold mb-2">
            Participantes
          </p>

          Juan Pérez – Director
          <br />
          María Gómez – Administrativa
          <br />
          Carlos López – Coordinador

          <br /><br />

          <p className="font-semibold mb-2">
            Temas tratados
          </p>

          Se analizaron las actividades administrativas correspondientes
          al próximo período y se revisó la distribución de tareas del
          departamento.

          <br /><br />

          <p className="font-semibold mb-2">
            Acuerdos
          </p>

          Se acordó organizar la documentación administrativa y actualizar
          los registros correspondientes durante la siguiente semana.

          <br /><br />

          <p className="font-semibold mb-2">
            Hora de finalización
          </p>

          11:00 horas.

          <br /><br /><br />

          <p>
            <strong>Firma:</strong>
          </p>

          <br />

          ______________________________

          <br />

          Responsable del acta

        </div>
      </section>

      {/* Actas en Word */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear un Acta en Word
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Microsoft Word permite crear actas profesionales utilizando
          diferentes herramientas de procesamiento de textos.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Configurar márgenes y tamaño de página.</li>
            <li>Crear títulos y subtítulos.</li>
            <li>Utilizar tablas para organizar participantes.</li>
            <li>Aplicar negrita a los datos importantes.</li>
            <li>Utilizar encabezados y pies de página.</li>
            <li>Agregar numeración de páginas.</li>
            <li>Insertar el logotipo de la organización.</li>
            <li>Revisar ortografía y redacción.</li>
            <li>Guardar el documento en formato editable.</li>
            <li>Exportar el documento a PDF.</li>
          </ul>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Registrar correctamente la fecha y el lugar.</li>
          <li>Identificar a los participantes.</li>
          <li>Describir los temas de manera clara.</li>
          <li>Registrar las decisiones tomadas.</li>
          <li>Evitar opiniones personales innecesarias.</li>
          <li>Utilizar un lenguaje formal y preciso.</li>
          <li>Revisar el documento antes de finalizarlo.</li>
          <li>Conservar correctamente las actas.</li>
          <li>Guardar una copia digital cuando corresponda.</li>
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

            Crear un acta de una reunión administrativa ficticia.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Crear una tabla para registrar los participantes y sus cargos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Registrar al menos tres temas tratados y dos acuerdos alcanzados
            durante la reunión.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Aplicar formato profesional, agregar encabezado y pie de página
            y exportar el documento a PDF.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">

          Crear un <strong>acta de reunión administrativa profesional</strong>
          para una empresa ficticia.

          <br /><br />

          El documento deberá incluir:

          <br /><br />

          ✔ Nombre o logotipo de la organización. <br />
          ✔ Título del acta. <br />
          ✔ Fecha y lugar. <br />
          ✔ Hora de inicio y finalización. <br />
          ✔ Lista de participantes. <br />
          ✔ Temas tratados. <br />
          ✔ Desarrollo de la reunión. <br />
          ✔ Acuerdos y decisiones. <br />
          ✔ Responsables de las tareas. <br />
          ✔ Espacio para firmas. <br />
          ✔ Encabezado y pie de página. <br />
          ✔ Numeración de páginas. <br />
          ✔ Formato profesional. <br />
          ✔ Versión editable y versión PDF.

          <br /><br />

          El objetivo es aplicar las herramientas de procesamiento de textos
          aprendidas durante el módulo para elaborar un documento
          administrativo formal, organizado y listo para ser archivado.
        </div>
      </section>

    </div>
  );
}
