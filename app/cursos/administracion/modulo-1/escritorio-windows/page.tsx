export default function EscritorioWindowsPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          El Escritorio de Windows
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El escritorio de Windows es el espacio principal que aparece
          después de iniciar sesión en la computadora. Desde este entorno
          el usuario puede acceder a programas, archivos, carpetas y
          diferentes herramientas del sistema operativo.
          <br /><br />
          Conocer los elementos del escritorio permite trabajar de manera
          más rápida y organizada, especialmente en un entorno administrativo
          donde es necesario acceder constantemente a documentos y
          aplicaciones.
        </p>
      </section>

      {/* ¿Qué es el escritorio? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el Escritorio?
        </h2>

        <div className="border p-6 rounded-xl">
          El <strong>Escritorio de Windows</strong> es el área de trabajo
          principal del sistema operativo.
          <br /><br />
          En él se encuentran diferentes elementos que permiten acceder
          rápidamente a programas, archivos, carpetas y funciones del
          sistema.
          <br /><br />
          El escritorio puede personalizarse de acuerdo con las preferencias
          del usuario y también permite organizar accesos directos para
          facilitar el trabajo diario.
        </div>
      </section>

      {/* Elementos principales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos Principales del Escritorio
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El escritorio está formado por diferentes elementos que cumplen
          funciones específicas y permiten interactuar con el sistema
          operativo.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Fondo de escritorio
            </p>

            Es la imagen o color que se muestra como fondo del escritorio.
            Puede personalizarse utilizando imágenes disponibles en el
            sistema o fotografías seleccionadas por el usuario.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Iconos
            </p>

            Los iconos son representaciones gráficas que permiten acceder
            a programas, archivos, carpetas o funciones del sistema.
            <br /><br />
            Algunos iconos representan elementos almacenados directamente
            en el escritorio, mientras que otros funcionan como accesos
            directos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Barra de tareas
            </p>

            La barra de tareas permite acceder rápidamente a diferentes
            funciones del sistema y administrar las aplicaciones que se
            encuentran abiertas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Menú Inicio
            </p>

            El menú Inicio permite acceder a las aplicaciones instaladas,
            realizar búsquedas y acceder a diferentes opciones y
            herramientas de Windows.
          </div>

        </div>
      </section>

      {/* Iconos y accesos directos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Iconos y Accesos Directos
        </h2>

        <div className="border p-6 rounded-xl">
          Los <strong>iconos</strong> permiten identificar visualmente
          diferentes elementos del sistema.
          <br /><br />
          Un <strong>acceso directo</strong> es un enlace que permite
          acceder rápidamente a un archivo, carpeta, programa o recurso
          sin necesidad de buscarlo en su ubicación original.
          <br /><br />
          Los accesos directos suelen utilizarse para facilitar el acceso
          a los programas y archivos que se utilizan con mayor frecuencia.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Permiten acceder rápidamente a programas.</li>
          <li>Facilitan el acceso a carpetas utilizadas frecuentemente.</li>
          <li>Permiten abrir documentos de manera rápida.</li>
          <li>Ayudan a organizar el espacio de trabajo.</li>
        </ul>
      </section>

      {/* Barra de tareas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          La Barra de Tareas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La barra de tareas es uno de los elementos más importantes de
          la interfaz de Windows. Permite acceder a aplicaciones y
          administrar los programas que se encuentran abiertos.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="mb-2">
            <strong>Botón Inicio</strong>
          </p>
          Permite abrir el menú Inicio y acceder a diferentes aplicaciones
          y funciones del sistema.

          <br /><br />

          <p className="mb-2">
            <strong>Aplicaciones</strong>
          </p>
          Permite acceder a los programas instalados y visualizar cuáles
          aplicaciones se encuentran abiertas.

          <br /><br />

          <p className="mb-2">
            <strong>Área de notificaciones</strong>
          </p>
          Muestra información relacionada con diferentes funciones del
          sistema, como conexión de red, volumen y estado de determinados
          servicios.

          <br /><br />

          <p className="mb-2">
            <strong>Reloj y fecha</strong>
          </p>
          Permite consultar la hora y fecha configuradas en el sistema.

        </div>
      </section>

      {/* Menú inicio */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          El Menú Inicio
        </h2>

        <div className="border p-6 rounded-xl">
          El <strong>menú Inicio</strong> es una herramienta central de
          Windows que permite acceder a las aplicaciones y funciones
          disponibles en la computadora.
          <br /><br />
          Desde este menú se pueden buscar programas, acceder a aplicaciones
          instaladas y utilizar diferentes herramientas del sistema.
          <br /><br />
          También permite acceder a las opciones relacionadas con la cuenta
          de usuario y las acciones de apagado o reinicio de la computadora.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Buscar programas y archivos.</li>
          <li>Abrir aplicaciones instaladas.</li>
          <li>Acceder a herramientas del sistema.</li>
          <li>Consultar diferentes opciones de configuración.</li>
          <li>Bloquear, cerrar sesión o apagar el equipo.</li>
        </ul>
      </section>

      {/* Ventanas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Las Ventanas de Windows
        </h2>

        <div className="border p-6 rounded-xl">
          Windows utiliza un sistema de ventanas para organizar las
          aplicaciones y documentos que se encuentran abiertos.
          <br /><br />
          Cada ventana puede contener diferentes elementos y permite
          trabajar con una aplicación determinada.
          <br /><br />
          Las ventanas pueden cambiar de tamaño, moverse por la pantalla
          y minimizarse cuando no se necesitan utilizar temporalmente.
        </div>

        <div className="border p-6 rounded-xl mt-6">

          <p className="mb-2">
            <strong>Minimizar</strong>
          </p>
          Oculta temporalmente la ventana y permite continuar utilizando
          el programa desde la barra de tareas.

          <br /><br />

          <p className="mb-2">
            <strong>Maximizar</strong>
          </p>
          Amplía la ventana para ocupar el espacio disponible en la pantalla.

          <br /><br />

          <p className="mb-2">
            <strong>Restaurar</strong>
          </p>
          Permite devolver una ventana maximizada a un tamaño más pequeño.

          <br /><br />

          <p className="mb-2">
            <strong>Cerrar</strong>
          </p>
          Finaliza la ventana y cierra el programa o documento correspondiente.

        </div>
      </section>

      {/* Organización del escritorio */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización del Escritorio
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Mantener organizado el escritorio permite encontrar rápidamente
          los programas y archivos utilizados con frecuencia.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Utilizar accesos directos para programas frecuentes.</li>
          <li>Evitar acumular archivos innecesarios en el escritorio.</li>
          <li>Organizar los documentos dentro de carpetas.</li>
          <li>Utilizar nombres claros para archivos y carpetas.</li>
          <li>Eliminar accesos directos que ya no sean necesarios.</li>
          <li>Mantener una estructura ordenada para facilitar el trabajo.</li>
        </ul>

        <div className="border p-6 rounded-xl mt-6">
          Una buena práctica consiste en utilizar el escritorio como un
          espacio de acceso rápido y no como un lugar para almacenar
          permanentemente todos los documentos de trabajo.
        </div>
      </section>

      {/* Personalización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Personalización del Escritorio
        </h2>

        <div className="border p-6 rounded-xl">
          Windows permite modificar diferentes aspectos visuales del
          escritorio para adaptarlo a las preferencias del usuario.
          <br /><br />
          Se pueden personalizar elementos como el fondo de pantalla,
          los colores y diferentes opciones de apariencia.
          <br /><br />
          La personalización puede mejorar la comodidad y facilitar la
          identificación visual de los elementos utilizados habitualmente.
        </div>
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
            Identificar en el escritorio de tu computadora los siguientes
            elementos: fondo, iconos, barra de tareas y menú Inicio.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Crear un acceso directo en el escritorio para un programa que
            utilices habitualmente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Abrir dos programas diferentes y practicar las acciones de
            minimizar, maximizar, restaurar y cerrar las ventanas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Organizar los accesos directos del escritorio y eliminar
            aquellos que ya no sean necesarios.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imagina que comienzas a trabajar en una oficina administrativa
          y recibes una computadora que utilizarás diariamente.
          <br /><br />

          Tu objetivo es preparar el escritorio para trabajar de manera
          rápida y organizada.
          <br /><br />

          Realiza las siguientes tareas:

          <br /><br />

          ✔ Crear accesos directos para los programas que utilizarás con
          mayor frecuencia. <br />
          ✔ Organizar los elementos del escritorio. <br />
          ✔ Identificar las principales funciones de la barra de tareas. <br />
          ✔ Abrir diferentes programas y practicar el uso de las ventanas. <br />
          ✔ Buscar una aplicación utilizando el menú Inicio. <br />
          ✔ Personalizar el fondo del escritorio.
          <br /><br />

          Finalmente, explica qué cambios realizaste y de qué manera
          contribuyen a mejorar tu productividad en el trabajo administrativo.
        </div>
      </section>

    </div>
  );
}