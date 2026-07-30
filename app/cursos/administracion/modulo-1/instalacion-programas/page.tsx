export default function InstalacionProgramasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Instalación de Programas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La instalación de programas es el proceso mediante el cual se
          incorpora una aplicación al sistema operativo para que pueda
          ser utilizada en la computadora.
          <br /><br />
          En un entorno administrativo es habitual instalar programas
          destinados a realizar tareas como procesamiento de textos,
          planillas de cálculo, gestión de documentos, comunicación,
          navegación por Internet y otras actividades laborales.
          <br /><br />
          Para realizar una instalación de forma segura es importante
          utilizar fuentes confiables, verificar los requisitos del
          programa y prestar atención a las opciones que aparecen durante
          el proceso.
        </p>
      </section>

      {/* ¿Qué es un programa? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Programa?
        </h2>

        <div className="border p-6 rounded-xl">
          Un <strong>programa</strong> es un conjunto de instrucciones
          que permite a una computadora realizar determinadas tareas.
          <br /><br />
          Existen programas destinados a diferentes actividades, como
          escribir documentos, realizar cálculos, editar imágenes,
          reproducir contenido multimedia o navegar por Internet.
          <br /><br />
          Para utilizar un programa es necesario que se encuentre
          instalado en el sistema o que pueda ejecutarse mediante otro
          mecanismo compatible con el equipo.
        </div>
      </section>

      {/* Antes de instalar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Antes de Instalar un Programa
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Antes de comenzar una instalación es recomendable verificar
          algunos aspectos para evitar problemas y garantizar que el
          programa funcione correctamente.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Verificar la fuente de descarga
            </p>

            El programa debe obtenerse desde el sitio web oficial del
            desarrollador o desde una fuente confiable.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Comprobar los requisitos del sistema
            </p>

            Es necesario verificar que la computadora cumpla con los
            requisitos mínimos de hardware y software necesarios para
            ejecutar el programa.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Revisar el espacio disponible
            </p>

            Algunos programas requieren una determinada cantidad de
            espacio libre en el disco para poder instalarse correctamente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Comprobar la compatibilidad
            </p>

            Es importante asegurarse de que el programa sea compatible
            con la versión de Windows instalada en la computadora.
          </div>

        </div>
      </section>

      {/* Fuentes confiables */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fuentes Confiables de Software
        </h2>

        <div className="border p-6 rounded-xl">
          La seguridad del equipo depende en gran medida de la procedencia
          de los programas instalados.
          <br /><br />
          Siempre que sea posible, se recomienda descargar el software
          desde la página oficial del desarrollador o utilizar plataformas
          reconocidas y confiables.
          <br /><br />
          Descargar programas desde sitios desconocidos puede aumentar
          el riesgo de instalar software malicioso o versiones modificadas.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Utilizar sitios web oficiales.</li>
          <li>Utilizar tiendas de aplicaciones confiables.</li>
          <li>Evitar páginas desconocidas o sospechosas.</li>
          <li>No descargar programas desde enlaces de origen dudoso.</li>
          <li>Comprobar que el archivo descargado corresponda al programa buscado.</li>
        </ul>
      </section>

      {/* Instalador */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          El Instalador de un Programa
        </h2>

        <div className="border p-6 rounded-xl">
          Muchos programas para Windows utilizan un archivo instalador
          que guía al usuario durante el proceso de instalación.
          <br /><br />
          Estos archivos pueden tener diferentes extensiones dependiendo
          del tipo de instalador utilizado.
          <br /><br />
          Entre los formatos más habituales se encuentran los archivos
          <strong> .exe</strong> y <strong>.msi</strong>.
          <br /><br />
          Al ejecutar un instalador, generalmente se presenta un asistente
          que permite seleccionar diferentes opciones antes de completar
          el proceso.
        </div>
      </section>

      {/* Proceso de instalación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Proceso de Instalación
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Aunque el proceso puede variar según el programa, normalmente
          una instalación sigue una serie de pasos similares.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="mb-2">
            <strong>Paso 1: Descargar el programa</strong>
          </p>

          Obtener el instalador desde una fuente confiable.

          <br /><br />

          <p className="mb-2">
            <strong>Paso 2: Ejecutar el instalador</strong>
          </p>

          Abrir el archivo descargado para iniciar el asistente de instalación.

          <br /><br />

          <p className="mb-2">
            <strong>Paso 3: Aceptar las condiciones</strong>
          </p>

          Leer y aceptar, cuando corresponda, los términos y condiciones
          de la licencia del programa.

          <br /><br />

          <p className="mb-2">
            <strong>Paso 4: Seleccionar las opciones</strong>
          </p>

          Configurar las opciones disponibles, como la ubicación donde
          se instalará el programa.

          <br /><br />

          <p className="mb-2">
            <strong>Paso 5: Instalar</strong>
          </p>

          Iniciar el proceso de instalación y esperar hasta que finalice.

          <br /><br />

          <p className="mb-2">
            <strong>Paso 6: Finalizar</strong>
          </p>

          Cerrar el asistente y comprobar que el programa funcione
          correctamente.

        </div>
      </section>

      {/* Opciones de instalación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Opciones Durante la Instalación
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Algunos instaladores ofrecen diferentes opciones que deben
          revisarse antes de continuar.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Ubicación de instalación
            </p>

            Permite seleccionar la carpeta donde se almacenarán los
            archivos del programa.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Acceso directo
            </p>

            Algunos instaladores permiten crear un acceso directo
            en el escritorio o en el menú Inicio.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Componentes adicionales
            </p>

            Algunos programas permiten seleccionar qué componentes
            o características se desean instalar.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Programas adicionales
            </p>

            Es importante revisar cuidadosamente si el instalador ofrece
            instalar software adicional que no sea necesario.
          </div>

        </div>
      </section>

      {/* Permisos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Permisos de Administrador
        </h2>

        <div className="border p-6 rounded-xl">
          Algunas instalaciones requieren permisos especiales para
          realizar cambios en el sistema operativo.
          <br /><br />
          En estos casos, Windows puede solicitar autorización mediante
          el sistema de control de cuentas de usuario.
          <br /><br />
          Esta medida ayuda a evitar que programas no autorizados realicen
          modificaciones en el equipo sin conocimiento del usuario.
        </div>
      </section>

      {/* Microsoft Store */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Instalación desde Microsoft Store
        </h2>

        <div className="border p-6 rounded-xl">
          Windows ofrece la posibilidad de instalar determinadas aplicaciones
          mediante Microsoft Store.
          <br /><br />
          Este método facilita la búsqueda e instalación de aplicaciones
          compatibles con el sistema.
          <br /><br />
          Para instalar una aplicación normalmente se debe buscar su nombre,
          seleccionar la aplicación correspondiente y utilizar la opción
          disponible para iniciar la instalación.
        </div>
      </section>

      {/* Desinstalación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desinstalación de Programas
        </h2>

        <div className="border p-6 rounded-xl">
          Cuando un programa ya no es necesario, puede ser conveniente
          desinstalarlo para liberar espacio y mantener organizado el sistema.
          <br /><br />
          La desinstalación debe realizarse utilizando las herramientas
          proporcionadas por Windows o el propio desinstalador del programa.
          <br /><br />
          No se recomienda eliminar manualmente las carpetas de un programa
          para intentar desinstalarlo, ya que esto puede dejar archivos
          y configuraciones innecesarias en el sistema.
        </div>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Proceso general:
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>Abrir la configuración de aplicaciones de Windows.</li>
            <li>Localizar el programa instalado.</li>
            <li>Seleccionar la opción para desinstalarlo.</li>
            <li>Seguir las instrucciones del asistente.</li>
            <li>Reiniciar el equipo si el sistema lo solicita.</li>
          </ol>

        </div>
      </section>

      {/* Seguridad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Seguridad al Instalar Programas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La instalación de software desde fuentes no confiables puede
          representar un riesgo para la seguridad de la información.
          Algunos archivos pueden contener software malicioso.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Descargar programas desde fuentes confiables.</li>
          <li>Mantener Windows actualizado.</li>
          <li>Mantener activo el sistema de seguridad del equipo.</li>
          <li>Leer cuidadosamente las opciones del instalador.</li>
          <li>No instalar programas desconocidos sin verificar su procedencia.</li>
          <li>Evitar versiones modificadas o pirateadas de programas.</li>
          <li>Prestar atención a las extensiones de los archivos descargados.</li>
          <li>Solicitar autorización antes de instalar software en equipos de una organización.</li>
        </ul>
      </section>

      {/* Programas administrativos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Programas Utilizados en la Administración
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En un entorno administrativo pueden utilizarse diferentes tipos
          de programas para realizar tareas laborales.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Procesadores de texto
            </p>

            Permiten crear y editar cartas, informes, notas y otros
            documentos administrativos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Planillas de cálculo
            </p>

            Permiten organizar información, realizar cálculos y analizar
            datos mediante tablas y funciones.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Aplicaciones de comunicación
            </p>

            Permiten utilizar el correo electrónico, videollamadas
            y otras herramientas de comunicación.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Herramientas de gestión
            </p>

            Permiten administrar información relacionada con clientes,
            proveedores, productos, ventas u otras actividades de una
            organización.
          </div>

        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Instalar únicamente los programas necesarios.</li>
          <li>Descargar software desde fuentes confiables.</li>
          <li>Verificar los requisitos del sistema antes de instalar.</li>
          <li>Leer las opciones del asistente de instalación.</li>
          <li>Evitar instalar programas adicionales innecesarios.</li>
          <li>Mantener los programas actualizados.</li>
          <li>Desinstalar aplicaciones que ya no sean necesarias.</li>
          <li>No instalar software sin autorización en equipos de una organización.</li>
          <li>Realizar copias de seguridad de información importante.</li>
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
            Investigar qué requisitos necesita un programa de oficina
            para funcionar correctamente en una computadora.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Buscar un programa gratuito en su sitio web oficial y
            analizar qué información debe verificarse antes de descargarlo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Revisar la lista de programas instalados en la computadora
            e identificar cuáles son utilizados habitualmente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Identificar qué programas serían necesarios para realizar
            tareas administrativas en una oficina.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Explicar por qué no es recomendable descargar programas
            desde sitios web desconocidos.
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
          computadora nueva que debe prepararse para realizar tareas
          administrativas.
          <br /><br />

          Debes elaborar un plan de instalación de software que contemple:

          <br /><br />

          ✔ Identificar qué programas son necesarios. <br />
          ✔ Verificar los requisitos de cada programa. <br />
          ✔ Buscar las fuentes oficiales de descarga. <br />
          ✔ Comprobar que exista espacio suficiente en el disco. <br />
          ✔ Instalar los programas necesarios. <br />
          ✔ Configurar los accesos directos correspondientes. <br />
          ✔ Comprobar que cada aplicación funcione correctamente. <br />
          ✔ Mantener actualizado el software instalado.
          <br /><br />

          Finalmente, explica qué medidas de seguridad aplicarías para
          evitar instalar programas maliciosos o innecesarios y por qué
          es importante instalar únicamente el software autorizado en
          una computadora utilizada para tareas administrativas.
        </div>
      </section>

    </div>
  );
}