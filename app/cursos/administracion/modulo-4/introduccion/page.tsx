export default function IntroduccionPage() {
  return (
    <main className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Introducción a Internet
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Internet es una red mundial que permite conectar computadoras,
          dispositivos y personas para intercambiar información y acceder a
          diferentes servicios digitales.
          <br /><br />
          En el ámbito laboral, Internet constituye una herramienta
          fundamental para buscar información, comunicarse, compartir
          archivos, acceder a servicios y realizar diferentes tareas
          administrativas.
          <br /><br />
          En este módulo aprenderemos a utilizar Internet de manera eficiente,
          identificando las herramientas disponibles y aplicando criterios
          para seleccionar información confiable y relevante.
        </p>
      </section>

      {/* ¿Qué aprenderemos? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué aprenderemos en este módulo?
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Navegar por Internet
            </h3>

            <p className="leading-relaxed">
              Utilizar programas navegadores para acceder a páginas web,
              desplazarse por sus contenidos y utilizar sus principales
              herramientas.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Buscar información
            </h3>

            <p className="leading-relaxed">
              Utilizar motores de búsqueda y otras herramientas para
              localizar información de acuerdo con una necesidad concreta.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Evaluar resultados
            </h3>

            <p className="leading-relaxed">
              Analizar los resultados obtenidos, seleccionar información
              relevante y descartar aquella que no resulte útil o confiable.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Organizar información
            </h3>

            <p className="leading-relaxed">
              Guardar y organizar páginas de interés para poder consultarlas
              nuevamente cuando sea necesario.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Intercambiar archivos
            </h3>

            <p className="leading-relaxed">
              Comprender las posibilidades de intercambio de archivos entre
              personas y servidores utilizando herramientas y protocolos
              establecidos.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Comunicarse por Internet
            </h3>

            <p className="leading-relaxed">
              Utilizar el correo electrónico para enviar, recibir y responder
              mensajes respetando normas de comunicación y confidencialidad.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Utilizar servicios web
            </h3>

            <p className="leading-relaxed">
              Reconocer diferentes servicios disponibles a través de Internet
              y comprender sus posibilidades de utilización.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Navegar de forma segura
            </h3>

            <p className="leading-relaxed">
              Identificar riesgos relacionados con Internet y aplicar medidas
              básicas para proteger la información y los dispositivos.
            </p>
          </div>

        </div>
      </section>

      {/* Internet en el ámbito laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Internet en el Ámbito Laboral
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En una organización, Internet puede utilizarse para realizar
          búsquedas de información, consultar documentación, comunicarse con
          compañeros y clientes, compartir archivos y acceder a diferentes
          servicios.
          <br /><br />
          Por este motivo, no alcanza solamente con saber utilizar un
          navegador. También es necesario desarrollar criterios para buscar,
          seleccionar y organizar la información, además de conocer los
          riesgos que pueden presentarse durante la navegación.
        </p>
      </section>

      {/* Importancia de la seguridad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          La importancia de la seguridad
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          <p className="leading-relaxed max-w-3xl">
            El uso de Internet implica intercambiar información de manera
            permanente. Por esta razón, es importante conocer medidas básicas
            de seguridad y actuar de manera responsable al acceder a sitios
            web, descargar archivos o intercambiar información.
            <br /><br />
            Durante el módulo estudiaremos conceptos como conexiones seguras,
            firewalls, autenticación de mensajes y tipos de archivos
            ejecutables.
          </p>
        </div>
      </section>

      {/* Actividad inicial */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Inicial
        </h2>

        <div className="border p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            ¿Cómo utilizamos Internet?
          </h3>

          <p className="leading-relaxed max-w-3xl mb-5">
            Antes de comenzar con los contenidos del módulo, reflexioná sobre
            el uso que realizás habitualmente de Internet.
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              ¿Qué navegador utilizás habitualmente?
            </li>

            <li>
              ¿Qué buscador utilizás para encontrar información?
            </li>

            <li>
              ¿Cómo guardás una página web que necesitás consultar
              posteriormente?
            </li>

            <li>
              ¿Qué servicios de Internet utilizás con mayor frecuencia?
            </li>

            <li>
              ¿Qué medidas de seguridad aplicás cuando navegás por Internet?
            </li>
          </ul>

          <p className="leading-relaxed max-w-3xl mt-5">
            Compartí tus respuestas con el grupo y compará tus hábitos de uso
            de Internet con los de tus compañeros.
          </p>
        </div>
      </section>

      {/* Cierre */}
      <section className="mb-6">
        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          <h2 className="text-xl font-bold text-blue-900 mb-3">
            Para comenzar
          </h2>

          <p className="leading-relaxed max-w-3xl">
            Ahora que conocemos la importancia de Internet en las actividades
            laborales, comenzaremos estudiando los programas que utilizamos
            para acceder a la Web: los navegadores de Internet.
          </p>
        </div>
      </section>

    </main>
  );
}