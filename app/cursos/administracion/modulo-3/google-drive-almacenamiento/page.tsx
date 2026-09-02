export default function GoogleDrivePage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Google Drive
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Google Drive es un servicio de almacenamiento en la nube que permite
          guardar, organizar, consultar y compartir archivos mediante Internet.
          <br /><br />
          Es una herramienta especialmente útil para el trabajo individual y
          grupal, ya que permite acceder a los archivos desde diferentes
          dispositivos y compartir documentos con otras personas.
        </p>
      </section>

      {/* ¿Qué es Google Drive? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es Google Drive?
        </h2>

        <div className="border p-6 rounded-xl">
          Google Drive permite almacenar archivos en servidores remotos,
          evitando que estos dependan exclusivamente del almacenamiento
          disponible en una computadora.
          <br /><br />
          Los archivos pueden organizarse mediante carpetas y accederse
          posteriormente desde cualquier dispositivo que tenga conexión a
          Internet y acceso a la cuenta correspondiente.
        </div>
      </section>

      {/* Acceso */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Acceso a Google Drive
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para utilizar Google Drive es necesario contar con una cuenta de
          Google. Desde el navegador web se puede ingresar al servicio y
          acceder a los archivos almacenados.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          Una vez dentro de Drive, el usuario puede crear carpetas,
          subir archivos, abrir documentos, realizar búsquedas y compartir
          información con otras personas.
        </div>
      </section>

      {/* Subir archivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Subir Archivos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una de las funciones principales de Google Drive es permitir
          cargar archivos desde una computadora hacia el almacenamiento
          en la nube.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Pasos generales:
          </p>

          <p className="mb-3">
            <strong>1.</strong> Ingresar a Google Drive.
          </p>

          <p className="mb-3">
            <strong>2.</strong> Seleccionar la opción para agregar o subir
            archivos.
          </p>

          <p className="mb-3">
            <strong>3.</strong> Seleccionar el archivo almacenado en la
            computadora.
          </p>

          <p>
            <strong>4.</strong> Esperar a que finalice la carga.
          </p>
        </div>
      </section>

      {/* Carpetas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización mediante Carpetas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Al igual que en una computadora, las carpetas permiten organizar
          los archivos almacenados en Drive. Una estructura ordenada facilita
          encontrar rápidamente la información.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-3">
            Ejemplo de organización:
          </p>

          <p>📁 Administración</p>
          <p className="ml-6">📁 Documentos</p>
          <p className="ml-6">📁 Informes</p>
          <p className="ml-6">📁 Facturas</p>
          <p className="ml-6">📁 Recursos</p>
        </div>
      </section>

      {/* Compartir */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Compartir Archivos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Google Drive permite compartir archivos y carpetas con otras
          personas. Esta función facilita el trabajo colaborativo y el
          intercambio de información.
        </p>

        <div className="space-y-4 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold text-blue-900 mb-2">
              Solo lectura
            </p>

            La persona puede consultar el archivo, pero no modificarlo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold text-blue-900 mb-2">
              Comentador
            </p>

            La persona puede consultar el contenido y realizar comentarios
            cuando la herramienta lo permite.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold text-blue-900 mb-2">
              Editor
            </p>

            La persona puede modificar el contenido del archivo.
          </div>

        </div>
      </section>

      {/* Trabajo colaborativo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Trabajo Colaborativo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una de las ventajas de trabajar con archivos almacenados en la nube
          es la posibilidad de compartirlos con integrantes de un equipo.
          Esto permite trabajar sobre la misma información sin necesidad de
          enviar constantemente nuevas copias del archivo.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Compartir documentos con compañeros de trabajo.</li>
          <li>Centralizar información en una ubicación común.</li>
          <li>Facilitar el acceso a documentos desde diferentes dispositivos.</li>
          <li>Evitar múltiples copias desactualizadas de un mismo archivo.</li>
          <li>Organizar información de proyectos y actividades.</li>
        </ul>
      </section>

      {/* Buscar archivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buscar Archivos
        </h2>

        <div className="border p-6 rounded-xl">
          Cuando una cuenta contiene muchos archivos, utilizar el buscador
          de Drive permite localizar rápidamente documentos mediante su
          nombre u otros criterios disponibles.
          <br /><br />
          Para facilitar las búsquedas es recomendable utilizar nombres
          claros y mantener una estructura de carpetas organizada.
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Utilizar nombres claros para los archivos.</li>
          <li>Organizar los documentos mediante carpetas.</li>
          <li>Evitar almacenar archivos innecesarios.</li>
          <li>Revisar periódicamente los archivos almacenados.</li>
          <li>Compartir archivos únicamente con las personas que corresponda.</li>
          <li>Comprobar los permisos antes de compartir información.</li>
        </ul>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en el Ámbito Laboral
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Google Drive puede utilizarse para almacenar y organizar
          documentación de una organización, compartir información con
          compañeros y facilitar el acceso a archivos necesarios para
          diferentes actividades.
          <br /><br />
          Por ejemplo, una oficina puede utilizar carpetas para organizar
          informes, documentos, formularios, recursos y otros archivos
          relacionados con sus actividades.
        </p>
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

            Crear una estructura de carpetas en Google Drive para organizar
            la documentación de una oficina.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Subir tres archivos diferentes a una carpeta y utilizar nombres
            descriptivos para identificarlos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Compartir una carpeta con un compañero y analizar las diferentes
            opciones de permisos disponibles.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imaginá que trabajás en una oficina y necesitás crear un espacio
          compartido para organizar la documentación de un proyecto.
          <br /><br />

          Deberás:
          <br /><br />

          ✔ Crear una carpeta principal para el proyecto. <br />
          ✔ Crear subcarpetas para organizar los diferentes documentos. <br />
          ✔ Subir archivos a las carpetas correspondientes. <br />
          ✔ Utilizar nombres claros y descriptivos. <br />
          ✔ Compartir la carpeta con los integrantes del equipo. <br />
          ✔ Revisar los permisos asignados a cada persona.
        </div>
      </section>

    </div>
  );
}