export default function FirewallsPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Firewalls
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Un firewall, también llamado cortafuegos, es un mecanismo de
          seguridad que controla el tráfico de red que entra y sale de un
          dispositivo o de una red. Su objetivo es permitir las comunicaciones
          autorizadas y bloquear aquellas que puedan representar un riesgo.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Los firewalls son una herramienta importante para proteger
          computadoras, redes y sistemas conectados a Internet, especialmente
          en entornos laborales donde se intercambia información
          constantemente.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un firewall?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un firewall funciona como una barrera entre una red confiable y otras
          redes o conexiones externas. Analiza determinadas comunicaciones y
          aplica reglas para decidir si permite o bloquea el tráfico.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            En términos simples
          </h3>

          <p className="leading-relaxed">
            Podemos imaginar un firewall como un puesto de control. Cada vez
            que se intenta establecer una comunicación, se analiza si cumple
            con las reglas establecidas y, según corresponda, se permite o se
            bloquea.
          </p>
        </div>
      </section>

      {/* Cómo funciona */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo funciona un firewall?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El firewall observa el tráfico de red y utiliza diferentes criterios
          para determinar qué comunicaciones están permitidas.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              1. Recibe una conexión
            </h3>

            <p className="leading-relaxed">
              Un programa o dispositivo intenta comunicarse con otro equipo o
              servicio a través de la red.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              2. Analiza el tráfico
            </h3>

            <p className="leading-relaxed">
              El firewall comprueba diferentes características de la
              comunicación según las reglas configuradas.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              3. Permite o bloquea
            </h3>

            <p className="leading-relaxed">
              Si la comunicación cumple con las condiciones establecidas, se
              permite. En caso contrario, puede ser bloqueada.
            </p>
          </div>
        </div>
      </section>

      {/* Entrada y salida */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tráfico entrante y saliente
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un firewall puede controlar tanto las conexiones que intentan entrar
          en un equipo como las comunicaciones que se originan desde él.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Tráfico entrante
            </h3>

            <p className="leading-relaxed">
              Son las conexiones que intentan comunicarse con nuestro equipo
              desde otro dispositivo o servidor.
            </p>

            <p className="mt-4 leading-relaxed">
              El firewall puede analizar estas conexiones y bloquear aquellas
              que no estén autorizadas.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Tráfico saliente
            </h3>

            <p className="leading-relaxed">
              Son las conexiones que se originan desde nuestro equipo hacia
              otros dispositivos o servicios.
            </p>

            <p className="mt-4 leading-relaxed">
              También pueden existir reglas que controlen qué aplicaciones
              tienen permitido comunicarse con Internet.
            </p>
          </div>
        </div>
      </section>

      {/* Reglas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Reglas de firewall
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las reglas determinan qué tipos de tráfico pueden pasar y cuáles
          deben ser bloqueados. Estas reglas pueden establecerse de acuerdo con
          diferentes características de la comunicación.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Algunos criterios utilizados
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Dirección IP de origen.</li>
            <li>Dirección IP de destino.</li>
            <li>Puerto utilizado.</li>
            <li>Protocolo de comunicación.</li>
            <li>Aplicación que genera la comunicación.</li>
            <li>Dirección o red desde la que se origina el tráfico.</li>
          </ul>
        </div>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de firewall
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los firewalls pueden implementarse de diferentes maneras dependiendo
          del entorno en el que se utilizan.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Firewall de software
            </h3>

            <p className="leading-relaxed">
              Es un programa que se ejecuta en una computadora o servidor y
              controla determinadas comunicaciones de red.
            </p>

            <p className="mt-4 leading-relaxed">
              Es habitual encontrar este tipo de protección integrada en los
              sistemas operativos.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Firewall de hardware
            </h3>

            <p className="leading-relaxed">
              Es un dispositivo físico que puede controlar el tráfico entre
              diferentes redes.
            </p>

            <p className="mt-4 leading-relaxed">
              Es frecuente encontrarlo integrado en dispositivos de red,
              routers u otros equipos destinados a la protección de redes.
            </p>
          </div>
        </div>
      </section>

      {/* Firewall del sistema operativo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Firewall de Windows
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Windows incorpora herramientas de firewall que permiten controlar
          determinadas conexiones de red y establecer reglas para aplicaciones
          y servicios.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Desde el firewall se pueden gestionar aspectos como:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Estado de la protección de red.</li>
            <li>Aplicaciones permitidas.</li>
            <li>Reglas de entrada.</li>
            <li>Reglas de salida.</li>
            <li>Configuraciones relacionadas con diferentes redes.</li>
          </ul>
        </div>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl mt-6">
          <p className="leading-relaxed">
            <strong>Importante:</strong> no es recomendable desactivar el
            firewall simplemente para solucionar un problema de conexión. Si
            una aplicación necesita comunicarse, primero se debe analizar el
            problema y configurar una excepción o regla adecuada cuando
            corresponda.
          </p>
        </div>
      </section>

      {/* Firewall y antivirus */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Firewall y antivirus
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El firewall y el antivirus cumplen funciones relacionadas con la
          seguridad, pero no son lo mismo.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Firewall
            </h3>

            <p className="leading-relaxed">
              Controla determinadas comunicaciones y tráfico de red de acuerdo
              con reglas de seguridad.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Antivirus
            </h3>

            <p className="leading-relaxed">
              Busca y ayuda a detectar, bloquear o eliminar software malicioso
              presente o que intenta ejecutarse en el dispositivo.
            </p>
          </div>
        </div>

        <p className="leading-relaxed max-w-3xl mt-6">
          Ambas herramientas pueden complementarse, pero ninguna sustituye por
          completo las buenas prácticas de seguridad del usuario.
        </p>
      </section>

      {/* Limitaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Un firewall protege contra todas las amenazas?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          No. Un firewall es una herramienta importante de protección, pero no
          puede solucionar todos los problemas de seguridad.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            También debemos protegernos frente a:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Correos electrónicos fraudulentos.</li>
            <li>Contraseñas débiles.</li>
            <li>Descargas de archivos peligrosos.</li>
            <li>Sitios web falsos.</li>
            <li>Ingeniería social.</li>
            <li>Pérdida o robo de dispositivos.</li>
            <li>Errores cometidos por los usuarios.</li>
          </ul>
        </div>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en el ámbito laboral
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En una organización, los equipos informáticos pueden comunicarse con
          diferentes servicios internos y externos. Un firewall ayuda a
          controlar estas comunicaciones y contribuye a reducir conexiones no
          autorizadas.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Situación laboral
          </h3>

          <p className="leading-relaxed">
            Un empleado instala una aplicación necesaria para realizar una
            tarea administrativa. Al intentar utilizarla, Windows muestra una
            solicitud relacionada con el acceso a la red. Antes de permitir la
            comunicación, el usuario debe identificar la aplicación y verificar
            que provenga de una fuente confiable.
          </p>

          <p className="leading-relaxed mt-4">
            De esta manera, la seguridad se incorpora como parte del trabajo
            cotidiano y no solamente como una tarea del área técnica.
          </p>
        </div>
      </section>

      {/* Actividad práctica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad práctica
        </h2>

        <div className="border rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Analizando situaciones
          </h3>

          <p className="leading-relaxed">
            Leé las siguientes situaciones y determiná cómo podría intervenir
            un firewall.
          </p>

          <ol className="list-decimal list-inside space-y-4 mt-6">
            <li>
              Un programa desconocido intenta establecer una conexión con
              Internet.
            </li>

            <li>
              Una computadora recibe una solicitud de conexión desde otro
              dispositivo de la red.
            </li>

            <li>
              Una aplicación conocida necesita acceder a un servicio de
              Internet.
            </li>

            <li>
              Una persona desactiva el firewall porque una aplicación no
              funciona correctamente.
            </li>
          </ol>

          <p className="leading-relaxed mt-6">
            Para cada situación, explicá qué riesgo existe y qué decisión
            debería tomar el usuario.
          </p>
        </div>
      </section>

      {/* Actividad de investigación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad de investigación
        </h2>

        <div className="border rounded-xl p-6">
          <p className="leading-relaxed">
            Investigá el firewall disponible en la computadora que utilizás
            habitualmente y respondé:
          </p>

          <ul className="list-disc list-inside space-y-3 mt-6">
            <li>¿Qué firewall utiliza el sistema?</li>
            <li>¿Se encuentra activado?</li>
            <li>¿Dónde se puede consultar su configuración?</li>
            <li>¿Qué aplicaciones tienen permisos de comunicación?</li>
            <li>¿Qué recomendaciones ofrece el sistema?</li>
          </ul>

          <p className="leading-relaxed mt-6">
            Registrá las respuestas y explicá por qué es importante mantener
            activa la protección del equipo.
          </p>
        </div>
      </section>

      {/* Desafío integrador */}
      <section className="border-l-4 border-blue-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Desafío Integrador
        </h2>

        <p className="leading-relaxed">
          Elaborá una ficha informativa titulada{" "}
          <strong>“El firewall como protección del equipo”</strong>.
        </p>

        <p className="leading-relaxed mt-4">
          La ficha deberá explicar:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4">
          <li>Qué es un firewall.</li>
          <li>Cuál es su función.</li>
          <li>Qué diferencia existe entre tráfico entrante y saliente.</li>
          <li>Qué son las reglas de firewall.</li>
          <li>Qué diferencia existe entre un firewall de software y uno de hardware.</li>
          <li>Qué relación existe entre firewall y antivirus.</li>
          <li>Por qué no se debe desactivar la protección sin analizar el motivo.</li>
          <li>Qué importancia tiene el firewall en una oficina administrativa.</li>
        </ul>
      </section>
    </div>
  );
}