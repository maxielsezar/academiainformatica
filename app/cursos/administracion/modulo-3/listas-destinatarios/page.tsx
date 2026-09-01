export default function ContactosGooglePage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Contactos de Google y Envío de Correos a Múltiples Destinatarios
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Google Contactos permite almacenar y organizar información de las
          personas con las que nos comunicamos habitualmente.
          <br /><br />
          Los contactos pueden utilizarse junto con Gmail para facilitar el
          envío de mensajes y mantener organizada la información de personas,
          instituciones, empresas y grupos de trabajo.
        </p>
      </section>

      {/* ¿Qué es Google Contactos? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es Google Contactos?
        </h2>

        <div className="border p-6 rounded-xl">
          Google Contactos es una herramienta que permite administrar
          información de personas y organizaciones con las que tenemos
          comunicación.
          <br /><br />
          En un contacto podemos almacenar información como nombre,
          dirección de correo electrónico, número de teléfono y otros datos
          que resulten útiles para la comunicación.
        </div>
      </section>

      {/* Crear contacto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear un Contacto
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para mantener una agenda organizada es importante registrar
          correctamente los contactos que utilizamos con frecuencia.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Datos que podemos registrar:
          </p>

          ✔ Nombre y apellido. <br />
          ✔ Dirección de correo electrónico. <br />
          ✔ Número de teléfono. <br />
          ✔ Organización o empresa. <br />
          ✔ Información adicional.
        </div>
      </section>

      {/* Organización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización de Contactos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una agenda de contactos organizada facilita encontrar rápidamente
          a las personas con las que necesitamos comunicarnos.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Utilizar nombres claros y completos.</li>
          <li>Verificar que las direcciones de correo sean correctas.</li>
          <li>Mantener actualizada la información.</li>
          <li>Eliminar o corregir información que ya no sea válida.</li>
          <li>Organizar los contactos según las necesidades de trabajo.</li>
        </ul>
      </section>

      {/* Gmail y contactos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contactos y Gmail
        </h2>

        <div className="border p-6 rounded-xl">
          Los contactos pueden facilitar el envío de mensajes mediante Gmail.
          Al comenzar a escribir el nombre o la dirección de una persona en
          los campos de destinatarios, Gmail puede mostrar contactos
          relacionados para seleccionarlos.
          <br /><br />
          Esto permite evitar escribir manualmente las direcciones cada vez
          que se necesita enviar un mensaje.
        </div>
      </section>

      {/* Múltiples destinatarios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Enviar un Correo a Múltiples Destinatarios
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un mismo correo electrónico puede enviarse a varias personas.
          Esta posibilidad resulta especialmente útil en el ámbito laboral
          cuando es necesario comunicar una información a diferentes
          integrantes de un equipo.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Pasos generales:
          </p>

          <p className="mb-3">
            <strong>1. Crear un nuevo mensaje</strong>
            <br />
            Abrir Gmail y seleccionar la opción para redactar un correo.
          </p>

          <p className="mb-3">
            <strong>2. Agregar destinatarios</strong>
            <br />
            Escribir o seleccionar las direcciones de las personas que
            recibirán el mensaje.
          </p>

          <p className="mb-3">
            <strong>3. Escribir el asunto</strong>
            <br />
            Utilizar un asunto breve y claro que permita identificar el
            contenido del mensaje.
          </p>

          <p className="mb-3">
            <strong>4. Redactar el mensaje</strong>
            <br />
            Escribir la información que se desea comunicar.
          </p>

          <p>
            <strong>5. Enviar</strong>
            <br />
            Revisar los destinatarios y el contenido antes de enviar el
            mensaje.
          </p>
        </div>
      </section>

      {/* Para, CC y CCO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Para, CC y CCO
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Al enviar un correo a varias personas es importante comprender
          la función de los diferentes campos de destinatarios.
        </p>

        <div className="space-y-4 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold text-blue-900 mb-2">
              Para
            </p>

            Se utiliza para indicar los destinatarios principales del mensaje.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold text-blue-900 mb-2">
              CC
            </p>

            Permite enviar una copia del mensaje a otras personas que deben
            estar informadas de la comunicación.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold text-blue-900 mb-2">
              CCO
            </p>

            Permite enviar una copia del mensaje sin mostrar esas direcciones
            al resto de los destinatarios.
          </div>

        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas al Enviar Correos
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Verificar las direcciones antes de enviar el mensaje.</li>
          <li>Utilizar un asunto claro y relacionado con el contenido.</li>
          <li>Redactar mensajes breves, claros y respetuosos.</li>
          <li>Revisar los archivos adjuntos antes de enviar.</li>
          <li>
            Utilizar CCO cuando sea necesario proteger las direcciones de
            correo de los destinatarios.
          </li>
          <li>
            Evitar enviar información innecesaria a personas que no necesitan
            recibirla.
          </li>
        </ul>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en el Ámbito Laboral
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En una organización es habitual enviar comunicaciones a varias
          personas al mismo tiempo. Por ejemplo, se pueden informar reuniones,
          enviar documentación, comunicar cambios o distribuir información
          relacionada con una actividad.
          <br /><br />
          Mantener una agenda de contactos organizada permite realizar estas
          tareas de manera más rápida y reducir errores al seleccionar los
          destinatarios.
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

            Crear una lista de contactos que podrían formar
            parte de una oficina. Registrar nombre, apellido, organización
            y dirección de correo electrónico.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Redactar un correo electrónico informando a un grupo de
            compañeros sobre una reunión de trabajo. Utilizar varios
            destinatarios.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Explicar mediante un ejemplo cuándo utilizarías los campos
            Para, CC y CCO.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imaginá que trabajás en una oficina y debés comunicar a todo el
          equipo un cambio en el horario de una reunión.
          <br /><br />

          Deberás:
          <br /><br />

          ✔ Crear o identificar los contactos que recibirán el mensaje. <br />
          ✔ Seleccionar los destinatarios correspondientes. <br />
          ✔ Escribir un asunto claro. <br />
          ✔ Redactar el mensaje de manera formal. <br />
          ✔ Decidir si corresponde utilizar Para, CC o CCO. <br />
          ✔ Revisar el mensaje antes de enviarlo.
        </div>
      </section>

    </div>
  );
}