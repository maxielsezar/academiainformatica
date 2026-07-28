export default function ComprimirArchivosPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Comprimir Archivos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Comprimir archivos significa reducir el tamaño de uno o varios archivos
          para que ocupen menos espacio en el almacenamiento. Esto permite
          guardarlos de manera más eficiente o enviarlos más fácilmente por
          internet.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Cuando se comprimen archivos, el sistema utiliza algoritmos que eliminan
          información repetida o reorganizan los datos para que ocupen menos
          espacio.
        </p>
      </section>

      {/* Para qué sirve */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Para qué sirve comprimir archivos?
        </h2>

        <ul className="list-disc list-inside space-y-2 max-w-3xl">
          <li>Ahorrar espacio en el disco.</li>
          <li>Enviar archivos más rápido por internet.</li>
          <li>Agrupar varios archivos en uno solo.</li>
          <li>Facilitar el envío por correo electrónico.</li>
        </ul>
      </section>

      {/* Formatos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formatos de compresión más comunes
        </h2>

        <div className="border rounded-xl overflow-hidden max-w-3xl">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3 font-semibold">Formato</th>
                <th className="p-3 font-semibold">Descripción</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-3">.ZIP</td>
                <td className="p-3">
                  Es el formato de compresión más común y es compatible
                  con la mayoría de los sistemas operativos.
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-3">.RAR</td>
                <td className="p-3">
                  Ofrece una compresión más eficiente pero generalmente
                  requiere programas especiales para abrirlo.
                </td>
              </tr>

              <tr>
                <td className="p-3">.7Z</td>
                <td className="p-3">
                  Formato moderno que permite una compresión muy alta
                  utilizando programas como 7-Zip.
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>

      {/* Cómo comprimir en Windows */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo comprimir archivos en Windows
        </h2>

        <ol className="list-decimal list-inside space-y-2 max-w-3xl">
          <li>Selecciona el archivo o carpeta.</li>
          <li>Haz clic derecho sobre el archivo.</li>
          <li>Selecciona la opción <strong>"Enviar a"</strong>.</li>
          <li>Haz clic en <strong>"Carpeta comprimida (ZIP)"</strong>.</li>
        </ol>

        <p className="max-w-3xl mt-4">
          El sistema creará un nuevo archivo comprimido con extensión
          <strong> .zip</strong>.
        </p>
      </section>

      {/* Descomprimir */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Descomprimir archivos
        </h2>

        <p className="max-w-3xl mb-4">
          Para utilizar los archivos dentro de un archivo comprimido es
          necesario descomprimirlos.
        </p>

        <ol className="list-decimal list-inside space-y-2 max-w-3xl">
          <li>Haz clic derecho sobre el archivo comprimido.</li>
          <li>Selecciona <strong>"Extraer todo"</strong>.</li>
          <li>Elige la carpeta donde se guardarán los archivos.</li>
        </ol>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Comprime una carpeta con al menos tres archivos dentro.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Envía el archivo comprimido a un compañero.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Descomprime el archivo y verifica que los archivos originales
            se encuentren dentro.
          </div>

        </div>
      </section>

    </div>
  );
}