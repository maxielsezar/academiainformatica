export default function GmailPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Gmail y el Correo Electrónico
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Gmail es un servicio de correo electrónico que permite enviar,
          recibir y organizar mensajes a través de Internet. En el ámbito
          laboral se utiliza para comunicarse con compañeros de trabajo,
          clientes, proveedores y otras personas.
          <br /><br />
          Además de enviar y recibir mensajes, Gmail permite adjuntar archivos,
          organizar correos, realizar búsquedas y administrar diferentes
          elementos relacionados con la comunicación.
        </p>
      </section>

      {/* ¿Qué es Gmail? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es Gmail?
        </h2>

        <div className="border p-6 rounded-xl">
          Gmail es un servicio de correo electrónico que permite enviar y
          recibir mensajes utilizando una cuenta personal o laboral.
          <br /><br />
          Los mensajes pueden contener texto, imágenes, documentos y otros
          archivos adjuntos. También es posible organizar los correos para
          facilitar su consulta posterior.
        </div>
      </section>

      {/* Cuenta de Gmail */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          La Cuenta de Gmail
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para utilizar Gmail es necesario contar con una cuenta. La cuenta
          permite acceder al correo electrónico y administrar los mensajes
          recibidos y enviados.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Ingresar utilizando la cuenta correspondiente.</li>
          <li>Consultar los mensajes recibidos.</li>
          <li>Enviar nuevos correos electrónicos.</li>
          <li>Responder y reenviar mensajes.</li>
          <li>Organizar los correos para encontrarlos posteriormente.</li>
        </ul>
      </section>

      {/* Bandeja de entrada */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Bandeja de Entrada
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La bandeja de entrada es el lugar donde se muestran los correos
          electrónicos recibidos. Desde allí podemos revisar los mensajes,
          abrirlos, responderlos, eliminarlos o realizar otras acciones.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-3">
            Al revisar un correo podemos observar:
          </p>

          ✔ Nombre o dirección del remitente. <br />
          ✔ Asunto del mensaje. <br />
          ✔ Fecha o momento en que fue recibido. <br />
          ✔ Contenido del correo. <br />
          ✔ Archivos adjuntos, si los contiene.
        </div>
      </section>

      {/* Redactar correo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Redactar un Correo Electrónico
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para enviar un correo es necesario redactar un mensaje indicando
          claramente quién lo recibirá y cuál es el motivo de la comunicación.
          Un correo laboral debe ser claro, ordenado y respetuoso.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-3">
            Un correo electrónico generalmente contiene:
          </p>

          <strong>Destinatario:</strong> persona a la que se enviará el mensaje.
          <br /><br />

          <strong>Asunto:</strong> breve descripción del motivo del correo.
          <br /><br />

          <strong>Mensaje:</strong> contenido que queremos comunicar.
          <br /><br />

          <strong>Firma:</strong> información que permite identificar al remitente.
        </div>
      </section>

      {/* Archivos adjuntos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Enviar Archivos Adjuntos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Gmail permite adjuntar archivos a los mensajes. Esta función es
          especialmente útil en el ámbito laboral para enviar documentos,
          imágenes, planillas, presupuestos y otros archivos.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Seleccionar la opción para adjuntar un archivo.</li>
          <li>Buscar el documento que se desea enviar.</li>
          <li>Comprobar que el archivo se haya cargado correctamente.</li>
          <li>Verificar que el destinatario sea correcto.</li>
          <li>Enviar el mensaje.</li>
        </ul>
      </section>

      {/* Responder y reenviar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Responder y Reenviar Mensajes
        </h2>

        <div className="border p-6 rounded-xl">
          Gmail permite responder directamente a un mensaje recibido.
          También es posible reenviar un correo para compartirlo con otra
          persona.
          <br /><br />

          <strong>Responder</strong> permite continuar la comunicación con
          quien envió el mensaje.
          <br /><br />

          <strong>Reenviar</strong> permite enviar una copia del mensaje a
          otra persona.
          <br /><br />

          Antes de enviar una respuesta o un mensaje reenviado es importante
          comprobar los destinatarios y revisar el contenido.
        </div>
      </section>

      {/* Organizar correos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organizar los Correos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando se reciben muchos mensajes puede resultar difícil encontrar
          un correo específico. Gmail permite utilizar diferentes herramientas
          para organizar y localizar los mensajes.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Utilizar etiquetas para clasificar mensajes.</li>
          <li>Archivar correos que no necesitamos mantener en la bandeja de entrada.</li>
          <li>Eliminar mensajes que ya no sean necesarios.</li>
          <li>Marcar mensajes importantes.</li>
          <li>Utilizar la búsqueda para localizar correos rápidamente.</li>
        </ul>
      </section>

      {/* Buscar correos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buscar Correos Electrónicos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Gmail cuenta con una herramienta de búsqueda que permite encontrar
          mensajes utilizando palabras, nombres, direcciones de correo,
          asuntos y otros datos relacionados con los mensajes.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-3">
            Ejemplo:
          </p>

          Si necesitamos encontrar un correo relacionado con una factura,
          podemos buscar:
          <br /><br />

          <strong>"factura"</strong>

          <br /><br />

          También podemos utilizar información más específica, como el nombre
          de una persona o una palabra relacionada con el asunto del mensaje.
          <br /><br />

          Una búsqueda más precisa permite encontrar rápidamente el correo
          que necesitamos.
        </div>
      </section>

      {/* Seguridad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Seguridad en Gmail
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El correo electrónico puede contener información personal, laboral
          o confidencial. Por eso es importante utilizar buenas prácticas de
          seguridad al trabajar con Gmail.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>No compartir la contraseña de la cuenta.</li>
          <li>Utilizar una contraseña segura.</li>
          <li>Evitar abrir archivos o enlaces sospechosos.</li>
          <li>Comprobar quién envió el mensaje antes de responder.</li>
          <li>Prestar atención a posibles intentos de fraude o suplantación.</li>
        </ul>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en el Ámbito Laboral
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Gmail puede utilizarse para diferentes tareas dentro de una oficina,
          como comunicarse con compañeros, enviar documentación, solicitar
          información, recibir presupuestos, coordinar actividades y mantener
          un registro de las comunicaciones.
          <br /><br />
          Utilizar correctamente el correo electrónico permite mejorar la
          organización y facilita la comunicación dentro y fuera de la
          empresa.
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

            Redactar un correo electrónico imaginando que necesitás solicitar
            información a un compañero de trabajo. Incluir destinatario,
            asunto, mensaje y firma.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Imaginar que necesitás enviar un documento por correo electrónico.
            Explicar qué pasos seguirías para redactar el mensaje, adjuntar el
            archivo y enviarlo correctamente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Imaginar que recibiste una gran cantidad de correos laborales.
            Explicar qué herramientas utilizarías para organizar los mensajes
            y encontrar posteriormente un correo específico.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imaginá que trabajás en una oficina y necesitás enviar un documento
          importante a un compañero de trabajo.
          <br /><br />

          Deberás:
          <br /><br />

          ✔ Redactar un correo electrónico claro y formal. <br />
          ✔ Escribir un asunto relacionado con el contenido del mensaje. <br />
          ✔ Seleccionar correctamente al destinatario. <br />
          ✔ Adjuntar el documento correspondiente. <br />
          ✔ Revisar el mensaje antes de enviarlo. <br />
          ✔ Enviar el correo y conservarlo organizado para poder consultarlo posteriormente.
        </div>
      </section>

    </div>
  );
}