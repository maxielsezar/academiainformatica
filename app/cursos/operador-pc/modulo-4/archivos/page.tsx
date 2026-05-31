export default function CorreoElectronicoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Correo Electrónico
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El correo electrónico es uno de los servicios más utilizados en Internet.
          Permite enviar y recibir mensajes digitales, documentos, imágenes y
          otros archivos entre usuarios de cualquier parte del mundo de forma
          rápida y eficiente.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Comprender el funcionamiento del correo electrónico y aprender a
          enviar, recibir y organizar mensajes de manera adecuada.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Correo Electrónico?
        </h2>

        <p className="max-w-3xl">
          Un correo electrónico (e-mail) es un servicio que permite intercambiar
          mensajes y archivos a través de Internet. Cada usuario posee una
          dirección única que identifica su cuenta.
        </p>
      </section>

      {/* Estructura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura de una Dirección de Correo
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="text-lg font-semibold">
            usuario@proveedor.com
          </p>

          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>usuario:</strong> nombre de la cuenta.</li>
            <li><strong>@:</strong> separador obligatorio.</li>
            <li><strong>proveedor.com:</strong> servicio de correo utilizado.</li>
          </ul>
        </div>
      </section>

      {/* Proveedores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Proveedores de Correo Electrónico
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Proveedor</th>
                <th className="border px-4 py-2">Características</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Gmail</td>
                <td className="border px-4 py-2">
                  Integración con Google Drive y otras herramientas de Google.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Outlook</td>
                <td className="border px-4 py-2">
                  Integrado con los servicios de Microsoft.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Yahoo Mail</td>
                <td className="border px-4 py-2">
                  Servicio gratuito de correo electrónico.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Partes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Partes de un Correo Electrónico
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
                <td className="border px-4 py-2">Para</td>
                <td className="border px-4 py-2">
                  Destinatario principal del mensaje.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">CC</td>
                <td className="border px-4 py-2">
                  Copia visible para otros destinatarios.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">CCO</td>
                <td className="border px-4 py-2">
                  Copia oculta para otros destinatarios.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Asunto</td>
                <td className="border px-4 py-2">
                  Resumen breve del contenido.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Mensaje</td>
                <td className="border px-4 py-2">
                  Texto principal del correo.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Adjuntos</td>
                <td className="border px-4 py-2">
                  Archivos enviados junto al correo.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Enviar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Pasos para Enviar un Correo
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Ingresar a la cuenta de correo.</li>
            <li>Hacer clic en "Redactar" o "Nuevo mensaje".</li>
            <li>Escribir la dirección del destinatario.</li>
            <li>Completar el asunto.</li>
            <li>Redactar el mensaje.</li>
            <li>Adjuntar archivos si es necesario.</li>
            <li>Presionar "Enviar".</li>
          </ol>
        </div>
      </section>

      {/* Bandejas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Carpetas Principales
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Recibidos:</strong> mensajes recibidos.</li>
          <li><strong>Enviados:</strong> mensajes enviados.</li>
          <li><strong>Borradores:</strong> mensajes guardados sin enviar.</li>
          <li><strong>Papelera:</strong> mensajes eliminados.</li>
          <li><strong>Spam:</strong> correos no deseados.</li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Utilizar asuntos claros y descriptivos.</li>
          <li>Revisar la ortografía antes de enviar.</li>
          <li>Verificar el destinatario.</li>
          <li>Mantener un lenguaje respetuoso y profesional.</li>
          <li>No abrir archivos sospechosos.</li>
          <li>No compartir contraseñas.</li>
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
            Crea una cuenta de correo electrónico o identifica la que utilizas habitualmente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Envía un correo a un compañero o docente con un asunto adecuado.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Adjunta una imagen o documento al correo enviado.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Identifica en tu cuenta las carpetas Recibidos, Enviados, Spam y Papelera.
          </div>

        </div>
      </section>

    </div>
  );
}