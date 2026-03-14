export default function ExportarPDFPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Guardar y Exportar en PDF
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Además de guardar documentos en formato de Word, también es posible
          exportarlos como archivos PDF. El formato PDF permite compartir
          documentos sin que se modifique su diseño, lo que lo hace ideal
          para enviar trabajos, formularios o documentos oficiales.
        </p>
      </section>

      {/* Qué es PDF */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Archivo PDF?
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="mb-3">
            PDF significa <strong>Portable Document Format</strong>. Es un
            formato de archivo que mantiene el diseño del documento sin
            importar el dispositivo o programa utilizado para abrirlo.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Conserva el formato del documento.</li>
            <li>Se puede abrir en casi cualquier dispositivo.</li>
            <li>Es ideal para compartir archivos.</li>
            <li>Se utiliza mucho para documentos oficiales.</li>
          </ul>
        </div>
      </section>

      {/* Diferencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencia entre DOCX y PDF
        </h2>

        <div className="border rounded-xl overflow-hidden max-w-xl">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3 font-semibold">Formato</th>
                <th className="p-3 font-semibold">Uso</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-3">DOCX</td>
                <td className="p-3">Permite editar el documento en Word.</td>
              </tr>

              <tr>
                <td className="p-3">PDF</td>
                <td className="p-3">Se utiliza para compartir o imprimir documentos.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Cómo exportar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Guardar un Documento en PDF
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Hacer clic en <strong>Archivo</strong>.</li>
            <li>Seleccionar <strong>Guardar como</strong>.</li>
            <li>Elegir la carpeta donde se guardará el documento.</li>
            <li>En el tipo de archivo seleccionar <strong>PDF</strong>.</li>
            <li>Hacer clic en <strong>Guardar</strong>.</li>
          </ol>
        </div>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de Usar PDF
        </h2>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-2">
            <li>El documento no se modifica fácilmente.</li>
            <li>Se puede abrir en cualquier computadora o celular.</li>
            <li>Mantiene el diseño original.</li>
            <li>Es ideal para enviar documentos por correo electrónico.</li>
          </ul>
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
            Abre un documento de Word y guárdalo en formato PDF.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Abre el archivo PDF que creaste para verificar que el formato
            del documento se mantuvo correctamente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Comparte el archivo PDF con un compañero o profesor.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Explica con tus palabras la diferencia entre un archivo DOCX
            y un archivo PDF.
          </div>

        </div>
      </section>

    </div>
  );
}