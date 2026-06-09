export default function ListasContactosCorreoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Gestión de Contactos y Envío de Correos a Múltiples Destinatarios
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los servicios de correo electrónico permiten almacenar contactos y
          enviar mensajes a varias personas al mismo tiempo. Esta funcionalidad
          resulta muy útil para docentes, empresas, organizaciones y grupos de
          trabajo que necesitan compartir información de manera rápida y eficiente.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender a crear listas de contactos, organizarlas en grupos y enviar
          correos electrónicos a múltiples destinatarios de forma adecuada.
        </p>
      </section>

      {/* Contactos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son los Contactos?
        </h2>

        <p className="max-w-3xl">
          Los contactos son registros que almacenan información de personas o
          empresas, como nombre, dirección de correo electrónico, teléfono y
          otros datos relevantes. Mantener una agenda organizada facilita la
          comunicación y evita errores al escribir direcciones de correo.
        </p>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de Utilizar Contactos
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Acceso rápido a direcciones frecuentes.</li>
          <li>Reducción de errores al escribir correos electrónicos.</li>
          <li>Organización de clientes, alumnos o compañeros.</li>
          <li>Facilidad para enviar mensajes grupales.</li>
          <li>Sincronización entre dispositivos.</li>
        </ul>
      </section>

      {/* Crear contacto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Crear un Contacto
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Ingresar al servicio de correo electrónico.</li>
            <li>Abrir la sección Contactos o Agenda.</li>
            <li>Seleccionar "Nuevo contacto".</li>
            <li>Completar nombre y dirección de correo.</li>
            <li>Agregar información adicional si es necesario.</li>
            <li>Guardar el contacto.</li>
          </ol>
        </div>
      </section>

      {/* Grupos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son los Grupos o Listas de Contactos?
        </h2>

        <p className="max-w-3xl">
          Un grupo de contactos reúne varias personas bajo una misma categoría.
          Esto permite enviar correos a todos los integrantes del grupo sin tener
          que seleccionar cada dirección individualmente.
        </p>
      </section>

      {/* Ejemplos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplos de Grupos de Contactos
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Grupo</th>
                <th className="border px-4 py-2">Integrantes</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Alumnos</td>
                <td className="border px-4 py-2">
                  Estudiantes de un curso.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Clientes</td>
                <td className="border px-4 py-2">
                  Personas que reciben promociones.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Equipo de Trabajo</td>
                <td className="border px-4 py-2">
                  Integrantes de una organización.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Familia</td>
                <td className="border px-4 py-2">
                  Contactos personales.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Enviar múltiples */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Envío de Correos a Múltiples Destinatarios
        </h2>

        <p className="max-w-3xl">
          Los servicios de correo permiten enviar un mismo mensaje a varias
          personas utilizando los campos Para, CC y CCO.
        </p>
      </section>

      {/* Campos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencia entre Para, CC y CCO
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Campo</th>
                <th className="border px-4 py-2">Función</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Para</td>
                <td className="border px-4 py-2">
                  Destinatarios principales del mensaje.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">CC</td>
                <td className="border px-4 py-2">
                  Copia visible para todos los destinatarios.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">CCO</td>
                <td className="border px-4 py-2">
                  Copia oculta. Los destinatarios no ven las direcciones de los demás.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pasos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Pasos para Enviar un Correo a un Grupo
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Crear un nuevo mensaje.</li>
            <li>Seleccionar el grupo o los contactos deseados.</li>
            <li>Completar el asunto del correo.</li>
            <li>Redactar el mensaje.</li>
            <li>Adjuntar archivos si es necesario.</li>
            <li>Revisar los destinatarios.</li>
            <li>Enviar el correo.</li>
          </ol>
        </div>
      </section>

      {/* Privacidad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia del Campo CCO
        </h2>

        <div className="border p-6 rounded-xl">
          <p>
            Cuando se envían correos a muchas personas que no se conocen entre sí,
            es recomendable utilizar el campo <strong>CCO (Copia Carbón Oculta)</strong>.
            De esta manera se protege la privacidad de las direcciones de correo y
            se evita que los destinatarios visualicen la información de los demás.
          </p>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Mantener actualizada la lista de contactos.</li>
          <li>Eliminar direcciones incorrectas o duplicadas.</li>
          <li>Utilizar asuntos claros y descriptivos.</li>
          <li>Revisar los destinatarios antes de enviar.</li>
          <li>Utilizar CCO para correos masivos.</li>
          <li>Evitar el envío de archivos excesivamente grandes.</li>
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
            Crea cinco contactos en tu agenda de correo electrónico.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Organiza los contactos en un grupo llamado "Curso Operador de PC".
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Envía un correo a todos los integrantes del grupo utilizando el campo Para.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Envía un segundo correo utilizando el campo CCO y analiza las diferencias.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad Integradora</p>
            Crea una lista de contactos para una pequeña empresa con al menos 10 clientes y redacta un correo informativo que será enviado a todos utilizando CCO para proteger la privacidad de los destinatarios.
          </div>

        </div>
      </section>

    </div>
  );
}