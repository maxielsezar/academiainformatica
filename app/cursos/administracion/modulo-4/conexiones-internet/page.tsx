export default function ConexionesInternetPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Conexiones a Internet
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Para acceder a Internet, los dispositivos necesitan establecer una
          conexión con una red. Esta conexión puede realizarse mediante
          diferentes tecnologías, siendo las más habituales las conexiones
          inalámbricas mediante Wi-Fi y las conexiones cableadas mediante
          Ethernet.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En una oficina, hogar o institución, estas conexiones suelen
          organizarse mediante dispositivos de red como routers y switches,
          que permiten comunicar computadoras, teléfonos, impresoras y otros
          equipos.
        </p>
      </section>

      {/* ¿Qué es una conexión a Internet? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una conexión a Internet?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una conexión a Internet permite que un dispositivo pueda comunicarse
          con otros equipos y acceder a servicios disponibles en Internet,
          como páginas web, correo electrónico, almacenamiento en la nube,
          videollamadas y plataformas educativas.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplo de una conexión
          </h3>

          <p className="leading-relaxed">
            Una computadora puede conectarse mediante un cable Ethernet a un
            router. El router se comunica con el proveedor de Internet y
            permite que la computadora pueda acceder a páginas web y otros
            servicios.
          </p>
        </div>
      </section>

      {/* Wi-Fi */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conexión Wi-Fi
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Wi-Fi es una tecnología que permite conectar dispositivos a una red
          sin utilizar cables de red. La comunicación se realiza mediante
          señales de radio.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Es utilizada habitualmente para conectar notebooks, teléfonos
          celulares, tablets, televisores inteligentes y otros dispositivos.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Ventajas del Wi-Fi
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>No requiere cables para cada dispositivo.</li>
            <li>Permite conectar dispositivos móviles.</li>
            <li>Facilita la instalación de una red.</li>
            <li>Permite conectar varios dispositivos simultáneamente.</li>
            <li>Es práctico para hogares, oficinas y espacios educativos.</li>
          </ul>
        </div>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Desventajas del Wi-Fi
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>La señal puede disminuir con la distancia.</li>
            <li>Las paredes y obstáculos pueden afectar la señal.</li>
            <li>Puede sufrir interferencias.</li>
            <li>La velocidad puede variar dependiendo de las condiciones.</li>
            <li>Una red inalámbrica mal configurada puede presentar riesgos de seguridad.</li>
          </ul>
        </div>
      </section>

      {/* Ethernet */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conexión mediante cable Ethernet
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Ethernet es una tecnología de comunicación de redes que utiliza
          principalmente cables para conectar dispositivos. En una oficina es
          habitual encontrar computadoras conectadas mediante cables Ethernet
          a un switch o router.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Ventajas de Ethernet
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Ofrece una conexión estable.</li>
            <li>Reduce las interferencias propias de las conexiones inalámbricas.</li>
            <li>Es apropiada para computadoras de escritorio.</li>
            <li>Permite conectar equipos mediante una infraestructura de red.</li>
            <li>Es utilizada frecuentemente en oficinas y empresas.</li>
          </ul>
        </div>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Elementos de una conexión Ethernet
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Computadora o dispositivo de red.</li>
            <li>Tarjeta o adaptador de red.</li>
            <li>Cable Ethernet.</li>
            <li>Conector RJ45.</li>
            <li>Switch o router.</li>
          </ul>
        </div>
      </section>

      {/* Comparación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Wi-Fi vs. Ethernet
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border rounded-xl">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-bold text-blue-900">
                  Característica
                </th>
                <th className="text-left p-4 font-bold text-blue-900">
                  Wi-Fi
                </th>
                <th className="text-left p-4 font-bold text-blue-900">
                  Ethernet
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-4">Medio</td>
                <td className="p-4">Inalámbrico</td>
                <td className="p-4">Cable</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Movilidad</td>
                <td className="p-4">Alta</td>
                <td className="p-4">Limitada por el cable</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Estabilidad</td>
                <td className="p-4">Puede variar</td>
                <td className="p-4">Generalmente estable</td>
              </tr>

              <tr>
                <td className="p-4">Uso habitual</td>
                <td className="p-4">
                  Celulares, notebooks y tablets
                </td>
                <td className="p-4">
                  PC, impresoras y equipos de oficina
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Router */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Router
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El router es un dispositivo que permite conectar diferentes redes y
          dirigir el tráfico de datos entre ellas. En una red doméstica o de
          oficina, normalmente permite comunicar los dispositivos de la red
          local con Internet.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Funciones habituales de un router
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Conectar la red local con Internet.</li>
            <li>Dirigir los datos hacia su destino.</li>
            <li>Proporcionar conectividad Wi-Fi en los modelos que incluyen esta función.</li>
            <li>Asignar direcciones IP mediante DHCP.</li>
            <li>Permitir configurar diferentes parámetros de la red.</li>
            <li>Aplicar determinadas funciones de seguridad y filtrado.</li>
          </ul>
        </div>
      </section>

      {/* Switch */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Switch
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un switch es un dispositivo utilizado principalmente para conectar
          varios equipos dentro de una misma red local. Por ejemplo, en una
          oficina puede utilizarse para conectar varias computadoras,
          impresoras y otros dispositivos mediante cables Ethernet.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Si una oficina necesita conectar diez computadoras mediante cable,
            puede utilizar un switch con suficientes puertos Ethernet. Cada
            computadora se conecta al switch y este permite la comunicación
            entre los dispositivos de la red local.
          </p>
        </div>
      </section>

      {/* Router vs Switch */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Router y Switch: ¿son lo mismo?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          No. Aunque ambos son dispositivos de red, cumplen funciones
          diferentes.
        </p>

        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse border rounded-xl">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-bold text-blue-900">
                  Router
                </th>
                <th className="text-left p-4 font-bold text-blue-900">
                  Switch
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-4">
                  Conecta diferentes redes.
                </td>
                <td className="p-4">
                  Conecta dispositivos dentro de una red local.
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-4">
                  Puede conectar la red local con Internet.
                </td>
                <td className="p-4">
                  Facilita la comunicación entre equipos de la LAN.
                </td>
              </tr>

              <tr>
                <td className="p-4">
                  Puede proporcionar Wi-Fi.
                </td>
                <td className="p-4">
                  Generalmente utiliza conexiones Ethernet.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Esquema */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de red de una oficina
        </h2>

        <div className="border rounded-xl p-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="border rounded-xl px-6 py-4 font-semibold">
              Internet
            </div>

            <div className="text-blue-700 text-2xl">↓</div>

            <div className="border rounded-xl px-6 py-4 font-semibold">
              Router
            </div>

            <div className="text-blue-700 text-2xl">↓</div>

            <div className="border rounded-xl px-6 py-4 font-semibold">
              Switch
            </div>

            <div className="text-blue-700 text-2xl">↓</div>

            <div className="grid sm:grid-cols-3 gap-4 w-full">
              <div className="border rounded-xl p-4">
                PC 1
                <p className="text-sm mt-2">Ethernet</p>
              </div>

              <div className="border rounded-xl p-4">
                PC 2
                <p className="text-sm mt-2">Ethernet</p>
              </div>

              <div className="border rounded-xl p-4">
                Impresora
                <p className="text-sm mt-2">Ethernet</p>
              </div>
            </div>

            <div className="border rounded-xl px-6 py-4 mt-4">
              Notebook / Celular
              <p className="text-sm mt-2">Wi-Fi</p>
            </div>
          </div>
        </div>

        <p className="leading-relaxed max-w-3xl mt-6">
          En este ejemplo, el router proporciona la conexión entre la red
          local e Internet. El switch permite conectar diferentes equipos
          mediante Ethernet, mientras que otros dispositivos pueden acceder a
          la red utilizando Wi-Fi.
        </p>
      </section>

      {/* Red local */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Red local y conexión a Internet
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Es importante diferenciar una red local de Internet. Una red local
          permite conectar dispositivos dentro de un espacio determinado,
          como una vivienda, una oficina o una institución.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Internet, en cambio, es una red global que permite la comunicación
          entre redes y dispositivos de todo el mundo.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Dos computadoras conectadas al mismo switch pueden comunicarse
            dentro de la red local aunque el acceso a Internet esté
            temporalmente desconectado.
          </p>
        </div>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en el entorno laboral
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En una oficina, conocer las diferentes formas de conexión permite
          identificar problemas básicos de conectividad y comprender cómo se
          comunican los equipos.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>
            Comprobar si una computadora está conectada mediante Wi-Fi o Ethernet.
          </li>
          <li>
            Verificar que el cable Ethernet esté correctamente conectado.
          </li>
          <li>
            Comprobar si otros equipos tienen acceso a Internet.
          </li>
          <li>
            Identificar si el problema afecta a un dispositivo o a toda la red.
          </li>
          <li>
            Reconocer el router y el switch dentro de una instalación.
          </li>
          <li>
            Informar correctamente un problema de conectividad al responsable técnico.
          </li>
        </ul>
      </section>

      {/* Actividad práctica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad práctica
        </h2>

        <div className="border rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Identificando conexiones
          </h3>

          <p className="leading-relaxed">
            Observá los equipos disponibles en tu hogar, institución o aula e
            identificá cómo se conectan a la red.
          </p>

          <ol className="list-decimal list-inside space-y-3 mt-6">
            <li>Identificá una computadora conectada a Internet.</li>
            <li>Determiná si utiliza Wi-Fi o Ethernet.</li>
            <li>Buscá el router de la red.</li>
            <li>Identificá si existe un switch.</li>
            <li>Registrá qué dispositivos están conectados mediante cable.</li>
            <li>Registrá qué dispositivos utilizan Wi-Fi.</li>
          </ol>

          <p className="leading-relaxed mt-6">
            Finalmente, realizá un pequeño esquema indicando cómo están
            conectados los dispositivos.
          </p>
        </div>
      </section>

      {/* Situaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Analizamos situaciones
        </h2>

        <div className="border rounded-xl p-6 space-y-6">
          <div>
            <h3 className="font-bold text-blue-900">
              Situación 1
            </h3>

            <p className="leading-relaxed mt-2">
              Una computadora conectada mediante Wi-Fi no tiene Internet,
              mientras que otras computadoras de la oficina sí tienen acceso.
            </p>

            <p className="leading-relaxed mt-2">
              ¿Qué elementos revisarías primero?
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900">
              Situación 2
            </h3>

            <p className="leading-relaxed mt-2">
              Varias computadoras conectadas mediante Ethernet pierden la
              conexión al mismo tiempo.
            </p>

            <p className="leading-relaxed mt-2">
              ¿Podría existir un problema en el switch o router?
              ¿Por qué?
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900">
              Situación 3
            </h3>

            <p className="leading-relaxed mt-2">
              Una oficina necesita conectar diez computadoras mediante cable y
              además permitir que notebooks y celulares se conecten de forma
              inalámbrica.
            </p>

            <p className="leading-relaxed mt-2">
              ¿Qué dispositivos de red serían necesarios?
            </p>
          </div>
        </div>
      </section>

      {/* Desafío */}
      <section>
        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Desafío Integrador
          </h2>

          <p className="leading-relaxed">
            Diseñá la red de una pequeña oficina con cinco computadoras,
            una impresora, dos notebooks y cuatro teléfonos celulares.
          </p>

          <p className="leading-relaxed mt-4">
            Indicá qué dispositivos conectarías mediante Ethernet, cuáles
            utilizarían Wi-Fi y dónde ubicarías el router y el switch.
          </p>

          <p className="leading-relaxed mt-4">
            Finalmente, realizá un esquema de la red utilizando flechas para
            representar las conexiones y agregá una breve explicación de la
            función que cumple cada dispositivo.
          </p>
        </div>
      </section>

      {/* Cierre */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Para recordar
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>
            Wi-Fi permite conectar dispositivos de forma inalámbrica.
          </li>
          <li>
            Ethernet utiliza cables para establecer la conexión de red.
          </li>
          <li>
            El router permite conectar diferentes redes y acceder a Internet.
          </li>
          <li>
            El switch permite conectar varios dispositivos dentro de una red local.
          </li>
          <li>
            Una misma red puede utilizar simultáneamente Wi-Fi y Ethernet.
          </li>
          <li>
            Conocer estos elementos ayuda a identificar problemas básicos de conectividad.
          </li>
        </ul>
      </section>
    </div>
  );
}