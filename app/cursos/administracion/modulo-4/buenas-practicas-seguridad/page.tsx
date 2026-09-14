export default function BuenasPracticasSeguridadPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Buenas Prácticas de Seguridad
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La seguridad informática no depende únicamente de los programas y
          herramientas de protección. Las acciones que realiza cada usuario
          también son fundamentales para proteger los equipos, las cuentas y
          la información.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Aplicar buenas prácticas de seguridad permite reducir los riesgos
          durante la navegación por Internet, el uso del correo electrónico,
          la descarga de archivos y el trabajo con información digital.
        </p>
      </section>

      {/* Principios fundamentales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Principios fundamentales de seguridad
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una utilización segura de Internet requiere prestar atención a las
          diferentes acciones que realizamos diariamente.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Proteger
            </h3>

            <p className="leading-relaxed">
              Proteger las cuentas, los dispositivos y la información mediante
              contraseñas, actualizaciones y herramientas de seguridad.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Verificar
            </h3>

            <p className="leading-relaxed">
              Comprobar los sitios web, remitentes, enlaces y archivos antes de
              realizar una acción.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Prevenir
            </h3>

            <p className="leading-relaxed">
              Evitar comportamientos que puedan poner en riesgo los equipos o
              la información.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Informar
            </h3>

            <p className="leading-relaxed">
              Comunicar rápidamente cualquier situación sospechosa o incidente
              de seguridad a la persona responsable.
            </p>
          </div>
        </div>
      </section>

      {/* Navegación segura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Navegación segura
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Durante la navegación debemos analizar la información que
          encontramos y verificar que los sitios utilizados sean los
          correspondientes.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Recomendaciones
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Verificar la dirección del sitio web.</li>
            <li>Comprobar el dominio antes de ingresar información.</li>
            <li>Utilizar conexiones HTTPS cuando corresponda.</li>
            <li>Evitar sitios desconocidos o sospechosos.</li>
            <li>No descargar programas desde fuentes poco confiables.</li>
            <li>Evaluar la confiabilidad de la información encontrada.</li>
            <li>Mantener actualizado el navegador.</li>
          </ul>
        </div>
      </section>

      {/* Contraseñas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso seguro de contraseñas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las contraseñas permiten controlar el acceso a cuentas y sistemas.
          Por eso deben mantenerse protegidas y utilizarse de manera
          responsable.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-4">
              Hacer
            </h3>

            <ul className="list-disc list-inside space-y-3">
              <li>Utilizar contraseñas largas y difíciles de adivinar.</li>
              <li>Utilizar contraseñas diferentes para servicios importantes.</li>
              <li>Cambiar una contraseña si se sospecha que fue expuesta.</li>
              <li>Utilizar mecanismos adicionales de autenticación cuando estén disponibles.</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-4">
              Evitar
            </h3>

            <ul className="list-disc list-inside space-y-3">
              <li>Compartir contraseñas.</li>
              <li>Utilizar datos personales fáciles de conocer.</li>
              <li>Escribir contraseñas en lugares visibles.</li>
              <li>Utilizar la misma contraseña para todo.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Correo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas en el correo electrónico
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El correo electrónico es una herramienta fundamental para el trabajo
          administrativo. Su utilización requiere prestar especial atención a
          los mensajes, enlaces y archivos recibidos.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Verificar el remitente.</li>
            <li>Revisar cuidadosamente los enlaces.</li>
            <li>No abrir archivos inesperados.</li>
            <li>No responder mensajes sospechosos.</li>
            <li>No proporcionar contraseñas por correo electrónico.</li>
            <li>Verificar los destinatarios antes de enviar información.</li>
            <li>Utilizar copias ocultas cuando sea necesario proteger una lista de destinatarios.</li>
          </ul>
        </div>
      </section>

      {/* Archivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Seguridad con archivos y descargas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los archivos descargados o recibidos pueden contener información
          importante o instrucciones que serán ejecutadas por el sistema. Por
          eso es necesario conocer su procedencia antes de abrirlos.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Antes de abrir un archivo
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>Comprobar quién lo envió.</li>
            <li>Confirmar que se esperaba el archivo.</li>
            <li>Revisar su nombre y extensión.</li>
            <li>Analizarlo con herramientas de seguridad.</li>
            <li>Evitar ejecutar archivos de fuentes desconocidas.</li>
            <li>Consultar con el responsable de informática ante una duda.</li>
          </ol>
        </div>
      </section>

      {/* Actualizaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Mantener los sistemas actualizados
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las actualizaciones pueden incluir correcciones de errores y
          soluciones para problemas de seguridad. Mantener actualizado el
          software utilizado habitualmente es una medida preventiva
          importante.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Actualizar el sistema operativo.</li>
            <li>Mantener actualizado el navegador.</li>
            <li>Actualizar las aplicaciones utilizadas.</li>
            <li>Mantener actualizadas las herramientas de seguridad.</li>
            <li>No ignorar permanentemente las notificaciones de actualización.</li>
          </ul>
        </div>
      </section>

      {/* Copias de seguridad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Copias de seguridad
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una copia de seguridad permite disponer de una copia adicional de
          información importante. Puede ser útil ante una eliminación
          accidental, una falla del dispositivo o un incidente de seguridad.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            ¿Qué información puede respaldarse?
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Documentos administrativos.</li>
            <li>Planillas de cálculo.</li>
            <li>Presentaciones.</li>
            <li>Imágenes y recursos de trabajo.</li>
            <li>Información importante de proyectos.</li>
          </ul>
        </div>
      </section>

      {/* Equipos compartidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso seguro de equipos compartidos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En algunos lugares de trabajo, varias personas pueden utilizar un
          mismo equipo. En estos casos es especialmente importante proteger las
          cuentas y la información almacenada.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Bloquear el equipo cuando se abandona el puesto.</li>
            <li>Cerrar las sesiones cuando corresponda.</li>
            <li>No guardar contraseñas en equipos compartidos sin autorización.</li>
            <li>No dejar documentos confidenciales abiertos.</li>
            <li>No conectar dispositivos desconocidos al equipo.</li>
          </ul>
        </div>
      </section>

      {/* Información confidencial */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Protección de información confidencial
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La información utilizada en una organización puede tener diferentes
          niveles de importancia y confidencialidad. Los usuarios deben
          asegurarse de compartirla únicamente con las personas autorizadas.
        </p>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl mt-6">
          <h3 className="font-bold text-blue-900 mb-3">
            Antes de enviar información
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Verificar el destinatario.</li>
            <li>Comprobar el contenido del archivo.</li>
            <li>Confirmar que el destinatario esté autorizado.</li>
            <li>Utilizar el medio de comunicación correspondiente.</li>
          </ul>
        </div>
      </section>

      {/* Incidentes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué hacer ante un incidente?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Si detectamos una situación sospechosa, es importante actuar con
          rapidez y evitar continuar realizando acciones que puedan aumentar
          el problema.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              1. Detenerse
            </h3>

            <p className="leading-relaxed">
              No continuar abriendo enlaces, archivos o mensajes sospechosos.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              2. Proteger
            </h3>

            <p className="leading-relaxed">
              Si corresponde, cerrar la sesión o desconectar el equipo según
              las indicaciones establecidas por la organización.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              3. Informar
            </h3>

            <p className="leading-relaxed">
              Comunicar el incidente al responsable correspondiente.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Checklist de seguridad
        </h2>

        <div className="border rounded-xl p-6">
          <p className="leading-relaxed">
            Antes de comenzar una jornada de trabajo, podemos utilizar una
            lista de comprobación básica:
          </p>

          <div className="space-y-4 mt-6">
            <div className="border rounded-lg p-4">
              ☐ El sistema y las aplicaciones están actualizados.
            </div>

            <div className="border rounded-lg p-4">
              ☐ El equipo cuenta con herramientas de seguridad activas.
            </div>

            <div className="border rounded-lg p-4">
              ☐ Las contraseñas están protegidas.
            </div>

            <div className="border rounded-lg p-4">
              ☐ Las sesiones están correctamente protegidas.
            </div>

            <div className="border rounded-lg p-4">
              ☐ No existen archivos o mensajes sospechosos pendientes de abrir.
            </div>

            <div className="border rounded-lg p-4">
              ☐ La información importante cuenta con un respaldo adecuado.
            </div>
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
            Detectando malas prácticas
          </h3>

          <p className="leading-relaxed">
            Identificá las malas prácticas de seguridad presentes en las
            siguientes situaciones.
          </p>

          <ol className="list-decimal list-inside space-y-4 mt-6">
            <li>
              Un empleado utiliza la misma contraseña para todas sus cuentas.
            </li>

            <li>
              Una persona deja su computadora desbloqueada cuando se retira de
              la oficina.
            </li>

            <li>
              Un usuario descarga un programa desde una página desconocida.
            </li>

            <li>
              Un empleado abre un archivo ejecutable enviado por un remitente
              desconocido.
            </li>

            <li>
              Una persona comparte información administrativa con un
              destinatario sin verificar su dirección.
            </li>
          </ol>

          <p className="leading-relaxed mt-6">
            Para cada situación, indicá qué debería hacerse de manera diferente
            para mejorar la seguridad.
          </p>
        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora
        </h2>

        <div className="border rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Guía de seguridad para una oficina
          </h3>

          <p className="leading-relaxed">
            Elaborá una guía de seguridad destinada a los empleados de una
            oficina administrativa.
          </p>

          <p className="leading-relaxed mt-4">
            La guía deberá incluir recomendaciones relacionadas con:
          </p>

          <ul className="list-disc list-inside space-y-3 mt-4">
            <li>Navegación por Internet.</li>
            <li>Contraseñas.</li>
            <li>Correo electrónico.</li>
            <li>Archivos y descargas.</li>
            <li>Conexiones seguras.</li>
            <li>Firewall.</li>
            <li>Actualizaciones.</li>
            <li>Copias de seguridad.</li>
            <li>Protección de información confidencial.</li>
            <li>Respuesta ante incidentes.</li>
          </ul>
        </div>
      </section>

      {/* Desafío integrador */}
      <section className="border-l-4 border-blue-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Desafío Integrador
        </h2>

        <p className="leading-relaxed">
          Diseñá un <strong>“Decálogo de Seguridad Informática”</strong> para
          una oficina administrativa.
        </p>

        <p className="leading-relaxed mt-4">
          Deberá contener exactamente <strong>10 reglas</strong> que todo
          empleado debería cumplir para utilizar Internet y los recursos
          informáticos de manera segura.
        </p>

        <p className="leading-relaxed mt-4">
          Cada regla deberá estar acompañada por una breve explicación de su
          importancia y por un ejemplo de una situación laboral en la que se
          aplique.
        </p>
      </section>

      {/* Cierre */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Para recordar
        </h2>

        <div className="border rounded-xl p-6">
          <p className="leading-relaxed">
            La seguridad informática es una responsabilidad compartida. Las
            herramientas de protección son importantes, pero las decisiones
            que tomamos como usuarios son una parte fundamental de la
            seguridad.
          </p>

          <p className="leading-relaxed mt-4">
            <strong>
              Verificar antes de hacer clic, proteger la información y actuar
              con responsabilidad son hábitos esenciales para trabajar de
              manera segura en Internet.
            </strong>
          </p>
        </div>
      </section>
    </div>
  );
}