import Link from "next/link";

export default function Modulo3Home() {
  return (
    <main className="space-y-16">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Módulo 3: Administración de agendas y otros elementos de apoyo al trabajo individual o grupal
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este módulo el estudiante desarrolla capacidades para utilizar
          herramientas digitales que facilitan la organización del trabajo
          individual y grupal.
          <br /><br />
          Se trabajan estrategias para realizar búsquedas de información en
          Internet, seleccionar y organizar los resultados obtenidos, guardar
          páginas de referencia y gestionar comunicaciones mediante correo
          electrónico y otras plataformas digitales.
        </p>
      </section>

      {/* Capacidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Capacidades que Desarrolla
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>
            Realizar búsquedas de información utilizando distintos buscadores web.
          </li>

          <li>
            Analizar, catalogar y discriminar la información obtenida mediante
            búsquedas en Internet.
          </li>

          <li>
            Guardar y organizar páginas web para utilizarlas como referencia futura.
          </li>

          <li>
            Enviar, recibir y responder mensajes mediante correo electrónico.
          </li>

          <li>
            Utilizar diferentes herramientas digitales para la comunicación.
          </li>

          <li>
            Adjuntar archivos a los mensajes enviados.
          </li>

          <li>
            Descargar y organizar archivos recibidos mediante correspondencia
            electrónica.
          </li>

          <li>
            Organizar la correspondencia enviada y recibida.
          </li>

          <li>
            Crear y administrar listas de destinatarios múltiples.
          </li>

          <li>
            Enviar mensajes a grupos de destinatarios de manera organizada.
          </li>
        </ul>
      </section>

      {/* Contenidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contenidos del Módulo
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Búsqueda de información en Internet
            </h3>

            <p>
              Uso de distintos buscadores web para localizar información
              relacionada con una necesidad concreta.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Catalogación y selección de información
            </h3>

            <p>
              Organización de los resultados obtenidos y discriminación de
              información de acuerdo con su utilidad.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Archivo de páginas web
            </h3>

            <p>
              Guardado y organización de páginas de interés para utilizarlas
              como referencia posteriormente.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Correo electrónico
            </h3>

            <p>
              Envío, recepción y respuesta de mensajes mediante servicios de
              correo electrónico.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Archivos adjuntos
            </h3>

            <p>
              Envío de archivos adjuntos y descarga de archivos recibidos
              mediante mensajes electrónicos.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Organización de la correspondencia
            </h3>

            <p>
              Organización y administración de los mensajes enviados y
              recibidos.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Listas de destinatarios
            </h3>

            <p>
              Creación y administración de listas de destinatarios múltiples
              para facilitar el envío de mensajes.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Comunicación grupal
            </h3>

            <p>
              Utilización de herramientas digitales para enviar información
              simultáneamente a diferentes destinatarios.
            </p>
          </div>

        </div>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en el Ámbito Laboral
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las herramientas abordadas en este módulo permiten mejorar la
          organización y comunicación dentro de un entorno de trabajo.
          <br /><br />
          El estudiante podrá utilizar buscadores para localizar información,
          organizar recursos de consulta, gestionar mensajes y archivos,
          administrar correspondencia y comunicarse con grupos de destinatarios
          de manera eficiente.
        </p>
      </section>

      {/* CTA */}
      <section className="mb-6">
        <Link
          href="/cursos/administracion/modulo-3/introduccion"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
        >
          Comenzar el Módulo →
        </Link>
      </section>

    </main>
  );
}