export default function FormulariosPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Formularios
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los formularios son documentos diseñados para recopilar información
          de manera organizada y estructurada.
          <br /><br />
          En el ámbito administrativo se utilizan para registrar datos de
          clientes, empleados, proveedores y usuarios, realizar solicitudes,
          recopilar información y facilitar diferentes procesos de gestión.
        </p>
      </section>

      {/* ¿Qué es un formulario? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Formulario?
        </h2>

        <div className="border p-6 rounded-xl">
          Un formulario es un documento que contiene diferentes campos
          destinados a recopilar información.
          <br /><br />
          Los campos se organizan de acuerdo con el objetivo del formulario y
          permiten que diferentes personas ingresen información siguiendo una
          estructura determinada.
        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de los Formularios
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los formularios permiten estandarizar la recopilación de información.
          Esto facilita posteriormente su organización, almacenamiento,
          consulta y procesamiento.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Organizar la recopilación de datos.</li>
            <li>Evitar omisiones de información importante.</li>
            <li>Facilitar el registro de datos.</li>
            <li>Mantener una estructura uniforme.</li>
            <li>Facilitar el almacenamiento de información.</li>
            <li>Mejorar los procesos administrativos.</li>
          </ul>

        </div>
      </section>

      {/* Tipos de campos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Campos de un Formulario
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los formularios pueden utilizar diferentes tipos de campos según la
          información que se necesite recopilar.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Campos de texto
            </p>

            Permiten ingresar información como nombre, apellido, dirección,
            empresa u observaciones.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Casillas de verificación
            </p>

            Permiten seleccionar una o varias opciones.

            <br /><br />

            Ejemplo:

            <br /><br />

            ☐ Internet <br />
            ☐ Soporte técnico <br />
            ☐ Capacitación
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Opciones de selección
            </p>

            Permiten seleccionar una única opción entre varias alternativas.

            <br /><br />

            Ejemplo:

            <br /><br />

            ○ Particular <br />
            ○ Empresa <br />
            ○ Institución
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Campos de fecha
            </p>

            Permiten registrar fechas relacionadas con una solicitud,
            actividad, entrega o trámite.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Firma
            </p>

            Permite identificar y validar a la persona responsable de la
            información registrada.
          </div>

        </div>
      </section>

      {/* Estructura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura de un Formulario
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La estructura depende del objetivo del formulario, pero generalmente
          se organiza en diferentes secciones para facilitar su comprensión.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ol className="list-decimal list-inside space-y-3">
            <li>Título del formulario.</li>
            <li>Identificación de la empresa o institución.</li>
            <li>Datos personales.</li>
            <li>Información específica.</li>
            <li>Opciones de selección.</li>
            <li>Observaciones.</li>
            <li>Fecha.</li>
            <li>Firma.</li>
          </ol>

        </div>
      </section>

      {/* Tablas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso de Tablas en Formularios
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las tablas son una herramienta muy útil para organizar los campos de
          un formulario y mantener una distribución ordenada.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="border p-3 font-semibold">
                  Nombre
                </td>
                <td className="border p-3">
                  ______________________________
                </td>
              </tr>

              <tr>
                <td className="border p-3 font-semibold">
                  Apellido
                </td>
                <td className="border p-3">
                  ______________________________
                </td>
              </tr>

              <tr>
                <td className="border p-3 font-semibold">
                  DNI
                </td>
                <td className="border p-3">
                  ______________________________
                </td>
              </tr>

              <tr>
                <td className="border p-3 font-semibold">
                  Teléfono
                </td>
                <td className="border p-3">
                  ______________________________
                </td>
              </tr>

              <tr>
                <td className="border p-3 font-semibold">
                  Correo electrónico
                </td>
                <td className="border p-3">
                  ______________________________
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </section>

      {/* Formularios administrativos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formularios Administrativos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En una organización los formularios permiten registrar información
          relacionada con diferentes actividades administrativas.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Registro de clientes.</li>
            <li>Registro de proveedores.</li>
            <li>Solicitudes de información.</li>
            <li>Solicitudes de permisos.</li>
            <li>Registro de empleados.</li>
            <li>Pedidos de productos.</li>
            <li>Encuestas.</li>
            <li>Reclamos y sugerencias.</li>
          </ul>

        </div>
      </section>

      {/* Formularios digitales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formularios Digitales
        </h2>

        <div className="border p-6 rounded-xl">
          Los formularios digitales permiten completar y enviar información
          utilizando una computadora, teléfono o tablet.
          <br /><br />
          La información recopilada puede posteriormente almacenarse y
          procesarse utilizando diferentes herramientas informáticas.
          <br /><br />
          Su utilización permite reducir el uso de papel y agilizar distintos
          procesos administrativos.
        </div>
      </section>

      {/* Formularios en Word */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear Formularios en Word
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un procesador de textos permite crear formularios utilizando
          diferentes herramientas de formato y organización.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Tablas.</li>
            <li>Cuadros de texto.</li>
            <li>Casillas de selección.</li>
            <li>Líneas para completar información.</li>
            <li>Encabezados.</li>
            <li>Logotipos.</li>
            <li>Elementos gráficos.</li>
          </ul>

        </div>
      </section>

      {/* Diseño */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diseño de Formularios
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un formulario debe ser sencillo, ordenado y fácil de completar.
          La distribución de los campos debe permitir identificar rápidamente
          qué información debe ingresar el usuario.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Utilizar títulos claros.</li>
            <li>Agrupar información relacionada.</li>
            <li>Utilizar campos suficientemente grandes.</li>
            <li>Evitar solicitar información innecesaria.</li>
            <li>Mantener una distribución ordenada.</li>
            <li>Utilizar una tipografía fácil de leer.</li>
            <li>Incluir instrucciones cuando sean necesarias.</li>
          </ul>

        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Formulario
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="text-center font-bold text-lg mb-6">
            FORMULARIO DE REGISTRO DE CLIENTES
          </p>

          <p className="font-semibold mb-3">
            Datos personales
          </p>

          Nombre y apellido:
          <br />
          ______________________________________________

          <br /><br />

          DNI:
          <br />
          ______________________________________________

          <br /><br />

          Teléfono:
          <br />
          ______________________________________________

          <br /><br />

          Correo electrónico:
          <br />
          ______________________________________________

          <br /><br />

          <p className="font-semibold mb-3">
            Tipo de cliente
          </p>

          ☐ Particular

          <br />

          ☐ Empresa

          <br />

          ☐ Institución

          <br /><br />

          <p className="font-semibold mb-3">
            Observaciones
          </p>

          ______________________________________________

          <br />
          ______________________________________________

          <br /><br />

          Fecha: ______________________

          <br /><br />

          Firma: ______________________

        </div>
      </section>

      {/* Organización de datos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formularios y Gestión de la Información
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="font-semibold mb-4">
            El proceso administrativo puede seguir estas etapas:
          </p>

          <p>
            Formulario → Recopilación → Almacenamiento → Organización →
            Consulta
          </p>

          <br />

          De esta manera, los formularios ayudan a transformar información
          proporcionada por las personas en datos organizados que pueden ser
          utilizados posteriormente por la organización.
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Definir claramente el objetivo del formulario.</li>
          <li>Solicitar solamente información necesaria.</li>
          <li>Organizar los campos por categorías.</li>
          <li>Utilizar instrucciones claras.</li>
          <li>Mantener un diseño uniforme.</li>
          <li>Revisar que todos los campos necesarios estén incluidos.</li>
          <li>Comprobar que el formulario sea fácil de completar.</li>
          <li>Guardar correctamente los formularios digitales.</li>
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

            Crear un formulario de registro de clientes utilizando tablas
            para organizar los campos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Crear un formulario de solicitud de servicio que incluya campos
            de texto, casillas de selección, fecha y observaciones.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Aplicar formato profesional al formulario utilizando títulos,
            bordes, alineación y una distribución ordenada.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Guardar el formulario en formato editable y exportarlo también
            como archivo PDF.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">

          Diseñar un <strong>formulario administrativo completo</strong> para
          una empresa ficticia.

          <br /><br />

          El formulario deberá incluir:

          <br /><br />

          ✔ Nombre y logotipo de la empresa. <br />
          ✔ Título del formulario. <br />
          ✔ Datos personales. <br />
          ✔ Datos de contacto. <br />
          ✔ Opciones de selección. <br />
          ✔ Casillas de verificación. <br />
          ✔ Campo de observaciones. <br />
          ✔ Fecha. <br />
          ✔ Espacio para firma. <br />
          ✔ Diseño profesional. <br />
          ✔ Archivo editable. <br />
          ✔ Versión final en PDF.

          <br /><br />

          Finalmente, guardar el formulario dentro de una carpeta denominada
          <strong> Formularios Administrativos</strong> y utilizar un nombre
          de archivo descriptivo.
        </div>
      </section>

    </div>
  );
}
