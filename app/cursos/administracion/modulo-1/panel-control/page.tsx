export default function PanelControlPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Panel de Control de Windows
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El Panel de control es una herramienta de Windows que permite
          acceder a diferentes opciones de configuración y administración
          del sistema operativo.
          <br /><br />
          Desde allí es posible modificar aspectos relacionados con los
          dispositivos, programas, cuentas de usuario, redes, seguridad
          y diferentes características del sistema.
          <br /><br />
          Aunque las versiones modernas de Windows incorporan la aplicación
          Configuración como herramienta principal, el Panel de control
          continúa siendo importante para comprender y administrar
          diferentes opciones del sistema.
        </p>
      </section>

      {/* ¿Qué es? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el Panel de Control?
        </h2>

        <div className="border p-6 rounded-xl">
          El <strong>Panel de control</strong> es una herramienta que
          reúne diferentes opciones para configurar el funcionamiento
          de Windows y administrar determinados aspectos de la computadora.
          <br /><br />
          Desde sus diferentes categorías se pueden realizar tareas de
          configuración y mantenimiento del sistema.
          <br /><br />
          Por ejemplo, permite acceder a opciones relacionadas con
          programas instalados, dispositivos, cuentas de usuario y
          conexiones de red.
        </div>
      </section>

      {/* Acceso */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Abrir el Panel de Control
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Existen diferentes formas de acceder al Panel de control.
          Una de las más sencillas es utilizar la búsqueda del sistema.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="mb-4">
            <strong>Opción 1: Desde el menú Inicio</strong>
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>Abrir el menú Inicio.</li>
            <li>Escribir "Panel de control" en el buscador.</li>
            <li>Seleccionar la aplicación correspondiente.</li>
          </ol>

          <br />

          <p className="mb-4">
            <strong>Opción 2: Desde el cuadro Ejecutar</strong>
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>Presionar las teclas Windows + R.</li>
            <li>Escribir <strong>control</strong>.</li>
            <li>Presionar Enter.</li>
          </ol>

        </div>
      </section>

      {/* Vista del panel */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Vistas del Panel de Control
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El Panel de control puede mostrar sus opciones utilizando
          diferentes formas de organización. La vista seleccionada
          determina cómo se presentan las herramientas disponibles.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Vista por categorías
            </p>

            Las herramientas se agrupan en categorías relacionadas.
            Esta vista facilita la búsqueda de opciones para usuarios
            que no conocen exactamente el nombre de la herramienta
            que necesitan.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Iconos grandes
            </p>

            Muestra las herramientas disponibles utilizando iconos
            de mayor tamaño.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Iconos pequeños
            </p>

            Muestra una lista más compacta con las diferentes herramientas
            disponibles en el Panel de control.
          </div>

        </div>
      </section>

      {/* Categorías */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Principales Categorías
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Dependiendo de la versión de Windows instalada, las opciones
          disponibles pueden variar. Entre las categorías más habituales
          se encuentran las siguientes:
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Sistema y seguridad
            </p>

            Permite acceder a diferentes herramientas relacionadas con
            la seguridad y el mantenimiento del sistema.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Red e Internet
            </p>

            Incluye opciones relacionadas con las conexiones de red
            y diferentes configuraciones de conectividad.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Hardware y sonido
            </p>

            Permite acceder a diferentes configuraciones relacionadas
            con dispositivos, impresoras y sonido.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Programas
            </p>

            Permite administrar determinados aspectos relacionados con
            los programas instalados en la computadora.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Cuentas de usuario
            </p>

            Permite acceder a opciones relacionadas con las cuentas
            y la administración de usuarios.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Apariencia y personalización
            </p>

            Incluye diferentes opciones relacionadas con la apariencia
            y personalización del entorno de Windows.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Reloj y región
            </p>

            Permite configurar diferentes opciones relacionadas con
            la fecha, la hora y la configuración regional.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Accesibilidad
            </p>

            Incluye herramientas y opciones destinadas a facilitar
            el uso de la computadora para diferentes necesidades.
          </div>

        </div>
      </section>

      {/* Programas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Administración de Programas
        </h2>

        <div className="border p-6 rounded-xl">
          Desde las herramientas disponibles en el Panel de control se
          pueden administrar determinados programas instalados en el
          sistema.
          <br /><br />
          Una de las tareas más habituales es la desinstalación de
          programas que ya no son necesarios.
          <br /><br />
          Es recomendable eliminar los programas utilizando las
          herramientas proporcionadas por Windows y evitar borrar
          manualmente archivos del sistema.
        </div>
      </section>

      {/* Dispositivos e impresoras */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Dispositivos e Impresoras
        </h2>

        <div className="border p-6 rounded-xl">
          Windows permite administrar diferentes dispositivos conectados
          a la computadora, como impresoras, teclados, mouse y otros
          periféricos.
          <br /><br />
          Desde las herramientas de administración de dispositivos se
          puede consultar información sobre el hardware instalado y
          realizar diferentes tareas de configuración.
          <br /><br />
          En un entorno administrativo, esta función resulta especialmente
          importante para trabajar con impresoras y otros dispositivos
          utilizados habitualmente en una oficina.
        </div>
      </section>

      {/* Cuentas de usuario */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cuentas de Usuario
        </h2>

        <div className="border p-6 rounded-xl">
          Las cuentas de usuario permiten que diferentes personas utilicen
          una misma computadora manteniendo configuraciones y permisos
          determinados.
          <br /><br />
          Dependiendo de la configuración del sistema, una cuenta puede
          tener diferentes niveles de permisos.
          <br /><br />
          Una cuenta con permisos administrativos tiene mayor capacidad
          para modificar configuraciones e instalar software.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Permiten identificar a diferentes usuarios.</li>
          <li>Ayudan a controlar el acceso al sistema.</li>
          <li>Permiten utilizar diferentes configuraciones.</li>
          <li>Facilitan la administración de permisos.</li>
        </ul>
      </section>

      {/* Red */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Configuración de Red
        </h2>

        <div className="border p-6 rounded-xl">
          Las opciones de red permiten consultar y administrar diferentes
          aspectos relacionados con la conexión de la computadora a una
          red.
          <br /><br />
          Una computadora puede conectarse mediante una red cableada
          utilizando Ethernet o mediante una conexión inalámbrica Wi-Fi.
          <br /><br />
          En una oficina, la configuración de red permite acceder a
          Internet y, dependiendo de la infraestructura, compartir
          recursos como impresoras y archivos.
        </div>
      </section>

      {/* Fecha y hora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fecha, Hora y Configuración Regional
        </h2>

        <div className="border p-6 rounded-xl">
          Windows permite configurar diferentes aspectos relacionados con
          la fecha, la hora y la región.
          <br /><br />
          Estas configuraciones pueden influir en la forma en que se
          muestran las fechas, los números y otros datos en diferentes
          aplicaciones.
          <br /><br />
          En tareas administrativas es importante mantener correctamente
          configuradas la fecha y la hora del equipo.
        </div>
      </section>

      {/* Configuración vs Panel */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Panel de Control y Configuración
        </h2>

        <div className="border p-6 rounded-xl">
          Las versiones actuales de Windows incluyen la aplicación
          <strong> Configuración</strong>, que centraliza muchas opciones
          modernas para administrar el sistema.
          <br /><br />
          El Panel de control continúa disponible para determinadas
          herramientas y configuraciones tradicionales.
          <br /><br />
          Es importante conocer ambas herramientas, ya que dependiendo
          de la tarea que se quiera realizar, una determinada opción
          puede encontrarse en una u otra.
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas al Configurar Windows
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las modificaciones realizadas en la configuración del sistema
          pueden afectar el funcionamiento de la computadora. Por eso,
          es importante actuar con precaución.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Modificar únicamente las opciones que se conocen.</li>
          <li>No eliminar componentes del sistema sin conocer su función.</li>
          <li>Utilizar cuentas con permisos adecuados.</li>
          <li>Mantener actualizado el sistema operativo.</li>
          <li>Verificar los cambios realizados antes de confirmar.</li>
          <li>Consultar documentación cuando una configuración no sea conocida.</li>
          <li>Evitar modificar configuraciones críticas innecesariamente.</li>
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
            Abrir el Panel de control utilizando el buscador de Windows
            y explorar las diferentes categorías disponibles.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Cambiar la vista del Panel de control entre categorías,
            iconos grandes e iconos pequeños.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Identificar qué herramienta utilizarías para administrar
            programas instalados y cuál utilizarías para configurar
            dispositivos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Investigar qué opciones de configuración relacionadas con
            la red se encuentran disponibles en tu computadora.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Comparar las opciones disponibles en el Panel de control
            con las opciones de la aplicación Configuración de Windows.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imagina que comienzas a trabajar en una oficina y recibes una
          computadora que debe ser preparada para realizar tareas
          administrativas.
          <br /><br />

          Antes de comenzar a trabajar, debes revisar diferentes aspectos
          de la configuración del equipo.
          <br /><br />

          Identifica:

          <br /><br />

          ✔ Cómo comprobar qué programas están instalados. <br />
          ✔ Cómo revisar los dispositivos conectados a la computadora. <br />
          ✔ Cómo verificar la configuración de fecha y hora. <br />
          ✔ Cómo consultar las opciones relacionadas con la conexión de red. <br />
          ✔ Cómo identificar las cuentas de usuario disponibles. <br />
          ✔ Qué herramienta utilizarías para modificar cada una de estas opciones.
          <br /><br />

          Finalmente, explica por qué es importante conocer las herramientas
          de configuración de Windows para desempeñarse correctamente en
          un entorno administrativo.
        </div>
      </section>

    </div>
  );
}