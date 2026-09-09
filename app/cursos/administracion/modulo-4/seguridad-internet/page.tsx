export default function SeguridadInternetPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Seguridad en Internet
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El uso de Internet permite acceder a información, comunicarse,
          compartir archivos y realizar numerosas tareas administrativas. Sin
          embargo, también existen riesgos que pueden comprometer la
          información, los dispositivos y las cuentas de los usuarios.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          La seguridad en Internet consiste en aplicar medidas y buenas
          prácticas que permitan utilizar los servicios digitales de manera
          responsable, reduciendo las posibilidades de sufrir fraudes, pérdida
          de información, infecciones por malware o accesos no autorizados.
        </p>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué es importante la seguridad en Internet?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En un entorno laboral se maneja constantemente información que puede
          ser importante para una organización. Documentos, contraseñas,
          correos electrónicos, datos de clientes y archivos administrativos
          deben protegerse adecuadamente.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            La seguridad permite proteger:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Información personal y laboral.</li>
            <li>Documentos y archivos digitales.</li>
            <li>Cuentas de correo electrónico.</li>
            <li>Contraseñas y credenciales de acceso.</li>
            <li>Computadoras y otros dispositivos.</li>
            <li>Información de clientes y organizaciones.</li>
          </ul>
        </div>
      </section>

      {/* Principales riesgos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Principales riesgos en Internet
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Existen diferentes amenazas que pueden afectar a los usuarios
          mientras navegan por Internet o utilizan servicios digitales.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Phishing
            </h3>
            <p className="leading-relaxed">
              Es una técnica utilizada para engañar al usuario y obtener
              información como contraseñas, datos personales o información
              financiera mediante mensajes o páginas falsas.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Malware
            </h3>
            <p className="leading-relaxed">
              Es software diseñado para realizar acciones perjudiciales,
              como robar información, alterar archivos o afectar el
              funcionamiento de un equipo.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Sitios web falsos
            </h3>
            <p className="leading-relaxed">
              Algunas páginas intentan imitar sitios legítimos para conseguir
              que el usuario entregue información o descargue archivos
              peligrosos.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Robo de cuentas
            </h3>
            <p className="leading-relaxed">
              Puede producirse cuando un usuario comparte sus credenciales,
              utiliza contraseñas débiles o accede a servicios desde sitios
              no confiables.
            </p>
          </div>
        </div>
      </section>

      {/* Contraseñas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contraseñas seguras
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las contraseñas son una de las principales barreras de protección de
          las cuentas digitales. Por este motivo, deben ser difíciles de
          adivinar y no deben compartirse con otras personas.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Recomendaciones
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Utilizar contraseñas largas.</li>
            <li>Combinar diferentes tipos de caracteres cuando sea posible.</li>
            <li>Evitar nombres, fechas de nacimiento y datos fáciles de conocer.</li>
            <li>No utilizar la misma contraseña en todos los servicios.</li>
            <li>No compartir las contraseñas por correo o mensajería.</li>
            <li>Cambiar una contraseña si se sospecha que fue comprometida.</li>
          </ul>
        </div>
      </section>

      {/* Verificación de sitios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo reconocer un sitio seguro
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Antes de introducir información personal o descargar archivos, es
          importante analizar el sitio web y verificar que corresponda al
          servicio que se desea utilizar.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Algunos aspectos que podemos verificar
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>La dirección del sitio web.</li>
            <li>Que utilice una conexión HTTPS cuando corresponda.</li>
            <li>Que el dominio sea el esperado.</li>
            <li>Que no presente mensajes o comportamientos sospechosos.</li>
            <li>Que la información provenga de una fuente confiable.</li>
            <li>Que no solicite datos innecesarios.</li>
          </ul>
        </div>
      </section>

      {/* Descargas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Seguridad al descargar archivos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las descargas son una actividad habitual en el trabajo administrativo.
          Sin embargo, un archivo proveniente de una fuente desconocida puede
          contener software malicioso.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Antes de descargar un archivo:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Verificar quién lo envió.</li>
            <li>Comprobar que la fuente sea confiable.</li>
            <li>Evitar archivos inesperados.</li>
            <li>Analizar los archivos con herramientas de seguridad.</li>
            <li>No ejecutar programas provenientes de fuentes desconocidas.</li>
          </ul>
        </div>
      </section>

      {/* Correo electrónico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Seguridad en el correo electrónico
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El correo electrónico es una herramienta fundamental en las tareas
          administrativas, pero también puede utilizarse para distribuir
          mensajes fraudulentos o archivos maliciosos.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Al recibir un correo sospechoso:
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>Verificar quién envió el mensaje.</li>
            <li>Leer cuidadosamente el contenido.</li>
            <li>No abrir enlaces sospechosos.</li>
            <li>No descargar archivos inesperados.</li>
            <li>Comprobar la dirección real de los enlaces.</li>
            <li>No proporcionar contraseñas ni información confidencial.</li>
            <li>Informar el mensaje si se considera fraudulento.</li>
          </ol>
        </div>
      </section>

      {/* Información confidencial */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Protección de la información confidencial
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En el ámbito administrativo pueden manejarse datos que no deben
          quedar expuestos. La información confidencial debe compartirse
          únicamente con las personas autorizadas y mediante medios adecuados.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>No enviar información sensible a destinatarios incorrectos.</li>
            <li>Verificar los destinatarios antes de enviar un correo.</li>
            <li>No dejar documentos confidenciales expuestos.</li>
            <li>Utilizar sistemas autorizados para almacenar información.</li>
            <li>Bloquear el equipo cuando se abandona el puesto de trabajo.</li>
          </ul>
        </div>
      </section>

      {/* Actualizaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actualizaciones y protección del equipo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Mantener actualizado el sistema operativo, el navegador y las
          aplicaciones permite corregir errores y vulnerabilidades de
          seguridad conocidas.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Buenas prácticas
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Mantener actualizado el sistema operativo.</li>
            <li>Actualizar el navegador web.</li>
            <li>Mantener activo el software de seguridad disponible.</li>
            <li>Realizar copias de seguridad de información importante.</li>
            <li>No instalar programas de fuentes desconocidas.</li>
          </ul>
        </div>
      </section>

      {/* Seguridad en el trabajo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Seguridad en el ámbito laboral
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La seguridad informática no depende únicamente de los programas
          utilizados. También depende de las acciones de las personas que
          utilizan los equipos y servicios digitales.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Antes
            </h3>
            <p className="leading-relaxed">
              Verificar destinatarios, enlaces, archivos y sitios web antes de
              realizar una acción.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Durante
            </h3>
            <p className="leading-relaxed">
              Utilizar las herramientas digitales respetando las normas de
              seguridad y confidencialidad.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Después
            </h3>
            <p className="leading-relaxed">
              Cerrar sesiones, proteger los documentos y comunicar cualquier
              situación sospechosa.
            </p>
          </div>
        </div>
      </section>

      {/* Actividad práctica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad práctica
        </h2>

        <div className="border rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Detectando riesgos
          </h3>

          <p className="leading-relaxed">
            Analizá las siguientes situaciones y determiná si representan un
            riesgo de seguridad.
          </p>

          <ol className="list-decimal list-inside space-y-4 mt-6">
            <li>
              Recibís un correo de un remitente desconocido con un archivo
              adjunto inesperado.
            </li>
            <li>
              Una página solicita tu contraseña y la dirección web parece
              diferente a la habitual.
            </li>
            <li>
              Un compañero te pide tu contraseña para ingresar a su cuenta.
            </li>
            <li>
              Descargás un programa desde una página que no conocés.
            </li>
            <li>
              Dejás tu computadora desbloqueada cuando te alejás de tu puesto.
            </li>
          </ol>

          <p className="leading-relaxed mt-6">
            Para cada situación, explicá cuál es el riesgo y qué acción
            recomendarías para evitarlo.
          </p>
        </div>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en tareas administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una persona que trabaja con herramientas informáticas debe incorporar
          la seguridad como parte habitual de sus tareas. Por ejemplo, al
          recibir documentación por correo, descargar archivos, acceder a
          sistemas administrativos o compartir información con compañeros.
        </p>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl mt-6">
          <h3 className="font-bold text-blue-900 mb-3">
            Situación laboral
          </h3>

          <p className="leading-relaxed">
            Imaginá que trabajás en una oficina y recibís un correo que solicita
            descargar una factura desde un enlace. Antes de hacerlo deberás
            verificar el remitente, revisar la dirección del sitio, comprobar
            que el mensaje sea coherente y evitar proporcionar información
            confidencial si existen dudas sobre su legitimidad.
          </p>
        </div>
      </section>

      {/* Desafío integrador */}
      <section className="border-l-4 border-blue-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Desafío Integrador
        </h2>

        <p className="leading-relaxed">
          Elaborá una lista de <strong>10 recomendaciones de seguridad</strong>
          que debería seguir una persona que utiliza Internet diariamente en
          una oficina administrativa.
        </p>

        <p className="leading-relaxed mt-4">
          Las recomendaciones deberán contemplar navegación web, correo
          electrónico, contraseñas, descargas, protección de información,
          actualización de programas y comportamiento frente a mensajes o
          sitios sospechosos.
        </p>

        <p className="leading-relaxed mt-4">
          Finalmente, seleccioná las tres recomendaciones que consideres más
          importantes y explicá por qué.
        </p>
      </section>
    </div>
  );
}