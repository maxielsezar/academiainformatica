export default function SoftwarePage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Software y Sistema Operativo
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El software está formado por el conjunto de programas,
          aplicaciones e instrucciones que permiten utilizar una computadora
          y realizar diferentes tareas.
          <br /><br />
          Mientras que el hardware representa los componentes físicos del
          equipo, el software proporciona las instrucciones necesarias para
          que esos componentes puedan funcionar y ser utilizados por las
          personas.
        </p>
      </section>

      {/* ¿Qué es el software? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el Software?
        </h2>

        <div className="border p-6 rounded-xl">
          El <strong>software</strong> es el conjunto de programas,
          aplicaciones e instrucciones que permiten controlar el
          funcionamiento de una computadora.
          <br /><br />
          El software no es un componente físico que podamos tocar.
          Se encuentra almacenado en diferentes dispositivos y es ejecutado
          por el hardware de la computadora.
          <br /><br />
          Por ejemplo, Windows, Microsoft Word, Excel, los navegadores web
          y los programas de correo electrónico son diferentes tipos de
          software.
        </div>
      </section>

      {/* Relación hardware software */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relación entre Hardware y Software
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El hardware y el software dependen uno del otro para que una
          computadora pueda funcionar correctamente.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="mb-2">
            <strong>Hardware</strong>
          </p>
          Es la parte física de la computadora, como el procesador,
          la memoria RAM, el teclado y el monitor.

          <br /><br />

          <p className="mb-2">
            <strong>Software</strong>
          </p>
          Es la parte lógica formada por programas e instrucciones que
          indican al hardware qué tareas debe realizar.

          <br /><br />

          <p className="mb-2">
            <strong>Ejemplo</strong>
          </p>

          Cuando abrimos un documento de texto, el software utilizado
          envía instrucciones al hardware. El procesador ejecuta esas
          instrucciones, la memoria RAM mantiene temporalmente los datos
          y el monitor muestra el documento en pantalla.

        </div>
      </section>

      {/* Tipos de software */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Software
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El software puede clasificarse en diferentes categorías según
          la función que cumple dentro de un sistema informático.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Software de Sistema
            </p>

            Es el software encargado de administrar los recursos de la
            computadora y proporcionar una plataforma para ejecutar
            otros programas.

            <br /><br />

            <strong>Ejemplos:</strong>

            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Windows.</li>
              <li>Linux.</li>
              <li>macOS.</li>
              <li>Controladores de dispositivos.</li>
            </ul>
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Software de Aplicación
            </p>

            Son programas diseñados para ayudar al usuario a realizar
            tareas específicas.

            <br /><br />

            <strong>Ejemplos:</strong>

            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Microsoft Word.</li>
              <li>Microsoft Excel.</li>
              <li>Navegadores web.</li>
              <li>Programas de edición.</li>
            </ul>
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Software de Programación
            </p>

            Está formado por herramientas utilizadas para desarrollar
            otros programas y aplicaciones.

            <br /><br />

            <strong>Ejemplos:</strong>

            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Editores de código.</li>
              <li>Compiladores.</li>
              <li>Intérpretes.</li>
              <li>Entornos de desarrollo.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Sistema operativo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Sistema Operativo?
        </h2>

        <div className="border p-6 rounded-xl">
          El <strong>sistema operativo</strong> es el software principal
          de una computadora. Se encarga de administrar los recursos del
          equipo y permite que el usuario pueda interactuar con el sistema.
          <br /><br />
          También proporciona los servicios necesarios para que otros
          programas puedan ejecutarse correctamente.
          <br /><br />
          Algunos ejemplos de sistemas operativos son
          <strong> Windows, Linux, macOS, Android e iOS</strong>.
        </div>
      </section>

      {/* Funciones del sistema operativo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Funciones del Sistema Operativo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El sistema operativo cumple diferentes funciones que permiten
          utilizar la computadora de manera eficiente.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Administrar el procesador y los recursos del sistema.</li>
          <li>Gestionar la memoria RAM.</li>
          <li>Administrar archivos y carpetas.</li>
          <li>Controlar dispositivos de entrada y salida.</li>
          <li>Permitir la instalación y ejecución de programas.</li>
          <li>Gestionar usuarios y permisos.</li>
          <li>Proporcionar una interfaz para interactuar con la computadora.</li>
          <li>Administrar las conexiones de red.</li>
        </ul>
      </section>

      {/* Windows */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Microsoft Windows
        </h2>

        <div className="border p-6 rounded-xl">
          <strong>Windows</strong> es un sistema operativo desarrollado
          por Microsoft y es utilizado ampliamente en computadoras
          personales y entornos laborales.
          <br /><br />
          Su interfaz gráfica permite realizar tareas mediante ventanas,
          iconos y menús, facilitando el uso de la computadora.
          <br /><br />
          En un entorno administrativo, Windows proporciona herramientas
          para organizar archivos, administrar dispositivos, instalar
          programas y configurar diferentes aspectos del equipo.
        </div>
      </section>

      {/* Programas y aplicaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Programas y Aplicaciones
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las aplicaciones son programas creados para realizar tareas
          específicas. En un entorno de administración y gestión se
          utilizan diferentes tipos de aplicaciones para mejorar la
          productividad.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="mb-2">
            <strong>Procesadores de texto</strong>
          </p>
          Permiten crear y editar documentos, cartas, informes y otros
          documentos administrativos.

          <br /><br />

          <p className="mb-2">
            <strong>Planillas de cálculo</strong>
          </p>
          Permiten realizar cálculos, organizar datos y crear gráficos.

          <br /><br />

          <p className="mb-2">
            <strong>Navegadores web</strong>
          </p>
          Permiten acceder a sitios y servicios disponibles en Internet.

          <br /><br />

          <p className="mb-2">
            <strong>Aplicaciones de comunicación</strong>
          </p>
          Facilitan el envío y recepción de mensajes, correos electrónicos
          y la realización de videollamadas.

          <br /><br />

          <p className="mb-2">
            <strong>Programas de seguridad</strong>
          </p>
          Ayudan a proteger el equipo y la información frente a diferentes
          amenazas informáticas.

        </div>
      </section>

      {/* Instalación de software */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Instalación y Desinstalación de Programas
        </h2>

        <div className="border p-6 rounded-xl">
          La instalación de un programa consiste en incorporar el software
          al sistema para que pueda ser utilizado.
          <br /><br />
          Para instalar un programa es importante obtenerlo desde una
          fuente confiable y verificar que sea compatible con el sistema
          operativo.
          <br /><br />
          La desinstalación permite eliminar programas que ya no son
          necesarios. Es recomendable utilizar las herramientas proporcionadas
          por el propio sistema operativo para realizar este proceso.
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas con el Software
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El uso responsable del software permite mantener la computadora
          segura, actualizada y funcionando correctamente.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Instalar programas desde fuentes confiables.</li>
          <li>Mantener actualizado el sistema operativo.</li>
          <li>Actualizar regularmente las aplicaciones.</li>
          <li>Evitar instalar programas desconocidos.</li>
          <li>Utilizar software legal y con licencia correspondiente.</li>
          <li>Desinstalar programas que ya no sean necesarios.</li>
          <li>Realizar copias de seguridad de información importante.</li>
          <li>Utilizar herramientas de seguridad informática.</li>
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
            Explicar con tus propias palabras qué es el software y cuál
            es su diferencia principal con el hardware.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Clasificar los siguientes ejemplos según el tipo de software:
            Windows, Microsoft Word, Excel, Linux y un editor de código.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Investigar qué sistema operativo utiliza la computadora que
            utilizas habitualmente e indicar qué versión tiene instalada.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Realizar una lista de cinco programas instalados en tu
            computadora y explicar para qué se utiliza cada uno.
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
          computadora nueva para realizar tareas administrativas.
          <br /><br />

          Deberás preparar el equipo para comenzar a trabajar.
          <br /><br />

          Identifica:

          <br /><br />

          ✔ Qué sistema operativo debería tener instalado. <br />
          ✔ Qué programas utilizarías para crear documentos. <br />
          ✔ Qué aplicación utilizarías para realizar cálculos. <br />
          ✔ Qué navegador utilizarías para acceder a Internet. <br />
          ✔ Qué herramientas utilizarías para comunicarte por correo electrónico. <br />
          ✔ Qué medidas aplicarías para mantener el software actualizado y seguro.
          <br /><br />

          Finalmente, explica por qué es importante utilizar software
          confiable y mantener actualizado el sistema operativo.
        </div>
      </section>

    </div>
  );
}