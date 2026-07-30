export default function ExploradorArchivosPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Explorador de Archivos de Windows
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El Explorador de archivos es una herramienta fundamental de Windows
          que permite administrar la información almacenada en la computadora.
          <br /><br />
          Desde esta aplicación es posible acceder a archivos y carpetas,
          organizar documentos, copiar y mover información, cambiar nombres,
          eliminar elementos y buscar archivos.
          <br /><br />
          En un entorno administrativo, conocer el funcionamiento del
          Explorador de archivos es fundamental para mantener organizada
          la información y trabajar de manera eficiente.
        </p>
      </section>

      {/* ¿Qué es? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el Explorador de Archivos?
        </h2>

        <div className="border p-6 rounded-xl">
          El <strong>Explorador de archivos</strong> es una aplicación
          incluida en Windows que permite navegar y administrar los
          archivos y carpetas almacenados en diferentes ubicaciones.
          <br /><br />
          Se puede utilizar para acceder al disco interno de la computadora,
          unidades externas, dispositivos USB y ubicaciones de red.
          <br /><br />
          También permite realizar diferentes operaciones para organizar
          y administrar la información digital.
        </div>
      </section>

      {/* Abrir explorador */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Abrir el Explorador de Archivos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Existen diferentes formas de acceder al Explorador de archivos.
          Algunas de las más utilizadas son:
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="mb-2">
            <strong>Desde la barra de tareas</strong>
          </p>
          Hacer clic en el icono del Explorador de archivos ubicado en
          la barra de tareas.

          <br /><br />

          <p className="mb-2">
            <strong>Desde el menú Inicio</strong>
          </p>
          Abrir el menú Inicio y buscar "Explorador de archivos".

          <br /><br />

          <p className="mb-2">
            <strong>Mediante un acceso directo</strong>
          </p>
          Utilizar un acceso directo ubicado en el escritorio o en otra
          ubicación del sistema.

          <br /><br />

          <p className="mb-2">
            <strong>Con el teclado</strong>
          </p>
          Utilizar la combinación de teclas
          <strong> Windows + E</strong>.

        </div>
      </section>

      {/* Interfaz */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Interfaz del Explorador de Archivos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La ventana del Explorador de archivos está formada por diferentes
          elementos que permiten navegar por las ubicaciones y administrar
          la información.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Barra de navegación
            </p>

            Permite desplazarse entre diferentes ubicaciones y acceder
            a carpetas y unidades disponibles en el equipo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Panel de navegación
            </p>

            Se encuentra generalmente en el lateral de la ventana y
            permite acceder rápidamente a diferentes ubicaciones,
            carpetas y unidades.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Área de contenido
            </p>

            Muestra los archivos y carpetas que se encuentran dentro
            de la ubicación seleccionada.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Barra de direcciones
            </p>

            Muestra la ubicación actual y permite navegar hacia otras
            carpetas o ubicaciones.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Cuadro de búsqueda
            </p>

            Permite buscar archivos y carpetas dentro de la ubicación
            seleccionada.
          </div>

        </div>
      </section>

      {/* Archivos y carpetas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Archivos y Carpetas
        </h2>

        <div className="border p-6 rounded-xl">
          Los <strong>archivos</strong> contienen información digital,
          como documentos, imágenes, videos, audios o planillas de cálculo.
          <br /><br />
          Las <strong>carpetas</strong> permiten organizar y agrupar
          archivos y otras carpetas para facilitar su administración.
          <br /><br />
          Una estructura de carpetas correctamente organizada permite
          encontrar la información de manera rápida y evita la acumulación
          desordenada de documentos.
        </div>

        <div className="border p-6 rounded-xl mt-6">

          <p className="mb-2">
            <strong>Ejemplo de organización administrativa</strong>
          </p>

          <p className="mt-4">
            📁 Documentación
          </p>

          <p className="ml-6">
            📁 Clientes
          </p>

          <p className="ml-12">
            📄 Lista-clientes.xlsx
          </p>

          <p className="ml-6">
            📁 Proveedores
          </p>

          <p className="ml-12">
            📄 Proveedores.xlsx
          </p>

          <p className="ml-6">
            📁 Informes
          </p>

          <p className="ml-12">
            📄 Informe-mensual.docx
          </p>

        </div>
      </section>

      {/* Crear carpetas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear Carpetas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Crear carpetas permite organizar la información de acuerdo con
          diferentes criterios, como tipo de documento, fecha, cliente,
          proyecto o área de trabajo.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="mb-4">
            Para crear una carpeta:
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>Abrir el Explorador de archivos.</li>
            <li>Ingresar a la ubicación donde se desea crear la carpeta.</li>
            <li>Seleccionar la opción para crear una nueva carpeta.</li>
            <li>Escribir un nombre descriptivo.</li>
            <li>Presionar Enter para confirmar.</li>
          </ol>

        </div>
      </section>

      {/* Renombrar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cambiar el Nombre de Archivos y Carpetas
        </h2>

        <div className="border p-6 rounded-xl">
          Cambiar el nombre de un archivo o carpeta permite utilizar
          nombres más claros y descriptivos.
          <br /><br />

          Para cambiar el nombre se puede seleccionar el elemento y
          utilizar la opción correspondiente del menú contextual o
          utilizar la tecla <strong>F2</strong>.
          <br /><br />

          Es recomendable utilizar nombres claros que permitan identificar
          fácilmente el contenido del archivo.
        </div>
      </section>

      {/* Copiar y mover */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Copiar y Mover Archivos
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-2">
            <strong>Copiar</strong>
          </p>

          Copiar un archivo significa crear una nueva copia del mismo
          elemento en otra ubicación. El archivo original permanece
          en su ubicación inicial.

          <br /><br />

          <p className="mb-2">
            <strong>Mover</strong>
          </p>

          Mover un archivo significa cambiarlo de ubicación.
          El elemento deja de encontrarse en la carpeta original
          y pasa a la nueva ubicación.

          <br /><br />

          <p className="mb-2">
            <strong>Atajos de teclado</strong>
          </p>

          <strong>Ctrl + C</strong> permite copiar un elemento.
          <br />
          <strong>Ctrl + X</strong> permite cortar un elemento para moverlo.
          <br />
          <strong>Ctrl + V</strong> permite pegar el elemento en otra ubicación.

        </div>
      </section>

      {/* Eliminar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Eliminar Archivos y Carpetas
        </h2>

        <div className="border p-6 rounded-xl">
          Los archivos y carpetas que ya no son necesarios pueden
          eliminarse para liberar espacio y mantener organizada la
          información.
          <br /><br />
          Normalmente, los elementos eliminados se trasladan a la
          <strong> Papelera de reciclaje</strong>, desde donde pueden
          recuperarse o eliminarse definitivamente.
          <br /><br />
          Antes de eliminar un archivo es importante verificar que
          realmente no sea necesario y que no contenga información
          importante.
        </div>
      </section>

      {/* Buscar archivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buscar Archivos y Carpetas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El Explorador de archivos permite buscar información cuando
          no conocemos exactamente dónde se encuentra almacenada.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          Para realizar una búsqueda:

          <br /><br />

          <ol className="list-decimal list-inside space-y-3">
            <li>Abrir el Explorador de archivos.</li>
            <li>Seleccionar la ubicación donde se desea buscar.</li>
            <li>Utilizar el cuadro de búsqueda.</li>
            <li>Escribir el nombre del archivo o una palabra relacionada.</li>
            <li>Revisar los resultados obtenidos.</li>
          </ol>

          <br />

          La búsqueda resulta especialmente útil cuando una computadora
          contiene una gran cantidad de documentos.
        </div>
      </section>

      {/* Extensiones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Extensiones de Archivos
        </h2>

        <div className="border p-6 rounded-xl">
          La extensión de un archivo permite identificar el tipo de
          contenido que almacena y, generalmente, el programa asociado
          para abrirlo.
          <br /><br />

          Algunos ejemplos son:

          <ul className="list-disc list-inside space-y-3 mt-6">
            <li><strong>.docx</strong> – Documentos de Word.</li>
            <li><strong>.xlsx</strong> – Planillas de Excel.</li>
            <li><strong>.pptx</strong> – Presentaciones.</li>
            <li><strong>.pdf</strong> – Documentos en formato PDF.</li>
            <li><strong>.jpg</strong> – Imágenes.</li>
            <li><strong>.png</strong> – Imágenes.</li>
            <li><strong>.mp3</strong> – Archivos de audio.</li>
            <li><strong>.mp4</strong> – Archivos de video.</li>
          </ul>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas para Organizar Archivos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una correcta organización de los archivos permite mejorar la
          productividad y facilita el acceso a la información.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Crear carpetas según el tipo de información.</li>
          <li>Utilizar nombres claros y descriptivos.</li>
          <li>Evitar guardar todos los archivos en el escritorio.</li>
          <li>Eliminar documentos innecesarios.</li>
          <li>Realizar copias de seguridad de información importante.</li>
          <li>Organizar los documentos por fecha o categoría cuando sea necesario.</li>
          <li>Evitar nombres demasiado largos o confusos.</li>
          <li>Revisar periódicamente la organización de las carpetas.</li>
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
            Abrir el Explorador de archivos y localizar la unidad donde
            se encuentra instalado el sistema operativo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Crear una carpeta llamada "Trabajo Administrativo" y dentro
            de ella crear las carpetas "Clientes", "Proveedores",
            "Informes" y "Documentos".
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Crear un documento de texto y guardarlo dentro de la carpeta
            "Documentos". Luego cambiar su nombre utilizando un nombre
            descriptivo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Practicar las operaciones de copiar, mover y eliminar archivos
            utilizando las carpetas creadas anteriormente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Utilizar el buscador del Explorador de archivos para encontrar
            un documento almacenado en la computadora.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imagina que comienzas a trabajar como auxiliar administrativo
          en una empresa y debes organizar la documentación digital
          de una oficina.
          <br /><br />

          Crea una estructura de carpetas que permita organizar
          correctamente la información.
          <br /><br />

          La estructura deberá incluir:

          <br /><br />

          ✔ Una carpeta principal para la documentación de la empresa. <br />
          ✔ Una carpeta para clientes. <br />
          ✔ Una carpeta para proveedores. <br />
          ✔ Una carpeta para informes. <br />
          ✔ Una carpeta para documentos administrativos. <br />
          ✔ Una carpeta para archivos temporales o pendientes.
          <br /><br />

          Luego, crea algunos archivos de ejemplo y organiza cada uno
          en la carpeta correspondiente.
          <br /><br />

          Finalmente, explica qué criterios utilizaste para organizar
          la información y por qué una estructura ordenada de carpetas
          es importante para el trabajo administrativo.
        </div>
      </section>

    </div>
  );
}