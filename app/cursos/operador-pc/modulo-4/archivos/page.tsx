export default function AdjuntarDescargarArchivosPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Adjuntar y Descargar Archivos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Una de las funciones más utilizadas en Internet es la posibilidad de
          compartir archivos. Podemos enviar documentos, imágenes, videos y otros
          archivos mediante correo electrónico, plataformas educativas, servicios
          de almacenamiento en la nube y aplicaciones de mensajería.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender a adjuntar archivos en distintos servicios web y descargar
          información de Internet de manera segura.
        </p>
      </section>

      {/* Qué es adjuntar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué Significa Adjuntar un Archivo?
        </h2>

        <p className="max-w-3xl">
          Adjuntar un archivo significa incluir uno o más documentos dentro de un
          correo electrónico o formulario para enviarlos junto con el mensaje.
        </p>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Archivos Comunes
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Tipo</th>
                <th className="border px-4 py-2">Extensión</th>
                <th className="border px-4 py-2">Ejemplo</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Documento</td>
                <td className="border px-4 py-2">.docx</td>
                <td className="border px-4 py-2">Trabajo práctico</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">PDF</td>
                <td className="border px-4 py-2">.pdf</td>
                <td className="border px-4 py-2">Manual o guía</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Imagen</td>
                <td className="border px-4 py-2">.jpg, .png</td>
                <td className="border px-4 py-2">Fotografía</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Video</td>
                <td className="border px-4 py-2">.mp4</td>
                <td className="border px-4 py-2">Presentación grabada</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Planilla</td>
                <td className="border px-4 py-2">.xlsx</td>
                <td className="border px-4 py-2">Archivo de Excel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Adjuntar correo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Adjuntar un Archivo en un Correo Electrónico
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Crear un nuevo correo.</li>
            <li>Hacer clic en el ícono del clip.</li>
            <li>Buscar el archivo en la computadora.</li>
            <li>Seleccionar el archivo.</li>
            <li>Esperar que finalice la carga.</li>
            <li>Enviar el mensaje.</li>
          </ol>
        </div>
      </section>

      {/* Descargar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es Descargar un Archivo?
        </h2>

        <p className="max-w-3xl">
          Descargar significa copiar un archivo desde Internet hacia nuestro
          dispositivo para poder utilizarlo posteriormente.
        </p>
      </section>

      {/* Pasos descarga */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Pasos para Descargar un Archivo
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Localizar el enlace o botón de descarga.</li>
            <li>Hacer clic en "Descargar".</li>
            <li>Elegir la ubicación de guardado si es necesario.</li>
            <li>Esperar que termine la descarga.</li>
            <li>Abrir el archivo desde la carpeta Descargas.</li>
          </ol>
        </div>
      </section>

      {/* Carpeta descargas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Carpeta Descargas
        </h2>

        <p className="max-w-3xl">
          Por defecto, la mayoría de los navegadores guardan los archivos en la
          carpeta <strong>Descargas</strong> del sistema operativo. Es importante
          conocer esta ubicación para encontrar rápidamente los archivos descargados.
        </p>
      </section>

      {/* Seguridad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recomendaciones de Seguridad
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Descargar archivos únicamente de sitios confiables.</li>
          <li>No abrir archivos de remitentes desconocidos.</li>
          <li>Verificar la extensión del archivo.</li>
          <li>Mantener actualizado el antivirus.</li>
          <li>Analizar archivos sospechosos antes de abrirlos.</li>
        </ul>
      </section>

      {/* Tamaño */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Limitaciones de Tamaño
        </h2>

        <div className="border p-6 rounded-xl">
          <p>
            Muchos servicios de correo electrónico limitan el tamaño de los
            archivos adjuntos. Cuando un archivo es demasiado grande, suele ser
            necesario utilizar servicios de almacenamiento en la nube como
            Google Drive o OneDrive.
          </p>
        </div>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Crea un documento de texto y adjúntalo a un correo electrónico.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Descarga un archivo PDF desde Internet y guárdalo en la carpeta Descargas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Identifica tres tipos de archivos diferentes almacenados en tu computadora.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Envía una imagen y un documento adjuntos en un mismo correo electrónico.
          </div>

        </div>
      </section>

    </div>
  );
}