import Link from "next/link";

export default function Modulo4Home() {
  return (
    <main className="space-y-16">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Módulo 4: Navegación, búsqueda y seguridad en Internet
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este módulo el estudiante desarrolla capacidades para utilizar
          Internet como herramienta de búsqueda, comunicación e intercambio
          de información.
          <br /><br />
          Se trabaja el uso de programas navegadores, la estructura de las
          direcciones de Internet, los motores de búsqueda y los
          metabuscadores, así como los diferentes servicios accesibles a
          través de la Web.
          <br /><br />
          También se abordan los principales riesgos asociados al uso de
          Internet y las medidas básicas de seguridad, incluyendo conexiones
          seguras, firewalls, autenticación de mensajes y reconocimiento de
          archivos ejecutables.
        </p>
      </section>

      {/* Capacidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Capacidades que Desarrolla
        </h2>

        <ul className="list-disc list-inside space-y-3">

          <li>
            Utilizar programas navegadores para acceder y recorrer diferentes
            sitios y servicios de Internet.
          </li>

          <li>
            Reconocer las principales funciones y herramientas disponibles
            en los navegadores web.
          </li>

          <li>
            Utilizar filtros y opciones de navegación para mejorar el acceso
            a la información.
          </li>

          <li>
            Interpretar el esquema de direcciones utilizado en Internet.
          </li>

          <li>
            Realizar búsquedas de información mediante motores de búsqueda.
          </li>

          <li>
            Utilizar metabuscadores para ampliar y comparar los resultados
            obtenidos.
          </li>

          <li>
            Catalogar y discriminar los resultados de las búsquedas de
            acuerdo con su utilidad.
          </li>

          <li>
            Archivar páginas de origen para utilizarlas como referencia
            futura.
          </li>

          <li>
            Reconocer los diferentes servicios de Internet accesibles
            mediante un navegador.
          </li>

          <li>
            Identificar riesgos relacionados con la navegación y el
            intercambio de información en Internet.
          </li>

          <li>
            Reconocer la importancia de las conexiones seguras y de los
            mecanismos de autenticación.
          </li>

          <li>
            Comprender la función de los firewalls como herramienta de
            protección.
          </li>

          <li>
            Identificar diferentes tipos de archivos ejecutables y sus
            posibles riesgos.
          </li>

          <li>
            Aplicar normas básicas de seguridad y confidencialidad en el
            intercambio de información.
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
              Navegadores de Internet
            </h3>

            <p>
              Programas utilizados para acceder a Internet y consultar
              páginas y servicios web. Operación, funciones y herramientas
              disponibles.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Funciones y filtros del navegador
            </h3>

            <p>
              Uso de las diferentes funciones del navegador y aplicación de
              filtros y herramientas para facilitar la navegación y búsqueda
              de información.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Direcciones de Internet
            </h3>

            <p>
              Esquema de direcciones de Internet y elementos que permiten
              identificar y acceder a diferentes recursos disponibles en la
              Web.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Motores de búsqueda
            </h3>

            <p>
              Utilización de motores de búsqueda para localizar información
              y recursos disponibles en Internet.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Metabuscadores
            </h3>

            <p>
              Concepto, funciones y utilización de metabuscadores para
              obtener y comparar resultados provenientes de diferentes
              fuentes.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Catalogación y selección de resultados
            </h3>

            <p>
              Organización, análisis y discriminación de los resultados
              obtenidos mediante búsquedas para identificar información útil
              y pertinente.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Archivo de páginas web
            </h3>

            <p>
              Guardado y organización de páginas de origen para utilizarlas
              como referencia futura.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Servicios de Internet
            </h3>

            <p>
              Identificación y utilización de diferentes servicios de
              Internet accesibles mediante programas navegadores.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Intercambio de archivos
            </h3>

            <p>
              Intercambio de archivos con personas o servidores en ambas
              direcciones mediante protocolos predefinidos.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Seguridad en Internet
            </h3>

            <p>
              Principales riesgos asociados al uso de Internet y elementos
              básicos para proteger la información y los dispositivos.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Conexiones seguras
            </h3>

            <p>
              Concepto de conexión segura y reconocimiento de mecanismos
              utilizados para proteger la información durante la navegación.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Firewalls
            </h3>

            <p>
              Concepto y función de los firewalls como mecanismo de control
              y protección de las comunicaciones de un equipo.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Autenticación de mensajes
            </h3>

            <p>
              Conceptos relacionados con la autenticación y verificación de
              mensajes para mejorar la seguridad y confiabilidad de las
              comunicaciones.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Archivos ejecutables
            </h3>

            <p>
              Reconocimiento de diferentes tipos de archivos ejecutables y
              análisis de los riesgos que pueden representar para un equipo.
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
          El uso adecuado de Internet constituye una competencia fundamental
          para el desempeño de tareas administrativas y laborales.
          <br /><br />

          Los conocimientos desarrollados en este módulo permiten buscar y
          seleccionar información de manera eficiente, utilizar diferentes
          servicios de Internet, intercambiar archivos y gestionar
          comunicaciones electrónicas.
          <br /><br />

          Además, el estudiante podrá reconocer riesgos relacionados con la
          navegación y aplicar medidas básicas de seguridad para proteger la
          información, los dispositivos y las comunicaciones realizadas en
          el ámbito laboral.
        </p>
      </section>

   

      {/* CTA */}
      <section className="mb-6">
        <Link
          href="/cursos/administracion/modulo-4/introduccion"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
        >
          Comenzar el Módulo →
        </Link>
      </section>

    </main>
  );
}