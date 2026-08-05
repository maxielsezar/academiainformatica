export default function CrearAbrirGuardarPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Crear, Abrir y Guardar Documentos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Una de las tareas más importantes al utilizar un procesador de textos
          consiste en crear nuevos documentos, abrir archivos existentes y
          guardar correctamente el trabajo realizado.
          <br /><br />
          Conocer estas operaciones permite trabajar de forma organizada,
          evitar la pérdida de información y mantener los documentos disponibles
          para futuras modificaciones o consultas.
        </p>
      </section>

      {/* Crear documentos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear un Documento Nuevo
        </h2>

        <div className="border p-6 rounded-xl">
          Crear un documento significa comenzar un archivo desde cero para
          redactar un nuevo contenido.
          <br /><br />
          Generalmente esta opción se encuentra en el menú <strong>Archivo</strong>,
          seleccionando <strong>Nuevo</strong>, o mediante el atajo
          <strong> Ctrl + N</strong>.
          <br /><br />
          Al crear un documento nuevo se abre una página en blanco lista para
          comenzar a escribir.
        </div>
      </section>

      {/* Abrir documentos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Abrir un Documento Existente
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Abrir un documento permite continuar trabajando sobre un archivo que
          ya fue creado anteriormente.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Pasos generales:
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>Seleccionar <strong>Archivo → Abrir</strong>.</li>
            <li>Buscar la carpeta donde se encuentra el documento.</li>
            <li>Seleccionar el archivo.</li>
            <li>Presionar <strong>Abrir</strong>.</li>
          </ol>

        </div>
      </section>

      {/* Guardar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Guardar un Documento
        </h2>

        <div className="border p-6 rounded-xl">
          Guardar un documento significa almacenar el trabajo realizado para
          poder utilizarlo posteriormente.
          <br /><br />
          La primera vez que se guarda un archivo es necesario indicar:
          <br /><br />

          <ul className="list-disc list-inside space-y-2">
            <li>El nombre del documento.</li>
            <li>La carpeta donde será almacenado.</li>
            <li>El formato del archivo.</li>
          </ul>

          <br />

          Una vez guardado, las modificaciones posteriores pueden almacenarse
          utilizando simplemente la opción <strong>Guardar</strong> o el atajo
          <strong> Ctrl + S</strong>.
        </div>
      </section>

      {/* Guardar como */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Guardar Como
        </h2>

        <div className="border p-6 rounded-xl">
          La opción <strong>Guardar como</strong> permite crear una nueva copia
          del documento con un nombre, ubicación o formato diferente.
          <br /><br />
          Es especialmente útil cuando se desea conservar el archivo original
          y generar una nueva versión para realizar modificaciones.
        </div>
      </section>

      {/* Formatos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formatos de Archivo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los documentos pueden guardarse utilizando distintos formatos según
          el uso que se les dará.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">DOCX</p>
            Formato utilizado por Microsoft Word. Permite seguir editando el
            documento posteriormente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">ODT</p>
            Formato utilizado por LibreOffice Writer y otros programas libres.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">PDF</p>
            Formato pensado para compartir o imprimir documentos sin modificar
            su diseño original.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">TXT</p>
            Archivo de texto plano que no conserva formatos ni imágenes.
          </div>

        </div>
      </section>

      {/* Organización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización de los Documentos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Guardar correctamente los documentos facilita encontrarlos cuando
          vuelvan a ser necesarios.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Crear carpetas según el tipo de documento.</li>
          <li>Utilizar nombres descriptivos.</li>
          <li>Evitar nombres como "Documento1" o "Nuevo".</li>
          <li>Guardar versiones actualizadas cuando sea necesario.</li>
          <li>Mantener una estructura ordenada de carpetas.</li>
        </ul>
      </section>

      {/* Guardado automático */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Guardado Automático
        </h2>

        <div className="border p-6 rounded-xl">
          Muchos procesadores de textos incorporan funciones de guardado
          automático que almacenan periódicamente los cambios realizados.
          <br /><br />
          Aunque esta función ofrece mayor seguridad, es recomendable guardar
          manualmente el documento con frecuencia utilizando <strong>Ctrl + G</strong>.
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Guardar el documento apenas se comienza a trabajar.</li>
          <li>Utilizar nombres claros y descriptivos.</li>
          <li>Guardar periódicamente durante la edición.</li>
          <li>Organizar los documentos en carpetas.</li>
          <li>Crear copias de seguridad de archivos importantes.</li>
          <li>Elegir el formato adecuado según el destino del documento.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Crear un documento nuevo y escribir un breve texto de presentación
            personal.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Guardar el documento con tu nombre dentro de una carpeta llamada
            <strong> Documentos del Curso</strong>.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Abrir nuevamente el documento, agregar un nuevo párrafo y volver
            a guardarlo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Utilizar <strong>Guardar como</strong> para crear una segunda versión
            del documento con otro nombre.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imagina que trabajas en una empresa y debes redactar una nota para un
          cliente.
          <br /><br />
          Crea un documento nuevo, escribe el contenido, guárdalo con un nombre
          descriptivo dentro de una carpeta correspondiente al cliente y luego
          genera una segunda versión utilizando la opción
          <strong> Guardar como</strong>. Finalmente, exporta el documento en
          formato PDF para enviarlo por correo electrónico.
        </div>
      </section>

    </div>
  );
}
