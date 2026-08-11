export default function CartasNotasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Cartas y Notas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las cartas y notas son documentos utilizados para transmitir
          información de manera formal dentro de una organización o entre
          distintas personas, empresas e instituciones.
          <br /><br />
          En el ámbito administrativo permiten realizar solicitudes,
          comunicar decisiones, enviar información, presentar reclamos,
          realizar invitaciones y establecer comunicaciones formales.
        </p>
      </section>

      {/* Diferencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencia entre Carta y Nota
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Carta
            </p>

            La carta es un documento utilizado para establecer una comunicación
            formal con una persona, empresa, institución o cliente.
            <br /><br />
            Puede utilizarse tanto para comunicaciones comerciales como para
            diferentes situaciones administrativas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Nota
            </p>

            La nota es un documento generalmente más breve que se utiliza para
            comunicar información concreta, realizar una solicitud, informar
            una situación o transmitir una instrucción.
          </div>

        </div>
      </section>

      {/* Carta administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Carta Administrativa
        </h2>

        <div className="border p-6 rounded-xl">
          Una carta administrativa debe presentar la información de manera
          clara, ordenada y formal.
          <br /><br />
          Es importante identificar correctamente al destinatario y explicar
          con claridad el motivo de la comunicación.
        </div>
      </section>

      {/* Estructura carta */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura de una Carta
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-3">
            <li>Nombre o identificación de la organización.</li>
            <li>Lugar y fecha.</li>
            <li>Datos del destinatario.</li>
            <li>Saludo inicial.</li>
            <li>Asunto, cuando corresponda.</li>
            <li>Introducción.</li>
            <li>Desarrollo del mensaje.</li>
            <li>Cierre o despedida.</li>
            <li>Firma.</li>
            <li>Datos de contacto.</li>
          </ol>

        </div>
      </section>

      {/* Nota administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Nota Administrativa
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las notas administrativas se caracterizan por presentar información
          concreta y directa. Son habituales dentro de empresas, instituciones
          y organismos para comunicar situaciones o realizar solicitudes.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Algunos ejemplos son:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Solicitud de documentación.</li>
            <li>Comunicación de una reunión.</li>
            <li>Solicitud de autorización.</li>
            <li>Comunicación de cambios.</li>
            <li>Presentación de una situación.</li>
            <li>Solicitud de información.</li>
          </ul>

        </div>
      </section>

      {/* Estructura nota */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura de una Nota
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-3">
            <li>Identificación de la institución o empresa.</li>
            <li>Lugar y fecha.</li>
            <li>Destinatario.</li>
            <li>Asunto.</li>
            <li>Texto de la comunicación.</li>
            <li>Despedida.</li>
            <li>Firma y datos del responsable.</li>
          </ol>

        </div>
      </section>

      {/* Redacción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Redacción de Cartas y Notas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La redacción debe ser clara, precisa y adecuada al destinatario.
          El mensaje debe permitir comprender rápidamente qué se desea
          comunicar o solicitar.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Utilizar un lenguaje claro.</li>
            <li>Evitar expresiones ambiguas.</li>
            <li>Mantener un tono formal.</li>
            <li>Organizar correctamente las ideas.</li>
            <li>Evitar información innecesaria.</li>
            <li>Revisar la ortografía antes de enviar el documento.</li>
          </ul>

        </div>
      </section>

      {/* Saludos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Saludo y Despedida
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Saludos formales
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>De nuestra consideración:</li>
              <li>Estimado/a señor/a:</li>
              <li>Estimados señores:</li>
              <li>De mi mayor consideración:</li>
            </ul>
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Despedidas formales
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Saluda atentamente.</li>
              <li>Sin otro particular, saludo atentamente.</li>
              <li>Cordialmente.</li>
              <li>Atentamente.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Formato */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato de Cartas y Notas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El formato debe facilitar la lectura y transmitir una imagen
          profesional de la organización.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Utilizar márgenes adecuados.</li>
            <li>Elegir una fuente clara y profesional.</li>
            <li>Mantener una alineación uniforme.</li>
            <li>Separar correctamente los párrafos.</li>
            <li>Utilizar encabezados institucionales cuando corresponda.</li>
            <li>Incluir firma y datos de contacto.</li>
          </ul>

        </div>
      </section>

      {/* Ejemplo carta */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Carta Administrativa
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="font-semibold">
            EMPRESA INFORMÁTICA S.A.
          </p>

          Departamento Administrativo

          <br /><br />

          Esquel, 11 de agosto de 2026

          <br /><br />

          <p className="font-semibold">
            Sr. Juan Pérez
          </p>

          <br />

          <strong>Asunto: Solicitud de información</strong>

          <br /><br />

          De nuestra consideración:

          <br /><br />

          Por medio de la presente nos dirigimos a usted con el objetivo de
          solicitar información actualizada sobre los productos y servicios
          disponibles para nuestra organización.

          <br /><br />

          Agradecemos desde ya su atención y quedamos a la espera de su
          respuesta.

          <br /><br />

          Saluda atentamente,

          <br /><br />

          Departamento Administrativo
          <br />
          Empresa Informática S.A.

        </div>
      </section>

      {/* Ejemplo nota */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Nota Administrativa
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="font-semibold">
            EMPRESA INFORMÁTICA S.A.
          </p>

          Departamento Administrativo

          <br /><br />

          Esquel, 11 de agosto de 2026

          <br /><br />

          <strong>Asunto: Reunión de trabajo</strong>

          <br /><br />

          Se comunica al personal del Departamento Administrativo que el día
          viernes se realizará una reunión de trabajo a las 10:00 horas en la
          sala de reuniones de la empresa.

          <br /><br />

          Se solicita puntual asistencia.

          <br /><br />

          Atentamente,

          <br /><br />

          Departamento Administrativo

        </div>
      </section>

      {/* Errores frecuentes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores Frecuentes
        </h2>

        <div className="border p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-3">
            <li>No identificar correctamente al destinatario.</li>
            <li>Utilizar un lenguaje demasiado informal.</li>
            <li>Presentar información desordenada.</li>
            <li>Utilizar párrafos excesivamente largos.</li>
            <li>Omitir la fecha.</li>
            <li>Olvidar la firma o los datos del responsable.</li>
            <li>No revisar la ortografía.</li>
            <li>Enviar el documento sin comprobar su formato.</li>
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

            Crear una carta comercial dirigida a un proveedor solicitando
            información sobre un producto o servicio.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Elaborar una nota administrativa comunicando una reunión de trabajo
            a los empleados de una empresa.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Aplicar formato profesional a una carta utilizando márgenes,
            encabezado, alineación, fuente y firma.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Guardar la carta y la nota en una carpeta llamada
            <strong> Documentos Administrativos</strong> y exportarlas también
            en formato PDF.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imagina que trabajas en el Departamento Administrativo de una
          empresa.
          <br /><br />

          Deberás preparar dos documentos:

          <br /><br />

          ✔ Una <strong>carta formal</strong> dirigida a un proveedor
          solicitando información sobre sus productos. <br />

          ✔ Una <strong>nota administrativa</strong> dirigida al personal
          comunicando una reunión.
          <br /><br />

          Ambos documentos deberán incluir:

          <br /><br />

          ✔ Identificación de la empresa. <br />
          ✔ Lugar y fecha. <br />
          ✔ Destinatario. <br />
          ✔ Asunto. <br />
          ✔ Contenido claro y formal. <br />
          ✔ Despedida. <br />
          ✔ Firma y datos del responsable. <br />
          ✔ Formato profesional.
        </div>
      </section>

    </div>
  );
}
